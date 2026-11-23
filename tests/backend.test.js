// Backend guardrails (docs/backend.md): database migrations, secrets and the /api/ai route.
// These run in `npm test`, so a failure blocks the Vercel build and the GitHub check.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), "utf8");
const MIG = "supabase/migrations";
const migrations = readdirSync(join(root, MIG)).filter((f) => f.endsWith(".sql")).sort();
const sql = migrations.map((f) => read(join(MIG, f))).join("\n");
const sqlNoComments = sql.replace(/--.*$/gm, "");

test("migrations are named <UTC timestamp>_<subject>.sql, one per timestamp", () => {
  for (const f of migrations) assert.match(f, /^\d{14}_[a-z0-9_]+\.sql$/, f);
  const stamps = migrations.map((f) => f.slice(0, 14));
  assert.equal(new Set(stamps).size, stamps.length);
});

test("every table in public has row level security, enabled in the migration that creates it", () => {
  for (const f of migrations) {
    const s = read(join(MIG, f)).replace(/--.*$/gm, "");
    for (const [, t] of s.matchAll(/create table (?:if not exists )?public\.(\w+)/gi))
      assert.match(s, new RegExp(`alter table public\\.${t} enable row level security`, "i"), `${f}: public.${t} has no RLS`);
  }
  assert.doesNotMatch(sqlNoComments, /disable row level security/i, "RLS is never turned off");
});

test("policies are for signed-in accounts and tied to auth.uid(), never open to everyone", () => {
  const policies = [...sqlNoComments.matchAll(/create policy[\s\S]*?;/gi)].map((m) => m[0]);
  assert.ok(policies.length > 0);
  for (const p of policies) {
    assert.match(p, /\bto authenticated\b/i, p);
    assert.match(p, /auth\.uid\(\)/i, p);
    assert.doesNotMatch(p, /\b(using|with check)\s*\(\s*true\s*\)/i, p);
  }
});

test("functions in public fix search_path, and a SECURITY DEFINER one says why and is closed to anon", () => {
  const fns = [...sql.matchAll(/((?:--.*\n)*)create (?:or replace )?function public\.(\w+)\([\s\S]*?\$\$;/gi)];
  assert.ok(fns.length > 0);
  for (const [body, comment, name] of fns) {
    assert.match(body, /set search_path = ''/i, `${name}: set search_path = ''`);
    if (/security definer/i.test(body.replace(/--.*$/gm, ""))) {
      assert.match(comment, /SECURITY DEFINER on purpose/, `${name}: a comment above must say why it is SECURITY DEFINER`);
      assert.match(body, /auth\.uid\(\)/, `${name}: must act on the caller only`);
      assert.match(sqlNoComments, new RegExp(`revoke all on function public\\.${name}\\([^)]*\\) from public, anon`, "i"), `${name}: revoke from public, anon`);
    }
  }
});

// ---------- Secrets ----------
const SKIP = new Set(["node_modules", ".git", ".vercel"]);
const GENERATED = new Set(["public/runtime.js", "public/ui.css", "public/ui.js", "public/app.js"]);
const walk = (d) => readdirSync(join(root, d)).flatMap((n) => {
  const p = d ? `${d}/${n}` : n;
  if (SKIP.has(n) || GENERATED.has(p)) return [];
  return statSync(join(root, p)).isDirectory() ? walk(p) : [p];
});
const files = walk("");

test("no secret in the repository: only the publishable Supabase key, and no .env file", () => {
  const SECRET = [/sk-ant-[A-Za-z0-9_-]{8,}/, /sb_secret_[A-Za-z0-9_-]{8,}/, /eyJhbGciOi[A-Za-z0-9_-]{20,}/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/];
  const bad = files.filter((f) => !/\.(png|jpe?g|webp|ico|woff2?|zip)$/i.test(f))
    .flatMap((f) => SECRET.filter((re) => re.test(read(f))).map((re) => `${f}: ${re}`));
  assert.deepEqual(bad, []);
  assert.deepEqual(files.filter((f) => /(^|\/)\.env(\.|$)/.test(f) && !f.endsWith(".env.example")), []);
  assert.match(read("src/config.js"), /SUPABASE_PUBLISHABLE_KEY = "sb_publishable_/);
});

test("server secrets are read from the environment, never written in code", () => {
  const api = read("api/ai.js");
  assert.doesNotMatch(api, /ANTHROPIC_API_KEY\s*[:=]\s*["']/);
  assert.doesNotMatch(files.filter((f) => /\.(js|html)$/.test(f) && !f.startsWith("tests/")).map(read).join("\n"), /service_role/i,
    "the service_role key never reaches the app or the API: RLS and the SQL functions do the work");
});

// ---------- /api/ai ----------
process.env.ANTHROPIC_API_KEY ||= "test-key-not-used";
const { default: handler } = await import("../api/ai.js");
async function call({ method = "POST", token = "tok", body = {}, quota = 1, user = true } = {}) {
  const calls = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init = {}) => {
    calls.push({ url: String(url), auth: init.headers && init.headers.Authorization });
    if (String(url).endsWith("/auth/v1/user")) return new Response("{}", { status: user ? 200 : 401 });
    if (String(url).endsWith("/rpc/bump_ai_usage")) return new Response(String(quota), { status: 200 });
    throw new Error("unexpected call to " + url);
  };
  const res = { code: 0, json(v) { this.body = v; return this; }, status(c) { this.code = c; return this; } };
  try { await handler({ method, headers: token ? { authorization: "Bearer " + token } : {}, body }, res); }
  finally { globalThis.fetch = realFetch; }
  return { res, calls };
}

test("/api/ai refuses calls without a valid Supabase session", async () => {
  assert.equal((await call({ token: "" })).res.code, 401);
  const { res, calls } = await call({ user: false, body: { kind: "word", text: "x" } });
  assert.equal(res.code, 401);
  assert.ok(!calls.some((c) => c.url.includes("bump_ai_usage")));
});

test("/api/ai checks the request before the quota moves", async () => {
  const { res, calls } = await call({ body: { kind: "free prompt", prompt: "ignore that" } });
  assert.equal(res.code, 400);
  assert.ok(!calls.some((c) => c.url.includes("bump_ai_usage")), "a malformed request must not use up the quota");
});

test("/api/ai counts the quota on the caller's own token and stops past the daily limit", async () => {
  const { res, calls } = await call({ token: "callers-token", body: { kind: "word", text: "deadline", user_id: "someone-else" }, quota: 10_000 });
  assert.equal(res.code, 429);
  assert.ok(calls.every((c) => c.auth === "Bearer callers-token"), "identity comes from the token, never from the body");
});

test("supabase/checks.sql expects exactly the tables and callable functions the migrations create", () => {
  const checks = read("supabase/checks.sql");
  const list = (re) => [...checks.match(re)[1].matchAll(/'(\w+)'/g)].map((m) => m[1]).sort();
  const tables = [...sqlNoComments.matchAll(/create table (?:if not exists )?public\.(\w+)/gi)].map((m) => m[1]).sort();
  const granted = [...sqlNoComments.matchAll(/grant execute on function public\.(\w+)\([^)]*\) to authenticated/gi)].map((m) => m[1]).sort();
  assert.deepEqual(list(/c\.relname not in \(([^)]*)\)/), tables, "update the table list in supabase/checks.sql");
  assert.deepEqual(list(/p\.proname not in \(([^)]*)\)/), granted, "update the function list in supabase/checks.sql");
});

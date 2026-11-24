// The AI teacher for the app: the rules live in core.js (shared with the old site's api/ai.js);
// this file only plugs them into a Supabase Edge Function. Secret: ANTHROPIC_API_KEY (Edge Functions › Secrets).
import Anthropic from "@anthropic-ai/sdk";
import { answer } from "./core.js";

const URL = Deno.env.get("SUPABASE_URL") ?? "";
// The project's publishable key, provided by Supabase to every function (safe: RLS applies).
const KEY = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") ?? "{}").default ?? "";

const supabase = (path: string, token: string, init: RequestInit = {}) =>
  fetch(URL + path, {
    ...init,
    headers: { apikey: KEY, Authorization: "Bearer " + token, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  let body: unknown = null;
  if (req.method === "POST") body = await req.json().catch(() => null); // a body that is not JSON is refused as "kind"
  const out = await answer(
    { method: req.method, authorization: req.headers.get("Authorization"), body },
    { env: Deno.env.toObject(), supabase, anthropic: () => new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY") }) },
  );
  return Response.json(out.body, { status: out.status });
});

// Builds web/public/app.js: web/src/app/main.js and the modules it imports, bundled and minified by esbuild.
import { build } from "esbuild";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const result = await build({
  entryPoints: ["web/src/app/main.js"], bundle: true, format: "iife", target: "es2020", minify: true,
  legalComments: "none", outfile: "web/public/app.js", metafile: true, logLevel: "warning",
});
// A file of web/src/app that nothing imports would silently drop out of the app.
const list = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? list(join(d, e.name)) : [join(d, e.name)]));
const used = new Set(Object.keys(result.metafile.inputs));
const unused = list("web/src/app").filter((f) => f.endsWith(".js") && !used.has(f));
if (unused.length) throw new Error("Not imported by web/src/app/main.js (directly or not): " + unused.join(", "));
const out = result.metafile.outputs["web/public/app.js"];
console.log(`web/public/app.js ${Math.round(out.bytes / 1024)} KB from ${used.size} modules`);

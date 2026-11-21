// Builds public/app.js: the app's files from src/app, joined in the order of src/app/order.json, then minified.
// They are classic scripts sharing one global scope, exactly like the former inline <script> of index.html,
// so top-level names stay global (esbuild's transform keeps them when it minifies).
import { readFileSync, writeFileSync } from "node:fs";
import { transform } from "esbuild";

const order = JSON.parse(readFileSync("src/app/order.json", "utf8"));
const source = order.map((f) => `// ${f}\n` + readFileSync(`src/app/${f}`, "utf8")).join("");
const { code } = await transform(source, { minify: true, target: "es2020", legalComments: "none" });
writeFileSync("public/app.js", code);
console.log(`public/app.js ${Math.round(code.length / 1024)} KB from ${order.length} files (${Math.round(source.length / 1024)} KB source)`);

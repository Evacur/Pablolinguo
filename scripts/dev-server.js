// Local preview: serves public/ and runs api/ai.js like Vercel does. `npm run dev`
import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import handler from "../api/ai.js";

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json" };
const PORT = Number(process.env.PORT || 3000);

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname === "/api/ai") {
      let raw = "";
      for await (const c of req) raw += c;
      req.body = raw ? JSON.parse(raw) : {};
      res.status = (n) => ((res.statusCode = n), res);
      res.json = (o) => (res.setHeader("Content-Type", "application/json"), res.end(JSON.stringify(o)));
      return handler(req, res);
    }
    const path = normalize(url.pathname === "/" ? "/index.html" : url.pathname).replace(/^(\.\.[/\\])+/, "");
    try {
      const body = await readFile(join("public", path));
      res.writeHead(200, { "Content-Type": TYPES[extname(path)] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404).end("not found");
    }
  })
  .listen(PORT, () => console.log("http://localhost:" + PORT));

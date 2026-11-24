// The content packs (shared/content/*.js) are browser scripts that write to window.PACKS and window.LANGS.
// In React Native there is no window: point it at the global object before they run.
// Imported first by content.ts, on its own line, so it runs before the packs.
const g = globalThis as unknown as { window?: unknown };
if (!g.window) g.window = globalThis;
export {};

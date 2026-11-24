// The AI teacher for the old site (the app calls the Supabase Edge Function): the rules live in
// supabase/functions/ai/core.js; this file only plugs them into Vercel.
import Anthropic from "@anthropic-ai/sdk";
import { answer } from "../supabase/functions/ai/core.js";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "../shared/config.js";

const supabase = (path, token, init = {}) =>
  fetch(SUPABASE_URL + path, {
    ...init,
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: "Bearer " + token, "Content-Type": "application/json" },
  });

export default async function handler(req, res) {
  const out = await answer(
    { method: req.method, authorization: req.headers.authorization, body: req.body },
    { env: process.env, supabase, anthropic: () => new Anthropic() },
  );
  return res.status(out.status).json(out.body);
}

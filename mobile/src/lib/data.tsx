// The signed-in account and its documents, shared by every screen.
// Reads go through the web app's store (src/store.js): same table, same document ids, same merge when two
// devices write at once. So the phone and the web app show the same progress.
import type { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { createStore } from "../../../src/store.js";
import { streakOf } from "../../../src/app/lib/streak.js";
import { supabase } from "./supabase";
import { LANGS, packOf, type Pack } from "./content";
import type { Srs } from "./words";

type Doc = Record<string, unknown>;
type Store = Awaited<ReturnType<typeof createStore>>;
type Snap = { exists: boolean; data: () => unknown };
type CollSnap = { docs: { id: string; data: () => unknown }[] };
export type SkillState = { m?: number };
export type Profile = { lang?: string; levels?: Record<string, string>; name?: string; avatar?: { e: string; c: string } };
type Progress = { days?: Record<string, { a?: number; xp?: number; q?: string[] }> };

export type Account = {
  session: Session;
  store: Store;
  profile: Profile;
  lang: string;
  pack: Pack;
  level: string;
  skills: Record<string, SkillState>;
  srs: Srs;
  streak: number;
  todayQuests: string[];
  setLang: (code: string) => Promise<void>;
};

type State =
  | { status: "loading" }
  | { status: "signed-out" }
  | { status: "error"; retry: () => void }
  | { status: "ready"; account: Account };

const Ctx = createContext<State>({ status: "loading" });
export const useAccount = () => useContext(Ctx);

export const today = () => new Date().toLocaleDateString("en-CA");
// The web app keeps English under the original ids, other languages with their code (src/app/data/packs.js).
const srsPath = (c: string) => (c === "en" ? "vocab/srs" : "vocab/srs_" + c);
const progPath = (c: string) => (c === "en" ? "me/progress" : "me/progress_" + c);

const asObj = (v: unknown): Doc => (v && typeof v === "object" && !Array.isArray(v) ? (v as Doc) : {});

export function AccountProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [store, setStore] = useState<Store | null>(null);
  const [failed, setFailed] = useState(0); // a counter: retrying bumps it and loads again
  const [loadError, setLoadError] = useState(false);
  const [profile, setProfile] = useState<Profile>({});
  const [skills, setSkills] = useState<Record<string, SkillState>>({});
  const [progress, setProgress] = useState<Record<string, Progress>>({});
  const [srs, setSrs] = useState<Record<string, Srs>>({});

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const userId = session?.user.id;
  useEffect(() => {
    setStore(null);
    setLoadError(false);
    if (!userId) return;
    let live = true;
    createStore(supabase, userId).then(
      (s) => live && setStore(s),
      () => live && setLoadError(true),
    );
    return () => {
      live = false;
    };
  }, [userId, failed]);

  useEffect(() => {
    if (!store) return;
    const offs = [
      store.doc("me/profile").onSnapshot((s: Snap) => setProfile(s.exists ? (asObj(s.data()) as Profile) : {})),
      store.collection("skills").onSnapshot((s: CollSnap) => {
        const o: Record<string, SkillState> = {};
        s.docs.forEach((d) => (o[d.id] = asObj(d.data()) as SkillState));
        setSkills(o);
      }),
      ...LANGS.map((l) =>
        store.doc(progPath(l.code)).onSnapshot((s: Snap) =>
          setProgress((p) => ({ ...p, [l.code]: s.exists ? (asObj(s.data()) as Progress) : {} })),
        ),
      ),
      ...LANGS.map((l) =>
        store.doc(srsPath(l.code)).onSnapshot((s: Snap) =>
          setSrs((p) => ({ ...p, [l.code]: s.exists ? (asObj(asObj(s.data()).w) as Srs) : {} })),
        ),
      ),
    ];
    return () => offs.forEach((off: () => void) => off());
  }, [store]);

  const state = useMemo<State>(() => {
    if (session === undefined) return { status: "loading" };
    if (!session) return { status: "signed-out" };
    if (loadError) return { status: "error", retry: () => setFailed((n) => n + 1) };
    if (!store) return { status: "loading" };
    const lang = LANGS.some((l) => l.code === profile.lang) ? (profile.lang as string) : "en";
    const pack = packOf(lang);
    const day = (progress[lang]?.days ?? {})[today()];
    const account: Account = {
      session,
      store,
      profile,
      lang,
      pack,
      level: profile.levels?.[lang] ?? "A2",
      skills,
      srs: srs[lang] ?? {},
      streak: streakOf(Object.values(progress), today()),
      todayQuests: day?.q ?? [],
      // Only the language changes: the other fields of the profile are kept as they are.
      setLang: async (code) => {
        const ref = store.doc("me/profile");
        if ((await ref.get()).exists) await ref.update({ lang: code });
        else await ref.set({ lang: code, levels: {} });
      },
    };
    return { status: "ready", account };
  }, [session, store, loadError, profile, skills, progress, srs]);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

// Mastery dots of a grammar point (0 to 3), as the web app saves them.
export const dotsOf = (skills: Record<string, SkillState>, id: string) => skills[id]?.m ?? 0;

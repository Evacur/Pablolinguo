// The signed-in account and its documents, shared by every screen.
// Reads go through the web app's store (src/store.js): same table, same document ids, same merge when two
// devices write at once. So the phone and the web app show the same progress.
import type { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createStore } from "../../../src/store.js";
import { streakOf } from "../../../src/app/lib/streak.js";
import { afterAnswer, afterTest, passed } from "../../../src/app/lib/mastery.js";
import { supabase } from "./supabase";
import { LANGS, packOf, type Pack } from "./content";
import type { Seen } from "./session";
import type { Srs } from "./words";

type Doc = Record<string, unknown>;
type Store = Awaited<ReturnType<typeof createStore>>;
type Snap = { exists: boolean; data: () => unknown };
type CollSnap = { docs: { id: string; data: () => unknown }[] };
export type SkillState = { m?: number };
export type Profile = { lang?: string; levels?: Record<string, string>; level?: string; name?: string; avatar?: { e: string; c: string } };
type Progress = { days?: Record<string, { a?: number; xp?: number; q?: string[] }> };

export type MyWord = { id: string; en: string; fr: string; tip?: string; example?: string; lang?: string; added?: string };

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
  seen: Seen;
  myWords: MyWord[]; // the learner's own words, in the language being learnt, newest first
  situations: Record<string, number>; // best score (%) of each situation test passed
  hasLevel: boolean;
  saveFailed: boolean;
  setLevel: (level: string) => void;
  addMyWord: (w: { en: string; fr: string; tip?: string; example?: string }) => void;
  deleteMyWord: (id: string) => void;
  setLang: (code: string) => Promise<void>;
  setIdentity: (name: string, avatar: { e: string; c: string }) => void;
  // Writes go one after the other, each reading the latest version when its turn comes (as the web app, audit R4).
  recordAnswer: (item: { skill: string; key: string }, ok: boolean, inTest: boolean) => void;
  recordTest: (skill: string, score: number, total: number) => boolean;
  recordSituation: (id: string, score: number, total: number) => boolean;
  markDay: (quest?: string) => void;
  reviewWord: (key: string, ok: boolean) => void;
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

const INTERVALS = [0, 1, 3, 7, 14, 30]; // days before a word comes back, by box (src/app/screens/words.js)
const addDays = (d: string, n: number) => {
  const x = new Date(d + "T12:00:00");
  x.setDate(x.getDate() + n);
  return x.toLocaleDateString("en-CA");
};
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
  const [seen, setSeen] = useState<Record<string, Seen>>({});
  const [myWords, setMyWords] = useState<MyWord[]>([]);
  const [situations, setSituations] = useState<Record<string, Record<string, number>>>({});
  const [saveFailed, setSaveFailed] = useState(false);
  const queue = useRef<Promise<void>>(Promise.resolve());

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
      store.collection("mywords").onSnapshot((s: CollSnap) =>
        setMyWords(
          s.docs
            .map((d) => ({ ...(asObj(d.data()) as Omit<MyWord, "id">), id: d.id }))
            .sort((x, y) => String(y.added ?? "").localeCompare(String(x.added ?? ""))),
        ),
      ),
      ...LANGS.map((l) =>
        store.doc("situations/" + l.code).onSnapshot((s: Snap) =>
          setSituations((p) => ({ ...p, [l.code]: s.exists ? (asObj(asObj(s.data()).d) as Record<string, number>) : {} })),
        ),
      ),
      ...LANGS.map((l) =>
        store.doc("seen/" + l.code).onSnapshot((s: Snap) =>
          setSeen((p) => ({ ...p, [l.code]: s.exists ? (asObj(asObj(s.data()).k) as Seen) : {} })),
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
    // Profiles saved before languages existed keep the English level in `level` (src/app/connect.js).
    const savedLevel = profile.levels?.[lang] ?? (lang === "en" ? profile.level : undefined);
    const day = (progress[lang]?.days ?? {})[today()];
    const write = (job: () => Promise<void>) => {
      queue.current = queue.current.then(job).then(
        () => setSaveFailed(false),
        () => setSaveFailed(true), // shown on the screen: the answer counts on this phone but is not saved yet
      );
    };
    const read = async (path: string) => {
      const g = await store.doc(path).get();
      return g.exists ? asObj(g.data()) : null;
    };
    // Merges a patch into a document, or creates it.
    const patch = async (path: string, data: Doc) => {
      const ref = store.doc(path);
      if ((await ref.get()).exists) await ref.update(data);
      else await ref.set(data);
    };
    const saveSkill = (id: string, next: (cur: unknown) => Doc) =>
      write(async () => {
        const cur = next(await read("skills/" + id));
        cur.last = today();
        await store.doc("skills/" + id).set(cur);
      });
    // The day counts for the streak (a), and a mission is ticked when given (src/app/data/writes.js: markDay).
    const bumpDay = (extra: (d: { a?: number; q?: string[]; wv?: number }) => void) =>
      write(async () => {
        const k = today();
        const p = (await read(progPath(lang))) as Progress | null;
        const d = { q: [] as string[], ...((p?.days ?? {})[k] ?? {}) } as { a?: number; q: string[]; wv?: number };
        d.a = (d.a ?? 0) + 1;
        extra(d);
        await patch(progPath(lang), { days: { [k]: d } });
      });
    const account: Account = {
      session,
      store,
      profile,
      lang,
      pack,
      level: savedLevel ?? "A2",
      skills,
      srs: srs[lang] ?? {},
      streak: streakOf(Object.values(progress), today()),
      todayQuests: day?.q ?? [],
      seen: seen[lang] ?? {},
      myWords: myWords.filter((m) => (m.lang ?? "en") === lang),
      situations: situations[lang] ?? {},
      hasLevel: !!savedLevel,
      saveFailed,
      // The level of the language being learnt; the other languages keep theirs.
      setLevel: (level) => write(() => patch("me/profile", { lang, levels: { [lang]: level } })),
      // Same document as the web app's « Mes mots » (mywords/<id>, with its language and the day it was added).
      addMyWord: (w) => {
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
        const cut = (v: string | undefined, n: number) => String(v ?? "").slice(0, n); // same bounds as the web app
        write(() => store.doc("mywords/" + id).set({ en: cut(w.en, 80), fr: cut(w.fr, 80), tip: cut(w.tip, 160), example: cut(w.example, 160), lang, added: today() }));
      },
      deleteMyWord: (id) => write(() => store.doc("mywords/" + id).delete()),
      recordAnswer: (item, ok, inTest) => {
        saveSkill(item.skill, (cur) => afterAnswer(cur, ok, inTest));
        write(() => patch("seen/" + lang, { k: { [item.key]: { d: today(), ok } } }));
      },
      recordTest: (skill, score, total) => {
        saveSkill(skill, (cur) => {
          const c = afterTest(cur, score, total);
          if (passed(score, total)) c.pd = today(); // day of the last pass
          return c;
        });
        return passed(score, total);
      },
      // A situation is validated at 8/10; its best score is kept (src/app/screens/cours/index.js: situationTestDone).
      recordSituation: (id, score, total) => {
        const ok = passed(score, total);
        const pct = Math.round((score / total) * 100);
        if (ok)
          write(async () => {
            const d = asObj((await read("situations/" + lang))?.d) as Record<string, number>;
            if ((d[id] ?? 0) >= pct) return;
            await store.doc("situations/" + lang).set({ d: { ...d, [id]: pct } });
          });
        return ok;
      },
      markDay: (quest) =>
        bumpDay((d) => {
          if (quest && !d.q!.includes(quest)) d.q = [...d.q!, quest];
        }),
      // Same boxes and intervals as the web app: right = next box, wrong = back to box 0, due today.
      reviewWord: (key, ok) => {
        write(async () => {
          const all = asObj((await read(srsPath(lang)))?.w) as Srs;
          const cur = all[key] ? { ...all[key] } : { b: 0, ok: 0, ko: 0, due: today() };
          if (ok) {
            cur.b = Math.min(5, cur.b + 1);
            cur.ok++;
            cur.due = addDays(today(), INTERVALS[cur.b]);
          } else {
            cur.b = 0;
            cur.ko++;
            cur.due = today();
          }
          await patch(srsPath(lang), { w: { [key]: cur } });
        });
        bumpDay((d) => {
          d.wv = (d.wv ?? 0) + 1;
          if (d.wv >= 10 && !d.q!.includes("words")) d.q = [...d.q!, "words"];
        });
      },
      // Same fields as the web app's profile pages (name: 40 characters at most).
      setIdentity: (name, avatar) => write(() => patch("me/profile", { name: name.trim().slice(0, 40), avatar })),
      // Only the language changes: the other fields of the profile are kept as they are.
      setLang: async (code) => {
        const ref = store.doc("me/profile");
        if ((await ref.get()).exists) await ref.update({ lang: code });
        else await ref.set({ lang: code, levels: {} });
      },
    };
    return { status: "ready", account };
  }, [session, store, loadError, profile, skills, progress, srs, seen, myWords, situations, saveFailed]);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

// Mastery dots of a grammar point (0 to 3), as the web app saves them.
export const dotsOf = (skills: Record<string, SkillState>, id: string) => skills[id]?.m ?? 0;

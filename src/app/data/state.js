// ---------- State ----------
export const S = { avatar:{e:"grin",c:"sun"}, theme: document.documentElement.dataset.theme==="dark"? "dark" : "light", email:"", skills:{}, progress:{xp:0, days:{}}, badges:{}, lang:null, levels:{}, profileLoaded:false, name:"", db:null, writable:true };
export const PROG_BY = {}; // progress doc per language code

// Values several screens read and change (a module cannot reassign another module's variable).
export const state = {
  // screens/words.js
  SRS: {},
  srsLoaded: false,
  MY: [],
  MY_ALL: [],
  VQ: null,
  themeSel: null,
  SAMPLE: null,
  // screens/train/trainer.js
  SEEN: {},
  T: null,
  // screens/cours/index.js
  coursSel: null,
  coursTab: "gram",
  trainTab: "sessions", // S'entraîner: sessions, themes, gram or boss
  gramSel: null,
  homeOpen: null, // the plan step opened by hand on the home screen
  // screens/profile.js
  onbMode: null,
  // screens/cours/listen.js
  listenSel: null,
  listenAns: {},
  listenChecked: false,
  // lib/voice.js
  DICT: null,
  TTS: null,
  // app.js
  RT: null,
};

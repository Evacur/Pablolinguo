// ---------- State ----------
const S = { avatar:{e:"grin",c:"sun"}, theme: document.documentElement.dataset.theme==="dark"? "dark" : "light", email:"", skills:{}, progress:{xp:0, days:{}}, badges:{}, lang:null, levels:{}, profileLoaded:false, name:"", db:null, writable:true };
const PROG_BY = {}; // progress doc per language code


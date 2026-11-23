// ---------- Grammar points by level, with their drill sentences ----------
export const QUESTS = [
 {id:"drill", t:"Une séance de 10 phrases", auto:"train"},
 {id:"words", t:"Réviser 10 mots", auto:"words"},
 {id:"cours", t:"Lire une fiche", auto:"cours"},
 {id:"aloud", t:"Lire 5 phrases à voix haute"}
];
export const LV = ["A1","A2","B1","B2","C1","C2"];
// A word tagged with a level is for learners of that level and above; a word without a level fits everyone.
export const fitsLevel = (wordLv, learnerLv) => !wordLv || LV.indexOf(wordLv) <= LV.indexOf(learnerLv);
export const LV_INFO = {
 A1:["Débutant","Te présenter, parler de toi et de ce que tu aimes."],
 A2:["Élémentaire","Le quotidien, le passé simple, les achats et les trajets."],
 B1:["Intermédiaire","Raconter, donner ton avis, te débrouiller en voyage."],
 B2:["Avancé","Discuter vraiment, travailler dans la langue, nuancer."],
 C1:["Autonome","T'exprimer avec aisance et précision, même sur un sujet complexe."],
 C2:["Maîtrise","La finesse d'un natif : idiomes, registre, style."]
};


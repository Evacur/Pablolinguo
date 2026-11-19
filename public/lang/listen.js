// Listening extracts (Cours › Écoute). One entry per extract; ids must never change (they key the saved progress).
// media: {type:"video", src} | {type:"youtube", id} | {type:"tts", lines:[[speaker, text], …]}
// q: {k:"mcq", q, o:[…], a:index, why} | {k:"tf", q, a:true|false, why} | {k:"gap", q:"… ___ …", a:["answer", …], why}
// VOA material is in the public domain and must be credited (learningenglish.voanews.com/p/6021.html).
window.LISTEN = {
en: [
 {id:"voa-lle1-01", lvl:"A1", t:"Welcome!", theme:"Se présenter", dur:"3 min",
  media:{type:"video", src:"https://voa-video-ns.akamaized.net/pangeavideo/2021/02/5/5f/5f00c78a-0f84-41e6-949d-bd808bcadf50.mp4"},
  credit:"VOA Learning English · Let's Learn English, leçon 1", link:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-one/3111026.html",
  sum:"Anna arrive à son nouvel appartement. Elle rencontre Pete, ils se présentent, il lui demande comment s'écrit son prénom (avec deux n), puis lui souhaite la bienvenue au 1400 Irving Street.",
  q:[
   {k:"mcq", q:"Comment s'appelle la nouvelle arrivante ?", o:["Anna","Anne","Hannah"], a:0, why:"Elle dit son prénom et l'épelle : Anna, avec deux n."},
   {k:"tf", q:"Pete et Anna se connaissaient déjà.", a:false, why:"Ils se présentent : c'est leur première rencontre."},
   {k:"mcq", q:"Que demande Pete à Anna ?", o:["Comment s'écrit son prénom","Quel âge elle a","D'où elle vient"], a:0, why:"Il lui demande comment on écrit « Anna »."},
   {k:"mcq", q:"Où se passe la scène ?", o:["Devant son nouvel appartement","Dans un café","À son travail"], a:0, why:"Pete lui souhaite la bienvenue au 1400 Irving Street, son nouvel appartement."},
   {k:"gap", q:"Nice to ___ you.", a:["meet"], why:"Nice to meet you = enchanté(e), la formule quand on se rencontre."}
  ]}
],
es: [
 {id:"pl-es-a1-cafe", lvl:"A1", t:"En la cafetería", theme:"Commander", dur:"1 min",
  media:{type:"tts", lines:[
   ["Camarero","¡Hola! Buenos días. ¿Qué quieres tomar?"],
   ["Lucía","Buenos días. Un café con leche, por favor."],
   ["Camarero","¿Grande o pequeño?"],
   ["Lucía","Pequeño. Y una tostada con tomate."],
   ["Camarero","Muy bien. ¿Algo más?"],
   ["Lucía","No, gracias. ¿Cuánto es?"],
   ["Camarero","Son tres euros cincuenta."],
   ["Lucía","Aquí tienes. ¡Gracias, adiós!"]]},
  credit:"Dialogue Pablolinguo, lu par la voix de ton navigateur",
  sum:"Lucía commande un petit café au lait et une tartine à la tomate, puis paie 3,50 €.",
  q:[
   {k:"mcq", q:"Que boit Lucía ?", o:["Un café au lait","Un thé","Un jus d'orange"], a:0, why:"« Un café con leche, por favor. »"},
   {k:"mcq", q:"Elle le prend de quelle taille ?", o:["Petit","Grand"], a:0, why:"« ¿Grande o pequeño? » « Pequeño. »"},
   {k:"tf", q:"Elle mange aussi quelque chose.", a:true, why:"Elle prend « una tostada con tomate », une tartine à la tomate."},
   {k:"mcq", q:"Combien ça coûte ?", o:["3,50 €","3,15 €","13,50 €"], a:0, why:"« Son tres euros cincuenta » : trois euros cinquante."},
   {k:"gap", q:"Un café con ___, por favor.", a:["leche"], why:"la leche = le lait. Un café con leche = un café au lait."}
  ]}
]
};

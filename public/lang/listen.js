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

// Own dialogues read by the voice of the browser, until real videos are added for these levels.
window.LISTEN.es.push(
  {id:"pl-es-a2-finde", lvl:"A2", t:"El fin de semana", theme:"Raconter son week-end", dur:"1 min",
   media:{type:"tts", lines:[
    ["Marta","Hola, Javi. ¿Qué tal el fin de semana?"],
    ["Javi","Muy bien. El sábado fui a la montaña con mi hermano."],
    ["Marta","¡Qué bien! ¿Escalasteis?"],
    ["Javi","Sí, escalamos toda la mañana. Después comimos en un pueblo pequeño."],
    ["Marta","¿Y el domingo?"],
    ["Javi","El domingo me quedé en casa. Llovió todo el día. ¿Y tú?"],
    ["Marta","Yo trabajé el sábado, pero el domingo fui al cine con unas amigas."],
    ["Javi","¿Qué película visteis?"],
    ["Marta","Una comedia francesa. Me reí mucho."]]},
   credit:"Dialogue Pablolinguo, lu par la voix de ton navigateur",
   sum:"Javi a fait de l'escalade samedi avec son frère et il est resté chez lui dimanche sous la pluie. Marta a travaillé samedi et elle a vu une comédie française dimanche.",
   q:[
    {k:"mcq", q:"Avec qui Javi est-il allé à la montagne ?", o:["Son frère","Sa sœur","Un ami"], a:0, why:"« Fui a la montaña con mi hermano » : el hermano = le frère."},
    {k:"tf", q:"Dimanche, il a fait beau.", a:false, why:"« Llovió todo el día » : il a plu toute la journée."},
    {k:"mcq", q:"Qu'a fait Marta samedi ?", o:["Elle a travaillé","Elle est allée au cinéma","Elle est restée chez elle"], a:0, why:"« Yo trabajé el sábado » : j'ai travaillé samedi. Le cinéma, c'était dimanche."},
    {k:"mcq", q:"Quel film a-t-elle vu ?", o:["Une comédie française","Un film d'action","Un documentaire"], a:0, why:"« Una comedia francesa. Me reí mucho » : j'ai beaucoup ri."},
    {k:"gap", q:"El domingo me ___ en casa.", a:["quedé"], why:"quedarse = rester. Au passé simple : me quedé, je suis resté."}
   ]}
);
window.LISTEN.ru = [
  {id:"pl-ru-a1-znakomstvo", lvl:"A1", t:"Знакомство", theme:"Faire connaissance", dur:"1 min",
   media:{type:"tts", lines:[
    ["Анна","Привет! Меня зовут Анна. А тебя?"],
    ["Марк","Привет, Анна. Меня зовут Марк."],
    ["Анна","Очень приятно. Ты откуда?"],
    ["Марк","Я из Франции, из Лиона. А ты?"],
    ["Анна","Я из Москвы. Ты студент?"],
    ["Марк","Нет, я инженер. Я работаю в Москве. А ты?"],
    ["Анна","Я студентка. Я изучаю французский язык."],
    ["Марк","Здорово! Ты говоришь по-французски?"],
    ["Анна","Немного."]]},
   credit:"Dialogue Pablolinguo, lu par la voix de ton navigateur",
   sum:"Anna, de Moscou, rencontre Marc, un ingénieur de Lyon qui travaille à Moscou. Anna est étudiante et apprend le français, elle le parle un peu.",
   q:[
    {k:"mcq", q:"D'où vient Marc ?", o:["De Lyon","De Paris","De Moscou"], a:0, why:"« Я из Франции, из Лиона » : je viens de France, de Lyon."},
    {k:"tf", q:"Marc est étudiant.", a:false, why:"« Нет, я инженер » : non, je suis ingénieur."},
    {k:"mcq", q:"Que fait Anna ?", o:["Elle est étudiante","Elle est ingénieure","Elle est professeure"], a:0, why:"« Я студентка » : студентка, c'est une étudiante (студент pour un homme)."},
    {k:"mcq", q:"Quelle langue apprend-elle ?", o:["Le français","L'anglais","L'espagnol"], a:0, why:"« Я изучаю французский язык » : j'étudie la langue française."},
    {k:"gap", q:"Меня ___ Анна.", a:["зовут"], why:"Меня зовут… = je m'appelle… Mot à mot : « on m'appelle »."}
   ]},
  {id:"pl-ru-a2-vykhodnye", lvl:"A2", t:"Выходные", theme:"Raconter son week-end", dur:"1 min",
   media:{type:"tts", lines:[
    ["Ольга","Игорь, что ты делал в выходные?"],
    ["Игорь","В субботу я ездил на дачу к родителям."],
    ["Ольга","Далеко?"],
    ["Игорь","Нет, час на электричке. Мы работали в саду, а вечером ели шашлык."],
    ["Ольга","Отлично! А в воскресенье?"],
    ["Игорь","В воскресенье я отдыхал дома и читал книгу. А ты?"],
    ["Ольга","А я ходила в бассейн, а потом мы с сестрой гуляли в парке."],
    ["Игорь","Погода была хорошая?"],
    ["Ольга","Да, было солнечно, но холодно."]]},
   credit:"Dialogue Pablolinguo, lu par la voix de ton navigateur",
   sum:"Igor est allé samedi à la datcha de ses parents en train de banlieue : jardinage, puis chachlik le soir. Dimanche, il a lu chez lui. Olga est allée à la piscine, puis s'est promenée au parc avec sa sœur, sous le soleil mais dans le froid.",
   q:[
    {k:"mcq", q:"Où Igor est-il allé samedi ?", o:["À la datcha de ses parents","À la mer","Chez sa sœur"], a:0, why:"« Я ездил на дачу к родителям » : je suis allé à la datcha, chez mes parents."},
    {k:"mcq", q:"Comment y est-il allé ?", o:["En train de banlieue","En voiture","En bus"], a:0, why:"« Час на электричке » : une heure en электричка, le train de banlieue."},
    {k:"tf", q:"Dimanche, Igor est sorti avec des amis.", a:false, why:"« Я отдыхал дома и читал книгу » : je me suis reposé à la maison et j'ai lu un livre."},
    {k:"mcq", q:"Qu'a fait Olga ?", o:["La piscine, puis une balade au parc","Du jardinage","Le cinéma avec sa sœur"], a:0, why:"« Я ходила в бассейн, а потом мы с сестрой гуляли в парке »."},
    {k:"gap", q:"Было солнечно, но ___.", a:["холодно"], why:"холодно = il fait froid. Au passé : было холодно, il faisait froid."}
   ]}
];

// Russian A2 video; questions written from the transcript Pi pasted (2026-11-19).
window.LISTEN.ru.push(
  {id:"yt-ru-artem-moy-den", lvl:"A2", t:"Мой день", theme:"La journée type", dur:"10 min",
   media:{type:"youtube", id:"_RF-zlNAW2I"}, link:"https://www.youtube.com/watch?v=_RF-zlNAW2I",
   credit:"Russian by Artem, Actually (YouTube)",
   sum:"Artem raconte sa journée. Il se lève à 7 h, prend une douche, s'habille simplement et prend son petit-déjeuner (sandwichs, œufs, thé ou café). À 8 h, il part à pied au bureau, où il arrive à 9 h : mails, lettres, appels, réunions. À midi, il déjeune au café d'à côté, puis se promène un peu. Il finit vers 18 h, rentre souvent à pied, se repose (télé, livre, musique), prépare le dîner à 19 h (pâtes, pommes de terre, légumes) et se couche vers 23 h.",
   q:[
    {k:"mcq", q:"À quelle heure se réveille-t-il ?", o:["À 7 h","À 8 h","À 9 h"], a:0, why:"« Я просыпаюсь в 7:00 утра. » À 8 h, il sort de chez lui, et à 9 h, il arrive au travail."},
    {k:"mcq", q:"Comment va-t-il au travail ?", o:["À pied","En bus","En métro"], a:0, why:"« Я иду на работу пешком » : пешком = à pied. Son travail n'est pas loin, et il aime marcher."},
    {k:"tf", q:"Quand il pleut, il prend un parapluie.", a:true, why:"« Иногда идёт дождь, и тогда я беру зонт » : зонт = le parapluie."},
    {k:"mcq", q:"Que fait-il en premier au bureau ?", o:["Il allume l'ordinateur et lit ses mails","Il va à une réunion","Il boit un café"], a:0, why:"« Сначала я включаю компьютер и проверяю электронную почту. »"},
    {k:"mcq", q:"Où déjeune-t-il, en général ?", o:["Dans un café près du bureau","Chez lui","Dans le parc"], a:0, why:"« Я иду в кафе рядом с офисом » : рядом с = à côté de. Parfois, il apporte son repas de la maison."},
    {k:"tf", q:"Il finit toujours son travail à 18 h.", a:false, why:"« Обычно я заканчиваю работу в 6 вечера. Иногда я остаюсь дольше » : d'habitude, mais parfois il reste plus tard."},
    {k:"gap", q:"Я ложусь ___ около 11 часов вечера.", a:["спать"], why:"ложиться спать = aller se coucher. Я ложусь спать = je me couche."}
   ]}
);

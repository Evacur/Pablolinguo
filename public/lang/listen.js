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

// Real videos, A1 to C1 (added 2026-11-19). Questions written from each video's transcript or article (see link).
// Sources: VOA Learning English and VOA (public domain), and official YouTube channels (videoELE, BBC Learning English, TED-Ed, TED, Easy Spanish, TEDx, BBC News Mundo, DW Español…).
window.LISTEN.en.push(...
[
 {
  "id": "voa-lle1-02",
  "lvl": "A1",
  "t": "Lesson 2: Hello, I'm Anna!",
  "theme": "Se présenter",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/4/42/4298a2ba-d665-4b1c-aaa1-502bbcb9b88d_720p.mp4?cb=edc3e6218"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 2",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-2-hello/3113733.html",
  "sum": "Pete présente Anna, qui arrive à Washington, à son voisin Jonathan. Chacun dit dans quel appartement il habite ; Anna vit avec sa colocataire Marsha, et Pete lui rappelle d'appeler Marsha au travail.",
  "q": [
   {
    "k": "mcq",
    "q": "D'où vient Anna ?",
    "o": [
     "D'une grande ville",
     "D'une petite ville",
     "De Washington"
    ],
    "a": 1,
    "why": "Anna dit : « I am from a small town »."
   },
   {
    "k": "mcq",
    "q": "Dans quel appartement habite Anna ?",
    "o": [
     "B4",
     "D7",
     "C2"
    ],
    "a": 2,
    "why": "Anna habite l'appartement C2 ; elle conclut : « Apartment C2, here I come! »."
   },
   {
    "k": "tf",
    "q": "Jonathan connaît Marsha et la trouve gentille.",
    "a": true,
    "why": "Jonathan dit : « I know Marsha. She is nice. »"
   },
   {
    "k": "mcq",
    "q": "Qui habite l'appartement D7 ?",
    "o": [
     "Pete",
     "Jonathan",
     "Marsha"
    ],
    "a": 0,
    "why": "Pete dit : « And I am in Apartment D7. »"
   },
   {
    "k": "tf",
    "q": "Pete rappelle à Anna d'appeler Marsha à la maison.",
    "a": false,
    "why": "Il dit : « Remember to call Marsha at work » : au travail."
   },
   {
    "k": "gap",
    "q": "« Well, welcome to ___. »",
    "a": [
     "D.C.",
     "DC"
    ],
    "why": "Jonathan accueille Anna : « Well, welcome to D.C. »"
   }
  ]
 },
 {
  "id": "voa-lle1-03",
  "lvl": "A1",
  "t": "Lesson 3: I'm Here!",
  "theme": "Au téléphone",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2016/05/0/02/027f8fdd-e9b0-409c-8618-45be49fcefe8_hq.mp4?cb=ecfb9e14d"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 3",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-3-i-am-here/3126527.html",
  "sum": "Anna est dans son nouvel appartement et veut préparer le dîner. Elle se trompe de numéro, puis joint Marsha au travail, qui lui indique le supermarché au 1500 Irving Street.",
  "q": [
   {
    "k": "mcq",
    "q": "Que veut faire Anna ?",
    "o": [
     "Aller au cinéma",
     "Préparer le dîner",
     "Faire du sport"
    ],
    "a": 1,
    "why": "Anna dit : « I want to cook dinner. »"
   },
   {
    "k": "tf",
    "q": "Au premier appel, Anna tombe directement sur Marsha.",
    "a": false,
    "why": "Un homme répond : « You have the wrong number. »"
   },
   {
    "k": "mcq",
    "q": "Que cherche Anna ?",
    "o": [
     "Une banque",
     "Un restaurant",
     "Un supermarché"
    ],
    "a": 2,
    "why": "Anna dit : « I want to find a supermarket. »"
   },
   {
    "k": "mcq",
    "q": "Où est le supermarché ?",
    "o": [
     "Au 1500 Irving Street",
     "Au 5500 Irving Street",
     "Au 1500 Marsha Street"
    ],
    "a": 0,
    "why": "Marsha : « The supermarket is at 1500 Irving Street. »"
   },
   {
    "k": "tf",
    "q": "À la fin, Anna dit que Marsha la trouve bonne cuisinière.",
    "a": true,
    "why": "Anna : « Marsha says I am a good cook! »"
   },
   {
    "k": "gap",
    "q": "« I am in my new ___! »",
    "a": [
     "apartment"
    ],
    "why": "Anna commence par : « I am in my new apartment! »"
   }
  ]
 },
 {
  "id": "voa-lle1-04",
  "lvl": "A1",
  "t": "Lesson 4: What Is It?",
  "theme": "Les objets",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2016/05/c/c8/c829a13b-9764-4b89-ad70-1edbdc3d8013_hq.mp4?cb=ecfb9e17b"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 4",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-4/3168920.html",
  "sum": "Anna, Pete et Marsha se retrouvent pour un café. Marsha demande un stylo ; Anna fouille son sac et en sort plein d'objets (un gros livre, un oreiller, une carte, une lampe) avant de trouver le stylo.",
  "q": [
   {
    "k": "mcq",
    "q": "Que demande Marsha à Anna ?",
    "o": [
     "Un livre",
     "Un stylo",
     "Une carte"
    ],
    "a": 1,
    "why": "Marsha : « Anna, do you have a pen? »"
   },
   {
    "k": "tf",
    "q": "Anna dit que son nouvel appartement est super.",
    "a": true,
    "why": "Anna : « The new apartment is great! »"
   },
   {
    "k": "mcq",
    "q": "Selon Pete, quel objet est « big » ?",
    "o": [
     "Une lampe",
     "Un oreiller",
     "Un livre"
    ],
    "a": 2,
    "why": "Pete : « It is a big book. »"
   },
   {
    "k": "mcq",
    "q": "Que dit Marsha d'un des objets ?",
    "o": [
     "C'est une carte",
     "C'est un jouet",
     "C'est un oreiller"
    ],
    "a": 0,
    "why": "Marsha : « Anna, it is a map. » (une carte du monde)."
   },
   {
    "k": "tf",
    "q": "Le dernier objet que nomme Pete est une lampe.",
    "a": true,
    "why": "Pete : « And now you have a lamp. »"
   },
   {
    "k": "gap",
    "q": "« I have a pen in my ___. »",
    "a": [
     "bag"
    ],
    "why": "Anna : « I have a pen in my bag. »"
   }
  ]
 },
 {
  "id": "voa-lle1-05",
  "lvl": "A1",
  "t": "Lesson 5: Where Are You?",
  "theme": "La maison",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2016/05/c/ce/ce630bdd-1ffd-4c63-aca7-4bdff50fc7ba_hq.mp4?cb=ed0a575e6"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 5",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-5-where-are-you/3168971.html",
  "sum": "Anna visite une maison avec Marsha et dit ce qu'on fait dans chaque pièce : manger et cuisiner dans la cuisine, se détendre dans le salon, se laver dans la salle de bain, dormir dans la chambre.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment Anna trouve-t-elle la cuisine ?",
    "o": [
     "Petite",
     "Belle",
     "Sale"
    ],
    "a": 1,
    "why": "Anna : « It is a beautiful kitchen! »"
   },
   {
    "k": "mcq",
    "q": "Que fait-on dans le salon, selon Marsha ?",
    "o": [
     "On cuisine",
     "On dort",
     "On se détend"
    ],
    "a": 2,
    "why": "Marsha : « We relax in the living room. »"
   },
   {
    "k": "tf",
    "q": "Anna propose de monter à l'étage.",
    "a": true,
    "why": "Anna : « Marsha, let's go upstairs! »"
   },
   {
    "k": "mcq",
    "q": "Où Anna dit-elle qu'elle dort ?",
    "o": [
     "Dans la chambre",
     "Dans le salon",
     "Dans la cuisine"
    ],
    "a": 0,
    "why": "Anna : « I sleep in the bedroom! »"
   },
   {
    "k": "tf",
    "q": "Marsha dit qu'on cuisine dans le salon.",
    "a": false,
    "why": "Marsha : « We cook in the kitchen. »"
   },
   {
    "k": "gap",
    "q": "« I want to see this ___! »",
    "a": [
     "house"
    ],
    "why": "Anna : « I want to see this house! »"
   }
  ]
 },
 {
  "id": "voa-lle1-06",
  "lvl": "A1",
  "t": "Lesson 6: Where Is the Gym?",
  "theme": "Trouver son chemin",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2016/05/1/17/17b61020-32a1-4021-9575-adbf9ee76979_hq.mp4?cb=ecfb9e2bf"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 6",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-6-where-is-the-gym/3225958.html",
  "sum": "Anna cherche la salle de sport de son immeuble. Pete lui explique le chemin, mais elle arrive d'abord à la salle du courrier, au garage puis sur le toit avant de trouver enfin la salle de sport.",
  "q": [
   {
    "k": "mcq",
    "q": "Que cherche Anna ?",
    "o": [
     "La salle de sport",
     "Le garage",
     "La salle du courrier"
    ],
    "a": 0,
    "why": "Elle demande où est « the gym »."
   },
   {
    "k": "mcq",
    "q": "Selon Pete, la salle de sport est en face de quoi ?",
    "o": [
     "Du garage",
     "Du salon (lounge)",
     "Du toit"
    ],
    "a": 1,
    "why": "Pete : « The gym is across from the lounge. »"
   },
   {
    "k": "tf",
    "q": "La première fois, Anna arrive dans la salle du courrier.",
    "a": true,
    "why": "Pete : « That's right, Anna. This is the mailroom. »"
   },
   {
    "k": "mcq",
    "q": "Plus tard, où Pete dit-il que se trouve la salle de sport ?",
    "o": [
     "Sur le toit",
     "À côté du garage",
     "Derrière le hall (lobby)"
    ],
    "a": 2,
    "why": "Pete : « It is behind the lobby. »"
   },
   {
    "k": "tf",
    "q": "À la fin, Anna accepte de faire du sport avec Pete.",
    "a": false,
    "why": "Pete dit « Join me! » et Anna refuse : « I'm good. »"
   },
   {
    "k": "gap",
    "q": "« This is a parking ___. »",
    "a": [
     "garage"
    ],
    "why": "Anna : « This is a parking garage. »"
   }
  ]
 },
 {
  "id": "voa-lle1-07",
  "lvl": "A1",
  "t": "Lesson 7: What Are You Doing?",
  "theme": "Au bureau",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2016/05/5/54/54ebe82e-9578-4c39-9ca9-42dae639be4f_hq.mp4?cb=ecfb9e2d5"
  },
  "credit": "VOA Learning English · Let's Learn English, leçon 7",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-lesson-7-what-are-you-doing/3240468.html",
  "sum": "Premier jour de travail d'Anna. Sa patronne Caty Weaver lui demande de rencontrer ses collègues : Anne écrit, Jonathan enregistre son émission, Amelia lit le mot du jour. Anna les dérange tous, et la journée se passe mal.",
  "q": [
   {
    "k": "mcq",
    "q": "Qui est Caty Weaver ?",
    "o": [
     "La colocataire d'Anna",
     "La patronne d'Anna",
     "Une voisine"
    ],
    "a": 1,
    "why": "Caty : « I am your boss, Caty Weaver. »"
   },
   {
    "k": "mcq",
    "q": "Que fait Anne quand Anna arrive ?",
    "o": [
     "Elle lit",
     "Elle téléphone",
     "Elle écrit"
    ],
    "a": 2,
    "why": "Anne : « Um, I'm writing. »"
   },
   {
    "k": "tf",
    "q": "Jonathan est en train d'enregistrer son émission.",
    "a": true,
    "why": "Jonathan : « I am doing my show! »"
   },
   {
    "k": "mcq",
    "q": "Quel est le mot du jour lu par Amelia ?",
    "o": [
     "Social",
     "Special",
     "Simple"
    ],
    "a": 0,
    "why": "Amelia lit le mot du jour « social » pour son émission."
   },
   {
    "k": "tf",
    "q": "Anna trouve que sa journée se passe très bien.",
    "a": false,
    "why": "Anna : « This day is not going well. »"
   },
   {
    "k": "gap",
    "q": "« Let's go to my ___ and talk. »",
    "a": [
     "office"
    ],
    "why": "Caty : « Let's go to my office and talk. »"
   }
  ]
 },
 {
  "id": "voa-lle2-01",
  "lvl": "A2",
  "t": "Level 2 Lesson 1: Budget Cuts",
  "theme": "Rumeurs au travail",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/7/7a/7a055fd0-0345-41e4-b24d-37df1736f3d1_720p.mp4?cb=edc3e694c"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 1",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson1/3960391.html",
  "sum": "Un e-mail annonce une réunion importante à The Studio. Une rumeur de coupes budgétaires circule et tout le monde s'inquiète. En réunion, Mme Weaver explique qu'elle ne licenciera personne : elle veut féliciter l'équipe et donner de nouvelles missions.",
  "q": [
   {
    "k": "mcq",
    "q": "Qu'espère Anna en recevant l'e-mail ?",
    "o": [
     "Des vacances",
     "Une augmentation pour tous",
     "Un nouveau bureau"
    ],
    "a": 1,
    "why": "Anna : « Maybe we're all getting raises! »"
   },
   {
    "k": "mcq",
    "q": "De qui vient la rumeur que Jonathan a entendue ?",
    "o": [
     "De Mme Weaver",
     "De Kaveh",
     "De Mark, à la comptabilité"
    ],
    "a": 2,
    "why": "Quand Anna demande qui en parle, Jonathan répond : « Mark in Accounting. »"
   },
   {
    "k": "tf",
    "q": "Anna et Jonathan décident d'arrêter de colporter des ragots.",
    "a": true,
    "why": "Anna : « We shouldn't gossip. » ; Jonathan : « You're right. »"
   },
   {
    "k": "mcq",
    "q": "Quel ancien métier avait Kaveh ?",
    "o": [
     "Professeur",
     "Détective",
     "Comptable"
    ],
    "a": 0,
    "why": "Amelia était détective et Kaveh professeur ; il dit : « High school kids scare me! »"
   },
   {
    "k": "tf",
    "q": "Mme Weaver annonce qu'elle va licencier plusieurs personnes.",
    "a": false,
    "why": "Elle dit : « I'm not going to fire any of you! »"
   },
   {
    "k": "gap",
    "q": "« Update your ___. »",
    "a": [
     "résumé",
     "resume",
     "CV"
    ],
    "why": "Kaveh conseille à Penelope : « Update your résumé. I've already updated mine. »"
   }
  ]
 },
 {
  "id": "voa-lle2-02",
  "lvl": "A2",
  "t": "Level 2 Lesson 2: The Interview",
  "theme": "L'entretien d'embauche",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/1/17/1706ec69-afcc-40bb-a79c-4a053b5c77ad_720p.mp4?cb=edc3e78b9"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 2",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-2/3960471.html",
  "sum": "Anna doit coprésenter une émission avec quelqu'un de très différent d'elle. Elle propose le poste à Pete, qui cherche du travail. Pendant l'entretien, Pete paraît bougon et peu sociable, mais il obtient quand même le poste.",
  "q": [
   {
    "k": "mcq",
    "q": "Que fait Pete au café quand Anna le trouve ?",
    "o": [
     "Il lit le journal",
     "Il fait des mots croisés",
     "Il écrit un e-mail"
    ],
    "a": 1,
    "why": "Anna : « Pete, forget about the crossword puzzle. »"
   },
   {
    "k": "mcq",
    "q": "À quelle heure est l'entretien de Pete ?",
    "o": [
     "À 8 h",
     "À 14 h",
     "À 10 h"
    ],
    "a": 2,
    "why": "Anna lui dit que l'entretien est le lendemain matin à 10 h."
   },
   {
    "k": "tf",
    "q": "Anna conseille à Pete d'être lui-même.",
    "a": true,
    "why": "Anna : « Just be yourself, Pete. Just be yourself. »"
   },
   {
    "k": "mcq",
    "q": "De quoi Pete est-il le plus fier ?",
    "o": [
     "D'un livre écrit enfermé dans une cabane",
     "D'une émission de radio",
     "D'un voyage autour du monde"
    ],
    "a": 0,
    "why": "Il a écrit un livre enfermé deux mois dans une cabane, sans parler à personne."
   },
   {
    "k": "tf",
    "q": "Pete n'obtient pas le poste.",
    "a": false,
    "why": "Il a le poste ; Anna : « I knew it! Congratulations! »"
   },
   {
    "k": "gap",
    "q": "« Okay. I think I've heard ___. »",
    "a": [
     "enough"
    ],
    "why": "Mme Weaver met fin à l'entretien : « I think I've heard enough. »"
   }
  ]
 },
 {
  "id": "voa-lle2-03",
  "lvl": "A2",
  "t": "Level 2 Lesson 3: He Said - She Said",
  "theme": "En retard",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/e/ee/ee3e6fb5-9ea6-4f8b-88b4-c24e14fb2780_720p.mp4?cb=edc3e7884"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 3",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-3/4027340.html",
  "sum": "Anna et Pete arrivent très en retard chez Kelly, une consultante. Chacun raconte le trajet à sa façon : pour Anna, c'est à cause du café de Pete ; pour Pete, c'est parce qu'Anna a nourri ses oiseaux. Kelly en tire l'idée d'une émission : « He Said, She Said ».",
  "q": [
   {
    "k": "mcq",
    "q": "Combien de minutes Anna dit-elle avoir attendu Pete ?",
    "o": [
     "5",
     "15",
     "43"
    ],
    "a": 1,
    "why": "Anna : « I had waited 15 minutes. »"
   },
   {
    "k": "mcq",
    "q": "Selon Anna, pourquoi sont-ils en retard ?",
    "o": [
     "Pete a voulu son café « spécial »",
     "Le bus était en panne",
     "Kelly a changé l'heure"
    ],
    "a": 0,
    "why": "Anna : « He had to get his \"special\" coffee. »"
   },
   {
    "k": "tf",
    "q": "Kelly a bien reçu le message d'Anna.",
    "a": false,
    "why": "Kelly : « I didn't get that message. »"
   },
   {
    "k": "mcq",
    "q": "Comment Pete va-t-il d'habitude au travail ?",
    "o": [
     "En trottinette",
     "En voiture",
     "À pied"
    ],
    "a": 2,
    "why": "Pete : « I always walk to work. » Il a détesté la trottinette."
   },
   {
    "k": "tf",
    "q": "Selon Pete, Anna a donné aux oiseaux des noms de personnages de livres.",
    "a": true,
    "why": "Pete imite Anna : « Romeo! Juliet! Sherlock! » ; Kelly : « She named the birds? Really? »"
   },
   {
    "k": "gap",
    "q": "« You have to take ___. »",
    "a": [
     "turns"
    ],
    "why": "Kelly leur demande de parler chacun leur tour : « You have to take turns. »"
   }
  ]
 },
 {
  "id": "voa-lle2-04",
  "lvl": "A2",
  "t": "Level 2 Lesson 4: Run Away With the Circus!",
  "theme": "Le cirque",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/8/8e/8e6a25fe-1336-4f85-901d-95d0dcabc112_720p.mp4?cb=edc3e78ea"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 4",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-4-run-away-with-the-circus/4034187.html",
  "sum": "Dans leur émission, Anna et Pete se demandent si le cirque est un art. Pete n'y voit que des athlètes, Anna des artistes. Après l'interview de deux artistes, Kate et Piper, Pete finit par être d'accord avec Anna.",
  "q": [
   {
    "k": "mcq",
    "q": "Au début, que pense Pete du cirque ?",
    "o": [
     "Que c'est un sport dangereux",
     "Que ce n'est pas un art",
     "Que c'est pour les enfants"
    ],
    "a": 1,
    "why": "Pete : « Circus? That's not an art form. »"
   },
   {
    "k": "tf",
    "q": "Pete dit que les jongleurs ne font que lancer des objets d'avant en arrière.",
    "a": true,
    "why": "Pete : « They're just throwing things back and forth. »"
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce que Pete admet aimer ?",
    "o": [
     "La musique",
     "Les animaux",
     "Les costumes"
    ],
    "a": 2,
    "why": "Pete : « I will admit -- I like their costumes. »"
   },
   {
    "k": "mcq",
    "q": "Selon Kate, le cirque, comparé à la plupart des sports, n'est pas…",
    "o": [
     "… compétitif",
     "… amusant",
     "… difficile"
    ],
    "a": 0,
    "why": "Kate dit que ce n'est pas compétitif : « This is simply performing and having fun. »"
   },
   {
    "k": "tf",
    "q": "À la fin, Pete et Anna ne sont toujours pas d'accord.",
    "a": false,
    "why": "Pete finit par dire : « You're right, Anna. »"
   },
   {
    "k": "gap",
    "q": "« Today, let's run away with the ___! »",
    "a": [
     "circus"
    ],
    "why": "Anna lance le sujet : « Today, let's run away with the circus! »"
   }
  ]
 },
 {
  "id": "voa-lle2-05",
  "lvl": "A2",
  "t": "Level 2 Lesson 5: Greatest Vacation of All Time",
  "theme": "À l'agence de voyages",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/3/3f/3f51d054-13af-46ae-a027-e469d65197b9_720p.mp4?cb=edc3e7908&download=1"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 5",
  "link": "https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-5-greatest-vacation/4035571.html",
  "sum": "Dans une agence de voyages, Dan essaie de vendre à Anna des vacances de plus en plus chères : la montagne, la mer, puis un safari. Anna explique ce qu'elle aime ; la machine Travel Max 2000 prend feu, et Anna finit par dire à Dan que c'est lui qui a besoin de vacances.",
  "q": [
   {
    "k": "mcq",
    "q": "Pourquoi Anna ne veut-elle pas du séjour à la montagne ?",
    "o": [
     "Elle a peur des hauteurs",
     "Elle n'aime pas le froid",
     "C'est trop long"
    ],
    "a": 0,
    "why": "Anna : « I'm afraid of high places. »"
   },
   {
    "k": "tf",
    "q": "Pendant l'offre « Deep Sea Adventure », Anna a peur des requins.",
    "a": true,
    "why": "Anna crie : « Shark! Shark! »"
   },
   {
    "k": "mcq",
    "q": "Quelle offre est la plus chère ?",
    "o": [
     "Mountain Getaway",
     "Deep Sea Adventure",
     "Safari Camp Out"
    ],
    "a": 2,
    "why": "Le Safari Camp Out est présenté comme l'option « priciest »."
   },
   {
    "k": "mcq",
    "q": "Selon Anna, quels moyens de transport peuvent être les plus effrayants ?",
    "o": [
     "Les trains",
     "Les bateaux",
     "Les avions"
    ],
    "a": 1,
    "why": "Anna : « Ships can be the scariest! » Elle préfère l'avion et le train."
   },
   {
    "k": "tf",
    "q": "La Travel Max 2000 fonctionne parfaitement jusqu'à la fin.",
    "a": false,
    "why": "Elle prend feu ; Dan : « You killed the Travel Max 2000! »"
   },
   {
    "k": "gap",
    "q": "« This is the ___ lesson yet! »",
    "a": [
     "smokiest"
    ],
    "why": "Professor Bot conclut : « This is the smokiest lesson yet! »"
   }
  ]
 },
 {
  "id": "voa-lle2-06",
  "lvl": "A2",
  "t": "Level 2 Lesson 6: Will It Float?",
  "theme": "Visiter une ville",
  "dur": "6 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2021/02/7/77/776e11ee-dd39-46b3-a75c-6d56c0e4ccdd_720p.mp4?cb=edc3e795c"
  },
  "credit": "VOA Learning English · Let's Learn English niveau 2, leçon 6",
  "link": "https://learningenglish.voanews.com/a/lesson-6-will-it-float/4064553.html",
  "sum": "Anna fait visiter Washington à Penelope à bord d'un bus-bateau, le DC Ducks, qui roule sur la route puis navigue sur l'eau. Un garçon plein d'anecdotes les accompagne et leur parle de la Maison-Blanche et de ses 32 salles de bain.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment Anna décrit-elle le véhicule ?",
    "o": [
     "Un train sur l'eau",
     "Un bateau avec des roues",
     "Un bus à deux étages"
    ],
    "a": 1,
    "why": "Anna : « the boat with wheels! » ; « We will ride on the road and then sail on the water! »"
   },
   {
    "k": "tf",
    "q": "Selon Professor Bot, le Washington Monument a été endommagé par un tremblement de terre.",
    "a": true,
    "why": "« Did you know that the Washington Monument was damaged in an earthquake? »"
   },
   {
    "k": "mcq",
    "q": "Combien de salles de bain y a-t-il à la Maison-Blanche, selon le garçon ?",
    "o": [
     "2",
     "23",
     "32"
    ],
    "a": 2,
    "why": "Le garçon : « a swimming pool, a movie theater and 32 bathrooms! »"
   },
   {
    "k": "mcq",
    "q": "Combien de sœurs a le garçon ?",
    "o": [
     "Quatre",
     "Deux",
     "Une"
    ],
    "a": 0,
    "why": "« I live in a house with my mom, four sisters, two aunts and only one bathroom! »"
   },
   {
    "k": "tf",
    "q": "Chez lui, le garçon a plusieurs salles de bain.",
    "a": false,
    "why": "Il n'en a qu'une (« only one bathroom ») et dit : « I'd be happy with two. »"
   },
   {
    "k": "gap",
    "q": "« Let's get aboard, ___! »",
    "a": [
     "Sailor"
    ],
    "why": "Anna à Penelope : « Let's get aboard, Sailor! »"
   }
  ]
 },
 {
  "id": "yt-en-real-easy-travel",
  "lvl": "B1",
  "t": "Talking about travel: Real Easy English",
  "theme": "Les trajets quotidiens",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "JgB6-RWnV9M"
  },
  "credit": "BBC Learning English · Real Easy English",
  "link": "https://vi-vocabfire-com.pages.dev/listening/bbc/real-easy-english/2024-06/talking-about-travel",
  "sum": "Neil et Georgie comparent leur trajet pour aller au travail à Londres. Neil prend le bus puis le métro ; Georgie marche, car elle n'aime pas le métro bondé et préfère l'air frais.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment Neil va-t-il au travail ?",
    "o": [
     "En bus jusqu'au métro, puis en métro",
     "À pied, en traversant un parc",
     "À vélo"
    ],
    "a": 0,
    "why": "Neil : « I get a bus to a tube stop », puis il prend le métro près de la BBC."
   },
   {
    "k": "tf",
    "q": "Georgie va au travail à pied.",
    "a": true,
    "why": "Georgie : « I walk to work. »"
   },
   {
    "k": "mcq",
    "q": "Pourquoi Georgie n'aime-t-elle pas prendre le métro ?",
    "o": [
     "Il est trop cher",
     "Il est souvent en retard",
     "Il y a trop de monde"
    ],
    "a": 2,
    "why": "Elle explique : « there's so many people on it »."
   },
   {
    "k": "mcq",
    "q": "Combien de temps dure le trajet de Georgie à pied ?",
    "o": [
     "Trente minutes",
     "Une heure",
     "Deux heures"
    ],
    "a": 1,
    "why": "Une heure à pied, et trente minutes si elle prend le métro."
   },
   {
    "k": "tf",
    "q": "Selon Neil, le métro est souvent bloqué par les embouteillages.",
    "a": false,
    "why": "Ce sont les bus qui peuvent être ralentis par les embouteillages ; le métro, lui, est « usually OK »."
   },
   {
    "k": "gap",
    "q": "I prefer to get some fresh ___ in the morning.",
    "a": [
     "air"
    ],
    "why": "Georgie : « I prefer to get some fresh air in the morning. »"
   },
   {
    "k": "tf",
    "q": "Neil trouve que le trajet de Georgie a l'air plus agréable que le sien.",
    "a": true,
    "why": "Neil : « your journey to work sounds nicer than mine »."
   }
  ]
 },
 {
  "id": "yt-en-real-easy-holidays",
  "lvl": "B1",
  "t": "Talking about holidays: Real Easy English",
  "theme": "Les vacances",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "N2StxicQois"
  },
  "credit": "BBC Learning English · Real Easy English",
  "link": "https://vi-vocabfire-com.pages.dev/listening/bbc/real-easy-english/2024-05/talking-about-holidays",
  "sum": "Georgie et Neil parlent de leurs destinations de rêve : le Japon pour Neil, Édimbourg pour Georgie. Ils expliquent « should » et « could » pour donner des conseils, et le mot « staycation ».",
  "q": [
   {
    "k": "mcq",
    "q": "Quel est le pays préféré de Neil ?",
    "o": [
     "Le Japon",
     "L'Italie",
     "Le Pérou"
    ],
    "a": 0,
    "why": "Neil : « I really, really liked Japan when I visited Japan. »"
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce que Neil conseille de faire au Japon ?",
    "o": [
     "Faire du ski",
     "Prendre le train à grande vitesse",
     "Manger des sushis et visiter les jardins zen de Kyoto"
    ],
    "a": 2,
    "why": "Il conseille de manger (des sushis) et de voir les jardins zen de Kyoto."
   },
   {
    "k": "mcq",
    "q": "Quelle ville Georgie préfère-t-elle ?",
    "o": [
     "Londres",
     "Édimbourg",
     "Dublin"
    ],
    "a": 1,
    "why": "Son endroit préféré est Édimbourg, en Écosse."
   },
   {
    "k": "tf",
    "q": "Georgie aime Édimbourg parce que c'est très vert.",
    "a": true,
    "why": "Georgie : « I love it because it's very green. »"
   },
   {
    "k": "gap",
    "q": "You ___ go to the Fringe Festival, which is a comedy and arts festival.",
    "a": [
     "could"
    ],
    "why": "Georgie : « you could go to the Fringe Festival… » ; « could » propose une possibilité."
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce qu'une « staycation » ?",
    "o": [
     "Des vacances chez soi ou près de chez soi",
     "Un voyage très long à l'étranger",
     "Un séjour à la plage"
    ],
    "a": 0,
    "why": "C'est le mélange de « stay » et « vacation » : des vacances à la maison ou tout près."
   },
   {
    "k": "tf",
    "q": "Neil dit que les vacances coûtent cher et qu'il faut économiser pour partir loin.",
    "a": true,
    "why": "Il rappelle que les vacances sont chères et qu'il faut mettre de l'argent de côté."
   }
  ]
 },
 {
  "id": "yt-en-real-easy-seasons",
  "lvl": "B1",
  "t": "Talking about seasons: Real Easy English",
  "theme": "Les saisons",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "QBddNulwhKo"
  },
  "credit": "BBC Learning English · Real Easy English",
  "link": "https://vocabfire-com.pages.dev/listening/bbc/real-easy-english/2025-05/talking-about-the-seasons",
  "sum": "Neil et Georgie parlent des saisons au Royaume-Uni. Neil aime le printemps et l'été pour les longues soirées ; Georgie préfère le printemps et l'automne. Tous deux n'aiment pas l'hiver, trop sombre.",
  "q": [
   {
    "k": "tf",
    "q": "Au début, Neil est content parce qu'il fait soleil et chaud.",
    "a": true,
    "why": "Neil : « the Sun is shining » ; il fait chaud après une longue période sans beau temps."
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce que Neil aime surtout au printemps et en été ?",
    "o": [
     "La neige",
     "Les fleurs du jardin",
     "Les longues soirées"
    ],
    "a": 2,
    "why": "Il parle des « long late nights and evenings »."
   },
   {
    "k": "mcq",
    "q": "Quelle est la saison préférée de Georgie ?",
    "o": [
     "L'été",
     "Le printemps",
     "L'hiver"
    ],
    "a": 1,
    "why": "Elle aime les saisons de transition, et surtout le printemps."
   },
   {
    "k": "gap",
    "q": "I love the pink ___ on the trees.",
    "a": [
     "blossoms"
    ],
    "why": "Georgie parle des « pink blossoms on the trees » au printemps."
   },
   {
    "k": "mcq",
    "q": "Pourquoi Neil n'aime-t-il pas l'hiver ?",
    "o": [
     "Il fait sombre",
     "Il fait trop froid",
     "Il pleut tout le temps"
    ],
    "a": 0,
    "why": "Neil : « It's the dark. »"
   },
   {
    "k": "mcq",
    "q": "Que veut dire l'expression « can't stand » ?",
    "o": [
     "Ne pas pouvoir rester debout",
     "Attendre avec impatience",
     "Détester quelque chose"
    ],
    "a": 2,
    "why": "L'épisode explique que « can't stand » veut dire ne pas aimer du tout."
   },
   {
    "k": "tf",
    "q": "Georgie aimerait que ce soit l'été toute l'année.",
    "a": false,
    "why": "Georgie préfère la variété et ne voudrait pas l'été toute l'année."
   }
  ]
 },
 {
  "id": "yt-en-real-easy-exercise",
  "lvl": "B1",
  "t": "Talking about exercise: Real Easy English",
  "theme": "Le sport",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "R3oVOu-sxHE"
  },
  "credit": "BBC Learning English · Real Easy English",
  "link": "https://shadowingenglish.com/ja/practice/talking-about-exercise-real-easy-english-R3oVOu-sxHE",
  "sum": "Georgie et Neil parlent du sport qu'ils font pendant leur temps libre : la course à pied et le yoga. Ils parlent de ce qu'ils ont fait le week-end dernier, de leurs projets, et de l'expression « take up ».",
  "q": [
   {
    "k": "mcq",
    "q": "Que veut dire « spare time » ?",
    "o": [
     "Le temps passé au travail",
     "Le temps où on n'a rien à faire d'obligatoire",
     "Le temps passé dans les transports"
    ],
    "a": 1,
    "why": "« spare time means the time when we're not working and we don't have anything that we need to do »."
   },
   {
    "k": "mcq",
    "q": "Neil aide son fils à s'entraîner dans quel sport ?",
    "o": [
     "Le cricket",
     "Le football",
     "Le tennis"
    ],
    "a": 0,
    "why": "« I help my son training when he plays cricket. »"
   },
   {
    "k": "tf",
    "q": "Georgie fait du yoga à la fin d'une semaine stressante pour se détendre.",
    "a": true,
    "why": "Elle dit que le yoga l'aide à se détendre après une semaine stressante."
   },
   {
    "k": "mcq",
    "q": "Quand Neil va-t-il courir ?",
    "o": [
     "Le matin avant le travail",
     "Le soir après le dîner",
     "À midi, quand il travaille de chez lui"
    ],
    "a": 2,
    "why": "Il court à l'heure du déjeuner les jours où il travaille à la maison."
   },
   {
    "k": "tf",
    "q": "Neil adore courir.",
    "a": false,
    "why": "« Actually, I don't like running. » Mais il se sent très bien après."
   },
   {
    "k": "gap",
    "q": "I'd like to take ___ yoga.",
    "a": [
     "up"
    ],
    "why": "« I'd like to take up yoga. » ; « take up » = commencer une nouvelle activité."
   },
   {
    "k": "mcq",
    "q": "Pourquoi Neil n'a-t-il pas continué le yoga ?",
    "o": [
     "C'était trop cher",
     "C'était trop ennuyeux",
     "Il s'était blessé"
    ],
    "a": 1,
    "why": "« I have tried it in the past and it was just too boring. »"
   }
  ]
 },
 {
  "id": "yt-en-real-easy-family",
  "lvl": "B1",
  "t": "Talking about family: Real Easy English",
  "theme": "La famille",
  "dur": "6 min",
  "media": {
   "type": "youtube",
   "id": "x72gP4HrU58"
  },
  "credit": "BBC Learning English · Real Easy English",
  "link": "https://shadowingenglish.com/ja/practice/talking-about-family-real-easy-english-x72gP4HrU58",
  "sum": "Beth et Neil comparent leurs familles. Neil a une sœur qui a trois fils ; Beth est fille unique et n'a qu'une cousine. Ils expliquent des expressions comme « only child » et « get on well with ».",
  "q": [
   {
    "k": "mcq",
    "q": "Combien de fils la sœur de Neil a-t-elle ?",
    "o": [
     "Trois",
     "Deux",
     "Quatre"
    ],
    "a": 0,
    "why": "La sœur de Neil a trois fils."
   },
   {
    "k": "tf",
    "q": "Neil et sa sœur habitent dans la même ville.",
    "a": false,
    "why": "« We don't see each other very often because we don't live in the same place. »"
   },
   {
    "k": "mcq",
    "q": "Que vient de faire le neveu aîné de Neil, qui a 17 ans ?",
    "o": [
     "Il a fini l'université",
     "Il a trouvé un travail",
     "Il a eu son permis de conduire"
    ],
    "a": 2,
    "why": "Le plus âgé, 17 ans, vient de réussir son permis de conduire."
   },
   {
    "k": "gap",
    "q": "I am an only ___, so when I get together with my family, it's very small.",
    "a": [
     "child"
    ],
    "why": "« I am an only child… » : sans frère ni sœur."
   },
   {
    "k": "tf",
    "q": "La famille de Beth est petite mais très proche.",
    "a": true,
    "why": "« It is small, but we're very close, so we see each other quite often. »"
   },
   {
    "k": "mcq",
    "q": "Que veut dire « get on well with someone » ?",
    "o": [
     "Voyager avec quelqu'un",
     "Avoir une bonne relation avec quelqu'un",
     "Habiter avec quelqu'un"
    ],
    "a": 1,
    "why": "« that means that you have a good relationship with them »."
   }
  ]
 },
 {
  "id": "yt-en-teded-history-chocolate",
  "lvl": "B2",
  "t": "The history of chocolate – Deanna Pucciarelli",
  "theme": "Histoire de la nourriture",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "ibjUpk9Iagk"
  },
  "credit": "TED-Ed · Deanna Pucciarelli",
  "link": "https://tubescript.cc/transcript/ibjUpk9Iagk",
  "sum": "Le chocolat n'existait d'abord qu'en Mésoamérique, sous forme de boisson amère. Arrivé en Europe au XVIe siècle, il devient un luxe, puis la presse à cacao (1828) et le chocolat au lait le rendent courant ; sa production a aussi un passé et un présent de travail forcé.",
  "q": [
   {
    "k": "mcq",
    "q": "Sous quelle forme consommait-on d'abord le chocolat en Mésoamérique ?",
    "o": [
     "En boisson amère et mousseuse",
     "En tablettes sucrées",
     "En gâteau"
    ],
    "a": 0,
    "why": "On le préparait en boisson amère avec de la farine de maïs et des piments, couverte de mousse."
   },
   {
    "k": "mcq",
    "q": "Pour les Aztèques, quel dieu avait offert le cacao aux humains ?",
    "o": [
     "Kukulkan",
     "Moctezuma",
     "Quetzalcoatl"
    ],
    "a": 2,
    "why": "Un dieu serpent à plumes : « Kukulkan » pour les Mayas, « Quetzalcoatl » pour les Aztèques. Moctezuma est le roi."
   },
   {
    "k": "tf",
    "q": "Les Aztèques utilisaient les fèves de cacao comme monnaie.",
    "a": true,
    "why": "La vidéo explique que les Aztèques payaient avec des fèves de cacao."
   },
   {
    "k": "gap",
    "q": "The king had 50 ___ of the drink brought out and poured into golden cups.",
    "a": [
     "jugs"
    ],
    "why": "Récit du lieutenant de Cortés : « the king had 50 jugs of the drink brought out »."
   },
   {
    "k": "mcq",
    "q": "Qu'a inventé Coenraad Van Houten d'Amsterdam en 1828 ?",
    "o": [
     "Le chocolat au lait",
     "La presse à cacao",
     "La tablette de chocolat noir"
    ],
    "a": 1,
    "why": "« the introduction of the cocoa press by Conrad Van Houten of Amsterdam »."
   },
   {
    "k": "mcq",
    "q": "Qui a inventé le chocolat au lait ?",
    "o": [
     "Le Suisse Daniel Peter",
     "Hernán Cortés",
     "Un chocolatier espagnol de la cour"
    ],
    "a": 0,
    "why": "« a Swiss chocolatier named Daniel Peter added powdered milk… inventing milk chocolate »."
   },
   {
    "k": "tf",
    "q": "Le cacao peut pousser partout dans le monde.",
    "a": false,
    "why": "Le cacao ne pousse que près de l'équateur."
   }
  ]
 },
 {
  "id": "yt-en-teded-practice-effectively",
  "lvl": "B2",
  "t": "How to practice effectively...for just about anything",
  "theme": "Apprendre et progresser",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "f2O6mQkFiiw"
  },
  "credit": "TED-Ed · Annie Bosler et Don Greene",
  "link": "https://sozai.app/transcript/practice-effectively-anything-annie-bosler-don-greene/",
  "sum": "La pratique renforce la myéline, une gaine qui accélère les signaux entre le cerveau et les muscles. Pour bien s'entraîner : se concentrer sans distractions, commencer lentement, répéter souvent avec des pauses, et imaginer le geste dans les moindres détails.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment s'appelle la substance grasse qui entoure les axones et se renforce avec la pratique ?",
    "o": [
     "La matière grise",
     "L'adrénaline",
     "La myéline"
    ],
    "a": 2,
    "why": "Les axones sont entourés de myéline, qui fonctionne comme l'isolant d'un câble électrique."
   },
   {
    "k": "tf",
    "q": "Selon la vidéo, les muscles ont leur propre mémoire.",
    "a": false,
    "why": "On parle de « mémoire musculaire », mais la vidéo précise que les muscles n'ont pas de mémoire : c'est la myéline qui compte."
   },
   {
    "k": "mcq",
    "q": "Dans une étude sur 260 étudiants, combien de temps restaient-ils concentrés sur une tâche, en moyenne ?",
    "o": [
     "Vingt minutes",
     "Six minutes",
     "Une heure"
    ],
    "a": 1,
    "why": "Les 260 étudiants ne se concentraient en moyenne que six minutes."
   },
   {
    "k": "mcq",
    "q": "Quel conseil la vidéo donne-t-elle pour le téléphone ?",
    "o": [
     "Le mettre en mode avion",
     "Le laisser dans une autre pièce",
     "L'utiliser pour se chronométrer"
    ],
    "a": 0,
    "why": "Pour limiter les distractions : éteindre la télé, quitter l'ordinateur et mettre le téléphone en mode avion."
   },
   {
    "k": "tf",
    "q": "Il vaut mieux commencer lentement, puis accélérer peu à peu.",
    "a": true,
    "why": "Conseil : commencer lentement, voire au ralenti, puis augmenter progressivement la vitesse des bonnes répétitions."
   },
   {
    "k": "mcq",
    "q": "Dans l'étude avec 144 joueurs de basket, qu'a fait le groupe B ?",
    "o": [
     "Il s'est entraîné deux fois plus",
     "Il ne s'est pas entraîné du tout",
     "Il s'est entraîné en imaginant les tirs"
    ],
    "a": 2,
    "why": "Le groupe A tirait vraiment ; le groupe B s'entraînait mentalement. Après deux semaines, les progrès étaient presque identiques."
   }
  ]
 },
 {
  "id": "yt-en-teded-bilingual-brain",
  "lvl": "B2",
  "t": "The benefits of a bilingual brain – Mia Nacamulli",
  "theme": "Les langues et le cerveau",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "MMmOLN5zBLY"
  },
  "credit": "TED-Ed · Mia Nacamulli",
  "link": "https://sozai.app/transcript/benefits-bilingual-brain-mia-nacamulli/",
  "sum": "La vidéo décrit trois types de bilingues (composé, coordonné, subordonné) à travers la famille de Gabriela, venue du Pérou. Parler deux langues ne rend pas forcément plus intelligent, mais garde le cerveau plus actif et pourrait retarder Alzheimer d'environ cinq ans.",
  "q": [
   {
    "k": "mcq",
    "q": "De quel pays vient la famille de Gabriela ?",
    "o": [
     "Du Mexique",
     "Du Pérou",
     "D'Espagne"
    ],
    "a": 1,
    "why": "Sa famille a quitté le Pérou pour les États-Unis quand elle avait deux ans."
   },
   {
    "k": "mcq",
    "q": "Combien de grands types de bilingues la vidéo décrit-elle ?",
    "o": [
     "Trois",
     "Deux",
     "Cinq"
    ],
    "a": 0,
    "why": "Trois types : composé, coordonné et subordonné."
   },
   {
    "k": "tf",
    "q": "Le frère de Gabriela apprend l'anglais à l'école et l'espagnol à la maison.",
    "a": true,
    "why": "C'est l'exemple du bilingue coordonné : une langue par contexte."
   },
   {
    "k": "mcq",
    "q": "Selon la vidéo, de combien d'années le bilinguisme pourrait-il retarder Alzheimer et la démence ?",
    "o": [
     "Environ deux ans",
     "Environ dix ans",
     "Environ cinq ans"
    ],
    "a": 2,
    "why": "L'exercice mental du bilinguisme pourrait retarder ces maladies d'environ cinq ans."
   },
   {
    "k": "tf",
    "q": "Avant les années 1960, on pensait que le bilinguisme ralentissait le développement des enfants.",
    "a": true,
    "why": "On le voyait comme un handicap, sur la base d'études surtout mal faites."
   },
   {
    "k": "tf",
    "q": "La vidéo affirme que les bilingues sont plus intelligents.",
    "a": false,
    "why": "Le bilinguisme ne rend pas forcément plus intelligent, mais garde le cerveau plus sain et plus actif."
   },
   {
    "k": "mcq",
    "q": "Quel est le message final de la vidéo ?",
    "o": [
     "Il faut apprendre une langue avant 7 ans",
     "Il n'est jamais trop tard pour apprendre une deuxième langue",
     "Il vaut mieux n'apprendre qu'une langue à la fois"
    ],
    "a": 1,
    "why": "Il n'est jamais trop tard, et un peu de pratique peut aller loin."
   }
  ]
 },
 {
  "id": "yt-en-teded-science-laughter",
  "lvl": "B2",
  "t": "The science of laughter – Sasha Winkler",
  "theme": "Le rire",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "Xu-QfE_1ksk"
  },
  "credit": "TED-Ed · Sasha Winkler",
  "link": "https://sozai.app/transcript/science-laughter-sasha-winkler/",
  "sum": "Le rire existe aussi chez les animaux : des rats « rient » quand on les chatouille, et au moins 65 espèces émettent des sons pendant le jeu. Chez l'humain, le rire est contagieux, révèle nos liens avec les autres, et fait baisser les hormones du stress.",
  "q": [
   {
    "k": "mcq",
    "q": "Quels animaux semblaient « rire » quand on les chatouillait, selon des chercheurs de la fin des années 1990 ?",
    "o": [
     "Des rats",
     "Des chats",
     "Des perroquets"
    ],
    "a": 0,
    "why": "Avec des enregistreurs à ultrasons, ils ont découvert que les rats « were basically giggling »."
   },
   {
    "k": "gap",
    "q": "Researchers have documented at least ___ species that make vocalizations during play.",
    "a": [
     "65"
    ],
    "why": "« at least 65 species », surtout des mammifères, mais aussi quelques oiseaux."
   },
   {
    "k": "tf",
    "q": "Dans une étude, les gens riaient plus longtemps quand une autre personne était présente.",
    "a": true,
    "why": "Ils riaient plus souvent et plus longtemps à deux, même s'ils ne trouvaient pas la vidéo plus drôle."
   },
   {
    "k": "mcq",
    "q": "Dès quel âge peut-on distinguer, au son d'un rire, des amis proches de simples connaissances ?",
    "o": [
     "5 ans",
     "15 ans",
     "5 mois"
    ],
    "a": 2,
    "why": "Même des bébés « as young as 5 months old » y arrivent."
   },
   {
    "k": "tf",
    "q": "Le faux rire et le rire spontané utilisent les mêmes réseaux du cerveau.",
    "a": false,
    "why": "Ils utilisent « entirely different networks in the brain » : le faux rire passe par des voies liées à la parole."
   },
   {
    "k": "mcq",
    "q": "Quel effet le rire a-t-il sur le corps ?",
    "o": [
     "Il augmente le cortisol",
     "Il libère des endorphines et réduit les hormones du stress",
     "Il ralentit le cœur"
    ],
    "a": 1,
    "why": "Il libère des « feel-good neurotransmitters like endorphins » et baisse le cortisol."
   }
  ]
 },
 {
  "id": "yt-en-teded-art-analyze",
  "lvl": "B2",
  "t": "How art can help you analyze – Amy E. Herman",
  "theme": "Regarder une œuvre",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "ubEadhXWwV4"
  },
  "credit": "TED-Ed · Amy E. Herman",
  "link": "https://ed.ted.com/lessons/how-art-can-help-you-analyze-amy-e-herman",
  "sum": "Amy Herman montre comment analyser une peinture aide des médecins, des infirmiers ou des policiers à mieux observer et à mieux décrire. Elle prend l'exemple de « La Durée poignardée » de Magritte : un petit train qui sort d'une cheminée.",
  "q": [
   {
    "k": "mcq",
    "q": "Quel tableau Amy Herman analyse-t-elle ?",
    "o": [
     "« La Durée poignardée » de René Magritte",
     "« La Joconde » de Léonard de Vinci",
     "« La Nuit étoilée » de Van Gogh"
    ],
    "a": 0,
    "why": "Elle étudie « Time Transfixed » (La Durée poignardée) de René Magritte."
   },
   {
    "k": "mcq",
    "q": "Que voit-on sortir de la cheminée dans ce tableau ?",
    "o": [
     "Un oiseau",
     "De l'eau",
     "Un petit train"
    ],
    "a": 2,
    "why": "Un petit train à vapeur sort de la cheminée, avec de la fumée."
   },
   {
    "k": "tf",
    "q": "Dans la cheminée, il y a un grand feu.",
    "a": false,
    "why": "Elle fait remarquer qu'il n'y a pas de feu, pas de rails et pas de tunnel."
   },
   {
    "k": "mcq",
    "q": "Quels objets sont posés sur la cheminée ?",
    "o": [
     "Des livres et un vase",
     "Deux chandeliers et une horloge",
     "Des photos de famille"
    ],
    "a": 1,
    "why": "On voit deux chandeliers et une horloge, devant un grand miroir."
   },
   {
    "k": "tf",
    "q": "Selon elle, il faut décrire aussi ce qui manque, pas seulement ce qu'on voit.",
    "a": true,
    "why": "Elle insiste sur les absences, comme un patient à qui il manque un des symptômes attendus."
   },
   {
    "k": "mcq",
    "q": "Quels métiers peuvent profiter de cette méthode, d'après la vidéo ?",
    "o": [
     "Les médecins, les infirmiers et les policiers",
     "Seulement les artistes",
     "Seulement les professeurs d'art"
    ],
    "a": 0,
    "why": "La leçon cite des médecins, des infirmiers et des forces de l'ordre."
   }
  ]
 },
 {
  "id": "yt-en-ted-machova-languages",
  "lvl": "C1",
  "t": "The secrets of learning a new language | Lýdia Machová",
  "theme": "Apprendre une langue",
  "dur": "11 min",
  "media": {
   "type": "youtube",
   "id": "o_XVt5rdpFY"
  },
  "credit": "TED · Lýdia Machová",
  "link": "https://sozai.app/transcript/secrets-learning-new-language-lydia-machova-ted/",
  "sum": "Lýdia Machová, qui apprend une nouvelle langue environ tous les deux ans, a interrogé des polyglottes. Leur secret commun : prendre plaisir à apprendre. Elle ajoute trois principes : des méthodes efficaces, un système régulier et de la patience.",
  "q": [
   {
    "k": "mcq",
    "q": "À quel rythme Lýdia Machová apprend-elle une nouvelle langue ?",
    "o": [
     "Chaque année",
     "Tous les cinq ans",
     "Environ tous les deux ans"
    ],
    "a": 2,
    "why": "Elle apprend une nouvelle langue environ tous les deux ans et en est à sa huitième."
   },
   {
    "k": "gap",
    "q": "Benny accepts making even ___ mistakes a day.",
    "a": [
     "200"
    ],
    "why": "Benny, l'Irlandais, parle dès le premier jour, quitte à faire « even 200 mistakes a day »."
   },
   {
    "k": "mcq",
    "q": "Comment Lucas, le Brésilien, a-t-il appris le russe ?",
    "o": [
     "En vivant à Moscou",
     "En ajoutant une centaine de russophones sur Skype",
     "Avec un professeur particulier"
    ],
    "a": 1,
    "why": "Il a ajouté environ 100 russophones sur Skype et relayé leurs messages jusqu'à pouvoir écrire lui-même."
   },
   {
    "k": "mcq",
    "q": "Quelle série a-t-elle regardée en allemand ?",
    "o": [
     "« Friends »",
     "« Game of Thrones »",
     "« The Office »"
    ],
    "a": 0,
    "why": "Elle a regardé « Friends » en allemand ; tout est devenu clair vers la deuxième ou troisième saison."
   },
   {
    "k": "tf",
    "q": "Elle a lu « Harry Potter » en espagnol et a tout compris dès la première page.",
    "a": false,
    "why": "Au début, elle comprenait peu de choses, mais presque tout à la fin."
   },
   {
    "k": "mcq",
    "q": "Quel exemple de « système » propose-t-elle ?",
    "o": [
     "Étudier quatre heures le dimanche",
     "Partir un mois à l'étranger",
     "Se lever 15 minutes plus tôt pour réviser le vocabulaire"
    ],
    "a": 2,
    "why": "« Can you wake up 15 minutes earlier » pour revoir son vocabulaire, écouter des podcasts en allant au travail…"
   },
   {
    "k": "tf",
    "q": "Benny pensait ne pas avoir le « gène des langues » après ses années d'école.",
    "a": true,
    "why": "Après 11 ans d'irlandais et 5 d'allemand à l'école sans parler, il croyait ne pas avoir de « language gene » ; il parle aujourd'hui 10 langues."
   }
  ]
 },
 {
  "id": "yt-en-ted-wujec-marshmallow",
  "lvl": "C1",
  "t": "Build a tower, build a team | Tom Wujec",
  "theme": "Travail d'équipe",
  "dur": "7 min",
  "media": {
   "type": "youtube",
   "id": "H0_yKBitO8M"
  },
  "credit": "TED · Tom Wujec",
  "link": "https://sozai.app/transcript/build-tower-build-team-tom-wujec/",
  "sum": "Tom Wujec présente le « défi du marshmallow » : construire la plus haute tour avec des spaghettis, du ruban adhésif, de la ficelle et un marshmallow au sommet. Les enfants de maternelle font mieux que les diplômés d'école de commerce, parce qu'ils testent des prototypes.",
  "q": [
   {
    "k": "mcq",
    "q": "Que doit-on placer au sommet de la tour ?",
    "o": [
     "Un spaghetti",
     "Un marshmallow",
     "Une balle de ping-pong"
    ],
    "a": 1,
    "why": "« the marshmallow has to be on top »."
   },
   {
    "k": "mcq",
    "q": "Combien de spaghettis chaque équipe reçoit-elle ?",
    "o": [
     "20",
     "10",
     "50"
    ],
    "a": 0,
    "why": "Chaque équipe de quatre a 20 spaghettis, un mètre environ de ruban adhésif et de ficelle, et un marshmallow."
   },
   {
    "k": "tf",
    "q": "Les diplômés d'école de commerce font partie des pires résultats.",
    "a": true,
    "why": "Ils atteignent environ la moitié de la moyenne de 20 pouces."
   },
   {
    "k": "tf",
    "q": "Les enfants de maternelle construisent des tours plus hautes que la plupart des adultes.",
    "a": true,
    "why": "Ils construisent les structures les plus hautes et les plus intéressantes."
   },
   {
    "k": "mcq",
    "q": "Que s'est-il passé quand on a offert un prix de 10 000 dollars à l'équipe gagnante ?",
    "o": [
     "Les tours ont doublé de hauteur",
     "Tout le monde a abandonné",
     "Aucune équipe n'a réussi une structure debout"
    ],
    "a": 2,
    "why": "Avec l'enjeu, aucune équipe n'a réussi à faire tenir une structure."
   },
   {
    "k": "gap",
    "q": "Design truly is a contact ___.",
    "a": [
     "sport"
    ],
    "why": "Conclusion : « design truly is a contact sport »."
   },
   {
    "k": "mcq",
    "q": "Quelle personne améliore nettement les résultats d'une équipe ?",
    "o": [
     "Un avocat",
     "Un assistant de direction",
     "Un PDG"
    ],
    "a": 1,
    "why": "Ajouter un « executive admin » améliore beaucoup la performance de l'équipe."
   }
  ]
 },
 {
  "id": "yt-en-ted-kelley-creative-confidence",
  "lvl": "C1",
  "t": "How to build your creative confidence | David Kelley",
  "theme": "La créativité",
  "dur": "12 min",
  "media": {
   "type": "youtube",
   "id": "16p9YRF0l-g"
  },
  "credit": "TED · David Kelley",
  "link": "https://sozai.app/transcript/build-creative-confidence-david-kelley/",
  "sum": "David Kelley, fondateur d'IDEO, raconte comment un ami d'enfance a cessé de créer après une remarque sur son cheval en argile. Il explique la « maîtrise guidée » du psychologue Albert Bandura et l'histoire d'un IRM transformé en bateau de pirates pour les enfants.",
  "q": [
   {
    "k": "mcq",
    "q": "Qu'avait fabriqué Brian, l'ami d'enfance de David Kelley ?",
    "o": [
     "Un cheval en argile",
     "Un dessin de maison",
     "Un avion en papier"
    ],
    "a": 0,
    "why": "En CE2, Brian a fait un cheval en argile ; une camarade a dit qu'il ne ressemblait pas à un cheval."
   },
   {
    "k": "tf",
    "q": "Après cette remarque, Brian a continué à créer avec encore plus d'envie.",
    "a": false,
    "why": "Brian a détruit son cheval et n'a presque plus fait de projets créatifs ensuite."
   },
   {
    "k": "mcq",
    "q": "De quelle peur Albert Bandura guérissait-il les gens, étape par étape ?",
    "o": [
     "La peur de l'avion",
     "La peur de parler en public",
     "La peur des serpents"
    ],
    "a": 2,
    "why": "Bandura traitait la phobie des serpents en environ quatre heures, par petites étapes."
   },
   {
    "k": "gap",
    "q": "Bandura calls this process guided ___.",
    "a": [
     "mastery"
    ],
    "why": "« Bandura calls this process guided mastery »."
   },
   {
    "k": "mcq",
    "q": "Qu'a fait Doug Dietz pour que les enfants n'aient plus peur de l'IRM ?",
    "o": [
     "Il a rendu la machine plus petite",
     "Il l'a transformée en aventure de bateau de pirates",
     "Il a ajouté de la musique"
    ],
    "a": 1,
    "why": "Il a transformé le scanner en aventure de bateau de pirates et repeint la salle."
   },
   {
    "k": "mcq",
    "q": "Après la transformation, quelle part des enfants avait besoin d'être endormie ?",
    "o": [
     "Environ 10 %",
     "Environ 80 %",
     "Environ 50 %"
    ],
    "a": 0,
    "why": "On est passé de près de 80 % des enfants sous sédation à environ 10 %."
   },
   {
    "k": "tf",
    "q": "Une petite fille a demandé à sa mère si elles pouvaient revenir le lendemain.",
    "a": true,
    "why": "« Mommy, can we come back tomorrow? »"
   }
  ]
 },
 {
  "id": "yt-en-ted-rosling-washing-machine",
  "lvl": "C1",
  "t": "The magic washing machine | Hans Rosling",
  "theme": "Le progrès au quotidien",
  "dur": "9 min",
  "media": {
   "type": "youtube",
   "id": "BZoKfap4g4w"
  },
  "credit": "TED · Hans Rosling",
  "link": "https://sozai.app/transcript/magic-washing-machine-hans-rosling/",
  "sum": "Hans Rosling raconte l'arrivée de la première machine à laver dans sa famille quand il avait quatre ans. Chiffres à l'appui, il montre que la plupart des gens lavent encore leur linge à la main, et que la machine a donné à sa mère le temps de l'emmener à la bibliothèque.",
  "q": [
   {
    "k": "mcq",
    "q": "Quel âge avait Hans Rosling quand sa mère a utilisé une machine à laver pour la première fois ?",
    "o": [
     "Dix ans",
     "Quinze ans",
     "Quatre ans"
    ],
    "a": 2,
    "why": "« I was only four years old »."
   },
   {
    "k": "mcq",
    "q": "Qu'a fait sa grand-mère devant la machine ?",
    "o": [
     "Elle est partie faire les courses",
     "Elle s'est assise et a regardé tout le lavage",
     "Elle a refusé de l'utiliser"
    ],
    "a": 1,
    "why": "Elle a appuyé sur le bouton, s'est assise et a regardé tout le cycle, fascinée."
   },
   {
    "k": "tf",
    "q": "Sa grand-mère avait lavé à la main le linge de sept enfants.",
    "a": true,
    "why": "Elle chauffait l'eau au bois et lavait à la main pour sept enfants."
   },
   {
    "k": "mcq",
    "q": "Combien de personnes dans le monde possèdent une machine à laver, selon lui ?",
    "o": [
     "Environ deux milliards",
     "Environ cinq milliards",
     "Environ sept milliards"
    ],
    "a": 0,
    "why": "Environ deux milliards ; les cinq autres milliards, surtout des femmes, lavent à la main."
   },
   {
    "k": "tf",
    "q": "Le milliard de personnes les plus riches utilise environ la moitié de l'énergie mondiale.",
    "a": true,
    "why": "Sur 12 unités d'énergie, les plus riches en utilisent six : « Half of the energy is used »."
   },
   {
    "k": "mcq",
    "q": "Qu'a fait sa mère du temps gagné grâce à la machine ?",
    "o": [
     "Elle a pris un deuxième travail",
     "Elle a appris à conduire",
     "Elle l'a emmené à la bibliothèque et lui a lu des livres"
    ],
    "a": 2,
    "why": "Elle l'emmenait à la bibliothèque et lui lisait des livres ; elle a aussi appris l'anglais."
   },
   {
    "k": "gap",
    "q": "Thank you, ___.",
    "a": [
     "industrialization"
    ],
    "why": "Conclusion de Rosling : « Thank you, industrialization »."
   }
  ]
 },
 {
  "id": "yt-en-ted-treasure-speak",
  "lvl": "C1",
  "t": "How to speak so that people want to listen | Julian Treasure",
  "theme": "Bien parler",
  "dur": "10 min",
  "media": {
   "type": "youtube",
   "id": "eIho2S0ZahI"
  },
  "credit": "TED · Julian Treasure",
  "link": "https://sozai.app/transcript/speak-so-people-want-listen-julian-treasure-ted/",
  "sum": "Julian Treasure liste les « sept péchés capitaux » de la parole (commérage, jugement, négativité, plainte…), puis les quatre piliers d'une parole puissante, résumés par HAIL. Il présente les outils de la voix et des exercices d'échauffement.",
  "q": [
   {
    "k": "mcq",
    "q": "Que signifie la lettre H de HAIL ?",
    "o": [
     "Humour",
     "Honesty (honnêteté)",
     "Harmony (harmonie)"
    ],
    "a": 1,
    "why": "HAIL = Honesty, Authenticity, Integrity, Love."
   },
   {
    "k": "tf",
    "q": "Pour lui, se plaindre est une « misère virale ».",
    "a": true,
    "why": "« complaining is viral misery »."
   },
   {
    "k": "mcq",
    "q": "Lequel de ces éléments fait partie des « sept péchés capitaux » de la parole ?",
    "o": [
     "Le commérage",
     "Le silence",
     "Les questions"
    ],
    "a": 0,
    "why": "La liste commence par le commérage (gossip), puis le jugement, la négativité, la plainte, les excuses, l'exagération et le dogmatisme."
   },
   {
    "k": "mcq",
    "q": "À quoi compare-t-il une voix riche et chaude (le timbre) ?",
    "o": [
     "À du café noir",
     "À du miel",
     "À du chocolat chaud"
    ],
    "a": 2,
    "why": "Une voix appréciée est riche, douce, chaude « like hot chocolate »."
   },
   {
    "k": "tf",
    "q": "Selon lui, le silence est à éviter dans un discours.",
    "a": false,
    "why": "Il dit qu'un silence peut être plus fort que des sons de remplissage."
   },
   {
    "k": "mcq",
    "q": "Quelle phrase utilise-t-il pour montrer que la hauteur de la voix change le sens ?",
    "o": [
     "« What time is it? »",
     "« Where did you leave my keys? »",
     "« Can you hear me? »"
    ],
    "a": 1,
    "why": "Il répète « Where did you leave my keys? » sur des tons différents."
   },
   {
    "k": "gap",
    "q": "Some people have a ___.",
    "a": [
     "blamethrower"
    ],
    "why": "À propos des excuses : « Some people have a blamethrower »."
   }
  ]
 }
]);
window.LISTEN.es.push(...
[
 {
  "id": "yt-es-videoele-la-comida",
  "lvl": "A1",
  "t": "La comida",
  "theme": "La nourriture",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "9XvSK0N4Cvg"
  },
  "credit": "videoELE · Nivel A1, « La comida »",
  "link": "https://www.videoele.com/Archivos/A1_La-comida-transcripcion.pdf",
  "sum": "Un narrateur présente ce qu'il y a dans la cuisine familiale : fruits, légumes, viande, poisson, produits du frigo et du placard. Il explique ce que boit la famille et ce qu'elle mange tous les jours.",
  "q": [
   {
    "k": "mcq",
    "q": "Quels sont les fruits préférés de la famille ?",
    "o": [
     "Les bananes et les fraises",
     "Les pommes et les oranges",
     "Les poires et les raisins"
    ],
    "a": 1,
    "why": "« Nuestras frutas preferidas son las manzanas y las naranjas. »"
   },
   {
    "k": "mcq",
    "q": "Que boit-on à la maison ?",
    "o": [
     "De l'eau et du jus",
     "Du lait et du soda",
     "Seulement du café"
    ],
    "a": 0,
    "why": "« En casa bebemos agua y zumo. »"
   },
   {
    "k": "tf",
    "q": "Les parents boivent aussi du vin et de la bière.",
    "a": true,
    "why": "« Mis padres también beben vino y cerveza. »"
   },
   {
    "k": "mcq",
    "q": "Que mange la famille tous les jours ?",
    "o": [
     "Du riz, des œufs et du fromage",
     "Du pain, des fruits et des légumes",
     "Des pâtes et de la viande"
    ],
    "a": 1,
    "why": "« Todos los días comemos pan », des fruits et des légumes."
   },
   {
    "k": "tf",
    "q": "La famille mange très peu de poisson.",
    "a": false,
    "why": "Au contraire : « También comemos mucho pescado. »"
   },
   {
    "k": "gap",
    "q": "También comemos un ___ de chocolate.",
    "a": [
     "poco"
    ],
    "why": "Ils mangent « un poco de chocolate », un peu de chocolat."
   }
  ]
 },
 {
  "id": "yt-es-videoele-buen-fin-semana",
  "lvl": "A1",
  "t": "¡Buen fin de semana!",
  "theme": "Le week-end",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "GZMn-e7IsT4"
  },
  "credit": "videoELE · Nivel A1, « ¡Buen fin de semana! »",
  "link": "https://www.videoele.com/Archivos/A1_Buen-fin-semana-transcripcion.pdf",
  "sum": "Une personne raconte ses week-ends habituels : courses et restaurant le vendredi, ménage et amis le samedi, grasse matinée, sport et télévision le dimanche.",
  "q": [
   {
    "k": "mcq",
    "q": "Que fait la personne le vendredi après-midi ?",
    "o": [
     "Elle fait les courses",
     "Elle va au cinéma",
     "Elle fait le ménage"
    ],
    "a": 0,
    "why": "Tous les vendredis après-midi, elle va acheter à manger."
   },
   {
    "k": "mcq",
    "q": "Que fait-elle le samedi matin ?",
    "o": [
     "Elle dort tard",
     "Elle nettoie la maison",
     "Elle va au marché"
    ],
    "a": 1,
    "why": "« Siempre limpio la casa » le samedi matin."
   },
   {
    "k": "tf",
    "q": "Le samedi après-midi, elle retrouve souvent des amis pour boire un verre dans un bar.",
    "a": true,
    "why": "Elle voit généralement ses amis et prend un verre au bar."
   },
   {
    "k": "tf",
    "q": "Le dimanche, elle se lève très tôt.",
    "a": false,
    "why": "« Los domingos me levanto tarde. »"
   },
   {
    "k": "mcq",
    "q": "Que fait-elle le dimanche après-midi ?",
    "o": [
     "Elle va au gymnase",
     "Elle se promène en ville",
     "Elle reste chez elle et regarde la télévision"
    ],
    "a": 2,
    "why": "Le dimanche après-midi, elle reste à la maison devant la télévision."
   },
   {
    "k": "gap",
    "q": "Nunca me ___ tarde.",
    "a": [
     "acuesto"
    ],
    "why": "« Nunca me acuesto tarde » : le lundi, elle travaille."
   }
  ]
 },
 {
  "id": "yt-es-videoele-granada-avion",
  "lvl": "A1",
  "t": "A Granada, en avión",
  "theme": "Le voyage",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "0v27LxWz-mY"
  },
  "credit": "videoELE · Nivel A1, « A Granada, en avión »",
  "link": "https://www.videoele.com/Archivos/A1_A-Granada-en-avion-Transcripcion.pdf",
  "sum": "Le narrateur part de Barcelone en bus jusqu'à l'aéroport, prend l'avion pour Grenade puis un car jusqu'en ville. Il visite l'Alhambra, la cathédrale, les quartiers du Sacromonte et de l'Albaicín.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment le narrateur va-t-il à l'aéroport de Barcelone ?",
    "o": [
     "En taxi",
     "En bus",
     "En train"
    ],
    "a": 1,
    "why": "Il traverse Barcelone en bus jusqu'à l'aéroport."
   },
   {
    "k": "mcq",
    "q": "Quelle est la destination du vol ?",
    "o": [
     "Séville",
     "Madrid",
     "Grenade"
    ],
    "a": 2,
    "why": "L'avion va de Barcelone à Grenade."
   },
   {
    "k": "tf",
    "q": "De l'aéroport de Grenade, il va en ville en car.",
    "a": true,
    "why": "Après l'atterrissage, il prend un car sur la route de Grenade."
   },
   {
    "k": "mcq",
    "q": "Quel monument visite-t-il à pied ?",
    "o": [
     "L'Alhambra",
     "La Sagrada Familia",
     "Le palais royal"
    ],
    "a": 0,
    "why": "Il va à pied jusqu'à l'Alhambra et visite aussi la cathédrale."
   },
   {
    "k": "tf",
    "q": "Il dit que Grenade est une ville ennuyeuse.",
    "a": false,
    "why": "« Granada es una ciudad muy interesante », amusante et belle."
   },
   {
    "k": "gap",
    "q": "Ella ___ en la plaza.",
    "a": [
     "baila"
    ],
    "why": "Sur une place, une femme danse pendant que d'autres chantent."
   }
  ]
 },
 {
  "id": "yt-es-videoele-mi-casa",
  "lvl": "A1",
  "t": "Mi casa",
  "theme": "La maison",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "Qs3kUMqRvKY"
  },
  "credit": "videoELE · Nivel A1, « Mi casa »",
  "link": "https://www.videoele.com/Archivos/A1_Mi_casa_Transc.pdf",
  "sum": "Une personne fait visiter sa maison : entrée, salon-salle à manger, balcon, couloir, cuisine, salle de bain et trois chambres. Elle dit ce que fait chacun dans chaque pièce.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment est la maison ?",
    "o": [
     "Très petite",
     "Assez grande",
     "Immense, avec un jardin"
    ],
    "a": 1,
    "why": "« Mi casa es bastante grande. »"
   },
   {
    "k": "mcq",
    "q": "Combien de chambres y a-t-il ?",
    "o": [
     "Deux",
     "Quatre",
     "Trois"
    ],
    "a": 2,
    "why": "Trois chambres : celle du narrateur, celle de son frère et celle des parents."
   },
   {
    "k": "tf",
    "q": "La chambre du frère est un peu petite.",
    "a": true,
    "why": "« Es un poco pequeña » ; elle a une armoire, un lit, des étagères, une table et un ordinateur."
   },
   {
    "k": "mcq",
    "q": "Qui cuisine dans la cuisine ?",
    "o": [
     "La mère",
     "Le frère",
     "Le père"
    ],
    "a": 0,
    "why": "C'est la mère qui cuisine."
   },
   {
    "k": "tf",
    "q": "Dans le salon-salle à manger, la famille mange et regarde la télévision ensemble.",
    "a": true,
    "why": "« Vemos la televisión todos juntos. »"
   },
   {
    "k": "gap",
    "q": "Aquí duermo y ___ música.",
    "a": [
     "escucho"
    ],
    "why": "Dans sa chambre, il dort et écoute de la musique."
   }
  ]
 },
 {
  "id": "yt-es-videoele-en-el-zoo",
  "lvl": "A1",
  "t": "En el zoo",
  "theme": "Les animaux",
  "dur": "3 min",
  "media": {
   "type": "youtube",
   "id": "QghIF9cro_Y"
  },
  "credit": "videoELE · Nivel A1, « En el zoo »",
  "link": "https://www.videoele.com/Archivos/A1_En_el_zoo_Transcripcion.pdf",
  "sum": "Au zoo, un narrateur présente des animaux sauvages : où ils vivent (Afrique, Asie…) et comment ils sont (grands, rapides, lents, lourds).",
  "q": [
   {
    "k": "mcq",
    "q": "Où vivent les tigres, d'après la vidéo ?",
    "o": [
     "En Afrique",
     "En Asie",
     "En Amérique"
    ],
    "a": 1,
    "why": "« Los tigres viven en Asia. »"
   },
   {
    "k": "mcq",
    "q": "Comment sont les guépards ?",
    "o": [
     "Minces et très rapides",
     "Gros et lents",
     "Petits et nageurs"
    ],
    "a": 0,
    "why": "Les guépards sont minces, courent très vite et vivent en Afrique."
   },
   {
    "k": "tf",
    "q": "Les tortues sont très lentes et n'ont pas de dents.",
    "a": true,
    "why": "« Las tortugas no tienen dientes » et elles sont très lentes."
   },
   {
    "k": "mcq",
    "q": "Quel animal est appelé « le roi » ?",
    "o": [
     "L'éléphant",
     "Le gorille",
     "Le lion"
    ],
    "a": 2,
    "why": "« El león es el rey. »"
   },
   {
    "k": "tf",
    "q": "Les zèbres vivent en Asie.",
    "a": false,
    "why": "Les zèbres vivent en Afrique et sont noirs et blancs."
   },
   {
    "k": "gap",
    "q": "Sus ___ son muy grandes.",
    "a": [
     "orejas"
    ],
    "why": "Les éléphants ont de très grandes oreilles."
   }
  ]
 },
 {
  "id": "yt-es-videoele-conocer-gente",
  "lvl": "A1",
  "t": "Conocer gente",
  "theme": "Se présenter",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "G8XcMo49eus"
  },
  "credit": "videoELE · Nivel A1, « Conocer gente »",
  "link": "https://www.videoele.com/Archivos/A1_Conocer-gente-Transcripcion.pdf",
  "sum": "Quatre femmes hispanophones se présentent : Claudia (Madrid, vit en Allemagne), Jenniffer (Colombie, vit à Cologne), Judy (Argentine, vit à Miami) et Meliza (Mexique). Elles parlent de leur âge, de leur travail et de leurs loisirs.",
  "q": [
   {
    "k": "mcq",
    "q": "Que fait Claudia comme métier ?",
    "o": [
     "Médecin",
     "Professeure d'espagnol",
     "Comptable"
    ],
    "a": 1,
    "why": "« Soy profesora de español » dans une école internationale en Allemagne."
   },
   {
    "k": "mcq",
    "q": "Quel âge a Jenniffer ?",
    "o": [
     "32 ans",
     "37 ans",
     "40 ans"
    ],
    "a": 0,
    "why": "« Tengo 32 años » ; son anniversaire est le 4 mai."
   },
   {
    "k": "tf",
    "q": "Jenniffer va au travail à vélo quand il fait beau, et en train quand il pleut.",
    "a": true,
    "why": "Elle prend le vélo par beau temps et le train quand il pleut."
   },
   {
    "k": "mcq",
    "q": "Où vit Judy ?",
    "o": [
     "À Buenos Aires",
     "À Madrid",
     "À Miami"
    ],
    "a": 2,
    "why": "Judy est née à Buenos Aires mais vit à Miami, où elle enseigne l'espagnol."
   },
   {
    "k": "tf",
    "q": "Meliza aime faire la queue.",
    "a": false,
    "why": "« No me gusta hacer fila. »"
   },
   {
    "k": "gap",
    "q": "Me gusta escuchar ___ cuando manejo.",
    "a": [
     "música"
    ],
    "why": "Meliza aime écouter de la musique quand elle conduit."
   }
  ]
 },
 {
  "id": "yt-es-videoele-sola-en-casa",
  "lvl": "A2",
  "t": "Sola en casa",
  "theme": "Les tâches ménagères",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "paD8XUFaFE4"
  },
  "credit": "videoELE · Nivel A2, « Sola en casa »",
  "link": "https://www.videoele.com/Archivos/A2_Sola-en-casa-transcripcion.pdf",
  "sum": "Une jeune fille est restée seule à la maison et a beaucoup de tâches ménagères à faire. Quand ses parents rentrent, on voit ce qu'elle a déjà fait et ce qu'elle n'a pas encore fait.",
  "q": [
   {
    "k": "mcq",
    "q": "Pourquoi la jeune fille est-elle seule ?",
    "o": [
     "Ses parents sont partis",
     "Elle est malade",
     "Ses amis sont en vacances"
    ],
    "a": 0,
    "why": "« Sus padres se han marchado. »"
   },
   {
    "k": "mcq",
    "q": "Qu'aimerait-elle faire ?",
    "o": [
     "Faire du sport",
     "Se reposer et discuter avec ses amis",
     "Cuisiner"
    ],
    "a": 1,
    "why": "Elle veut se reposer et parler avec ses amis, mais elle a beaucoup de tâches."
   },
   {
    "k": "tf",
    "q": "Parmi ses tâches, il y a arroser les plantes et sortir les poubelles.",
    "a": true,
    "why": "La liste comprend aussi la vaisselle, le balai, la serpillière et la poussière."
   },
   {
    "k": "tf",
    "q": "Quand ses parents rentrent, elle a déjà balayé le sol.",
    "a": false,
    "why": "« Todavía no ha barrido el suelo. »"
   },
   {
    "k": "mcq",
    "q": "Qu'a-t-elle déjà fait ?",
    "o": [
     "La vaisselle",
     "Les courses",
     "Son lit et le rangement du salon"
    ],
    "a": 2,
    "why": "Elle a fait son lit et « ya ha ordenado el salón »."
   },
   {
    "k": "gap",
    "q": "Ya ha limpiado el ___.",
    "a": [
     "polvo"
    ],
    "why": "Elle a déjà fait la poussière."
   }
  ]
 },
 {
  "id": "yt-es-videoele-estacion-tren",
  "lvl": "A2",
  "t": "En la estación de tren",
  "theme": "À la gare",
  "dur": "4 min",
  "media": {
   "type": "youtube",
   "id": "CBk0C8nli8w"
  },
  "credit": "videoELE · Nivel A2, « En la estación de tren »",
  "link": "https://www.videoele.com/Archivos/A2_En-la-estacion-de-tren-transcripcion.pdf",
  "sum": "Un voyageur à la gare Santa Justa de Séville prend un train pour Cordoue. Il décrit la gare, son billet (horaires, prix, voiture, place) et le trajet, et explique qu'il préfère le train à l'avion.",
  "q": [
   {
    "k": "mcq",
    "q": "Où va le voyageur ?",
    "o": [
     "À Málaga",
     "À Cordoue",
     "À Madrid"
    ],
    "a": 1,
    "why": "Il part de Séville pour Cordoue, à environ 140 km ; le train continue vers Málaga."
   },
   {
    "k": "mcq",
    "q": "Combien a coûté le billet ?",
    "o": [
     "17 euros",
     "35 euros",
     "50 euros"
    ],
    "a": 0,
    "why": "Le billet a coûté 17 euros, en classe touriste."
   },
   {
    "k": "mcq",
    "q": "Quelle est sa place ?",
    "o": [
     "Voiture 5, place 2D",
     "Voiture 6, place 7A",
     "Voiture 2, place 5D"
    ],
    "a": 2,
    "why": "Voiture 2, « mi asiento es el 5D »."
   },
   {
    "k": "tf",
    "q": "Son train part du quai six.",
    "a": true,
    "why": "Le panneau d'information indique le quai six."
   },
   {
    "k": "tf",
    "q": "On a le droit de fumer dans le train.",
    "a": false,
    "why": "Il demande « ¿Puedo fumar en el tren? » : non, c'est interdit."
   },
   {
    "k": "gap",
    "q": "Me gusta mirar el ___.",
    "a": [
     "paisaje"
    ],
    "why": "Il a une place côté fenêtre et aime regarder le paysage."
   }
  ]
 },
 {
  "id": "yt-es-videoele-casa-rural",
  "lvl": "A2",
  "t": "Una casa rural",
  "theme": "Les vacances",
  "dur": "3 min",
  "media": {
   "type": "youtube",
   "id": "Rytfl_rMfnQ"
  },
  "credit": "videoELE · Nivel A2, « Una casa rural »",
  "link": "https://www.videoele.com/Archivos/A2_Casa-rural-transcripcion.pdf",
  "sum": "Une famille a passé la Semaine sainte dans un gîte à la campagne, le même que l'année précédente. Elle décrit la maison et ses équipements, et explique pourquoi elle préfère un gîte à un hôtel.",
  "q": [
   {
    "k": "mcq",
    "q": "Combien de chambres a la maison ?",
    "o": [
     "Trois",
     "Six",
     "Huit"
    ],
    "a": 1,
    "why": "C'est une grande maison de six chambres, pour grandes familles ou groupes d'amis."
   },
   {
    "k": "mcq",
    "q": "Combien de temps sont-ils restés ?",
    "o": [
     "Cinq jours, du jeudi au lundi",
     "Une semaine entière",
     "Un week-end"
    ],
    "a": 0,
    "why": "« Hemos estado cinco días », du jeudi au lundi."
   },
   {
    "k": "tf",
    "q": "C'est la première fois qu'ils vont dans cette maison.",
    "a": false,
    "why": "Ils y étaient déjà allés l'année précédente et avaient aimé."
   },
   {
    "k": "tf",
    "q": "Dehors, il y a une table de ping-pong, un barbecue et une piscine.",
    "a": true,
    "why": "Le jardin a aussi une aire de jeux, un filet de volley et des vélos."
   },
   {
    "k": "mcq",
    "q": "Pourquoi préfèrent-ils un gîte à un hôtel ?",
    "o": [
     "C'est moins cher",
     "C'est près de la plage",
     "Plus de liberté d'horaires, plus d'espace, et ils cuisinent eux-mêmes"
    ],
    "a": 2,
    "why": "Ils citent la flexibilité des horaires, l'espace et la possibilité de cuisiner."
   },
   {
    "k": "gap",
    "q": "La casa está en medio del ___.",
    "a": [
     "campo"
    ],
    "why": "La maison est « en medio del campo », dans un endroit très calme."
   }
  ]
 },
 {
  "id": "yt-es-videoele-fin-de-semana-pasado",
  "lvl": "A2",
  "t": "El fin de semana pasado",
  "theme": "Un week-end à Madrid",
  "dur": "4 min",
  "media": {
   "type": "youtube",
   "id": "_Bt5l0zCnkM"
  },
  "credit": "videoELE · Nivel A2, « El fin de semana pasado »",
  "link": "https://www.videoele.com/Archivos/A2_El-fin-de-semana.pdf",
  "sum": "Le narrateur raconte un week-end à Madrid avec des proches : comédie musicale sur la Gran Vía, chocolat et churros, musée du Prado, marché du Rastro et parc du Retiro.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment sont-ils allés à Madrid ?",
    "o": [
     "En voiture",
     "En avion",
     "En train"
    ],
    "a": 2,
    "why": "« Fuimos el viernes en tren », jusqu'à la gare d'Atocha."
   },
   {
    "k": "mcq",
    "q": "Qu'ont-ils vu le vendredi soir ?",
    "o": [
     "Une comédie musicale sur la Gran Vía",
     "Un match de football",
     "Un concert au Retiro"
    ],
    "a": 0,
    "why": "Le vendredi soir, ils ont vu une comédie musicale sur la Gran Vía."
   },
   {
    "k": "mcq",
    "q": "Qu'ont-ils mangé au petit-déjeuner le samedi ?",
    "o": [
     "Des tostadas",
     "Du chocolat avec des churros",
     "Des croissants"
    ],
    "a": 1,
    "why": "Le samedi, petit-déjeuner chocolat et churros."
   },
   {
    "k": "tf",
    "q": "Pendant que ses amis allaient au stade du Real Madrid, le narrateur a visité le Prado.",
    "a": true,
    "why": "Il n'aime pas le football ; il est allé voir les tableaux de Velázquez au Prado."
   },
   {
    "k": "tf",
    "q": "Au Retiro, ils ont fait un tour en barque.",
    "a": false,
    "why": "Ils ont fait le tour du lac, « pero no montamos en barca »."
   },
   {
    "k": "gap",
    "q": "Nos lo pasamos muy ___.",
    "a": [
     "bien"
    ],
    "why": "Ils se sont très bien amusés."
   }
  ]
 },
 {
  "id": "yt-es-videoele-cuando-era-pequena",
  "lvl": "A2",
  "t": "Cuando era pequeña...",
  "theme": "Souvenirs d'enfance",
  "dur": "3 min",
  "media": {
   "type": "youtube",
   "id": "3pmwWsqYiIA"
  },
  "credit": "videoELE · Nivel A2, « Cuando era pequeña... »",
  "link": "https://www.videoele.com/Archivos/A2_Cuando_era_peque_Transc.pdf",
  "sum": "Teresa, 35 ans, citadine, se souvient de ses étés d'enfance avec sa sœur dans le village de ses grands-parents : la rivière, les animaux, la forêt et un arbre à qui elle confiait ses secrets.",
  "q": [
   {
    "k": "mcq",
    "q": "Quel âge a Teresa ?",
    "o": [
     "25 ans",
     "35 ans",
     "45 ans"
    ],
    "a": 1,
    "why": "Teresa a 35 ans et a toujours vécu en ville."
   },
   {
    "k": "mcq",
    "q": "Où passait-elle ses étés quand elle était petite ?",
    "o": [
     "Au bord de la mer",
     "Dans le village de ses grands-parents",
     "En colonie de vacances"
    ],
    "a": 1,
    "why": "Elle passait l'été avec sa sœur au village de ses grands-parents."
   },
   {
    "k": "tf",
    "q": "Le village était très petit, à côté d'une grande montagne.",
    "a": true,
    "why": "« Era un pueblo muy pequeño », avec des maisons et des rues en pierre."
   },
   {
    "k": "tf",
    "q": "L'eau de la rivière était chaude.",
    "a": false,
    "why": "Elles se baignaient, mais l'eau était très froide."
   },
   {
    "k": "mcq",
    "q": "À quoi ressemblait l'arbre de la forêt ?",
    "o": [
     "À un vieil homme",
     "À un château",
     "À un animal"
    ],
    "a": 0,
    "why": "L'arbre « parecía un hombre viejo » ; elle lui racontait ses secrets."
   },
   {
    "k": "gap",
    "q": "Me encantaban los ___.",
    "a": [
     "animales"
    ],
    "why": "Elle adorait les animaux et donnait à manger aux chèvres de son grand-père."
   }
  ]
 },
 {
  "id": "yt-es-videoele-sevilla-dos-dias",
  "lvl": "A2",
  "t": "Sevilla en dos días",
  "theme": "Visiter une ville",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "4PwtNx9OLUM"
  },
  "credit": "videoELE · Nivel A2, « Sevilla en dos días »",
  "link": "https://www.videoele.com/Archivos/A2_Sevilla-dos-dias-Transcripcion.pdf",
  "sum": "Une guide explique comment voir l'essentiel de Séville en un week-end : la cathédrale et la Giralda, l'Alcázar, la place d'Espagne, le parc María Luisa, le quartier de Santa Cruz, le Guadalquivir et Triana, les tapas et le flamenco.",
  "q": [
   {
    "k": "tf",
    "q": "Selon la guide, un week-end suffit pour voir l'essentiel de Séville.",
    "a": true,
    "why": "« Un fin de semana es suficiente », mais il faudrait cinq jours pour bien connaître la ville."
   },
   {
    "k": "mcq",
    "q": "Que peut-on faire à la cathédrale ?",
    "o": [
     "Monter à la tour de la Giralda",
     "Faire un tour en barque",
     "Voir un spectacle de flamenco"
    ],
    "a": 0,
    "why": "On peut monter à la Giralda pour voir la ville."
   },
   {
    "k": "mcq",
    "q": "Quel est le quartier préféré de la guide ?",
    "o": [
     "Triana",
     "Santa Cruz",
     "La Macarena"
    ],
    "a": 1,
    "why": "Santa Cruz, à côté de l'Alcázar, avec ses ruelles, ses places et ses patios fleuris."
   },
   {
    "k": "tf",
    "q": "La balade en calèche dans le centre historique est très chère.",
    "a": false,
    "why": "Elle dure environ une heure et elle est amusante et pas chère."
   },
   {
    "k": "mcq",
    "q": "Quel fleuve traverse Séville ?",
    "o": [
     "L'Èbre",
     "Le Tage",
     "Le Guadalquivir"
    ],
    "a": 2,
    "why": "Le Guadalquivir traverse la ville ; la Torre del Oro est à côté."
   },
   {
    "k": "gap",
    "q": "Sevilla es una ciudad ___.",
    "a": [
     "preciosa"
    ],
    "why": "« Sevilla es una ciudad preciosa. »"
   }
  ]
 },
 {
  "id": "yt-es-easy-spanish-start-day",
  "lvl": "B1",
  "t": "How Do You Start Your Day? | Easy Spanish 342",
  "theme": "La routine du matin",
  "dur": "12 min",
  "media": {
   "type": "youtube",
   "id": "ybfyLfI5Ml0"
  },
  "credit": "Easy Spanish · interviews de rue, épisode 342",
  "link": "https://sozai.app/transcript/start-day-easy-spanish-342/",
  "sum": "Dans les rues de Barcelone, des passants disent à quelle heure ils se lèvent le week-end et en semaine, et décrivent ce qu'ils font en premier le matin (café, douche, petit-déjeuner, s'habiller).",
  "q": [
   {
    "k": "mcq",
    "q": "Dans quelle ville se déroulent les interviews ?",
    "o": [
     "Valence",
     "Barcelone",
     "Madrid"
    ],
    "a": 1,
    "why": "Le présentateur explique que la vidéo porte sur les routines « aquí en Barcelona »."
   },
   {
    "k": "tf",
    "q": "Le jour du tournage était un jour de semaine.",
    "a": false,
    "why": "C'était un week-end : une personne s'est levée à 10 h « un sábado » pour faire la grasse matinée."
   },
   {
    "k": "mcq",
    "q": "Pourquoi un groupe s'est-il levé tôt ce jour-là ?",
    "o": [
     "Pour prendre un avion",
     "Pour aller travailler",
     "Pour une course qui commençait à 9 h"
    ],
    "a": 2,
    "why": "« Hoy teníamos una carrera aquí en Barcelona » : ils ont pris le petit-déjeuner tôt pour digérer avant de courir."
   },
   {
    "k": "gap",
    "q": "Hoy teníamos una ___ aquí en Barcelona.",
    "a": [
     "carrera"
    ],
    "why": "Phrase entendue dans la vidéo : « Hoy teníamos una carrera aquí en Barcelona »."
   },
   {
    "k": "mcq",
    "q": "Combien de temps de métro une personne fait-elle pour aller au travail ?",
    "o": [
     "20 minutes",
     "40 minutes",
     "1 heure"
    ],
    "a": 1,
    "why": "Elle part à 7 h 20 et fait « 40 minutos de metro » pour arriver à 8 h."
   },
   {
    "k": "tf",
    "q": "Une personne garde la même routine même pendant les vacances.",
    "a": true,
    "why": "Elle se lève à 7 h car « tengo una rutina establecida »."
   },
   {
    "k": "mcq",
    "q": "Pourquoi une personne se lève-t-elle vers 5 h ou 6 h ?",
    "o": [
     "Parce qu'elle s'entraîne puis va travailler",
     "Parce qu'elle a un bébé",
     "Parce qu'elle habite à la campagne"
    ],
    "a": 0,
    "why": "« Porque me entreno y también voy a trabajar »."
   }
  ]
 },
 {
  "id": "yt-es-easy-spanish-dating-apps",
  "lvl": "B1",
  "t": "Dating Apps and Physical Descriptions: Slow Spanish Conversation",
  "theme": "Décrire une personne",
  "dur": "14 min",
  "media": {
   "type": "youtube",
   "id": "-fw88THuy7U"
  },
  "credit": "Easy Spanish · Slow Spanish Conversation",
  "link": "https://sozai.app/transcript/dating-apps-physical-descriptions-spanish/",
  "sum": "David et Aida, anciens colocataires, regardent ensemble des profils sur une application de rencontre : ils décrivent le physique et le caractère de Camino, Pauli et Ada, puis d'un grimpeur, Jarro. David trouve finalement les applis un peu froides.",
  "q": [
   {
    "k": "mcq",
    "q": "Quel lien y a-t-il entre David et Aida ?",
    "o": [
     "Ce sont des collègues",
     "Ce sont d'anciens colocataires",
     "Ce sont des cousins"
    ],
    "a": 1,
    "why": "« Ahora que no somos compañeros de piso » : ils vivaient ensemble avant."
   },
   {
    "k": "tf",
    "q": "Camino porte une coiffure en crête colorée.",
    "a": true,
    "why": "David la décrit avec une crête colorée ; Aida répond : « Es un peinado no tan típico »."
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce qui étonne David dans le profil de Pauli ?",
    "o": [
     "Elle déteste le cinéma",
     "Elle vit à l'étranger",
     "Ses photos montrent une moto, mais elle dit aimer le silence"
    ],
    "a": 2,
    "why": "Les photos montrent une moto et une route, alors que son profil dit qu'elle adore le silence."
   },
   {
    "k": "gap",
    "q": "Las motos me dan mucho ___.",
    "a": [
     "miedo"
    ],
    "why": "David avoue à propos des motos : « me dan mucho miedo »."
   },
   {
    "k": "mcq",
    "q": "Quel âge a Ada ?",
    "o": [
     "25 ans",
     "29 ans",
     "34 ans"
    ],
    "a": 1,
    "why": "Ada a 29 ans ; c'est Jarro qui en a 34."
   },
   {
    "k": "tf",
    "q": "À la fin, David trouve les applis chaleureuses et veut continuer à les utiliser.",
    "a": false,
    "why": "Il dit « Creo que es un poco frío » et pense supprimer l'application."
   },
   {
    "k": "mcq",
    "q": "Quelle phrase figure dans le profil de Jarro, le grimpeur ?",
    "o": [
     "« Amo el silencio »",
     "« Vivir sin reglas »",
     "« La vida es mejor arriba »"
    ],
    "a": 2,
    "why": "La bio de Jarro dit : « La vida es mejor arriba »."
   }
  ]
 },
 {
  "id": "yt-es-why-not-spanish-meet-paul",
  "lvl": "B1",
  "t": "Interview in Spanish - Meet Paul",
  "theme": "Apprendre une langue",
  "dur": "11 min",
  "media": {
   "type": "youtube",
   "id": "vRMAc1UgW-w"
  },
  "credit": "Why Not Spanish? · Spanish Listening Activity",
  "link": "https://sozai.app/transcript/interview-in-spanish-meet-paul-spanish-listening-ac-transcript/",
  "sum": "María interviewe Paul, professeur d'espagnol dans une école de Franklin. Il raconte comment il a appris l'espagnol : la grammaire au lycée, cinq mois au Panama, puis quatre ans au Mexique, et donne ses conseils pour apprendre depuis chez soi.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment ses élèves appellent-ils Paul ?",
    "o": [
     "« profe »",
     "« maestro »",
     "« señor Paul »"
    ],
    "a": 0,
    "why": "Ses élèves l'appellent « profe », ce que confirme le quiz final."
   },
   {
    "k": "mcq",
    "q": "Depuis quelle année Paul enseigne-t-il l'espagnol ?",
    "o": [
     "1998",
     "2018",
     "2008"
    ],
    "a": 2,
    "why": "Il enseigne depuis 2008 (vrai dans le quiz final)."
   },
   {
    "k": "tf",
    "q": "Au lycée, Paul savait écrire en espagnol mais ne savait ni comprendre ni parler.",
    "a": true,
    "why": "« yo no sabía escuchar ni hablar » : il avait étudié la grammaire mais peu pratiqué."
   },
   {
    "k": "mcq",
    "q": "Dans quels pays Paul a-t-il vécu ?",
    "o": [
     "Au Guatemala et au Mexique",
     "Au Panama et au Mexique",
     "En Espagne et au Panama"
    ],
    "a": 1,
    "why": "Cinq mois au Panama puis quatre ans au Mexique ; le quiz corrige « Guatemala » en « Panama »."
   },
   {
    "k": "mcq",
    "q": "Selon Paul, qu'est-ce qui l'a le plus poussé à parler ?",
    "o": [
     "Les examens",
     "Les films",
     "La nécessité, par exemple pour acheter du lait"
    ],
    "a": 2,
    "why": "« Es la necesidad » : dans une boutique où personne ne parlait anglais, il devait se débrouiller."
   },
   {
    "k": "gap",
    "q": "Netflix tiene los dos ___.",
    "a": [
     "idiomas"
    ],
    "why": "Conseil de Paul pour apprendre chez soi : « Netflix tiene los dos idiomas »."
   },
   {
    "k": "tf",
    "q": "Pour Paul, il est obligatoire de voyager pour apprendre l'espagnol.",
    "a": false,
    "why": "Il préfère le voyage, mais on peut apprendre chez soi avec la musique, Netflix et une communauté hispanophone."
   }
  ]
 },
 {
  "id": "yt-es-cristina-asai-agenda",
  "lvl": "B1",
  "t": "CÓMO ORGANIZAR TU AGENDA: Tips y Trucos para la Escuela y Universidad",
  "theme": "Les études",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "UuwLnkTAQvc"
  },
  "credit": "Cristina Asai (chaîne officielle)",
  "link": "https://sozai.app/transcript/how-to-organize-your-planner-tips-tricks-school-university/",
  "sum": "Cristina Asai montre comment elle organise son agenda d'étudiante : une couleur par matière, les examens en majuscules et surlignés, les tâches par ordre d'importance, une liste à part pour le reste, et une flèche avec la date limite à côté de chaque devoir.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment distingue-t-elle ses différentes matières ?",
    "o": [
     "Avec le nom en majuscules et une couleur spécifique",
     "Avec des numéros",
     "Avec des autocollants"
    ],
    "a": 0,
    "why": "Chaque matière a son nom en majuscules « en un color específico »."
   },
   {
    "k": "tf",
    "q": "Elle surligne les examens pour ne pas oublier de réviser.",
    "a": true,
    "why": "Elle les surligne « para que pueda resaltar mucho más » et pour que « no me olvide de estudiar »."
   },
   {
    "k": "mcq",
    "q": "Avec quoi écrit-elle ses devoirs et exposés ?",
    "o": [
     "Un crayon à papier",
     "Un stylo noir",
     "Un feutre rouge"
    ],
    "a": 1,
    "why": "Elle écrit les devoirs « con un lapicero negro »."
   },
   {
    "k": "gap",
    "q": "Al costado de cada uno pongo una ___.",
    "a": [
     "flecha"
    ],
    "why": "À côté de chaque tâche, elle dessine une flèche et écrit la date : « al costado de cada uno pongo una flecha »."
   },
   {
    "k": "tf",
    "q": "Elle note ses activités extrascolaires dans la même liste que ses devoirs.",
    "a": false,
    "why": "Les activités sans rapport avec l'école ou l'université vont sur une liste séparée."
   },
   {
    "k": "mcq",
    "q": "Que dit-elle de sa méthode ?",
    "o": [
     "C'est la seule qui fonctionne",
     "Il faut utiliser beaucoup de couleurs",
     "Elle peut paraître excessive à certains"
    ],
    "a": 2,
    "why": "« para muchas personas esto puede parecer excesivo », mais chacun doit organiser son agenda comme il veut."
   }
  ]
 },
 {
  "id": "yt-es-espana-total-paradores",
  "lvl": "B1",
  "t": "alojamientos en lugares especiales | PARADORES #236",
  "theme": "Voyager en Espagne",
  "dur": "12 min",
  "media": {
   "type": "youtube",
   "id": "p6V1hkXFSBU"
  },
  "credit": "España Total · épisode 236",
  "link": "https://sozai.app/transcript/paradores-spain-special-accommodations-episode-236/",
  "sum": "Tony présente les paradores, hôtels publics espagnols souvent installés dans des bâtiments historiques, puis compare trois séjours : le palais d'Olite, le château de Sigüenza et les anciens collèges d'Alcalá de Henares, son préféré.",
  "q": [
   {
    "k": "mcq",
    "q": "Qu'est-ce qu'un parador ?",
    "o": [
     "Une auberge de jeunesse privée",
     "Un hôtel d'une entreprise 100 % publique, souvent dans un bâtiment historique",
     "Un camping au bord de la mer"
    ],
    "a": 1,
    "why": "Les paradores dépendent d'« una empresa 100% de titularidad pública » et occupent souvent des bâtiments historiques."
   },
   {
    "k": "mcq",
    "q": "En quelle année le premier parador a-t-il ouvert ?",
    "o": [
     "1928",
     "1968",
     "2009"
    ],
    "a": 0,
    "why": "« el primer parador se inauguró en 1928 »."
   },
   {
    "k": "tf",
    "q": "Le parador d'Olite est un hôtel cinq étoiles.",
    "a": false,
    "why": "C'est « un hotel de tres estrellas », installé dans un palais gothique de Navarre."
   },
   {
    "k": "mcq",
    "q": "Dans quel bâtiment se trouve le parador de Sigüenza ?",
    "o": [
     "Un ancien couvent",
     "Un palais royal",
     "Le château des évêques"
    ],
    "a": 2,
    "why": "Il occupe « el castillo de los obispos de Sigüenza », à environ 140 km de Madrid."
   },
   {
    "k": "tf",
    "q": "À Alcalá de Henares, les chambres modernes ont été construites sous le niveau de la rue.",
    "a": true,
    "why": "Les règles de l'UNESCO limitaient la hauteur : les chambres donnent sur un jardin creusé."
   },
   {
    "k": "gap",
    "q": "Para nosotros es uno de los mejores ___ de España.",
    "a": [
     "hoteles"
    ],
    "why": "Tony conclut que celui d'Alcalá est « uno de los mejores hoteles de España »."
   }
  ]
 },
 {
  "id": "voa-es-museo-nacional-colombia",
  "lvl": "B2",
  "t": "Museo Nacional de Colombia, de las obras de Botero al liquiliqui del Nobel de Gabo",
  "theme": "Musées et art",
  "dur": "3 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2025/03/d/d8/d80f5f07-5b29-4fda-109b-08dd5c8d307c.mp4?cb=edf677692&download=1"
  },
  "credit": "Voz de América (VOA) · reportage de Camilo Álvarez et Daniel Muñoz, Bogotá",
  "link": "https://www.vozdeamerica.com/a/museo-nacional-colombia-obras-botero-gabo-/8011202.html",
  "sum": "Le Musée national de Colombie, à Bogotá, fondé en 1823 et installé depuis 1948 dans une ancienne prison, expose notamment des œuvres de Fernando Botero et le liquiliqui que Gabriel García Márquez portait pour recevoir le prix Nobel en 1982. Il reçoit environ 500 000 visiteurs par an.",
  "q": [
   {
    "k": "mcq",
    "q": "En quelle année le musée a-t-il été fondé ?",
    "o": [
     "1948",
     "1823",
     "1982"
    ],
    "a": 1,
    "why": "Fondé en 1823, c'est le plus ancien musée national du pays ; il s'est installé dans son bâtiment actuel en 1948."
   },
   {
    "k": "tf",
    "q": "Le musée occupe aujourd'hui une ancienne prison.",
    "a": true,
    "why": "« Esta antigua prisión, diseñada por el arquitecto constructor Thomas Reed » : les anciennes cellules sont devenues des salles."
   },
   {
    "k": "gap",
    "q": "Botero es uno de los artistas ___ en la historia del arte colombiano.",
    "a": [
     "insignes"
    ],
    "why": "La sous-directrice Marisol Arango : « Botero es uno de los artistas insignes en la historia del arte colombiano »."
   },
   {
    "k": "mcq",
    "q": "Qu'est-ce que le liquiliqui exposé au musée ?",
    "o": [
     "Le costume que García Márquez portait pour recevoir le Nobel",
     "Un tableau de Botero",
     "Un instrument de musique des Llanos"
    ],
    "a": 0,
    "why": "C'est le vêtement traditionnel des Llanos que García Márquez a porté pour le prix Nobel de littérature 1982."
   },
   {
    "k": "mcq",
    "q": "Combien de visiteurs le musée reçoit-il environ chaque année ?",
    "o": [
     "50 000",
     "5 millions",
     "500 000"
    ],
    "a": 2,
    "why": "« Con cerca de 500.000 visitantes anuales, el museo es un tesoro »."
   },
   {
    "k": "tf",
    "q": "Le touriste interrogé, Carlos Arca, vient d'Argentine.",
    "a": false,
    "why": "Carlos Arca vient du Brésil ; il cite « Cien años de soledad »."
   }
  ]
 },
 {
  "id": "voa-es-aguila-arpia-colombia",
  "lvl": "B2",
  "t": "El águila arpía: Biólogos y militares colombianos trabajan para salvarla de la extinción",
  "theme": "Animaux menacés",
  "dur": "5 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2024/03/0/01/01000000-c0a8-0242-fec1-08dc3e018b63.mp4?cb=edd7ab473&download=1"
  },
  "credit": "Voz de América (VOA) · reportage de Camilo Álvarez et Liz Castrellón, Colombie",
  "link": "https://www.vozdeamerica.com/a/aguila-arpia-majestuoso-animal-colombia-salvar-de-la-extincion/7516215.html",
  "sum": "À Cota, près de Bogotá, le Bioparque La Reserva et la Force aérospatiale colombienne soignent quatre aigles harpies blessés par des chasseurs. Ils veulent obtenir la première reproduction de l'espèce en Colombie, car cet aigle, menacé par la déforestation, ne pond qu'un poussin tous les deux ou trois ans.",
  "q": [
   {
    "k": "mcq",
    "q": "Qui travaille ensemble pour sauver l'aigle harpie ?",
    "o": [
     "Une université et un zoo étranger",
     "Le Bioparque La Reserva et la Force aérospatiale colombienne",
     "Des chasseurs et la police"
    ],
    "a": 1,
    "why": "Depuis plus de dix ans, le Bioparque La Reserva et la FAC mènent un programme de reproduction."
   },
   {
    "k": "mcq",
    "q": "Pourquoi les aigles soignés à Cota sont-ils blessés ?",
    "o": [
     "Ils ont reçu des tirs de chasseurs",
     "Ils ont percuté des lignes électriques",
     "Ils ont échappé à un incendie"
    ],
    "a": 0,
    "why": "Les quatre aigles, deux femelles et deux mâles, ont été blessés par balle par des chasseurs."
   },
   {
    "k": "tf",
    "q": "Ces quatre aigles pourront bientôt être relâchés dans la forêt.",
    "a": false,
    "why": "Ils ne peuvent pas retourner à la vie sauvage : c'est un futur poussin qui pourrait être relâché."
   },
   {
    "k": "gap",
    "q": "Queremos cambiar la historia a una que cree ___.",
    "a": [
     "vida"
    ],
    "why": "Iván Lozano, cofondateur du Bioparque, veut « cambiar la historia a una que cree vida »."
   },
   {
    "k": "tf",
    "q": "L'aigle harpie ne se reproduit que tous les deux ou trois ans, avec un seul poussin.",
    "a": true,
    "why": "C'est une espèce monogame qui n'a qu'un poussin par cycle de reproduction."
   },
   {
    "k": "mcq",
    "q": "Pourquoi l'armée de l'air s'intéresse-t-elle à cet oiseau ?",
    "o": [
     "Il attaque les avions",
     "C'est l'oiseau emblème de la FAC, comme son hélicoptère Arpía",
     "Il sert à surveiller la frontière"
    ],
    "a": 1,
    "why": "Pour le major Daniel Hernández, l'aigle est l'oiseau emblématique de la FAC : « ese es el significado que nosotros le damos al águila »."
   }
  ]
 },
 {
  "id": "voa-es-gusano-mojojoy",
  "lvl": "B2",
  "t": "Gusano mojojoy: Gastronomía basada en productos de la selva colombiana",
  "theme": "Cuisine et traditions",
  "dur": "5 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2023/03/0/01/01000000-0a00-0242-852f-08db3137e241.mp4?cb=edbbf7e50&download=1"
  },
  "credit": "Voz de América (VOA) · reportage de Camilo Álvarez et Liz Castrellón, Bogotá",
  "link": "https://www.vozdeamerica.com/a/una-larva-como-almuerzo-gusano-amazonico-superalimenticio/7028889.html",
  "sum": "Le mojojoy, larve d'un charançon des palmiers d'Amazonie mangée depuis des générations par les peuples indigènes, arrive dans la haute cuisine de Bogotá. Une nutritionniste souligne sa richesse en protéines et le chef du restaurant Açaí explique sa recette.",
  "q": [
   {
    "k": "mcq",
    "q": "Qu'est-ce que le mojojoy ?",
    "o": [
     "Un poisson géant d'Amazonie",
     "Un fruit de palmier",
     "La larve d'un insecte qui vit dans les palmiers amazoniens"
    ],
    "a": 2,
    "why": "C'est la larve du charançon noir du palmier, consommée par les communautés indigènes."
   },
   {
    "k": "mcq",
    "q": "Comment s'appelle le restaurant de Bogotá présenté ?",
    "o": [
     "Açaí",
     "Leticia",
     "Pirarucú"
    ],
    "a": 0,
    "why": "Julián Niño goûte le mojojoy chez Açaí, restaurant amazonien fondé par le chef Andrews Andrade."
   },
   {
    "k": "tf",
    "q": "Selon la nutritionniste Olga Pinzón, le mojojoy peut être une bonne source de protéines.",
    "a": true,
    "why": "Elle dit que c'est « una gran alternativa para tener una adecuada fuente de proteína »."
   },
   {
    "k": "gap",
    "q": "¿Quién pagaría para comerse un ___?",
    "a": [
     "gusano"
    ],
    "why": "Le chef Andrade : « ¿quién pagaría para comerse un gusano? »… et pourtant les clients le paient comme un plat gastronomique."
   },
   {
    "k": "mcq",
    "q": "Avec quoi le chef mélange-t-il la graisse du ver ?",
    "o": [
     "Du riz et des haricots",
     "Du pirarucú, des herbes amazoniennes, du curcuma et du gingembre",
     "Du fromage et des œufs"
    ],
    "a": 1,
    "why": "Le mélange (pirarucú, herbes, curcuma, piments, gingembre) est remis dans le ver puis cuit au four."
   },
   {
    "k": "tf",
    "q": "Le mojojoy se mange uniquement cuit.",
    "a": false,
    "why": "On peut le manger vivant, rôti ou grillé."
   }
  ]
 },
 {
  "id": "voa-es-cotorras-argentinas-chile",
  "lvl": "B2",
  "t": "Una invasión de cotorras argentinas tiene en alerta a las autoridades chilenas",
  "theme": "La ville et la nature",
  "dur": "4 min",
  "media": {
   "type": "video",
   "src": "https://voa-video-ns.akamaized.net/pangeavideo/2023/10/0/01/01000000-0aff-0242-7ffd-08dbc51cdead.mp4?cb=edcb15318&download=1"
  },
  "credit": "Voz de América (VOA) · reportage de Nicolás Cortés Guerrero, Santiago du Chili",
  "link": "https://www.vozdeamerica.com/a/las-cotorras-argentinas-en-chile-muy-bonitas-pero-escandalosas/7297021.html",
  "sum": "À Santiago du Chili, les perruches argentines (cotorras) se multiplient : elles construisent d'énormes nids qui peuvent tomber, prennent l'espace et la nourriture des oiseaux locaux et font beaucoup de bruit. Les autorités et l'université ont lancé un plan, et les habitants donnent leur avis.",
  "q": [
   {
    "k": "mcq",
    "q": "Dans quelle ville se passe le reportage ?",
    "o": [
     "Buenos Aires",
     "Valparaíso",
     "Santiago du Chili"
    ],
    "a": 2,
    "why": "« Santiago de Chile sufre la invasión de cotorras argentinas », notamment dans la commune de Providencia."
   },
   {
    "k": "mcq",
    "q": "Combien un nid de cotorras peut-il peser ?",
    "o": [
     "Jusqu'à 200 kg",
     "Jusqu'à 20 kg",
     "Jusqu'à 2 tonnes"
    ],
    "a": 0,
    "why": "Selon Mauricio Fabry, les nids peuvent peser jusqu'à 200 kg et se trouver à 15 m de haut."
   },
   {
    "k": "tf",
    "q": "La cotorra argentine est le seul perroquet qui construit son propre nid.",
    "a": true,
    "why": "C'est la seule des 392 espèces de perroquets à construire son nid."
   },
   {
    "k": "mcq",
    "q": "Quel problème posent-elles aux autres oiseaux de la ville ?",
    "o": [
     "Elles leur transmettent des maladies",
     "Elles leur prennent leur espace et leur nourriture",
     "Elles détruisent leurs œufs"
    ],
    "a": 1,
    "why": "Nelida Pohl : « les quitan sus espacios, sus alimentos »."
   },
   {
    "k": "gap",
    "q": "Me acostumbré al ___ de ellas.",
    "a": [
     "ruido"
    ],
    "why": "Tomás García, voisin du 3e étage : « me acostumbré al ruido de ellas »."
   },
   {
    "k": "tf",
    "q": "Tomás García demande qu'on élimine toutes les cotorras immédiatement.",
    "a": false,
    "why": "Il accepterait seulement un contrôle passif de la population : « si eso pudiera regularse de una manera pasiva, no estaría mal »."
   }
  ]
 },
 {
  "id": "yt-es-clm-corral-comedias-almagro",
  "lvl": "B2",
  "t": "Así es el Corral de Comedias de Almagro por dentro | CLM Me Gusta",
  "theme": "Théâtre et patrimoine",
  "dur": "2 min",
  "media": {
   "type": "youtube",
   "id": "ZV_f5-vAXa0"
  },
  "credit": "Castilla-La Mancha Media · CLM Me Gusta",
  "link": "https://sozai.app/transcript/corral-comedias-almagro-inside/",
  "sum": "Un guide fait visiter le Corral de Comedias d'Almagro, seul théâtre de ce type conservé dans son état d'origine et toujours en activité. Il explique où se plaçait chaque public au Siècle d'or : les « mosqueteros » debout dans le patio, les alguaciles pour l'ordre, la « cazuela » et les galeries.",
  "q": [
   {
    "k": "tf",
    "q": "C'est le seul corral de comedias qui reste dans son état d'origine.",
    "a": true,
    "why": "Le guide dit que c'est « el único corral de comedias que queda » dans son état original."
   },
   {
    "k": "mcq",
    "q": "Qui étaient les « mosqueteros » ?",
    "o": [
     "Les acteurs principaux",
     "Les spectateurs debout dans le patio",
     "Les musiciens"
    ],
    "a": 1,
    "why": "Les spectateurs debout se prenaient au jeu (« se metía en el papel ») au point de vouloir monter sur scène ou se battre."
   },
   {
    "k": "mcq",
    "q": "Quel était le rôle des alguaciles ?",
    "o": [
     "Vendre les billets",
     "Écrire les pièces",
     "Maintenir l'ordre parmi le public"
    ],
    "a": 2,
    "why": "« y aquí teníamos también unos alguaciles » qui contrôlaient les spectateurs."
   },
   {
    "k": "mcq",
    "q": "Qu'avait de particulier la « cazuela » ?",
    "o": [
     "C'était le seul endroit où hommes et femmes pouvaient s'asseoir ensemble",
     "C'était la cuisine du théâtre",
     "C'était la place réservée aux acteurs"
    ],
    "a": 0,
    "why": "Face à la scène, au premier étage, « el único sitio donde se pueden » asseoir ensemble hommes et femmes, pour les familles nobles."
   },
   {
    "k": "gap",
    "q": "Tenemos la suerte de que sigue ___.",
    "a": [
     "vivo"
    ],
    "why": "Le théâtre fonctionne encore : « Tenemos la suerte de que sigue vivo »."
   }
  ]
 },
 {
  "id": "yt-es-tedx-canciones-abuelas",
  "lvl": "C1",
  "t": "¿Qué podemos aprender de las canciones de nuestras abuelas? | Lidia García | TEDxVitoriaGasteiz",
  "theme": "Musique et société",
  "dur": "12 min",
  "media": {
   "type": "youtube",
   "id": "Anyn_XQO74I"
  },
  "credit": "TEDx Talks · TEDxVitoriaGasteiz",
  "link": "https://sozai.app/transcript/what-can-we-learn-from-our-grandmothers-songs-lidia-garcia/",
  "sum": "Lidia García, autrice du podcast et du livre « ¡Ay, campaneras! », montre que les zarzuelas, cuplés et coplas que fredonnait sa mère racontaient la vie des femmes et, grâce à l'humour, faisaient passer des idées subversives malgré la censure.",
  "q": [
   {
    "k": "mcq",
    "q": "Qui fredonnait ces chansons dans l'enfance de Lidia García ?",
    "o": [
     "Sa grand-mère, chanteuse professionnelle",
     "Sa mère, femme au foyer, en faisant le ménage",
     "Son professeur de musique"
    ],
    "a": 1,
    "why": "« Es ama de casa » : sa mère chantait en faisant les tâches ménagères et en s'occupant de la grand-mère."
   },
   {
    "k": "mcq",
    "q": "Sous quelle forme a-t-elle publié ses recherches ?",
    "o": [
     "Un podcast et un livre, « ¡Ay, campaneras! »",
     "Un documentaire télévisé",
     "Un disque de reprises"
    ],
    "a": 0,
    "why": "Elle a transformé ses recherches en podcast et en livre intitulés « ¡Ay, campaneras! »."
   },
   {
    "k": "tf",
    "q": "Le mot « Menegilda » est entré dans le dictionnaire de la RAE pour désigner une domestique.",
    "a": true,
    "why": "Le succès du « Tango de la Menegilda » (1886) a fait entrer le mot dans le dictionnaire."
   },
   {
    "k": "mcq",
    "q": "Que demandait une petite annonce de l'époque citée par l'oratrice ?",
    "o": [
     "Une chanteuse pour un théâtre",
     "Une couturière",
     "Une domestique qui ne chante pas cette chanson"
    ],
    "a": 2,
    "why": "« Se busca criada » … qui ne chante pas le tango de la Menegilda."
   },
   {
    "k": "mcq",
    "q": "Selon elle, à quoi servait l'humour dans ces chansons ?",
    "o": [
     "À vendre plus de disques",
     "À faire passer des idées subversives malgré la censure",
     "À se moquer des femmes"
    ],
    "a": 1,
    "why": "L'humour était un moyen courant de contourner la censure dans la zarzuela, le cuplé et la copla."
   },
   {
    "k": "tf",
    "q": "« Compuesta y sin novio » avait le même sens, qu'elle soit chantée par Juanita Reina ou par Miguel de Molina.",
    "a": false,
    "why": "Chantée par Miguel de Molina, artiste ouvertement homosexuel, la chanson devenait une célébration de la diversité : une même chanson, deux sens."
   },
   {
    "k": "gap",
    "q": "Y es que cantar no es sólo ___.",
    "a": [
     "cantar"
    ],
    "why": "Idée centrale de la conférence : « Y es que cantar no es sólo cantar »."
   }
  ]
 },
 {
  "id": "yt-es-bbc-mundo-dos-apellidos",
  "lvl": "C1",
  "t": "Por qué en muchos países de América Latina y España usamos dos apellidos | BBC Mundo",
  "theme": "Langue et histoire",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "jBLolsl_Mnc"
  },
  "credit": "BBC News Mundo",
  "link": "https://sozai.app/transcript/uso-dos-apellidos-america-latina-espana/",
  "sum": "La BBC explique l'origine des deux noms de famille en Espagne et en Amérique latine : une coutume castillane-aragonaise où les femmes gardaient leur nom, des noms longtemps choisis librement, puis l'état civil du XIXe siècle. L'Argentine fait exception.",
  "q": [
   {
    "k": "mcq",
    "q": "Quelle coutume castillane-aragonaise explique en partie ce système ?",
    "o": [
     "Les femmes gardaient leur nom après le mariage",
     "Les enfants prenaient le nom de leur parrain",
     "Les nobles changeaient de nom à chaque génération"
    ],
    "a": 0,
    "why": "Contrairement au reste de l'Europe, les femmes conservaient leur nom de famille après le mariage."
   },
   {
    "k": "mcq",
    "q": "Que signifie à l'origine le nom « Martínez » ?",
    "o": [
     "Originaire de Martos",
     "Fils de Martín",
     "Forgeron"
    ],
    "a": 1,
    "why": "Les noms en « -ez » viennent du prénom du père : Martínez, « hijo de Martín »."
   },
   {
    "k": "tf",
    "q": "Au Moyen Âge, des frères et sœurs pouvaient porter des noms de famille différents.",
    "a": true,
    "why": "« no existía un sistema fijo de apellidos » : on prenait celui du père, de la mère ou d'un grand-parent."
   },
   {
    "k": "gap",
    "q": "Ser cristiano viejo por los cuatro ___.",
    "a": [
     "costados"
    ],
    "why": "L'expression « por los cuatro costados » vient de la vérification des quatre grands-parents."
   },
   {
    "k": "mcq",
    "q": "Pourquoi l'État a-t-il pris le contrôle de l'état civil au XIXe siècle ?",
    "o": [
     "Pour organiser les élections",
     "Pour recenser les nobles",
     "Pour faire payer les impôts et recruter des soldats"
    ],
    "a": 2,
    "why": "« para pagar impuestos y para los reclutamientos »."
   },
   {
    "k": "mcq",
    "q": "En quelle année un registre civil général pour toute la population a-t-il été créé en Espagne ?",
    "o": [
     "1822",
     "1871",
     "1889"
    ],
    "a": 1,
    "why": "Madrid en 1822, les capitales de province en 1840, puis un registre général en 1871 ; le Code civil date de 1889."
   },
   {
    "k": "tf",
    "q": "L'Argentine applique strictement le système des deux noms de famille.",
    "a": false,
    "why": "C'est l'exception : à cause de l'immigration européenne massive, les parents peuvent choisir un ou deux noms."
   }
  ]
 },
 {
  "id": "yt-es-academia-play-calendario",
  "lvl": "C1",
  "t": "El Origen de nuestro Calendario",
  "theme": "Histoire et sciences",
  "dur": "11 min",
  "media": {
   "type": "youtube",
   "id": "ydJQX1fAIjM"
  },
  "credit": "Academia Play",
  "link": "https://sozai.app/transcript/el-origen-de-nuestro-calendario-transcript/",
  "sum": "La vidéo retrace l'histoire de notre calendrier : le calendrier lunaire de Romulus (10 mois), l'ajout de janvier et février par Numa Pompilius, la réforme de Jules César avec l'astronome Sosigène, puis la réforme grégorienne de 1582, qui a supprimé dix jours.",
  "q": [
   {
    "k": "mcq",
    "q": "Comment était le calendrier attribué à Romulus ?",
    "o": [
     "12 mois de 30 jours",
     "10 mois lunaires, environ 304 jours, commençant en mars",
     "13 mois commençant en janvier"
    ],
    "a": 1,
    "why": "Il comptait 10 mois lunaires, environ 304 jours, et commençait en mars."
   },
   {
    "k": "mcq",
    "q": "Quels mois Numa Pompilius a-t-il ajoutés ?",
    "o": [
     "Janvier et février",
     "Juillet et août",
     "Novembre et décembre"
    ],
    "a": 0,
    "why": "« Numa Pompilio, segundo rey de Roma » ajoute Ianuarius et Februarius ; l'année passe à 355 jours."
   },
   {
    "k": "tf",
    "q": "Sosigène a calculé que l'année solaire durait 365 jours et 6 heures.",
    "a": true,
    "why": "Jules César lui commande la réforme : « 365 días y 6 horas », d'où un jour bissextile tous les quatre ans."
   },
   {
    "k": "mcq",
    "q": "D'où vient le nom du mois de juillet ?",
    "o": [
     "De la déesse Junon",
     "De l'empereur Auguste",
     "De Jules César, à l'initiative de Marc Antoine"
    ],
    "a": 2,
    "why": "Après la mort de César, Quintilis devient Julius sur l'initiative de Marc Antoine ; Sextilis devient Augustus."
   },
   {
    "k": "mcq",
    "q": "En 1582, quel jour a suivi le 4 octobre ?",
    "o": [
     "Le 5 octobre",
     "Le 15 octobre",
     "Le 24 octobre"
    ],
    "a": 1,
    "why": "Pour rattraper un décalage de 10 jours sur l'équinoxe, on est passé directement du 4 au 15 octobre."
   },
   {
    "k": "tf",
    "q": "La Russie a adopté le calendrier grégorien dès 1582.",
    "a": false,
    "why": "Les zones catholiques l'adoptent tout de suite, mais la Russie seulement en 1918 et la Grèce en 1923."
   },
   {
    "k": "gap",
    "q": "Cada año se desajusta 26 ___.",
    "a": [
     "segundos"
    ],
    "why": "Même le calendrier grégorien n'est pas parfait : « Cada año se desajusta 26 segundos »."
   }
  ]
 },
 {
  "id": "yt-es-curiosamente-tierra-plana",
  "lvl": "C1",
  "t": "¿La Tierra es plana? 5 pruebas... en contra",
  "theme": "Sciences",
  "dur": "5 min",
  "media": {
   "type": "youtube",
   "id": "FzxLtk9Nlh0"
  },
  "credit": "CuriosaMente",
  "link": "https://sozai.app/transcript/flat-earth-5-proofs-against/",
  "sum": "CuriosaMente retrace l'histoire du « terraplatisme » (Rowbotham, Voliva) puis propose des observations que chacun peut faire pour vérifier que la Terre est ronde : les bateaux à l'horizon, les bâtiments au coucher du soleil, l'ombre de la Terre lors des éclipses, les constellations.",
  "q": [
   {
    "k": "mcq",
    "q": "Avec quoi Ératosthène a-t-il estimé le rayon de la Terre il y a plus de 2 000 ans ?",
    "o": [
     "Un télescope",
     "Deux bâtons et des mathématiques",
     "Un bateau et une boussole"
    ],
    "a": 1,
    "why": "Ératosthène a utilisé deux bâtons et des calculs."
   },
   {
    "k": "mcq",
    "q": "Comment Samuel Rowbotham imaginait-il la Terre ?",
    "o": [
     "Comme un disque avec le pôle Nord au centre et un mur de glace au bord",
     "Comme un cube",
     "Comme une sphère creuse"
    ],
    "a": 0,
    "why": "Il décrivait « un disco con el Polo Norte » au centre, entouré d'un mur de glace qu'il appelait pôle Sud."
   },
   {
    "k": "gap",
    "q": "Esta sombra siempre tiene una silueta ___.",
    "a": [
     "redonda"
    ],
    "why": "Lors d'une éclipse de Lune, l'ombre de la Terre est toujours ronde : « Esta sombra siempre tiene una silueta redonda »."
   },
   {
    "k": "mcq",
    "q": "Au coucher du soleil, que remarque-t-on sur les grands bâtiments ou les montagnes ?",
    "o": [
     "Le bas s'assombrit en dernier",
     "Tout s'assombrit en même temps",
     "Le haut s'assombrit en dernier"
    ],
    "a": 2,
    "why": "Les parties hautes restent éclairées plus longtemps, car de plus haut on voit plus loin derrière l'horizon."
   },
   {
    "k": "tf",
    "q": "Selon la vidéo, la Terre est une sphère parfaite.",
    "a": false,
    "why": "C'est un sphéroïde aplati : elle « es un poquitín más ancha que alta »."
   },
   {
    "k": "tf",
    "q": "La vidéo invite à vérifier soi-même ces observations.",
    "a": true,
    "why": "La conclusion : la Terre est sphérique et chacun peut le constater personnellement."
   }
  ]
 },
 {
  "id": "yt-es-dw-chinampas-xochimilco",
  "lvl": "C1",
  "t": "Un sistema agrícola único en el mundo",
  "theme": "Agriculture et environnement",
  "dur": "26 min",
  "media": {
   "type": "youtube",
   "id": "xvjYspF3PxA"
  },
  "credit": "DW Español · documentaire",
  "link": "https://sozai.app/transcript/unique-agricultural-system-in-the-world-wait-that-includes-in-and-the/",
  "sum": "Documentaire sur les chinampas de Xochimilco, parcelles cultivées sur l'eau inventées par les Nahuas dans l'ancien lac de la vallée de Mexico. Agriculteurs, pêcheurs et chercheurs racontent les menaces (espèces invasives, pollution, tourisme, urbanisation) et les projets pour sauver ce système.",
  "q": [
   {
    "k": "mcq",
    "q": "Qu'est-ce qu'une chinampa ?",
    "o": [
     "Un bateau de touristes",
     "Une parcelle cultivable faite de troncs, de racines et de boue sur l'eau",
     "Un marché de fruits et légumes"
    ],
    "a": 1,
    "why": "« Una chinampa es una porción de tierra » construite par les Nahuas avec des troncs, des racines et de la boue."
   },
   {
    "k": "tf",
    "q": "Les chinampas couvraient autrefois jusqu'à 20 000 hectares ; il en reste environ 100.",
    "a": true,
    "why": "Et seule la moitié de ces 100 hectares est encore cultivée selon ce système."
   },
   {
    "k": "mcq",
    "q": "Quel poisson introduit dans les années 1960 a ravagé la faune locale ?",
    "o": [
     "La carpe",
     "La truite",
     "Le tilapia"
    ],
    "a": 2,
    "why": "Le tilapia, introduit sur conseil de l'agence agricole de l'ONU, a dévasté les poissons natifs."
   },
   {
    "k": "mcq",
    "q": "Combien de visiteurs les trajineras transportent-elles environ chaque semaine ?",
    "o": [
     "50 000",
     "5 000",
     "500 000"
    ],
    "a": 0,
    "why": "« Más de 100 trajineras » transportent environ 50 000 visiteurs par semaine."
   },
   {
    "k": "tf",
    "q": "Le fils du pêcheur Basilio veut reprendre son métier.",
    "a": false,
    "why": "Les jeunes se désintéressent de l'agriculture : le fils de Basilio veut étudier les soins infirmiers."
   },
   {
    "k": "gap",
    "q": "El maíz criollo es la punta de ___.",
    "a": [
     "lanza"
    ],
    "why": "Le maïs criollo est central dans la chinampa : « El maíz criollo es la punta de lanza »."
   }
  ]
 }
]);

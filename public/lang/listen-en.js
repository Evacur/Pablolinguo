// Listening extracts (Cours › Écoute). One entry per extract; ids must never change (they key the saved progress).
// media: {type:"video", src} | {type:"youtube", id} | {type:"tts", lines:[[speaker, text], …]}
// q: {k:"mcq", q, o:[…], a:index, why} | {k:"tf", q, a:true|false, why} | {k:"gap", q:"… ___ …", a:["answer", …], why}
// VOA material is in the public domain and must be credited (learningenglish.voanews.com/p/6021.html).
window.LISTEN = window.LISTEN || {};
window.LISTEN.en = [
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
];

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

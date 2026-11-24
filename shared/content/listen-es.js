// Listening extracts (Cours › Écoute). One entry per extract; ids must never change (they key the saved progress).
// media: {type:"video", src} | {type:"youtube", id} | {type:"tts", lines:[[speaker, text], …]}
// q: {k:"mcq", q, o:[…], a:index, why} | {k:"tf", q, a:true|false, why} | {k:"gap", q:"… ___ …", a:["answer", …], why}
// VOA material is in the public domain and must be credited (learningenglish.voanews.com/p/6021.html).
window.LISTEN = window.LISTEN || {};
window.LISTEN.es = [
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
];

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

// Real videos, A1 to C1 (added 2026-11-19). Questions written from each video's transcript or article (see link).
// Sources: VOA Learning English and VOA (public domain), and official YouTube channels (videoELE, BBC Learning English, TED-Ed, TED, Easy Spanish, TEDx, BBC News Mundo, DW Español…).
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

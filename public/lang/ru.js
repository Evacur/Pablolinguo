// Russian pack, levels A1–A2 for now (generated from scratchpad parts; edit here directly from now on).
// Same shape as es.js. Russian text is Cyrillic without stress marks; the app also accepts answers typed in Latin letters.
window.PACKS = window.PACKS || {};
window.PACKS.ru = {
 "code": "ru",
 "name": "Russe",
 "native": "Русский",
 "tts": "ru-RU",
 "dict": "ru-RU",
 "placeholder": "En russe, ou en lettres latines…",
 "ready": [
  "A1",
  "A2"
 ],
 "coursLevel": "A1 à A2",
 "skills": [
  {
   "id": "ru_alphabet",
   "lvl": "A1",
   "name": "Lire le cyrillique",
   "ex": "мама, кот, Москва",
   "q": [
    [
     "maman",
     [
      "мама"
     ]
    ],
    [
     "chat",
     [
      "кот"
     ]
    ],
    [
     "Moscou",
     [
      "Москва"
     ]
    ],
    [
     "maison",
     [
      "дом"
     ]
    ]
   ]
  },
  {
   "id": "ru_etre",
   "lvl": "A1",
   "name": "Pas de « être » au présent : Я студент",
   "ex": "Я студент. Это мой дом.",
   "q": [
    [
     "Je suis étudiant.",
     [
      "Я студент.",
      "Я студентка."
     ]
    ],
    [
     "C'est ma maison.",
     [
      "Это мой дом."
     ]
    ],
    [
     "Il est médecin.",
     [
      "Он врач.",
      "Он доктор."
     ]
    ],
    [
     "Où est la gare ?",
     [
      "Где вокзал?",
      "Где станция?"
     ]
    ]
   ]
  },
  {
   "id": "ru_genre",
   "lvl": "A1",
   "name": "Le genre des noms : он, она, оно",
   "ex": "стол, мама, окно",
   "q": [
    [
     "La fenêtre est grande.",
     [
      "Окно большое."
     ]
    ],
    [
     "Où est la table ? Elle est là.",
     [
      "Где стол? Он там.",
      "Где стол? Он тут.",
      "Где стол? Он здесь."
     ]
    ],
    [
     "Où est maman ? Elle est à la maison.",
     [
      "Где мама? Она дома."
     ]
    ],
    [
     "Voici la mer. Elle est belle.",
     [
      "Вот море. Оно красивое.",
      "Это море. Оно красивое."
     ]
    ]
   ]
  },
  {
   "id": "ru_possessifs",
   "lvl": "A1",
   "name": "Possessifs : мой, моя, моё, мои",
   "ex": "Это мой брат. Это моя сестра.",
   "q": [
    [
     "C'est mon frère.",
     [
      "Это мой брат."
     ]
    ],
    [
     "C'est ma sœur.",
     [
      "Это моя сестра."
     ]
    ],
    [
     "C'est ma place.",
     [
      "Это моё место."
     ]
    ],
    [
     "Voici mes amis.",
     [
      "Вот мои друзья.",
      "Это мои друзья."
     ]
    ]
   ]
  },
  {
   "id": "ru_present1",
   "lvl": "A1",
   "name": "Présent, 1re conjugaison : читать",
   "ex": "Я читаю, ты читаешь, они читают.",
   "q": [
    [
     "Je lis un magazine.",
     [
      "Я читаю журнал.",
      "Читаю журнал."
     ]
    ],
    [
     "Que fais-tu ?",
     [
      "Что ты делаешь?",
      "Что делаешь?",
      "Ты что делаешь?"
     ]
    ],
    [
     "Nous travaillons à la maison.",
     [
      "Мы работаем дома.",
      "Мы дома работаем.",
      "Работаем дома."
     ]
    ],
    [
     "Ils ne comprennent pas.",
     [
      "Они не понимают."
     ]
    ]
   ]
  },
  {
   "id": "ru_present2",
   "lvl": "A1",
   "name": "Présent, 2e conjugaison : говорить",
   "ex": "Я говорю, ты говоришь, они говорят.",
   "q": [
    [
     "Je parle russe.",
     [
      "Я говорю по-русски.",
      "Говорю по-русски."
     ]
    ],
    [
     "Tu parles français ?",
     [
      "Ты говоришь по-французски?",
      "Говоришь по-французски?"
     ]
    ],
    [
     "Ils regardent la télé.",
     [
      "Они смотрят телевизор."
     ]
    ],
    [
     "J'aime le thé.",
     [
      "Я люблю чай.",
      "Люблю чай."
     ]
    ]
   ]
  },
  {
   "id": "ru_u_menya",
   "lvl": "A1",
   "name": "Avoir : у меня есть",
   "ex": "У меня есть кошка.",
   "q": [
    [
     "J'ai un chat.",
     [
      "У меня есть кот.",
      "У меня есть кошка.",
      "У меня кот.",
      "У меня кошка."
     ]
    ],
    [
     "Tu as une voiture ?",
     [
      "У тебя есть машина?"
     ]
    ],
    [
     "Il a un frère.",
     [
      "У него есть брат."
     ]
    ],
    [
     "Nous avons une grande maison.",
     [
      "У нас большой дом.",
      "У нас есть большой дом."
     ]
    ]
   ]
  },
  {
   "id": "ru_prepositionnel",
   "lvl": "A2",
   "name": "Prépositionnel : в / на + lieu",
   "ex": "Я живу в Москве. Книга на столе.",
   "q": [
    [
     "J'habite à Moscou.",
     [
      "Я живу в Москве.",
      "Живу в Москве."
     ]
    ],
    [
     "Le livre est sur la table.",
     [
      "Книга на столе.",
      "Книга лежит на столе."
     ]
    ],
    [
     "Nous travaillons au bureau.",
     [
      "Мы работаем в офисе.",
      "Работаем в офисе."
     ]
    ],
    [
     "Elle est au travail.",
     [
      "Она на работе."
     ]
    ]
   ]
  },
  {
   "id": "ru_accusatif",
   "lvl": "A2",
   "name": "Accusatif : le complément d'objet",
   "ex": "Я читаю книгу. Я вижу маму.",
   "q": [
    [
     "Je lis un livre.",
     [
      "Я читаю книгу.",
      "Читаю книгу."
     ]
    ],
    [
     "Je vois maman.",
     [
      "Я вижу маму.",
      "Вижу маму."
     ]
    ],
    [
     "Il aime la musique.",
     [
      "Он любит музыку."
     ]
    ],
    [
     "Nous achetons du pain et de l'eau.",
     [
      "Мы покупаем хлеб и воду.",
      "Покупаем хлеб и воду."
     ]
    ]
   ]
  },
  {
   "id": "ru_genitif",
   "lvl": "A2",
   "name": "Génitif : нет, много, de",
   "ex": "У меня нет машины. Много людей.",
   "q": [
    [
     "Je n'ai pas de voiture.",
     [
      "У меня нет машины."
     ]
    ],
    [
     "Il y a beaucoup de gens ici.",
     [
      "Здесь много людей.",
      "Тут много людей."
     ]
    ],
    [
     "C'est la maison de mon frère.",
     [
      "Это дом моего брата."
     ]
    ],
    [
     "Il n'y a pas de lait.",
     [
      "Нет молока.",
      "Молока нет."
     ]
    ]
   ]
  },
  {
   "id": "ru_passe",
   "lvl": "A2",
   "name": "Passé : -л, -ла, -ло, -ли",
   "ex": "Я читал. Она читала.",
   "q": [
    [
     "Hier, elle a travaillé à la maison.",
     [
      "Вчера она работала дома.",
      "Она вчера работала дома."
     ]
    ],
    [
     "Il était à Moscou.",
     [
      "Он был в Москве."
     ]
    ],
    [
     "Nous avons regardé un film.",
     [
      "Мы смотрели фильм.",
      "Мы посмотрели фильм."
     ]
    ],
    [
     "J'étais à la maison.",
     [
      "Я был дома.",
      "Я была дома."
     ]
    ]
   ]
  },
  {
   "id": "ru_futur",
   "lvl": "A2",
   "name": "Futur : буду + infinitif",
   "ex": "Завтра я буду работать.",
   "q": [
    [
     "Demain, je vais travailler.",
     [
      "Завтра я буду работать.",
      "Я завтра буду работать.",
      "Завтра буду работать."
     ]
    ],
    [
     "Nous allons regarder la télé.",
     [
      "Мы будем смотреть телевизор.",
      "Будем смотреть телевизор."
     ]
    ],
    [
     "Elle sera à la maison.",
     [
      "Она будет дома."
     ]
    ],
    [
     "Qu'est-ce que tu vas faire ce soir ?",
     [
      "Что ты будешь делать вечером?",
      "Что ты будешь делать сегодня вечером?",
      "Что будешь делать вечером?",
      "Что будешь делать сегодня вечером?"
     ]
    ]
   ]
  },
  {
   "id": "ru_aspect",
   "lvl": "A2",
   "name": "L'aspect : читать / прочитать",
   "ex": "Я читал книгу. Я прочитал книгу.",
   "q": [
    [
     "J'ai lu le livre jusqu'au bout.",
     [
      "Я прочитал книгу.",
      "Я прочитала книгу.",
      "Я дочитал книгу.",
      "Я дочитала книгу."
     ]
    ],
    [
     "Il écrivait une lettre.",
     [
      "Он писал письмо."
     ]
    ],
    [
     "Elle a écrit la lettre.",
     [
      "Она написала письмо."
     ]
    ],
    [
     "Demain, j'achèterai du pain.",
     [
      "Завтра я куплю хлеб.",
      "Я завтра куплю хлеб.",
      "Завтра куплю хлеб."
     ]
    ]
   ]
  },
  {
   "id": "ru_mouvement",
   "lvl": "A2",
   "name": "Verbes de mouvement : идти / ехать",
   "ex": "Я иду в магазин. Мы едем в Петербург.",
   "q": [
    [
     "Je vais au magasin (à pied).",
     [
      "Я иду в магазин.",
      "Иду в магазин."
     ]
    ],
    [
     "Nous allons à Saint-Pétersbourg (en train).",
     [
      "Мы едем в Петербург.",
      "Мы едем в Санкт-Петербург.",
      "Мы едем на поезде в Петербург.",
      "Мы едем в Петербург на поезде."
     ]
    ],
    [
     "Où vas-tu (à pied) ?",
     [
      "Куда ты идёшь?",
      "Ты куда идёшь?"
     ]
    ],
    [
     "Ils vont au travail en bus.",
     [
      "Они едут на работу на автобусе.",
      "Они едут на автобусе на работу."
     ]
    ]
   ]
  }
 ],
 "rules": {
  "ru_alphabet": "Le cyrillique a 33 lettres, et plusieurs te sont déjà familières : А, К, М, О, Т se lisent comme en français. Le piège, ce sont les faux amis : В = v, Н = n, Р = r, С = s, У = ou, Х = kh. Lis lettre par lettre : ресторан = restoran, et le mot apparaît.",
  "ru_etre": "Au présent, le russe n'utilise pas « être » : я студент = je suis étudiant, папа дома = papa est à la maison. Il n'y a pas non plus d'article (ni « un », ni « le »). Это veut dire « c'est, voici » et ne change jamais : это мой дом, это моя мама.",
  "ru_genre": "Chaque nom a un genre, et sa dernière lettre le donne presque toujours : consonne = masculin (стол → он), -а / -я = féminin (мама → она), -о / -е = neutre (окно → оно). Le genre français ne t'aide pas : дом (la maison) est masculin. Exception utile : папа et дядя finissent par -а mais restent masculins.",
  "ru_possessifs": "Le possessif s'accorde avec la chose possédée, pas avec le possesseur : мой брат, моя сестра, моё окно, мои друзья. Même schéma pour « ton » : твой, твоя, твоё, твои. Pour « son, sa », его (à lui) et её (à elle) ne changent jamais : его мама, её брат.",
  "ru_present1": "1re conjugaison (la plupart des verbes en -ать, -ять) : on enlève -ть et on ajoute -ю, -ешь, -ет, -ем, -ете, -ют. Читать : я читаю, ты читаешь, он читает, мы читаем, вы читаете, они читают. La terminaison dit déjà qui agit, donc я et ты se laissent parfois tomber à l'oral.",
  "ru_present2": "2e conjugaison (la plupart des verbes en -ить) : on enlève -ить et on ajoute -ю, -ишь, -ит, -им, -ите, -ят. Говорить : я говорю, ты говоришь, он говорит, они говорят. Piège : après б, в, м, п, un л apparaît à la forme я seulement : любить → я люблю, готовить → я готовлю.",
  "ru_u_menya": "Pour « avoir », le russe dit « chez moi, il y a » : у меня есть кот. Seul le pronom change : у тебя, у него, у неё, у нас, у вас, у них. La chose possédée reste au nominatif (sa forme de dictionnaire). Quand on décrit plutôt qu'on annonce, есть disparaît : у нас большой дом.",
  "ru_prepositionnel": "Pour dire où l'on est, après в (dans, à) ou на (sur, à), le nom prend en général -е : Москва → в Москве, стол → на столе, окно → на окне. Les noms en -ия et les féminins en -ь prennent -и : Россия → в России, площадь → на площади. Certains lieux se construisent avec на : на работе, на почте, на улице, на вокзале.",
  "ru_accusatif": "Le complément d'objet direct se met à l'accusatif. Féminin en -а → -у, en -я → -ю : книга → книгу, Таня → Таню (même pour папа → папу). Masculin et neutre de choses ne changent pas (стол, окно) ; un masculin vivant prend -а / -я : брат → брата, учитель → учителя. Les féminins en -ь ne changent pas : дверь.",
  "ru_genitif": "Le génitif sert pour l'absence (нет), la quantité (много, мало, сколько) et le complément du nom (« de »). Masculin et neutre : -а / -я (брат → брата, море → моря) ; féminin : -ы / -и (машина → машины, неделя → недели). Après к, г, х, ж, ш, щ, ч, on écrit -и : книги. Après много, au pluriel, les masculins prennent souvent -ов : много магазинов.",
  "ru_passe": "On enlève -ть de l'infinitif et on ajoute -л (il), -ла (elle), -ло (neutre), -ли (pluriel et вы) : читать → читал, читала, читали. Le passé s'accorde en genre, pas en personne : une femme dit я читала, un homme я читал. Быть donne был, была, было, были ; sans sujet, on met le neutre : было холодно.",
  "ru_futur": "Pour un verbe imperfectif, le futur se fait avec быть conjugué + infinitif : буду, будешь, будет, будем, будете, будут. Я буду работать = je travaillerai, je vais travailler. Seul, буду veut dire « je serai » : завтра я буду дома. Jamais буду + perfectif : я прочитаю suffit.",
  "ru_aspect": "Presque chaque verbe existe en paire. L'imperfectif (читать, писать) parle de l'action en cours, répétée ou sans résultat précis ; le perfectif (прочитать, написать), souvent avec un préfixe, parle d'une action finie, avec un résultat. Я читал = je lisais, j'ai lu un moment ; я прочитал = j'ai fini de lire. Un perfectif conjugué comme un présent a un sens futur : я напишу = j'écrirai.",
  "ru_mouvement": "Идти = aller à pied, ехать = aller en véhicule (bus, train, voiture). Présent : иду, идёшь, идёт, идём, идёте, идут ; еду, едешь, едет, едем, едете, едут. Après куда ?, la destination est à l'accusatif : в магазин, на работу. Le moyen de transport se dit на + prépositionnel : на автобусе, на поезде."
 },
 "words": {
  "Food": [
   [
    "хлеб",
    "pain",
    "« khliep » : х se dit comme la jota espagnole, et le б final se durcit en « p »."
   ],
   [
    "молоко",
    "lait",
    "мо-ло-КО (ma-la-KO) : le o non accentué se dit « a »."
   ],
   [
    "вода",
    "eau",
    "во-ДА (va-DA). Une bouteille d'eau = бутылка воды."
   ],
   [
    "яблоко",
    "pomme",
    "Я-бло-ко (YA-bla-ka) : les o non accentués se disent « a »."
   ],
   [
    "сыр",
    "fromage",
    "ы n'existe pas en français : dis « i » en reculant la langue."
   ],
   [
    "мясо",
    "viande",
    "МЯ-со (MIA-sa)."
   ],
   [
    "рыба",
    "poisson",
    "РЫ-ба (RY-ba). Le poisson qu'on mange comme celui qui nage."
   ],
   [
    "яйцо",
    "œuf",
    "яй-ЦО (yaï-TSO). Pluriel : яйца (YAÏ-tsa), l'accent change de place."
   ],
   [
    "масло",
    "beurre, huile",
    "МА-сло (MA-sla). сливочное масло = beurre, растительное масло = huile."
   ],
   [
    "сахар",
    "sucre",
    "СА-хар (SA-khar)."
   ],
   [
    "соль",
    "sel",
    "Féminin (-ь). Le ь mouille le л : « sol' »."
   ],
   [
    "овощи",
    "légumes",
    "О-во-щи (O-va-chtchi) : щ se dit « chtch » doux."
   ],
   [
    "фрукты",
    "fruits",
    "ФРУК-ты (FROUK-ty). Surtout employé au pluriel."
   ],
   [
    "картошка",
    "pommes de terre",
    "кар-ТОШ-ка (kar-TOCH-ka). Singulier collectif : on ne dit pas « des картошки »."
   ],
   [
    "помидор",
    "tomate",
    "по-ми-ДОР (pa-mi-DOR). Masculin en russe."
   ],
   [
    "огурец",
    "concombre",
    "о-гу-РЕЦ (a-gou-RIETS). Pluriel : огурцы."
   ],
   [
    "рис",
    "riz",
    ""
   ],
   [
    "суп",
    "soupe",
    "Le борщ (bortch) est une soupe de betterave."
   ],
   [
    "курица",
    "poulet",
    "КУ-ри-ца (KOU-ri-tsa) : la poule et le poulet qu'on mange."
   ],
   [
    "каша",
    "bouillie de céréales",
    "КА-ша (KA-cha). Le petit-déjeuner russe classique : гречневая каша (sarrasin)."
   ],
   [
    "мёд",
    "miel",
    "ё est toujours accentué : « miot »."
   ],
   [
    "морковь",
    "carotte",
    "Féminin (-ь). мор-КОВЬ (mar-KOF') : le в final se dit « f »."
   ],
   [
    "лук",
    "oignon",
    "Le même mot veut aussi dire « arc »."
   ],
   [
    "есть",
    "manger",
    "Irrégulier : я ем, ты ешь, они едят. Perfectif : съесть."
   ],
   [
    "пить",
    "boire",
    "я пью, ты пьёшь. Perfectif : выпить."
   ],
   [
    "готовить",
    "cuisiner, préparer",
    "го-ТО-вить (ga-TO-vit'). Perfectif : приготовить."
   ],
   [
    "завтрак",
    "petit-déjeuner",
    "ЗАВ-трак (ZAF-trak). завтракать = prendre le petit-déjeuner."
   ]
  ],
  "Nature": [
   [
    "лес",
    "forêt",
    "« liès ». Dans la forêt = в лесу (accent sur у)."
   ],
   [
    "дерево",
    "arbre",
    "ДЕ-ре-во (DIÉ-ri-va). Pluriel irrégulier : деревья."
   ],
   [
    "цветок",
    "fleur",
    "цве-ТОК (tsvi-TOK). Pluriel : цветы."
   ],
   [
    "трава",
    "herbe",
    "тра-ВА (tra-VA)."
   ],
   [
    "река",
    "rivière, fleuve",
    "ре-КА (ri-KA) : le е atone s'affaiblit en « i »."
   ],
   [
    "озеро",
    "lac",
    "О-зе-ро (O-zi-ra)."
   ],
   [
    "море",
    "mer",
    "МО-ре (MO-rié). Neutre : на море = à la mer."
   ],
   [
    "гора",
    "montagne",
    "го-РА (ga-RA). в горах = à la montagne."
   ],
   [
    "поле",
    "champ",
    "ПО-ле (PO-lié). Neutre."
   ],
   [
    "небо",
    "ciel",
    "НЕ-бо (NIÉ-ba)."
   ],
   [
    "солнце",
    "soleil",
    "СОН-це (SON-tsé) : le л ne se prononce pas."
   ],
   [
    "звезда",
    "étoile",
    "звез-ДА (zviz-DA)."
   ],
   [
    "луна",
    "lune",
    "лу-НА (lou-NA)."
   ],
   [
    "земля",
    "terre, sol",
    "зем-ЛЯ (zim-LIA). Avec majuscule, Земля = la planète."
   ],
   [
    "камень",
    "pierre",
    "Masculin malgré le -ь. КА-мень (KA-min')."
   ],
   [
    "птица",
    "oiseau",
    "ПТИ-ца (PTI-tsa) : on prononce bien le п."
   ],
   [
    "животное",
    "animal",
    "жи-ВОТ-но-е (ji-VOT-na-ié). Adjectif devenu nom."
   ],
   [
    "собака",
    "chien",
    "со-БА-ка (sa-BA-ka). Féminin, même pour un mâle."
   ],
   [
    "кошка",
    "chat",
    "КОШ-ка (KOCH-ka). Le mâle = кот."
   ],
   [
    "лошадь",
    "cheval",
    "Féminin (-ь). ЛО-шадь (LO-chat')."
   ],
   [
    "берег",
    "rive, bord",
    "БЕ-рег (BIÉ-rik). На берегу = au bord (de l'eau)."
   ],
   [
    "остров",
    "île",
    "О-стров (O-straf)."
   ],
   [
    "природа",
    "nature",
    "при-РО-да (pri-RO-da)."
   ],
   [
    "лист",
    "feuille",
    "Pluriel : листья (feuilles d'arbre), листы (feuilles de papier)."
   ],
   [
    "песок",
    "sable",
    "пе-СОК (pi-SOK)."
   ],
   [
    "гриб",
    "champignon",
    "Le б final se dit « p ». Aller aux champignons = ходить за грибами."
   ],
   [
    "медведь",
    "ours",
    "Masculin malgré le -ь. мед-ВЕДЬ (mid-VIÉT')."
   ]
  ],
  "Health": [
   [
    "здоровье",
    "santé",
    "здо-РО-вье (zda-RO-vié). Будь здоров ! = à tes souhaits !"
   ],
   [
    "врач",
    "médecin",
    "Masculin, même pour une femme médecin."
   ],
   [
    "больница",
    "hôpital",
    "боль-НИ-ца (bal'-NI-tsa)."
   ],
   [
    "аптека",
    "pharmacie",
    "ап-ТЕ-ка (ap-TIÉ-ka)."
   ],
   [
    "лекарство",
    "médicament",
    "ле-КАР-ство (li-KAR-stva)."
   ],
   [
    "болеть",
    "être malade ; faire mal",
    "У меня болит голова = j'ai mal à la tête. Perfectif (tomber malade) : заболеть."
   ],
   [
    "голова",
    "tête",
    "го-ло-ВА (ga-la-VA) : trois o, un seul accentué."
   ],
   [
    "живот",
    "ventre",
    "жи-ВОТ (ji-VOT)."
   ],
   [
    "горло",
    "gorge",
    "ГОР-ло (GOR-la). У меня болит горло = j'ai mal à la gorge."
   ],
   [
    "зуб",
    "dent",
    "Masculin en russe. Pluriel : зубы."
   ],
   [
    "спина",
    "dos",
    "спи-НА (spi-NA)."
   ],
   [
    "рука",
    "main, bras",
    "ру-КА (rou-KA). Un seul mot pour la main et le bras."
   ],
   [
    "нога",
    "jambe, pied",
    "но-ГА (na-GA). Un seul mot pour la jambe et le pied."
   ],
   [
    "глаз",
    "œil",
    "Pluriel : глаза (gla-ZA)."
   ],
   [
    "сердце",
    "cœur",
    "СЕР-дце (SIER-tsé) : le д ne se prononce pas."
   ],
   [
    "температура",
    "fièvre, température",
    "У меня температура = j'ai de la fièvre."
   ],
   [
    "кашель",
    "toux",
    "Masculin malgré le -ь. КА-шель (KA-chil')."
   ],
   [
    "боль",
    "douleur",
    "Féminin (-ь)."
   ],
   [
    "больной",
    "malade",
    "боль-НОЙ (bal'-NOÏ). Я болен / я больна = je suis malade."
   ],
   [
    "здоровый",
    "en bonne santé",
    "здо-РО-вый (zda-RO-vyï). Я здоров / я здорова = je vais bien."
   ],
   [
    "отдыхать",
    "se reposer",
    "от-ды-ХАТЬ (at-dy-KHAT'). Perfectif : отдохнуть."
   ],
   [
    "спать",
    "dormir",
    "я сплю, ты спишь. Le л apparaît seulement à la 1re personne."
   ],
   [
    "устать",
    "se fatiguer",
    "Perfectif ; я устал / я устала = je suis fatigué(e). Imperfectif : уставать."
   ],
   [
    "рецепт",
    "ordonnance",
    "ре-ЦЕПТ (ri-TSEPT). Veut aussi dire « recette »."
   ],
   [
    "таблетка",
    "comprimé",
    "таб-ЛЕТ-ка (tab-LIET-ka)."
   ],
   [
    "скорая помощь",
    "ambulance, SAMU",
    "СКО-ра-я ПО-мощь (SKO-ra-ya PO-mach'). On dit souvent скорая tout court."
   ],
   [
    "насморк",
    "rhume (nez qui coule)",
    "НАС-морк (NAS-mark)."
   ]
  ],
  "Climbing": [
   [
    "скалолазание",
    "escalade",
    "ска-ло-ЛА-за-ни-е (ska-la-LA-za-ni-ié) : de скала (rocher) + лазать (grimper)."
   ],
   [
    "скалолаз",
    "grimpeur",
    "ска-ло-ЛАЗ (ska-la-LAS). Une grimpeuse : скалолазка."
   ],
   [
    "скала",
    "rocher, falaise",
    "ска-ЛА (ska-LA)."
   ],
   [
    "лазать",
    "grimper",
    "ЛА-зать (LA-zat'). я лазаю, ты лазаешь."
   ],
   [
    "страховка",
    "assurage",
    "стра-ХОВ-ка (stra-KHOF-ka). Désigne l'assurage et le matériel qui assure."
   ],
   [
    "страховать",
    "assurer (un grimpeur)",
    "стра-хо-ВАТЬ ; я страхую. Ты меня страхуешь ? = tu m'assures ?"
   ],
   [
    "верёвка",
    "corde",
    "ве-РЁВ-ка (vi-RIOF-ka) : ё toujours accentué."
   ],
   [
    "обвязка",
    "baudrier",
    "об-ВЯЗ-ка (ab-VIAS-ka). De вязать, nouer."
   ],
   [
    "скальники",
    "chaussons d'escalade",
    "СКАЛЬ-ни-ки (SKAL'-ni-ki). Mot de grimpeur, surtout au pluriel."
   ],
   [
    "магнезия",
    "magnésie",
    "маг-НЕ-зи-я (mag-NIÉ-zi-ya)."
   ],
   [
    "зацеп",
    "prise",
    "за-ЦЕП (za-TSEP). Pluriel : зацепы."
   ],
   [
    "трасса",
    "voie",
    "ТРАС-са (TRAS-sa). On dit aussi маршрут."
   ],
   [
    "боулдеринг",
    "bloc",
    "БОУЛ-де-ринг (BOUL-dé-rink). Emprunt à l'anglais."
   ],
   [
    "скалодром",
    "salle d'escalade, mur",
    "ска-ло-ДРОМ (ska-la-DROM)."
   ],
   [
    "оттяжка",
    "dégaine",
    "от-ТЯЖ-ка (at-TIACH-ka)."
   ],
   [
    "карабин",
    "mousqueton",
    "ка-ра-БИН (ka-ra-BIN). Pas une arme ici !"
   ],
   [
    "каска",
    "casque",
    "КАС-ка (KAS-ka)."
   ],
   [
    "узел",
    "nœud",
    "У-зел (OU-zil). Pluriel : узлы."
   ],
   [
    "восьмёрка",
    "nœud en huit",
    "вось-МЁР-ка (vas'-MIOR-ka) : littéralement « le huit »."
   ],
   [
    "падать",
    "tomber",
    "ПА-дать (PA-dat'). Perfectif : упасть (я упал / я упала)."
   ],
   [
    "срыв",
    "chute (en escalade)",
    "« sryf ». Le в final se dit « f »."
   ],
   [
    "нависание",
    "dévers",
    "на-ви-СА-ни-е (na-vi-SA-ni-ié). De нависать, surplomber."
   ],
   [
    "вершина",
    "sommet",
    "вер-ШИ-на (vir-CHI-na)."
   ],
   [
    "разминка",
    "échauffement",
    "раз-МИН-ка (raz-MIN-ka)."
   ],
   [
    "растяжка",
    "étirement",
    "рас-ТЯЖ-ка (ras-TIACH-ka)."
   ],
   [
    "сила",
    "force",
    "СИ-ла (SI-la). Сильный = fort."
   ],
   [
    "держаться",
    "se tenir, tenir bon",
    "дер-ЖАТЬ-ся (dir-JA-tsa). Держись ! = tiens bon !"
   ]
  ],
  "Work": [
   [
    "работа",
    "travail",
    "ра-БО-та (ra-BO-ta). На работе = au travail."
   ],
   [
    "работать",
    "travailler",
    "ра-БО-тать (ra-BO-tat'). я работаю, ты работаешь."
   ],
   [
    "офис",
    "bureau (lieu)",
    "О-фис (O-fis). в офисе = au bureau."
   ],
   [
    "коллега",
    "collègue",
    "кол-ЛЕ-га (kal-LIÉ-ga). Masculin ou féminin selon la personne, malgré le -а."
   ],
   [
    "начальник",
    "chef, supérieur",
    "на-ЧАЛЬ-ник (na-TCHAL'-nik)."
   ],
   [
    "директор",
    "directeur",
    "ди-РЕК-тор (di-RIEK-tar)."
   ],
   [
    "встреча",
    "rendez-vous, rencontre",
    "ВСТРЕ-ча (FSTRIÉ-tcha) : le в devant с se dit « f »."
   ],
   [
    "совещание",
    "réunion (de travail)",
    "со-ве-ЩА-ни-е (sa-vi-CHTCHA-ni-ié)."
   ],
   [
    "компания",
    "entreprise, société",
    "ком-ПА-ни-я (kam-PA-ni-ya). Aussi : un groupe d'amis."
   ],
   [
    "зарплата",
    "salaire",
    "зар-ПЛА-та (zar-PLA-ta)."
   ],
   [
    "проект",
    "projet",
    "про-ЕКТ (pra-IEKT)."
   ],
   [
    "письмо",
    "lettre, e-mail",
    "пись-МО (pis'-MO). Un mail = электронное письмо, ou письмо tout court."
   ],
   [
    "компьютер",
    "ordinateur",
    "ком-ПЬЮ-тер (kam-PIOU-tir)."
   ],
   [
    "задача",
    "tâche",
    "за-ДА-ча (za-DA-tcha). Aussi : un problème de maths."
   ],
   [
    "отпуск",
    "congés, vacances",
    "ОТ-пуск (OT-pousk). в отпуске = en congé."
   ],
   [
    "профессия",
    "métier",
    "про-ФЕС-си-я (pra-FIÉ-si-ya)."
   ],
   [
    "документ",
    "document",
    "до-ку-МЕНТ (da-kou-MIENT). Au pluriel, aussi : les papiers d'identité."
   ],
   [
    "звонить",
    "téléphoner, appeler",
    "зво-НИТЬ (zva-NIT') ; я звоню. Perfectif : позвонить."
   ],
   [
    "писать",
    "écrire",
    "пи-САТЬ (pi-SAT') ; я пишу, ты пишешь. Perfectif : написать."
   ],
   [
    "отчёт",
    "rapport, compte rendu",
    "от-ЧЁТ (at-TCHOT)."
   ],
   [
    "опыт",
    "expérience",
    "О-пыт (O-pyt). опыт работы = expérience professionnelle."
   ],
   [
    "клиент",
    "client",
    "кли-ЕНТ (kli-IENT)."
   ],
   [
    "договор",
    "contrat",
    "до-го-ВОР (da-ga-VOR)."
   ],
   [
    "занят",
    "occupé",
    "ЗА-нят (ZA-nit). Я занят / я занята (za-ni-TA) = je suis occupé(e)."
   ],
   [
    "перерыв",
    "pause",
    "пе-ре-РЫВ (pi-ri-RYF). Обеденный перерыв = pause déjeuner."
   ],
   [
    "срок",
    "délai, échéance",
    "« srok ». В срок = dans les temps."
   ],
   [
    "решать",
    "résoudre, décider",
    "ре-ШАТЬ (ri-CHAT'). Perfectif : решить."
   ]
  ],
  "Travel": [
   [
    "путешествие",
    "voyage",
    "пу-те-ШЕСТ-ви-е (pou-ti-CHEST-vi-ié)."
   ],
   [
    "путешествовать",
    "voyager",
    "Long mais régulier : я путешествую, ты путешествуешь."
   ],
   [
    "билет",
    "billet, ticket",
    "би-ЛЕТ (bi-LIET)."
   ],
   [
    "паспорт",
    "passeport",
    "ПАС-порт (PAS-part)."
   ],
   [
    "виза",
    "visa",
    "Féminin en russe : ВИ-за (VI-za)."
   ],
   [
    "самолёт",
    "avion",
    "са-мо-ЛЁТ (sa-ma-LIOT) : « qui vole tout seul »."
   ],
   [
    "аэропорт",
    "aéroport",
    "а-э-ро-ПОРТ (a-é-ra-PORT)."
   ],
   [
    "поезд",
    "train",
    "ПО-езд (PO-ist). Pluriel : поезда."
   ],
   [
    "вокзал",
    "gare",
    "вок-ЗАЛ (vag-ZAL)."
   ],
   [
    "чемодан",
    "valise",
    "че-мо-ДАН (tchi-ma-DAN)."
   ],
   [
    "багаж",
    "bagages",
    "ба-ГАЖ (ba-GACH). Singulier en russe : мой багаж."
   ],
   [
    "гостиница",
    "hôtel",
    "гос-ТИ-ни-ца (gas-TI-ni-tsa). On dit aussi отель."
   ],
   [
    "номер",
    "chambre d'hôtel ; numéro",
    "НО-мер (NO-mir). Pluriel : номера."
   ],
   [
    "карта",
    "carte, plan",
    "КАР-та (KAR-ta). Aussi : carte bancaire."
   ],
   [
    "граница",
    "frontière",
    "гра-НИ-ца (gra-NI-tsa)."
   ],
   [
    "турист",
    "touriste",
    "ту-РИСТ (tou-RIST)."
   ],
   [
    "экскурсия",
    "visite guidée, excursion",
    "экс-КУР-си-я (eks-KOUR-si-ya)."
   ],
   [
    "пляж",
    "plage",
    "Masculin (finale -ж). на пляже = à la plage."
   ],
   [
    "рейс",
    "vol (avion)",
    "« rieïs ». Номер рейса = numéro de vol."
   ],
   [
    "ехать",
    "aller (en véhicule)",
    "Е-хать (YÉ-khat') ; я еду, ты едешь. Pas pour aller à pied."
   ],
   [
    "лететь",
    "aller en avion, voler",
    "ле-ТЕТЬ (li-TIET') ; я лечу, ты летишь."
   ],
   [
    "место",
    "place, siège ; endroit",
    "МЕС-то (MIÉS-ta)."
   ],
   [
    "расписание",
    "horaires",
    "рас-пи-СА-ни-е (ras-pi-SA-ni-ié)."
   ],
   [
    "такси",
    "taxi",
    "Neutre et invariable : on ne le décline jamais."
   ],
   [
    "за границей",
    "à l'étranger",
    "за гра-НИ-цей (za gra-NI-tseï) : « derrière la frontière »."
   ],
   [
    "достопримечательность",
    "curiosité, site à visiter",
    "Féminin (-ь). до-сто-при-ме-ЧА-тель-ность : coupe-le en morceaux."
   ],
   [
    "бронировать",
    "réserver",
    "бро-НИ-ро-вать (bra-NI-ra-vat'). Perfectif : забронировать."
   ]
  ],
  "Home": [
   [
    "дом",
    "maison, immeuble",
    "дома = à la maison ; домой = vers la maison."
   ],
   [
    "квартира",
    "appartement",
    "квар-ТИ-ра (kvar-TI-ra). Pas un quartier !"
   ],
   [
    "комната",
    "pièce, chambre",
    "КОМ-на-та (KOM-na-ta)."
   ],
   [
    "кухня",
    "cuisine (pièce)",
    "КУХ-ня (KOUKH-nia). на кухне = dans la cuisine."
   ],
   [
    "спальня",
    "chambre à coucher",
    "СПАЛЬ-ня (SPAL'-nia). De спать, dormir."
   ],
   [
    "ванная",
    "salle de bains",
    "ВАН-на-я (VAN-na-ya). Adjectif devenu nom (ванная комната)."
   ],
   [
    "окно",
    "fenêtre",
    "ок-НО (ak-NO). Pluriel : окна (OK-na)."
   ],
   [
    "дверь",
    "porte",
    "Féminin (-ь). « dvier' »."
   ],
   [
    "стол",
    "table",
    "Aussi : bureau (le meuble). На столе = sur la table."
   ],
   [
    "стул",
    "chaise",
    "Ne confonds pas avec стол (table)."
   ],
   [
    "диван",
    "canapé",
    "ди-ВАН (di-VAN)."
   ],
   [
    "кровать",
    "lit",
    "Féminin (-ь). кро-ВАТЬ (kra-VAT')."
   ],
   [
    "шкаф",
    "armoire, placard",
    "в шкафу = dans l'armoire (accent sur у)."
   ],
   [
    "холодильник",
    "réfrigérateur",
    "хо-ло-ДИЛЬ-ник (kha-la-DIL'-nik). De холод, froid."
   ],
   [
    "стена",
    "mur",
    "сте-НА (sti-NA). Pluriel : стены (STIÉ-ny)."
   ],
   [
    "пол",
    "sol, plancher",
    "на полу = par terre (accent sur у)."
   ],
   [
    "потолок",
    "plafond",
    "по-то-ЛОК (pa-ta-LOK)."
   ],
   [
    "лестница",
    "escalier",
    "ЛЕСТ-ни-ца, prononcé « LIÉS-ni-tsa » : le т ne s'entend pas."
   ],
   [
    "этаж",
    "étage",
    "э-ТАЖ (é-TACH). На втором этаже = au 1er étage (on compte le rez-de-chaussée)."
   ],
   [
    "ключ",
    "clé",
    "Masculin. « klioutch »."
   ],
   [
    "лампа",
    "lampe",
    "ЛАМ-па (LAM-pa)."
   ],
   [
    "жить",
    "habiter, vivre",
    "я живу, ты живёшь. Я живу в Москве."
   ],
   [
    "убирать",
    "ranger, faire le ménage",
    "у-би-РАТЬ (ou-bi-RAT'). Perfectif : убрать."
   ],
   [
    "сосед",
    "voisin",
    "со-СЕД (sa-SIET). Pluriel : соседи. Une voisine : соседка."
   ],
   [
    "балкон",
    "balcon",
    "бал-КОН (bal-KON)."
   ],
   [
    "мыть",
    "laver",
    "я мою, ты моешь. Perfectif : помыть."
   ],
   [
    "двор",
    "cour",
    "во дворе = dans la cour."
   ]
  ],
  "Shopping": [
   [
    "магазин",
    "magasin",
    "ма-га-ЗИН (ma-ga-ZIN). Un vrai ami du français."
   ],
   [
    "рынок",
    "marché",
    "РЫ-нок (RY-nak). на рынке = au marché."
   ],
   [
    "покупать",
    "acheter",
    "по-ку-ПАТЬ (pa-kou-PAT'). Perfectif : купить (я куплю)."
   ],
   [
    "продавать",
    "vendre",
    "я продаю, ты продаёшь. Perfectif : продать."
   ],
   [
    "продавец",
    "vendeur",
    "про-да-ВЕЦ (pra-da-VIETS). Une vendeuse : продавщица."
   ],
   [
    "цена",
    "prix",
    "це-НА (tsi-NA)."
   ],
   [
    "стоить",
    "coûter",
    "СТО-ить (STO-it'). Сколько стоит ? = combien ça coûte ?"
   ],
   [
    "деньги",
    "argent",
    "ДЕНЬ-ги (DIÉN'-gui). Toujours au pluriel."
   ],
   [
    "рубль",
    "rouble",
    "Masculin malgré le -ь. Сто рублей = cent roubles."
   ],
   [
    "дорого",
    "cher",
    "ДО-ро-го (DO-ra-ga). Le г se dit ici « g »."
   ],
   [
    "дёшево",
    "bon marché, pas cher",
    "ДЁ-ше-во (DIO-chi-va)."
   ],
   [
    "скидка",
    "réduction, promo",
    "СКИД-ка (SKIT-ka)."
   ],
   [
    "касса",
    "caisse",
    "КАС-са (KAS-sa)."
   ],
   [
    "чек",
    "ticket de caisse",
    "Pas un chèque !"
   ],
   [
    "наличные",
    "espèces, liquide",
    "на-ЛИЧ-ны-е (na-LITCH-ny-ié). Toujours au pluriel."
   ],
   [
    "пакет",
    "sac (plastique ou papier)",
    "па-КЕТ (pa-KIET). Вам нужен пакет ? = il vous faut un sac ?"
   ],
   [
    "размер",
    "taille, pointure",
    "раз-МЕР (raz-MIER)."
   ],
   [
    "одежда",
    "vêtements",
    "о-ДЕЖ-да (a-DIÉJ-da). Singulier collectif."
   ],
   [
    "платье",
    "robe",
    "ПЛАТЬ-е (PLAT'-ié). Neutre."
   ],
   [
    "рубашка",
    "chemise",
    "ру-БАШ-ка (rou-BACH-ka)."
   ],
   [
    "обувь",
    "chaussures",
    "Féminin (-ь), singulier collectif. О-бувь (O-bouf')."
   ],
   [
    "куртка",
    "veste, blouson",
    "КУРТ-ка (KOURT-ka)."
   ],
   [
    "брюки",
    "pantalon",
    "БРЮ-ки (BRIOU-ki). Toujours au pluriel."
   ],
   [
    "сумка",
    "sac",
    "СУМ-ка (SOUM-ka)."
   ],
   [
    "примерить",
    "essayer (un vêtement)",
    "при-МЕ-рить (pri-MIÉ-rit'). Perfectif ; imperfectif : примерять."
   ],
   [
    "сдача",
    "monnaie (rendue)",
    "СДА-ча (ZDA-tcha) : le с devant д se dit « z »."
   ],
   [
    "очередь",
    "file d'attente",
    "Féminin (-ь). О-че-редь (O-tchi-rit')."
   ]
  ],
  "Weather": [
   [
    "погода",
    "temps (météo)",
    "по-ГО-да (pa-GO-da). Какая сегодня погода ? = quel temps fait-il ?"
   ],
   [
    "солнечно",
    "il fait soleil, ensoleillé",
    "СОЛ-неч-но (SOL-nitch-na)."
   ],
   [
    "дождь",
    "pluie",
    "Masculin malgré le -ь. Prononcé « dochtch ». Идёт дождь = il pleut."
   ],
   [
    "снег",
    "neige",
    "« sniek ». Идёт снег = il neige."
   ],
   [
    "ветер",
    "vent",
    "ВЕ-тер (VIÉ-tir). Pluriel : ветры."
   ],
   [
    "облако",
    "nuage",
    "О-бла-ко (O-bla-ka)."
   ],
   [
    "туман",
    "brouillard",
    "ту-МАН (tou-MAN)."
   ],
   [
    "гроза",
    "orage",
    "гро-ЗА (gra-ZA)."
   ],
   [
    "гром",
    "tonnerre",
    ""
   ],
   [
    "молния",
    "éclair",
    "МОЛ-ни-я (MOL-ni-ya). Aussi : la fermeture éclair."
   ],
   [
    "холодно",
    "il fait froid",
    "ХО-лод-но (KHO-lad-na). Мне холодно = j'ai froid."
   ],
   [
    "тепло",
    "il fait doux, bon",
    "теп-ЛО (tip-LO). Mot de la météo et du confort."
   ],
   [
    "жарко",
    "il fait chaud",
    "ЖАР-ко (JAR-ka). Мне жарко = j'ai chaud."
   ],
   [
    "прохладно",
    "il fait frais",
    "про-ХЛАД-но (pra-KHLAD-na)."
   ],
   [
    "мороз",
    "gel, grand froid",
    "мо-РОЗ (ma-ROS). Дед Мороз = le père Noël russe."
   ],
   [
    "лёд",
    "glace (gelée)",
    "« liot ». La glace à manger = мороженое."
   ],
   [
    "градус",
    "degré",
    "ГРА-дус (GRA-dous). Минус десять градусов = moins dix degrés."
   ],
   [
    "зонт",
    "parapluie",
    "« zont ». On dit aussi зонтик."
   ],
   [
    "прогноз",
    "prévisions",
    "прог-НОЗ (prag-NOS). прогноз погоды = la météo."
   ],
   [
    "весна",
    "printemps",
    "вес-НА (vis-NA). весной = au printemps."
   ],
   [
    "лето",
    "été",
    "ЛЕ-то (LIÉ-ta). летом = en été."
   ],
   [
    "осень",
    "automne",
    "Féminin (-ь). О-сень (O-sin'). осенью = en automne."
   ],
   [
    "зима",
    "hiver",
    "зи-МА (zi-MA). зимой = en hiver."
   ],
   [
    "облачно",
    "nuageux",
    "О-блач-но (O-blatch-na)."
   ],
   [
    "радуга",
    "arc-en-ciel",
    "РА-ду-га (RA-dou-ga)."
   ],
   [
    "жара",
    "chaleur, canicule",
    "жа-РА (ja-RA)."
   ],
   [
    "влажно",
    "humide",
    "ВЛАЖ-но (VLAJ-na)."
   ]
  ],
  "City": [
   [
    "город",
    "ville",
    "ГО-род (GO-rat). Pluriel : города."
   ],
   [
    "улица",
    "rue",
    "У-ли-ца (OU-li-tsa). на улице = dans la rue, dehors."
   ],
   [
    "площадь",
    "place",
    "Féminin (-ь). ПЛО-щадь (PLO-chtchit')."
   ],
   [
    "центр",
    "centre",
    "« tsentr ». в центре = en centre-ville."
   ],
   [
    "мост",
    "pont",
    "на мосту = sur le pont (accent sur у)."
   ],
   [
    "парк",
    "parc",
    ""
   ],
   [
    "музей",
    "musée",
    "му-ЗЕЙ (mou-ZIEÏ)."
   ],
   [
    "театр",
    "théâtre",
    "те-АТР (ti-ATR)."
   ],
   [
    "библиотека",
    "bibliothèque",
    "биб-ли-о-ТЕ-ка (bi-bli-a-TIÉ-ka)."
   ],
   [
    "банк",
    "banque",
    "Masculin en russe : в банке."
   ],
   [
    "почта",
    "poste",
    "ПОЧ-та (POTCH-ta). Aussi : le courrier, les mails."
   ],
   [
    "школа",
    "école",
    "ШКО-ла (CHKO-la)."
   ],
   [
    "метро",
    "métro",
    "мет-РО (mi-TRO). Neutre et invariable."
   ],
   [
    "автобус",
    "bus",
    "ав-ТО-бус (af-TO-bous)."
   ],
   [
    "остановка",
    "arrêt (de bus)",
    "о-ста-НОВ-ка (a-sta-NOF-ka)."
   ],
   [
    "трамвай",
    "tramway",
    "трам-ВАЙ (tram-VAÏ)."
   ],
   [
    "машина",
    "voiture",
    "ма-ШИ-на (ma-CHI-na). Aussi : une machine."
   ],
   [
    "светофор",
    "feu (de circulation)",
    "све-то-ФОР (svi-ta-FOR)."
   ],
   [
    "перекрёсток",
    "carrefour",
    "пе-ре-КРЁС-ток (pi-ri-KRIOS-tak)."
   ],
   [
    "направо",
    "à droite",
    "на-ПРА-во (na-PRA-va)."
   ],
   [
    "налево",
    "à gauche",
    "на-ЛЕ-во (na-LIÉ-va)."
   ],
   [
    "прямо",
    "tout droit",
    "ПРЯ-мо (PRIA-ma)."
   ],
   [
    "далеко",
    "loin",
    "да-ле-КО (da-li-KO)."
   ],
   [
    "близко",
    "près",
    "БЛИЗ-ко (BLIS-ka)."
   ],
   [
    "здание",
    "bâtiment",
    "ЗДА-ни-е (ZDA-ni-ié)."
   ],
   [
    "район",
    "quartier",
    "ра-ЙОН (ra-YON). Le vrai mot pour « quartier »."
   ],
   [
    "идти",
    "aller (à pied)",
    "ид-ТИ (it-TI) ; я иду, ты идёшь. Passé irrégulier : шёл, шла."
   ]
  ],
  "Family": [
   [
    "семья",
    "famille",
    "се-МЬЯ (sim'-YA)."
   ],
   [
    "мама",
    "maman",
    "МА-ма (MA-ma)."
   ],
   [
    "папа",
    "papa",
    "Masculin malgré le -а : мой папа."
   ],
   [
    "мать",
    "mère",
    "Féminin (-ь). Plus soutenu que мама."
   ],
   [
    "отец",
    "père",
    "о-ТЕЦ (a-TIETS). Plus soutenu que папа."
   ],
   [
    "родители",
    "parents",
    "ро-ДИ-те-ли (ra-DI-ti-li). Seulement le père et la mère."
   ],
   [
    "сын",
    "fils",
    "Pluriel : сыновья."
   ],
   [
    "дочь",
    "fille (de quelqu'un)",
    "Féminin (-ь). Pluriel : дочери. Une fille, enfant = девочка."
   ],
   [
    "брат",
    "frère",
    "Pluriel irrégulier : братья."
   ],
   [
    "сестра",
    "sœur",
    "сест-РА (sis-TRA). Pluriel : сёстры."
   ],
   [
    "бабушка",
    "grand-mère",
    "БА-буш-ка (BA-bouch-ka) : accent sur la 1re syllabe."
   ],
   [
    "дедушка",
    "grand-père",
    "Masculin malgré le -а. ДЕ-душ-ка (DIÉ-douch-ka)."
   ],
   [
    "муж",
    "mari",
    "Pluriel : мужья."
   ],
   [
    "жена",
    "épouse, femme",
    "же-НА (ji-NA)."
   ],
   [
    "ребёнок",
    "enfant",
    "ре-БЁ-нок (ri-BIO-nak). Pluriel : дети."
   ],
   [
    "дети",
    "enfants",
    "ДЕ-ти (DIÉ-ti). Pluriel de ребёнок."
   ],
   [
    "мальчик",
    "garçon",
    "МАЛЬ-чик (MAL'-tchik)."
   ],
   [
    "девочка",
    "petite fille",
    "ДЕ-воч-ка (DIÉ-vatch-ka). Une jeune femme = девушка."
   ],
   [
    "дядя",
    "oncle",
    "Masculin malgré le -я. ДЯ-дя (DIA-dia)."
   ],
   [
    "тётя",
    "tante",
    "ТЁ-тя (TIO-tia)."
   ],
   [
    "внук",
    "petit-fils",
    "Petite-fille = внучка."
   ],
   [
    "двоюродный брат",
    "cousin",
    "дво-Ю-род-ный (dva-YOU-rad-nyï). Cousine = двоюродная сестра."
   ],
   [
    "мужчина",
    "homme",
    "Masculin malgré le -а. муж-ЧИ-на (mouch-CHI-na)."
   ],
   [
    "женщина",
    "femme",
    "ЖЕН-щи-на (JEN-chtchi-na)."
   ],
   [
    "друг",
    "ami",
    "Le г final se dit « k ». Pluriel irrégulier : друзья. Une amie : подруга."
   ],
   [
    "имя",
    "prénom",
    "Neutre malgré le -я. Как тебя зовут ? = comment tu t'appelles ?"
   ],
   [
    "любить",
    "aimer",
    "лю-БИТЬ (liou-BIT') ; я люблю, ты любишь."
   ]
  ],
  "Restaurant": [
   [
    "ресторан",
    "restaurant",
    "рес-то-РАН (ris-ta-RAN)."
   ],
   [
    "кафе",
    "café (le lieu)",
    "ка-ФЕ (ka-FÉ). Neutre et invariable."
   ],
   [
    "меню",
    "menu, carte",
    "ме-НЮ (mi-NIOU). Neutre et invariable."
   ],
   [
    "официант",
    "serveur",
    "о-фи-ци-АНТ (a-fi-tsi-ANT). Une serveuse : официантка."
   ],
   [
    "счёт",
    "addition",
    "« chtchot ». Счёт, пожалуйста ! = l'addition, s'il vous plaît !"
   ],
   [
    "обед",
    "déjeuner",
    "о-БЕД (a-BIET). обедать = déjeuner (verbe)."
   ],
   [
    "ужин",
    "dîner",
    "У-жин (OU-jin). ужинать = dîner (verbe)."
   ],
   [
    "заказывать",
    "commander",
    "за-КА-зы-вать (za-KA-zy-vat'). Perfectif : заказать (я закажу)."
   ],
   [
    "столик",
    "table (au restaurant)",
    "СТО-лик (STO-lik). Diminutif de стол."
   ],
   [
    "блюдо",
    "plat",
    "БЛЮ-до (BLIOU-da)."
   ],
   [
    "салат",
    "salade (composée)",
    "са-ЛАТ (sa-LAT)."
   ],
   [
    "напиток",
    "boisson",
    "на-ПИ-ток (na-PI-tak). Pluriel : напитки."
   ],
   [
    "чай",
    "thé",
    "« tchaï »."
   ],
   [
    "кофе",
    "café (la boisson)",
    "КО-фе (KO-fié). Masculin, malgré le -е : чёрный кофе."
   ],
   [
    "сок",
    "jus",
    "апельсиновый сок = jus d'orange."
   ],
   [
    "пиво",
    "bière",
    "ПИ-во (PI-va). Neutre."
   ],
   [
    "вино",
    "vin",
    "ви-НО (vi-NO)."
   ],
   [
    "вилка",
    "fourchette",
    "ВИЛ-ка (VIL-ka)."
   ],
   [
    "нож",
    "couteau",
    "Le ж final se dit « ch » : « noch »."
   ],
   [
    "ложка",
    "cuillère",
    "ЛОЖ-ка (LOCH-ka)."
   ],
   [
    "тарелка",
    "assiette",
    "та-РЕЛ-ка (ta-RIEL-ka)."
   ],
   [
    "стакан",
    "verre (à boire)",
    "ста-КАН (sta-KAN). Le verre à pied = бокал."
   ],
   [
    "чашка",
    "tasse",
    "ЧАШ-ка (TCHACH-ka)."
   ],
   [
    "вкусно",
    "c'est bon",
    "ВКУС-но (FKOUS-na). Очень вкусно ! = c'est délicieux !"
   ],
   [
    "десерт",
    "dessert",
    "де-СЕРТ (di-SIERT)."
   ],
   [
    "чаевые",
    "pourboire",
    "ча-е-ВЫ-е (tcha-i-VY-ié). Toujours au pluriel. De чай."
   ],
   [
    "приятного аппетита",
    "bon appétit",
    "при-ЯТ-но-го ап-пе-ТИ-та (pri-YAT-na-va a-pi-TI-ta) : le г se dit « v »."
   ]
  ]
 },
 "tips": [
  [
   "FAUX AMIS",
   "В Н Р С У Х",
   "Ces lettres ressemblent au latin mais ne se lisent pas pareil : В = v, Н = n, Р = r, С = s, У = ou, Х = kh (comme la jota espagnole). Astuce : ресторан se lit res-ta-RAN, pas « pectopah »."
  ],
  [
   "LE О SANS ACCENT",
   "Il se dit presque a",
   "Un о qui ne porte pas l'accent sonne comme un a : мо-ло-КО (ma-la-KO), Мо-СКВА (mas-KVA). Apprends l'accent avec chaque mot nouveau, c'est lui qui décide de la prononciation."
  ],
  [
   "PAS DE « ÊTRE »",
   "Я студент",
   "Au présent, le verbe « être » disparaît, et l'article aussi : я студент = je (suis) étudiant, мама дома = maman (est) à la maison. Это remplace « c'est » et ne s'accorde jamais."
  ],
  [
   "LE GENRE",
   "Regarde la dernière lettre",
   "Consonne = masculin (стол), -а / -я = féminin (мама), -о / -е = neutre (окно). Le possessif suit : мой стол, моя мама, моё окно. Piège : папа finit par -а mais reste masculin, мой папа."
  ],
  [
   "DEUX CONJUGAISONS",
   "-ешь ou -ишь",
   "Читать : я читаю, ты читаешь, они читают. Говорить : я говорю, ты говоришь, они говорят. Astuce : apprends la forme ты de chaque verbe, elle te dit son groupe et donne toutes les autres."
  ],
  [
   "AVOIR",
   "У меня есть",
   "Le russe ne dit pas « j'ai » mais « chez moi, il y a » : у меня есть кошка. Change seulement le pronom : у тебя, у него (u ni-VO), у неё (u ni-YO), у нас. La chose possédée ne change pas."
  ],
  [
   "ГДЕ / КУДА",
   "Où l'on est, où l'on va",
   "Где ? = où, sans mouvement → prépositionnel : я в школе. Куда ? = vers où → accusatif : я иду в школу. Astuce : pense au « -у » de куда, qu'on retrouve dans в школу, на работу."
  ],
  [
   "VIVANT OU PAS",
   "L'accusatif masculin",
   "Une chose masculine ne change pas : я вижу стол. Un être vivant prend -а : я вижу брата, я жду друга. Les mots en -а comme папа suivent les féminins : я вижу папу."
  ],
  [
   "НЕТ + GÉNITIF",
   "L'absence change le nom",
   "Нет appelle toujours le génitif : у меня есть машина, mais у меня нет машины. Au passé, c'est не было (toujours au neutre) : не было времени. Prononciation : ВРЕ-ме-ни (VRIÉ-mi-ni)."
  ],
  [
   "-Л, -ЛА, -ЛИ",
   "Le passé dit le genre",
   "Au passé, une femme dit я была, я устала ; un homme я был, я устал. Pas de terminaison de personne : ты читал, он читал, même forme. Prononciation : бы-ЛА (by-LA), mais БЫ-ли (BY-li)."
  ],
  [
   "ПАРЫ",
   "Deux verbes pour un",
   "Apprends les verbes par paires : делать / сделать, писать / написать, покупать / купить, говорить / сказать. Pose-toi la question : l'action est-elle finie, avec un résultat ? Si oui, perfectif. Et le futur avec буду, c'est seulement pour l'imperfectif."
  ],
  [
   "ИДТИ / ЕХАТЬ",
   "À pied ou en véhicule",
   "Le français dit « aller » partout, le russe non : я иду в парк (à pied), я еду в Париж (en véhicule). Pour une autre ville, c'est presque toujours ехать. Prononciation : и-ДУ (i-DOU), Е-ду (YÉ-dou)."
  ]
 ],
 "faux": [
  [
   "фамилия",
   "nom de famille",
   "le piège : la famille = семья"
  ],
  [
   "артист",
   "acteur, artiste de scène",
   "le piège : un artiste peintre = художник"
  ],
  [
   "аккуратный",
   "soigneux, ordonné",
   "le piège : précis, exact = точный"
  ],
  [
   "туалет",
   "toilettes (WC)",
   "le piège : faire sa toilette = умываться"
  ],
  [
   "квартира",
   "appartement",
   "le piège : un quartier = район"
  ],
  [
   "журнал",
   "magazine, revue",
   "le piège : un journal (quotidien) = газета"
  ],
  [
   "декада",
   "période de dix jours",
   "le piège : une décennie = десятилетие"
  ],
  [
   "резюме",
   "CV",
   "le piège : un résumé = краткое содержание"
  ],
  [
   "банка",
   "bocal, boîte de conserve",
   "le piège : une banque = банк"
  ],
  [
   "проспект",
   "avenue, boulevard",
   "le piège : un prospectus = буклет"
  ],
  [
   "команда",
   "équipe",
   "le piège : une commande = заказ"
  ],
  [
   "компот",
   "boisson de fruits cuits",
   "le piège : une compote = фруктовое пюре"
  ]
 ],
 "sites": [
  [
   "Dico",
   "Reverso Context russe-français",
   "https://context.reverso.net/traduction/russe-francais/",
   "Chaque mot traduit dans de vraies phrases, avec l'écoute. Idéal pour voir un mot en contexte."
  ],
  [
   "Référence",
   "OpenRussian",
   "https://en.openrussian.org/",
   "Pour chaque mot : l'accent tonique, toutes les déclinaisons, la conjugaison et la paire d'aspect."
  ],
  [
   "Référence",
   "Викисловарь (Wiktionnaire russe)",
   "https://ru.wiktionary.org/",
   "Le dictionnaire libre en russe : accent, déclinaison complète et exemples pour presque tous les mots."
  ],
  [
   "Grammaire",
   "Master Russian",
   "https://masterrussian.com/",
   "Leçons de grammaire claires (cas, aspects, verbes de mouvement) et listes de vocabulaire, en anglais."
  ],
  [
   "Cours",
   "Russian for Everyone",
   "https://www.russianforeveryone.com/",
   "Un cours complet et gratuit, du débutant à l'intermédiaire, avec des tests à chaque leçon. En anglais."
  ],
  [
   "Prononcer",
   "Forvo",
   "https://forvo.com/",
   "Écoute n'importe quel mot prononcé par des natifs : parfait pour entendre où tombe l'accent."
  ],
  [
   "YouTube",
   "Easy Russian",
   "https://www.youtube.com/@EasyRussian",
   "Interviews dans la rue avec sous-titres russes et anglais : le russe tel qu'on le parle vraiment."
  ]
 ],
 "cours": [
  {
   "id": "work",
   "theme": "Work",
   "t": "Au travail : réunions et mails",
   "situ": "Dire où tu en es, décaler une réunion, demander un fichier.",
   "ph": [
    [
     "Я ещё не написал отчёт.",
     "Je n'ai pas encore écrit le rapport."
    ],
    [
     "Можно перенести встречу на четверг?",
     "On peut décaler la réunion à jeudi ?"
    ],
    [
     "Пришлите, пожалуйста, файл.",
     "Envoyez-moi le fichier, s'il vous plaît."
    ],
    [
     "Я проверю и напишу вам.",
     "Je vérifie et je vous écris."
    ],
    [
     "У меня сегодня много работы.",
     "J'ai beaucoup de travail aujourd'hui."
    ],
    [
     "Когда начинается совещание?",
     "Quand commence la réunion ?"
    ]
   ],
   "dia": [
    [
     "A",
     "Ты уже закончил презентацию?"
    ],
    [
     "B",
     "Ещё нет. Я делаю последний слайд."
    ],
    [
     "A",
     "Клиент ждёт её в пятницу."
    ],
    [
     "B",
     "Хорошо, я пришлю её в четверг."
    ]
   ],
   "g": {
    "t": "L'aspect : делать / сделать",
    "r": "Le russe a deux verbes pour une même action : l'imperfectif (делать, писать) pour le processus ou l'habitude, le perfectif (сделать, написать) pour un résultat atteint. Le perfectif n'a pas de présent : conjugué comme un présent, il donne un futur (я пришлю = j'enverrai).",
    "ex": [
     "Я писал отчёт весь день.",
     "Я уже написал отчёт.",
     "Я сделаю это завтра."
    ],
    "skill": "ru_aspect"
   },
   "tr": [
    [
     "Я написал отчёт весь день",
     "Я писал отчёт весь день",
     "Une durée (весь день) → imperfectif : on parle du processus, pas du résultat."
    ],
    [
     "Я работаю в офис",
     "Я работаю в офисе",
     "Un lieu où l'on est → в + prépositionnel : офис → в офисе."
    ],
    [
     "Я есть менеджер",
     "Я менеджер",
     "Pas de verbe « être » au présent."
    ]
   ],
   "task": [
    [
     "Je n'ai pas encore fini le rapport.",
     "Я ещё не закончил отчёт."
    ],
    [
     "Je t'envoie le fichier demain.",
     "Я пришлю тебе файл завтра."
    ],
    [
     "Je travaille dans un bureau.",
     "Я работаю в офисе."
    ]
   ]
  },
  {
   "id": "travel",
   "theme": "Travel",
   "t": "À la gare et à l'aéroport",
   "situ": "Acheter un billet, trouver ton quai, gérer un retard.",
   "ph": [
    [
     "Один билет до Петербурга, пожалуйста.",
     "Un billet pour Saint-Pétersbourg, s'il vous plaît."
    ],
    [
     "Когда отправляется поезд?",
     "Quand part le train ?"
    ],
    [
     "С какой платформы?",
     "De quel quai ?"
    ],
    [
     "Наш рейс задерживается.",
     "Notre vol a du retard."
    ],
    [
     "Где можно получить багаж?",
     "Où est-ce qu'on récupère les bagages ?"
    ],
    [
     "Я еду в Казань на неделю.",
     "Je vais à Kazan pour une semaine."
    ]
   ],
   "dia": [
    [
     "Кассир",
     "Здравствуйте! Куда вы едете?"
    ],
    [
     "Ты",
     "В Москву. Один билет на завтра, пожалуйста."
    ],
    [
     "Кассир",
     "Есть поезд в девять утра."
    ],
    [
     "Ты",
     "Отлично. С какого вокзала?"
    ],
    [
     "Кассир",
     "С Ленинградского. Вот ваш билет."
    ]
   ],
   "g": {
    "t": "идти / ехать : à pied ou en véhicule",
    "r": "Le russe distingue идти (aller à pied) et ехать (aller en train, en voiture, en bus). Avec в / на, la destination se met à l'accusatif : в Москву, на вокзал. Я иду, ты идёшь ; я еду, ты едешь.",
    "ex": [
     "Я еду в Москву на поезде.",
     "Мы идём на вокзал.",
     "Куда ты едешь?"
    ],
    "skill": "ru_mouvement"
   },
   "tr": [
    [
     "Я иду в Москву",
     "Я еду в Москву",
     "Pour une autre ville, tu y vas en véhicule → ехать."
    ],
    [
     "Я еду в Москве",
     "Я еду в Москву",
     "Une direction → в + accusatif (Москву), pas le lieu (Москве)."
    ],
    [
     "Мой полёт задерживается",
     "Мой рейс задерживается",
     "Un vol prévu (avec un numéro) = рейс ; полёт = le fait de voler."
    ]
   ],
   "task": [
    [
     "Je vais à Moscou en train.",
     "Я еду в Москву на поезде."
    ],
    [
     "Quand part le train ?",
     "Когда отправляется поезд?"
    ]
   ]
  },
  {
   "id": "health",
   "theme": "Health",
   "t": "Chez le médecin et à la pharmacie",
   "situ": "Dire où tu as mal, décrire tes symptômes, acheter un médicament.",
   "ph": [
    [
     "У меня болит голова.",
     "J'ai mal à la tête."
    ],
    [
     "У меня температура.",
     "J'ai de la fièvre."
    ],
    [
     "У вас есть что-нибудь от кашля?",
     "Vous avez quelque chose contre la toux ?"
    ],
    [
     "Мне нужно к врачу.",
     "Il faut que j'aille chez le médecin."
    ],
    [
     "Я плохо себя чувствую.",
     "Je ne me sens pas bien."
    ],
    [
     "Три раза в день после еды.",
     "Trois fois par jour, après les repas."
    ]
   ],
   "dia": [
    [
     "Врач",
     "Что у вас болит?"
    ],
    [
     "Ты",
     "У меня болит горло, и у меня температура."
    ],
    [
     "Врач",
     "Давно?"
    ],
    [
     "Ты",
     "Два дня."
    ],
    [
     "Врач",
     "Вот рецепт. И пейте много воды."
    ]
   ],
   "g": {
    "t": "у меня есть / у меня болит",
    "r": "Pour « avoir », le russe dit « chez moi, il y a » : у меня есть + nominatif. Pour une douleur : у меня болит + la partie du corps. Pour un état (fièvre, rhume), on enlève souvent есть : у меня температура.",
    "ex": [
     "У меня есть аспирин.",
     "У меня болит живот.",
     "У тебя болит спина?"
    ],
    "skill": "ru_u_menya"
   },
   "tr": [
    [
     "Я имею температуру",
     "У меня температура",
     "« Avoir » se dit у меня (есть) ; иметь sonne très livresque."
    ],
    [
     "Мне болит голова",
     "У меня болит голова",
     "Une douleur → у меня болит, pas мне."
    ],
    [
     "У я есть аспирин",
     "У меня есть аспирин",
     "Après у, le pronom change de forme : у меня, у тебя, у него, у неё."
    ]
   ],
   "task": [
    [
     "J'ai mal au dos.",
     "У меня болит спина."
    ],
    [
     "Vous avez quelque chose contre la fièvre ?",
     "У вас есть что-нибудь от температуры?"
    ]
   ]
  },
  {
   "id": "climbing",
   "theme": "Climbing",
   "t": "À la salle d'escalade",
   "situ": "Raconter ta séance, parler d'une voie, assurer ton partenaire.",
   "ph": [
    [
     "Можешь меня страховать?",
     "Tu peux m'assurer ?"
    ],
    [
     "Эта трасса очень сложная.",
     "Cette voie est très dure."
    ],
    [
     "Держи!",
     "Sec ! (tiens-moi)"
    ],
    [
     "Я забыл магнезию.",
     "J'ai oublié la magnésie."
    ],
    [
     "Я упал на последней зацепке.",
     "Je suis tombé sur la dernière prise."
    ],
    [
     "Вчера мы лазили на скалодроме три часа.",
     "Hier, on a grimpé trois heures à la salle."
    ]
   ],
   "dia": [
    [
     "Анна",
     "Как прошла тренировка?"
    ],
    [
     "Макс",
     "Хорошо! Я наконец пролез синюю трассу."
    ],
    [
     "Анна",
     "Молодец! А я два раза сорвалась."
    ],
    [
     "Макс",
     "Ничего, в следующий раз получится."
    ]
   ],
   "g": {
    "t": "Le passé : -л, -ла, -ли",
    "r": "Le passé s'accorde avec le genre du sujet, pas avec la personne : enlève -ть et ajoute -л (masculin), -ла (féminin), -ло (neutre) ou -ли (pluriel). Une grimpeuse dit я упала, un grimpeur я упал.",
    "ex": [
     "Я лазил три часа.",
     "Анна упала два раза.",
     "Мы были на скалодроме."
    ],
    "skill": "ru_passe"
   },
   "tr": [
    [
     "Анна упал",
     "Анна упала",
     "Sujet féminin → -ла."
    ],
    [
     "Мы лазил",
     "Мы лазили",
     "Pluriel (et вы de politesse) → -ли."
    ],
    [
     "Я был лазить",
     "Я лазил",
     "Pas d'auxiliaire au passé : un seul verbe en -л."
    ]
   ],
   "task": [
    [
     "Hier, j'ai grimpé deux heures.",
     "Вчера я лазил два часа."
    ],
    [
     "Elle est tombée sur la dernière prise.",
     "Она упала на последней зацепке."
    ]
   ]
  },
  {
   "id": "food",
   "theme": "Food",
   "t": "La nourriture : goûts et repas",
   "situ": "Dire ce que tu aimes, ce que tu manges, préparer un repas.",
   "ph": [
    [
     "Я люблю рыбу, но не ем мясо.",
     "J'aime le poisson, mais je ne mange pas de viande."
    ],
    [
     "Что ты хочешь на ужин?",
     "Qu'est-ce que tu veux pour le dîner ?"
    ],
    [
     "Я готовлю суп.",
     "Je prépare une soupe."
    ],
    [
     "Купи, пожалуйста, хлеб и молоко.",
     "Achète du pain et du lait, s'il te plaît."
    ],
    [
     "Это очень вкусно!",
     "C'est très bon !"
    ],
    [
     "Я пью кофе без сахара.",
     "Je bois mon café sans sucre."
    ]
   ],
   "dia": [
    [
     "Олег",
     "Что ты готовишь?"
    ],
    [
     "Лена",
     "Борщ. Ты любишь свёклу?"
    ],
    [
     "Олег",
     "Очень! А сметана есть?"
    ],
    [
     "Лена",
     "Да, в холодильнике. Возьми ещё хлеб, пожалуйста."
    ]
   ],
   "g": {
    "t": "L'accusatif : le complément d'objet",
    "r": "Le complément d'objet direct se met à l'accusatif. Les noms féminins en -а / -я passent en -у / -ю : рыба → рыбу, свёкла → свёклу. Les masculins de choses et les neutres ne changent pas : я ем суп, я пью молоко.",
    "ex": [
     "Я люблю рыбу.",
     "Ты хочешь кашу?",
     "Я пью воду."
    ],
    "skill": "ru_accusatif"
   },
   "tr": [
    [
     "Я люблю рыба",
     "Я люблю рыбу",
     "Complément d'objet féminin en -а → -у."
    ],
    [
     "Я не ем мясу",
     "Я не ем мясо",
     "Neutre en -о : il ne change pas à l'accusatif."
    ],
    [
     "Это очень вкусный!",
     "Это очень вкусно!",
     "Après это, on emploie la forme en -о : вкусно."
    ]
   ],
   "task": [
    [
     "Je prépare la soupe.",
     "Я готовлю суп."
    ],
    [
     "J'aime la viande et le poisson.",
     "Я люблю мясо и рыбу."
    ]
   ]
  },
  {
   "id": "restaurant",
   "theme": "Restaurant",
   "t": "Au restaurant et au café",
   "situ": "Demander une table, commander, demander l'addition.",
   "ph": [
    [
     "Столик на двоих, пожалуйста.",
     "Une table pour deux, s'il vous plaît."
    ],
    [
     "Можно меню?",
     "On peut avoir la carte ?"
    ],
    [
     "Чашку кофе, пожалуйста.",
     "Une tasse de café, s'il vous plaît."
    ],
    [
     "У вас есть блюда без мяса?",
     "Vous avez des plats sans viande ?"
    ],
    [
     "Принесите, пожалуйста, стакан воды.",
     "Apportez-moi un verre d'eau, s'il vous plaît."
    ],
    [
     "Счёт, пожалуйста.",
     "L'addition, s'il vous plaît."
    ]
   ],
   "dia": [
    [
     "Официант",
     "Добрый вечер! Что будете заказывать?"
    ],
    [
     "Ты",
     "Салат и суп, пожалуйста."
    ],
    [
     "Официант",
     "Извините, супа сегодня нет."
    ],
    [
     "Ты",
     "Тогда пельмени. И стакан сока."
    ],
    [
     "Официант",
     "Хорошо. Что-нибудь ещё?"
    ]
   ],
   "g": {
    "t": "Le génitif : нет, без, un verre de",
    "r": "Après нет (il n'y a pas), без (sans) et les quantités (стакан, чашка, много), le nom passe au génitif. Masculin et neutre → -а / -я : суп → супа ; féminin -а → -ы, -я → -и : вода → воды.",
    "ex": [
     "Супа сегодня нет.",
     "Чай без сахара.",
     "Стакан воды, пожалуйста."
    ],
    "skill": "ru_genitif"
   },
   "tr": [
    [
     "Сегодня нет суп",
     "Сегодня нет супа",
     "Après нет → génitif."
    ],
    [
     "Стакан вода",
     "Стакан воды",
     "« Un verre de » → génitif, sans préposition."
    ],
    [
     "Кофе без сахар",
     "Кофе без сахара",
     "без + génitif."
    ]
   ],
   "task": [
    [
     "Une table pour deux, s'il vous plaît.",
     "Столик на двоих, пожалуйста."
    ],
    [
     "Un thé sans sucre, s'il vous plaît.",
     "Чай без сахара, пожалуйста."
    ]
   ]
  },
  {
   "id": "home",
   "theme": "Home",
   "t": "À la maison",
   "situ": "Décrire ton logement, dire où sont les choses.",
   "ph": [
    [
     "Я живу в квартире на третьем этаже.",
     "J'habite dans un appartement au troisième étage."
    ],
    [
     "Ключи на столе.",
     "Les clés sont sur la table."
    ],
    [
     "Мама на кухне.",
     "Maman est dans la cuisine."
    ],
    [
     "В комнате холодно.",
     "Il fait froid dans la chambre."
    ],
    [
     "Где пульт?",
     "Où est la télécommande ?"
    ],
    [
     "Сегодня я убираю квартиру.",
     "Aujourd'hui, je fais le ménage dans l'appartement."
    ]
   ],
   "dia": [
    [
     "A",
     "Ты не видел мой телефон?"
    ],
    [
     "B",
     "Посмотри в спальне, на кровати."
    ],
    [
     "A",
     "Там нет. А на кухне?"
    ],
    [
     "B",
     "Да, вот он, на холодильнике!"
    ]
   ],
   "g": {
    "t": "в / на + prépositionnel : où est quelque chose",
    "r": "Pour dire où se trouve quelque chose : в (dans) ou на (sur) + prépositionnel. La terminaison est le plus souvent -е : стол → на столе, комната → в комнате. Certains lieux se construisent avec на par habitude : на кухне.",
    "ex": [
     "Книга на столе.",
     "Я живу в Москве.",
     "Кошка в комнате."
    ],
    "skill": "ru_prepositionnel"
   },
   "tr": [
    [
     "Ключи на стол",
     "Ключи на столе",
     "Un lieu où l'on est → prépositionnel en -е."
    ],
    [
     "Мама в кухне",
     "Мама на кухне",
     "La cuisine se construit avec на : на кухне."
    ],
    [
     "Я живу в квартира",
     "Я живу в квартире",
     "в + prépositionnel : квартира → квартире."
    ]
   ],
   "task": [
    [
     "Les clés sont dans le sac.",
     "Ключи в сумке."
    ],
    [
     "J'habite à Moscou.",
     "Я живу в Москве."
    ]
   ]
  },
  {
   "id": "shopping",
   "theme": "Shopping",
   "t": "Dans les magasins",
   "situ": "Demander un prix, une taille, choisir un article.",
   "ph": [
    [
     "Сколько стоит эта куртка?",
     "Combien coûte cette veste ?"
    ],
    [
     "Можно примерить?",
     "Je peux essayer ?"
    ],
    [
     "У вас есть размер побольше?",
     "Vous avez une taille au-dessus ?"
    ],
    [
     "Этот свитер слишком маленький.",
     "Ce pull est trop petit."
    ],
    [
     "Я возьму это платье.",
     "Je prends cette robe."
    ],
    [
     "Можно оплатить картой?",
     "Je peux payer par carte ?"
    ]
   ],
   "dia": [
    [
     "Продавец",
     "Здравствуйте! Вам помочь?"
    ],
    [
     "Ты",
     "Да. Сколько стоит этот свитер?"
    ],
    [
     "Продавец",
     "Три тысячи рублей."
    ],
    [
     "Ты",
     "А есть такой же, но синий?"
    ],
    [
     "Продавец",
     "Да, вот, пожалуйста."
    ]
   ],
   "g": {
    "t": "Le genre : этот, эта, это",
    "r": "Chaque nom a un genre, qu'on voit à sa fin : consonne → masculin (свитер), -а / -я → féminin (куртка), -о / -е → neutre (платье). « Ce, cette » et les adjectifs s'accordent : этот свитер, эта куртка, это платье.",
    "ex": [
     "Этот свитер красивый.",
     "Эта куртка дорогая.",
     "Это платье новое."
    ],
    "skill": "ru_genre"
   },
   "tr": [
    [
     "Эта свитер",
     "Этот свитер",
     "свитер finit par une consonne → masculin."
    ],
    [
     "Этот куртка дорогой",
     "Эта куртка дорогая",
     "куртка finit par -а → féminin : эта, adjectif en -ая."
    ],
    [
     "Это платье новый",
     "Это платье новое",
     "платье finit par -е → neutre : adjectif en -ое."
    ]
   ],
   "task": [
    [
     "Combien coûte cette robe ?",
     "Сколько стоит это платье?"
    ],
    [
     "Ce pull est trop grand.",
     "Этот свитер слишком большой."
    ]
   ]
  },
  {
   "id": "weather",
   "theme": "Weather",
   "t": "Le temps qu'il fait",
   "situ": "Parler de la météo d'aujourd'hui et de demain, prévoir une sortie.",
   "ph": [
    [
     "Сегодня холодно.",
     "Il fait froid aujourd'hui."
    ],
    [
     "Идёт снег.",
     "Il neige."
    ],
    [
     "Завтра будет дождь.",
     "Demain, il va pleuvoir."
    ],
    [
     "Какая завтра будет погода?",
     "Quel temps fera-t-il demain ?"
    ],
    [
     "Возьми зонт!",
     "Prends un parapluie !"
    ],
    [
     "Сколько сегодня градусов?",
     "Il fait combien de degrés aujourd'hui ?"
    ]
   ],
   "dia": [
    [
     "A",
     "Какая завтра будет погода?"
    ],
    [
     "B",
     "Будет тепло и солнечно."
    ],
    [
     "A",
     "Отлично! Тогда будем гулять в парке."
    ],
    [
     "B",
     "Только вечером, говорят, будет дождь."
    ]
   ],
   "g": {
    "t": "Le futur : буду + infinitif",
    "r": "Futur des verbes imperfectifs : быть conjugué (буду, будешь, будет, будем, будете, будут) + infinitif. Pour la météo, будет seul suffit : завтра будет холодно, будет дождь.",
    "ex": [
     "Завтра будет солнечно.",
     "Мы будем гулять в парке.",
     "Ты будешь работать в субботу?"
    ],
    "skill": "ru_futur"
   },
   "tr": [
    [
     "Завтра есть дождь",
     "Завтра будет дождь",
     "Au futur, « il y a » → будет."
    ],
    [
     "Я буду гуляю",
     "Я буду гулять",
     "Après буду, l'infinitif."
    ],
    [
     "Сегодня холодный",
     "Сегодня холодно",
     "Pour la météo, la forme en -о : холодно, тепло."
    ]
   ],
   "task": [
    [
     "Demain, il va faire chaud.",
     "Завтра будет жарко."
    ],
    [
     "Nous allons nous promener dans le parc.",
     "Мы будем гулять в парке."
    ]
   ]
  },
  {
   "id": "city",
   "theme": "City",
   "t": "En ville",
   "situ": "Demander ton chemin, trouver le métro, une pharmacie, un musée.",
   "ph": [
    [
     "Извините, где метро?",
     "Excusez-moi, où est le métro ?"
    ],
    [
     "Это далеко?",
     "C'est loin ?"
    ],
    [
     "Музей рядом, направо.",
     "Le musée est tout près, à droite."
    ],
    [
     "Идите прямо, потом налево.",
     "Allez tout droit, puis à gauche."
    ],
    [
     "Как доехать до центра?",
     "Comment aller au centre ?"
    ],
    [
     "Я здесь первый раз.",
     "C'est la première fois que je viens ici."
    ]
   ],
   "dia": [
    [
     "Ты",
     "Извините, где здесь аптека?"
    ],
    [
     "Прохожий",
     "Аптека? Это недалеко. Идите прямо."
    ],
    [
     "Ты",
     "А потом?"
    ],
    [
     "Прохожий",
     "Потом направо. Аптека рядом с банком."
    ],
    [
     "Ты",
     "Спасибо большое!"
    ]
   ],
   "g": {
    "t": "Pas de « être » au présent",
    "r": "Au présent, le russe ne dit pas « est » : музей рядом = le musée est tout près, я турист = je suis touriste. À l'écrit, un tiret remplace parfois le verbe entre deux noms : Москва — большой город.",
    "ex": [
     "Метро далеко?",
     "Я турист.",
     "Это главная улица."
    ],
    "skill": "ru_etre"
   },
   "tr": [
    [
     "Метро есть далеко",
     "Метро далеко",
     "Pas de verbe « être » au présent."
    ],
    [
     "Где есть метро?",
     "Где метро?",
     "Pour demander où est quelque chose : где + nom, sans verbe."
    ],
    [
     "Как идти до центра на метро?",
     "Как доехать до центра?",
     "En transport, c'est ехать / доехать, pas идти."
    ]
   ],
   "task": [
    [
     "Où est la gare ?",
     "Где вокзал?"
    ],
    [
     "Le musée est loin ?",
     "Музей далеко?"
    ]
   ]
  },
  {
   "id": "family",
   "theme": "Family",
   "t": "La famille",
   "situ": "Présenter tes proches, dire où ils vivent et leur âge.",
   "ph": [
    [
     "Это мой брат.",
     "C'est mon frère."
    ],
    [
     "Моя сестра живёт в Лионе.",
     "Ma sœur habite à Lyon."
    ],
    [
     "Мои родители на пенсии.",
     "Mes parents sont à la retraite."
    ],
    [
     "Как зовут твою маму?",
     "Comment s'appelle ta mère ?"
    ],
    [
     "У меня двое детей.",
     "J'ai deux enfants."
    ],
    [
     "Моему сыну пять лет.",
     "Mon fils a cinq ans."
    ]
   ],
   "dia": [
    [
     "Ира",
     "Кто это на фото?"
    ],
    [
     "Пьер",
     "Это моя семья. Вот мой папа, а это моя мама."
    ],
    [
     "Ира",
     "А это твоя сестра?"
    ],
    [
     "Пьер",
     "Да, это моя сестра Софи. А это её муж."
    ]
   ],
   "g": {
    "t": "Possessifs : мой, моя, моё, мои",
    "r": "Le possessif s'accorde avec ce qui est possédé : мой брат, моя сестра, моё фото, мои родители. Pareil pour твой, твоя, твоё, твои. En revanche, его (à lui), её (à elle) et их (à eux) ne changent jamais.",
    "ex": [
     "Это моя мама.",
     "Где твой брат?",
     "Мои дети дома."
    ],
    "skill": "ru_possessifs"
   },
   "tr": [
    [
     "Это мой сестра",
     "Это моя сестра",
     "сестра est féminin → моя."
    ],
    [
     "Это моя папа",
     "Это мой папа",
     "папа finit par -а, mais c'est un homme : masculin → мой."
    ],
    [
     "Моя родители",
     "Мои родители",
     "Pluriel → мои."
    ]
   ],
   "task": [
    [
     "C'est ma sœur.",
     "Это моя сестра."
    ],
    [
     "Mes parents habitent à Paris.",
     "Мои родители живут в Париже."
    ]
   ]
  },
  {
   "id": "nature",
   "theme": "Nature",
   "t": "En pleine nature",
   "situ": "Randonnée, paysages, animaux : dire ce que tu vois et ce que tu aimes.",
   "ph": [
    [
     "Я очень люблю горы.",
     "J'adore la montagne."
    ],
    [
     "Смотри, там озеро!",
     "Regarde, il y a un lac là-bas !"
    ],
    [
     "Ты видишь эту птицу?",
     "Tu vois cet oiseau ?"
    ],
    [
     "Мы идём в лес за грибами.",
     "On va en forêt cueillir des champignons."
    ],
    [
     "Какой красивый вид!",
     "Quelle belle vue !"
    ],
    [
     "Здесь очень тихо.",
     "C'est très calme ici."
    ]
   ],
   "dia": [
    [
     "Катя",
     "Смотри, на дереве белка!"
    ],
    [
     "Том",
     "Где? Я ничего не вижу."
    ],
    [
     "Катя",
     "Вон там, слева. Видишь?"
    ],
    [
     "Том",
     "А, вижу! Какая маленькая!"
    ]
   ],
   "g": {
    "t": "Présent, 2e conjugaison : видеть, любить",
    "r": "Les verbes en -ить et beaucoup de verbes en -еть font -ишь, -ит, -им, -ите, -ят : ты видишь, они любят. À la 1re personne, la consonne change parfois : видеть → я вижу, любить → я люблю.",
    "ex": [
     "Я вижу озеро.",
     "Ты любишь горы?",
     "Мы смотрим на закат."
    ],
    "skill": "ru_present2"
   },
   "tr": [
    [
     "Я видю птицу",
     "Я вижу птицу",
     "видеть : д devient ж à la 1re personne."
    ],
    [
     "Они любют горы",
     "Они любят горы",
     "2e conjugaison → -ят à la 3e personne du pluriel."
    ],
    [
     "Ты видешь?",
     "Ты видишь?",
     "2e conjugaison → -ишь."
    ]
   ],
   "task": [
    [
     "Tu vois le lac ?",
     "Ты видишь озеро?"
    ],
    [
     "J'aime la forêt.",
     "Я люблю лес."
    ]
   ]
  }
 ],
 "levels": {
  "A1": {
   "can": [
    "Tu sais lire le cyrillique et déchiffrer un panneau, un menu ou un nom de rue.",
    "Tu sais te présenter : ton nom, ton métier, ta famille.",
    "Tu sais dire ce que tu fais et ce que tu aimes avec des verbes courants au présent.",
    "Tu sais poser et répondre à des questions simples : où est…, tu as…, combien coûte…"
   ],
   "ex": "Меня зовут Лея, я студентка. У меня есть брат и кошка.",
   "fr": "Je m'appelle Léa, je suis étudiante. J'ai un frère et une chatte.",
   "hours": 100
  },
  "A2": {
   "can": [
    "Tu sais raconter au passé ce que tu as fait le week-end ou en vacances.",
    "Tu sais dire où tu vas et comment : à pied, en métro, en train.",
    "Tu sais faire des achats, commander au restaurant et parler de quantités : нет, много, мало.",
    "Tu sais écrire un court message pour inviter, remercier ou dire ce que tu feras demain."
   ],
   "ex": "В субботу мы были в Петербурге и долго гуляли по городу.",
   "fr": "Samedi, nous étions à Saint-Pétersbourg et nous nous sommes longtemps promenés en ville.",
   "hours": 200
  },
  "B1": {
   "can": [
    "Tu sais raconter un voyage ou un souvenir en enchaînant passé imperfectif et perfectif.",
    "Tu sais écrire un e-mail simple pour raconter, demander ou proposer quelque chose.",
    "Tu sais comprendre l'essentiel d'une conversation ou d'une vidéo sur un sujet familier.",
    "Tu sais te débrouiller seul en voyage en Russie : transports, hôtel, imprévus."
   ],
   "ex": "Когда я жил в Казани, я познакомился с людьми, которые до сих пор мне очень дороги.",
   "fr": "Quand j'habitais à Kazan, j'ai rencontré des gens qui me sont encore très chers.",
   "hours": 350
  },
  "B2": {
   "can": [
    "Tu sais suivre une conversation animée entre Russes et y prendre part avec aisance.",
    "Tu sais comprendre un article de presse ou un film sans sous-titres sur un sujet courant.",
    "Tu sais argumenter, défendre ton avis et nuancer avec если бы, хотя, поэтому.",
    "Tu manies les verbes de mouvement à préfixe (приехать, уйти, перейти) sans hésiter."
   ],
   "ex": "Если бы у меня было больше времени, я бы чаще ездил в горы.",
   "fr": "Si j'avais plus de temps, j'irais plus souvent à la montagne.",
   "hours": 600
  },
  "C1": {
   "can": [
    "Tu lis des romans contemporains et des textes longs sans effort particulier.",
    "Tu t'exprimes avec spontanéité, sans chercher tes mots.",
    "Tu sais travailler en russe : réunions, rapports, négociations.",
    "Tu comprends l'implicite, l'ironie et les expressions idiomatiques."
   ],
   "ex": "Несмотря на усталость, мы всё-таки решили подняться на вершину до заката.",
   "fr": "Malgré la fatigue, nous avons quand même décidé de monter au sommet avant le coucher du soleil.",
   "hours": 900
  },
  "C2": {
   "can": [
    "Tu comprends sans effort presque tout ce que tu lis ou entends, y compris les classiques.",
    "Tu sais résumer et reformuler des informations venues de sources variées.",
    "Tu exprimes des nuances fines de sens, même sur des sujets complexes.",
    "Tu passes du registre familier au style soutenu avec naturel."
   ],
   "ex": "Чем глубже я погружался в язык, тем отчётливее понимал, сколько в нём оттенков.",
   "fr": "Plus je plongeais dans la langue, plus je comprenais clairement combien elle avait de nuances.",
   "hours": 1200
  }
 },
 "alphabet": [
  {
   "l": "Аа",
   "lat": "a",
   "fr": "Comme « a » dans « papa ».",
   "ex": "мама",
   "exfr": "maman",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Бб",
   "lat": "b",
   "fr": "Comme « b » dans « bébé ».",
   "ex": "брат",
   "exfr": "frère",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Вв",
   "lat": "v",
   "fr": "Se dit « v », pas « b » : comme dans « vélo ».",
   "ex": "вода",
   "exfr": "eau",
   "g": "consonant",
   "trap": true
  },
  {
   "l": "Гг",
   "lat": "g",
   "fr": "Toujours un « g » dur, comme dans « gare », même devant е ou и.",
   "ex": "город",
   "exfr": "ville",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Дд",
   "lat": "d",
   "fr": "Comme « d » dans « dame ».",
   "ex": "дом",
   "exfr": "maison",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Ее",
   "lat": "e",
   "fr": "Se dit « yé » en début de mot ou après une voyelle, « é » après une consonne.",
   "ex": "нет",
   "exfr": "non",
   "g": "vowel",
   "trap": true
  },
  {
   "l": "Ёё",
   "lat": "yo",
   "fr": "Se dit « yo » et porte toujours l'accent ; souvent écrit е, sans les points.",
   "ex": "ёлка",
   "exfr": "sapin",
   "g": "vowel",
   "trap": true
  },
  {
   "l": "Жж",
   "lat": "zh",
   "fr": "Comme « j » dans « jour ».",
   "ex": "жена",
   "exfr": "épouse",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Зз",
   "lat": "z",
   "fr": "Comme « z » dans « zéro » ; attention, il ressemble au chiffre 3.",
   "ex": "зима",
   "exfr": "hiver",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Ии",
   "lat": "i",
   "fr": "Comme « i » dans « ici » ; il ressemble à un N à l'envers.",
   "ex": "игра",
   "exfr": "jeu",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Йй",
   "lat": "y",
   "fr": "Un « i » très bref, comme « ille » dans « fille » ; il suit presque toujours une voyelle.",
   "ex": "чай",
   "exfr": "thé",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Кк",
   "lat": "k",
   "fr": "Comme « k » dans « kilo ».",
   "ex": "кот",
   "exfr": "chat",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Лл",
   "lat": "l",
   "fr": "Un « l » plus sourd qu'en français, la langue contre les dents du haut.",
   "ex": "лес",
   "exfr": "forêt",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Мм",
   "lat": "m",
   "fr": "Comme « m » dans « maman ».",
   "ex": "молоко",
   "exfr": "lait",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Нн",
   "lat": "n",
   "fr": "Se dit « n », pas « h » : comme dans « nez ».",
   "ex": "нос",
   "exfr": "nez",
   "g": "consonant",
   "trap": true
  },
  {
   "l": "Оо",
   "lat": "o",
   "fr": "« o » quand il est accentué, sinon « a » : мо-ло-КО (ma-la-KO).",
   "ex": "окно",
   "exfr": "fenêtre",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Пп",
   "lat": "p",
   "fr": "Comme « p » dans « papa ».",
   "ex": "папа",
   "exfr": "papa",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Рр",
   "lat": "r",
   "fr": "Se dit « r » roulé, comme en espagnol, pas « p ».",
   "ex": "рыба",
   "exfr": "poisson",
   "g": "consonant",
   "trap": true
  },
  {
   "l": "Сс",
   "lat": "s",
   "fr": "Se dit « s », jamais « k » : comme dans « sel ».",
   "ex": "сок",
   "exfr": "jus",
   "g": "consonant",
   "trap": true
  },
  {
   "l": "Тт",
   "lat": "t",
   "fr": "Comme « t » dans « table ».",
   "ex": "там",
   "exfr": "là-bas",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Уу",
   "lat": "u",
   "fr": "Se dit « ou », comme dans « loup », pas « y ».",
   "ex": "утро",
   "exfr": "matin",
   "g": "vowel",
   "trap": true
  },
  {
   "l": "Фф",
   "lat": "f",
   "fr": "Comme « f » dans « fête ».",
   "ex": "фото",
   "exfr": "photo",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Хх",
   "lat": "kh",
   "fr": "Un « r » raclé au fond de la gorge, comme la jota espagnole, pas « ks ».",
   "ex": "хлеб",
   "exfr": "pain",
   "g": "consonant",
   "trap": true
  },
  {
   "l": "Цц",
   "lat": "ts",
   "fr": "Se dit « ts », comme dans « tsé-tsé ».",
   "ex": "улица",
   "exfr": "rue",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Чч",
   "lat": "ch",
   "fr": "Comme « tch » dans « match ».",
   "ex": "час",
   "exfr": "heure",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Шш",
   "lat": "sh",
   "fr": "Comme « ch » dans « chat ».",
   "ex": "школа",
   "exfr": "école",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Щщ",
   "lat": "shch",
   "fr": "Un « ch » long et plus doux, la langue plus en avant.",
   "ex": "борщ",
   "exfr": "bortsch",
   "g": "consonant",
   "trap": false
  },
  {
   "l": "Ъъ",
   "lat": "",
   "fr": "Signe dur : il ne se prononce pas, il sépare la consonne de la voyelle qui suit.",
   "ex": "подъезд",
   "exfr": "entrée d'immeuble",
   "g": "sign",
   "trap": false
  },
  {
   "l": "Ыы",
   "lat": "y",
   "fr": "Un « i » dit au fond de la bouche, lèvres écartées, comme un « ou » sans arrondir.",
   "ex": "мы",
   "exfr": "nous",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Ьь",
   "lat": "",
   "fr": "Signe mou : il ne se prononce pas, il adoucit la consonne d'avant, comme un petit « y ».",
   "ex": "день",
   "exfr": "jour",
   "g": "sign",
   "trap": true
  },
  {
   "l": "Ээ",
   "lat": "e",
   "fr": "Comme « è » dans « père ».",
   "ex": "это",
   "exfr": "c'est, ceci",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Юю",
   "lat": "yu",
   "fr": "Se dit « you », comme dans « youpi ».",
   "ex": "юбка",
   "exfr": "jupe",
   "g": "vowel",
   "trap": false
  },
  {
   "l": "Яя",
   "lat": "ya",
   "fr": "Se dit « ya », comme dans « yaourt » ; il ressemble à un R à l'envers.",
   "ex": "я",
   "exfr": "je, moi",
   "g": "vowel",
   "trap": false
  }
 ]
};

// Alphabet lessons (Cours › Alphabet and the first A1 sessions): sound labels for French speakers, look-alike traps, 6 cumulative lessons.
window.PACKS.ru.abcSon = {"а":"a","б":"b","в":"v","г":"g (gare)","д":"d","е":"ié","ё":"io","ж":"j","з":"z","и":"i","й":"y (ail)","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r roulé","с":"s","т":"t","у":"ou","ф":"f","х":"r du fond (jota)","ц":"ts","ч":"tch","ш":"ch","щ":"ch long","ъ":"signe dur, pas de son","ы":"i dur","ь":"signe mou, pas de son","э":"è","ю":"iou","я":"ia"};
window.PACKS.ru.abcFake = {"в":"b","е":"e muet","н":"h","р":"p","с":"k","у":"y","х":"ks (x)","ь":"b","ю":"io"};
window.PACKS.ru.abcLessons = [
 {
  "id": "abc1",
  "t": "Les lettres faciles",
  "sub": "А К М О Т : comme en français",
  "letters": "акмот",
  "words": [
   [
    "мама",
    "maman"
   ],
   [
    "кот",
    "le chat"
   ],
   [
    "кто",
    "qui"
   ],
   [
    "там",
    "là-bas"
   ],
   [
    "так",
    "comme ça"
   ],
   [
    "мак",
    "le pavot"
   ]
  ]
 },
 {
  "id": "abc2",
  "t": "Les faux amis",
  "sub": "В Е Н Р С У Х : elles trompent",
  "letters": "венрсух",
  "words": [
   [
    "нос",
    "le nez"
   ],
   [
    "сок",
    "le jus"
   ],
   [
    "рука",
    "la main"
   ],
   [
    "утро",
    "le matin"
   ],
   [
    "нет",
    "non"
   ],
   [
    "мост",
    "le pont"
   ],
   [
    "сахар",
    "le sucre"
   ],
   [
    "метро",
    "le métro"
   ],
   [
    "ресторан",
    "le restaurant"
   ],
   [
    "вот",
    "voici"
   ]
  ]
 },
 {
  "id": "abc3",
  "t": "Les lettres nouvelles",
  "sub": "Б Г Д Л П Ф И З",
  "letters": "бгдлпфиз",
  "words": [
   [
    "брат",
    "le frère"
   ],
   [
    "дом",
    "la maison"
   ],
   [
    "город",
    "la ville"
   ],
   [
    "папа",
    "papa"
   ],
   [
    "лампа",
    "la lampe"
   ],
   [
    "фото",
    "la photo"
   ],
   [
    "зима",
    "l'hiver"
   ],
   [
    "вода",
    "l'eau"
   ],
   [
    "хлеб",
    "le pain"
   ],
   [
    "лес",
    "la forêt"
   ],
   [
    "банан",
    "la banane"
   ],
   [
    "подруга",
    "l'amie"
   ]
  ]
 },
 {
  "id": "abc4",
  "t": "Les sons sans équivalent",
  "sub": "Ж Ш Щ Ц Ч Й Ы",
  "letters": "жшщцчйы",
  "words": [
   [
    "жена",
    "l'épouse"
   ],
   [
    "школа",
    "l'école"
   ],
   [
    "борщ",
    "le bortsch"
   ],
   [
    "улица",
    "la rue"
   ],
   [
    "чай",
    "le thé"
   ],
   [
    "мы",
    "nous"
   ],
   [
    "сыр",
    "le fromage"
   ],
   [
    "хорошо",
    "bien"
   ],
   [
    "час",
    "l'heure"
   ],
   [
    "машина",
    "la voiture"
   ]
  ]
 },
 {
  "id": "abc5",
  "t": "Les voyelles mouillées",
  "sub": "Я Ё Ю Э : un « i » devant",
  "letters": "яёюэ",
  "words": [
   [
    "я",
    "je"
   ],
   [
    "ёлка",
    "le sapin"
   ],
   [
    "юбка",
    "la jupe"
   ],
   [
    "это",
    "c'est"
   ],
   [
    "моя",
    "ma"
   ],
   [
    "люблю",
    "j'aime"
   ],
   [
    "ещё",
    "encore"
   ],
   [
    "тётя",
    "la tante"
   ],
   [
    "яблоко",
    "la pomme"
   ]
  ]
 },
 {
  "id": "abc6",
  "t": "Les deux signes",
  "sub": "Ь et Ъ : ils ne se prononcent pas",
  "letters": "ьъ",
  "words": [
   [
    "день",
    "le jour"
   ],
   [
    "ночь",
    "la nuit"
   ],
   [
    "соль",
    "le sel"
   ],
   [
    "семья",
    "la famille"
   ],
   [
    "тетрадь",
    "le cahier"
   ],
   [
    "подъезд",
    "l'entrée de l'immeuble"
   ]
  ]
 }
];

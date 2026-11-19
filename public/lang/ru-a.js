// Russian exercise bank and level tests, A1–A2.
(function(){
const P = window.PACKS && window.PACKS.ru; if(!P) return;
P.bank = {
 "ru_alphabet": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "le lait",
   "a": [
    "молоко"
   ],
   "why": "М = m, Л = l, К = k. Мо-ло-КО se lit ma-la-KO : le о sans accent sonne a."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "papa",
   "a": [
    "папа"
   ],
   "why": "П = p : c'est le pi grec. Папа s'écrit comme il se prononce."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "___ом",
   "a": [
    "д"
   ],
   "h": "d",
   "fr": "la maison (дом)",
   "why": "Д = d. Дом se lit dom : la maison."
  },
  {
   "th": "City",
   "t": "gap",
   "s": "Мо___ква",
   "a": [
    "с"
   ],
   "h": "s",
   "fr": "Moscou (Москва)",
   "why": "С ressemble au C latin mais se lit toujours s : Москва = mas-KVA."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "___ека",
   "a": [
    "р"
   ],
   "h": "r",
   "fr": "la rivière (река)",
   "why": "Р ressemble au P latin mais se lit r (roulé). Река = ri-KA, la rivière."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Comment se lit « ресторан » ? ___",
   "o": [
    "pectopah",
    "restoran",
    "rectoran"
   ],
   "a": 1,
   "fr": "le restaurant",
   "why": "Р = r, С = s, Н = n : ресторан = restoran. Lu en latin, on obtient « pectopah »."
  },
  {
   "th": "Work",
   "t": "qcm",
   "s": "Comment se lit « офис » ? ___",
   "o": [
    "ofic",
    "opis",
    "ofis"
   ],
   "a": 2,
   "fr": "le bureau",
   "why": "Ф = f, И = i, С = s : офис = ofis, le bureau. Le С n'est jamais un k."
  },
  {
   "th": "Health",
   "t": "qcm",
   "s": "Comment se lit « врач » ? ___",
   "o": [
    "vratch",
    "bpatch",
    "vrak"
   ],
   "a": 0,
   "fr": "le médecin",
   "why": "В = v, Р = r, Ч = tch : врач = vratch, le médecin."
  },
  {
   "th": "Travel",
   "t": "qcm",
   "s": "Comment se lit « метро » ? ___",
   "o": [
    "metpo",
    "metro",
    "mepro"
   ],
   "a": 1,
   "fr": "le métro",
   "why": "Т = t, Р = r : метро se lit comme en français."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Comment se lit « снег » ? ___",
   "o": [
    "sneg",
    "cher",
    "sner"
   ],
   "a": 0,
   "fr": "la neige",
   "why": "С = s, Н = n, Г = g : снег, la neige. Le Н n'est jamais un h."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Comment se lit « сумка » ? ___",
   "o": [
    "cymka",
    "soumka",
    "soumna"
   ],
   "a": 1,
   "fr": "le sac",
   "why": "С = s, У = ou, К = k : сумка = soumka, le sac."
  },
  {
   "th": "Climbing",
   "t": "qcm",
   "s": "Comment se lit « гора » ? ___",
   "o": [
    "gopa",
    "rora",
    "gora"
   ],
   "a": 2,
   "fr": "la montagne",
   "why": "Г = g, Р = r : гора = gora, la montagne."
  }
 ],
 "ru_etre": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "Le thé est chaud.",
   "a": [
    "Чай горячий."
   ],
   "why": "Pas de verbe « être » ni d'article : le sujet, puis l'adjectif."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Mon père est ingénieur.",
   "a": [
    "Мой папа инженер.",
    "Мой отец инженер.",
    "Папа инженер."
   ],
   "why": "Le métier vient juste après le sujet, sans verbe ni article."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "C'est la gare.",
   "a": [
    "Это вокзал."
   ],
   "why": "Это = c'est, voici. Il ne change jamais et n'a pas besoin de verbe."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Elle est étudiante.",
   "a": [
    "Она студентка."
   ],
   "why": "Она + le nom, sans verbe. Студентка = étudiante, студент = étudiant."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Le médecin est ici.",
   "a": [
    "Врач здесь.",
    "Доктор здесь.",
    "Врач тут.",
    "Доктор тут."
   ],
   "why": "Même pour un lieu, pas de verbe : le sujet, puis здесь (ici)."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "___ мой паспорт.",
   "a": [
    "Это",
    "Вот"
   ],
   "h": "c'est",
   "fr": "C'est mon passeport.",
   "why": "Это = c'est. Ensuite, directement le nom, sans verbe."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Где лес? Лес ___.",
   "a": [
    "там"
   ],
   "h": "là-bas",
   "fr": "Où est la forêt ? La forêt est là-bas.",
   "why": "Pour situer une chose : le sujet + там (là-bas) ou здесь (ici), sans verbe."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "___ кухня?",
   "a": [
    "Где"
   ],
   "h": "où",
   "fr": "Où est la cuisine ?",
   "why": "« Où est… ? » se dit juste Где + le nom."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "___ скалолаз, а она гид.",
   "a": [
    "Он"
   ],
   "h": "il",
   "fr": "Il est grimpeur et elle est guide.",
   "why": "Он = il, puis directement le nom : он скалолаз."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "« Aujourd'hui, il fait froid. » ___",
   "o": [
    "Сегодня есть холодно.",
    "Сегодня холодно.",
    "Сегодня это холодно."
   ],
   "a": 1,
   "fr": "Aujourd'hui, il fait froid.",
   "why": "Ni verbe ni « il » : сегодня холодно, c'est tout."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "« Le magasin est là-bas. » ___",
   "o": [
    "Магазин там.",
    "Магазин есть там.",
    "Магазин это там."
   ],
   "a": 0,
   "fr": "Le magasin est là-bas.",
   "why": "Есть ne remplace pas « est » : pour situer une chose, le sujet + le lieu."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "« Le serveur est français. » ___",
   "o": [
    "Официант есть француз.",
    "Официант это француз.",
    "Официант француз."
   ],
   "a": 2,
   "fr": "Le serveur est français.",
   "why": "Ni « être » ni article. À l'écrit, on met parfois un tiret : официант — француз."
  }
 ],
 "ru_genre": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "Où est le lait ? Il est là.",
   "a": [
    "Где молоко? Оно там.",
    "Где молоко? Оно тут.",
    "Где молоко? Оно здесь."
   ],
   "why": "Молоко finit par -о : neutre, donc оно, même si « lait » est masculin en français."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Voici le bureau. Il est grand.",
   "a": [
    "Вот офис. Он большой.",
    "Это офис. Он большой."
   ],
   "why": "Офис finit par une consonne : masculin, он, et l'adjectif en -ой : большой."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Voici la rue. Elle est longue.",
   "a": [
    "Вот улица. Она длинная.",
    "Это улица. Она длинная."
   ],
   "why": "Улица finit par -а : féminin, она, длинная."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Où est papa ? Il est à la maison.",
   "a": [
    "Где папа? Он дома."
   ],
   "why": "Папа finit par -а mais c'est un homme : masculin, он. Le sens l'emporte."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Voici l'hôpital. Il est grand.",
   "a": [
    "Вот больница. Она большая.",
    "Это больница. Она большая."
   ],
   "why": "Больница finit par -а : féminin, она, même si « hôpital » est masculin."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Где билет? ___ здесь.",
   "a": [
    "Он"
   ],
   "h": "он / она / оно",
   "fr": "Où est le billet ? Il est ici.",
   "why": "Билет finit par une consonne : masculin, он."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Вот озеро. ___ большое.",
   "a": [
    "Оно"
   ],
   "h": "он / она / оно",
   "fr": "Voici le lac. Il est grand.",
   "why": "Озеро finit par -о : neutre, оно. Le lac est masculin en français, pas en russe."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Где кухня? ___ там.",
   "a": [
    "Она"
   ],
   "h": "он / она / оно",
   "fr": "Où est la cuisine ? Elle est là-bas.",
   "why": "Кухня finit par -я : féminin, она."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "Это моя верёвка. ___ новая.",
   "a": [
    "Она"
   ],
   "h": "он / она / оно",
   "fr": "C'est ma corde. Elle est neuve.",
   "why": "Верёвка finit par -а : féminin, et l'adjectif suit : новая."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Quel est le genre de « солнце » (le soleil) ? ___",
   "o": [
    "masculin",
    "féminin",
    "neutre"
   ],
   "a": 2,
   "fr": "le soleil",
   "why": "Солнце finit par -е : neutre, оно. Le soleil est masculin en français, pas en russe."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Quel est le genre de « сумка » (le sac) ? ___",
   "o": [
    "masculin",
    "féminin",
    "neutre"
   ],
   "a": 1,
   "fr": "le sac",
   "why": "Сумка finit par -а : féminin, она, même si « sac » est masculin."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Вот суп. ___ горячий.",
   "o": [
    "Она",
    "Он",
    "Оно"
   ],
   "a": 1,
   "fr": "Voici la soupe. Elle est chaude.",
   "why": "Суп finit par une consonne : masculin, он. La soupe est féminine en français, c'est le piège."
  }
 ],
 "ru_possessifs": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "C'est ma soupe.",
   "a": [
    "Это мой суп."
   ],
   "why": "Суп est masculin en russe : мой, même si « soupe » est féminin."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Voici mon bureau.",
   "a": [
    "Вот мой офис.",
    "Это мой офис."
   ],
   "why": "Офис est masculin : мой."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Où est ta voiture ?",
   "a": [
    "Где твоя машина?"
   ],
   "why": "Машина est féminin : твоя, comme моя."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Mes parents sont ici.",
   "a": [
    "Мои родители здесь.",
    "Мои родители тут."
   ],
   "why": "Au pluriel, c'est мои pour tous les genres. Et pas de verbe « être »."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Ton médecin est ici.",
   "a": [
    "Твой врач здесь.",
    "Твой врач тут.",
    "Твой доктор здесь.",
    "Твой доктор тут."
   ],
   "why": "Врач finit par une consonne : masculin, твой."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Это ___ паспорт.",
   "a": [
    "мой"
   ],
   "h": "mon",
   "fr": "C'est mon passeport.",
   "why": "Паспорт finit par une consonne : masculin, мой."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Вот ___ дерево.",
   "a": [
    "моё"
   ],
   "h": "mon",
   "fr": "Voici mon arbre.",
   "why": "Дерево finit par -о : neutre, моё. L'arbre est masculin en français."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Это ___ комната.",
   "a": [
    "моя"
   ],
   "h": "ma",
   "fr": "C'est ma chambre.",
   "why": "Комната finit par -а : féminin, моя."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "Где ___ рюкзак?",
   "a": [
    "твой"
   ],
   "h": "ton",
   "fr": "Où est ton sac à dos ?",
   "why": "Рюкзак est masculin : твой, comme мой."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Где ___ зонт?",
   "o": [
    "моя",
    "мой",
    "моё"
   ],
   "a": 1,
   "fr": "Où est mon parapluie ?",
   "why": "Зонт finit par une consonne : masculin, мой."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Это ___ сумка.",
   "o": [
    "мой",
    "мои",
    "моя"
   ],
   "a": 2,
   "fr": "C'est mon sac.",
   "why": "Сумка est féminin : моя, même si « sac » est masculin."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Где ___ вино?",
   "o": [
    "моё",
    "мой",
    "моя"
   ],
   "a": 0,
   "fr": "Où est mon vin ?",
   "why": "Вино finit par -о : neutre, моё."
  }
 ],
 "ru_present1": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "Nous déjeunons à midi.",
   "a": [
    "Мы обедаем в полдень.",
    "Мы обедаем в двенадцать.",
    "Обедаем в полдень."
   ],
   "why": "Обедать : on garde обеда- et on ajoute -ем pour мы."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Je travaille beaucoup.",
   "a": [
    "Я много работаю.",
    "Я работаю много.",
    "Много работаю."
   ],
   "why": "Работать : я работаю, avec -ю."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Ils se promènent en ville.",
   "a": [
    "Они гуляют по городу.",
    "Они гуляют в городе."
   ],
   "why": "Гулять (se promener) : они гуляют, avec -ют. Le « se » français disparaît."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Les enfants jouent.",
   "a": [
    "Дети играют."
   ],
   "why": "Играть : они играют. Дети (les enfants) est un pluriel, donc -ют."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Aujourd'hui, je me repose.",
   "a": [
    "Сегодня я отдыхаю.",
    "Я сегодня отдыхаю.",
    "Сегодня отдыхаю."
   ],
   "why": "Отдыхать (se reposer) : я отдыхаю. Pas de « me » en russe."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Вы ___ по-английски?",
   "a": [
    "понимаете"
   ],
   "h": "понимать",
   "fr": "Vous comprenez l'anglais ?",
   "why": "Понимать : вы понимаете, avec -ете."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Я ___, что лес красивый.",
   "a": [
    "думаю"
   ],
   "h": "думать",
   "fr": "Je pense que la forêt est belle.",
   "why": "Думать : я думаю, avec -ю."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Что вы ___ вечером?",
   "a": [
    "делаете"
   ],
   "h": "делать",
   "fr": "Que faites-vous ce soir ?",
   "why": "Делать : вы делаете."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "Ты ___ этот маршрут?",
   "a": [
    "знаешь"
   ],
   "h": "знать",
   "fr": "Tu connais cette voie ?",
   "why": "Знать : ты знаешь, avec -ешь."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Сегодня тепло, мы ___ на улице.",
   "o": [
    "гуляют",
    "гуляем",
    "гуляешь"
   ],
   "a": 1,
   "fr": "Aujourd'hui il fait doux, nous nous promenons dehors.",
   "why": "Мы → -ем : гуляем."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Сколько? Я не ___.",
   "o": [
    "понимаю",
    "понимает",
    "понимают"
   ],
   "a": 0,
   "fr": "Combien ? Je ne comprends pas.",
   "why": "Я → -ю : понимаю. Понимает, c'est pour он / она."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Мы ___ меню.",
   "o": [
    "читают",
    "читаете",
    "читаем"
   ],
   "a": 2,
   "fr": "Nous lisons la carte.",
   "why": "Мы → -ем : читаем."
  }
 ],
 "ru_present2": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "Je cuisine le soir.",
   "a": [
    "Я готовлю вечером.",
    "Вечером я готовлю.",
    "Готовлю вечером."
   ],
   "why": "Готовить : я готовлю. Après в, un л s'ajoute à la forme я, comme dans люблю."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Elle téléphone souvent.",
   "a": [
    "Она часто звонит."
   ],
   "why": "Звонить : она звонит, avec -ит."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Combien coûte le billet ?",
   "a": [
    "Сколько стоит билет?"
   ],
   "why": "Стоить : une seule chose, donc стоит."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Mes enfants aiment le chocolat.",
   "a": [
    "Мои дети любят шоколад."
   ],
   "why": "Любить : они любят, avec -ят."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Je ne fume pas.",
   "a": [
    "Я не курю.",
    "Не курю."
   ],
   "why": "Курить : я курю. Не se place juste devant le verbe."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Мы ___ по-английски.",
   "a": [
    "говорим"
   ],
   "h": "говорить",
   "fr": "Nous parlons anglais.",
   "why": "Говорить : мы говорим, avec -им."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Вы ___ горы?",
   "a": [
    "любите"
   ],
   "h": "любить",
   "fr": "Vous aimez la montagne ?",
   "why": "Любить : вы любите. Le л en plus n'apparaît qu'à la forme я."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Вечером они ___ фильм.",
   "a": [
    "смотрят"
   ],
   "h": "смотреть",
   "fr": "Le soir, ils regardent un film.",
   "why": "Смотреть est de la 2e conjugaison malgré son -еть : они смотрят."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "Я ___, у меня тренировка.",
   "a": [
    "спешу"
   ],
   "h": "спешить",
   "fr": "Je me dépêche, j'ai un entraînement.",
   "why": "Спешить : я спешу. Après ш, on écrit -у et non -ю."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Ты ___ прогноз погоды?",
   "o": [
    "смотришь",
    "смотреешь",
    "смотрит"
   ],
   "a": 0,
   "fr": "Tu regardes la météo ?",
   "why": "Ты → -ишь : смотришь. Смотреешь mélange les deux conjugaisons."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Сколько ___ эта сумка?",
   "o": [
    "стоят",
    "стоит",
    "стоишь"
   ],
   "a": 1,
   "fr": "Combien coûte ce sac ?",
   "why": "Une seule chose (сумка) : стоит. Стоят, c'est pour plusieurs."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Я ___ чай с лимоном.",
   "o": [
    "любю",
    "любит",
    "люблю"
   ],
   "a": 2,
   "fr": "J'aime le thé au citron.",
   "why": "Любить : я люблю, avec un л en plus. Любю n'existe pas."
  }
 ],
 "ru_u_menya": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "J'ai du pain.",
   "a": [
    "У меня есть хлеб."
   ],
   "why": "У меня есть = j'ai. Хлеб reste tel quel, et il n'y a pas de « du »."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Tu as un ordinateur ?",
   "a": [
    "У тебя есть компьютер?"
   ],
   "why": "Tu → у тебя. La question garde le même ordre, seule l'intonation monte."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Elle a une voiture.",
   "a": [
    "У неё есть машина."
   ],
   "why": "Elle → у неё (u ni-YO). Машина ne change pas."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "J'ai une sœur.",
   "a": [
    "У меня есть сестра."
   ],
   "why": "У меня есть + le nom, sans article."
  },
  {
   "th": "Health",
   "t": "tr",
   "fr": "Vous avez de l'aspirine ?",
   "a": [
    "У вас есть аспирин?"
   ],
   "why": "Vous → у вас. Pas de partitif en russe."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "У ___ есть паспорт?",
   "a": [
    "тебя"
   ],
   "h": "toi",
   "fr": "Tu as un passeport ?",
   "why": "Tu → у тебя."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "У ___ есть сад.",
   "a": [
    "них"
   ],
   "h": "eux",
   "fr": "Ils ont un jardin.",
   "why": "Ils → у них."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "У нас ___ дача.",
   "a": [
    "есть"
   ],
   "h": "il y a",
   "fr": "Nous avons une maison de campagne.",
   "why": "Есть = il y a. У нас есть = nous avons."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "У ___ есть верёвка.",
   "a": [
    "него"
   ],
   "h": "lui",
   "fr": "Il a une corde.",
   "why": "Il → у него, qui se prononce u ni-VO."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "___ есть зонт?",
   "o": [
    "Ты",
    "У тебя",
    "Тебя"
   ],
   "a": 1,
   "fr": "Tu as un parapluie ?",
   "why": "Il faut у + le pronom : у тебя есть."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "У меня есть ___.",
   "o": [
    "сумку",
    "сумки",
    "сумка"
   ],
   "a": 2,
   "fr": "J'ai un sac.",
   "why": "Après у меня есть, la chose reste au nominatif : сумка."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "У вас ___ свободный столик?",
   "o": [
    "есть",
    "иметь",
    "это"
   ],
   "a": 0,
   "fr": "Vous avez une table libre ?",
   "why": "Есть = il y a. Иметь existe mais ne s'emploie pas ainsi au quotidien."
  }
 ],
 "ru_prepositionnel": [
  {
   "th": "Health",
   "t": "tr",
   "fr": "Mon père travaille à l'hôpital.",
   "a": [
    "Мой папа работает в больнице.",
    "Мой отец работает в больнице.",
    "Папа работает в больнице."
   ],
   "why": "Больница, féminin en -а : в больнице."
  },
  {
   "th": "City",
   "t": "tr",
   "fr": "Les enfants sont au parc.",
   "a": [
    "Дети в парке.",
    "Дети гуляют в парке."
   ],
   "why": "Où ? → prépositionnel : парк → в парке."
  },
  {
   "th": "Travel",
   "t": "tr",
   "fr": "Ma sœur habite en France.",
   "a": [
    "Моя сестра живёт во Франции.",
    "Сестра живёт во Франции."
   ],
   "why": "Франция, nom en -ия : во Франции. В devient во devant фр, plus facile à dire."
  },
  {
   "th": "Home",
   "t": "tr",
   "fr": "Le chat dort sur le canapé.",
   "a": [
    "Кошка спит на диване.",
    "Кот спит на диване."
   ],
   "why": "Sur → на ; диван → на диване."
  },
  {
   "th": "Climbing",
   "t": "tr",
   "fr": "Le grimpeur est sur le rocher.",
   "a": [
    "Скалолаз на скале.",
    "Альпинист на скале.",
    "Скалолаз стоит на скале."
   ],
   "why": "Скала → на скале : féminin en -а, terminaison -е."
  },
  {
   "th": "Food",
   "t": "gap",
   "s": "Молоко в ___.",
   "a": [
    "холодильнике"
   ],
   "h": "холодильник",
   "fr": "Le lait est dans le frigo.",
   "why": "Où ? → prépositionnel : on ajoute -е au masculin."
  },
  {
   "th": "Weather",
   "t": "gap",
   "s": "Зимой в ___ очень холодно.",
   "a": [
    "Сибири"
   ],
   "h": "Сибирь",
   "fr": "L'hiver, il fait très froid en Sibérie.",
   "why": "Féminin en -ь : la terminaison est -и."
  },
  {
   "th": "Shopping",
   "t": "gap",
   "s": "Я покупаю хлеб в ___.",
   "a": [
    "магазине"
   ],
   "h": "магазин",
   "fr": "J'achète le pain au magasin.",
   "why": "Магазин → в магазине."
  },
  {
   "th": "Restaurant",
   "t": "gap",
   "s": "Мы обедаем в ___.",
   "a": [
    "ресторане"
   ],
   "h": "ресторан",
   "fr": "Nous déjeunons au restaurant.",
   "why": "Ресторан → в ресторане."
  },
  {
   "th": "Family",
   "t": "qcm",
   "s": "Бабушка живёт в ___.",
   "o": [
    "деревня",
    "деревне",
    "деревню"
   ],
   "a": 1,
   "fr": "Grand-mère vit à la campagne.",
   "why": "Где ? → prépositionnel. Деревню, c'est l'accusatif, pour куда ?"
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "Утки плавают на ___.",
   "o": [
    "озере",
    "озеро",
    "озеру"
   ],
   "a": 0,
   "fr": "Les canards nagent sur le lac.",
   "why": "Озеро, neutre : на озере."
  },
  {
   "th": "Work",
   "t": "qcm",
   "s": "Папа сейчас ___ работе.",
   "o": [
    "в",
    "на",
    "к"
   ],
   "a": 1,
   "fr": "Papa est au travail en ce moment.",
   "why": "Работа se construit avec на : на работе."
  }
 ],
 "ru_accusatif": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "Je bois de l'eau.",
   "a": [
    "Я пью воду.",
    "Пью воду."
   ],
   "why": "Вода → воду : féminin en -а, -у à l'accusatif."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Je vois papa.",
   "a": [
    "Я вижу папу.",
    "Вижу папу."
   ],
   "why": "Папа est masculin, mais en -а : il se décline comme un féminin, папу."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Elle attend le directeur.",
   "a": [
    "Она ждёт директора."
   ],
   "why": "Masculin vivant : директор → директора."
  },
  {
   "th": "Shopping",
   "t": "tr",
   "fr": "Nous achetons une veste.",
   "a": [
    "Мы покупаем куртку.",
    "Покупаем куртку."
   ],
   "why": "Куртка → куртку."
  },
  {
   "th": "Travel",
   "t": "tr",
   "fr": "Je réserve un hôtel.",
   "a": [
    "Я бронирую гостиницу.",
    "Я бронирую отель.",
    "Бронирую гостиницу.",
    "Бронирую отель."
   ],
   "why": "Гостиница → гостиницу ; отель, masculin de chose, ne change pas."
  },
  {
   "th": "Restaurant",
   "t": "gap",
   "s": "Я заказываю ___.",
   "a": [
    "рыбу"
   ],
   "h": "рыба",
   "fr": "Je commande du poisson.",
   "why": "Complément d'objet : рыба → рыбу."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Мама открывает ___.",
   "a": [
    "дверь"
   ],
   "h": "дверь",
   "fr": "Maman ouvre la porte.",
   "why": "Les féminins en -ь ne changent pas à l'accusatif."
  },
  {
   "th": "City",
   "t": "gap",
   "s": "Я хорошо знаю ___.",
   "a": [
    "Москву"
   ],
   "h": "Москва",
   "fr": "Je connais bien Moscou.",
   "why": "Москва → Москву, comme tous les noms en -а."
  },
  {
   "th": "Health",
   "t": "gap",
   "s": "Я принимаю ___.",
   "a": [
    "таблетку"
   ],
   "h": "таблетка",
   "fr": "Je prends un comprimé.",
   "why": "Таблетка → таблетку."
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "Мы фотографируем ___.",
   "o": [
    "гору",
    "гора",
    "горе"
   ],
   "a": 0,
   "fr": "Nous photographions la montagne.",
   "why": "Complément d'objet : гора → гору. Горе, c'est le prépositionnel."
  },
  {
   "th": "Climbing",
   "t": "qcm",
   "s": "Я жду ___ у скалы.",
   "o": [
    "инструктор",
    "инструктора",
    "инструктору"
   ],
   "a": 1,
   "fr": "J'attends le moniteur au pied du rocher.",
   "why": "Masculin vivant : il prend -а à l'accusatif."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Я люблю ___.",
   "o": [
    "зима",
    "зиму",
    "зиме"
   ],
   "a": 1,
   "fr": "J'aime l'hiver.",
   "why": "Любить + accusatif : зима → зиму."
  }
 ],
 "ru_genitif": [
  {
   "th": "Home",
   "t": "tr",
   "fr": "Je n'ai pas de jardin.",
   "a": [
    "У меня нет сада."
   ],
   "why": "Нет + génitif : сад → сада."
  },
  {
   "th": "Shopping",
   "t": "tr",
   "fr": "Il n'y a pas de pain.",
   "a": [
    "Нет хлеба.",
    "Хлеба нет."
   ],
   "why": "Хлеб → хлеба après нет."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "C'est la voiture de mon père.",
   "a": [
    "Это машина моего отца.",
    "Это машина моего папы.",
    "Это машина папы.",
    "Это машина отца.",
    "Это папина машина."
   ],
   "why": "« De » → génitif : отец → отца, папа → папы ; мой → моего."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Aujourd'hui, je n'ai pas le temps.",
   "a": [
    "Сегодня у меня нет времени.",
    "У меня сегодня нет времени.",
    "У меня нет времени сегодня."
   ],
   "why": "Время est irrégulier : времени."
  },
  {
   "th": "Weather",
   "t": "tr",
   "fr": "Aujourd'hui, il n'y a pas de soleil.",
   "a": [
    "Сегодня нет солнца.",
    "Сегодня солнца нет."
   ],
   "why": "Солнце, neutre : солнца."
  },
  {
   "th": "City",
   "t": "gap",
   "s": "В центре много ___.",
   "a": [
    "магазинов"
   ],
   "h": "магазин (pluriel)",
   "fr": "Il y a beaucoup de magasins dans le centre.",
   "why": "Après много, pluriel au génitif : -ов pour la plupart des masculins."
  },
  {
   "th": "Food",
   "t": "gap",
   "s": "Дайте, пожалуйста, стакан ___.",
   "a": [
    "воды"
   ],
   "h": "вода",
   "fr": "Donnez-moi un verre d'eau, s'il vous plaît.",
   "why": "Un verre de… → génitif : вода → воды."
  },
  {
   "th": "Health",
   "t": "gap",
   "s": "У меня нет ___.",
   "a": [
    "температуры"
   ],
   "h": "температура",
   "fr": "Je n'ai pas de fièvre.",
   "why": "Нет + génitif : -а → -ы."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Это паспорт моей ___.",
   "a": [
    "сестры"
   ],
   "h": "сестра",
   "fr": "C'est le passeport de ma sœur.",
   "why": "Complément du nom → génitif : сестра → сестры."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "В меню нет ___.",
   "o": [
    "супа",
    "суп",
    "супе"
   ],
   "a": 0,
   "fr": "Il n'y a pas de soupe au menu.",
   "why": "Нет + génitif : суп → супа."
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "В лесу много ___.",
   "o": [
    "грибы",
    "грибов",
    "гриба"
   ],
   "a": 1,
   "fr": "Il y a beaucoup de champignons dans la forêt.",
   "why": "Много + génitif pluriel : грибов."
  },
  {
   "th": "Climbing",
   "t": "qcm",
   "s": "У меня нет ___.",
   "o": [
    "верёвка",
    "верёвку",
    "верёвки"
   ],
   "a": 2,
   "fr": "Je n'ai pas de corde.",
   "why": "Нет + génitif ; après в on écrit -и : верёвки."
  }
 ],
 "ru_passe": [
  {
   "th": "Work",
   "t": "tr",
   "fr": "Hier, j'ai beaucoup travaillé.",
   "a": [
    "Вчера я много работал.",
    "Вчера я много работала.",
    "Я вчера много работал.",
    "Я вчера много работала.",
    "Вчера много работал.",
    "Вчера много работала."
   ],
   "why": "Работать → работал (homme), работала (femme)."
  },
  {
   "th": "Weather",
   "t": "tr",
   "fr": "Hier, il faisait froid.",
   "a": [
    "Вчера было холодно."
   ],
   "why": "Pas de sujet : le verbe быть se met au neutre, было."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Mes parents habitaient à Kazan.",
   "a": [
    "Мои родители жили в Казани.",
    "Родители жили в Казани."
   ],
   "why": "Pluriel : жили. Казань, féminin en -ь : в Казани."
  },
  {
   "th": "Restaurant",
   "t": "tr",
   "fr": "Nous avons dîné au restaurant.",
   "a": [
    "Мы ужинали в ресторане.",
    "Мы поужинали в ресторане."
   ],
   "why": "Мы → -ли : ужинали."
  },
  {
   "th": "Climbing",
   "t": "tr",
   "fr": "Elle était en montagne.",
   "a": [
    "Она была в горах."
   ],
   "why": "Она → была. В горах = en montagne (pluriel)."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Вчера Анна ___ дома.",
   "a": [
    "была"
   ],
   "h": "быть (passé)",
   "fr": "Hier, Anna était à la maison.",
   "why": "Sujet féminin : была."
  },
  {
   "th": "Health",
   "t": "gap",
   "s": "Он долго ___.",
   "a": [
    "спал"
   ],
   "h": "спать (passé)",
   "fr": "Il a dormi longtemps.",
   "why": "Спать → спал : on enlève -ть, on ajoute -л."
  },
  {
   "th": "Travel",
   "t": "gap",
   "s": "Мы ___ на море.",
   "a": [
    "отдыхали"
   ],
   "h": "отдыхать (passé, nous)",
   "fr": "Nous étions en vacances à la mer.",
   "why": "Мы → -ли : отдыхали."
  },
  {
   "th": "Food",
   "t": "gap",
   "s": "Она ___ суп.",
   "a": [
    "готовила"
   ],
   "h": "готовить (passé)",
   "fr": "Elle préparait une soupe.",
   "why": "Она → -ла : готовила."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "s": "Мама ___ новое платье.",
   "o": [
    "купил",
    "купила",
    "купили"
   ],
   "a": 1,
   "fr": "Maman a acheté une nouvelle robe.",
   "why": "Мама est féminin : купила."
  },
  {
   "th": "City",
   "t": "qcm",
   "s": "Где вы ___ вчера?",
   "o": [
    "был",
    "были",
    "была"
   ],
   "a": 1,
   "fr": "Où étiez-vous hier ?",
   "why": "Avec вы, toujours -ли, même pour une seule personne."
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "Вчера в лесу ___ очень тихо.",
   "o": [
    "был",
    "была",
    "было"
   ],
   "a": 2,
   "fr": "Hier, c'était très calme dans la forêt.",
   "why": "Pas de sujet : neutre, было."
  }
 ],
 "ru_futur": [
  {
   "th": "Work",
   "t": "tr",
   "fr": "Demain, je vais travailler à la maison.",
   "a": [
    "Завтра я буду работать дома.",
    "Я завтра буду работать дома.",
    "Завтра буду работать дома."
   ],
   "why": "Буду + infinitif imperfectif."
  },
  {
   "th": "Weather",
   "t": "tr",
   "fr": "Demain, il fera chaud.",
   "a": [
    "Завтра будет тепло.",
    "Завтра будет жарко."
   ],
   "why": "Pas de sujet : будет, comme было au passé."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Le week-end, mes parents seront à la campagne.",
   "a": [
    "В выходные мои родители будут на даче.",
    "В выходные родители будут на даче.",
    "В выходные мои родители будут в деревне.",
    "В выходные родители будут в деревне."
   ],
   "why": "Они → будут. Seul, будут veut dire « ils seront »."
  },
  {
   "th": "Travel",
   "t": "tr",
   "fr": "En été, nous allons voyager.",
   "a": [
    "Летом мы будем путешествовать.",
    "Мы летом будем путешествовать.",
    "Летом будем путешествовать."
   ],
   "why": "Мы → будем + infinitif."
  },
  {
   "th": "Climbing",
   "t": "tr",
   "fr": "Demain, je serai en montagne.",
   "a": [
    "Завтра я буду в горах.",
    "Я завтра буду в горах.",
    "Завтра буду в горах."
   ],
   "why": "Буду seul = je serai."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Вечером мы ___ смотреть телевизор.",
   "a": [
    "будем"
   ],
   "h": "быть (nous)",
   "fr": "Ce soir, nous allons regarder la télé.",
   "why": "Мы → будем."
  },
  {
   "th": "Food",
   "t": "gap",
   "s": "Что ты ___ есть?",
   "a": [
    "будешь"
   ],
   "h": "быть (tu)",
   "fr": "Qu'est-ce que tu vas manger ?",
   "why": "Ты → будешь."
  },
  {
   "th": "Health",
   "t": "gap",
   "s": "Теперь он ___ заниматься спортом.",
   "a": [
    "будет"
   ],
   "h": "быть (il)",
   "fr": "Désormais, il va faire du sport.",
   "why": "Он → будет."
  },
  {
   "th": "Shopping",
   "t": "gap",
   "s": "Они ___ покупать продукты.",
   "a": [
    "будут"
   ],
   "h": "быть (ils)",
   "fr": "Ils vont faire les courses.",
   "why": "Они → будут."
  },
  {
   "th": "City",
   "t": "qcm",
   "s": "Завтра я ___ в центре.",
   "o": [
    "буду",
    "будет",
    "был"
   ],
   "a": 0,
   "fr": "Demain, je serai dans le centre.",
   "why": "Я → буду ; был, c'est le passé."
  },
  {
   "th": "Restaurant",
   "t": "qcm",
   "s": "Вы ___ заказывать?",
   "o": [
    "будете",
    "будем",
    "будут"
   ],
   "a": 0,
   "fr": "Vous allez commander ?",
   "why": "Вы → будете. C'est la question classique du serveur."
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "Завтра мы будем ___ в лесу.",
   "o": [
    "гуляем",
    "гулять",
    "гуляли"
   ],
   "a": 1,
   "fr": "Demain, nous nous promènerons dans la forêt.",
   "why": "Après буду, будем… toujours l'infinitif."
  }
 ],
 "ru_aspect": [
  {
   "th": "Food",
   "t": "tr",
   "fr": "J'ai mangé toute la soupe.",
   "a": [
    "Я съел весь суп.",
    "Я съела весь суп."
   ],
   "why": "Action finie, avec un résultat (plus de soupe) : perfectif съесть."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "Il a fini le rapport.",
   "a": [
    "Он закончил отчёт."
   ],
   "why": "Résultat atteint : perfectif закончить."
  },
  {
   "th": "Shopping",
   "t": "tr",
   "fr": "Demain, j'achèterai une veste.",
   "a": [
    "Завтра я куплю куртку.",
    "Я завтра куплю куртку.",
    "Завтра куплю куртку."
   ],
   "why": "Une seule fois, avec un résultat : perfectif купить, conjugué comme un présent = futur."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Le soir, grand-mère lisait.",
   "a": [
    "Вечером бабушка читала.",
    "Бабушка читала вечером.",
    "По вечерам бабушка читала.",
    "Бабушка читала по вечерам."
   ],
   "why": "Habitude du passé : imperfectif читать."
  },
  {
   "th": "Travel",
   "t": "tr",
   "fr": "Nous avons acheté les billets.",
   "a": [
    "Мы купили билеты.",
    "Мы уже купили билеты."
   ],
   "why": "Achat fait, billets en main : perfectif купили."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Я каждый день ___ посуду.",
   "a": [
    "мою"
   ],
   "h": "мыть / помыть",
   "fr": "Je fais la vaisselle tous les jours.",
   "why": "Каждый день = répétition : imperfectif мыть, я мою."
  },
  {
   "th": "Restaurant",
   "t": "gap",
   "s": "Официант уже ___ счёт.",
   "a": [
    "принёс"
   ],
   "h": "приносить / принести (passé)",
   "fr": "Le serveur a déjà apporté l'addition.",
   "why": "Уже + résultat : perfectif. Принести → принёс."
  },
  {
   "th": "Health",
   "t": "gap",
   "s": "Врач долго ___ меня.",
   "a": [
    "осматривал"
   ],
   "h": "осматривать / осмотреть (passé)",
   "fr": "Le médecin m'a examiné longtemps.",
   "why": "Долго = durée : imperfectif."
  },
  {
   "th": "City",
   "t": "gap",
   "s": "Вчера мы долго ___ по городу.",
   "a": [
    "гуляли"
   ],
   "h": "гулять / погулять (passé)",
   "fr": "Hier, nous nous sommes longtemps promenés en ville.",
   "why": "Долго = durée, pas de résultat : imperfectif гуляли."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Дождь ___, и мы пошли гулять.",
   "o": [
    "кончался",
    "кончился",
    "кончаться"
   ],
   "a": 1,
   "fr": "La pluie s'est arrêtée et nous sommes allés nous promener.",
   "why": "Action finie, suivie d'une autre : perfectif кончился."
  },
  {
   "th": "Climbing",
   "t": "qcm",
   "s": "Мы ___ на вершину за три часа.",
   "o": [
    "поднимались",
    "поднялись",
    "поднимаемся"
   ],
   "a": 1,
   "fr": "Nous sommes montés au sommet en trois heures.",
   "why": "За три часа = but atteint : perfectif."
  },
  {
   "th": "Nature",
   "t": "qcm",
   "s": "Летом я часто ___ в лесу.",
   "o": [
    "гулял",
    "погулял",
    "погуляю"
   ],
   "a": 0,
   "fr": "L'été, je me promenais souvent en forêt.",
   "why": "Часто = répétition : imperfectif."
  }
 ],
 "ru_mouvement": [
  {
   "th": "Shopping",
   "t": "tr",
   "fr": "Je vais au marché (à pied).",
   "a": [
    "Я иду на рынок.",
    "Иду на рынок."
   ],
   "why": "À pied : идти. Рынок se construit avec на."
  },
  {
   "th": "Work",
   "t": "tr",
   "fr": "En ce moment, je vais au travail en métro.",
   "a": [
    "Сейчас я еду на работу на метро.",
    "Я сейчас еду на работу на метро.",
    "Сейчас я еду на метро на работу."
   ],
   "why": "En métro : ехать. Метро ne se décline pas."
  },
  {
   "th": "Travel",
   "t": "tr",
   "fr": "Nous allons à Kazan en train.",
   "a": [
    "Мы едем в Казань на поезде.",
    "Мы едем на поезде в Казань."
   ],
   "why": "Véhicule : едем. Куда ? → в Казань ; на поезде."
  },
  {
   "th": "Family",
   "t": "tr",
   "fr": "Les enfants vont à l'école (à pied).",
   "a": [
    "Дети идут в школу."
   ],
   "why": "Они → идут ; школа → в школу."
  },
  {
   "th": "Restaurant",
   "t": "tr",
   "fr": "Où allez-vous (à pied) ? Au restaurant.",
   "a": [
    "Куда вы идёте? — В ресторан.",
    "Вы куда идёте? — В ресторан."
   ],
   "why": "Куда ? appelle l'accusatif : в ресторан."
  },
  {
   "th": "City",
   "t": "gap",
   "s": "Автобус ___ в центр.",
   "a": [
    "едет",
    "идёт"
   ],
   "h": "ехать",
   "fr": "Le bus va au centre-ville.",
   "why": "Он → едет. Tu entendras aussi автобус идёт : c'est correct pour un transport en commun."
  },
  {
   "th": "Nature",
   "t": "gap",
   "s": "Мы ___ в лес за грибами.",
   "a": [
    "идём"
   ],
   "h": "идти (nous)",
   "fr": "Nous allons en forêt chercher des champignons.",
   "why": "Мы → идём."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "s": "Ты ___ в горы на машине?",
   "a": [
    "едешь"
   ],
   "h": "ехать (tu)",
   "fr": "Tu vas à la montagne en voiture ?",
   "why": "Ты → едешь ; в горы, à l'accusatif."
  },
  {
   "th": "Home",
   "t": "gap",
   "s": "Уже поздно, я ___ домой.",
   "a": [
    "иду"
   ],
   "h": "идти (je)",
   "fr": "Il est déjà tard, je rentre à la maison.",
   "why": "Я → иду. Домой = vers la maison, sans préposition."
  },
  {
   "th": "Health",
   "t": "qcm",
   "s": "Мама ___ к врачу пешком.",
   "o": [
    "едет",
    "идёт",
    "идёшь"
   ],
   "a": 1,
   "fr": "Maman va chez le médecin à pied.",
   "why": "Пешком = à pied : идти, она идёт."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "s": "Сегодня дождь, мы ___ на такси.",
   "o": [
    "идём",
    "едем",
    "едут"
   ],
   "a": 1,
   "fr": "Il pleut aujourd'hui, nous y allons en taxi.",
   "why": "En taxi : ехать ; мы → едем."
  },
  {
   "th": "Food",
   "t": "qcm",
   "s": "Я иду в ___ за хлебом.",
   "o": [
    "булочную",
    "булочной",
    "булочная"
   ],
   "a": 0,
   "fr": "Je vais à la boulangerie chercher du pain.",
   "why": "Куда ? → accusatif : булочная → булочную."
  }
 ]
};
P.boss = {
 "A1": [
  {
   "th": "Family",
   "t": "tr",
   "sk": [
    "ru_etre",
    "ru_possessifs"
   ],
   "fr": "Mon frère est étudiant.",
   "a": [
    "Мой брат студент."
   ],
   "why": "Брат est masculin : мой. Et pas de verbe « être »."
  },
  {
   "th": "Home",
   "t": "tr",
   "sk": [
    "ru_u_menya",
    "ru_genre"
   ],
   "fr": "J'ai une maison. Elle est grande.",
   "a": [
    "У меня есть дом. Он большой.",
    "У меня дом. Он большой."
   ],
   "why": "Дом finit par une consonne : masculin, он, большой, même si « maison » est féminin."
  },
  {
   "th": "Work",
   "t": "tr",
   "sk": [
    "ru_present1",
    "ru_etre"
   ],
   "fr": "Je suis médecin et je travaille beaucoup.",
   "a": [
    "Я врач и много работаю.",
    "Я врач и я много работаю.",
    "Я врач и работаю много.",
    "Я доктор и много работаю.",
    "Я доктор и я много работаю."
   ],
   "why": "Pas de verbe pour « je suis » ; работать → я работаю."
  },
  {
   "th": "Food",
   "t": "tr",
   "sk": [
    "ru_present2",
    "ru_genre"
   ],
   "fr": "J'aime le lait. Il est bon.",
   "a": [
    "Я люблю молоко. Оно вкусное.",
    "Люблю молоко. Оно вкусное."
   ],
   "why": "Любить → я люблю ; молоко est neutre : оно, вкусное."
  },
  {
   "th": "Travel",
   "t": "tr",
   "sk": [
    "ru_u_menya",
    "ru_possessifs"
   ],
   "fr": "J'ai un billet. Où est ton billet ?",
   "a": [
    "У меня есть билет. Где твой билет?",
    "У меня есть билет. А где твой билет?",
    "У меня есть билет. А где твой?",
    "У меня есть билет. Где твой?"
   ],
   "why": "У меня есть pour « j'ai » ; билет est masculin : твой."
  },
  {
   "th": "City",
   "t": "gap",
   "sk": [
    "ru_etre",
    "ru_genre"
   ],
   "s": "Это улица. ___ длинная.",
   "a": [
    "Она"
   ],
   "h": "он / она / оно",
   "fr": "C'est la rue. Elle est longue.",
   "why": "Улица finit par -а : она. Et pas de verbe « être »."
  },
  {
   "th": "Shopping",
   "t": "gap",
   "sk": [
    "ru_present2",
    "ru_possessifs"
   ],
   "s": "Сколько ___ твоя сумка?",
   "a": [
    "стоит"
   ],
   "h": "стоить",
   "fr": "Combien coûte ton sac ?",
   "why": "Une seule chose : стоит. Сумка est féminin : твоя."
  },
  {
   "th": "Restaurant",
   "t": "gap",
   "sk": [
    "ru_present1",
    "ru_u_menya"
   ],
   "s": "Мы ___ меню. У вас есть рыба?",
   "a": [
    "читаем"
   ],
   "h": "читать",
   "fr": "Nous lisons la carte. Vous avez du poisson ?",
   "why": "Мы → читаем ; « vous avez » = у вас есть."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "sk": [
    "ru_u_menya",
    "ru_possessifs"
   ],
   "s": "У тебя есть верёвка? — Да, вот ___ верёвка.",
   "a": [
    "моя"
   ],
   "h": "ma",
   "fr": "Tu as une corde ? — Oui, voici ma corde.",
   "why": "Верёвка est féminin : моя."
  },
  {
   "th": "Nature",
   "t": "gap",
   "sk": [
    "ru_present2",
    "ru_genre"
   ],
   "s": "Мы ___ это озеро. Оно красивое.",
   "a": [
    "любим"
   ],
   "h": "любить",
   "fr": "Nous aimons ce lac. Il est beau.",
   "why": "Мы → любим (le л en plus n'est que pour я) ; озеро est neutre : оно."
  },
  {
   "th": "Health",
   "t": "gap",
   "sk": [
    "ru_present1",
    "ru_etre"
   ],
   "s": "Я врач, я ___ здесь.",
   "a": [
    "работаю"
   ],
   "h": "работать",
   "fr": "Je suis médecin, je travaille ici.",
   "why": "Я врач sans verbe ; работать → я работаю."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "sk": [
    "ru_etre",
    "ru_present2"
   ],
   "s": "Сегодня холодно, мы ___ фильм дома.",
   "o": [
    "смотреем",
    "смотрим",
    "смотрят"
   ],
   "a": 1,
   "fr": "Aujourd'hui il fait froid, nous regardons un film à la maison.",
   "why": "Сегодня холодно sans verbe ; смотреть → мы смотрим."
  },
  {
   "th": "Family",
   "t": "qcm",
   "sk": [
    "ru_possessifs",
    "ru_genre"
   ],
   "s": "Это ___ папа.",
   "o": [
    "мой",
    "моя",
    "моё"
   ],
   "a": 0,
   "fr": "C'est mon papa.",
   "why": "Папа finit par -а mais c'est un homme : мой."
  },
  {
   "th": "Home",
   "t": "qcm",
   "sk": [
    "ru_u_menya",
    "ru_genre"
   ],
   "s": "У нас есть кухня. ___ маленькая.",
   "o": [
    "Он",
    "Она",
    "Оно"
   ],
   "a": 1,
   "fr": "Nous avons une cuisine. Elle est petite.",
   "why": "Кухня finit par -я : féminin, она."
  },
  {
   "th": "Work",
   "t": "qcm",
   "sk": [
    "ru_present1",
    "ru_possessifs"
   ],
   "s": "Мои коллеги много ___.",
   "o": [
    "работает",
    "работаем",
    "работают"
   ],
   "a": 2,
   "fr": "Mes collègues travaillent beaucoup.",
   "why": "Мои коллеги = они : работают."
  },
  {
   "th": "City",
   "t": "tr",
   "sk": [
    "ru_alphabet",
    "ru_etre"
   ],
   "fr": "Le métro est là-bas.",
   "a": [
    "Метро там."
   ],
   "why": "Метро se lit comme en français ; pas de verbe : le sujet, puis там."
  },
  {
   "th": "Restaurant",
   "t": "tr",
   "sk": [
    "ru_alphabet",
    "ru_present2"
   ],
   "fr": "Le serveur parle français.",
   "a": [
    "Официант говорит по-французски."
   ],
   "why": "Официант se lit ofitsiant ; говорить → он говорит."
  },
  {
   "th": "Travel",
   "t": "qcm",
   "sk": [
    "ru_u_menya",
    "ru_etre"
   ],
   "s": "« Il a un passeport. » ___",
   "o": [
    "Он есть паспорт.",
    "У он есть паспорт.",
    "У него есть паспорт."
   ],
   "a": 2,
   "fr": "Il a un passeport.",
   "why": "Avoir = у + pronom + есть, et il → у него."
  }
 ],
 "A2": [
  {
   "th": "Travel",
   "t": "tr",
   "sk": [
    "ru_passe",
    "ru_prepositionnel"
   ],
   "fr": "L'été dernier, nous étions à Saint-Pétersbourg.",
   "a": [
    "Прошлым летом мы были в Петербурге.",
    "Прошлым летом мы были в Санкт-Петербурге.",
    "Мы были в Петербурге прошлым летом.",
    "Мы были в Санкт-Петербурге прошлым летом."
   ],
   "why": "Мы → были ; где ? → в Петербурге."
  },
  {
   "th": "Shopping",
   "t": "tr",
   "sk": [
    "ru_aspect",
    "ru_accusatif"
   ],
   "fr": "Demain, j'achèterai une nouvelle veste.",
   "a": [
    "Завтра я куплю новую куртку.",
    "Я завтра куплю новую куртку.",
    "Завтра куплю новую куртку."
   ],
   "why": "Perfectif куплю = futur ; новая куртка → новую куртку."
  },
  {
   "th": "Home",
   "t": "gap",
   "sk": [
    "ru_genitif",
    "ru_u_menya"
   ],
   "s": "У меня нет ___.",
   "a": [
    "собаки"
   ],
   "h": "собака",
   "fr": "Je n'ai pas de chien.",
   "why": "У меня нет + génitif : après к, -и : собаки."
  },
  {
   "th": "Work",
   "t": "tr",
   "sk": [
    "ru_futur",
    "ru_prepositionnel"
   ],
   "fr": "Demain, je travaillerai au bureau.",
   "a": [
    "Завтра я буду работать в офисе.",
    "Я завтра буду работать в офисе.",
    "Завтра буду работать в офисе."
   ],
   "why": "Буду + infinitif ; офис → в офисе."
  },
  {
   "th": "City",
   "t": "qcm",
   "sk": [
    "ru_mouvement",
    "ru_accusatif"
   ],
   "s": "Мы идём в ___.",
   "o": [
    "музей",
    "музее",
    "музея"
   ],
   "a": 0,
   "fr": "Nous allons au musée.",
   "why": "Куда ? → accusatif ; masculin de chose, il ne change pas."
  },
  {
   "th": "Family",
   "t": "tr",
   "sk": [
    "ru_passe",
    "ru_accusatif"
   ],
   "fr": "Hier, j'ai vu ma sœur.",
   "a": [
    "Вчера я видел сестру.",
    "Вчера я видела сестру.",
    "Я вчера видел сестру.",
    "Я вчера видела сестру.",
    "Вчера я видел свою сестру.",
    "Вчера я видела свою сестру.",
    "Вчера я видел мою сестру.",
    "Вчера я видела мою сестру."
   ],
   "why": "Видел / видела selon qui parle ; сестра → сестру."
  },
  {
   "th": "Food",
   "t": "gap",
   "sk": [
    "ru_aspect",
    "ru_passe"
   ],
   "s": "Дети уже ___ весь торт.",
   "a": [
    "съели"
   ],
   "h": "съесть (passé, ils)",
   "fr": "Les enfants ont déjà mangé tout le gâteau.",
   "why": "Pluriel : -ли. Perfectif : le gâteau est fini."
  },
  {
   "th": "Restaurant",
   "t": "tr",
   "sk": [
    "ru_genitif",
    "ru_passe"
   ],
   "fr": "Il n'y avait pas de table libre.",
   "a": [
    "Не было свободного столика.",
    "Свободного столика не было.",
    "Не было свободного стола.",
    "Свободного стола не было."
   ],
   "why": "Нет au passé = не было, toujours au neutre, suivi du génitif."
  },
  {
   "th": "Weather",
   "t": "qcm",
   "sk": [
    "ru_futur",
    "ru_genitif"
   ],
   "s": "Завтра не будет ___.",
   "o": [
    "дождь",
    "дождя",
    "дождём"
   ],
   "a": 1,
   "fr": "Demain, il n'y aura pas de pluie.",
   "why": "Нет au futur = не будет, suivi du génitif : дождя."
  },
  {
   "th": "Health",
   "t": "tr",
   "sk": [
    "ru_passe",
    "ru_etre"
   ],
   "fr": "Hier, j'étais malade.",
   "a": [
    "Вчера я болел.",
    "Вчера я болела.",
    "Я вчера болел.",
    "Я вчера болела.",
    "Вчера я был болен.",
    "Вчера я была больна."
   ],
   "why": "Au présent, pas de verbe être ; au passé, il revient : был, была. Ou болеть : болел, болела."
  },
  {
   "th": "Climbing",
   "t": "gap",
   "sk": [
    "ru_mouvement",
    "ru_futur"
   ],
   "s": "Завтра мы ___ в горы.",
   "a": [
    "едем",
    "поедем"
   ],
   "h": "ехать (nous)",
   "fr": "Demain, nous allons à la montagne.",
   "why": "Pour un projet proche, le présent едем suffit ; поедем marche aussi."
  },
  {
   "th": "Nature",
   "t": "tr",
   "sk": [
    "ru_prepositionnel",
    "ru_genitif"
   ],
   "fr": "Il y a beaucoup d'arbres dans le parc.",
   "a": [
    "В парке много деревьев.",
    "В парке очень много деревьев."
   ],
   "why": "В парке : prépositionnel ; много + génitif pluriel : деревьев."
  },
  {
   "th": "Travel",
   "t": "qcm",
   "sk": [
    "ru_aspect",
    "ru_futur"
   ],
   "s": "Завтра я ___ билеты.",
   "o": [
    "буду купить",
    "куплю",
    "купил"
   ],
   "a": 1,
   "fr": "Demain, j'achèterai les billets.",
   "why": "Jamais буду + perfectif : куплю suffit pour le futur."
  },
  {
   "th": "Work",
   "t": "gap",
   "sk": [
    "ru_accusatif",
    "ru_present1"
   ],
   "s": "Директор ждёт ___.",
   "a": [
    "Ивана"
   ],
   "h": "Иван",
   "fr": "Le directeur attend Ivan.",
   "why": "Ждать + accusatif ; masculin vivant : Ивана."
  },
  {
   "th": "Home",
   "t": "tr",
   "sk": [
    "ru_aspect",
    "ru_passe"
   ],
   "fr": "J'ai déjà fait la vaisselle.",
   "a": [
    "Я уже помыл посуду.",
    "Я уже помыла посуду.",
    "Я уже вымыл посуду.",
    "Я уже вымыла посуду."
   ],
   "why": "Уже + résultat : perfectif помыть ; -л ou -ла selon qui parle."
  },
  {
   "th": "Shopping",
   "t": "qcm",
   "sk": [
    "ru_genitif",
    "ru_present2"
   ],
   "s": "Сколько стоит килограмм ___?",
   "o": [
    "яблоки",
    "яблок",
    "яблоках"
   ],
   "a": 1,
   "fr": "Combien coûte un kilo de pommes ?",
   "why": "Un kilo de… → génitif pluriel : яблок."
  },
  {
   "th": "City",
   "t": "tr",
   "sk": [
    "ru_mouvement",
    "ru_prepositionnel"
   ],
   "fr": "Nous allons au centre en bus.",
   "a": [
    "Мы едем в центр на автобусе.",
    "Мы едем на автобусе в центр."
   ],
   "why": "En bus : ехать ; на автобусе, au prépositionnel."
  },
  {
   "th": "Family",
   "t": "gap",
   "sk": [
    "ru_passe",
    "ru_prepositionnel"
   ],
   "s": "Мои родители ___ в деревне.",
   "a": [
    "жили"
   ],
   "h": "жить (passé)",
   "fr": "Mes parents habitaient à la campagne.",
   "why": "Pluriel : жили ; в деревне, au prépositionnel."
  }
 ]
};
})();

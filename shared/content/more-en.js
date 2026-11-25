// Three more exercises per English grammar point (docs/audit.md R29), written in the teacher voice of the banks.
(function(){
const P = window.PACKS && window.PACKS.en; if(!P) return;
P.bank = P.bank || {};
const add = (id, list) => { (P.bank[id] = P.bank[id] || []).push(...list); };

// ───────── A1 ─────────
add("tobe", [
 {th:"Family", t:"tr", fr:"Mes grands-parents sont en vacances.", a:["My grandparents are on holiday.","My grandparents are on vacation."], why:"Grandparents, c'est un pluriel : are. Et en vacances se dit on holiday, avec on."},
 {th:"Work", t:"gap", fr:"Je ne suis pas en retard.", s:"I ___ not late.", a:["am"], why:"Avec I, c'est toujours am. Pour la négation, not se met juste après : I am not, ou I'm not."},
 {th:"City", t:"qcm", fr:"Est-ce que le musée est ouvert ?", s:"___ the museum open?", o:["Is","Does","Are"], a:0, why:"Avec be, pas besoin de do pour la question : on inverse, Is the museum open?"},
]);
add("havegot", [
 {th:"Home", t:"tr", fr:"Nous avons un grand jardin.", a:["We've got a big garden.","We have got a big garden.","We have a big garden.","We've got a large garden.","We have a large garden."], why:"Avoir, pour ce qu'on possède : have got, ou simplement have. Les deux sont justes."},
 {th:"Health", t:"gap", fr:"Elle a de la fièvre.", s:"She ___ got a fever.", a:["has","'s"], why:"Avec she, have devient has : she has got. À l'oral, she's got."},
 {th:"Travel", t:"qcm", fr:"Tu as ton passeport ?", s:"___ you got your passport?", o:["Do","Have","Has"], a:1, why:"Avec have got, la question se fait en inversant have : Have you got…? Do va avec have tout seul : Do you have…?"},
]);
add("articles", [
 {th:"Food", t:"tr", fr:"J'aime le chocolat.", a:["I like chocolate.","I love chocolate."], why:"Quand tu parles d'une chose en général, l'anglais ne met pas d'article : I like chocolate. The chocolate voudrait dire ce chocolat-là."},
 {th:"Work", t:"gap", fr:"C'est une idée intéressante.", s:"It's ___ interesting idea.", a:["an"], why:"Interesting commence par un son voyelle : an. C'est le son qui compte, pas la lettre."},
 {th:"City", t:"qcm", fr:"Le soleil est très fort aujourd'hui.", s:"___ sun is very strong today.", o:["A","An","The"], a:2, why:"Il n'y a qu'un soleil, tout le monde sait lequel : the sun."},
]);
add("plurals", [
 {th:"Family", t:"tr", fr:"J'ai trois enfants.", a:["I have three children.","I've got three children.","I have got three children.","I have three kids.","I've got three kids."], why:"Child a un pluriel irrégulier : children. Pas de -s du tout !"},
 {th:"Shopping", t:"gap", fr:"Ces chaussures sont trop petites.", s:"___ shoes are too small.", a:["These","Those"], why:"Shoes est au pluriel, donc this devient these. Those, c'est pour des chaussures plus loin."},
 {th:"Nature", t:"qcm", fr:"Il y a des loups dans la forêt.", s:"There are ___ in the forest.", o:["wolves","wolfs","wolf"], a:0, why:"Beaucoup de mots en -f font -ves au pluriel : wolf, wolves, comme leaf, leaves."},
]);
add("thereis", [
 {th:"Home", t:"tr", fr:"Il y a deux salles de bains.", a:["There are two bathrooms."], why:"Deux salles de bains, c'est un pluriel : there are."},
 {th:"Food", t:"gap", fr:"Il n'y a pas de lait.", s:"There ___ any milk.", a:["isn't","is not"], why:"Le lait ne se compte pas, donc singulier : there isn't any milk."},
 {th:"City", t:"qcm", fr:"Est-ce qu'il y a un bus ce soir ?", s:"___ a bus tonight?", o:["There is","Is there","Has it"], a:1, why:"Pour la question, on inverse : Is there…? Has it ne dit jamais « il y a »."},
]);
add("can", [
 {th:"Climbing", t:"tr", fr:"Je sais nager, mais je ne sais pas plonger.", a:["I can swim, but I can't dive.","I can swim but I can't dive.","I can swim, but I cannot dive.","I can swim but I cannot dive."], why:"Savoir faire se dit can. Le contraire : can't, suivi du verbe nu."},
 {th:"Restaurant", t:"gap", fr:"Est-ce que je peux avoir de l'eau ?", s:"___ I have some water, please?", a:["Can","Could"], why:"Pour demander poliment : Can I…? Could I… est encore un peu plus poli."},
 {th:"Travel", t:"qcm", fr:"Elle sait parler japonais.", s:"She ___ Japanese.", o:["cans speak","can to speak","can speak"], a:2, why:"Can ne prend jamais de -s, et le verbe suit sans to : she can speak."},
]);
add("bedo", [
 {th:"Food", t:"tr", fr:"J'ai soif.", a:["I'm thirsty.","I am thirsty."], why:"Comme pour la faim, on « est » assoiffé : I'm thirsty."},
 {th:"Family", t:"gap", fr:"Ma fille a six ans.", s:"My daughter ___ six.", a:["is","'s"], why:"L'âge se dit avec be : my daughter is six. Jamais has."},
 {th:"Weather", t:"qcm", fr:"Il fait froid dehors.", s:"___ cold outside.", o:["It's","It does","It makes"], a:0, why:"La météo se dit avec it's : it's cold. Ni do ni make."},
]);
add("possess", [
 {th:"Family", t:"tr", fr:"La voiture de mon frère est rouge.", a:["My brother's car is red."], why:"Le propriétaire d'abord, puis 's : my brother's car."},
 {th:"Home", t:"gap", fr:"Le chat dort dans son panier.", s:"The cat is sleeping in ___ basket.", a:["its"], why:"Pour un animal ou une chose, le possessif est its, sans apostrophe."},
 {th:"Work", t:"qcm", fr:"C'est le bureau de Sarah.", s:"It's ___ office.", o:["the Sarah's","Sarah's","of Sarah"], a:1, why:"Pas d'article devant le prénom : Sarah's office."},
]);
add("freq", [
 {th:"Food", t:"tr", fr:"Je ne bois jamais de café.", a:["I never drink coffee."], why:"Never se place avant le verbe, et il suffit pour dire non : pas de don't en plus."},
 {th:"Work", t:"gap", fr:"Il est souvent en retard.", s:"He is ___ late.", a:["often"], why:"Avec be, l'adverbe vient après : he is often late."},
 {th:"Climbing", t:"qcm", fr:"Nous grimpons généralement le samedi.", s:"We ___ on Saturdays.", o:["climb usually","are usually climb","usually climb"], a:2, why:"L'adverbe se glisse avant le verbe : we usually climb."},
]);

// ───────── A2 ─────────
add("did", [
 {th:"Travel", t:"tr", fr:"Nous ne sommes pas allés à Londres.", a:["We didn't go to London.","We did not go to London."], why:"Au passé, la négation, c'est didn't. Puis le verbe revient à la base : go, jamais went."},
 {th:"Food", t:"gap", fr:"Tu as aimé le dessert ?", s:"Did you ___ the dessert?", a:["like","enjoy"], why:"Après did, le verbe reste à la base : like, sans -d."},
 {th:"Weather", t:"qcm", fr:"Il a plu hier ?", s:"___ rain yesterday?", o:["Did it","Was it","Does it"], a:0, why:"Yesterday, c'est le passé : Did it rain? Le verbe rain reste à la base."},
]);
add("does", [
 {th:"Work", t:"tr", fr:"Mon père ne travaille pas le lundi.", a:["My father doesn't work on Mondays.","My dad doesn't work on Mondays.","My father does not work on Mondays.","My dad does not work on Mondays."], why:"Avec he ou she, la négation est doesn't. Le -s passe sur does, donc work reste nu."},
 {th:"Family", t:"gap", fr:"Ta sœur habite ici ?", s:"___ your sister live here?", a:["Does"], why:"Ta sœur, c'est she : Does…? Et live reste à la base."},
 {th:"Food", t:"qcm", fr:"Elle mange de la viande.", s:"She ___ meat.", o:["eat","eats","does eats"], a:1, why:"Dans une phrase affirmative, avec she, le verbe prend -s : she eats."},
]);
add("questions", [
 {th:"City", t:"tr", fr:"Où est-ce que tu habites ?", a:["Where do you live?"], why:"Le mot interrogatif d'abord, puis do, puis le sujet : Where do you live?"},
 {th:"Work", t:"gap", fr:"À quelle heure commence la réunion ?", s:"What time ___ the meeting start?", a:["does"], why:"The meeting, c'est it : does. Puis start reste à la base."},
 {th:"Travel", t:"qcm", fr:"Combien de temps dure le vol ?", s:"How long ___ the flight?", o:["does","has","is"], a:2, why:"Avec be, pas de do : How long is the flight?"},
]);
add("simplecont", [
 {th:"Weather", t:"tr", fr:"Regarde, il neige !", a:["Look, it's snowing!","Look, it is snowing!"], why:"Ça se passe sous tes yeux : présent continu, it's snowing."},
 {th:"Work", t:"gap", fr:"Il enseigne les maths au lycée.", s:"He ___ maths at a high school.", a:["teaches"], why:"C'est son métier, une situation stable : présent simple. Avec he, teach prend -es : teaches."},
 {th:"Family", t:"qcm", fr:"Chut, le bébé dort.", s:"Shh, the baby ___.", o:["is sleeping","sleeps","sleeping"], a:0, why:"En ce moment précis : is sleeping. Sleeping tout seul, sans be, ne marche pas."},
]);
add("future", [
 {th:"Weather", t:"tr", fr:"Regarde ces nuages, il va pleuvoir.", a:["Look at those clouds, it's going to rain.","Look at those clouds, it is going to rain.","Look at these clouds, it's going to rain.","Look at these clouds, it is going to rain."], why:"Tu vois les signes maintenant : going to. C'est une prédiction sûre."},
 {th:"Travel", t:"gap", fr:"Je pars à Rome demain, j'ai déjà mon billet.", s:"I ___ to Rome tomorrow, I've already got my ticket.", a:["'m flying","am flying","'m going","am going"], why:"C'est déjà organisé, le billet est pris : présent continu, I'm flying."},
 {th:"Restaurant", t:"qcm", fr:"Je vais prendre le poisson. (tu décides en commandant)", s:"I ___ the fish.", o:["have","'ll have","am having had"], a:1, why:"Tu décides sur le moment : I'll have. C'est la formule pour commander."},
]);
add("makedo", [
 {th:"Home", t:"tr", fr:"Je fais mon lit tous les matins.", a:["I make my bed every morning."], why:"Faire son lit se dit make the bed. Make, c'est quand on fabrique ou arrange quelque chose."},
 {th:"Work", t:"gap", fr:"Tu peux me rendre un service ?", s:"Can you ___ me a favour?", a:["do"], why:"Rendre un service se dit do a favour. À apprendre en bloc."},
 {th:"Health", t:"qcm", fr:"Elle fait du yoga le matin.", s:"She ___ yoga in the morning.", o:["makes","does","plays"], a:1, why:"Pour le yoga ou le sport en général, c'est do. Avec she : does."},
]);
add("shall", [
 {th:"Food", t:"tr", fr:"On commande une pizza ?", a:["Shall we order a pizza?","Shall we order pizza?","Shall we get a pizza?"], why:"Pour proposer : Shall we + verbe nu. Simple et naturel."},
 {th:"Home", t:"gap", fr:"Je t'aide à porter ton sac ?", s:"___ I help you with your bag?", a:["Shall"], why:"Pour proposer ton aide : Shall I…? Le verbe suit sans to."},
 {th:"City", t:"qcm", fr:"On se retrouve devant la gare ?", s:"Shall we ___ outside the station?", o:["meet","to meet","meeting"], a:0, why:"Après shall, le verbe reste nu : meet."},
]);
add("compar", [
 {th:"City", t:"tr", fr:"Londres est plus grand que Paris.", a:["London is bigger than Paris.","London is larger than Paris."], why:"Big est court : bigger. Le g se double pour garder le son court."},
 {th:"Travel", t:"gap", fr:"C'est le pays le plus beau que j'aie vu.", s:"It's the ___ beautiful country I've seen.", a:["most"], why:"Beautiful est long : the most beautiful. Pas de -est sur un mot long."},
 {th:"Weather", t:"qcm", fr:"Ce soir, il fait plus frais qu'hier soir.", s:"Tonight is ___ than last night.", o:["more cool","cooler","coolest"], a:1, why:"Cool est court : cooler than. More, c'est pour les mots longs."},
]);
add("someany", [
 {th:"Food", t:"tr", fr:"Vous voulez des biscuits ?", a:["Would you like some biscuits?","Would you like some cookies?","Do you want some biscuits?","Do you want some cookies?"], why:"Quand on propose quelque chose, on dit some, même dans une question."},
 {th:"Shopping", t:"gap", fr:"Combien d'argent as-tu ?", s:"How ___ money have you got?", a:["much"], why:"L'argent ne se compte pas : how much. Many, c'est pour ce qui se compte."},
 {th:"Restaurant", t:"qcm", fr:"Il n'y a pas de tables libres.", s:"There aren't ___ free tables.", o:["some","much","any"], a:2, why:"Phrase négative : any. Les tables se comptent, donc pas much."},
]);
add("inonat", [
 {th:"Work", t:"tr", fr:"La réunion est lundi à neuf heures.", a:["The meeting is on Monday at nine.","The meeting is on Monday at 9.","The meeting is on Monday at nine o'clock."], why:"Un jour : on Monday. Une heure : at nine."},
 {th:"Family", t:"gap", fr:"Mon anniversaire est en juillet.", s:"My birthday is ___ July.", a:["in"], why:"Pour un mois : in July. Et les mois prennent une majuscule."},
 {th:"Weather", t:"qcm", fr:"Il neige souvent en hiver.", s:"It often snows ___ winter.", o:["in","on","at"], a:0, why:"Pour une saison : in winter."},
]);
add("musthave", [
 {th:"Work", t:"tr", fr:"Je dois finir ce rapport aujourd'hui.", a:["I have to finish this report today.","I must finish this report today.","I've got to finish this report today."], why:"Pour une obligation : have to ou must. À l'oral, have to est le plus courant."},
 {th:"Travel", t:"gap", fr:"Tu n'es pas obligé de venir me chercher.", s:"You ___ to pick me up.", a:["don't have","do not have"], why:"Pas obligé : don't have to. Mustn't voudrait dire que c'est interdit !"},
 {th:"City", t:"qcm", fr:"Tu ne dois pas traverser au rouge.", s:"You ___ cross when the light is red.", o:["don't have to","mustn't","haven't to"], a:1, why:"C'est interdit : mustn't. Don't have to dirait que c'est facultatif."},
]);

// ───────── B1 ─────────
add("particles", [
 {th:"Home", t:"tr", fr:"Éteins la télé, s'il te plaît.", a:["Turn off the TV, please.","Turn the TV off, please.","Switch off the TV, please.","Switch the TV off, please.","Please turn off the TV.","Please turn the TV off."], why:"Éteindre, c'est turn off. Le petit mot peut aller avant ou après the TV."},
 {th:"Work", t:"gap", fr:"Je dois remplir ce formulaire.", s:"I have to fill ___ this form.", a:["in","out"], why:"Remplir un formulaire : fill in en anglais britannique, fill out en américain."},
 {th:"Family", t:"qcm", fr:"Je m'occupe des enfants ce soir.", s:"I'm looking ___ the kids tonight.", o:["for","at","after"], a:2, why:"S'occuper de, c'est look after. Look for, c'est chercher."},
]);
add("unless", [
 {th:"Weather", t:"tr", fr:"On ira à la plage sauf s'il pleut.", a:["We'll go to the beach unless it rains.","We will go to the beach unless it rains."], why:"Unless veut dire « sauf si ». Il est suivi du présent : unless it rains."},
 {th:"Work", t:"gap", fr:"Je ne viendrai pas, à moins que tu aies besoin de moi.", s:"I won't come ___ you need me.", a:["unless"], why:"À moins que, sauf si : unless. Et pas de subjonctif en anglais : you need."},
 {th:"Health", t:"qcm", fr:"Tu ne guériras pas si tu ne te reposes pas.", s:"You won't get better ___ you rest.", o:["unless","at least","if"], a:0, why:"Unless veut dire if not. At least, c'est « au moins », un faux ami de « à moins »."},
]);
add("although", [
 {th:"Weather", t:"tr", fr:"Bien qu'il fasse froid, on va se baigner.", a:["Although it's cold, we're going swimming.","Although it is cold, we are going swimming.","Even though it's cold, we're going swimming.","Even though it is cold, we are going swimming."], why:"Bien que, pour un fait réel : although ou even though. Pas de subjonctif en anglais."},
 {th:"Food", t:"gap", fr:"Même si tu n'aimes pas le poisson, goûte-le.", s:"Even ___ you don't like fish, try it.", a:["if"], why:"Même si, pour une hypothèse : even if. Even though, c'est pour un fait sûr."},
 {th:"Work", t:"qcm", fr:"Il est malade, mais il travaille quand même.", s:"He's ill, but he ___ works.", o:["yet","still","even"], a:1, why:"Quand même, toujours : still, placé avant le verbe."},
]);
add("presperf", [
 {th:"Travel", t:"tr", fr:"Je ne suis jamais allé en Inde.", a:["I've never been to India.","I have never been to India."], why:"Une expérience de vie, sans date : present perfect. Être allé quelque part se dit been to."},
 {th:"Home", t:"gap", fr:"Nous habitons ici depuis dix ans.", s:"We ___ lived here for ten years.", a:["'ve","have"], why:"Ça a commencé avant et ça continue : have + participe. Le présent français devient present perfect."},
 {th:"Food", t:"qcm", fr:"Tu as déjà mangé ? (je veux savoir s'il faut te faire à manger)", s:"___ eaten yet?", o:["Did you","Are you","Have you"], a:2, why:"Yet dans une question, ça compte pour maintenant : present perfect, Have you eaten yet?"},
]);
add("havebeen", [
 {th:"Work", t:"tr", fr:"Je travaille sur ce projet depuis le matin.", a:["I've been working on this project since this morning.","I have been working on this project since this morning."], why:"Une action qui dure depuis un moment et continue : have been + -ing."},
 {th:"Climbing", t:"gap", fr:"Tu as l'air crevé. Tu as grimpé ?", s:"You look exhausted. Have you been ___?", a:["climbing"], why:"On voit le résultat d'une activité récente : have been + -ing, climbing."},
 {th:"Health", t:"qcm", fr:"Elle a été opérée hier.", s:"She ___ operated on yesterday.", o:["was","has been","has been being"], a:0, why:"Yesterday, c'est un moment fini : past simple au passif, was operated on."},
]);
add("ingto", [
 {th:"Home", t:"tr", fr:"J'ai arrêté de fumer.", a:["I've stopped smoking.","I have stopped smoking.","I stopped smoking.","I've quit smoking.","I quit smoking."], why:"Arrêter de faire : stop + -ing. Stop to smoke voudrait dire s'arrêter pour fumer !"},
 {th:"Travel", t:"gap", fr:"Nous avons décidé de partir tôt.", s:"We decided ___ early.", a:["to leave","to go"], why:"Après decide, c'est to + verbe : decided to leave."},
 {th:"Climbing", t:"qcm", fr:"Ça ne me dérange pas d'attendre.", s:"I don't mind ___.", o:["to wait","waiting","wait"], a:1, why:"Après mind, toujours -ing : I don't mind waiting."},
]);
add("while", [
 {th:"Home", t:"tr", fr:"Je cuisinais quand le téléphone a sonné.", a:["I was cooking when the phone rang."], why:"Une action en cours (was cooking) coupée par un événement (rang)."},
 {th:"Travel", t:"gap", fr:"Pendant qu'il conduisait, elle dormait.", s:"While he was driving, she ___ sleeping.", a:["was"], why:"Deux actions longues en même temps : past continuous des deux côtés."},
 {th:"City", t:"qcm", fr:"J'ai vu un accident pendant que j'attendais le bus.", s:"I saw an accident while I ___ for the bus.", o:["waited","am waiting","was waiting"], a:2, why:"Après while, l'action longue en arrière-plan : was waiting."},
]);
add("cond2", [
 {th:"Home", t:"tr", fr:"Si j'avais une voiture, je partirais à la montagne.", a:["If I had a car, I would go to the mountains.","If I had a car, I'd go to the mountains."], why:"Situation imaginée : If + passé, puis would + verbe."},
 {th:"Work", t:"gap", fr:"Si j'étais toi, je demanderais une augmentation.", s:"If I ___ you, I'd ask for a raise.", a:["were","was"], why:"If I were you, c'est la formule pour conseiller. Was s'entend aussi à l'oral."},
 {th:"Travel", t:"qcm", fr:"Où irais-tu si tu pouvais partir demain ?", s:"Where would you go if you ___ leave tomorrow?", o:["could","can","would"], a:0, why:"Après if, le passé : could. Jamais would dans la partie avec if."},
]);
add("usedto", [
 {th:"Family", t:"tr", fr:"Avant, j'habitais à la campagne.", a:["I used to live in the countryside.","I used to live in the country."], why:"Une situation passée qui n'est plus vraie : used to + verbe."},
 {th:"Work", t:"gap", fr:"Je suis habitué à me lever tôt.", s:"I'm used to ___ up early.", a:["getting"], why:"Être habitué à : be used to + -ing. Ici, to est une préposition."},
 {th:"Food", t:"qcm", fr:"Tu mangeais de la viande, avant ?", s:"___ eat meat?", o:["Used you to","Did you use to","Were you used to"], a:1, why:"La question se fait avec did, et used perd son d : Did you use to…?"},
]);
add("relatives", [
 {th:"Work", t:"tr", fr:"C'est la femme qui dirige l'entreprise.", a:["She's the woman who runs the company.","She is the woman who runs the company.","That's the woman who runs the company.","That is the woman who runs the company.","She's the woman that runs the company.","That's the woman that runs the company."], why:"Pour une personne qui fait l'action : who, ou that."},
 {th:"Travel", t:"gap", fr:"C'est la ville où je suis né.", s:"This is the town ___ I was born.", a:["where"], why:"Pour un lieu : where."},
 {th:"Shopping", t:"qcm", fr:"Le pull que j'ai acheté est trop petit.", s:"The jumper ___ is too small.", o:["I bought it","who I bought","I bought"], a:2, why:"Quand le relatif est complément, tu peux l'enlever. Mais jamais de it en plus."},
]);
add("tags", [
 {th:"Weather", t:"tr", fr:"Il fait beau, n'est-ce pas ?", a:["It's a nice day, isn't it?","It's nice, isn't it?","It is nice, isn't it?","It's sunny, isn't it?","The weather's nice, isn't it?"], why:"On reprend l'auxiliaire à l'envers : it's, donc isn't it?"},
 {th:"Family", t:"gap", fr:"Tu n'as pas de frères, si ?", s:"You haven't got any brothers, ___ you?", a:["have"], why:"Phrase négative, petite question positive : have you?"},
 {th:"Food", t:"qcm", fr:"Elle aime les sushis, non ?", s:"She likes sushi, ___?", o:["doesn't she","isn't she","don't she"], a:0, why:"Pas d'auxiliaire visible, alors on prend does, à l'envers : doesn't she?"},
]);

// ───────── B2 ─────────
add("passive", [
 {th:"City", t:"tr", fr:"Le musée a été construit en 1900.", a:["The museum was built in 1900."], why:"Le musée subit l'action, à un moment précis : was + participe, was built."},
 {th:"Food", t:"gap", fr:"Le fromage est fabriqué en Normandie.", s:"The cheese ___ made in Normandy.", a:["is"], why:"Un fait général au passif : is + participe."},
 {th:"Work", t:"qcm", fr:"La réunion a été annulée.", s:"The meeting ___ cancelled.", o:["has","has been","is being"], a:1, why:"Le résultat compte maintenant : has been + participe."},
]);
add("cond3", [
 {th:"Travel", t:"tr", fr:"Si on était partis plus tôt, on n'aurait pas raté le train.", a:["If we had left earlier, we wouldn't have missed the train.","If we'd left earlier, we wouldn't have missed the train.","If we had left earlier, we would not have missed the train."], why:"Un passé imaginé : if + had + participe, puis would have + participe."},
 {th:"Work", t:"gap", fr:"Si j'avais su, je serais venu.", s:"If I had known, I ___ come.", a:["would have","'d have"], why:"Le résultat imaginé dans le passé : would have + participe."},
 {th:"Family", t:"qcm", fr:"Si seulement j'avais appelé ma grand-mère !", s:"I wish I ___ my grandmother!", o:["called","would call","had called"], a:2, why:"Un regret sur le passé : wish + had + participe."},
]);
add("modals", [
 {th:"Home", t:"tr", fr:"Il n'est pas là, il a dû partir.", a:["He's not here, he must have left.","He isn't here, he must have left.","He is not here, he must have left."], why:"Une déduction presque sûre sur le passé : must have + participe."},
 {th:"Work", t:"gap", fr:"Ça ne peut pas être vrai !", s:"That ___ be true!", a:["can't","cannot"], why:"Quand c'est impossible : can't. Mustn't voudrait dire « interdit »."},
 {th:"Weather", t:"qcm", fr:"Il a peut-être plu cette nuit.", s:"It ___ rained last night.", o:["might have","must","can have"], a:0, why:"Tu n'es pas sûr : might have + participe."},
]);
add("reported", [
 {th:"Work", t:"tr", fr:"Elle m'a dit qu'elle était fatiguée.", a:["She told me she was tired.","She told me that she was tired.","She said she was tired.","She said that she was tired."], why:"Quand on rapporte, on recule d'un temps : I'm tired devient she was tired."},
 {th:"Travel", t:"gap", fr:"Il m'a demandé où j'allais.", s:"He asked me where I ___ going.", a:["was"], why:"Question rapportée : ordre normal, sans inversion, et on recule d'un temps : was."},
 {th:"Health", t:"qcm", fr:"L'infirmière m'a dit de boire beaucoup d'eau.", s:"The nurse ___ lots of water.", o:["said me to drink","told me to drink","told me drink"], a:1, why:"Pour un ordre : tell + personne + to + verbe. Said me ne se dit jamais."},
]);
add("pastperf", [
 {th:"Travel", t:"tr", fr:"Quand on est arrivés, l'avion était déjà parti.", a:["When we arrived, the plane had already left.","When we got there, the plane had already left."], why:"L'avion est parti avant votre arrivée : had + participe, had left."},
 {th:"Food", t:"gap", fr:"Je n'avais jamais mangé de sushis avant.", s:"I ___ never eaten sushi before.", a:["had","'d"], why:"Avant un moment passé : had never eaten. C'est le passé du passé."},
 {th:"Work", t:"qcm", fr:"Elle avait fini avant midi.", s:"She ___ before noon.", o:["has finished","finished had","had finished"], a:2, why:"Le plus-que-parfait français se dit had + participe : had finished."},
]);
add("causative", [
 {th:"Home", t:"tr", fr:"Nous faisons repeindre la cuisine.", a:["We're having the kitchen painted.","We are having the kitchen painted.","We're having the kitchen repainted.","We are having the kitchen repainted.","We're getting the kitchen painted.","We're getting the kitchen repainted."], why:"Faire faire par quelqu'un : have + l'objet + participe passé."},
 {th:"Health", t:"gap", fr:"Je me suis fait couper les cheveux.", s:"I had my hair ___.", a:["cut"], why:"Have + objet + participe : had my hair cut. Cut ne change pas au participe."},
 {th:"Travel", t:"qcm", fr:"On s'est fait voler nos valises.", s:"We ___ our suitcases stolen.", o:["had","were","made"], a:0, why:"Pour un ennui subi : have + objet + participe. We were stolen voudrait dire qu'on vous a volés, vous !"},
]);
add("futperf", [
 {th:"Work", t:"tr", fr:"D'ici vendredi, j'aurai fini le projet.", a:["By Friday, I'll have finished the project.","By Friday, I will have finished the project.","I'll have finished the project by Friday.","I will have finished the project by Friday."], why:"By + un moment futur : l'action sera finie avant, will have + participe."},
 {th:"Travel", t:"gap", fr:"Demain à cette heure-ci, je serai en train de voler vers Tokyo.", s:"This time tomorrow, I'll be ___ to Tokyo.", a:["flying"], why:"En cours à un moment précis du futur : will be + -ing."},
 {th:"Family", t:"qcm", fr:"En mai, ils seront mariés depuis 20 ans.", s:"In May, they ___ married for 20 years.", o:["will be being","will have been","are"], a:1, why:"Une durée qui atteint un cap dans le futur : will have been."},
]);

// ───────── C1 ─────────
add("inversion", [
 {th:"Travel", t:"tr", fr:"Jamais je n'ai vu un endroit aussi beau.", a:["Never have I seen such a beautiful place.","Never have I seen a place so beautiful.","Never before have I seen such a beautiful place."], why:"Never en tête de phrase, on inverse comme une question : Never have I seen."},
 {th:"Work", t:"gap", fr:"Si vous avez des questions, n'hésitez pas.", s:"___ you have any questions, don't hesitate.", a:["Should"], why:"Should en tête remplace if : c'est poli et soutenu, très fréquent dans les mails."},
 {th:"City", t:"qcm", fr:"À peine étions-nous sortis qu'il s'est mis à pleuvoir.", s:"No sooner ___ out than it started to rain.", o:["we had gone","did we went","had we gone"], a:2, why:"No sooner en tête, on inverse avec had, et la suite commence par than."},
]);
add("mixedcond", [
 {th:"Work", t:"tr", fr:"Si j'avais accepté ce poste, je vivrais à Londres maintenant.", a:["If I had accepted that job, I would live in London now.","If I had accepted that job, I'd live in London now.","If I'd accepted that job, I'd be living in London now.","If I had accepted that job, I would be living in London now."], why:"Le choix est passé (had accepted), la conséquence est maintenant (would live)."},
 {th:"Health", t:"gap", fr:"Si je n'étais pas allergique, j'aurais mangé le gâteau.", s:"If I ___ allergic, I would have eaten the cake.", a:["weren't","wasn't","were not","was not"], why:"L'allergie est permanente : présent imaginé, weren't. Le gâteau, c'était avant : would have eaten."},
 {th:"Travel", t:"qcm", fr:"Si on avait pris la carte, on ne serait pas perdus maintenant.", s:"If we had taken the map, we ___ lost now.", o:["wouldn't be","wouldn't have been","won't be"], a:0, why:"Now indique un résultat présent : wouldn't be."},
]);
add("rather", [
 {th:"Food", t:"tr", fr:"Je préférerais manger à la maison ce soir.", a:["I'd rather eat at home tonight.","I would rather eat at home tonight.","I'd rather eat in tonight."], why:"Quand c'est toi qui fais l'action : I'd rather + verbe nu. Pas de to."},
 {th:"Home", t:"gap", fr:"Je préférerais que tu ne fumes pas ici.", s:"I'd rather you ___ smoke here.", a:["didn't","did not"], why:"Pour quelqu'un d'autre, après rather, le verbe passe au passé : you didn't smoke."},
 {th:"Weather", t:"qcm", fr:"Si seulement il ne pleuvait pas !", s:"If only it ___ raining!", o:["isn't","weren't","won't"], a:1, why:"If only + passé, pour un souhait sur le présent. Weren't est la forme soignée."},
]);
add("cleft", [
 {th:"Work", t:"tr", fr:"Ce dont j'ai besoin, c'est d'une pause.", a:["What I need is a break.","What I need is a rest."], why:"Pour mettre en avant : What I need is… Pas de it, ce serait un calque du français."},
 {th:"Family", t:"gap", fr:"C'est ma sœur qui a appelé, pas ma mère.", s:"It was my sister ___ called, not my mother.", a:["who","that"], why:"Pour mettre une personne en relief : It was + la personne + who."},
 {th:"Travel", t:"qcm", fr:"Ce que j'ai adoré, c'était la nourriture.", s:"___ I loved was the food.", o:["That","Which","What"], a:2, why:"Quand « ce que » ouvre la phrase, c'est what."},
]);
add("linkers", [
 {th:"Weather", t:"tr", fr:"Malgré la pluie, nous sommes sortis.", a:["Despite the rain, we went out.","In spite of the rain, we went out."], why:"Malgré + nom : despite, sans of. Ou in spite of, avec of."},
 {th:"Family", t:"gap", fr:"Mon frère adore le sport, alors que moi je déteste ça.", s:"My brother loves sport, ___ I hate it.", a:["whereas","while"], why:"Pour opposer deux personnes : whereas ou while."},
 {th:"Work", t:"qcm", fr:"Bien qu'il soit très qualifié, il n'a pas eu le poste.", s:"___ he's very qualified, he didn't get the job.", o:["Even though","Despite","In spite of"], a:0, why:"Devant une phrase complète, avec sujet et verbe : even though. Despite voudrait un nom."},
]);

// ───────── C2 ─────────
add("subj", [
 {th:"Health", t:"tr", fr:"Le médecin a recommandé qu'il se repose.", a:["The doctor recommended that he rest.","The doctor recommended he rest."], why:"Après recommend that, le verbe reste à la base : he rest, sans -s."},
 {th:"Work", t:"gap", fr:"Il est essentiel que chacun soit à l'heure.", s:"It is essential that everyone ___ on time.", a:["be"], why:"Subjonctif anglais : be pour tout le monde. Ni is, ni are."},
 {th:"Travel", t:"qcm", fr:"Ils ont exigé que nous ne partions pas.", s:"They demanded that we ___ leave.", o:["don't","not","didn't"], a:1, why:"Au subjonctif négatif, juste not devant le verbe, sans do."},
]);
add("hightime", [
 {th:"Work", t:"tr", fr:"Il est grand temps que nous prenions une décision.", a:["It's high time we made a decision.","It is high time we made a decision.","It's high time we took a decision.","It is high time we took a decision."], why:"It's high time + passé : made. Le passé montre que c'est déjà en retard."},
 {th:"Weather", t:"gap", fr:"Tu ferais mieux de prendre un parapluie.", s:"You'd ___ take an umbrella.", a:["better"], why:"Tu ferais mieux de : you'd better + verbe nu. Pas de to."},
 {th:"Work", t:"qcm", fr:"Nous étions censés commencer à neuf heures.", s:"We ___ start at nine.", o:["supposed to","were suppose","were supposed to"], a:2, why:"Être censé : be supposed to. Au passé, c'est be qui change : were supposed to."},
]);
add("participle", [
 {th:"Travel", t:"tr", fr:"Ayant perdu son passeport, il a appelé l'ambassade.", a:["Having lost his passport, he called the embassy.","Having lost his passport, he rang the embassy.","Having lost his passport, he phoned the embassy."], why:"Ayant + participe : having + participe. Le sujet doit être le même dans les deux parties."},
 {th:"City", t:"gap", fr:"Construit en 1850, le pont est toujours debout.", s:"___ in 1850, the bridge is still standing.", a:["Built"], why:"Le pont a été construit, il subit l'action : participe passé seul, built."},
 {th:"Climbing", t:"qcm", fr:"N'ayant pas vérifié la météo, ils ont été surpris par l'orage.", s:"___ the forecast, they were caught in the storm.", o:["Not having checked","Having not checked","Not checking had"], a:0, why:"La négation se met devant : not having checked."},
]);
add("idioms", [
 {th:"Work", t:"tr", fr:"Je suis débordé cette semaine.", a:["I'm snowed under this week.","I am snowed under this week."], why:"Être débordé : be snowed under, comme enseveli sous la neige."},
 {th:"Shopping", t:"gap", fr:"Ça coûte les yeux de la tête.", s:"It costs an arm and a ___.", a:["leg"], why:"En anglais, ça coûte un bras et une jambe : an arm and a leg. Pas d'yeux !"},
 {th:"Weather", t:"qcm", fr:"Il pleut des cordes.", s:"It's raining cats and ___.", o:["cows","dogs","birds"], a:1, why:"En anglais, il pleut des chats et des chiens : cats and dogs. Une image bien à lui !"},
]);
})();

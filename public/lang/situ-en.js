// English situations added on 2026-11-23: 8 situations, their words (by level) and the exercises of their tests.
(function(){
const P = window.PACKS && window.PACKS.en; if(!P) return;
P.bank = P.bank || {};
const add = (sk, ...ex) => (P.bank[sk] = P.bank[sk] || []).push(...ex);

// ───────── Situations ─────────
P.cours.push(
 {id:"intro", theme:"Intro", t:"Se présenter et faire connaissance", situ:"Dire qui tu es, d'où tu viens, ce que tu fais et ce que tu aimes.",
  ph:[["Hi, I'm Pi. Nice to meet you.","Salut, moi c'est Pi. Enchanté."],["Where are you from?","Tu viens d'où ?"],["I'm from Lyon, but I live in Paris now.","Je viens de Lyon, mais j'habite à Paris maintenant."],["What do you do?","Tu fais quoi dans la vie ?"],["I work as a graphic designer.","Je suis graphiste."],["What do you do in your spare time?","Qu'est-ce que tu fais pendant ton temps libre ?"],["I'm really into climbing.","Je suis fan d'escalade."],["Let me introduce you to my friend Sam.","Je te présente mon ami Sam."]],
  dia:[["A","Hi, I don't think we've met. I'm Sam."],["B","Nice to meet you, Sam. I'm Pi. Where are you from?"],["A","I'm from Leeds, in the north of England. And you?"],["B","I'm French, from Lyon. What do you do?"],["A","I'm a nurse. What about you?"],["B","I'm a designer. And in my spare time, I climb."],["A","No way, me too! Which gym do you go to?"]],
  g:{t:"Poser des questions : mot interrogatif + auxiliaire + sujet", r:"Pour poser une question, on place le mot interrogatif, puis l'auxiliaire, puis le sujet, puis le verbe. Avec BE, pas de do : Where are you from? Avec un autre verbe, do ou does est obligatoire : What do you do?", ex:["Where are you from?","What does your sister do?","How long have you lived here?"], skill:"questions"},
  tr:[["Where you are from?","Where are you from?","Dans une question, BE passe avant le sujet : are you, pas you are."],["I am designer","I'm a designer","Un métier prend toujours a ou an en anglais."],["I have 30 years","I'm 30","L'âge se dit avec BE : ni have, ni years tout seul."]],
  task:[["Je te présente ma collègue Anna.","This is my colleague Anna."],["Qu'est-ce que tu fais le week-end ?","What do you do at the weekend?"],["Tu habites ici depuis longtemps ?","Have you lived here long?"]]},
 {id:"hotel", theme:"Hotel", t:"À l'hôtel", situ:"Réserver une chambre, arriver, signaler un problème et partir.",
  ph:[["I'd like to book a double room for two nights.","Je voudrais réserver une chambre double pour deux nuits."],["I have a reservation under the name Martin.","J'ai une réservation au nom de Martin."],["Is breakfast included?","Le petit-déjeuner est compris ?"],["Is there a lift?","Il y a un ascenseur ?"],["There's no hot water in my room.","Il n'y a pas d'eau chaude dans ma chambre."],["The air conditioning doesn't work.","La climatisation ne marche pas."],["What time is checkout?","À quelle heure faut-il libérer la chambre ?"],["Could I leave my luggage here until this afternoon?","Je peux laisser mes bagages ici jusqu'à cet après-midi ?"]],
  dia:[["Receptionist","Good evening. How can I help you?"],["You","Hi, I have a reservation under the name Martin."],["Receptionist","Yes, a double room for two nights. Here's your key card. You're on the third floor."],["You","Thanks. Is there a lift?"],["Receptionist","Yes, just behind you. Breakfast is from seven to ten."],["You","Great. And is there wifi in the rooms?"],["Receptionist","There is. The password is on this card."]],
  g:{t:"There is / there are : dire ce qu'il y a (ou ce qui manque)", r:"Il y a = there is devant un singulier, there are devant un pluriel. Pour demander, on inverse : Is there…? Are there…? Pour signaler ce qui manque : there isn't any…, there aren't any…, ou there's no….", ex:["Is there a lift?","There aren't any towels in the bathroom.","There's no hot water."], skill:"thereis"},
  tr:[["It has no hot water","There's no hot water","Il y a = there is, jamais « it has »."],["There is two beds in the room","There are two beds in the room","Devant un pluriel, il faut there ARE."],["The clim doesn't work","The air conditioning doesn't work","« Clim » est une abréviation française : on dit air conditioning, ou AC."]],
  task:[["Il y a un parking à l'hôtel ?","Is there a car park at the hotel?"],["Il n'y a pas de serviettes dans la salle de bains.","There aren't any towels in the bathroom."],["Je voudrais une chambre avec vue sur la mer.","I'd like a room with a sea view."]]},
 {id:"party", theme:"Party", t:"Sortir entre amis", situ:"Proposer une sortie, accepter ou refuser, et passer une bonne soirée.",
  ph:[["Shall we go out tonight?","On sort ce soir ?"],["Are you free on Saturday?","Tu es libre samedi ?"],["Sounds good, count me in!","Ça marche, je suis partant !"],["Sorry, I can't make it this time.","Désolé, je ne peux pas venir cette fois."],["Can I take a rain check?","On remet ça à une autre fois ?"],["It's my round. What are you having?","C'est ma tournée. Tu prends quoi ?"],["Shall I bring something?","J'apporte quelque chose ?"],["Let's meet outside the pub at eight.","On se retrouve devant le pub à vingt heures."]],
  dia:[["A","It's Lucy's birthday on Friday. Shall we go out for a drink?"],["B","Sounds good! Where?"],["A","There's a new bar near the station. Shall we meet there at eight?"],["B","Eight is a bit early for me. Shall we say half past?"],["A","Fine. Shall I book a table?"],["B","Yes, good idea. And I'll bring a card for Lucy."]],
  g:{t:"Proposer : Shall we…? / Shall I…?", r:"Pour proposer de faire quelque chose ensemble : Shall we + verbe à la base (on fait… ?). Pour proposer ton aide : Shall I + verbe à la base (je fais… ?). Let's + verbe dit la même chose sous forme affirmative : Let's go!", ex:["Shall we go out tonight?","Shall I bring some snacks?","Let's meet at eight."], skill:"shall"},
  tr:[["We go to the bar?","Shall we go to the bar?","Pour proposer, on ne garde pas l'ordre affirmatif : Shall we…? ou Why don't we…?"],["I can't come, I have another thing","I can't make it, I've got other plans","« Avoir un autre truc » se dit have other plans, et pouvoir venir = make it."],["Do you want that I bring something?","Do you want me to bring something?","Après want : quelqu'un + to + verbe, jamais « want that »."]],
  task:[["On va boire un verre après le boulot ?","Shall we go for a drink after work?"],["Je réserve une table ?","Shall I book a table?"],["Désolé, je ne peux pas venir samedi.","Sorry, I can't make it on Saturday."]]},
 {id:"interview", theme:"Interview", t:"L'entretien d'embauche", situ:"Parler de ton parcours, de tes points forts, et poser tes propres questions.",
  ph:[["Tell me about yourself.","Parlez-moi de vous."],["I've worked as a designer for five years.","Je travaille comme designer depuis cinq ans."],["I've just finished a project for a large client.","Je viens de terminer un projet pour un gros client."],["My main strength is that I'm very organised.","Mon principal point fort, c'est que je suis très organisé."],["I've never managed a team, but I'd like to.","Je n'ai jamais encadré d'équipe, mais j'aimerais le faire."],["Why do you want to work here?","Pourquoi voulez-vous travailler chez nous ?"],["What would a typical day look like?","À quoi ressemblerait une journée type ?"],["When would you like me to start?","Quand souhaitez-vous que je commence ?"]],
  dia:[["Interviewer","So, tell me about your experience."],["You","I've worked in design for five years, mostly for small agencies."],["Interviewer","Have you ever led a project on your own?"],["You","Yes, I've led three projects from start to finish. The last one was for a bank."],["Interviewer","And what's your main weakness?"],["You","I sometimes take on too much, but I've learnt to say no."],["Interviewer","Do you have any questions for us?"],["You","Yes. What would a typical day look like?"]],
  g:{t:"Present perfect pour raconter son parcours", r:"Pour parler de ton expérience sans dire quand : have / has + participe passé (I've led three projects). Avec for ou since, il décrit une situation qui dure encore. Dès que tu donnes un moment passé précis (in 2020, last year), on passe au past simple.", ex:["I've worked here for five years.","Have you ever managed a team?","I joined the company in 2021."], skill:"presperf"},
  tr:[["I work here since five years","I've worked here for five years","Depuis + durée : present perfect + for, jamais le présent ni since."],["I have finished my studies in 2019","I finished my studies in 2019","Avec une date passée précise, c'est le past simple."],["I have a lot of experiences","I have a lot of experience","Au sens de compétence, experience est indénombrable : pas de -s. « Experiences » = des choses vécues."]],
  task:[["J'ai déjà travaillé avec des clients étrangers.","I've already worked with foreign clients."],["Je n'ai jamais utilisé ce logiciel, mais j'apprends vite.","I've never used this software, but I learn fast."],["J'ai quitté mon dernier poste en mars.","I left my last job in March."]]},
 {id:"admin", theme:"Admin", t:"Banque et démarches", situ:"Ouvrir un compte, remplir un formulaire, réussir un rendez-vous administratif.",
  ph:[["I'd like to open a bank account.","Je voudrais ouvrir un compte bancaire."],["Do I need to make an appointment?","Il faut prendre rendez-vous ?"],["Could you fill in this form, please?","Vous pouvez remplir ce formulaire, s'il vous plaît ?"],["Sign here, at the bottom of the page.","Signez ici, en bas de la page."],["You'll need proof of address.","Il vous faudra un justificatif de domicile."],["Your card will be sent by post.","Votre carte vous sera envoyée par la poste."],["My application has been accepted.","Mon dossier a été accepté."],["The form must be completed in block capitals.","Le formulaire doit être rempli en majuscules."]],
  dia:[["Clerk","Good morning. How can I help?"],["You","I'd like to open a current account."],["Clerk","Of course. Have you brought your passport and proof of address?"],["You","Yes, here they are. Is a phone bill OK?"],["Clerk","That's fine. Please fill in this form and sign it at the bottom."],["You","When will I get my card?"],["Clerk","It will be sent to your home address within a week. Your PIN is sent separately."]],
  g:{t:"Le passif des démarches", r:"Les documents officiels adorent le passif : be au bon temps + participe passé. On l'emploie quand l'action compte plus que celui qui la fait. Présent : is sent. Futur : will be sent. Avec un modal : must be signed. Present perfect : has been accepted.", ex:["Your card will be sent by post.","The form must be signed.","Your account has been opened."], skill:"passive"},
  tr:[["I have to fill a form","I have to fill in a form","Fill tout seul, c'est remplir un récipient. Pour un formulaire : fill in (UK) ou fill out (US)."],["The form must be sign","The form must be signed","Passif : be + participe passé, donc signed avec -ed."],["My card was stolen, I want to oppose it","My card was stolen, I want to cancel it","Faire opposition ne se dit pas oppose : on dit cancel ou block a card."]],
  task:[["Je voudrais prendre rendez-vous avec un conseiller.","I'd like to make an appointment with an adviser."],["Mon dossier a été refusé.","My application has been rejected."],["Le formulaire doit être signé.","The form must be signed."]]},
 {id:"tech", theme:"Tech", t:"Téléphone, ordi et internet", situ:"Expliquer un problème, se connecter au wifi, changer un mot de passe.",
  ph:[["What's the wifi password?","C'est quoi le mot de passe du wifi ?"],["My phone keeps crashing.","Mon téléphone n'arrête pas de planter."],["Have you tried turning it off and on again?","Tu as essayé de l'éteindre et de le rallumer ?"],["I can't log in to my account.","Je n'arrive pas à me connecter à mon compte."],["I've forgotten my password.","J'ai oublié mon mot de passe."],["My battery is about to die.","Ma batterie est presque à plat."],["Can I plug my charger in here?","Je peux brancher mon chargeur ici ?"],["You need to download the latest update.","Il faut télécharger la dernière mise à jour."]],
  dia:[["A","My laptop keeps freezing. I can't work like this."],["B","Have you tried turning it off and on again?"],["A","Yes, twice. It still freezes when I open the app."],["B","Maybe you need to update it. Have you backed up your files?"],["A","No. How do I back them up?"],["B","Plug this drive in and I'll show you."]],
  g:{t:"Les phrasal verbs de la technologie", r:"La technologie parle en phrasal verbs : log in, back up, turn off, plug in, set up. Le petit mot fait partie du sens. Avec un pronom (it, them), il se place après le pronom : turn it off, plug it in, jamais turn off it.", ex:["Turn it off and on again.","Log in with your email address.","Back up your files."], skill:"particles"},
  tr:[["I can't connect me","I can't log in","Se connecter à un compte = log in, sans « me ». Au wifi : connect to the wifi."],["Turn off it","Turn it off","Avec un pronom, le petit mot passe après : turn it off."],["My portable is broken","My phone is broken","Un portable = a mobile ou a phone. En anglais, portable est un adjectif (transportable)."]],
  task:[["Tu peux me donner le mot de passe du wifi ?","Can you give me the wifi password?"],["Éteins-le et rallume-le.","Turn it off and on again."],["J'ai sauvegardé mes photos hier.","I backed up my photos yesterday."]]},
 {id:"emergency", theme:"Emergency", t:"Urgences", situ:"Signaler une perte ou un vol, décrire un accident, appeler à l'aide.",
  ph:[["Help! Call an ambulance!","Au secours ! Appelez une ambulance !"],["My wallet has been stolen.","On m'a volé mon portefeuille."],["I was walking to the station when someone grabbed my bag.","J'allais à la gare quand quelqu'un m'a arraché mon sac."],["I've lost my passport.","J'ai perdu mon passeport."],["Where's the nearest police station?","Où est le commissariat le plus proche ?"],["Is anyone hurt?","Il y a des blessés ?"],["He's unconscious, but he's breathing.","Il est inconscient, mais il respire."],["In the UK, the emergency number is 999.","Au Royaume-Uni, le numéro d'urgence est le 999."]],
  dia:[["Officer","What happened?"],["You","I was sitting outside a café when a man took my phone."],["Officer","What was he wearing?"],["You","A black jacket. He was running towards the station."],["Officer","Did anyone see it?"],["You","Yes, a woman was standing next to me. She saw everything."],["Officer","OK. We'll need a statement for your insurance."]],
  g:{t:"Raconter : past continuous et past simple", r:"Pour raconter un incident : l'action de fond, en cours, au past continuous (was / were + -ing) ; l'événement soudain qui l'interrompt, au past simple. While introduit souvent l'action longue, when l'action courte.", ex:["I was walking home when it happened.","While I was paying, someone took my bag.","What were you doing when the fire started?"], skill:"while"},
  tr:[["They stole me my wallet","Someone stole my wallet","Steal ne prend pas de « me » : someone stole my wallet, ou my wallet was stolen."],["I walked when he fell","I was walking when he fell","L'action en cours, le fond de la scène, se met au past continuous."],["I have lost my bag yesterday","I lost my bag yesterday","Avec yesterday, c'est le past simple."]],
  task:[["On m'a volé mon téléphone dans le métro.","My phone was stolen on the underground."],["Je traversais la rue quand la voiture m'a percuté.","I was crossing the street when the car hit me."],["Appelez la police, s'il vous plaît !","Please call the police!"]]},
 {id:"culture", theme:"Culture", t:"Films, séries, livres et musique", situ:"Donner ton avis, comparer et recommander une œuvre.",
  ph:[["Have you seen the new series everyone's talking about?","Tu as vu la nouvelle série dont tout le monde parle ?"],["It's much better than the first season.","C'est beaucoup mieux que la première saison."],["It's the funniest film I've seen this year.","C'est le film le plus drôle que j'ai vu cette année."],["The book is better than the film, as usual.","Le livre est meilleur que le film, comme d'habitude."],["It's not as good as everyone says.","Ce n'est pas aussi bien que tout le monde le dit."],["No spoilers, please!","Pas de spoilers, s'il te plaît !"],["I couldn't put it down.","Je n'arrivais pas à le lâcher."],["You should definitely watch it.","Tu devrais vraiment le regarder."]],
  dia:[["A","Have you seen the new series everyone's talking about?"],["B","Yes, I binge-watched it at the weekend. It's brilliant."],["A","Better than the first season?"],["B","Much better. The plot is more gripping and the ending is crazy."],["A","Don't tell me! No spoilers."],["B","OK, OK. But honestly, it's the best thing I've watched this year."]],
  g:{t:"Comparer pour donner son avis", r:"Mot court : -er than et the -est (funnier than, the funniest). Mot long : more … than et the most (more gripping than, the most boring). Irréguliers : good, better, the best ; bad, worse, the worst. Pour dire « aussi… que » : as … as ; « moins… que » : not as … as.", ex:["The book is better than the film.","It's the most boring album I've ever heard.","It's not as funny as the first one."], skill:"compar"},
  tr:[["It's more better than the film","It's much better than the film","Better est déjà un comparatif : pas de more devant. Pour insister : much better."],["The more funny film of the year","The funniest film of the year","Funny est un mot court : the funniest, et le y devient i."],["I recommend you this book","I recommend this book","Recommend ne se construit pas comme en français : I recommend this book (to you), jamais recommend you something."]],
  task:[["Ce roman est plus captivant que le précédent.","This novel is more gripping than the last one."],["C'est la pire série que j'aie jamais vue.","It's the worst series I've ever seen."],["Le film n'est pas aussi bon que le livre.","The film isn't as good as the book."]]}
);

// ───────── Words by level ─────────
P.words.Intro = [
 ["nice to meet you","enchanté","Réponse habituelle : « Nice to meet you too ». En partant, on dit plutôt « Nice meeting you ».","A1"],
 ["hobby","passe-temps, loisir","Pluriel : hobbies. À l'oral, on demande souvent « What do you do for fun? ».","A1"],
 ["nationality","nationalité","Les nationalités prennent une majuscule en anglais : French, British, Spanish.","A1"],
 ["where are you from","tu viens d'où","La préposition from reste à la fin. Réponse : « I'm from Lyon ».","A1"],
 ["full name","nom complet","Sur un formulaire, « full name » demande le prénom et le nom de famille.","A1"],
 ["be from","venir de, être originaire de","« She's from Canada » est la forme la plus courante. « She comes from Canada » existe aussi.","A1"],
 ["see you soon","à bientôt","Plus familier : « See you! » ou « See you later! », même si on ne se revoit pas le jour même.","A1"],
 ["hometown","ville natale, ville d'origine","La ville où on a grandi : « My hometown is a small village near Lyon ».","A2"],
 ["introduce","présenter (quelqu'un)","« Let me introduce you to Sam » : je te présente Sam. Présenter à = introduce TO.","A2"],
 ["spare time","temps libre","« In my spare time, I paint » : pendant mon temps libre. On dit aussi « free time ».","A2"],
 ["nickname","surnom","Ne le confonds pas avec « surname », qui est le nom de famille.","A2"],
 ["pleased to meet you","ravi de vous rencontrer","Un peu plus poli que « Nice to meet you », utile dans un cadre professionnel.","A2"],
 ["retired","à la retraite, retraité","Avec BE : « My dad is retired ». Partir à la retraite = retire.","A2"],
 ["shy","timide","Le contraire : outgoing (sociable). Comparatif : shyer.","A2"],
 ["stranger","inconnu","Faux ami : un étranger (d'un autre pays) se dit foreigner. « Don't talk to strangers ».","A2"],
 ["shake hands","se serrer la main","« We shook hands » : shake, shook, shaken.","A2"],
 ["what do you do","tu fais quoi dans la vie","Cette question porte sur le métier. Pour l'activité du moment : « What are you doing? ».","A2"],
 ["how do you do","enchanté (très formel)","Ce n'est pas une vraie question : on répond par la même formule, « How do you do? ».","B1"],
 ["freelance","indépendant, en freelance","« I work freelance » ou « I'm a freelancer ». Le mot sert d'adjectif et d'adverbe.","B1"],
 ["background","parcours, milieu, origines","« What's your background? » peut porter sur les études, le métier ou les origines.","B1"],
 ["get to know","apprendre à connaître","« I'd like to get to know you better ». Connaître déjà quelqu'un = know.","B1"],
 ["small talk","bavardage, conversation légère","La météo, le week-end, les transports : en anglais, le small talk précède presque toujours les sujets sérieux.","B1"],
 ["mutual friend","ami commun","« We met through a mutual friend » : on s'est rencontrés par un ami commun.","B1"],
 ["outgoing","sociable, ouvert","Décrit quelqu'un qui va facilement vers les autres. Contraire : shy ou reserved.","B1"],
 ["easy-going","facile à vivre, décontracté","Avec un trait d'union devant un nom : « an easy-going person ».","B1"],
 ["bilingual","bilingue","Sur le même modèle : trilingual (trilingue), multilingual.","B1"],
 ["be into","être fan de, adorer","« I'm really into jazz » : familier et très courant. Suivi d'un nom ou d'un verbe en -ing.","B1"],
 ["originally","à l'origine, d'origine","« I'm originally from Nantes, but I live in Paris now ».","B1"],
 ["first impression","première impression","On fait (make) une impression : « She made a good first impression ».","B1"],
 ["in common","en commun","« We have a lot in common » : on a beaucoup de points communs.","B1"],
 ["icebreaker","question ou jeu pour briser la glace","Une activité au début d'une réunion ou d'une soirée pour détendre l'atmosphère.","B2"],
 ["hit it off","bien s'entendre tout de suite","« We hit it off straight away » : le courant est passé tout de suite. Hit, hit, hit.","B2"],
 ["down-to-earth","simple, les pieds sur terre","Un compliment : quelqu'un de réaliste et sans prétention.","B2"],
 ["keen on","passionné par, fan de","« I'm keen on hiking » : toujours suivi de ON, puis d'un nom ou d'un verbe en -ing.","B2"],
 ["break the ice","briser la glace","« A joke is a good way to break the ice ». Même image qu'en français.","B2"],
 ["strike up a conversation","engager la conversation","Strike up = lancer, souvent avec un inconnu : « He struck up a conversation on the train ».","C1"],
 ["rapport","bon contact, entente","Faux ami : un rapport écrit = a report. « Build rapport with a client » : créer un lien de confiance.","C1"],
 ["kindred spirit","âme sœur (en amitié)","Une personne qui partage tes goûts et ta façon de voir les choses.","C1"],
 ["come across as","donner l'impression d'être","« She comes across as shy, but she's very funny » : elle a l'air timide.","C1"],
 ["first-name terms","s'appeler par son prénom","« We're on first-name terms » : l'équivalent du tutoiement, puisque l'anglais n'a pas de vous.","C1"]
];
P.words.Hotel = [
 ["reception","réception, accueil","« Ask at reception » : sans article, comme « à l'accueil ».","A1"],
 ["lift","ascenseur","Lift en britannique, elevator en américain. « Give someone a lift » = déposer quelqu'un en voiture.","A1"],
 ["room number","numéro de chambre","« What's your room number? » On répond chiffre par chiffre : « three-one-two ».","A1"],
 ["key card","carte-clé","On la passe devant la porte. Si elle ne marche plus : « My key card doesn't work ».","A2"],
 ["per night","par nuit","« It's ninety pounds per night », ou plus familier : « ninety pounds a night ».","A2"],
 ["breakfast included","petit-déjeuner compris","« Is breakfast included? » : pas d'article devant breakfast.","A2"],
 ["front desk","réception, comptoir d'accueil","Surtout en américain ; les Britanniques disent plus souvent reception.","A2"],
 ["hair dryer","sèche-cheveux","Dry = sécher, donc dryer = ce qui sèche. « Is there a hair dryer in the room? ».","A2"],
 ["sheets","draps","Au singulier, a sheet : un drap, ou une feuille de papier.","A2"],
 ["minibar","minibar","Ce que tu y prends est ajouté à ta note au moment de partir.","A2"],
 ["safe","coffre-fort","Comme adjectif, safe veut dire « en sécurité ». « Put your passport in the safe ».","A2"],
 ["twin room","chambre à deux lits","À ne pas confondre avec double room, qui a un seul grand lit.","A2"],
 ["do not disturb","ne pas déranger","La pancarte à accrocher à la poignée. À l'oral : « Please don't disturb me ».","A2"],
 ["view","vue","« A room with a view » : une chambre avec vue. Vue sur la mer = a sea view.","A2"],
 ["stay","séjour ; rester, loger","« Enjoy your stay! » : bon séjour. Loger à l'hôtel = stay at a hotel.","A2"],
 ["room service","service en chambre","On commande un repas qui est monté dans la chambre.","B1"],
 ["fully booked","complet","« Sorry, we're fully booked tonight » : il ne reste plus de chambre.","B1"],
 ["vacancy","chambre libre","Faux ami : rien à voir avec les vacances (holiday). « No vacancies » = complet.","B1"],
 ["wake-up call","réveil téléphonique","« Could I have a wake-up call at six? » Au figuré : un signal d'alarme.","B1"],
 ["housekeeping","service d'étage, ménage","Le personnel qui fait les chambres. On l'annonce en frappant : « Housekeeping! ».","B1"],
 ["late checkout","départ tardif","« Is a late checkout possible? » : garder la chambre après l'heure prévue, parfois contre un supplément.","B1"],
 ["out of order","en panne, hors service","Pour une machine ou un ascenseur : « The lift is out of order ».","B1"],
 ["porter","bagagiste, porteur","Celui qui monte tes valises. On lui laisse souvent un pourboire (a tip).","B1"],
 ["lobby","hall d'entrée","« I'll meet you in the lobby » : on se retrouve dans le hall.","B1"],
 ["bed and breakfast","chambre d'hôtes","Souvent abrégé en B&B : une chambre chez l'habitant, petit-déjeuner compris.","B1"],
 ["complimentary","offert, gratuit","Faux ami : rien à voir avec complémentaire. « Complimentary drinks » = boissons offertes.","B2"],
 ["amenities","équipements, services","Piscine, salle de sport, spa : tout ce que l'hôtel met à disposition.","B2"],
 ["cancellation policy","conditions d'annulation","À lire avant de réserver : « What's your cancellation policy? ».","B2"],
 ["full board","pension complète","Les trois repas sont compris. La demi-pension = half board.","B2"],
 ["concierge","concierge d'hôtel","Dans un hôtel, il réserve un restaurant ou un taxi pour toi : ce n'est pas le gardien d'immeuble.","B2"],
 ["left luggage","consigne à bagages","« Is there a left luggage room? » En américain : baggage room.","B2"],
 ["toiletries","produits de toilette","Shampoing, savon, gel douche : « The toiletries are complimentary ».","B2"],
 ["incidental charges","frais annexes","Minibar, room service, parking : ce qui s'ajoute au prix de la chambre.","C1"],
 ["lodge a complaint","déposer une réclamation","Plus formel que « make a complaint ». Lodge = déposer officiellement.","C1"],
 ["hospitality","hôtellerie, accueil, hospitalité","« The hospitality industry » : l'hôtellerie-restauration.","C1"],
 ["no-show","client qui ne se présente pas","Il a réservé mais ne vient pas : la première nuit est souvent facturée quand même.","C1"],
 ["accommodating","arrangeant, serviable","« The staff were very accommodating » : le personnel s'est adapté à nos demandes. Deux c, deux m.","C1"]
];
P.words.Party = [
 ["party","fête, soirée","Faire une fête = have a party ou throw a party. Aller à une fête = go to a party.","A1"],
 ["birthday","anniversaire","Pour l'anniversaire d'un événement (un mariage) : anniversary. « Happy birthday! ».","A1"],
 ["bar","bar","« Let's meet at the bar » peut désigner l'établissement ou le comptoir.","A1"],
 ["cheers","santé ; merci","On trinque avec « Cheers! ». Au Royaume-Uni, cheers veut aussi dire merci.","A1"],
 ["fun","amusant ; amusement","« It was fun! » : c'était sympa. Funny, lui, veut dire drôle.","A1"],
 ["pub","pub","Au Royaume-Uni, on commande au comptoir et on paie tout de suite.","A1"],
 ["next time","la prochaine fois","« Maybe next time! » : une façon gentille de refuser une invitation.","A1"],
 ["invite","inviter","« She invited me to her party » : inviter à = invite TO.","A2"],
 ["go out","sortir","Sortir le soir : go out. Sortir avec quelqu'un, en couple : go out with someone.","A2"],
 ["nightclub","boîte de nuit","À l'oral, souvent juste « a club » : « Shall we go to a club? ».","A2"],
 ["snacks","amuse-gueules, grignotage","Chips, cacahuètes, petits gâteaux : « I'll bring some snacks ».","A2"],
 ["invitation","invitation","Plus formel que le nom familier « an invite », qu'on entend aussi.","A2"],
 ["plans","projets, programme","« Have you got any plans for tonight? » : tu fais quelque chose ce soir ?","A2"],
 ["sounds good","ça marche, bonne idée","Pour accepter une proposition. Variante : « Sounds great! ».","A2"],
 ["guest list","liste des invités","« Is my name on the guest list? » Dans un club, la liste permet d'entrer sans faire la queue.","B1"],
 ["round","tournée","« It's my round » : c'est ma tournée. Au pub, chacun paie une tournée à son tour.","B1"],
 ["hangover","gueule de bois","« I've got a terrible hangover » : avec have got, comme une maladie.","B1"],
 ["dress code","code vestimentaire","« Is there a dress code? » : y a-t-il une tenue exigée ?","B1"],
 ["house party","fête à la maison","Une fête chez quelqu'un, par opposition à une soirée dans un bar.","B1"],
 ["housewarming","pendaison de crémaillère","« We're having a housewarming party on Saturday ».","B1"],
 ["chill","se détendre, se poser","Très familier : « Let's just chill at home tonight ». On dit aussi chill out.","B1"],
 ["make it","pouvoir venir, réussir à venir","« Sorry, I can't make it » : je ne peux pas venir. « Can you make it at eight? ».","B1"],
 ["count me in","je suis partant, compte sur moi","Pour accepter avec enthousiasme. Le contraire : « Count me out ».","B1"],
 ["toast","toast (qu'on porte)","« Let's make a toast to Lucy! » ou « Let's drink to Lucy! ». Toast désigne aussi le pain grillé.","B1"],
 ["tipsy","pompette, éméché","Un peu ivre, pas complètement : « I was a bit tipsy ». Ivre = drunk.","B2"],
 ["bouncer","videur","Celui qui filtre l'entrée d'une boîte de nuit. Bounce = rebondir, ou mettre dehors.","B2"],
 ["rain check","partie remise","« Can I take a rain check? » : on remet ça ? Vient du baseball, quand un match était annulé pour la pluie.","B2"],
 ["be up for","être partant pour","« Are you up for a drink after work? » Réponse : « I'm up for it! ».","B2"],
 ["pub crawl","tournée des bars","On passe d'un pub à l'autre dans la même soirée. Crawl = ramper.","B2"],
 ["RSVP","répondre à une invitation","Vient du français « répondez s'il vous plaît ». « Please RSVP by Friday ».","B2"],
 ["bail on","lâcher, poser un lapin à","Familier : « He bailed on us at the last minute » : il nous a lâchés au dernier moment.","C1"],
 ["party animal","fêtard","Quelqu'un qui adore faire la fête et ne rate aucune soirée.","C1"],
 ["designated driver","capitaine de soirée","La personne qui ne boit pas pour ramener les autres en voiture.","C1"],
 ["buzzing","animé, plein d'ambiance","« The bar was buzzing » : le bar était bondé et plein d'énergie.","C1"],
 ["wallflower","personne qui fait tapisserie","Quelqu'un de timide qui reste dans son coin pendant une soirée.","C1"],
 ["gatecrash","s'incruster (à une fête)","Venir à une fête sans être invité. La personne : a gatecrasher.","C1"]
];
P.words.Interview = [
 ["nervous","stressé, nerveux","« I'm nervous about the interview » : j'ai le trac. Rien à voir avec la colère.","A1"],
 ["on time","à l'heure","« Be on time! » In time = à temps, juste avant qu'il soit trop tard.","A1"],
 ["experience","expérience","Au sens de compétences, indénombrable : « a lot of experience », jamais « experiences ».","A2"],
 ["apply","postuler, poser sa candidature","Postuler à un poste = apply FOR a job ; auprès d'une entreprise = apply TO a company.","A2"],
 ["strength","point fort","« What are your strengths? » Attention au « th » final : strength.","A2"],
 ["weakness","point faible","La question piège classique : « What's your greatest weakness? ».","A2"],
 ["degree","diplôme universitaire","« I have a degree in history » : diplômé en = a degree IN. Degree veut aussi dire degré.","A2"],
 ["handshake","poignée de main","« A firm handshake » : une poignée de main ferme.","A2"],
 ["job advert","offre d'emploi (annonce)","Abrégé en « job ad ». Répondre à une annonce = reply to an advert.","A2"],
 ["candidate","candidat","Pour un poste comme pour une élection. « The ideal candidate is… ».","A2"],
 ["motivated","motivé","« I'm highly motivated » : une formule classique en entretien.","A2"],
 ["hard-working","travailleur","Avec un trait d'union devant un nom : « a hard-working person ».","A2"],
 ["teamwork","travail d'équipe","Un seul mot, indénombrable : « I'm good at teamwork ».","A2"],
 ["start date","date de début, date d'embauche","« What would be the start date? » : quand est-ce que je commencerais ?","A2"],
 ["employer","employeur","Le suffixe -er désigne celui qui emploie ; l'employé, c'est employee (-ee).","A2"],
 ["interviewer","recruteur (pendant l'entretien)","La personne qui fait passer l'entretien ; celle qui le passe est l'interviewee.","A2"],
 ["cover letter","lettre de motivation","En britannique, on dit aussi « covering letter ».","B1"],
 ["reference","référence","« Can you provide two references? » : deux personnes qui peuvent parler de ton travail.","B1"],
 ["position","poste","Plus formel que job : « I'm applying for the position of designer ».","B1"],
 ["trial period","période d'essai","Dans les contrats, on dit aussi probation.","B1"],
 ["recruiter","recruteur","Celui qui cherche des candidats, souvent pour un cabinet de recrutement.","B1"],
 ["qualified","qualifié, diplômé","« She's qualified for the job » : elle a le profil. Diplômé en = qualified in.","B1"],
 ["permanent contract","CDI","Contrat à durée indéterminée. Le CDD = fixed-term contract.","B1"],
 ["reliable","fiable","« I'm reliable » : on peut compter sur moi. Le nom : reliability.","B1"],
 ["tell me about yourself","parlez-moi de vous","La première question de presque tous les entretiens : prépare deux minutes sur ton parcours.","B1"],
 ["dream job","métier de rêve","Le nom dream se place devant, comme un adjectif.","B1"],
 ["job hunting","recherche d'emploi","« I'm job hunting » : je cherche du travail. On dit aussi job seeking.","B1"],
 ["shortlist","liste des candidats retenus","« You've been shortlisted » : tu fais partie des derniers candidats.","B2"],
 ["benefits","avantages sociaux","Mutuelle, tickets-restaurant, voiture : « What benefits do you offer? ».","B2"],
 ["career path","parcours professionnel","Faux ami : career = carrière professionnelle, jamais une carrière de pierre (quarry).","B2"],
 ["headhunter","chasseur de têtes","Celui qui vient te chercher pour un poste. Le verbe : headhunt.","B2"],
 ["fixed-term contract","CDD","Contrat à durée déterminée : fixed-term = à durée fixe.","B2"],
 ["assessment","évaluation","Un « assessment centre » : une journée d'épreuves et de mises en situation.","B2"],
 ["self-starter","personne autonome, qui prend des initiatives","Très apprécié dans les offres d'emploi : quelqu'un qui n'attend pas qu'on lui dise quoi faire.","C1"],
 ["track record","bilan, résultats passés","« She has a proven track record in sales » : ses résultats parlent pour elle.","C1"],
 ["overqualified","surqualifié","Trop diplômé ou trop expérimenté pour le poste proposé.","C1"],
 ["transferable skills","compétences transférables","Ce que tu sais faire et qui sert dans un autre métier : organiser, négocier, rédiger.","C1"]
];
P.words.Admin = [
 ["date of birth","date de naissance","Souvent abrégée DOB sur les formulaires. Au Royaume-Uni, le jour s'écrit avant le mois.","A1"],
 ["ID card","carte d'identité","À l'oral, on dit souvent juste « ID » : « Have you got any ID? ».","A1"],
 ["bank card","carte bancaire","On dit aussi debit card. Une carte de crédit = credit card.","A1"],
 ["phone number","numéro de téléphone","On le dicte chiffre par chiffre ; le zéro se dit souvent « oh ».","A1"],
 ["form","formulaire","Remplir un formulaire = fill in a form (UK) ou fill out a form (US).","A2"],
 ["signature","signature","Signer = sign. « Your signature here, please ».","A2"],
 ["PIN","code (de carte)","Personal Identification Number. On entend souvent « PIN number », même si c'est redondant.","A2"],
 ["fill in","remplir (un formulaire)","Avec un pronom, le petit mot va après : « fill it in ».","A2"],
 ["photocopy","photocopie, photocopier","Nom et verbe à la fois : « Can you photocopy your passport? ».","A2"],
 ["stamp","tampon ; timbre","Le même mot pour le tampon officiel et le timbre-poste.","A2"],
 ["valid","valide, en cours de validité","« Your passport must be valid for six months ». Le contraire : expired.","A2"],
 ["open an account","ouvrir un compte","Fermer un compte = close an account.","A2"],
 ["postcode","code postal","En américain : zip code. Au Royaume-Uni, il mélange lettres et chiffres.","A2"],
 ["online banking","banque en ligne","La gestion de ton compte sur internet ou dans l'appli de ta banque.","A2"],
 ["proof of address","justificatif de domicile","Indénombrable : « You need proof of address », sans article. Une facture fait souvent l'affaire.","B1"],
 ["bank statement","relevé de compte","Statement = déclaration ; un relevé bancaire en est une.","B1"],
 ["overdraft","découvert","Être à découvert = be overdrawn.","B1"],
 ["transfer","virement ; virer","Faire un virement = make a transfer. « Transfer money to someone ».","B1"],
 ["current account","compte courant","En américain : checking account. Current = actuel, courant.","B1"],
 ["savings account","compte épargne","Savings = économies ; save = épargner.","B1"],
 ["loan","prêt","Faire un emprunt = take out a loan. Prêter = lend.","B1"],
 ["paperwork","paperasse, formalités","Indénombrable : « a lot of paperwork ».","B1"],
 ["expired","expiré, périmé","Pour un document : « My passport has expired ». Pour un aliment : out of date.","B1"],
 ["renew","renouveler","« I need to renew my passport ». Le nom : renewal.","B1"],
 ["waiting list","liste d'attente","« You're on the waiting list » : tu es sur la liste d'attente.","B1"],
 ["fee","frais","Ce qu'on paie pour un service : « bank fees ». Pour les études : tuition fees.","B1"],
 ["withdraw","retirer (de l'argent)","Withdraw, withdrew, withdrawn. Un retrait = a withdrawal.","B1"],
 ["clerk","employé (de bureau, de guichet)","Se prononce « clark » au Royaume-Uni et « cleurk » aux États-Unis.","B1"],
 ["balance","solde (d'un compte)","« Check your balance » : consulter son solde. Balance veut aussi dire équilibre.","B1"],
 ["direct debit","prélèvement automatique","Pour les factures : « I pay my rent by direct debit ».","B2"],
 ["standing order","virement permanent","Un virement que tu programmes toi-même, du même montant chaque mois.","B2"],
 ["interest rate","taux d'intérêt","Interest au sens financier : « a low interest rate », un taux bas.","B2"],
 ["tax return","déclaration de revenus","« File a tax return » : remplir sa déclaration d'impôts.","B2"],
 ["residence permit","titre de séjour","Permit = autorisation ; comme nom, l'accent tombe sur PER.","B2"],
 ["block capitals","majuscules d'imprimerie","« Please write in block capitals » : écrivez en majuscules.","B2"],
 ["pending","en attente, en cours","« Your application is pending » : ton dossier est en cours de traitement.","B2"],
 ["joint account","compte joint","Un compte à deux noms, souvent pour un couple.","B2"],
 ["red tape","lourdeurs administratives","Vient du ruban rouge qui liait autrefois les dossiers officiels.","C1"],
 ["bureaucracy","bureaucratie","Plus neutre que red tape. Un bureaucrate = a bureaucrat.","C1"],
 ["certified copy","copie certifiée conforme","Une copie tamponnée par une autorité, qui garantit qu'elle est fidèle à l'original.","C1"],
 ["eligible","éligible, qui a droit à","« You're eligible for a refund » : tu as droit à un remboursement. Suivi de FOR ou de TO.","C1"]
];
P.words.Tech = [
 ["charger","chargeur","« Can I borrow your charger? » Charge = charger une batterie.","A1"],
 ["screen","écran","« The screen is cracked » : l'écran est fissuré.","A1"],
 ["password","mot de passe","Un seul mot. « A strong password » : un mot de passe solide.","A1"],
 ["wifi","wifi","Se prononce « waï-faï ». On l'écrit aussi Wi-Fi.","A1"],
 ["app","application, appli","Abréviation d'application. Télécharger une appli = download an app.","A1"],
 ["keyboard","clavier","Key = touche (et clé). Le clavier anglais est en QWERTY, pas en AZERTY.","A1"],
 ["battery","batterie, pile","« My battery is dead » : ma batterie est à plat. « Low battery » : batterie faible.","A2"],
 ["download","télécharger","Dans l'autre sens, mettre en ligne = upload.","A2"],
 ["log in","se connecter","Verbe en deux mots (log in), nom en un seul (your login). On dit aussi sign in.","A2"],
 ["log out","se déconnecter","On dit aussi sign out. « Don't forget to log out ».","A2"],
 ["username","nom d'utilisateur","Un seul mot. Avec le mot de passe, c'est ton identifiant.","A2"],
 ["update","mise à jour ; mettre à jour","« Install the latest update » ; le verbe : « update the app ».","A2"],
 ["restart","redémarrer","On dit aussi reboot. « Have you tried restarting it? ».","A2"],
 ["settings","réglages, paramètres","Toujours au pluriel pour le menu : « Go to Settings ».","A2"],
 ["signal","réseau (téléphone)","« I've got no signal » : je ne capte pas. On dit aussi « no reception ».","A2"],
 ["plug in","brancher","Avec un pronom : « plug it in ». Le contraire : unplug.","A2"],
 ["screenshot","capture d'écran","Faire une capture d'écran = take a screenshot.","A2"],
 ["upload","mettre en ligne, téléverser","Le contraire de download : on envoie un fichier vers internet.","B1"],
 ["crash","planter","« My computer keeps crashing ». Crash veut aussi dire accident de voiture.","B1"],
 ["freeze","se figer, geler","« The screen froze » : freeze, froze, frozen.","B1"],
 ["backup","sauvegarde","Nom en un mot (a backup), verbe en deux (back up your files).","B1"],
 ["storage","stockage, espace","« I'm running out of storage » : je n'ai presque plus de place.","B1"],
 ["bug","bug, bogue","Au départ, bug veut dire insecte. Un petit défaut passager = a glitch.","B1"],
 ["unplug","débrancher","Au figuré : se déconnecter, faire une pause loin des écrans.","B1"],
 ["hack","pirater","« My account was hacked ». Le pirate : a hacker.","B1"],
 ["glitch","petit bug, problème technique","Un dysfonctionnement passager, souvent sans gravité.","B2"],
 ["troubleshoot","dépanner, diagnostiquer","Chercher la cause d'un problème étape par étape.","B2"],
 ["phishing","hameçonnage","Un faux mail qui imite ta banque pour voler tes identifiants. Se prononce comme fishing.","B2"],
 ["compatible","compatible","« Is this app compatible with my phone? » : avec WITH.","B2"],
 ["malware","logiciel malveillant","Mal- = mauvais, comme dans malicious. Un virus est un type de malware.","B2"],
 ["hotspot","partage de connexion, point d'accès","« Can you turn on your hotspot? » : tu peux partager ta connexion ?","B2"],
 ["two-factor authentication","double authentification","Souvent abrégé en 2FA : un code reçu par SMS en plus du mot de passe.","B2"],
 ["tech-savvy","calé en informatique","Savvy = qui s'y connaît. « My grandma is surprisingly tech-savvy ».","C1"],
 ["lag","décalage, latence","« There's a lag on the video call » : il y a du retard. Jet lag = décalage horaire.","C1"],
 ["bandwidth","bande passante","Au figuré, la disponibilité d'une personne : « I don't have the bandwidth for this ».","C1"],
 ["factory reset","réinitialisation d'usine","Remet l'appareil comme à sa sortie d'usine et efface tout.","C1"],
 ["outage","panne (de réseau, de service)","« A power outage » : une coupure de courant.","C1"]
];
P.words.Emergency = [
 ["help","au secours ; aide, aider","Crié, « Help! » veut dire au secours. Demander de l'aide = ask for help.","A1"],
 ["police","police","Toujours pluriel en anglais : « The police ARE coming ».","A1"],
 ["fire","feu, incendie","Crié, « Fire! » veut dire au feu. Mettre le feu à = set fire to.","A1"],
 ["lost","perdu","« I'm lost » : je suis perdu. Lose, lost, lost.","A1"],
 ["watch out","attention, fais gaffe","Pour prévenir d'un danger immédiat. Plus calme : « Be careful! ».","A1"],
 ["accident","accident","Avoir un accident = have an accident. By accident = par hasard.","A2"],
 ["steal","voler (dérober)","On vole QUELQUE CHOSE : « Someone stole my bag ». Steal, stole, stolen.","A2"],
 ["thief","voleur","Pluriel : thieves.","A2"],
 ["fire brigade","pompiers","En américain : fire department. Un pompier = a firefighter.","A2"],
 ["emergency exit","sortie de secours","Sur les panneaux : « Emergency exit, keep clear ».","A2"],
 ["panic","paniquer ; panique","Au passé, on ajoute un k : panicked. « Don't panic! ».","A2"],
 ["calm down","se calmer","« Calm down, it's OK » : à dire avec douceur, sinon ça peut agacer.","A2"],
 ["dial","composer (un numéro)","« Dial 999 » au Royaume-Uni, 911 aux États-Unis, 112 dans toute l'Europe.","A2"],
 ["emergency number","numéro d'urgence","Le 112 fonctionne dans toute l'Union européenne, même sans carte SIM.","A2"],
 ["bleed","saigner","Bleed, bled, bled. « He's bleeding » : il saigne. Le sang = blood.","B1"],
 ["witness","témoin","« Were there any witnesses? » Verbe : witness an accident, être témoin d'un accident.","B1"],
 ["first aid","premiers secours","« A first aid kit » : une trousse de secours.","B1"],
 ["pickpocket","pickpocket","« Beware of pickpockets » : attention aux pickpockets.","B1"],
 ["insurance","assurance","Indénombrable : « travel insurance ». Être assuré = be insured.","B1"],
 ["lost property","objets trouvés","En américain : lost and found. Littéralement, les biens perdus.","B1"],
 ["rob","voler, dévaliser (quelqu'un, un lieu)","On rob une personne ou une banque, on steal un objet : « I was robbed, they stole my phone ».","B1"],
 ["missing","disparu, manquant","« My bag is missing » ; « a missing person » : une personne disparue.","B1"],
 ["crime","délit, crime","Plus large qu'en français : un vol est aussi a crime. Signaler un délit = report a crime.","B1"],
 ["embassy","ambassade","Pour un passeport perdu à l'étranger. Le consulat = the consulate.","B1"],
 ["break-in","cambriolage (avec effraction)","Le nom a un trait d'union, le verbe non : « Someone broke in ».","B2"],
 ["burglary","cambriolage","Le cambrioleur : a burglar. Cambrioler une maison : burgle (UK) ou burglarize (US).","B2"],
 ["mugged","agressé (pour être volé)","« I was mugged last night » : on m'a agressé pour me voler.","B2"],
 ["unconscious","inconscient, évanoui","Le contraire : conscious. « He's unconscious but breathing ».","B2"],
 ["paramedic","ambulancier, secouriste","Le personnel de l'ambulance, formé aux soins d'urgence.","B2"],
 ["claim","déclaration de sinistre","« Make a claim on your insurance ». Comme verbe, claim veut aussi dire affirmer.","B2"],
 ["suspect","suspect ; soupçonner","Le nom a l'accent sur SUS, le verbe sur PECT.","B2"],
 ["statement","déposition","« Give a statement to the police » : faire une déposition.","B2"],
 ["evacuate","évacuer","Souvent au passif : « The building was evacuated ».","B2"],
 ["CPR","massage cardiaque, RCP","Cardiopulmonary resuscitation : la réanimation cardio-pulmonaire. « Do you know CPR? ».","C1"],
 ["stranded","bloqué, coincé","Sans moyen de repartir : « We were stranded at the airport ».","C1"],
 ["hit-and-run","délit de fuite","Un accident où le conducteur s'enfuit : « a hit-and-run driver ».","C1"],
 ["distress","détresse","« A distress call » : un appel de détresse.","C1"],
 ["casualty","victime, blessé","Une personne blessée ou tuée dans un accident. Au Royaume-Uni, casualty désigne aussi les urgences de l'hôpital.","C1"]
];
P.words.Culture = [
 ["film","film","Film en britannique, movie en américain. Aller au cinéma = go to the cinema ou go to the movies.","A1"],
 ["song","chanson","Chanter une chanson = sing a song.","A1"],
 ["singer","chanteur, chanteuse","Le même mot pour les deux genres.","A1"],
 ["actor","acteur, actrice","Pour une femme, on dit de plus en plus actor ; actress reste courant.","A1"],
 ["concert","concert","Aller à un concert = go to a concert. Plus familier : a gig.","A1"],
 ["funny","drôle","Ne le confonds pas avec fun (amusant à faire). « A funny film » : un film drôle.","A1"],
 ["boring","ennuyeux","Le film est boring ; moi, je suis bored. Même logique pour interesting et interested.","A1"],
 ["series","série","Même forme au singulier et au pluriel : one series, two series.","A2"],
 ["scary","qui fait peur","« A scary film » : un film qui fait peur. Avoir peur = be scared.","A2"],
 ["ending","fin, dénouement","« A happy ending » : une fin heureuse.","A2"],
 ["episode","épisode","« The first episode is a bit slow » : le premier épisode est un peu lent.","A2"],
 ["novel","roman","Faux ami : une nouvelle (texte court) = a short story. Un romancier = a novelist.","A2"],
 ["author","auteur","Pour un livre. Pour une chanson : songwriter.","A2"],
 ["band","groupe (de musique)","« What's your favourite band? » Un groupe d'amis, lui, c'est a group of friends.","A2"],
 ["album","album","Un disque entier. Un morceau = a track.","A2"],
 ["plot","intrigue, histoire","« The plot is hard to follow » : l'intrigue est difficile à suivre.","B1"],
 ["character","personnage","Personnage principal = main character. Character veut aussi dire caractère.","B1"],
 ["spoiler","spoiler, divulgâcheur","« No spoilers! » Le verbe : spoil the ending, gâcher la fin.","B1"],
 ["binge-watch","regarder en rafale","Regarder plusieurs épisodes d'affilée. Binge = excès.","B1"],
 ["soundtrack","bande originale","La musique d'un film : « The soundtrack is amazing ».","B1"],
 ["subtitles","sous-titres","« With English subtitles » : avec des sous-titres en anglais.","B1"],
 ["dubbed","doublé","Le contraire : in the original version, en VO.","B1"],
 ["review","critique","« The film got great reviews » : d'excellentes critiques. Le critique (la personne) = a critic.","B1"],
 ["gig","concert (souvent petit)","Familier : « I went to a gig last night ». Gig veut aussi dire petit boulot.","B1"],
 ["sequel","suite","La suite d'un film ou d'un livre. Ce qui se passe avant : a prequel.","B1"],
 ["streaming","streaming","« A streaming platform » : une plateforme de streaming.","B1"],
 ["masterpiece","chef-d'œuvre","Master = maître, piece = œuvre. En un seul mot.","B2"],
 ["gripping","captivant, prenant","Grip = saisir : une histoire qui te tient. Synonyme : compelling.","B2"],
 ["overrated","surcoté","« That film is so overrated » : il ne mérite pas tous ces éloges.","B2"],
 ["underrated","sous-estimé, méconnu","Le contraire d'overrated : mieux que sa réputation.","B2"],
 ["page-turner","livre qu'on ne lâche pas","Un livre si prenant qu'on tourne les pages sans pouvoir s'arrêter.","B2"],
 ["cliffhanger","fin à suspense","Un épisode qui s'arrête au moment le plus tendu. Littéralement, suspendu à une falaise.","B2"],
 ["plot twist","rebondissement","Un retournement de situation inattendu dans l'histoire.","B2"],
 ["cast","distribution (les acteurs)","« The cast is amazing » : les acteurs sont géniaux.","B2"],
 ["box office","box-office","« It was a box-office hit » : un grand succès en salles.","B2"],
 ["thought-provoking","qui fait réfléchir","Provoke = susciter : une œuvre qui donne à penser.","C1"],
 ["far-fetched","tiré par les cheveux","« The plot is a bit far-fetched » : l'intrigue est peu crédible.","C1"],
 ["highbrow","intellectuel, élitiste","Le contraire : lowbrow, populaire et sans prétention.","C1"],
 ["cult classic","œuvre culte","Une œuvre adorée par un public fidèle, parfois après un échec à sa sortie.","C1"],
 ["acclaimed","salué par la critique","« A critically acclaimed novel » : un roman salué par la critique.","C1"]
];

// ───────── Exercises (the tests of the situations) ─────────
// Intro
add("tobe",
 {th:"Intro", t:"tr", fr:"Je suis française, de Lyon.", a:["I'm French, from Lyon.","I am French, from Lyon.","I'm French and I'm from Lyon.","I'm French. I'm from Lyon.","I'm French, I'm from Lyon.","I'm French and from Lyon."], why:"Je suis = I am, contracté en I'm. Les nationalités prennent une majuscule et ne changent pas au féminin : French."},
 {th:"Intro", t:"gap", fr:"Mes parents sont à la retraite.", s:"My parents ___ retired.", a:["are"], h:"être, au pluriel", why:"Être à la retraite = be retired. Parents est au pluriel, donc are."});
add("articles",
 {th:"Intro", t:"qcm", fr:"Je suis infirmière.", s:"I'm ___ nurse.", o:["a","an","the"], a:0, why:"En anglais, un métier prend toujours a ou an. Nurse commence par un son consonne, donc a."},
 {th:"Intro", t:"gap", fr:"Elle est ingénieure dans une grande entreprise.", s:"She's ___ engineer at a big company.", a:["an"], h:"article devant un son voyelle", why:"Métier = a ou an obligatoire ; engineer commence par un son voyelle, donc an."});
add("questions",
 {th:"Intro", t:"tr", fr:"Tu viens d'où ?", a:["Where are you from?","Where do you come from?"], why:"Avec BE : Where + are + you + from. Avec come, il faut do : Where do you come from? La préposition from reste à la fin."},
 {th:"Intro", t:"qcm", fr:"Qu'est-ce que tu fais dans la vie ?", s:"What ___ you do?", o:["are","do","does","make"], a:1, why:"Avec un verbe ordinaire, l'auxiliaire do passe avant le sujet. What do you do? est LA question pour demander le métier."},
 {th:"Intro", t:"gap", fr:"Qu'est-ce que ta sœur fait pendant son temps libre ?", s:"What ___ your sister do in her spare time?", a:["does"], h:"auxiliaire, 3e personne", why:"Your sister = she : l'auxiliaire est does, et le verbe reste à la base (do)."});
add("does",
 {th:"Intro", t:"gap", fr:"Mon colocataire ne parle pas français.", s:"My flatmate ___ speak French.", a:["doesn't","does not"], h:"négation, he", why:"Négation avec he / she / it : doesn't + verbe à la base, sans -s."});
add("simplecont",
 {th:"Intro", t:"qcm", fr:"J'habite à Paris en ce moment, mais je viens de Nantes.", s:"I ___ in Paris at the moment, but I'm from Nantes.", o:["live","am living","lives","living"], a:1, why:"At the moment, situation temporaire : présent continu. L'origine, elle, ne change pas : I'm from."});
add("havegot",
 {th:"Intro", t:"tr", fr:"J'ai deux frères et une sœur.", a:["I have two brothers and a sister.","I've got two brothers and a sister.","I have got two brothers and a sister.","I have two brothers and one sister.","I've got two brothers and one sister."], why:"Avoir (la famille, ce qu'on possède) = have, ou have got en anglais britannique."});
add("presperf",
 {th:"Intro", t:"tr", fr:"Tu es déjà allé en Angleterre ?", a:["Have you ever been to England?","Have you been to England?","Have you ever been to England before?","Have you been to England before?"], why:"Expérience de vie sans date : present perfect. Aller quelque part et en revenir = been to."});
add("havebeen",
 {th:"Intro", t:"gap", fr:"J'habite ici depuis trois ans.", s:"I ___ here for three years.", a:["have lived","have been living"], h:"live", why:"Depuis + durée, une situation qui dure encore : have lived ou have been living, avec for. Jamais le présent simple."});
add("ingto",
 {th:"Intro", t:"qcm", fr:"J'adore rencontrer de nouvelles personnes.", s:"I enjoy ___ new people.", o:["to meet","meeting","meet","met"], a:1, why:"Après enjoy, le verbe prend -ing."});
add("usedto",
 {th:"Intro", t:"tr", fr:"Avant, j'étais très timide.", a:["I used to be very shy.","I used to be really shy."], why:"Un état passé qui a changé depuis : used to + verbe à la base."});
add("cleft",
 {th:"Intro", t:"gap", fr:"Ce que j'aime le plus, c'est voyager.", s:"___ I love most is travelling.", a:["What"], h:"ce que", why:"Mise en relief : What + sujet + verbe + is… Ce que j'aime = what I love."});

// Hotel
add("thereis",
 {th:"Hotel", t:"gap", fr:"Il y a un ascenseur dans l'hôtel ?", s:"___ a lift in the hotel?", a:["Is there"], h:"question, singulier", why:"Question avec il y a : on inverse, Is there + singulier."},
 {th:"Hotel", t:"qcm", fr:"Il n'y a pas de serviettes dans la salle de bains.", s:"There ___ any towels in the bathroom.", o:["isn't","aren't","hasn't","haven't"], a:1, why:"Towels est au pluriel : there aren't any. Jamais have ou has pour dire il y a."},
 {th:"Hotel", t:"tr", fr:"Il n'y a pas d'eau chaude.", a:["There's no hot water.","There is no hot water.","There isn't any hot water."], why:"Il n'y a pas de = there's no ou there isn't any. Water est indénombrable, donc singulier."});
add("someany",
 {th:"Hotel", t:"qcm", fr:"Il n'y a plus de savon dans la chambre.", s:"There isn't ___ soap left in the room.", o:["some","any","many","a"], a:1, why:"Dans une phrase négative : any. Soap est indénombrable, donc ni a ni many."},
 {th:"Hotel", t:"gap", fr:"Combien de nuits voulez-vous rester ?", s:"How ___ nights would you like to stay?", a:["many"], h:"nights est dénombrable", why:"Combien + dénombrable au pluriel = how many. How much est pour l'indénombrable."});
add("can",
 {th:"Hotel", t:"tr", fr:"Je peux laisser mes bagages ici ?", a:["Can I leave my luggage here?","Can I leave my bags here?","Can I leave my suitcases here?","Could I leave my luggage here?","Could I leave my bags here?","Could I leave my suitcases here?"], why:"Demander la permission : Can I + verbe à la base, sans to. Luggage est indénombrable : pas de -s."},
 {th:"Hotel", t:"qcm", fr:"La climatisation ne marche pas et je n'arrive pas à dormir.", s:"The air conditioning isn't working and I ___ sleep.", o:["can't","don't can","not can","can't to"], a:0, why:"Négation de can : can't, suivi du verbe à la base, sans to et sans do."});
add("articles",
 {th:"Hotel", t:"qcm", fr:"Le petit-déjeuner est compris ?", s:"Is ___ included?", o:["the breakfast","breakfast","a breakfast"], a:1, why:"Les repas pris en général se disent sans article : breakfast, lunch, dinner."});
add("compar",
 {th:"Hotel", t:"qcm", fr:"Vous avez quelque chose de moins cher ?", s:"Do you have anything ___?", o:["more cheap","cheaper","cheapest","more cheaper"], a:1, why:"Cheap est un mot court : cheaper. Jamais more devant un comparatif en -er."});
add("did",
 {th:"Hotel", t:"tr", fr:"Tu as bien dormi ?", a:["Did you sleep well?"], why:"Question au passé : did + verbe à la base (sleep, pas slept)."});
add("passive",
 {th:"Hotel", t:"gap", fr:"La chambre est nettoyée tous les jours.", s:"The room ___ every day.", a:["is cleaned"], h:"clean, au passif", why:"Passif au présent : is + participe passé. On ne dit pas qui nettoie, c'est l'action qui compte."});
add("presperf",
 {th:"Hotel", t:"qcm", fr:"Je viens de réserver une chambre double.", s:"I ___ a double room.", o:["have just booked","just book","booked just","have just book"], a:0, why:"Venir de = have just + participe passé. Just se place entre have et le participe."});
add("cond2",
 {th:"Hotel", t:"tr", fr:"Si la chambre était plus grande, on resterait une nuit de plus.", a:["If the room was bigger, we would stay one more night.","If the room were bigger, we would stay one more night.","If the room was bigger, we would stay another night.","If the room were bigger, we would stay another night.","If the room was bigger, we would stay an extra night.","If the room were bigger, we would stay an extra night."], why:"Situation imaginaire : If + past simple, puis would + base. Were est la forme soignée, was la plus courante à l'oral."});
add("reported",
 {th:"Hotel", t:"gap", fr:"La réceptionniste a dit que le petit-déjeuner était compris.", s:"The receptionist said that breakfast ___ included.", a:["was"], h:"is, rapporté", why:"Discours rapporté après said : on recule d'un temps, is devient was."});
add("modals",
 {th:"Hotel", t:"qcm", fr:"Je ne trouve pas ma carte-clé. J'ai dû la laisser dans la chambre.", s:"I can't find my key card. I ___ it in the room.", o:["must have left","must leave","can't have left","should leave"], a:0, why:"Déduction presque sûre sur le passé : must have + participe passé."});

// Party
add("shall",
 {th:"Party", t:"tr", fr:"On sort ce soir ?", a:["Shall we go out tonight?","Shall we go out this evening?"], why:"Proposer de faire quelque chose ensemble : Shall we + verbe à la base."},
 {th:"Party", t:"gap", fr:"J'apporte des chips ?", s:"___ I bring some crisps?", a:["Shall"], h:"proposer ton aide", why:"Pour proposer ton aide : Shall I + verbe à la base."},
 {th:"Party", t:"qcm", fr:"On se retrouve devant le bar ?", s:"Shall we ___ outside the bar?", o:["meet","to meet","meeting","meets"], a:0, why:"Après shall, le verbe reste à la base : pas de to, pas de -ing, pas de -s."});
add("future",
 {th:"Party", t:"qcm", fr:"Je fais une fête samedi, c'est déjà organisé.", s:"I ___ a party on Saturday.", o:["will have","am having","have","had"], a:1, why:"Un projet déjà organisé : présent continu (ou going to). Will sert à décider sur le moment."},
 {th:"Party", t:"tr", fr:"Je crois que je vais rester à la maison ce soir.", a:["I think I'll stay at home tonight.","I think I'll stay home tonight.","I think I'll stay in tonight."], why:"Après I think, pour une décision prise sur le moment : will."});
add("can",
 {th:"Party", t:"gap", fr:"Désolé, je ne peux pas venir vendredi.", s:"Sorry, I ___ come on Friday.", a:["can't","cannot"], h:"ne pas pouvoir", why:"Négation de can : can't ou cannot, puis le verbe à la base, sans to."});
add("someany",
 {th:"Party", t:"qcm", fr:"Il reste de la bière ?", s:"Is there ___ beer left?", o:["some","any","many","a"], a:1, why:"Dans une question neutre : any. Beer, au sens de la boisson, est indénombrable."});
add("did",
 {th:"Party", t:"gap", fr:"Tu es allé à la soirée de Tom hier ?", s:"___ you go to Tom's party yesterday?", a:["Did"], h:"question au passé", why:"Question au passé : Did + sujet + verbe à la base (go, pas went)."});
add("simplecont",
 {th:"Party", t:"tr", fr:"Qu'est-ce que tu fais ce soir ?", a:["What are you doing tonight?","What are you doing this evening?"], why:"Pour un projet proche, déjà prévu : présent continu. « What do you do » demanderait ton métier."});
add("particles",
 {th:"Party", t:"gap", fr:"Tu veux traîner avec nous samedi ?", s:"Do you want to hang ___ with us on Saturday?", a:["out"], h:"traîner ensemble", why:"Traîner avec des amis = hang out. Sans out, hang veut dire pendre ou accrocher."});
add("ingto",
 {th:"Party", t:"qcm", fr:"J'ai hâte de te voir samedi !", s:"I'm looking forward to ___ you on Saturday!", o:["see","seeing","to see","saw"], a:1, why:"Look forward to est suivi de -ing : ici, to est une préposition, pas la marque de l'infinitif."});
add("unless",
 {th:"Party", t:"tr", fr:"Je viendrai, sauf si je suis trop fatigué.", a:["I'll come unless I'm too tired.","I'll be there unless I'm too tired."], why:"Sauf si = unless, suivi du présent même pour parler du futur."});
add("usedto",
 {th:"Party", t:"qcm", fr:"Avant, on sortait tous les samedis.", s:"We ___ go out every Saturday.", o:["used to","use to","were used to","got used to"], a:0, why:"Une habitude passée terminée : used to + base. Be used to veut dire être habitué à."});
add("cond2",
 {th:"Party", t:"gap", fr:"Si j'avais plus d'argent, je sortirais plus souvent.", s:"If I ___ more money, I would go out more often.", a:["had"], h:"have, au passé", why:"Situation imaginaire : If + past simple, puis would + base."});
add("rather",
 {th:"Party", t:"gap", fr:"Je préférerais rester à la maison ce soir.", s:"I'd ___ stay in tonight.", a:["rather"], h:"je préférerais", why:"Would rather + verbe à la base, sans to : I'd rather stay."});

// Interview
add("articles",
 {th:"Interview", t:"tr", fr:"Je suis développeur.", a:["I'm a developer.","I am a developer."], why:"Un métier prend toujours a ou an en anglais, contrairement au français."});
add("questions",
 {th:"Interview", t:"qcm", fr:"Pourquoi voulez-vous travailler ici ?", s:"Why ___ you want to work here?", o:["are","do","does","have"], a:1, why:"Mot interrogatif + do + sujet + verbe : Why do you want…?"},
 {th:"Interview", t:"gap", fr:"Combien de personnes travaillent dans votre équipe ?", s:"How many people ___ in your team?", a:["work"], h:"la question porte sur le sujet", why:"Quand la question porte sur le sujet (how many people), pas d'auxiliaire : on garde l'ordre normal."});
add("can",
 {th:"Interview", t:"tr", fr:"Je sais utiliser Photoshop.", a:["I can use Photoshop.","I know how to use Photoshop."], why:"Savoir faire quelque chose = can + verbe à la base. Know how to existe aussi."});
add("did",
 {th:"Interview", t:"gap", fr:"Pourquoi avez-vous quitté votre dernier poste ?", s:"Why ___ you leave your last job?", a:["did"], h:"question au passé", why:"Un départ terminé, dans le passé : did + verbe à la base (leave, pas left)."});
add("compar",
 {th:"Interview", t:"qcm", fr:"Ce poste est plus intéressant que mon travail actuel.", s:"This position is ___ than my current job.", o:["more interesting","interestinger","most interesting","more interestinger"], a:0, why:"Interesting est un mot long : more interesting than."});
add("makedo",
 {th:"Interview", t:"qcm", fr:"J'ai fait une erreur dans mon CV.", s:"I ___ a mistake in my CV.", o:["did","made","had","took"], a:1, why:"Faire une erreur = make a mistake, jamais do."});
add("does",
 {th:"Interview", t:"gap", fr:"Le poste comprend-il des déplacements ?", s:"___ the job involve any travel?", a:["Does"], h:"question, 3e personne", why:"The job = it : question avec Does, et le verbe reste à la base (involve)."});
add("future",
 {th:"Interview", t:"tr", fr:"Je vous enverrai les documents demain.", a:["I'll send you the documents tomorrow.","I'll send the documents to you tomorrow.","I'll send you the files tomorrow."], why:"Une promesse : will + verbe à la base."});
add("presperf",
 {th:"Interview", t:"tr", fr:"Je n'ai jamais encadré d'équipe.", a:["I've never managed a team.","I've never led a team.","I've never run a team."], why:"Expérience de vie sans date : present perfect avec never."},
 {th:"Interview", t:"qcm", fr:"Avez-vous déjà travaillé à l'étranger ?", s:"Have you ever ___ abroad?", o:["work","worked","working","works"], a:1, why:"Have + participe passé : worked."});
add("havebeen",
 {th:"Interview", t:"gap", fr:"Je travaille dans le marketing depuis 2019.", s:"I ___ in marketing since 2019.", a:["have worked","have been working"], h:"work", why:"Depuis + point de départ, une situation qui continue : present perfect (simple ou continu) + since."});
add("ingto",
 {th:"Interview", t:"gap", fr:"J'ai décidé de changer de carrière l'an dernier.", s:"I decided ___ my career last year.", a:["to change"], h:"decide + ?", why:"Après decide, le verbe se met à l'infinitif avec to."});
add("reported",
 {th:"Interview", t:"qcm", fr:"Elle m'a demandé pourquoi je voulais ce poste.", s:"She asked me why I ___ this job.", o:["wanted","did want","do want","want"], a:0, why:"Question rapportée : on recule d'un temps (want devient wanted) et on n'utilise pas d'auxiliaire."});
add("cond2",
 {th:"Interview", t:"tr", fr:"Si vous m'embauchiez, je pourrais commencer en mars.", a:["If you hired me, I could start in March.","If you hired me, I would be able to start in March."], why:"Hypothèse : If + past simple, puis could (ou would be able to) + base."});

// Admin
add("someany",
 {th:"Admin", t:"qcm", fr:"Vous avez besoin d'autres documents ?", s:"Do you need ___ other documents?", o:["some","any","much","a"], a:1, why:"Dans une question neutre : any. Documents est dénombrable, donc pas much."});
add("can",
 {th:"Admin", t:"tr", fr:"Je peux payer par carte ?", a:["Can I pay by card?","Could I pay by card?","Can I pay with a card?","Can I pay with my card?"], why:"Demander la permission : Can I + verbe à la base. Payer par carte = pay by card."});
add("questions",
 {th:"Admin", t:"gap", fr:"Combien ça coûte d'ouvrir un compte ?", s:"How much ___ it cost to open an account?", a:["does"], h:"auxiliaire, it", why:"How much + does + sujet + verbe à la base : How much does it cost?"});
add("havegot",
 {th:"Admin", t:"qcm", fr:"Vous avez une pièce d'identité ?", s:"___ you got any ID?", o:["Do","Have","Are","Has"], a:1, why:"Avec have got, la question se fait en inversant have : Have you got…?"});
add("articles",
 {th:"Admin", t:"gap", fr:"Il me faut une adresse e-mail et un numéro de téléphone.", s:"I need ___ email address and a phone number.", a:["an"], h:"devant un son voyelle", why:"Email commence par un son voyelle : an email address."});
add("did",
 {th:"Admin", t:"tr", fr:"Vous avez reçu ma lettre ?", a:["Did you receive my letter?","Did you get my letter?","Have you received my letter?","Have you got my letter?"], why:"Question au passé : did + verbe à la base (receive, pas received)."});
add("thereis",
 {th:"Admin", t:"qcm", fr:"Il y a beaucoup de monde au guichet.", s:"___ a lot of people at the counter.", o:["There are","There is","It has","They are"], a:0, why:"People est un pluriel : there are."});
add("makedo",
 {th:"Admin", t:"gap", fr:"Je voudrais prendre rendez-vous.", s:"I'd like to ___ an appointment.", a:["make","book"], h:"prendre rendez-vous", why:"Prendre rendez-vous = make an appointment (ou book) : jamais take ni do."});
add("compar",
 {th:"Admin", t:"gap", fr:"Ouvrir un compte en ligne est plus rapide qu'en agence.", s:"Opening an account online is ___ than in a branch.", a:["quicker","faster"], h:"quick", why:"Quick et fast sont des mots courts : quicker ou faster + than."});
add("passive",
 {th:"Admin", t:"tr", fr:"Votre carte sera envoyée par la poste.", a:["Your card will be sent by post.","Your card will be sent by mail.","Your card will be posted.","Your card will be mailed."], why:"Passif au futur : will be + participe passé."},
 {th:"Admin", t:"gap", fr:"Le formulaire doit être signé par les deux titulaires.", s:"The form must ___ by both account holders.", a:["be signed"], h:"sign, au passif", why:"Passif avec un modal : must be + participe passé."},
 {th:"Admin", t:"qcm", fr:"Mon dossier a été refusé.", s:"My application ___.", o:["has been rejected","has rejected","is rejecting","was reject"], a:0, why:"Passif au present perfect : has been + participe passé."});
add("presperf",
 {th:"Admin", t:"gap", fr:"Je n'ai pas encore reçu mon code.", s:"I haven't received my PIN ___.", a:["yet"], h:"pas encore", why:"Pas encore = not… yet, avec le present perfect. Yet se place en fin de phrase."});
add("particles",
 {th:"Admin", t:"qcm", fr:"Remplissez ce formulaire, s'il vous plaît.", s:"Please fill ___ this form.", o:["in","up","on","of"], a:0, why:"Remplir un formulaire = fill in (UK), ou fill out (US). Fill up, c'est remplir un récipient ou un réservoir."});
add("unless",
 {th:"Admin", t:"gap", fr:"Vous ne pouvez pas ouvrir de compte sauf si vous avez un justificatif de domicile.", s:"You can't open an account ___ you have proof of address.", a:["unless"], h:"sauf si", why:"Sauf si, à moins que = unless, suivi du présent."});

// Tech
add("can",
 {th:"Tech", t:"tr", fr:"Je n'arrive pas à me connecter au wifi.", a:["I can't connect to the wifi.","I can't connect to the Wi-Fi.","I can't connect to wifi.","I can't connect to Wi-Fi.","I can't get on the wifi.","I can't get on the Wi-Fi."], why:"Ne pas arriver à = can't + verbe à la base. Se connecter au wifi = connect to the wifi, sans « me »."});
add("simplecont",
 {th:"Tech", t:"qcm", fr:"Attends, je télécharge la mise à jour.", s:"Wait, I ___ the update.", o:["download","am downloading","downloads","downloaded"], a:1, why:"Une action en cours en ce moment : présent continu."});
add("does",
 {th:"Tech", t:"gap", fr:"Cette appli ne marche pas sur mon téléphone.", s:"This app ___ work on my phone.", a:["doesn't","does not"], h:"négation, it", why:"This app = it : doesn't + verbe à la base, sans -s."});
add("did",
 {th:"Tech", t:"tr", fr:"Tu as changé ton mot de passe hier ?", a:["Did you change your password yesterday?"], why:"Avec yesterday, question au past simple : did + verbe à la base."});
add("questions",
 {th:"Tech", t:"qcm", fr:"C'est quoi le mot de passe du wifi ?", s:"What ___ the wifi password?", o:["is","does","do","are"], a:0, why:"Avec BE, pas de do : What is…? Password est singulier."});
add("someany",
 {th:"Tech", t:"gap", fr:"Il n'y a pas de réseau ici.", s:"There isn't ___ signal here.", a:["any"], h:"phrase négative", why:"Dans une phrase négative : any."});
add("compar",
 {th:"Tech", t:"qcm", fr:"Mon nouvel ordi est beaucoup plus rapide que l'ancien.", s:"My new laptop is much ___ than the old one.", o:["faster","more fast","fastest","more faster"], a:0, why:"Fast est un mot court : faster than. Much renforce le comparatif."});
add("future",
 {th:"Tech", t:"tr", fr:"Attends, je t'envoie le lien.", a:["Wait, I'll send you the link.","Hang on, I'll send you the link.","Wait, I'll send the link to you."], why:"Une décision prise sur le moment : will. Le présent français se traduit ici par I'll."});
add("thereis",
 {th:"Tech", t:"tr", fr:"Il y a un problème avec mon compte.", a:["There's a problem with my account.","There is a problem with my account.","There's an issue with my account.","There is an issue with my account."], why:"Il y a + singulier = there is."});
add("particles",
 {th:"Tech", t:"gap", fr:"Éteins-le et rallume-le.", s:"Turn it ___ and on again.", a:["off"], h:"éteindre", why:"Éteindre = turn off, allumer = turn on. Avec it, le petit mot passe après le pronom."},
 {th:"Tech", t:"qcm", fr:"Branche-le ici.", s:"Plug ___ here.", o:["it in","in it","it on","on it"], a:0, why:"Brancher = plug in. Avec un pronom, le petit mot passe après : plug it in."},
 {th:"Tech", t:"tr", fr:"Je n'arrive pas à me connecter à mon compte.", a:["I can't log in to my account.","I can't log into my account.","I can't sign in to my account.","I can't sign into my account.","I can't log on to my account."], why:"Se connecter à un compte = log in (ou sign in) : le petit mot fait partie du verbe."});
add("presperf",
 {th:"Tech", t:"qcm", fr:"J'ai oublié mon mot de passe.", s:"I ___ my password.", o:["have forgotten","forgot have","have forget","am forgetting"], a:0, why:"Le résultat compte maintenant (je ne peux pas me connecter) : have + participe passé, forgotten."});
add("while",
 {th:"Tech", t:"gap", fr:"Mon ordi a planté pendant que j'écrivais un mail.", s:"My computer crashed while I ___ an email.", a:["was writing"], h:"write, action en cours", why:"L'action de fond, interrompue : was + -ing. Le plantage, soudain, est au past simple."});
add("passive",
 {th:"Tech", t:"tr", fr:"Mon compte a été piraté.", a:["My account has been hacked.","My account was hacked."], why:"Passif : be au bon temps + participe passé. On ne sait pas qui l'a fait, c'est l'action qui compte."});

// Emergency
add("can",
 {th:"Emergency", t:"tr", fr:"Vous pouvez m'aider ?", a:["Can you help me?","Could you help me?"], why:"Demander de l'aide : Can you + verbe à la base. Could est un peu plus poli."});
add("did",
 {th:"Emergency", t:"gap", fr:"Vous avez vu qui a pris le sac ?", s:"___ you see who took the bag?", a:["Did"], h:"question au passé", why:"Question au passé : Did + sujet + verbe à la base."},
 {th:"Emergency", t:"qcm", fr:"Il n'a pas vu la voiture.", s:"He didn't ___ the car.", o:["see","saw","seen","sees"], a:0, why:"Après didn't, le verbe revient à la base : see, jamais saw."});
add("questions",
 {th:"Emergency", t:"tr", fr:"Qu'est-ce qui s'est passé ?", a:["What happened?","What's happened?","What has happened?"], why:"La question porte sur le sujet (what) : pas d'auxiliaire did. What happened? et non « What did happen? »."});
add("thereis",
 {th:"Emergency", t:"qcm", fr:"Il y a un hôpital près d'ici ?", s:"___ a hospital near here?", o:["Is there","Are there","Has it","There is"], a:0, why:"Question avec il y a + singulier : Is there…?"});
add("bedo",
 {th:"Emergency", t:"tr", fr:"Elle a froid et elle a peur.", a:["She's cold and scared.","She's cold and she's scared.","She's cold and afraid.","She's cold and she's afraid.","She's cold and frightened.","She's cold and she's frightened."], why:"Avoir froid et avoir peur sont des états : BE + adjectif, jamais have."});
add("simplecont",
 {th:"Emergency", t:"qcm", fr:"Regarde, il saigne !", s:"Look, he ___!", o:["bleeds","is bleeding","bled","bleeding"], a:1, why:"Ce qui se passe sous nos yeux : présent continu, is + -ing."});
add("future",
 {th:"Emergency", t:"gap", fr:"Ne bougez pas, j'appelle une ambulance.", s:"Don't move. ___ call an ambulance.", a:["I'll","I will"], h:"décision immédiate", why:"Décision prise sur le moment : will. Le présent français se traduit par I'll."});
add("compar",
 {th:"Emergency", t:"qcm", fr:"Où est l'hôpital le plus proche ?", s:"Where's the ___ hospital?", o:["nearest","most near","nearer","more nearest"], a:0, why:"Near est un mot court : le superlatif est the nearest."});
add("while",
 {th:"Emergency", t:"tr", fr:"Je marchais dans la rue quand quelqu'un m'a volé mon sac.", a:["I was walking down the street when someone stole my bag.","I was walking in the street when someone stole my bag.","I was walking along the street when someone stole my bag.","I was walking down the street when somebody stole my bag.","I was walking in the street when somebody stole my bag.","I was walking along the street when somebody stole my bag."], why:"Action de fond au past continuous (was walking), événement soudain au past simple (stole)."},
 {th:"Emergency", t:"gap", fr:"Pendant que je payais, quelqu'un m'a pris mon téléphone.", s:"While I ___, someone took my phone.", a:["was paying"], h:"pay, action en cours", why:"Après while, l'action longue au past continuous : was paying."},
 {th:"Emergency", t:"qcm", fr:"Que faisiez-vous quand l'accident est arrivé ?", s:"What ___ you doing when the accident happened?", o:["were","did","was","are"], a:0, why:"Past continuous à la question : were + you + -ing."});
add("passive",
 {th:"Emergency", t:"tr", fr:"Ma voiture a été volée cette nuit.", a:["My car was stolen last night.","My car was stolen during the night.","My car was stolen overnight."], why:"Passif au passé (le moment est précis) : was + participe passé, stolen."});
add("presperf",
 {th:"Emergency", t:"gap", fr:"J'ai perdu mon passeport, donc je ne peux pas rentrer.", s:"I ___ my passport, so I can't go home.", a:["have lost"], h:"lose", why:"Le résultat compte maintenant (je ne peux pas rentrer) : present perfect, have lost."});
add("pastperf",
 {th:"Emergency", t:"qcm", fr:"Quand la police est arrivée, le voleur était déjà parti.", s:"When the police arrived, the thief ___ already left.", o:["had","has","was","did"], a:0, why:"Action passée antérieure à une autre action passée : had + participe passé."});

// Culture
add("compar",
 {th:"Culture", t:"gap", fr:"Le livre est meilleur que le film.", s:"The book is ___ than the film.", a:["better"], h:"good, comparatif", why:"Good est irrégulier : better than."},
 {th:"Culture", t:"qcm", fr:"C'est la série la plus drôle que j'aie jamais vue.", s:"It's the ___ series I've ever seen.", o:["funniest","most funny","funnier","more funny"], a:0, why:"Funny est un mot court : the funniest, et le y devient i."},
 {th:"Culture", t:"tr", fr:"Ce film n'est pas aussi bon que le premier.", a:["This film isn't as good as the first one.","This film isn't as good as the first.","This movie isn't as good as the first one.","This movie isn't as good as the first.","That film isn't as good as the first one.","It isn't as good as the first one."], why:"Pas aussi… que = not as … as. L'adjectif reste à sa forme simple : good."},
 {th:"Culture", t:"qcm", fr:"La fin est encore pire que le début.", s:"The ending is even ___ than the beginning.", o:["worse","worst","badder","more bad"], a:0, why:"Bad est irrégulier : worse (comparatif), the worst (superlatif)."});
add("did",
 {th:"Culture", t:"tr", fr:"Tu as aimé le concert ?", a:["Did you like the concert?","Did you enjoy the concert?","Did you like the gig?","Did you enjoy the gig?"], why:"Un concert terminé : question au past simple, did + verbe à la base."});
add("simplecont",
 {th:"Culture", t:"gap", fr:"En ce moment, je lis un roman de science-fiction.", s:"At the moment, ___ a science-fiction novel.", a:["I'm reading","I am reading"], h:"read, en ce moment", why:"Une activité temporaire, en cours en ce moment : présent continu."});
add("does",
 {th:"Culture", t:"qcm", fr:"Ta sœur écoute quel genre de musique ?", s:"What kind of music ___ your sister listen to?", o:["does","do","is","has"], a:0, why:"Your sister = she : l'auxiliaire est does, et listen reste à la base."});
add("someany",
 {th:"Culture", t:"gap", fr:"Je n'ai pas beaucoup de temps pour lire.", s:"I don't have ___ time to read.", a:["much"], h:"time est indénombrable", why:"Beaucoup de + indénombrable dans une phrase négative : much."});
add("articles",
 {th:"Culture", t:"qcm", fr:"J'adore la musique classique.", s:"I love ___.", o:["the classical music","a classical music","classical music"], a:2, why:"Pour parler d'une chose en général, l'anglais n'emploie pas d'article : I love classical music."});
add("presperf",
 {th:"Culture", t:"tr", fr:"Je n'ai jamais lu ce livre.", a:["I've never read this book.","I've never read that book."], why:"Expérience de vie : present perfect avec never. Read se prononce « red » au participe."});
add("although",
 {th:"Culture", t:"qcm", fr:"Bien que l'histoire soit lente, la fin est géniale.", s:"___ the story is slow, the ending is brilliant.", o:["Although","Even if","Despite","However"], a:0, why:"Bien que (c'est un fait) = although, suivi d'une phrase complète. Despite se construit avec un nom."});
add("cond2",
 {th:"Culture", t:"tr", fr:"À ta place, je regarderais la version originale.", a:["If I were you, I'd watch the original version.","If I was you, I'd watch the original version.","If I were you, I'd watch it in the original version.","If I were you, I'd watch it in the original language.","If I were you, I'd watch the original."], why:"À ta place = If I were you, puis would + base."});
add("ingto",
 {th:"Culture", t:"gap", fr:"J'ai arrêté de regarder la série après deux épisodes.", s:"I stopped ___ the series after two episodes.", a:["watching"], h:"watch", why:"Arrêter de faire = stop + -ing. Stop to watch voudrait dire s'arrêter pour regarder."});
add("passive",
 {th:"Culture", t:"gap", fr:"Le roman a été adapté au cinéma l'an dernier.", s:"The novel ___ into a film last year.", a:["was adapted","was made"], h:"adapt, au passif", why:"Passif au passé (last year) : was + participe passé. On dit aussi be made into a film."});
add("linkers",
 {th:"Culture", t:"qcm", fr:"Malgré les mauvaises critiques, j'ai adoré le film.", s:"___ the bad reviews, I loved the film.", o:["Despite","Although","Despite of","Even though"], a:0, why:"Malgré + nom = despite, jamais « despite of ». Although et even though sont suivis d'une phrase complète."});
})();

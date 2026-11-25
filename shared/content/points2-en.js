// English grammar points added on 2026-11-25 (docs/audit.md R29): the point, its rule, its exercises, its lesson,
// and the words of the everyday phrasal verbs.
(function(){
const P = window.PACKS && window.PACKS.en; if(!P) return;
P.bank = P.bank || {};

P.skills.push(
 {id:"objpron", lvl:"A1", name:"Pronoms : me, him, her, them", ex:"Call me. I like her. Help them.", q:[
  ["Appelle-moi ce soir.",["Call me tonight.","Call me this evening.","Phone me tonight.","Ring me tonight."]],
  ["Je l'aime bien. (elle)",["I like her."]],
  ["Tu peux nous aider ?",["Can you help us?","Could you help us?"]],
  ["Je les vois tous les jours.",["I see them every day."]],
  ["Donne-lui le livre. (à lui)",["Give him the book.","Give the book to him."]]]},
 {id:"placeprep", lvl:"A2", name:"Le lieu : in / on / at, next to, under", ex:"in the box, on the table, at the station", q:[
  ["Les clés sont sur la table.",["The keys are on the table."]],
  ["Il est à la gare.",["He's at the station.","He is at the station."]],
  ["Le chat est sous le lit.",["The cat is under the bed.","The cat's under the bed."]],
  ["J'habite à côté de la boulangerie.",["I live next to the bakery.","I live next door to the bakery.","I live by the bakery."]],
  ["Le lait est dans le frigo.",["The milk is in the fridge.","The milk's in the fridge."]]]},
 {id:"phrasal", lvl:"B1", name:"Phrasal verbs du quotidien", ex:"hang out, find out, run out of, figure out", q:[
  ["On traîne ensemble ce week-end ?",["Shall we hang out this weekend?","Do you want to hang out this weekend?","Let's hang out this weekend.","Want to hang out this weekend?"]],
  ["J'ai découvert la vérité.",["I found out the truth.","I've found out the truth.","I have found out the truth."]],
  ["On n'a plus de café.",["We've run out of coffee.","We have run out of coffee.","We ran out of coffee.","We're out of coffee."]],
  ["Je n'arrive pas à comprendre ce problème.",["I can't figure out this problem.","I can't figure this problem out.","I can't work out this problem.","I can't work this problem out."]],
  ["Elle fait du sport tous les matins.",["She works out every morning."]],
  ["N'hésite pas à me contacter.",["Feel free to reach out to me.","Don't hesitate to reach out to me.","Feel free to reach out.","Don't hesitate to reach out."]]]},
 {id:"toosuch", lvl:"B1", name:"too / enough, so / such", ex:"too hot, old enough, so nice, such a nice day", q:[
  ["Ce café est trop chaud.",["This coffee is too hot.","This coffee's too hot."]],
  ["Il n'est pas assez grand.",["He isn't tall enough.","He's not tall enough.","He is not tall enough."]],
  ["Il fait tellement beau !",["It's so nice!","It's such a nice day!","The weather is so nice!","The weather's so nice!"]],
  ["C'est une fille tellement gentille.",["She's such a nice girl.","She is such a nice girl.","She's such a kind girl.","She is such a kind girl."]],
  ["Nous n'avons pas assez de temps.",["We don't have enough time.","We haven't got enough time.","We have not got enough time.","We do not have enough time."]]]}
);

Object.assign(P.rules, {
 objpron:"Après un verbe ou une préposition, l'anglais prend la forme complément du pronom : ME, YOU, HIM, HER, IT, US, THEM. Elle se place après le verbe, jamais avant comme en français : I love you, call me, give it to her. Pour « lui » ou « leur », on dit him, her ou them, avec ou sans to.",
 placeprep:"IN pour l'intérieur (in the box, in Paris), ON pour une surface (on the table, on the wall), AT pour un point précis ou un lieu où l'on fait quelque chose (at the station, at work, at home). Et pour situer : under (sous), next to (à côté de), between (entre), in front of (devant), behind (derrière), opposite (en face de).",
 phrasal:"Un phrasal verb, c'est un verbe + un petit mot qui change tout le sens : find (trouver), find out (découvrir). Les plus courants au quotidien : hang out (traîner ensemble), miss out on (rater), find out (découvrir), figure out (comprendre, trouver une solution), run out of (ne plus avoir), work out (faire du sport, finir par marcher), reach out (prendre contact), point out (faire remarquer).",
 toosuch:"TOO + adjectif = trop (too hot). Adjectif + ENOUGH = assez (old enough), mais ENOUGH + nom (enough time). SO + adjectif = tellement (so nice). SUCH + a + adjectif + nom = un tel… (such a nice day). Too n'est jamais positif : too good voudrait dire « trop bien pour être vrai »."
});

Object.assign(P.bank, {
objpron: [
 {th:"Family", t:"tr", fr:"Ma grand-mère m'appelle tous les dimanches.", a:["My grandmother calls me every Sunday.","My grandma calls me every Sunday.","My grandmother phones me every Sunday.","My grandma phones me every Sunday."], why:"Me se place après le verbe : calls me. En français, « m' » vient avant, c'est l'inverse."},
 {th:"Work", t:"tr", fr:"Je leur envoie le rapport demain.", a:["I'll send them the report tomorrow.","I will send them the report tomorrow.","I'll send the report to them tomorrow.","I'm sending them the report tomorrow."], why:"Leur se dit them. Il se place après le verbe : send them the report."},
 {th:"Food", t:"tr", fr:"Tu aimes les olives ? Moi, je les adore.", a:["Do you like olives? I love them."], why:"Pour reprendre les olives : them. Pour les choses aussi, pas seulement les personnes."},
 {th:"Party", t:"tr", fr:"Tu viens avec nous ?", a:["Are you coming with us?","Will you come with us?","Do you want to come with us?"], why:"Après une préposition comme with, on prend la forme complément : us, pas we."},
 {th:"Family", t:"gap", fr:"C'est mon frère. Je l'adore.", s:"He's my brother. I love ___.", a:["him"], why:"Ton frère, c'est he comme sujet, him comme complément."},
 {th:"Shopping", t:"gap", fr:"Cette robe ? Je la prends.", s:"This dress? I'll take ___.", a:["it"], why:"Pour une chose : it. Le français dit « la », mais une robe n'a pas de genre en anglais."},
 {th:"Health", t:"gap", fr:"Le médecin lui a donné un sirop. (à elle)", s:"The doctor gave ___ some syrup.", a:["her"], why:"À elle : her. Le même mot sert pour « elle » et « lui » au féminin."},
 {th:"Work", t:"gap", fr:"Tu peux m'envoyer l'adresse ?", s:"Can you send ___ the address?", a:["me"], why:"Me après le verbe : send me. Jamais « send I »."},
 {th:"Climbing", t:"qcm", fr:"Attends-nous en haut !", s:"Wait for ___ at the top!", o:["us","we","our"], a:0, why:"Après for, la forme complément : us. Our, c'est le possessif, notre."},
 {th:"City", t:"qcm", fr:"Je les ai vus au parc.", s:"I saw ___ in the park.", o:["they","them","their"], a:1, why:"Complément du verbe : them. They, c'est le sujet."},
 {th:"Intro", t:"qcm", fr:"Je te présente Paul.", s:"Let me introduce ___ to Paul.", o:["you","your","yours"], a:0, why:"You ne change pas : c'est le même mot comme sujet et comme complément."},
 {th:"Family", t:"qcm", fr:"Ma sœur ? Je lui parle tous les jours.", s:"My sister? I talk to ___ every day.", o:["she","her","hers"], a:1, why:"Après to : her. She, c'est seulement pour le sujet."},
],
placeprep: [
 {th:"Home", t:"tr", fr:"Le tableau est au mur.", a:["The painting is on the wall.","The picture is on the wall.","The painting's on the wall.","The picture's on the wall."], why:"Le mur est une surface : on the wall. Le français dit « au », mais l'anglais voit la surface."},
 {th:"Work", t:"tr", fr:"Je suis au travail.", a:["I'm at work.","I am at work."], why:"Un endroit où l'on fait quelque chose : at work, at school, at home. Sans the."},
 {th:"City", t:"tr", fr:"La banque est en face de la poste.", a:["The bank is opposite the post office.","The bank is across from the post office.","The bank's opposite the post office.","The bank's across from the post office."], why:"En face de : opposite, en anglais britannique. Les Américains disent across from."},
 {th:"Travel", t:"tr", fr:"Mon sac est entre les deux sièges.", a:["My bag is between the two seats.","My bag's between the two seats."], why:"Entre deux choses : between."},
 {th:"Home", t:"gap", fr:"Le chat dort sur le canapé.", s:"The cat is sleeping ___ the sofa.", a:["on"], why:"Le canapé est une surface : on. Pour être enfoncé dedans, on dirait in the armchair."},
 {th:"Food", t:"gap", fr:"Il y a du jus dans le frigo.", s:"There's some juice ___ the fridge.", a:["in"], why:"À l'intérieur de quelque chose : in."},
 {th:"City", t:"gap", fr:"Je t'attends devant le cinéma.", s:"I'll wait for you ___ the cinema.", a:["in front of","outside"], why:"Devant : in front of. Outside, « à l'extérieur de », marche aussi très bien."},
 {th:"Travel", t:"gap", fr:"Nous sommes à l'aéroport.", s:"We're ___ the airport.", a:["at"], why:"Un point sur le trajet, un lieu où l'on fait quelque chose : at the airport."},
 {th:"Home", t:"qcm", fr:"Mes chaussures sont sous le lit.", s:"My shoes are ___ the bed.", o:["under","below","down"], a:0, why:"Sous un objet : under. Below, c'est plutôt « plus bas que »."},
 {th:"City", t:"qcm", fr:"J'habite à Londres.", s:"I live ___ London.", o:["at","in","on"], a:1, why:"Pour une ville ou un pays : in. À Londres, in London."},
 {th:"Restaurant", t:"qcm", fr:"Le serveur est derrière toi.", s:"The waiter is ___ you.", o:["behind","after","back"], a:0, why:"Derrière, dans l'espace : behind. After, c'est « après », dans le temps."},
 {th:"Hotel", t:"qcm", fr:"Notre chambre est au troisième étage.", s:"Our room is ___ the third floor.", o:["in","at","on"], a:2, why:"Pour un étage : on the third floor. On est posé sur l'étage."},
],
phrasal: [
 {th:"Party", t:"tr", fr:"Hier soir, on a traîné au café.", a:["Last night, we hung out at the café.","We hung out at the café last night.","Last night we hung out at the cafe.","We hung out at the cafe last night."], why:"Traîner ensemble : hang out. Au passé, hang devient hung."},
 {th:"Culture", t:"tr", fr:"Ne rate pas ce film, il est génial.", a:["Don't miss out on this film, it's great.","Don't miss out on this movie, it's great.","Don't miss this film, it's great.","Don't miss this movie, it's great."], why:"Rater une bonne occasion : miss out on. Le on vient avant ce qu'on rate."},
 {th:"Work", t:"tr", fr:"Il m'a fait remarquer une erreur.", a:["He pointed out a mistake.","He pointed out a mistake to me.","He pointed a mistake out to me."], why:"Faire remarquer : point out, comme montrer du doigt."},
 {th:"Tech", t:"tr", fr:"J'ai fini par comprendre comment ça marche.", a:["I figured out how it works.","I finally figured out how it works.","I worked out how it works.","I finally worked out how it works."], why:"Comprendre en cherchant : figure out. Work out marche aussi."},
 {th:"Food", t:"gap", fr:"On n'a plus de sel.", s:"We've run ___ of salt.", a:["out"], why:"Ne plus avoir : run out of. Les deux petits mots sont obligatoires."},
 {th:"Family", t:"gap", fr:"Comment tu l'as appris ?", s:"How did you find ___?", a:["out"], why:"Apprendre une nouvelle, découvrir : find out. Find tout seul, c'est trouver un objet."},
 {th:"Health", t:"gap", fr:"Mon frère fait du sport tous les soirs.", s:"My brother works ___ every evening.", a:["out"], why:"Faire du sport, s'entraîner : work out. Très courant à l'oral."},
 {th:"Work", t:"gap", fr:"Si tu as besoin d'aide, contacte-moi.", s:"If you need help, reach ___ to me.", a:["out"], why:"Prendre contact : reach out to. Très utilisé dans les mails pro."},
 {th:"Work", t:"qcm", fr:"Ne t'inquiète pas, ça va s'arranger.", s:"Don't worry, it'll work ___.", o:["out","up","off"], a:0, why:"Finir par marcher, s'arranger : work out."},
 {th:"Party", t:"qcm", fr:"Tu viens traîner avec nous ?", s:"Do you want to ___ out with us?", o:["hang","hung","hanging"], a:0, why:"Après want to, le verbe reste à la base : hang out."},
 {th:"Travel", t:"qcm", fr:"On est tombés en panne d'essence.", s:"We ran out ___ petrol.", o:["of","from","off"], a:0, why:"Run out se construit toujours avec of devant la chose qui manque."},
 {th:"Culture", t:"qcm", fr:"J'ai raté le concert, quel dommage !", s:"I missed ___ on the concert, what a shame!", o:["out","up","off"], a:0, why:"Passer à côté d'une bonne chose : miss out on."},
],
toosuch: [
 {th:"Shopping", t:"tr", fr:"Ce manteau est trop long.", a:["This coat is too long.","This coat's too long."], why:"Trop + adjectif : too long. Too vient avant l'adjectif."},
 {th:"Family", t:"tr", fr:"Ma fille n'est pas assez âgée pour conduire.", a:["My daughter isn't old enough to drive.","My daughter is not old enough to drive.","My daughter's not old enough to drive."], why:"Assez + adjectif : enough se place après, old enough."},
 {th:"Travel", t:"tr", fr:"C'était un si beau voyage !", a:["It was such a beautiful trip!","It was such a lovely trip!","It was such a nice trip!"], why:"Un tel + nom : such a + adjectif + nom. So ne va pas devant un nom."},
 {th:"Weather", t:"tr", fr:"Il fait tellement froid aujourd'hui !", a:["It's so cold today!","It is so cold today!"], why:"Tellement + adjectif seul : so cold."},
 {th:"Food", t:"gap", fr:"Il n'y a pas assez de chaises.", s:"There aren't ___ chairs.", a:["enough"], why:"Devant un nom, enough se place avant : enough chairs."},
 {th:"Work", t:"gap", fr:"J'ai trop de travail.", s:"I have ___ much work.", a:["too"], why:"Trop de, pour ce qui ne se compte pas : too much. Pour ce qui se compte : too many."},
 {th:"Restaurant", t:"gap", fr:"Le repas était tellement bon !", s:"The meal was ___ good!", a:["so"], why:"Tellement + adjectif : so good. Too good voudrait dire « trop bon », avec un problème."},
 {th:"Climbing", t:"gap", fr:"Cette voie est trop difficile pour moi.", s:"This route is ___ difficult for me.", a:["too"], why:"Trop, avec un sens négatif : too difficult. Tu ne peux pas la faire."},
 {th:"Party", t:"qcm", fr:"C'était une fête tellement géniale !", s:"It was ___ a great party!", o:["such","so","too"], a:0, why:"Devant a + nom : such. So ne va qu'avec l'adjectif seul."},
 {th:"Health", t:"qcm", fr:"Tu ne dors pas assez.", s:"You don't sleep ___.", o:["enough","too","so"], a:0, why:"Après un verbe, enough vient tout à la fin : sleep enough."},
 {th:"Shopping", t:"qcm", fr:"C'est trop cher, je ne le prends pas.", s:"It's ___ expensive, I won't take it.", o:["so","too","such"], a:1, why:"Trop, avec un problème à la clé : too expensive."},
 {th:"Home", t:"qcm", fr:"L'appartement est assez grand pour nous deux.", s:"The flat is big ___ for both of us.", o:["enough","too","so"], a:0, why:"Assez + adjectif : enough se met après, big enough."},
]
});

P.lessons = Object.assign(P.lessons || {}, {
objpron:{
 intro:"Appelle-moi, je l'adore, aide-nous : en français, ces petits pronoms se glissent avant le verbe. En anglais, ils ont une forme à eux et ils se placent après le verbe, comme n'importe quel complément.",
 parts:[
  {h:"Les formes", p:"Chaque pronom sujet a sa forme complément. You et it ne changent pas, les autres oui.", rows:[["I","me","je, moi, me"],["he","him","il, lui, le"],["she","her","elle, lui, la"],["we","us","nous"],["they","them","ils, elles, leur, les"]]},
  {h:"Après le verbe", p:"Le pronom complément se place après le verbe, jamais avant : I love you, call me, help them.\n\nC'est l'inverse du français, qui dit « je t'aime »."},
  {h:"Après une préposition", p:"Après with, for, to, about, on prend aussi la forme complément : come with us, this is for her, talk to them.\n\nOn ne dit jamais with we ou for she."}
 ],
 ex:[["Call me tomorrow.","Appelle-moi demain.",""],["I like her a lot.","Je l'aime beaucoup.","her = la"],["Can you help us?","Tu peux nous aider ?",""],["I see them every day.","Je les vois tous les jours.",""],["Give him the keys.","Donne-lui les clés.","him = lui"],["This is for you.","C'est pour toi.","après for"],["Come with us!","Viens avec nous !","après with"]],
 traps:[["I you love.","I love you.","Le pronom complément vient après le verbe."],["Come with we.","Come with us.","Après une préposition, la forme complément."],["I like she.","I like her.","She est sujet, her est complément."]],
 tip:"Sujet avant le verbe, complément après : she calls him, he calls her."
},
placeprep:{
 intro:"Sur la table, au mur, à la gare, dans le frigo : en français, « à » et « sur » couvrent beaucoup de situations. L'anglais, lui, regarde la forme du lieu : un intérieur, une surface ou un point.",
 parts:[
  {h:"In, on, at", p:"In pour l'intérieur, on pour une surface, at pour un point ou un lieu où l'on fait une activité.", rows:[["in","in the box, in Paris, in the car","à l'intérieur"],["on","on the table, on the wall, on the bus","sur une surface"],["at","at the station, at work, at home","un point, une activité"]]},
  {h:"Situer une chose", p:"Pour dire où est une chose par rapport à une autre, voici les mots les plus utiles.", rows:[["under","sous","under the bed"],["next to","à côté de","next to the bank"],["between","entre","between the two chairs"],["in front of","devant","in front of the cinema"],["behind","derrière","behind the door"],["opposite","en face de","opposite the park"]]},
  {h:"Quelques habitudes", p:"On dit on the bus, on the train, on the plane, mais in the car et in a taxi.\n\nOn dit at home, at work, at school, sans the."}
 ],
 ex:[["The keys are on the table.","Les clés sont sur la table.","surface"],["The milk is in the fridge.","Le lait est dans le frigo.","intérieur"],["I'm at the station.","Je suis à la gare.","un point"],["The cat is under the bed.","Le chat est sous le lit.",""],["I live next to a bakery.","J'habite à côté d'une boulangerie.",""],["We're on the bus.","Nous sommes dans le bus.","on the bus"]],
 traps:[["I'm in the work.","I'm at work.","Au travail se dit at work, sans the."],["The picture is in the wall.","The picture is on the wall.","Le mur est une surface : on."],["I'm in the bus.","I'm on the bus.","Pour les transports en commun, on dit on."]],
 tip:"Dedans : in. Dessus : on. Un point sur la carte : at."
},
phrasal:{
 intro:"Traîner avec des amis, découvrir une nouvelle, ne plus avoir de café : l'anglais du quotidien dit tout ça avec un verbe tout simple et un petit mot. Ces phrasal verbs sont partout dans les conversations, les séries et les mails.",
 parts:[
  {h:"Le petit mot change tout", p:"Find, c'est trouver un objet. Find out, c'est découvrir une information.\n\nLe petit mot n'est pas un détail : sans lui, la phrase veut dire autre chose."},
  {h:"Les huit du quotidien", p:"Voici ceux que tu entendras le plus souvent.", rows:[["hang out","traîner ensemble","B1"],["miss out on","passer à côté de","B2"],["find out","découvrir, apprendre","B1"],["figure out","comprendre, trouver une solution","B1"],["run out of","ne plus avoir","B1"],["work out","faire du sport, s'arranger","B1"],["reach out","prendre contact","B2"],["point out","faire remarquer","B1"]]},
  {h:"Où mettre le complément", p:"Avec un nom, il peut aller avant ou après le petit mot : figure out the problem, ou figure the problem out.\n\nAvec un pronom, il va toujours au milieu : figure it out, jamais figure out it."}
 ],
 ex:[["Let's hang out this weekend.","On se voit ce week-end ?","hang out"],["I found out the truth.","J'ai découvert la vérité.","find out"],["We've run out of milk.","On n'a plus de lait.","run out of"],["I can't figure it out.","Je n'arrive pas à comprendre.","pronom au milieu"],["She works out every day.","Elle fait du sport tous les jours.","work out"],["Don't miss out on this offer.","Ne rate pas cette offre.","miss out on"],["Feel free to reach out.","N'hésite pas à me contacter.","reach out"],["He pointed out my mistake.","Il m'a fait remarquer mon erreur.","point out"]],
 traps:[["I can't figure out it.","I can't figure it out.","Un pronom se place entre le verbe et le petit mot."],["We've run out milk.","We've run out of milk.","Run out se construit avec of devant la chose qui manque."],["I found the truth.","I found out the truth.","Pour une information, c'est find out."]],
 tip:"Apprends-les en bloc, avec une phrase : We've run out of milk."
},
toosuch:{
 intro:"Trop chaud, assez grand, tellement beau, une si belle journée : le français fait tout avec trop, assez, si et tellement. L'anglais a quatre petits mots, chacun avec sa place.",
 parts:[
  {h:"Too et enough", p:"Too veut dire trop, et il vient avant l'adjectif : too hot.\n\nEnough veut dire assez. Il vient après l'adjectif (old enough), mais avant le nom (enough time).", rows:[["too + adjectif","too hot","trop chaud"],["adjectif + enough","old enough","assez âgé"],["enough + nom","enough money","assez d'argent"]]},
  {h:"So et such", p:"So et such veulent dire « tellement », pour insister.\n\nSo va avec un adjectif seul. Such va avec un nom, souvent précédé de a.", rows:[["so + adjectif","so nice","tellement sympa"],["such a + adjectif + nom","such a nice day","une si belle journée"],["such + pluriel","such nice people","des gens si sympas"]]},
  {h:"Too n'est pas un compliment", p:"Too annonce toujours un problème : too expensive, je ne peux pas l'acheter.\n\nPour dire que c'est super, on dit so good, jamais too good."}
 ],
 ex:[["This coffee is too hot.","Ce café est trop chaud.","too"],["He's not old enough.","Il n'est pas assez âgé.","adjectif + enough"],["We don't have enough time.","On n'a pas assez de temps.","enough + nom"],["It's so beautiful!","C'est tellement beau !","so"],["It was such a great party!","C'était une fête tellement géniale !","such a"],["They're such kind people.","Ce sont des gens si gentils.","such + pluriel"]],
 traps:[["It's too good!","It's so good!","Too annonce un problème. Pour un compliment, so."],["He's enough old.","He's old enough.","Enough se place après l'adjectif."],["It was so a nice day.","It was such a nice day.","Devant a + nom, c'est such."]],
 tip:"Too pour un problème, so pour le plaisir, such devant un nom."
}
});

// The everyday phrasal verbs join the words of their themes, with their level.
const WORDS = {
 Party:[["hang out","traîner ensemble","« Let's hang out this weekend » : on se voit ce week-end ?","A2"],["miss out on","passer à côté de","« Don't miss out on the party! » : ne rate pas la fête !","B2"]],
 Work:[["figure out","comprendre, trouver une solution","« I'll figure it out » : je vais trouver.","B1"],["reach out","prendre contact","« Feel free to reach out » : n'hésite pas à me contacter.","B2"],["point out","faire remarquer","« He pointed out a mistake » : il a relevé une erreur.","B1"],["work out","s'arranger, finir par marcher","« It'll work out » : ça va s'arranger.","B1"]],
 Culture:[["find out","découvrir, apprendre","« I found out how it ends » : j'ai découvert la fin.","B1"]],
 Health:[["work out","faire du sport","« I work out three times a week. »","B1"]],
 Food:[["run out of","ne plus avoir de","« We've run out of milk » : on n'a plus de lait.","B1"]]
};
Object.keys(WORDS).forEach(t=>{ const list=P.words[t]; if(!list) return; const have=new Set(list.map(w=>w[0])); WORDS[t].forEach(w=>{ if(!have.has(w[0])) list.push(w); }); });
})();

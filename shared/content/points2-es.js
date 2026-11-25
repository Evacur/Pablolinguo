// Spanish grammar points added on 2026-11-25 (docs/audit.md R29): the point, its rule, its exercises and its lesson.
(function(){
const P = window.PACKS && window.PACKS.es; if(!P) return;
P.bank = P.bank || {};

P.skills.push(
 {id:"es_interrogativos", lvl:"A1", name:"Questions : qué, cuál, dónde, cuándo, cuánto", ex:"¿Dónde vives? ¿Cuántos años tienes?", q:[
  ["Où habites-tu ?",["¿Dónde vives?","¿Dónde vives tú?"]],
  ["Comment t'appelles-tu ?",["¿Cómo te llamas?"]],
  ["Combien ça coûte ?",["¿Cuánto cuesta?","¿Cuánto vale?"]],
  ["Quand pars-tu ?",["¿Cuándo te vas?","¿Cuándo sales?"]],
  ["Quel est ton numéro ?",["¿Cuál es tu número?"]]]},
 {id:"es_hora", lvl:"A1", name:"L'heure et la date : es la una, son las dos", ex:"Son las tres y media. Hoy es lunes.", q:[
  ["Il est une heure.",["Es la una."]],
  ["Il est quatre heures et demie.",["Son las cuatro y media."]],
  ["Quelle heure est-il ?",["¿Qué hora es?"]],
  ["Le cours commence à dix heures.",["La clase empieza a las diez."]],
  ["Aujourd'hui, nous sommes mardi.",["Hoy es martes.","Hoy estamos a martes."]]]},
 {id:"es_negacion", lvl:"A2", name:"La négation : no… nada, nadie, nunca", ex:"No veo nada. Nunca como carne.", q:[
  ["Je ne vois rien.",["No veo nada."]],
  ["Il n'y a personne.",["No hay nadie."]],
  ["Je ne mange jamais de viande.",["Nunca como carne.","No como nunca carne.","No como carne nunca."]],
  ["Je n'ai aucun problème.",["No tengo ningún problema."]],
  ["Moi non plus.",["Yo tampoco."]]]},
 {id:"es_verbos_prep", lvl:"B1", name:"Verbes à préposition : pensar en, soñar con", ex:"Pienso en ti. Sueño con viajar.", q:[
  ["Je pense à toi.",["Pienso en ti."]],
  ["Elle rêve de voyager.",["Sueña con viajar.","Ella sueña con viajar."]],
  ["Je ne me souviens pas de son nom.",["No me acuerdo de su nombre."]],
  ["Il est tombé amoureux de sa voisine.",["Se enamoró de su vecina."]],
  ["Ça dépend de toi.",["Depende de ti."]]]}
);

Object.assign(P.rules, {
 es_interrogativos:"Les mots interrogatifs portent toujours un accent : qué, cuál, quién, dónde, cuándo, cómo, cuánto. Et la question s'ouvre avec ¿ et se ferme avec ?. Cuánto s'accorde avec le nom : cuántos años, cuántas personas. Pour « quel est », on dit ¿cuál es…?, pas ¿qué es…?",
 es_hora:"L'heure se dit avec ser, au féminin : es la una (une seule heure), son las dos, son las tres. Les minutes s'ajoutent avec y (las dos y diez) ou se retirent avec menos (las tres menos cuarto). Et demie se dit y media, le quart y cuarto. À quelle heure : a las cinco.",
 es_negacion:"L'espagnol garde la double négation : no + verbe + nada, nadie, nunca, ninguno. No veo nada, no hay nadie. Mais si le mot négatif passe avant le verbe, no disparaît : nadie viene, nunca como carne. Ninguno devient ningún devant un nom masculin.",
 es_verbos_prep:"Certains verbes espagnols ont leur préposition à eux, différente du français : pensar en (penser à), soñar con (rêver de), acordarse de (se souvenir de), enamorarse de (tomber amoureux de), depender de (dépendre de), casarse con (se marier avec), confiar en (faire confiance à). Elle s'apprend avec le verbe."
});

Object.assign(P.bank, {
es_interrogativos: [
 {th:"Intro", t:"tr", fr:"D'où viens-tu ?", a:["¿De dónde eres?","¿De dónde vienes?"], why:"Pour l'origine : ¿de dónde eres? La préposition de passe devant dónde."},
 {th:"Family", t:"tr", fr:"Combien de frères as-tu ?", a:["¿Cuántos hermanos tienes?"], why:"Cuánto s'accorde avec le nom : hermanos, masculin pluriel, donc cuántos."},
 {th:"Restaurant", t:"tr", fr:"Qu'est-ce que tu veux manger ?", a:["¿Qué quieres comer?"], why:"Qu'est-ce que se dit simplement qué, avec un accent."},
 {th:"Travel", t:"tr", fr:"À quelle heure part le train ?", a:["¿A qué hora sale el tren?"], why:"À quelle heure : ¿a qué hora? Pour un train, partir se dit salir."},
 {th:"Shopping", t:"gap", fr:"Combien coûtent ces chaussures ?", s:"¿___ cuestan estos zapatos?", a:["Cuánto"], why:"Devant un verbe, cuánto ne change pas : ¿cuánto cuestan?"},
 {th:"City", t:"gap", fr:"Où est la plage ?", s:"¿___ está la playa?", a:["Dónde"], why:"Où, pour situer : dónde, avec l'accent dans une question."},
 {th:"Work", t:"gap", fr:"Qui est ton chef ?", s:"¿___ es tu jefe?", a:["Quién"], why:"Pour une personne : quién. Au pluriel, quiénes."},
 {th:"Health", t:"gap", fr:"Comment te sens-tu ?", s:"¿___ te sientes?", a:["Cómo"], why:"Comment se dit cómo. Sans accent, como veut dire « comme »."},
 {th:"Intro", t:"qcm", fr:"Quel est ton prénom ?", s:"¿___ es tu nombre?", o:["Cuál","Qué","Quién"], a:0, why:"Quel est… ? se dit ¿cuál es…? Qué es voudrait dire « qu'est-ce que c'est »."},
 {th:"Party", t:"qcm", fr:"Combien de personnes viennent ?", s:"¿___ personas vienen?", o:["Cuántos","Cuántas","Cuánto"], a:1, why:"Personas est féminin pluriel : cuántas."},
 {th:"Weather", t:"qcm", fr:"Quel temps fait-il ?", s:"¿Qué tiempo ___?", o:["hace","es","está"], a:0, why:"La météo se dit avec hacer : ¿qué tiempo hace?"},
 {th:"Travel", t:"qcm", fr:"Quand arrives-tu ?", s:"¿___ llegas?", o:["Cuándo","Cuando","Qué"], a:0, why:"Dans une question, cuándo prend un accent. Sans accent, c'est le cuando de « quand il pleut »."},
],
es_hora: [
 {th:"Work", t:"tr", fr:"Il est huit heures moins le quart.", a:["Son las ocho menos cuarto."], why:"Moins le quart se dit menos cuarto. Et pour huit heures, son las ocho, au pluriel."},
 {th:"Restaurant", t:"tr", fr:"Nous dînons à neuf heures.", a:["Cenamos a las nueve."], why:"À neuf heures : a las nueve. N'oublie pas l'article las."},
 {th:"Travel", t:"tr", fr:"Le vol part à une heure et quart.", a:["El vuelo sale a la una y cuarto."], why:"Une heure, c'est au singulier : a la una. Et quart se dit y cuarto."},
 {th:"Family", t:"tr", fr:"Mon anniversaire est le 5 mai.", a:["Mi cumpleaños es el 5 de mayo.","Mi cumpleaños es el cinco de mayo."], why:"Pour une date : el + numéro + de + mois. Les mois n'ont pas de majuscule en espagnol."},
 {th:"City", t:"gap", fr:"Il est deux heures.", s:"___ las dos.", a:["Son"], why:"À partir de deux heures, c'est pluriel : son las dos."},
 {th:"Health", t:"gap", fr:"Il est une heure et demie.", s:"Es la una y ___.", a:["media"], why:"Et demie se dit y media, au féminin, comme hora."},
 {th:"Work", t:"gap", fr:"La réunion est à onze heures.", s:"La reunión es ___ las once.", a:["a"], why:"À quelle heure ça a lieu : a las once."},
 {th:"Hotel", t:"gap", fr:"Le petit-déjeuner est servi de sept à dix heures.", s:"El desayuno se sirve de siete ___ diez.", a:["a"], why:"De… à… se dit de… a… : de siete a diez."},
 {th:"City", t:"qcm", fr:"Il est une heure.", s:"___ la una.", o:["Es","Son","Está"], a:0, why:"Une seule heure : es la una, au singulier."},
 {th:"Party", t:"qcm", fr:"La fête commence à dix heures du soir.", s:"La fiesta empieza a las diez de la ___.", o:["noche","tarde","mañana"], a:0, why:"Du soir, tard : de la noche. De la tarde, c'est l'après-midi."},
 {th:"Admin", t:"qcm", fr:"Aujourd'hui, c'est lundi.", s:"Hoy ___ lunes.", o:["es","son","está"], a:0, why:"Pour le jour : hoy es lunes. Pas de majuscule aux jours."},
 {th:"Work", t:"qcm", fr:"Il est trois heures moins dix.", s:"Son las tres ___ diez.", o:["menos","y","de"], a:0, why:"Moins se dit menos : las tres menos diez."},
],
es_negacion: [
 {th:"Food", t:"tr", fr:"Je ne bois jamais de café.", a:["Nunca bebo café.","No bebo nunca café.","No bebo café nunca.","Nunca tomo café.","No tomo nunca café."], why:"Nunca avant le verbe, sans no. Ou no avant, et nunca après : les deux marchent."},
 {th:"City", t:"tr", fr:"Il n'y a personne dans la rue.", a:["No hay nadie en la calle."], why:"Personne se dit nadie. Après le verbe, il faut aussi no devant : no hay nadie."},
 {th:"Shopping", t:"tr", fr:"Je n'ai rien acheté.", a:["No he comprado nada.","No compré nada."], why:"Rien se dit nada, avec no devant le verbe : double négation, c'est normal en espagnol."},
 {th:"Work", t:"tr", fr:"Personne ne m'a appelé.", a:["Nadie me ha llamado.","Nadie me llamó."], why:"Nadie est avant le verbe : on n'ajoute pas no."},
 {th:"Food", t:"gap", fr:"Il n'y a rien dans le frigo.", s:"No hay ___ en la nevera.", a:["nada"], why:"Rien : nada. No reste devant hay."},
 {th:"Family", t:"gap", fr:"Je n'ai aucun frère.", s:"No tengo ___ hermano.", a:["ningún"], why:"Ninguno perd son o devant un nom masculin : ningún hermano."},
 {th:"Party", t:"gap", fr:"Je n'aime pas danser. Moi non plus.", s:"No me gusta bailar. A mí ___.", a:["tampoco"], why:"Moi non plus se dit tampoco. Avec gustar : a mí tampoco."},
 {th:"Travel", t:"gap", fr:"Je ne suis jamais allé au Pérou.", s:"No he ido ___ a Perú.", a:["nunca"], why:"No avant le verbe, nunca après : double négation."},
 {th:"Home", t:"qcm", fr:"Personne n'habite ici.", s:"___ vive aquí.", o:["Nadie","No nadie","Nada"], a:0, why:"Nadie en tête de phrase suffit : pas de no en plus."},
 {th:"Health", t:"qcm", fr:"Je ne sens rien.", s:"No siento ___.", o:["algo","nada","nadie"], a:1, why:"Rien : nada. Algo veut dire quelque chose."},
 {th:"Work", t:"qcm", fr:"Aucune réunion n'est prévue.", s:"No hay ___ reunión prevista.", o:["ninguna","ningún","nada"], a:0, why:"Reunión est féminin : ninguna."},
 {th:"Climbing", t:"qcm", fr:"Je n'ai jamais peur.", s:"___ tengo miedo.", o:["Nunca","No nunca","Jamás no"], a:0, why:"Nunca avant le verbe : pas besoin de no."},
],
es_verbos_prep: [
 {th:"Family", t:"tr", fr:"Je pense souvent à ma grand-mère.", a:["Pienso a menudo en mi abuela.","A menudo pienso en mi abuela.","Pienso mucho en mi abuela."], why:"Penser à quelqu'un : pensar en. Le français dit « à », l'espagnol dit en."},
 {th:"Travel", t:"tr", fr:"Je rêve de vivre au Mexique.", a:["Sueño con vivir en México."], why:"Rêver de : soñar con. Et soñar change o en ue : sueño."},
 {th:"Intro", t:"tr", fr:"Tu te souviens de moi ?", a:["¿Te acuerdas de mí?"], why:"Se souvenir de : acordarse de. Après de, moi se dit mí, avec un accent."},
 {th:"Work", t:"tr", fr:"Je compte sur toi.", a:["Cuento contigo."], why:"Compter sur quelqu'un : contar con. Et con + ti devient contigo."},
 {th:"Family", t:"gap", fr:"Ma sœur s'est mariée avec un Chilien.", s:"Mi hermana se casó ___ un chileno.", a:["con"], why:"Se marier avec : casarse con."},
 {th:"Culture", t:"gap", fr:"Ce film parle de la guerre.", s:"Esta película trata ___ la guerra.", a:["de"], why:"Parler de, pour un livre ou un film : tratar de."},
 {th:"Health", t:"gap", fr:"Je me suis rendu compte de mon erreur.", s:"Me di cuenta ___ mi error.", a:["de"], why:"Se rendre compte de : darse cuenta de."},
 {th:"Climbing", t:"gap", fr:"Fais confiance à ton assureur.", s:"Confía ___ tu asegurador.", a:["en"], why:"Faire confiance à : confiar en. Encore un en là où le français met « à »."},
 {th:"Party", t:"qcm", fr:"Il est tombé amoureux d'elle.", s:"Se enamoró ___ ella.", o:["de","con","en"], a:0, why:"Tomber amoureux de : enamorarse de."},
 {th:"Work", t:"qcm", fr:"Ça dépend du prix.", s:"Depende ___ precio.", o:["del","en el","con el"], a:0, why:"Dépendre de : depender de. De + el devient del."},
 {th:"Home", t:"qcm", fr:"N'oublie pas de fermer la porte.", s:"No te olvides ___ cerrar la puerta.", o:["de","a","en"], a:0, why:"Olvidarse de + infinitif : no te olvides de cerrar."},
 {th:"Weather", t:"qcm", fr:"Je rêve d'un été sans pluie.", s:"Sueño ___ un verano sin lluvia.", o:["con","de","en"], a:0, why:"Soñar con, même devant un nom. Soñar de serait un calque du français."},
]
});

P.lessons = Object.assign(P.lessons || {}, {
es_interrogativos:{
 intro:"Où, quand, combien, comment : ces petits mots ouvrent toutes les conversations. En espagnol, ils portent toujours un accent quand ils posent une question, et la question s'ouvre avec un point d'interrogation à l'envers.",
 parts:[
  {h:"Les mots", p:"Chaque mot interrogatif prend un accent écrit. Sans accent, le mot change de sens.", rows:[["qué","que, quoi","¿Qué quieres?"],["quién","qui","¿Quién es?"],["dónde","où","¿Dónde vives?"],["cuándo","quand","¿Cuándo llegas?"],["cómo","comment","¿Cómo estás?"],["cuánto","combien","¿Cuánto cuesta?"]]},
  {h:"Cuánto s'accorde", p:"Devant un nom, cuánto s'accorde comme un adjectif : cuántos años, cuántas personas, cuánta agua.\n\nDevant un verbe, il reste cuánto : ¿cuánto cuesta?"},
  {h:"Qué ou cuál", p:"Pour « quel est », on dit ¿cuál es? : ¿cuál es tu nombre?, ¿cuál es tu dirección?\n\nDevant un nom, on dit plutôt qué : ¿qué libro prefieres?"}
 ],
 ex:[["¿Dónde vives?","Où habites-tu ?",""],["¿Cómo te llamas?","Comment t'appelles-tu ?",""],["¿Cuántos años tienes?","Quel âge as-tu ?","cuántos + nom"],["¿Cuál es tu número?","Quel est ton numéro ?","cuál es"],["¿A qué hora empieza?","À quelle heure ça commence ?",""],["¿De dónde eres?","D'où viens-tu ?","de dónde"]],
 traps:[["¿Qué es tu nombre?","¿Cuál es tu nombre?","Quel est se dit cuál es."],["¿Cuanto cuesta?","¿Cuánto cuesta?","Dans une question, l'accent est obligatoire."],["¿Cuántos personas?","¿Cuántas personas?","Cuánto s'accorde avec le nom."]],
 tip:"Une question, un accent : qué, dónde, cuándo, cómo."
},
es_hora:{
 intro:"Il est deux heures et demie, rendez-vous à neuf heures, on est lundi : pour l'heure et la date, l'espagnol a quelques réflexes simples. Le premier : l'heure se dit au féminin, avec ser.",
 parts:[
  {h:"Dire l'heure", p:"Une heure, c'est singulier : es la una. Toutes les autres, c'est pluriel : son las dos, son las diez.", rows:[["Es la una.","Il est une heure.","singulier"],["Son las dos.","Il est deux heures.","pluriel"],["Son las tres y media.","Il est trois heures et demie.","y media"],["Son las cuatro y cuarto.","Il est quatre heures et quart.","y cuarto"],["Son las cinco menos cuarto.","Il est cinq heures moins le quart.","menos"]]},
  {h:"À quelle heure", p:"Pour un rendez-vous, on met a devant l'heure : a la una, a las ocho.\n\nPour préciser le moment : de la mañana (le matin), de la tarde (l'après-midi), de la noche (le soir)."},
  {h:"Les jours et les dates", p:"Hoy es lunes : aujourd'hui, c'est lundi. Les jours et les mois s'écrivent sans majuscule.\n\nUne date se dit el 5 de mayo, avec el et de."}
 ],
 ex:[["¿Qué hora es?","Quelle heure est-il ?",""],["Es la una y diez.","Il est une heure dix.","es la una"],["Son las nueve menos cuarto.","Il est neuf heures moins le quart.","menos"],["Quedamos a las ocho.","On se retrouve à huit heures.","a las"],["Hoy es viernes.","Aujourd'hui, c'est vendredi.",""],["Nací el 3 de junio.","Je suis né le 3 juin.","el … de"]],
 traps:[["Son la una.","Es la una.","Une heure est au singulier."],["Es las dos.","Son las dos.","À partir de deux heures, on passe au pluriel."],["El 5 Mayo.","El 5 de mayo.","Une date prend de, et le mois n'a pas de majuscule."]],
 tip:"Es la una, son las dos : une heure seule, au singulier."
},
es_negacion:{
 intro:"Je ne vois rien, il n'y a personne, je ne mange jamais de viande : en français, on dit « ne… rien ». En espagnol, c'est presque pareil : no… nada. La double négation est normale et correcte.",
 parts:[
  {h:"No… nada, nadie, nunca", p:"No se met devant le verbe, le mot négatif vient après.", rows:[["No veo nada.","Je ne vois rien.","nada = rien"],["No hay nadie.","Il n'y a personne.","nadie = personne"],["No como nunca carne.","Je ne mange jamais de viande.","nunca = jamais"],["No tengo ningún problema.","Je n'ai aucun problème.","ningún = aucun"]]},
  {h:"Le mot négatif avant le verbe", p:"Si nadie, nada ou nunca ouvre la phrase, no disparaît : nadie viene, nunca como carne.\n\nOn ne dit jamais « nadie no viene »."},
  {h:"Ninguno et tampoco", p:"Ninguno s'accorde : ningún libro, ninguna mesa. Il perd son o devant un nom masculin.\n\nMoi non plus se dit yo tampoco, ou a mí tampoco avec gustar."}
 ],
 ex:[["No entiendo nada.","Je ne comprends rien.",""],["No conozco a nadie aquí.","Je ne connais personne ici.","a nadie"],["Nunca llego tarde.","Je n'arrive jamais en retard.","nunca en tête"],["Nadie me ha llamado.","Personne ne m'a appelé.","nadie en tête"],["No tengo ninguna idea.","Je n'en ai aucune idée.","ninguna"],["Yo tampoco.","Moi non plus.",""]],
 traps:[["Nadie no viene.","Nadie viene.","Le mot négatif en tête suffit."],["Veo nada.","No veo nada.","Après le verbe, il faut aussi no devant."],["No tengo ninguno problema.","No tengo ningún problema.","Ninguno devient ningún devant un nom masculin."]],
 tip:"Mot négatif après le verbe : no devant. Mot négatif devant : rien de plus."
},
es_verbos_prep:{
 intro:"Penser à quelqu'un, rêver de voyager, se souvenir d'un nom : ces verbes ont une petite préposition qui les suit partout. En espagnol, ce n'est souvent pas la même qu'en français, et elle s'apprend avec le verbe.",
 parts:[
  {h:"Les plus courants", p:"Voici les verbes dont la préposition piège le plus les francophones.", rows:[["pensar en","penser à","Pienso en ti."],["soñar con","rêver de","Sueño con viajar."],["casarse con","se marier avec","Se casó con Ana."],["confiar en","faire confiance à","Confío en ti."],["contar con","compter sur","Cuento contigo."]]},
  {h:"Ceux qui ressemblent au français", p:"Certains gardent de, comme en français : acordarse de (se souvenir de), enamorarse de (tomber amoureux de), depender de (dépendre de), olvidarse de (oublier de).\n\nAttention : de + el se colle en del."},
  {h:"Avec un pronom", p:"Après la préposition, moi et toi deviennent mí et ti : pienso en ti, se acuerda de mí.\n\nAvec con, ça donne conmigo et contigo."}
 ],
 ex:[["Pienso mucho en ti.","Je pense beaucoup à toi.","pensar en"],["Sueño con un viaje a Japón.","Je rêve d'un voyage au Japon.","soñar con"],["No me acuerdo de su cara.","Je ne me souviens pas de son visage.","acordarse de"],["Se enamoró de su profesor.","Elle est tombée amoureuse de son prof.","enamorarse de"],["Todo depende del tiempo.","Tout dépend du temps.","del"],["¿Puedo contar contigo?","Je peux compter sur toi ?","contigo"]],
 traps:[["Pienso a ti.","Pienso en ti.","Penser à se dit pensar en."],["Sueño de viajar.","Sueño con viajar.","Rêver de se dit soñar con."],["Cuento con ti.","Cuento contigo.","Con + ti devient contigo."]],
 tip:"Apprends le verbe avec sa préposition, comme un seul mot : pensar en."
}
});
})();

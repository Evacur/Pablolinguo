// Three more exercises per Spanish grammar point (docs/audit.md R29), written in the teacher voice of the banks.
(function(){
const P = window.PACKS && window.PACKS.es; if(!P) return;
P.bank = P.bank || {};
const add = (id, list) => { (P.bank[id] = P.bank[id] || []).push(...list); };

// ───────── A1 ─────────
add("es_ser_estar", [
 {th:"Family", t:"tr", fr:"Mon père est très grand.", a:["Mi padre es muy alto."], why:"La taille ne change pas d'un jour à l'autre : c'est une caractéristique, donc ser."},
 {th:"Health", t:"gap", fr:"Aujourd'hui, je suis fatigué.", s:"Hoy ___ cansado.", a:["estoy"], why:"Fatigué aujourd'hui, ça passera : c'est un état, donc estar."},
 {th:"City", t:"qcm", fr:"Le musée est dans le centre.", s:"El museo ___ en el centro.", o:["está","es","hay"], a:0, why:"Pour dire où se trouve une chose précise, c'est toujours estar."},
]);
add("es_articulos", [
 {th:"Food", t:"tr", fr:"Le café est chaud.", a:["El café está caliente."], why:"Café est masculin : el café. Et chaud, ici, c'est un état : está."},
 {th:"Home", t:"gap", fr:"La clé est sur la table.", s:"___ llave está en la mesa.", a:["La"], why:"Llave finit en -e mais elle est féminine : la llave. Ce genre-là s'apprend avec le mot."},
 {th:"Work", t:"qcm", fr:"J'ai un problème.", s:"Tengo ___ problema.", o:["una","un","unos"], a:1, why:"Problema finit en -a, mais il est masculin, comme tous les mots grecs en -ma : un problema."},
]);
add("es_plurales", [
 {th:"Shopping", t:"tr", fr:"J'achète deux crayons.", a:["Compro dos lápices."], why:"Lápiz finit par un z : au pluriel, le z devient c, puis -es. Lápices."},
 {th:"City", t:"gap", fr:"Il y a trois hôtels dans le village.", s:"Hay tres ___ en el pueblo.", a:["hoteles"], why:"Hotel finit par une consonne : on ajoute -es, hoteles."},
 {th:"Nature", t:"qcm", fr:"Les arbres sont verts.", s:"Los árboles son ___.", o:["verds","verdeses","verdes"], a:2, why:"Verde finit par une voyelle : on ajoute juste -s, verdes."},
]);
add("es_hay", [
 {th:"Home", t:"tr", fr:"Il y a un chat dans le jardin.", a:["Hay un gato en el jardín."], why:"Un chat quelconque, tu annonces qu'il existe : hay."},
 {th:"City", t:"gap", fr:"Où est la gare ?", s:"¿Dónde ___ la estación?", a:["está"], why:"La gare est précise, tu cherches où elle se trouve : está."},
 {th:"Food", t:"qcm", fr:"Il n'y a pas de pain.", s:"No ___ pan.", o:["hay","está","es"], a:0, why:"Pour dire qu'une chose manque : no hay, sans article."},
]);
add("es_gustar", [
 {th:"Food", t:"tr", fr:"J'aime les fraises.", a:["Me gustan las fresas."], why:"Las fresas, c'est au pluriel : gustan. C'est ce qui plaît qui commande le verbe."},
 {th:"Climbing", t:"gap", fr:"Tu aimes grimper ?", s:"¿Te ___ escalar?", a:["gusta"], why:"Devant un verbe à l'infinitif, gusta reste au singulier."},
 {th:"Family", t:"qcm", fr:"Ma mère aime le cinéma.", s:"A mi madre ___ gusta el cine.", o:["la","le","se"], a:1, why:"Pour une autre personne, le pronom est le, pour une femme comme pour un homme."},
]);
add("es_presente", [
 {th:"Work", t:"tr", fr:"Nous travaillons dans un bureau.", a:["Trabajamos en una oficina."], why:"Nosotros, verbe en -ar : -amos. Pas besoin du pronom, la terminaison suffit."},
 {th:"Food", t:"gap", fr:"Elle mange beaucoup de légumes.", s:"Ella ___ muchas verduras.", a:["come"], why:"Ella, verbe en -er : -e. Come."},
 {th:"City", t:"qcm", fr:"Vous habitez à Séville ? (vosotros)", s:"¿___ en Sevilla?", o:["Vivéis","Viven","Vivís"], a:2, why:"Vosotros avec un verbe en -ir : -ís. Vivís, avec l'accent."},
]);
add("es_tener_ir", [
 {th:"Travel", t:"tr", fr:"Nous allons à Barcelone en train.", a:["Vamos a Barcelona en tren."], why:"Ir avec nosotros : vamos. Et la destination prend a."},
 {th:"Health", t:"gap", fr:"J'ai mal à la gorge et j'ai froid.", s:"Me duele la garganta y ___ frío.", a:["tengo"], why:"Avoir froid se dit tener frío, comme en français : tengo frío."},
 {th:"Family", t:"qcm", fr:"Mes cousins vont à la plage.", s:"Mis primos ___ a la playa.", o:["van","vais","vamos"], a:0, why:"Mis primos, c'est ellos : van."},
]);
add("es_posesivos", [
 {th:"Family", t:"tr", fr:"Nos enfants sont à l'école.", a:["Nuestros hijos están en el colegio.","Nuestros hijos están en la escuela.","Nuestros niños están en el colegio.","Nuestros niños están en la escuela."], why:"Nuestro s'accorde avec ce qu'on possède : hijos, masculin pluriel, donc nuestros."},
 {th:"Home", t:"gap", fr:"Ce n'est pas ma clé, c'est la tienne.", s:"No es mi llave, es la ___.", a:["tuya"], why:"Sans nom derrière : la forme longue, accordée avec llave, féminin. La tuya."},
 {th:"Travel", t:"qcm", fr:"Vos valises sont ici, madame.", s:"___ maletas están aquí, señora.", o:["Su","Sus","Tus"], a:1, why:"Avec usted, le possessif est su. Devant un pluriel, sus."},
]);
add("es_demostrativos", [
 {th:"Shopping", t:"tr", fr:"Je voudrais cette chemise. (près de moi)", a:["Quiero esta camisa.","Quisiera esta camisa.","Me gustaría esta camisa.","Querría esta camisa."], why:"La chose est près de toi : este, au féminin esta."},
 {th:"Nature", t:"gap", fr:"Tu vois ces montagnes là-bas ?", s:"¿Ves ___ montañas?", a:["aquellas"], why:"Loin de vous deux : aquel. Au féminin pluriel, aquellas."},
 {th:"Food", t:"qcm", fr:"C'est quoi, ça ? (dans ton assiette)", s:"¿Qué es ___?", o:["ese","esa","eso"], a:2, why:"Tu ne nommes pas la chose : forme neutre. Près de l'autre personne, donc eso."},
]);

// ───────── A2 ─────────
add("es_indefinido", [
 {th:"Travel", t:"tr", fr:"L'été dernier, nous sommes allés en Italie.", a:["El verano pasado fuimos a Italia."], why:"Un moment fini : indefinido. Ir avec nosotros : fuimos."},
 {th:"Food", t:"gap", fr:"Hier, j'ai mangé une paella.", s:"Ayer ___ una paella.", a:["comí"], why:"Yo, verbe en -er au passé : -í, avec l'accent. Comí."},
 {th:"Work", t:"qcm", fr:"Elle a fini à six heures.", s:"___ a las seis.", o:["Terminó","Termino","Terminaba"], a:0, why:"Un moment précis : indefinido. L'accent compte, termino sans accent voudrait dire « je termine »."},
]);
add("es_imperfecto", [
 {th:"Family", t:"tr", fr:"Quand j'étais petit, j'avais un chien.", a:["Cuando era pequeño, tenía un perro.","De pequeño, tenía un perro.","Cuando era niño, tenía un perro."], why:"Une situation qui durait dans l'enfance : imperfecto. Era, tenía."},
 {th:"Weather", t:"gap", fr:"Il faisait très beau.", s:"___ muy buen tiempo.", a:["Hacía"], why:"La météo qui sert de décor : imperfecto, hacía."},
 {th:"Climbing", t:"qcm", fr:"Avant, nous grimpions tous les week-ends.", s:"Antes ___ todos los fines de semana.", o:["escalamos","escalábamos","escalaremos"], a:1, why:"Une habitude passée : imperfecto. Nosotros, -ábamos, avec l'accent."},
]);
add("es_reflexivos", [
 {th:"Home", t:"tr", fr:"Je me douche le matin.", a:["Me ducho por la mañana.","Me ducho por las mañanas."], why:"Ducharse est pronominal : me ducho. Le pronom se met avant le verbe."},
 {th:"Work", t:"gap", fr:"À quelle heure tu te lèves ?", s:"¿A qué hora te ___?", a:["levantas"], why:"Levantarse avec tú : te levantas."},
 {th:"Family", t:"qcm", fr:"Les enfants se couchent à neuf heures.", s:"Los niños ___ acuestan a las nueve.", o:["os","les","se"], a:2, why:"Avec ellos, le pronom est se. Et acostarse change o en ue : acuestan."},
]);
add("es_ir_a", [
 {th:"Weather", t:"tr", fr:"Il va pleuvoir cet après-midi.", a:["Va a llover esta tarde."], why:"Futur proche : ir a + infinitif. Llover n'a pas de vrai sujet : va a llover."},
 {th:"Travel", t:"gap", fr:"Nous allons louer une voiture.", s:"Vamos ___ alquilar un coche.", a:["a"], why:"Le a entre ir et l'infinitif est obligatoire. Ne l'oublie jamais !"},
 {th:"Work", t:"qcm", fr:"Tu vas travailler demain ?", s:"¿___ a trabajar mañana?", o:["Vas","Va","Vais"], a:0, why:"Ir avec tú : vas."},
]);
add("es_comparativos", [
 {th:"City", t:"tr", fr:"Madrid est plus grand que Valence.", a:["Madrid es más grande que Valencia."], why:"Plus… que : más… que."},
 {th:"Food", t:"gap", fr:"Ce restaurant est meilleur que l'autre.", s:"Este restaurante es ___ que el otro.", a:["mejor"], why:"Meilleur se dit mejor. Más bueno sonne faux."},
 {th:"Family", t:"qcm", fr:"Ma sœur est aussi grande que moi.", s:"Mi hermana es tan alta ___ yo.", o:["que","como","de"], a:1, why:"Après tan, c'est toujours como."},
]);
add("es_gerundio", [
 {th:"Home", t:"tr", fr:"Je suis en train de lire.", a:["Estoy leyendo."], why:"Leer : le i devient y entre deux voyelles, leyendo."},
 {th:"Weather", t:"gap", fr:"Il est en train de pleuvoir.", s:"Está ___.", a:["lloviendo"], why:"Llover est en -er : -iendo, lloviendo."},
 {th:"Family", t:"qcm", fr:"Les enfants sont en train de dormir.", s:"Los niños están ___.", o:["dormiendo","duermiendo","durmiendo"], a:2, why:"Dormir change son o en u au gérondif : durmiendo."},
]);
add("es_pronombres_cd", [
 {th:"Shopping", t:"tr", fr:"Les chaussures ? Je les achète.", a:["¿Los zapatos? Los compro.","Los zapatos? Los compro."], why:"Los zapatos, masculin pluriel : los, avant le verbe."},
 {th:"Food", t:"gap", fr:"La soupe ? Je la prépare maintenant.", s:"¿La sopa? ___ preparo ahora.", a:["La"], why:"La sopa est féminin : la."},
 {th:"Travel", t:"qcm", fr:"Le billet ? Je vais l'acheter en ligne.", s:"¿El billete? Voy a ___ en internet.", o:["comprarlo","comprarla","lo comprar"], a:0, why:"El billete est masculin : lo. Avec un infinitif, il se colle à la fin : comprarlo."},
]);
add("es_muy_mucho", [
 {th:"Weather", t:"tr", fr:"Il fait très froid.", a:["Hace mucho frío."], why:"Frío est un nom, comme « froid » dans « avoir froid » : mucho frío, jamais muy frío ici."},
 {th:"Food", t:"gap", fr:"Ce plat est très épicé.", s:"Este plato es ___ picante.", a:["muy"], why:"Devant un adjectif : muy."},
 {th:"Work", t:"qcm", fr:"J'ai beaucoup de réunions.", s:"Tengo ___ reuniones.", o:["muy","muchas","mucho"], a:1, why:"Devant un nom, mucho s'accorde : reuniones est féminin pluriel, donc muchas."},
]);
add("es_pronombres_ci", [
 {th:"Family", t:"tr", fr:"Je lui offre un livre. (à ma sœur)", a:["Le regalo un libro.","Le regalo un libro a mi hermana."], why:"On offre à quelqu'un : le, pour une femme comme pour un homme."},
 {th:"Restaurant", t:"gap", fr:"Vous nous apportez la carte ?", s:"¿___ trae la carta?", a:["Nos"], why:"À nous : nos, avant le verbe."},
 {th:"Shopping", t:"qcm", fr:"Le cadeau ? Je le lui donne demain.", s:"¿El regalo? ___ lo doy mañana.", o:["Le","Les","Se"], a:2, why:"Le devant lo devient se : se lo doy. L'espagnol évite deux l à la suite."},
]);
add("es_obligacion", [
 {th:"Work", t:"tr", fr:"Je dois répondre à ce courriel.", a:["Tengo que contestar este correo.","Tengo que responder este correo.","Tengo que responder a este correo.","Debo contestar este correo.","Debo responder a este correo."], why:"Une obligation pour toi : tener que + infinitif. Deber marche aussi, un peu plus formel."},
 {th:"Travel", t:"gap", fr:"Il faut montrer le billet.", s:"___ que enseñar el billete.", a:["Hay"], why:"Une règle pour tout le monde, sans sujet : hay que."},
 {th:"Health", t:"qcm", fr:"Tu n'es pas obligé de venir.", s:"No ___ que venir.", o:["tienes","debes","hay"], a:0, why:"No tener que : ce n'est pas obligatoire. No debes serait une interdiction."},
]);

// ───────── B1 ─────────
add("es_indef_imperf", [
 {th:"Travel", t:"tr", fr:"Il pleuvait quand nous sommes arrivés.", a:["Llovía cuando llegamos.","Estaba lloviendo cuando llegamos."], why:"La pluie, c'est le décor : llovía. L'arrivée, c'est l'événement : llegamos."},
 {th:"Home", t:"gap", fr:"Je dormais quand le téléphone a sonné.", s:"Dormía cuando ___ el teléfono.", a:["sonó"], why:"Le téléphone sonne d'un coup et coupe le sommeil : indefinido, sonó."},
 {th:"Family", t:"qcm", fr:"Ma grand-mère avait les yeux bleus.", s:"Mi abuela ___ los ojos azules.", o:["tuvo","tenía","tiene"], a:1, why:"Une description dans le passé : imperfecto, tenía."},
]);
add("es_perfecto", [
 {th:"Food", t:"tr", fr:"Aujourd'hui, j'ai mangé trop de chocolat.", a:["Hoy he comido demasiado chocolate."], why:"Hoy n'est pas fini : passé composé, he comido."},
 {th:"Travel", t:"gap", fr:"Tu es déjà allé au Mexique ?", s:"¿Ya has ___ a México?", a:["ido","estado"], why:"Une expérience sans date : haber + participe. Ir donne ido."},
 {th:"Work", t:"qcm", fr:"Cette semaine, nous avons beaucoup travaillé.", s:"Esta semana ___ mucho.", o:["trabajábamos","tenemos trabajado","hemos trabajado"], a:2, why:"Esta semana n'est pas finie : hemos trabajado. Jamais avec tener."},
]);
add("es_por_para", [
 {th:"Family", t:"tr", fr:"Ce cadeau est pour ma mère.", a:["Este regalo es para mi madre.","Este regalo es para mi mamá."], why:"Le destinataire : para."},
 {th:"City", t:"gap", fr:"Nous nous promenons dans la vieille ville.", s:"Paseamos ___ el casco antiguo.", a:["por"], why:"Se déplacer à travers un lieu : por."},
 {th:"Shopping", t:"qcm", fr:"Je l'ai acheté pour dix euros.", s:"Lo compré ___ diez euros.", o:["por","para","de"], a:0, why:"Un prix, un échange : por."},
]);
add("es_subj_deseo", [
 {th:"Family", t:"tr", fr:"Je veux que tu viennes.", a:["Quiero que vengas."], why:"Je veux, toi tu viens : deux personnes différentes, donc subjonctif, vengas."},
 {th:"Weather", t:"gap", fr:"Pourvu qu'il fasse beau demain !", s:"¡Ojalá ___ buen tiempo mañana!", a:["haga"], why:"Ojalá est toujours suivi du subjonctif : haga."},
 {th:"Work", t:"qcm", fr:"Je t'explique pour que tu comprennes.", s:"Te lo explico para que lo ___.", o:["entiendes","entiendas","entender"], a:1, why:"Para que + subjonctif : entiendas. Le e devient ie, comme au présent."},
]);
add("es_futuro", [
 {th:"Travel", t:"tr", fr:"Demain, nous partirons tôt.", a:["Mañana saldremos temprano.","Mañana nos iremos temprano.","Mañana partiremos temprano."], why:"Salir a un futur irrégulier : saldr-. Nosotros : saldremos."},
 {th:"Work", t:"gap", fr:"Je te dirai la vérité.", s:"Te ___ la verdad.", a:["diré"], why:"Decir devient dir- au futur : diré."},
 {th:"Weather", t:"qcm", fr:"Il y aura du soleil ce week-end.", s:"Este fin de semana ___ sol.", o:["hacerá","hace","hará"], a:2, why:"Hacer devient har- au futur : hará. Hacerá n'existe pas."},
]);
add("es_condicional", [
 {th:"Restaurant", t:"tr", fr:"Je voudrais une table pour deux.", a:["Querría una mesa para dos.","Quisiera una mesa para dos.","Me gustaría una mesa para dos."], why:"Le conditionnel adoucit la demande : querría, ou me gustaría."},
 {th:"Health", t:"gap", fr:"Tu devrais boire plus d'eau.", s:"___ beber más agua.", a:["Deberías"], why:"Pour un conseil, deber au conditionnel : deberías."},
 {th:"Travel", t:"qcm", fr:"Que ferais-tu avec un million ?", s:"¿Qué ___ con un millón?", o:["harías","hacerías","hacías"], a:0, why:"Hacer garde le radical har- au conditionnel : harías."},
]);
add("es_imperativo", [
 {th:"City", t:"tr", fr:"Prends la deuxième rue à droite.", a:["Toma la segunda calle a la derecha.","Coge la segunda calle a la derecha."], why:"Impératif tú : la forme de él au présent. Toma."},
 {th:"Home", t:"gap", fr:"Ne touche pas le four, il est chaud.", s:"No ___ el horno, está caliente.", a:["toques"], why:"Pour interdire, le subjonctif : no toques. Le c devient qu devant e."},
 {th:"Family", t:"qcm", fr:"Viens ici !", s:"¡___ aquí!", o:["Viene","Ven","Vienes"], a:1, why:"Venir a un impératif court et irrégulier : ven."},
]);
add("es_subj_cuando", [
 {th:"Travel", t:"tr", fr:"Quand j'arriverai, je t'appellerai.", a:["Cuando llegue, te llamaré.","Cuando llegue te llamaré."], why:"Après cuando, une action future se met au subjonctif : llegue. Jamais de futur après cuando."},
 {th:"Work", t:"gap", fr:"Quand tu auras le temps, lis ce rapport.", s:"Cuando ___ tiempo, lee este informe.", a:["tengas"], why:"Ce n'est pas encore le cas : subjonctif, tengas."},
 {th:"Family", t:"qcm", fr:"Quand j'étais petit, je vivais à Lyon.", s:"Cuando ___ pequeño, vivía en Lyon.", o:["sea","fuera","era"], a:2, why:"Un fait passé : indicatif, era. Le subjonctif, c'est pour le futur."},
]);
add("es_subj_impersonal", [
 {th:"Health", t:"tr", fr:"Il est important que tu dormes bien.", a:["Es importante que duermas bien."], why:"Es importante que + quelqu'un de précis : subjonctif. Dormir change o en ue : duermas."},
 {th:"Work", t:"gap", fr:"Il est évident que tu as raison.", s:"Es evidente que ___ razón.", a:["tienes"], why:"Tu affirmes une certitude : indicatif, tienes."},
 {th:"Travel", t:"qcm", fr:"Il vaut mieux réserver à l'avance.", s:"Es mejor ___ con antelación.", o:["reservar","que reserves","reserves"], a:0, why:"Personne de précis : l'infinitif seul, sans que."},
]);

// ───────── B2 ─────────
add("es_subj_emocion", [
 {th:"Family", t:"tr", fr:"Ça me fait plaisir que tu sois là.", a:["Me alegra que estés aquí.","Me alegro de que estés aquí."], why:"Une émotion + que : subjonctif, estés. Être là, c'est estar."},
 {th:"Weather", t:"gap", fr:"Je doute qu'il neige demain.", s:"Dudo que ___ mañana.", a:["nieve"], why:"Le doute appelle le subjonctif : nieve."},
 {th:"Work", t:"qcm", fr:"Je crois que le chef arrive.", s:"Creo que el jefe ___.", o:["llegue","llega","llegara"], a:1, why:"Creo que, sans négation, c'est une certitude : indicatif, llega."},
]);
add("es_pluscuamperfecto", [
 {th:"Travel", t:"tr", fr:"Quand je suis arrivé, le bus était déjà parti.", a:["Cuando llegué, el autobús ya había salido."], why:"Le bus est parti avant ton arrivée : había + participe."},
 {th:"Food", t:"gap", fr:"Je n'avais jamais goûté ce fruit.", s:"Nunca ___ probado esta fruta.", a:["había"], why:"Plus-que-parfait : había + participe. Toujours haber, jamais ser."},
 {th:"Home", t:"qcm", fr:"Quelqu'un avait ouvert la fenêtre.", s:"Alguien había ___ la ventana.", o:["abrido","abrió","abierto"], a:2, why:"Abrir a un participe irrégulier : abierto."},
]);
add("es_si_imperfecto", [
 {th:"Travel", t:"tr", fr:"Si j'avais de l'argent, je voyagerais.", a:["Si tuviera dinero, viajaría.","Si tuviese dinero, viajaría."], why:"Situation imaginée : si + subjonctif imparfait (tuviera), puis conditionnel."},
 {th:"Weather", t:"gap", fr:"S'il faisait beau, nous irions à la plage.", s:"Si ___ buen tiempo, iríamos a la playa.", a:["hiciera","hiciese"], why:"Après si, jamais de conditionnel : hiciera."},
 {th:"Work", t:"qcm", fr:"Si j'étais le chef, je changerais tout.", s:"Si ___ el jefe, lo cambiaría todo.", o:["fuera","sería","era"], a:0, why:"Le français dit « étais », mais après si l'espagnol veut fuera."},
]);
add("es_estilo_indirecto", [
 {th:"Family", t:"tr", fr:"Elle m'a dit qu'elle était fatiguée.", a:["Me dijo que estaba cansada."], why:"Quand on rapporte au passé, le présent devient imparfait : estaba."},
 {th:"Work", t:"gap", fr:"Il a dit qu'il viendrait demain.", s:"Dijo que ___ mañana.", a:["vendría"], why:"Le futur rapporté devient conditionnel : vendría, comme « viendrait »."},
 {th:"Travel", t:"qcm", fr:"Elle m'a demandé si j'avais mon passeport.", s:"Me preguntó ___ tenía el pasaporte.", o:["que","si","qué"], a:1, why:"Pour une question oui ou non rapportée : si, comme en français."},
]);
add("es_pasiva_se", [
 {th:"Shopping", t:"tr", fr:"On vend des fruits ici.", a:["Aquí se vende fruta.","Se vende fruta aquí.","Aquí se venden frutas.","Se venden frutas aquí."], why:"Le « on » se dit se. Le verbe s'accorde avec ce qu'on vend."},
 {th:"City", t:"gap", fr:"Le pont a été construit en 1890.", s:"El puente fue ___ en 1890.", a:["construido"], why:"Passif avec ser : fue + participe accordé avec el puente, construido."},
 {th:"Work", t:"qcm", fr:"On cherche des serveurs.", s:"___ camareros.", o:["Se busca","Buscan se","Se buscan"], a:2, why:"Avec se, le verbe s'accorde avec ce qu'on cherche : camareros, donc se buscan."},
]);
add("es_relativos", [
 {th:"City", t:"tr", fr:"C'est le quartier où j'habite.", a:["Es el barrio donde vivo.","Es el barrio en el que vivo.","Este es el barrio donde vivo."], why:"Pour un lieu : donde, ou en el que."},
 {th:"Work", t:"gap", fr:"Je ne sais pas ce que tu veux.", s:"No sé ___ quieres.", a:["lo que"], why:"Ce que se dit lo que."},
 {th:"Family", t:"qcm", fr:"C'est l'amie avec qui je voyage.", s:"Es la amiga ___ viajo.", o:["con la que","con que","que"], a:0, why:"Avec une préposition et une personne : con la que, ou con quien."},
]);
add("es_verbos_cambio", [
 {th:"Health", t:"tr", fr:"Il est devenu tout rouge.", a:["Se puso muy rojo.","Se puso rojo."], why:"Un changement soudain d'apparence : ponerse. Au passé, se puso."},
 {th:"Work", t:"gap", fr:"Elle est devenue avocate.", s:"Se ___ abogada.", a:["hizo"], why:"Un métier qu'on atteint par l'effort : hacerse. Se hizo abogada."},
 {th:"Home", t:"qcm", fr:"Il s'est retrouvé seul à la maison.", s:"Se ___ solo en casa.", o:["puso","quedó","volvió"], a:1, why:"L'état dans lequel un événement te laisse : quedarse, se quedó."},
]);

// ───────── C1 ─────────
add("es_si_pluscuam", [
 {th:"Travel", t:"tr", fr:"Si nous étions partis plus tôt, nous serions arrivés à l'heure.", a:["Si hubiéramos salido antes, habríamos llegado a tiempo.","Si hubiésemos salido antes, habríamos llegado a tiempo.","Si hubiéramos salido antes, hubiéramos llegado a tiempo."], why:"Un passé imaginé : si + hubiera + participe, puis habría + participe."},
 {th:"Work", t:"gap", fr:"Si j'avais su, je ne l'aurais pas dit.", s:"Si ___ sabido, no lo habría dicho.", a:["hubiera","hubiese"], why:"Après si : hubiera + participe. Jamais habría dans cette partie."},
 {th:"Health", t:"qcm", fr:"S'il s'était échauffé, il ne se serait pas blessé.", s:"Si hubiera calentado, no se ___ lesionado.", o:["había","hubo","habría"], a:2, why:"Le résultat imaginé dans le passé : habría + participe."},
]);
add("es_cond_mixtas", [
 {th:"Work", t:"tr", fr:"Si j'avais étudié le droit, je serais avocat aujourd'hui.", a:["Si hubiera estudiado derecho, hoy sería abogado.","Si hubiese estudiado derecho, hoy sería abogado.","Si hubiera estudiado derecho, ahora sería abogado."], why:"Les études, c'est le passé : hubiera estudiado. Le métier, c'est aujourd'hui : sería."},
 {th:"Health", t:"gap", fr:"Si j'avais arrêté de fumer, je respirerais mieux maintenant.", s:"Si hubiera dejado de fumar, ahora ___ mejor.", a:["respiraría"], why:"Ahora : le résultat est présent, respiraría au conditionnel simple."},
 {th:"Family", t:"qcm", fr:"Si mon frère était plus patient, il n'aurait pas crié.", s:"Si mi hermano ___ más paciente, no habría gritado.", o:["fuera","hubiera sido","sería"], a:0, why:"La patience, c'est un trait de caractère actuel : fuera. Le cri, c'était avant."},
]);
add("es_aunque", [
 {th:"Weather", t:"tr", fr:"Bien qu'il pleuve, nous sortons. (il pleut vraiment)", a:["Aunque llueve, salimos.","Aunque está lloviendo, salimos."], why:"Il pleut vraiment, c'est un fait : aunque + indicatif, llueve."},
 {th:"Food", t:"gap", fr:"Même si c'est cher, je le prends. (je ne sais pas le prix)", s:"Aunque ___ caro, lo compro.", a:["sea"], why:"Tu écartes une objection possible : aunque + subjonctif, sea."},
 {th:"Work", t:"qcm", fr:"Même si le chef dit non, je partirai.", s:"Aunque el jefe ___ que no, me iré.", o:["dice","diga","dirá"], a:1, why:"Le chef n'a encore rien dit : hypothèse, donc subjonctif, diga."},
]);
add("es_perifrasis", [
 {th:"Climbing", t:"tr", fr:"Ça fait trois ans que je grimpe.", a:["Llevo tres años escalando."], why:"Depuis combien de temps : llevar + durée + gérondif. Llevo tres años escalando."},
 {th:"Food", t:"gap", fr:"Je viens de dîner.", s:"___ de cenar.", a:["Acabo"], why:"Venir de + infinitif se dit acabar de : acabo de cenar."},
 {th:"Health", t:"qcm", fr:"Il a arrêté de boire du café.", s:"___ de tomar café.", o:["Volvió","Acabó","Dejó"], a:2, why:"Arrêter de : dejar de. Volver a voudrait dire recommencer."},
]);
add("es_conectores", [
 {th:"Weather", t:"tr", fr:"Malgré le froid, nous avons nagé.", a:["A pesar del frío, nadamos.","Pese al frío, nadamos.","A pesar del frío, nos bañamos."], why:"Malgré + nom : a pesar de. De + el se colle en del."},
 {th:"Work", t:"gap", fr:"Le salaire est bon ; cependant, les horaires sont longs.", s:"El sueldo es bueno; ___, el horario es largo.", a:["sin embargo","no obstante"], why:"Cependant, entre deux phrases : sin embargo, ou no obstante."},
 {th:"Travel", t:"qcm", fr:"Bien qu'il ait plu, le voyage a été génial.", s:"___ llovió, el viaje fue genial.", o:["A pesar de que","A pesar de","Sin embargo"], a:0, why:"Devant un verbe conjugué : a pesar de que. A pesar de demanderait un nom."},
]);
add("es_como_si", [
 {th:"Work", t:"tr", fr:"Il parle comme s'il savait tout.", a:["Habla como si lo supiera todo.","Habla como si supiera todo.","Habla como si lo supiese todo."], why:"Como si est toujours suivi du subjonctif imparfait : supiera."},
 {th:"Family", t:"gap", fr:"Elle me regarde comme si j'étais un enfant.", s:"Me mira como si ___ un niño.", a:["fuera","fuese"], why:"Piège : le français dit « étais », como si veut fuera."},
 {th:"Food", t:"qcm", fr:"Il mange comme s'il n'avait pas mangé depuis des jours.", s:"Come como si no ___ en días.", o:["había comido","hubiera comido","comiera habido"], a:1, why:"Ne pas avoir mangé, c'est avant : subjonctif plus-que-parfait, hubiera comido."},
]);

// ───────── C2 ─────────
add("es_modismos", [
 {th:"Shopping", t:"tr", fr:"Ça coûte les yeux de la tête.", a:["Cuesta un ojo de la cara."], why:"En espagnol, ça coûte un œil du visage : un ojo de la cara."},
 {th:"Work", t:"gap", fr:"C'est du gâteau !", s:"¡Es pan ___!", a:["comido"], why:"Très facile se dit es pan comido, du pain déjà mangé."},
 {th:"Weather", t:"qcm", fr:"Il pleut des cordes.", s:"Llueve a ___.", o:["cuerdas","gatos","cántaros"], a:2, why:"En espagnol, il pleut à cruches : llueve a cántaros. Les cordes, c'est la version française."},
]);
add("es_probabilidad", [
 {th:"Family", t:"tr", fr:"Il doit être chez lui. (supposition)", a:["Estará en casa.","Estará en su casa."], why:"Pour supposer sur maintenant, l'espagnol utilise le futur : estará."},
 {th:"Travel", t:"gap", fr:"Ils devaient être fatigués après le voyage.", s:"___ cansados después del viaje.", a:["Estarían"], why:"Une supposition sur le passé : conditionnel, estarían."},
 {th:"Home", t:"qcm", fr:"Qui a bien pu laisser la porte ouverte ?", s:"¿Quién ___ la puerta abierta?", o:["habrá dejado","haya dejado","había dejado"], a:0, why:"Tu te demandes ce qui vient de se passer : futur antérieur, habrá dejado."},
]);
add("es_relativo_subj", [
 {th:"Home", t:"tr", fr:"Je cherche un appartement qui ait une terrasse.", a:["Busco un piso que tenga terraza.","Busco un piso que tenga una terraza.","Busco un apartamento que tenga terraza."], why:"Tu ne l'as pas encore trouvé : subjonctif, tenga."},
 {th:"Work", t:"gap", fr:"J'ai un collègue qui parle chinois.", s:"Tengo un compañero que ___ chino.", a:["habla"], why:"Ce collègue existe, tu le connais : indicatif, habla."},
 {th:"Food", t:"qcm", fr:"Il n'y a rien qui me plaise sur la carte.", s:"No hay nada en la carta que me ___.", o:["gusta","guste","gustará"], a:1, why:"No hay nada que : rien n'existe, donc subjonctif, guste."},
]);
add("es_de_inf", [
 {th:"Weather", t:"tr", fr:"S'il pleut, nous resterons à la maison.", a:["De llover, nos quedaremos en casa.","Si llueve, nos quedaremos en casa."], why:"De + infinitif remplace « si » : de llover. C'est une tournure soignée."},
 {th:"Travel", t:"gap", fr:"Si j'avais su, je serais venu.", s:"De ___ sabido, habría venido.", a:["haber"], why:"De haber + participe veut dire « si j'avais »."},
 {th:"Health", t:"qcm", fr:"Si la douleur continue, appelez le médecin.", s:"De ___ el dolor, llame al médico.", o:["continúa","continuara","continuar"], a:2, why:"Après de, toujours l'infinitif : de continuar."},
]);
add("es_registro", [
 {th:"Work", t:"tr", fr:"Je souhaiterais parler au directeur.", a:["Quisiera hablar con el director.","Querría hablar con el director.","Me gustaría hablar con el director."], why:"Quisiera adoucit la demande, comme « je souhaiterais »."},
 {th:"Travel", t:"gap", fr:"Pourriez-vous m'aider, monsieur ?", s:"¿___ ayudarme, señor?", a:["Podría"], why:"Avec usted, à la 3e personne : podría."},
 {th:"Shopping", t:"qcm", fr:"Je vous serais reconnaissant de me rembourser.", s:"Le agradecería que me ___ el dinero.", o:["devolviera","devuelve","devolverá"], a:0, why:"Le agradecería que + subjonctif imparfait : devolviera."},
]);
add("es_por_mucho_que", [
 {th:"Work", t:"tr", fr:"J'ai beau travailler, je n'avance pas. (c'est un fait)", a:["Por más que trabajo, no avanzo.","Por mucho que trabajo, no avanzo."], why:"Tu travailles vraiment : por más que + indicatif, trabajo."},
 {th:"Food", t:"gap", fr:"Tu auras beau insister, je ne goûterai pas.", s:"Por mucho que ___, no lo probaré.", a:["insistas"], why:"C'est une hypothèse future : subjonctif, insistas."},
 {th:"Climbing", t:"qcm", fr:"Aussi difficile que soit la voie, je la ferai.", s:"Por muy ___ que sea la vía, la haré.", o:["mucho","difícil","más"], a:1, why:"Devant un adjectif : por muy + adjectif + que + subjonctif."},
]);
})();

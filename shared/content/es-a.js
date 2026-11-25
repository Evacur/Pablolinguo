// Spanish exercise bank, levels A1–B1.
(function(){
const P = window.PACKS && window.PACKS.es; if(!P) return;
P.bank = P.bank || {}; P.boss = P.boss || {}; P.levels = P.levels || {};
Object.assign(P.bank, {

es_ser_estar:[
 {th:"Food",t:"tr",fr:"La soupe est froide.",a:["La sopa está fría."],why:"La soupe est froide maintenant, mais elle ne l'était pas avant : c'est un état passager, donc estar. Ser serait pour ce qu'elle est toujours."},
 {th:"Work",t:"tr",fr:"Mon père est professeur.",a:["Mi padre es profesor.","Mi papá es profesor."],why:"Le métier fait partie de qui tu es : ser. Et comme en français, pas d'article : es profesor."},
 {th:"City",t:"tr",fr:"Le musée est fermé.",a:["El museo está cerrado."],why:"Fermé ou ouvert, c'est l'état du moment, demain ça peut changer : estar."},
 {th:"Family",t:"tr",fr:"Ma sœur est très sympa.",a:["Mi hermana es muy simpática.","Mi hermana es muy maja.","Mi hermana es muy amable."],why:"Ta sœur est sympa tout le temps, pas juste aujourd'hui : c'est son caractère, donc ser. Estar parlerait d'une humeur du moment."},
 {th:"Health",t:"tr",fr:"Aujourd'hui, je suis malade.",a:["Hoy estoy enfermo.","Hoy estoy enferma.","Estoy enfermo hoy.","Estoy enferma hoy.","Hoy yo estoy enfermo.","Hoy yo estoy enferma."],why:"Être malade, c'est un état, ça passera : estar. Ser enfermo voudrait dire être quelqu'un de maladif."},
 {th:"Travel",t:"gap",s:"Mis amigos ___ en Madrid.",a:["están"],h:"ser / estar",fr:"Mes amis sont à Madrid.",why:"Pour dire où se trouve quelqu'un ou quelque chose, c'est toujours estar. Retiens-le : un lieu, c'est estar."},
 {th:"Nature",t:"gap",s:"El lago ___ muy grande.",a:["es"],h:"ser / estar",fr:"Le lac est très grand.",why:"La taille du lac ne change pas : c'est une caractéristique, donc ser."},
 {th:"Home",t:"gap",s:"La puerta ___ abierta.",a:["está"],h:"ser / estar",fr:"La porte est ouverte.",why:"Ouverte maintenant, fermée plus tard : c'est un état, donc estar."},
 {th:"Climbing",t:"gap",s:"Después de escalar, ___ muy cansados.",a:["estamos"],h:"ser / estar, nosotros",fr:"Après l'escalade, nous sommes très fatigués.",why:"Après l'escalade, la fatigue est un état qui passera : estar. Avec nosotros : estamos."},
 {th:"Weather",t:"qcm",s:"Hoy el cielo ___ gris.",o:["es","está","hay"],a:1,fr:"Aujourd'hui, le ciel est gris.",why:"Gris aujourd'hui, bleu demain : c'est un état du moment, donc estar."},
 {th:"Shopping",t:"qcm",s:"Esta camiseta ___ de algodón.",o:["está","es","hay","tiene"],a:1,fr:"Ce tee-shirt est en coton.",why:"La matière d'un objet fait partie de ce qu'il est : ser de. Es de algodón."},
 {th:"Restaurant",t:"qcm",s:"El camarero ___ argentino.",o:["está","es","hay"],a:1,fr:"Le serveur est argentin.",why:"L'origine ne change pas : ser. Même si tu le vois au travail, il est argentin pour toujours."}
],

es_articulos:[
 {th:"Food",t:"tr",fr:"Le lait est frais.",a:["La leche está fresca."],why:"Attention, en espagnol le lait est féminin : la leche. Et l'adjectif suit : fresca."},
 {th:"Nature",t:"tr",fr:"La vallée est belle.",a:["El valle es bonito.","El valle es precioso.","El valle es hermoso.","El valle es bello."],why:"En espagnol, la vallée est masculine : el valle. L'adjectif suit au masculin : bonito."},
 {th:"City",t:"tr",fr:"J'ai le plan de la ville.",a:["Tengo el mapa de la ciudad.","Tengo el plano de la ciudad.","Yo tengo el mapa de la ciudad."],why:"Mapa finit en -a mais il est masculin : el mapa. C'est une exception à retenir."},
 {th:"Shopping",t:"tr",fr:"La couleur est jolie.",a:["El color es bonito.","El color es precioso.","El color es lindo."],why:"Color est masculin en espagnol : el color. Le français dit « la couleur », ne te fie pas à lui."},
 {th:"Weather",t:"tr",fr:"Le climat est doux.",a:["El clima es suave.","El clima es templado."],why:"Les mots d'origine grecque en -ma sont masculins : el clima, el problema, el tema."},
 {th:"Home",t:"gap",s:"___ sofá es muy cómodo.",a:["El"],h:"el / la",fr:"Le canapé est très confortable.",why:"Sofá est masculin, même avec sa finale en -á : el sofá."},
 {th:"Family",t:"gap",s:"Tengo ___ hermana y un hermano.",a:["una"],fr:"J'ai une sœur et un frère.",why:"Hermana finit en -a, c'est une femme : una hermana. Pour un homme, un hermano."},
 {th:"Travel",t:"gap",s:"___ foto del viaje es preciosa.",a:["La"],h:"el / la",fr:"La photo du voyage est magnifique.",why:"Foto est le diminutif de fotografía, qui est féminin : la foto, malgré le -o."},
 {th:"Restaurant",t:"gap",s:"___ sal está en la mesa.",a:["La"],h:"el / la",fr:"Le sel est sur la table.",why:"Piège : le sel est masculin en français, mais en espagnol il est féminin : la sal."},
 {th:"Climbing",t:"qcm",s:"___ equipo de escalada es caro.",o:["La","El","Los"],a:1,fr:"L'équipement d'escalade est cher.",why:"Equipo est masculin : el equipo. Le « l' » français ne t'aide pas à deviner le genre."},
 {th:"Health",t:"qcm",s:"___ sangre es roja.",o:["El","La","Lo"],a:1,fr:"Le sang est rouge.",why:"La sangre est féminin en espagnol, alors qu'en français le sang est masculin. Et l'adjectif suit : roja."},
 {th:"Nature",t:"qcm",s:"___ águila vuela muy alto.",o:["La","El","Lo"],a:1,fr:"L'aigle vole très haut.",why:"Águila est féminin, mais on dit el águila parce que le mot commence par un a accentué, comme el agua. Le pluriel redevient las águilas."}
],

es_plurales:[
 {th:"Food",t:"tr",fr:"Les tomates sont rouges.",a:["Los tomates son rojos."],why:"Tomate est masculin en espagnol : los tomates. Finale en voyelle, on ajoute juste -s."},
 {th:"City",t:"tr",fr:"Les rues sont étroites.",a:["Las calles son estrechas.","Las calles son angostas."],why:"Calle finit par une voyelle, donc on ajoute -s : calles."},
 {th:"Nature",t:"tr",fr:"Les fleurs sont jolies.",a:["Las flores son bonitas.","Las flores son preciosas.","Las flores son lindas."],why:"Flor finit par une consonne, donc on ajoute -es : flores."},
 {th:"Work",t:"tr",fr:"Demain, j'ai trois réunions.",a:["Mañana tengo tres reuniones.","Tengo tres reuniones mañana.","Mañana yo tengo tres reuniones."],why:"Reunión prend -es au pluriel, et l'accent écrit disparaît : reuniones. L'accent tombe naturellement sur la bonne syllabe."},
 {th:"Family",t:"tr",fr:"Mes parents sont jeunes.",a:["Mis padres son jóvenes."],why:"Joven prend -es, et on ajoute un accent pour garder la même intonation : jóvenes."},
 {th:"Home",t:"gap",s:"En la cocina hay dos ___.",a:["luces"],h:"luz",fr:"Dans la cuisine, il y a deux lampes.",why:"Au pluriel, le z devient c devant -es : luz, luces. L'espagnol n'aime pas écrire « ze »."},
 {th:"Shopping",t:"gap",s:"Compro tres ___ en la panadería.",a:["panes"],h:"pan",fr:"J'achète trois pains à la boulangerie.",why:"Pan finit par une consonne, donc -es : panes."},
 {th:"Travel",t:"gap",s:"Los ___ salen a las nueve.",a:["autobuses"],h:"autobús",fr:"Les bus partent à neuf heures.",why:"Autobús prend -es, et l'accent écrit disparaît : autobuses."},
 {th:"Restaurant",t:"gap",s:"¿Tienen ___ para niños?",a:["menús"],h:"menú",fr:"Vous avez des menus pour enfants ?",why:"Menú finit par une voyelle accentuée : on ajoute simplement -s, menús."},
 {th:"Weather",t:"qcm",s:"En invierno, los días son ___.",o:["gris","grises","grisos"],a:1,fr:"En hiver, les jours sont gris.",why:"Gris finit par une consonne, donc grises au pluriel. En français, gris ne bouge pas, en espagnol si."},
 {th:"Climbing",t:"qcm",s:"Tengo los ___ cansados.",o:["pieses","pies","piés"],a:1,fr:"J'ai les pieds fatigués.",why:"Pie finit par une voyelle : pies, tout simplement."},
 {th:"Health",t:"qcm",s:"Voy al médico dos ___ al año.",o:["vez","vezes","veces"],a:2,fr:"Je vais chez le médecin deux fois par an.",why:"Vez devient veces : le z se change en c devant -es."}
],

es_hay:[
 {th:"Home",t:"tr",fr:"Il y a deux chambres.",a:["Hay dos habitaciones.","Hay dos dormitorios.","Hay dos cuartos."],why:"Hay veut dire « il y a » et ne change jamais, même au pluriel : hay dos habitaciones."},
 {th:"City",t:"tr",fr:"La banque est sur la place.",a:["El banco está en la plaza."],why:"Quand tu situes une chose précise (el banco), c'est estar. Hay, c'est pour annoncer qu'une chose existe."},
 {th:"Food",t:"tr",fr:"Il y a des œufs dans le frigo.",a:["Hay huevos en la nevera.","Hay huevos en el frigorífico.","Hay huevos en el frigo.","Hay huevos en el refrigerador.","Hay huevos en la heladera."],why:"Avec hay, pas d'article : hay huevos. Le « des » français disparaît."},
 {th:"Travel",t:"tr",fr:"Où sont les toilettes ?",a:["¿Dónde están los servicios?","¿Dónde están los aseos?","¿Dónde están los baños?","¿Dónde está el baño?","¿Dónde está el servicio?"],why:"Pour demander où se trouve quelque chose, dónde + estar. Los servicios est au pluriel, donc están."},
 {th:"Nature",t:"tr",fr:"Ici, il n'y a pas d'arbres.",a:["Aquí no hay árboles.","No hay árboles aquí."],why:"No hay + le nom, sans article et sans « de » : no hay árboles."},
 {th:"Shopping",t:"gap",s:"___ un supermercado en mi calle.",a:["Hay"],h:"hay / está",fr:"Il y a un supermarché dans ma rue.",why:"Avec un ou una, tu annonces qu'une chose existe : hay un supermercado."},
 {th:"Restaurant",t:"gap",s:"Mi mesa ___ al lado de la ventana.",a:["está"],h:"hay / está",fr:"Ma table est à côté de la fenêtre.",why:"Mi mesa est une table précise, tu la situes : estar."},
 {th:"Work",t:"gap",s:"En mi oficina ___ diez personas.",a:["hay"],h:"hay / están",fr:"Dans mon bureau, il y a dix personnes.",why:"Hay ne change jamais, même pour dix personnes."},
 {th:"Climbing",t:"gap",s:"La cuerda ___ en el coche.",a:["está"],h:"hay / está",fr:"La corde est dans la voiture.",why:"La cuerda est une chose précise : on la situe avec estar. Jamais « hay la cuerda »."},
 {th:"Family",t:"qcm",s:"Mis padres ___ en casa.",o:["hay","están","son"],a:1,fr:"Mes parents sont à la maison.",why:"Tes parents, ce sont des personnes précises, on dit où elles sont : están."},
 {th:"Weather",t:"qcm",s:"Hoy ___ mucha niebla.",o:["está","hay","es"],a:1,fr:"Aujourd'hui, il y a beaucoup de brouillard.",why:"Mucha niebla annonce une quantité, sans le ou la devant : hay."},
 {th:"Health",t:"qcm",s:"¿Dónde ___ el hospital?",o:["hay","está","es"],a:1,fr:"Où est l'hôpital ?",why:"El hospital est précis, tu demandes où il se trouve : está."}
],

es_gustar:[
 {th:"Food",t:"tr",fr:"J'aime les oranges.",a:["Me gustan las naranjas.","A mí me gustan las naranjas."],why:"Avec gustar, ce qu'on aime est le sujet du verbe. Les oranges sont au pluriel, donc gustan."},
 {th:"Nature",t:"tr",fr:"Nous aimons la montagne.",a:["Nos gusta la montaña.","A nosotros nos gusta la montaña.","A nosotras nos gusta la montaña."],why:"Ce qui compte, c'est la chose aimée : la montaña est au singulier, donc gusta, même si « nous » est pluriel."},
 {th:"Climbing",t:"tr",fr:"Ma copine aime grimper.",a:["A mi novia le gusta escalar.","A mi novia le gusta trepar."],why:"Pour une autre personne : a + la personne + le gusta. Suivi d'un verbe, gusta reste au singulier."},
 {th:"Weather",t:"tr",fr:"Je n'aime pas la pluie.",a:["No me gusta la lluvia.","A mí no me gusta la lluvia."],why:"No se met juste avant le pronom : no me gusta."},
 {th:"Travel",t:"tr",fr:"Vous aimez voyager ? (vous = vosotros)",a:["¿Os gusta viajar?","¿A vosotros os gusta viajar?","¿A vosotras os gusta viajar?","¿Les gusta viajar?","¿A ustedes les gusta viajar?"],why:"Avec un verbe à l'infinitif, gusta reste au singulier. Pour vosotros, le pronom est os."},
 {th:"Home",t:"gap",s:"Me ___ mucho tu casa.",a:["gusta"],fr:"Ta maison me plaît beaucoup.",why:"Ta maison, c'est une seule chose : gusta."},
 {th:"Shopping",t:"gap",s:"¿Te ___ estos zapatos?",a:["gustan"],fr:"Ces chaussures te plaisent ?",why:"Estos zapatos est au pluriel : gustan."},
 {th:"Family",t:"gap",s:"A mis hijos ___ gustan los dibujos animados.",a:["les"],fr:"Mes enfants aiment les dessins animés.",why:"Pour ellos, le pronom est les, même quand tu as déjà dit a mis hijos."},
 {th:"Restaurant",t:"gap",s:"A Ana no le ___ el pescado.",a:["gusta"],fr:"Ana n'aime pas le poisson.",why:"El pescado est au singulier : gusta. « Gusto » voudrait dire « je plais »."},
 {th:"City",t:"qcm",s:"___ gusta vivir en Madrid.",o:["Yo","Me","Mi"],a:1,fr:"J'aime vivre à Madrid.",why:"On ne dit jamais « yo gusto ». La personne qui aime est un pronom : me gusta."},
 {th:"Work",t:"qcm",s:"A mi jefe no ___ gustan las reuniones largas.",o:["le","lo","les","se"],a:0,fr:"Mon chef n'aime pas les longues réunions.",why:"Ton chef, c'est él, donc le pronom le. Gustan s'accorde avec las reuniones."},
 {th:"Health",t:"qcm",s:"Nos ___ las verduras.",o:["gusta","gustan","gustamos"],a:1,fr:"Nous aimons les légumes.",why:"Le verbe s'accorde avec ce qu'on aime (las verduras), pas avec nosotros : gustan."}
],

es_presente:[
 {th:"Food",t:"tr",fr:"Je cuisine le soir.",a:["Cocino por la noche.","Yo cocino por la noche.","Cocino por las noches."],why:"Avec yo, on enlève -ar et on ajoute -o : cocino. Pas besoin du pronom, la terminaison suffit."},
 {th:"Work",t:"tr",fr:"Mon frère travaille à l'hôpital.",a:["Mi hermano trabaja en el hospital."],why:"Avec él, -ar devient -a : trabaja. Et pour dire où on est, c'est en."},
 {th:"Shopping",t:"tr",fr:"Nous achetons du pain.",a:["Compramos pan.","Nosotros compramos pan.","Nosotras compramos pan."],why:"Nosotros, c'est -amos. Et l'espagnol n'a pas de « du » : compramos pan, tout simplement."},
 {th:"Home",t:"tr",fr:"Ils habitent dans un appartement.",a:["Viven en un piso.","Viven en un apartamento.","Ellos viven en un piso.","Ellos viven en un apartamento.","Ellas viven en un piso.","Ellas viven en un apartamento.","Viven en un departamento."],why:"Vivir, avec ellos : -en. Viven."},
 {th:"Climbing",t:"tr",fr:"Tu grimpes le samedi ?",a:["¿Escalas los sábados?","¿Tú escalas los sábados?"],why:"Tú, c'est -as : escalas. Une habitude se dit los sábados, au pluriel."},
 {th:"City",t:"gap",s:"Yo ___ en el centro.",a:["vivo"],h:"vivir",fr:"J'habite dans le centre.",why:"Yo prend -o, quel que soit le groupe du verbe : vivo."},
 {th:"Restaurant",t:"gap",s:"¿Qué ___ vosotros?",a:["bebéis"],h:"beber",fr:"Qu'est-ce que vous buvez ?",why:"Vosotros, avec un verbe en -er : -éis. Bebéis."},
 {th:"Travel",t:"gap",s:"El tren ___ a las diez.",a:["llega"],h:"llegar",fr:"Le train arrive à dix heures.",why:"Él ou ella, verbe en -ar : -a. Llega."},
 {th:"Family",t:"gap",s:"Mis abuelos ___ el periódico cada día.",a:["leen"],h:"leer",fr:"Mes grands-parents lisent le journal tous les jours.",why:"Ellos, verbe en -er : -en. D'où leen, avec deux e."},
 {th:"Weather",t:"qcm",s:"En invierno ___ mucho.",o:["llove","llueve","lluvia"],a:1,fr:"En hiver, il pleut beaucoup.",why:"Llover change son o en ue : llueve. La lluvia, c'est le nom, la pluie."},
 {th:"Nature",t:"qcm",s:"Nosotros ___ por el bosque los domingos.",o:["caminamos","caminemos","caminan"],a:0,fr:"Nous marchons dans la forêt le dimanche.",why:"Nosotros, verbe en -ar : -amos. Caminamos."},
 {th:"Health",t:"qcm",s:"Mi hija ___ diez horas cada noche.",o:["dorme","duerme","dormes"],a:1,fr:"Ma fille dort dix heures chaque nuit.",why:"Dormir change son o en ue : duerme. C'est le même mécanisme que poder, puede."}
],

es_tener_ir:[
 {th:"Weather",t:"tr",fr:"J'ai froid.",a:["Tengo frío.","Yo tengo frío."],why:"Pour le froid qu'on ressent, l'espagnol utilise tener, comme notre « avoir » : tengo frío."},
 {th:"Travel",t:"tr",fr:"Nous allons à la plage.",a:["Vamos a la playa.","Nosotros vamos a la playa.","Nosotras vamos a la playa."],why:"Ir avec nosotros : vamos. Et pour la destination, on met a : vamos a la playa."},
 {th:"Family",t:"tr",fr:"Ma sœur a deux enfants.",a:["Mi hermana tiene dos hijos.","Mi hermana tiene dos niños."],why:"Avoir, c'est tener. Avec ella, le e devient ie : tiene."},
 {th:"Health",t:"tr",fr:"Tu as soif ?",a:["¿Tienes sed?","¿Tú tienes sed?"],why:"La soif aussi se dit avec tener : tienes sed."},
 {th:"Climbing",t:"tr",fr:"Ils vont à la salle d'escalade.",a:["Van al rocódromo.","Ellos van al rocódromo.","Ellas van al rocódromo.","Van a la sala de escalada.","Van al muro de escalada."],why:"Ir avec ellos : van. Et a + el se colle en al : al rocódromo."},
 {th:"Work",t:"gap",s:"Hoy ___ mucho trabajo.",a:["tengo"],h:"tener, yo",fr:"Aujourd'hui, j'ai beaucoup de travail.",why:"Tener est irrégulier avec yo : tengo. À apprendre par cœur, il revient tout le temps."},
 {th:"City",t:"gap",s:"¿___ al museo con nosotros?",a:["Vas"],h:"ir, tú",fr:"Tu vas au musée avec nous ?",why:"Ir avec tú : vas. Ça ne ressemble pas du tout à l'infinitif, c'est normal."},
 {th:"Shopping",t:"gap",s:"Vamos ___ supermercado.",a:["al"],fr:"Nous allons au supermarché.",why:"A + el se colle toujours en al : al supermercado."},
 {th:"Home",t:"gap",s:"Mi casa ___ un jardín pequeño.",a:["tiene"],h:"tener",fr:"Ma maison a un petit jardin.",why:"Avec ella, tener devient tiene : le e se change en ie."},
 {th:"Restaurant",t:"qcm",s:"Mi hijo ___ hambre.",o:["es","está","tiene"],a:2,fr:"Mon fils a faim.",why:"Avoir faim se dit tener hambre, jamais ser ni estar."},
 {th:"Food",t:"qcm",s:"¿Vosotros ___ al mercado hoy?",o:["vais","vas","vamos"],a:0,fr:"Vous allez au marché aujourd'hui ?",why:"Ir avec vosotros : vais."},
 {th:"Nature",t:"qcm",s:"Mañana voy ___ montaña.",o:["a la","en la","al"],a:0,fr:"Demain, je vais à la montagne.",why:"Pour une direction, c'est a. En, c'est pour l'endroit où on est. Montaña est féminin : a la montaña."}
],

es_indefinido:[
 {th:"Travel",t:"tr",fr:"L'année dernière, j'ai visité Séville.",a:["El año pasado visité Sevilla.","Visité Sevilla el año pasado.","El año pasado yo visité Sevilla."],why:"L'année dernière, c'est un moment fini : passé simple espagnol (indefinido). Visité, avec l'accent."},
 {th:"Food",t:"tr",fr:"Hier soir, nous avons dîné chez Ana.",a:["Anoche cenamos en casa de Ana.","Ayer por la noche cenamos en casa de Ana.","Anoche cenamos con Ana en su casa."],why:"Anoche, c'est hier soir, un moment fini : indefinido. Chez quelqu'un se dit en casa de."},
 {th:"Work",t:"tr",fr:"Il a fini le rapport lundi.",a:["Terminó el informe el lunes.","Acabó el informe el lunes.","Él terminó el informe el lunes.","Él acabó el informe el lunes.","Terminó el reporte el lunes."],why:"Avec él, -ar devient -ó au passé : terminó. L'accent compte : termino, sans accent, veut dire « je termine »."},
 {th:"Climbing",t:"tr",fr:"Nous avons grimpé pendant six heures.",a:["Escalamos seis horas.","Escalamos durante seis horas.","Nosotros escalamos seis horas.","Nosotros escalamos durante seis horas."],why:"Une durée finie : indefinido. Avec nosotros, escalamos est pareil au présent, c'est le contexte qui décide."},
 {th:"Shopping",t:"tr",fr:"Samedi, j'ai acheté une veste.",a:["El sábado compré una chaqueta.","Compré una chaqueta el sábado.","El sábado compré una cazadora.","El sábado compré una chamarra.","El sábado yo compré una chaqueta."],why:"Avec yo, -ar devient -é : compré. Un samedi précis : el sábado."},
 {th:"Family",t:"gap",s:"Mis padres ___ a Italia en 2019.",a:["fueron"],h:"ir",fr:"Mes parents sont allés en Italie en 2019.",why:"Ir est irrégulier au passé : fui, fuiste, fue, fuimos, fueron. Avec ellos : fueron."},
 {th:"City",t:"gap",s:"Ayer ___ el autobús.",a:["perdí"],h:"perder, yo",fr:"Hier, j'ai raté le bus.",why:"Rater le bus se dit perder el autobús. Avec yo, -er devient -í : perdí."},
 {th:"Health",t:"gap",s:"¿Por qué no ___ ayer al médico?",a:["fuiste"],h:"ir, tú",fr:"Pourquoi tu n'es pas allé chez le médecin hier ?",why:"Ir avec tú au passé : fuiste. Jamais de -s à la fin, « fuistes » est une faute très courante."},
 {th:"Weather",t:"gap",s:"El sábado ___ todo el día.",a:["llovió"],h:"llover",fr:"Samedi, il a plu toute la journée.",why:"Une journée précise et finie : indefinido. Llover devient llovió."},
 {th:"Home",t:"qcm",s:"Anoche yo ___ una pizza en casa.",o:["hací","hice","hizo"],a:1,fr:"Hier soir, j'ai fait une pizza à la maison.",why:"Hacer change complètement au passé : hice, sans accent."},
 {th:"Restaurant",t:"qcm",s:"El domingo, Ana y yo ___ en un restaurante chino.",o:["comemos","comimos","comíamos"],a:1,fr:"Dimanche, Ana et moi avons mangé dans un restaurant chinois.",why:"Un dimanche précis et terminé : indefinido. Nosotros, verbe en -er : comimos."},
 {th:"Nature",t:"qcm",s:"Ayer ___ un ciervo en el bosque.",o:["vimos","veíamos","vemos"],a:0,fr:"Hier, nous avons vu un cerf dans la forêt.",why:"Hier, un événement ponctuel : indefinido. Ver avec nosotros : vimos."}
],

es_imperfecto:[
 {th:"Family",t:"tr",fr:"Mon grand-père était pêcheur.",a:["Mi abuelo era pescador."],why:"Pour décrire quelqu'un dans le passé, on utilise l'imparfait (imperfecto). Ser devient era."},
 {th:"Home",t:"tr",fr:"Avant, nous avions un chien.",a:["Antes teníamos un perro.","Antes nosotros teníamos un perro."],why:"Antes annonce une situation qui durait : imperfecto. Tener devient teníamos."},
 {th:"Weather",t:"tr",fr:"Il faisait très chaud.",a:["Hacía mucho calor."],why:"La météo qui sert de décor : imperfecto. Calor est un nom, donc mucho calor."},
 {th:"Climbing",t:"tr",fr:"Le mur était très haut.",a:["La pared era muy alta.","El muro era muy alto."],why:"Pour décrire un lieu dans le passé : imperfecto. Era muy alta."},
 {th:"Travel",t:"tr",fr:"Tous les étés, nous allions en Espagne.",a:["Todos los veranos íbamos a España.","Cada verano íbamos a España."],why:"Tous les étés, c'est une habitude : imperfecto. Ir est irrégulier : íbamos."},
 {th:"Food",t:"gap",s:"De niña, no me ___ las verduras.",a:["gustaban"],h:"gustar",fr:"Petite, je n'aimais pas les légumes.",why:"Une habitude passée, et las verduras au pluriel : gustaban."},
 {th:"Work",t:"gap",s:"Antes ___ en una tienda.",a:["trabajaba"],h:"trabajar, yo",fr:"Avant, je travaillais dans un magasin.",why:"À l'imparfait, -ar devient -aba : trabajaba."},
 {th:"City",t:"gap",s:"Cuando era joven, ___ al cine cada semana.",a:["iba"],h:"ir, yo",fr:"Quand j'étais jeune, j'allais au cinéma chaque semaine.",why:"Chaque semaine, c'est une habitude : imperfecto. Ir devient iba."},
 {th:"Health",t:"gap",s:"Mi abuela ___ mucho deporte.",a:["hacía"],h:"hacer, imperfecto",fr:"Ma grand-mère faisait beaucoup de sport.",why:"À l'imparfait, -er devient -ía, avec un accent : hacía."},
 {th:"Nature",t:"qcm",s:"La casa ___ cerca de un río.",o:["estuvo","estaba","está"],a:1,fr:"La maison était près d'une rivière.",why:"Pour situer un décor dans le passé : imperfecto, estaba."},
 {th:"Shopping",t:"qcm",s:"Antes las cosas ___ más baratas.",o:["eran","fueron","son"],a:0,fr:"Avant, les choses étaient moins chères.",why:"Tu compares avec une époque passée : imperfecto, eran."},
 {th:"Restaurant",t:"qcm",s:"De pequeños, nuestros padres nos ___ a este bar.",o:["llevaban","llevaron","llevan"],a:0,fr:"Quand on était petits, nos parents nous emmenaient dans ce bar.",why:"De pequeños, c'est l'enfance, une habitude : imperfecto, llevaban."}
],

es_reflexivos:[
 {th:"Health",t:"tr",fr:"Je me brosse les dents.",a:["Me lavo los dientes.","Me cepillo los dientes.","Yo me lavo los dientes.","Yo me cepillo los dientes."],why:"Avec un verbe pronominal, on met l'article devant les parties du corps : me lavo los dientes. Pas mis dientes."},
 {th:"Home",t:"tr",fr:"Il se réveille tôt.",a:["Se despierta temprano.","Se despierta pronto.","Él se despierta temprano."],why:"Despertarse : le se passe devant le verbe, et le e devient ie : se despierta."},
 {th:"Family",t:"tr",fr:"Mes enfants s'habillent seuls.",a:["Mis hijos se visten solos.","Mis niños se visten solos."],why:"S'habiller, c'est vestirse : le e devient i, et avec ellos le pronom est se. Se visten."},
 {th:"Work",t:"tr",fr:"Tu te reposes le dimanche ?",a:["¿Descansas los domingos?","¿Tú descansas los domingos?"],why:"Piège : se reposer se dit descansar, et ce verbe n'est pas pronominal en espagnol. Descansas, sans te."},
 {th:"Travel",t:"tr",fr:"Nous partons demain.",a:["Nos vamos mañana.","Mañana nos vamos.","Nosotros nos vamos mañana."],why:"Pour partir d'un endroit, l'espagnol aime irse : nos vamos. Ir tout seul dirait juste « aller »."},
 {th:"Climbing",t:"gap",s:"Antes de escalar, ___ ponemos el arnés.",a:["nos"],fr:"Avant de grimper, nous mettons le baudrier.",why:"Mettre sur soi, c'est ponerse. Avec nosotros, le pronom est nos : nos ponemos."},
 {th:"Restaurant",t:"gap",s:"Ana se ___ a cenar.",a:["queda"],h:"quedarse",fr:"Ana reste dîner.",why:"Rester se dit quedarse, et il est pronominal en espagnol : se queda."},
 {th:"City",t:"gap",s:"Siempre me ___ en esta ciudad.",a:["pierdo"],h:"perderse",fr:"Je me perds toujours dans cette ville.",why:"Perderse change son e en ie : me pierdo. Le même mécanisme que querer, quiero."},
 {th:"Weather",t:"gap",s:"Con este frío, me ___ el abrigo.",a:["pongo"],h:"ponerse",fr:"Avec ce froid, je mets mon manteau.",why:"Pour un vêtement qu'on met, ponerse : me pongo. Et l'espagnol dit el abrigo, pas mi abrigo, puisque me dit déjà que c'est le tien."},
 {th:"Food",t:"qcm",s:"¿Quieres ___ a cenar?",o:["quedarte","te quedar","quedarse"],a:0,fr:"Tu veux rester dîner ?",why:"Après quieres, le verbe reste à l'infinitif, et le pronom se colle à la fin : quedarte. Te, parce que c'est toi qui restes."},
 {th:"Nature",t:"qcm",s:"Vosotros ___ bañáis en el río.",o:["os","se","vos","nos"],a:0,fr:"Vous vous baignez dans la rivière.",why:"Avec vosotros, le pronom est os : os bañáis. Se, c'est pour él, ellos et usted."},
 {th:"Shopping",t:"qcm",s:"Mi madre ___ prueba el vestido.",o:["se","le","la","me"],a:0,fr:"Ma mère essaie la robe.",why:"Essayer un vêtement se dit probarse : se prueba. Le o devient ue, comme dans poder."}
],

es_ir_a:[
 {th:"Weather",t:"tr",fr:"Demain, il va faire froid.",a:["Mañana va a hacer frío.","Va a hacer frío mañana."],why:"Pour le futur proche, ir a + infinitif, exactement comme « aller faire ». Et n'oublie pas le a : va a hacer."},
 {th:"Food",t:"tr",fr:"Je vais préparer une tortilla.",a:["Voy a preparar una tortilla.","Voy a hacer una tortilla.","Yo voy a preparar una tortilla.","Yo voy a hacer una tortilla."],why:"Voy a + infinitif. Le a est obligatoire, « voy preparar » est une faute."},
 {th:"Travel",t:"tr",fr:"Nous allons prendre le train.",a:["Vamos a coger el tren.","Vamos a tomar el tren.","Nosotros vamos a coger el tren.","Nosotros vamos a tomar el tren."],why:"Vamos a + infinitif. Pour prendre le train, en Espagne on dit coger ; en Amérique latine, tomar."},
 {th:"Climbing",t:"tr",fr:"Elles vont grimper cet après-midi.",a:["Van a escalar esta tarde.","Ellas van a escalar esta tarde.","Esta tarde van a escalar."],why:"Avec ellas : van a + infinitif. Van a escalar."},
 {th:"Family",t:"tr",fr:"Tu vas voir tes grands-parents ?",a:["¿Vas a ver a tus abuelos?","¿Tú vas a ver a tus abuelos?","¿Vas a visitar a tus abuelos?"],why:"Vas a + infinitif. Et devant une personne complément, l'espagnol ajoute a : ver a tus abuelos."},
 {th:"Work",t:"gap",s:"Mañana ___ a empezar un trabajo nuevo.",a:["voy"],h:"ir, yo",fr:"Demain, je vais commencer un nouveau travail.",why:"Ir se conjugue, l'infinitif ne bouge pas. Avec yo : voy a empezar."},
 {th:"Home",t:"gap",s:"Vamos ___ pintar la cocina.",a:["a"],fr:"Nous allons peindre la cuisine.",why:"Le a entre ir et l'infinitif est obligatoire. C'est l'erreur numéro un des francophones, alors garde-le en tête !"},
 {th:"Health",t:"gap",s:"El médico te ___ a dar un jarabe.",a:["va"],h:"ir",fr:"Le médecin va te donner un sirop.",why:"El médico, c'est él : va a dar. Et le pronom te se place avant va."},
 {th:"Shopping",t:"gap",s:"¿Qué ___ a comprar vosotros?",a:["vais"],h:"ir",fr:"Qu'est-ce que vous allez acheter ?",why:"Avec vosotros, ir devient vais : vais a comprar."},
 {th:"City",t:"qcm",s:"Esta noche ___ salir con Tom.",o:["voy","voy a","vaya"],a:1,fr:"Ce soir, je vais sortir avec Tom.",why:"Ir a + infinitif : voy a salir. Sans le a, la phrase ne tient pas."},
 {th:"Restaurant",t:"qcm",s:"¿Qué ___ a pedir ustedes?",o:["van","vais","vamos"],a:0,fr:"Qu'est-ce que vous allez commander ?",why:"Ustedes est poli, mais se conjugue comme ellos : van a pedir."},
 {th:"Nature",t:"qcm",s:"Creo que ___ a nevar.",o:["va","vamos","está"],a:0,fr:"Je crois qu'il va neiger.",why:"Nevar n'a pas de vrai sujet, comme « il neige » : va a nevar, à la 3e personne."}
],

es_comparativos:[
 {th:"City",t:"tr",fr:"Madrid est plus grand que Séville.",a:["Madrid es más grande que Sevilla."],why:"Plus… que se dit más… que. Simple et régulier : más grande que."},
 {th:"Food",t:"tr",fr:"Ce gâteau est meilleur que l'autre.",a:["Este pastel es mejor que el otro.","Esta tarta es mejor que la otra.","Este bizcocho es mejor que el otro.","Esta torta es mejor que la otra."],why:"Bueno a un comparatif à part : mejor. « Más bueno » sonne faux, retiens mejor."},
 {th:"Weather",t:"tr",fr:"Aujourd'hui, il fait moins froid qu'hier.",a:["Hoy hace menos frío que ayer."],why:"Moins… que se dit menos… que, même devant un nom : menos frío que."},
 {th:"Family",t:"tr",fr:"Mon frère est plus âgé que moi.",a:["Mi hermano es mayor que yo."],why:"Pour l'âge, plus âgé se dit mayor. Et après que, on dit yo : mayor que yo."},
 {th:"Climbing",t:"tr",fr:"Cette voie est aussi difficile que l'autre.",a:["Esta vía es tan difícil como la otra.","Esta ruta es tan difícil como la otra."],why:"Pour dire « aussi… que », c'est tan… como. Avec tan, jamais que."},
 {th:"Shopping",t:"gap",s:"Esta tienda es ___ cara que la otra.",a:["menos"],h:"moins",fr:"Ce magasin est moins cher que l'autre.",why:"Moins, c'est menos, et la comparaison continue avec que : menos cara que."},
 {th:"Travel",t:"gap",s:"El avión es más rápido ___ el tren.",a:["que"],fr:"L'avion est plus rapide que le train.",why:"Avec más ou menos, la comparaison se fait toujours avec que : más rápido que."},
 {th:"Health",t:"gap",s:"Hoy me siento ___ que ayer.",a:["mejor"],h:"mieux",fr:"Aujourd'hui, je me sens mieux qu'hier.",why:"Mieux se dit mejor, exactement comme meilleur. Un seul mot pour les deux, c'est pratique."},
 {th:"Home",t:"gap",s:"Mi piso es tan pequeño ___ el tuyo.",a:["como"],fr:"Mon appartement est aussi petit que le tien.",why:"Après tan, c'est toujours como : tan pequeño como."},
 {th:"Work",t:"qcm",s:"Este proyecto es ___ que el anterior.",o:["más malo","peor","más peor"],a:1,fr:"Ce projet est pire que le précédent.",why:"Malo a un comparatif à part : peor. « Más peor » dirait deux fois « plus », évite-le."},
 {th:"Restaurant",t:"qcm",s:"Aquí hay ___ mesas como en el otro bar.",o:["tan","tantas","tantos","más"],a:1,fr:"Ici, il y a autant de tables que dans l'autre bar.",why:"Devant un nom, tanto s'accorde comme un adjectif : mesas est féminin pluriel, donc tantas."},
 {th:"Nature",t:"qcm",s:"El Everest es la montaña ___ alta del mundo.",o:["más","la más","mejor"],a:0,fr:"L'Everest est la montagne la plus haute du monde.",why:"Pour le superlatif, l'espagnol ne répète pas l'article : la montaña más alta. Le français dit « la plus », l'espagnol juste más."}
],

es_gerundio:[
 {th:"Food",t:"tr",fr:"Je suis en train de cuisiner.",a:["Estoy cocinando.","Yo estoy cocinando."],why:"Être en train de se dit estar + gérondif. Les verbes en -ar font -ando : cocinando."},
 {th:"Weather",t:"tr",fr:"Il est en train de neiger.",a:["Está nevando."],why:"Estar + gérondif, à la 3e personne : está nevando. Comme pour la météo du moment."},
 {th:"Family",t:"tr",fr:"Les enfants sont en train de jouer dans le jardin.",a:["Los niños están jugando en el jardín.","Los chicos están jugando en el jardín."],why:"Ellos, donc están. Jugar devient jugando au gérondif."},
 {th:"Work",t:"tr",fr:"Nous sommes en train de préparer la réunion.",a:["Estamos preparando la reunión.","Nosotros estamos preparando la reunión.","Nosotras estamos preparando la reunión."],why:"Seul estar se conjugue : estamos. Le gérondif ne change jamais."},
 {th:"Climbing",t:"tr",fr:"Tom est en train de grimper.",a:["Tom está escalando."],why:"Verbe en -ar : -ando. Escalar devient escalando."},
 {th:"Health",t:"gap",s:"El paciente está ___.",a:["durmiendo"],h:"dormir",fr:"Le patient est en train de dormir.",why:"Dormir change son o en u au gérondif : durmiendo. Comme pour morir, muriendo."},
 {th:"Restaurant",t:"gap",s:"El camarero está ___ la cuenta.",a:["trayendo"],h:"traer",fr:"Le serveur est en train d'apporter l'addition.",why:"Traer : après une voyelle, -iendo devient -yendo. Trayendo, c'est plus facile à prononcer."},
 {th:"Travel",t:"gap",s:"Estamos ___ en el aeropuerto.",a:["esperando"],h:"esperar",fr:"Nous sommes en train d'attendre à l'aéroport.",why:"Esperar finit en -ar : esperando."},
 {th:"Home",t:"gap",s:"Mi padre ___ limpiando la cocina.",a:["está"],h:"estar",fr:"Mon père est en train de nettoyer la cuisine.",why:"Pour une action en cours, c'est toujours estar, jamais ser : está limpiando."},
 {th:"City",t:"qcm",s:"Están ___ un hotel nuevo en el centro.",o:["construyendo","construiendo","construido"],a:0,fr:"Ils sont en train de construire un nouvel hôtel dans le centre.",why:"Construir : le i se change en y entre deux voyelles, construyendo."},
 {th:"Shopping",t:"qcm",s:"Mi madre está ___ un regalo.",o:["eligiendo","eligendo","elegiendo"],a:0,fr:"Ma mère est en train de choisir un cadeau.",why:"Elegir change son e en i au gérondif : eligiendo. Le g reste, pour garder le son."},
 {th:"Nature",t:"qcm",s:"Mira, los pájaros están ___.",o:["cantando","cantiendo","cantar"],a:0,fr:"Regarde, les oiseaux sont en train de chanter.",why:"Cantar est en -ar, donc -ando : cantando. -iendo, c'est pour -er et -ir."}
],

es_pronombres_cd:[
 {th:"Food",t:"tr",fr:"Les tomates ? Je les achète au marché.",a:["¿Los tomates? Los compro en el mercado."],why:"Los tomates est masculin pluriel, donc los. Et le pronom se place avant le verbe : los compro."},
 {th:"Family",t:"tr",fr:"Ma grand-mère ? Je la vois le dimanche.",a:["¿Mi abuela? La veo los domingos.","¿Mi abuela? La veo el domingo."],why:"Ta grand-mère, c'est une femme : la. Avant le verbe conjugué : la veo."},
 {th:"Shopping",t:"tr",fr:"Cette robe ? Je la prends.",a:["¿Este vestido? Me lo llevo.","¿Este vestido? Lo compro.","¿Este vestido? Lo quiero.","¿Este vestido? Lo cojo."],why:"Piège : el vestido est masculin en espagnol, donc lo. Me lo llevo, je le prends."},
 {th:"Home",t:"tr",fr:"La porte ? Je la ferme.",a:["¿La puerta? La cierro.","¿La puerta? Yo la cierro."],why:"La puerta est féminin : la. Et il passe devant le verbe : la cierro."},
 {th:"Work",t:"tr",fr:"Le rapport ? Je vais l'écrire demain.",a:["¿El informe? Voy a escribirlo mañana.","¿El informe? Lo voy a escribir mañana.","¿El informe? Mañana voy a escribirlo.","¿El informe? Mañana lo voy a escribir."],why:"Avec un infinitif, tu colles le pronom à la fin : escribirlo. Tu peux aussi dire lo voy a escribir."},
 {th:"Restaurant",t:"gap",s:"¿La cuenta? Ahora ___ traigo.",a:["la"],fr:"L'addition ? Je vous l'apporte tout de suite.",why:"La cuenta est féminin, donc la : la traigo."},
 {th:"Travel",t:"gap",s:"¿Los billetes? ___ tengo en el móvil.",a:["Los"],fr:"Les billets ? Je les ai sur mon portable.",why:"Los billetes est masculin pluriel : los. Les, c'est pour « à eux », un autre pronom."},
 {th:"Climbing",t:"gap",s:"¿El arnés? ___ necesito para escalar.",a:["Lo"],fr:"Le baudrier ? J'en ai besoin pour grimper.",why:"El arnés est masculin : lo. Et necesitar prend son complément directement, sans de."},
 {th:"Health",t:"gap",s:"¿Las pastillas? ___ tomo cada mañana.",a:["Las"],fr:"Les comprimés ? Je les prends chaque matin.",why:"Las pastillas est féminin pluriel : las."},
 {th:"City",t:"qcm",s:"¿La plaza Mayor? No ___ encuentro.",o:["lo","la","le"],a:1,fr:"La plaza Mayor ? Je ne la trouve pas.",why:"La plaza est féminin : la. Le, c'est pour « lui », à quelqu'un."},
 {th:"Nature",t:"qcm",s:"¿Las plantas? ___ riego cada día.",o:["Los","Las","Les"],a:1,fr:"Les plantes ? Je les arrose tous les jours.",why:"Las plantas, féminin pluriel : las. Les voudrait dire « à elles »."},
 {th:"Weather",t:"qcm",s:"¿El paraguas? ___ dejé en casa.",o:["La","Lo","Le"],a:1,fr:"Le parapluie ? Je l'ai laissé à la maison.",why:"El paraguas finit par un s mais il est singulier, et masculin : lo."}
],

es_indef_imperf:[
 {th:"Weather",t:"tr",fr:"Il faisait beau quand nous sommes partis.",a:["Hacía buen tiempo cuando salimos.","Hacía sol cuando salimos.","Hacía buen tiempo cuando nos fuimos.","Hacía sol cuando nos fuimos.","Cuando salimos, hacía buen tiempo.","Cuando salimos, hacía sol."],why:"La météo, c'est le décor : imperfecto, hacía. Le départ, c'est l'événement : indefinido, salimos."},
 {th:"Climbing",t:"tr",fr:"Je grimpais quand j'ai entendu un bruit.",a:["Escalaba cuando oí un ruido.","Estaba escalando cuando oí un ruido.","Escalaba cuando escuché un ruido.","Estaba escalando cuando escuché un ruido."],why:"J'étais en train de grimper (escalaba), et un bruit arrive d'un coup (oí). Le décor à l'imparfait, l'événement à l'indefinido."},
 {th:"Health",t:"tr",fr:"Elle s'est cassé le bras quand elle avait dix ans.",a:["Se rompió el brazo cuando tenía diez años.","Se partió el brazo cuando tenía diez años.","Se rompió el brazo cuando tenía 10 años.","Se quebró el brazo cuando tenía diez años."],why:"L'âge décrit le moment : tenía. La fracture arrive une fois : se rompió."},
 {th:"Family",t:"tr",fr:"Mes parents se sont rencontrés quand ils travaillaient à Paris.",a:["Mis padres se conocieron cuando trabajaban en París."],why:"Le travail à Paris, c'est le décor : trabajaban. La rencontre, c'est un moment précis : se conocieron."},
 {th:"City",t:"tr",fr:"Il y avait beaucoup de monde, alors nous sommes partis.",a:["Había mucha gente, así que nos fuimos.","Como había mucha gente, nos fuimos.","Había mucha gente, entonces nos fuimos."],why:"Había décrit la situation. Partir, c'est la décision prise à ce moment : nos fuimos."},
 {th:"Travel",t:"gap",s:"Mientras ___ el tren, leí una novela.",a:["esperaba"],h:"esperar, yo",fr:"Pendant que j'attendais le train, j'ai lu un roman.",why:"Mientras pose le décor, une action qui dure : imperfecto, esperaba."},
 {th:"Food",t:"gap",s:"Cocinaba cuando de repente se ___ la luz.",a:["fue"],h:"irse",fr:"Je cuisinais quand, tout à coup, il y a eu une coupure de courant.",why:"De repente annonce un événement soudain : indefinido. Se fue la luz, la lumière est partie."},
 {th:"Home",t:"gap",s:"Cuando ___ a casa, mi hermano dormía.",a:["llegué"],h:"llegar, yo",fr:"Quand je suis arrivé à la maison, mon frère dormait.",why:"L'arrivée est un moment précis : llegué. Le gu garde le son « gué » devant le e."},
 {th:"Work",t:"gap",s:"Ayer no ___ a la reunión porque estaba enfermo.",a:["fui"],h:"ir, yo",fr:"Hier, je ne suis pas allé à la réunion parce que j'étais malade.",why:"Ne pas aller à la réunion, c'est un fait : no fui. Être malade, c'est l'état qui explique : estaba."},
 {th:"Nature",t:"qcm",s:"Paseábamos por el campo cuando ___ a llover.",o:["empezaba","empezó","empieza"],a:1,fr:"Nous nous promenions dans la campagne quand il s'est mis à pleuvoir.",why:"La promenade dure, la pluie commence d'un coup : empezó, à l'indefinido."},
 {th:"Restaurant",t:"qcm",s:"El restaurante ___ lleno, así que cenamos en casa.",o:["estuvo","estaba","fue"],a:1,fr:"Le restaurant était plein, alors nous avons dîné à la maison.",why:"Lleno décrit la situation à ce moment-là : imperfecto, estaba."},
 {th:"Shopping",t:"qcm",s:"Ayer ___ tres horas en el centro comercial.",o:["estábamos","estuvimos","estamos"],a:1,fr:"Hier, nous avons passé trois heures au centre commercial.",why:"Trois heures, c'est une durée qui a un début et une fin : indefinido, estuvimos."}
],

es_perfecto:[
 {th:"Food",t:"tr",fr:"Aujourd'hui, j'ai mangé une salade.",a:["Hoy he comido una ensalada.","Hoy he comido ensalada.","Hoy yo he comido una ensalada."],why:"Hoy n'est pas fini : en Espagne, on utilise le passé composé espagnol, haber + participe. He comido."},
 {th:"Travel",t:"tr",fr:"Nous n'avons jamais pris l'avion.",a:["Nunca hemos tomado un avión.","Nunca hemos cogido un avión.","Nunca hemos volado.","No hemos volado nunca.","Nunca hemos viajado en avión.","Nunca hemos ido en avión."],why:"Une expérience sans date, avec nunca : haber + participe, hemos tomado."},
 {th:"Work",t:"tr",fr:"Cette semaine, j'ai beaucoup travaillé.",a:["Esta semana he trabajado mucho.","He trabajado mucho esta semana."],why:"Esta semana n'est pas finie : he trabajado. Et le passé composé se fait toujours avec haber, jamais tener."},
 {th:"Health",t:"tr",fr:"Tu as déjà vu le médecin ?",a:["¿Ya has visto al médico?","¿Has visto ya al médico?","¿Ya has ido al médico?","¿Has ido ya al médico?"],why:"Ya + passé composé : has visto. Ver a un participe irrégulier, visto. Et a devant une personne : al médico."},
 {th:"Climbing",t:"tr",fr:"Ce matin, elle a fait trois voies.",a:["Esta mañana ha hecho tres vías.","Ha hecho tres vías esta mañana.","Esta mañana ha escalado tres vías.","Esta mañana hizo tres vías."],why:"Esta mañana, c'est encore aujourd'hui : ha hecho. Hacer donne hecho."},
 {th:"Home",t:"gap",s:"¿Quién ___ roto la ventana?",a:["ha"],fr:"Qui a cassé la fenêtre ?",why:"Pour le passé composé, l'auxiliaire est toujours haber : ha. Et romper donne roto."},
 {th:"Family",t:"gap",s:"Mis primos todavía no han ___.",a:["vuelto"],h:"volver",fr:"Mes cousins ne sont pas encore rentrés.",why:"Volver a un participe irrégulier : vuelto. Et c'est haber, même pour un verbe de mouvement : han vuelto."},
 {th:"Shopping",t:"gap",s:"Este mes hemos ___ demasiado.",a:["gastado"],h:"gastar",fr:"Ce mois-ci, nous avons trop dépensé.",why:"Verbe en -ar : participe en -ado, gastado. Avec haber, il ne s'accorde jamais."},
 {th:"Weather",t:"gap",s:"Esta semana ha ___ mucho.",a:["llovido"],h:"llover",fr:"Cette semaine, il a beaucoup plu.",why:"Verbe en -er : participe en -ido, llovido."},
 {th:"City",t:"qcm",s:"Todavía no he ___ el nuevo museo.",o:["visto","veído","vido"],a:0,fr:"Je n'ai pas encore vu le nouveau musée.",why:"Ver donne visto, un participe irrégulier à retenir."},
 {th:"Restaurant",t:"qcm",s:"Hoy nosotros ___ el menú del día.",o:["hemos pedido","habemos pedido","hemos pidido"],a:0,fr:"Aujourd'hui, nous avons pris le menu du jour.",why:"Nosotros : hemos. Et pedir a un participe tout à fait régulier, pedido."},
 {th:"Nature",t:"qcm",s:"Los niños han ___ un nido.",o:["descubrido","descubierto","descubiertos"],a:1,fr:"Les enfants ont découvert un nid.",why:"Descubrir donne descubierto, irrégulier. Avec haber, il ne s'accorde pas."}
],

es_por_para:[
 {th:"Travel",t:"tr",fr:"Le train pour Valence part à dix heures.",a:["El tren para Valencia sale a las diez.","El tren a Valencia sale a las diez.","El tren hacia Valencia sale a las diez."],why:"Pour une destination, c'est para : el tren para Valencia."},
 {th:"City",t:"tr",fr:"Nous nous promenons dans le parc.",a:["Paseamos por el parque.","Damos un paseo por el parque.","Caminamos por el parque."],why:"Por, c'est pour traverser un lieu, se balader dedans : por el parque."},
 {th:"Health",t:"tr",fr:"Ces pastilles sont pour la toux.",a:["Estas pastillas son para la tos."],why:"Para dit à quoi sert une chose : para la tos."},
 {th:"Shopping",t:"tr",fr:"Je l'ai acheté pour vingt euros.",a:["Lo compré por veinte euros.","Lo he comprado por veinte euros.","Lo compré por 20 euros.","Lo he comprado por 20 euros.","La compré por veinte euros.","La he comprado por veinte euros.","La compré por 20 euros.","La he comprado por 20 euros."],why:"Un échange, un prix : por. Lo compré por veinte euros."},
 {th:"Climbing",t:"tr",fr:"Je m'entraîne pour mieux grimper.",a:["Entreno para escalar mejor.","Me entreno para escalar mejor.","Yo entreno para escalar mejor."],why:"Pour un but, pour + infinitif se dit para : para escalar mejor."},
 {th:"Work",t:"gap",s:"Tengo que terminar el informe ___ el viernes.",a:["para"],h:"por / para",fr:"Je dois finir le rapport pour vendredi.",why:"Pour une date limite, para : para el viernes."},
 {th:"Weather",t:"gap",s:"No salimos ___ la lluvia.",a:["por","a causa de"],h:"por / para",fr:"Nous ne sommes pas sortis à cause de la pluie.",why:"Por donne la cause : à cause de la pluie, por la lluvia."},
 {th:"Family",t:"gap",s:"Este pastel es ___ mi abuela.",a:["para"],h:"por / para",fr:"Ce gâteau est pour ma grand-mère.",why:"Para indique à qui c'est destiné : para mi abuela."},
 {th:"Food",t:"gap",s:"Como fruta dos veces ___ día.",a:["por","al"],h:"par jour",fr:"Je mange des fruits deux fois par jour.",why:"Pour une fréquence, por día, ou al día. Para ne marche pas ici."},
 {th:"Restaurant",t:"qcm",s:"Gracias ___ la cena.",o:["para","por","de"],a:1,fr:"Merci pour le dîner.",why:"On remercie pour une cause : gracias por."},
 {th:"Nature",t:"qcm",s:"Pasamos ___ un bosque precioso.",o:["para","por","en"],a:1,fr:"Nous sommes passés par une forêt magnifique.",why:"Passer par un endroit : por, comme traverser."},
 {th:"Home",t:"qcm",s:"Esta habitación es ___ los invitados.",o:["por","para","a"],a:1,fr:"Cette chambre est pour les invités.",why:"Para dit pour qui c'est prévu : para los invitados."}
],

es_subj_deseo:[
 {th:"Family",t:"tr",fr:"Je veux que vous veniez dîner. (vous = vosotros)",a:["Quiero que vengáis a cenar.","Yo quiero que vengáis a cenar.","Quiero que vengan a cenar."],why:"Tu veux que quelqu'un d'autre fasse quelque chose : querer que + subjonctif. Venir devient vengáis."},
 {th:"Weather",t:"tr",fr:"Pourvu qu'il ne pleuve pas ! (ojalá)",a:["¡Ojalá no llueva!"],why:"Ojalá exprime un souhait, toujours suivi du subjonctif : llueva."},
 {th:"Health",t:"tr",fr:"Le médecin veut que je me repose.",a:["El médico quiere que descanse.","El médico quiere que yo descanse.","La médica quiere que descanse."],why:"Le médecin veut, toi tu te reposes : deux personnes différentes, donc subjonctif, descanse."},
 {th:"Work",t:"tr",fr:"Je t'envoie le fichier pour que tu le lises.",a:["Te envío el archivo para que lo leas.","Te mando el archivo para que lo leas.","Te envío el fichero para que lo leas.","Te mando el fichero para que lo leas."],why:"Para que, comme « pour que », est suivi du subjonctif : leas."},
 {th:"Climbing",t:"tr",fr:"Je veux grimper demain.",a:["Quiero escalar mañana.","Mañana quiero escalar.","Yo quiero escalar mañana."],why:"C'est toi qui veux et toi qui grimpes : même personne, donc l'infinitif, sans que."},
 {th:"Travel",t:"gap",s:"Ojalá ___ un buen viaje.",a:["tengáis","tengan"],h:"tener, vosotros",fr:"Pourvu que vous fassiez un bon voyage.",why:"Ojalá + subjonctif. Tener devient tengáis avec vosotros."},
 {th:"Home",t:"gap",s:"Mis padres quieren que ___ mi habitación.",a:["ordene"],h:"ordenar, yo",fr:"Mes parents veulent que je range ma chambre.",why:"Tes parents veulent, toi tu ranges : deux personnes, donc subjonctif. Un verbe en -ar prend un -e : ordene."},
 {th:"Food",t:"gap",s:"Prefiero que ___ tú la cena.",a:["hagas"],h:"hacer",fr:"Je préfère que tu fasses le dîner.",why:"Preferir que, avec un autre sujet, appelle le subjonctif. Hacer devient hagas."},
 {th:"Shopping",t:"gap",s:"Te doy dinero para que ___ pan.",a:["compres"],h:"comprar, tú",fr:"Je te donne de l'argent pour que tu achètes du pain.",why:"Para que, comme « pour que », veut le subjonctif : compres. Les verbes en -ar prennent -es."},
 {th:"City",t:"qcm",s:"Quiero que me ___ la ciudad.",o:["enseñas","enseñes","enseñar"],a:1,fr:"Je veux que tu me fasses visiter la ville.",why:"Quiero que + quelqu'un d'autre : subjonctif. Enseñar devient enseñes, jamais enseñas ici."},
 {th:"Restaurant",t:"qcm",s:"Ojalá ___ mesa libre.",o:["hay","haya","habrá"],a:1,fr:"Pourvu qu'il y ait une table libre.",why:"Ojalá est toujours suivi du subjonctif. Hay devient haya."},
 {th:"Nature",t:"qcm",s:"Queremos ___ el amanecer desde la montaña.",o:["que veamos","ver","veamos"],a:1,fr:"Nous voulons voir le lever du soleil depuis la montagne.",why:"Nous voulons, nous voyons : même personne, donc l'infinitif. Pas de subjonctif ici."}
],

es_futuro:[
 {th:"Weather",t:"tr",fr:"Demain, il fera chaud.",a:["Mañana hará calor.","Hará calor mañana."],why:"Au futur, hacer raccourcit son radical : har-. Avec él, ça donne hará."},
 {th:"Travel",t:"tr",fr:"Nous arriverons à Lisbonne lundi.",a:["Llegaremos a Lisboa el lunes.","El lunes llegaremos a Lisboa."],why:"Le futur est facile : on garde l'infinitif entier et on ajoute la terminaison. Nosotros : llegaremos."},
 {th:"Work",t:"tr",fr:"Je ferai la présentation.",a:["Haré la presentación.","Yo haré la presentación."],why:"Hacer devient har- au futur, puis -é pour yo : haré."},
 {th:"Family",t:"tr",fr:"Ma fille aura dix ans en mai.",a:["Mi hija tendrá diez años en mayo.","Mi hija cumplirá diez años en mayo.","Mi hija tendrá 10 años en mayo.","Mi hija cumplirá 10 años en mayo."],why:"L'âge se dit avec tener. Au futur, tener devient tendr- : tendrá."},
 {th:"Climbing",t:"tr",fr:"S'il pleut, nous grimperons en salle.",a:["Si llueve, escalaremos en el rocódromo.","Si llueve, escalaremos en un rocódromo.","Si llueve, escalaremos en la sala.","Si llueve, escalaremos bajo techo."],why:"Après si, on met le présent, comme en français : si llueve. Puis le futur : escalaremos."},
 {th:"Home",t:"gap",s:"El sábado ___ la casa.",a:["limpiaremos"],h:"limpiar, nosotros",fr:"Samedi, nous nettoierons la maison.",why:"L'infinitif entier + -emos : limpiaremos."},
 {th:"City",t:"gap",s:"¿A qué hora ___ el museo?",a:["abrirá"],h:"abrir, futuro",fr:"À quelle heure ouvrira le musée ?",why:"Infinitif + -á pour él, avec l'accent : abrirá."},
 {th:"Health",t:"gap",s:"No te preocupes, pronto ___ bien.",a:["estarás"],h:"estar, tú",fr:"Ne t'inquiète pas, tu iras bientôt bien.",why:"Aller bien, c'est un état : estar. Au futur, avec tú : estarás."},
 {th:"Shopping",t:"gap",s:"Mañana ___ ir de compras.",a:["podré"],h:"poder, yo, futuro",fr:"Demain, je pourrai aller faire les courses.",why:"Poder perd son e au futur : podré. Retiens-le, il revient souvent."},
 {th:"Food",t:"qcm",s:"Si tienes hambre, te ___ un bocadillo.",o:["haceré","haré","haga"],a:1,fr:"Si tu as faim, je te ferai un sandwich.",why:"Hacer est irrégulier au futur : haré. « Haceré » n'existe pas."},
 {th:"Restaurant",t:"qcm",s:"Si llegamos tarde, no ___ mesa.",o:["habrá","haberá","hubo"],a:0,fr:"Si on arrive tard, il n'y aura pas de table.",why:"Le futur de hay, c'est habrá. Utile pour annoncer ce qu'il y aura."},
 {th:"Nature",t:"qcm",s:"Si ___ el sol, bajaremos al río.",o:["saldrá","sale","saliera"],a:1,fr:"Si le soleil sort, nous descendrons à la rivière.",why:"Après si, jamais de futur, comme en français : si sale el sol."}
],

es_condicional:[
 {th:"Restaurant",t:"tr",fr:"Je voudrais un café, s'il vous plaît.",a:["Querría un café, por favor.","Quería un café, por favor.","Me gustaría un café, por favor.","Me gustaría tomar un café, por favor.","¿Me pone un café, por favor?"],why:"Pour demander poliment, le conditionnel adoucit tout : querría, ou me gustaría."},
 {th:"Travel",t:"tr",fr:"Nous aimerions visiter Cuba.",a:["Nos gustaría visitar Cuba.","A nosotros nos gustaría visitar Cuba.","Nos encantaría visitar Cuba."],why:"Gustar au conditionnel : nos gustaría. Devant un infinitif, il reste au singulier."},
 {th:"Health",t:"tr",fr:"Tu devrais dormir plus.",a:["Deberías dormir más.","Tú deberías dormir más."],why:"Pour donner un conseil, deber au conditionnel : deberías. Comme « tu devrais »."},
 {th:"Work",t:"tr",fr:"Pourriez-vous m'envoyer le contrat ? (vous = usted)",a:["¿Podría enviarme el contrato?","¿Me podría enviar el contrato?","¿Podría mandarme el contrato?","¿Me podría mandar el contrato?","¿Podría usted enviarme el contrato?"],why:"Usted se conjugue à la 3e personne. Poder perd son e : podría."},
 {th:"Home",t:"tr",fr:"Avec plus d'argent, j'achèterais une maison.",a:["Con más dinero, compraría una casa.","Con más dinero yo compraría una casa."],why:"Pour une situation imaginée, infinitif + -ía : compraría. C'est le conditionnel."},
 {th:"Family",t:"gap",s:"¿Te ___ venir con nosotros?",a:["gustaría"],h:"gustar",fr:"Tu aimerais venir avec nous ?",why:"Te gustaría + infinitif, c'est la façon polie et gentille d'inviter quelqu'un."},
 {th:"Climbing",t:"gap",s:"Yo no ___ esa vía sin casco.",a:["haría"],h:"hacer",fr:"Moi, je ne ferais pas cette voie sans casque.",why:"Au conditionnel, hacer garde le même radical qu'au futur : haría."},
 {th:"City",t:"gap",s:"¿Me ___ decir dónde está la estación?",a:["podría"],h:"poder, usted",fr:"Pourriez-vous me dire où est la gare ?",why:"Pour demander poliment à usted : podría. Très utile en voyage !"},
 {th:"Weather",t:"gap",s:"Con este tiempo, ___ mejor quedarnos en casa.",a:["sería"],h:"ser",fr:"Avec ce temps, il vaudrait mieux rester à la maison.",why:"Il vaudrait mieux se dit sería mejor : ser au conditionnel."},
 {th:"Shopping",t:"qcm",s:"Yo que tú, ___ ese abrigo.",o:["compraré","compraría","compre"],a:1,fr:"À ta place, j'achèterais ce manteau.",why:"Yo que tú veut dire « à ta place ». Il est suivi du conditionnel : compraría."},
 {th:"Food",t:"qcm",s:"¿Qué ___ tú en mi lugar?",o:["harías","hacerías","haces"],a:0,fr:"Qu'est-ce que tu ferais à ma place ?",why:"Hacer devient har- au conditionnel : harías. « Hacerías » n'existe pas."},
 {th:"Nature",t:"qcm",s:"Me ___ vivir cerca del mar.",o:["gustaría","gustaríamos","gustarías"],a:0,fr:"J'aimerais vivre près de la mer.",why:"Gustar s'accorde avec ce qu'on aime, ici vivir : gustaría, au singulier."}
],

es_imperativo:[
 {th:"Food",t:"tr",fr:"Goûte cette soupe !",a:["¡Prueba esta sopa!"],why:"Pour donner un ordre à tú, prends la forme du présent de él : prueba."},
 {th:"City",t:"tr",fr:"Tourne à gauche.",a:["Gira a la izquierda.","Dobla a la izquierda.","Tuerce a la izquierda."],why:"Impératif tú = la forme de él au présent : gira. Facile à retenir."},
 {th:"Health",t:"tr",fr:"Ne bois pas d'alcool.",a:["No bebas alcohol.","No tomes alcohol."],why:"Pour interdire, l'espagnol utilise le subjonctif : no bebas. Pas no bebe."},
 {th:"Climbing",t:"tr",fr:"Fais attention !",a:["¡Ten cuidado!"],why:"Faire attention se dit tener cuidado. Et l'impératif de tener est court : ten."},
 {th:"Home",t:"tr",fr:"Ferme la fenêtre, s'il te plaît.",a:["Cierra la ventana, por favor.","Por favor, cierra la ventana."],why:"Cerrar change son e en ie, même à l'impératif : cierra."},
 {th:"Family",t:"gap",s:"Niños, no ___ en el sofá.",a:["saltéis","salten"],h:"saltar, vosotros",fr:"Les enfants, ne sautez pas sur le canapé.",why:"Pour interdire, on passe au subjonctif. Avec vosotros : no saltéis."},
 {th:"Work",t:"gap",s:"___ este correo a Ana, por favor.",a:["Envía"],h:"enviar, tú",fr:"Envoie ce courriel à Ana, s'il te plaît.",why:"Impératif tú : envía. L'accent sur le í garde la bonne prononciation."},
 {th:"Travel",t:"gap",s:"No ___ el pasaporte.",a:["olvides"],h:"olvidar, tú",fr:"N'oublie pas ton passeport.",why:"No + subjonctif pour interdire : no olvides. Les verbes en -ar prennent -es."},
 {th:"Restaurant",t:"gap",s:"___ aquí, hay una mesa libre.",a:["Siéntate"],h:"sentarse, tú",fr:"Assieds-toi ici, il y a une table libre.",why:"À l'impératif affirmatif, le pronom se colle à la fin : siéntate. L'accent garde l'intonation."},
 {th:"Weather",t:"qcm",s:"___ el abrigo, hace frío.",o:["Ponte","Póngate","Te pon"],a:0,fr:"Mets ton manteau, il fait froid.",why:"Poner a un impératif court et irrégulier : pon. Avec le pronom collé : ponte."},
 {th:"Shopping",t:"qcm",s:"No ___ eso, es muy caro.",o:["compra","compres","comprar"],a:1,fr:"N'achète pas ça, c'est très cher.",why:"Pour dire de ne pas faire, le subjonctif : no compres."},
 {th:"Nature",t:"qcm",s:"No ___ las flores del parque.",o:["arrancas","arranques","arranca"],a:1,fr:"N'arrache pas les fleurs du parc.",why:"No + subjonctif : arranques. Le c devient qu devant e, pour garder le son « k »."}
]
});

Object.assign(P.boss, {
"A1":[
 {th:"Home",t:"tr",sk:["es_hay","es_ser_estar"],fr:"Il y a un parc près de chez moi et il est très grand.",a:["Hay un parque cerca de mi casa y es muy grande."],why:"Hay annonce qu'un parc existe. Sa taille, c'est une caractéristique : es muy grande."},
 {th:"Food",t:"tr",sk:["es_gustar","es_plurales"],fr:"J'aime les tomates, mais je n'aime pas les oignons.",a:["Me gustan los tomates, pero no me gustan las cebollas.","A mí me gustan los tomates, pero no me gustan las cebollas."],why:"Les tomates et les oignons sont au pluriel : gustan, les deux fois."},
 {th:"Family",t:"tr",sk:["es_tener_ir","es_ser_estar"],fr:"Ma sœur a vingt ans et elle est étudiante.",a:["Mi hermana tiene veinte años y es estudiante.","Mi hermana tiene 20 años y es estudiante."],why:"L'âge se dit avec tener. Être étudiante, c'est une occupation durable : ser."},
 {th:"Shopping",t:"tr",sk:["es_tener_ir","es_presente"],fr:"Le samedi, nous allons au marché et nous achetons des fruits.",a:["Los sábados vamos al mercado y compramos fruta.","Los sábados vamos al mercado y compramos frutas.","Los sábados nosotros vamos al mercado y compramos fruta."],why:"Une habitude : los sábados. A + el devient al. Et pas de « des » : compramos fruta."},
 {th:"Health",t:"tr",sk:["es_tener_ir","es_ser_estar"],fr:"J'ai froid et je suis fatigué.",a:["Tengo frío y estoy cansado.","Tengo frío y estoy cansada.","Yo tengo frío y estoy cansado.","Yo tengo frío y estoy cansada."],why:"Avoir froid se dit tener frío. La fatigue est un état qui passera : estoy cansado."},
 {th:"City",t:"tr",sk:["es_hay","es_articulos"],fr:"Où est la gare ? Il y a un plan ?",a:["¿Dónde está la estación? ¿Hay un mapa?","¿Dónde está la estación? ¿Hay un plano?"],why:"Pour situer la gare : está. Pour demander s'il existe un plan : hay. Et el mapa est masculin."},
 {th:"Climbing",t:"tr",sk:["es_gustar","es_presente"],fr:"Mon ami aime grimper et il grimpe tous les jours.",a:["A mi amigo le gusta escalar y escala todos los días.","A mi amigo le gusta escalar y escala cada día."],why:"A mi amigo le gusta + infinitif. Puis escala, la forme de él au présent."},
 {th:"Weather",t:"tr",sk:["es_presente","es_plurales"],fr:"En hiver, les jours sont courts et il pleut beaucoup.",a:["En invierno, los días son cortos y llueve mucho.","En invierno los días son cortos y llueve mucho."],why:"Los días, masculin pluriel : cortos. Llover change son o en ue : llueve."},
 {th:"Restaurant",t:"gap",sk:["es_hay","es_plurales"],s:"¿Dónde ___ los servicios?",a:["están"],h:"hay / estar",fr:"Où sont les toilettes ?",why:"Tu cherches un endroit précis, au pluriel : están."},
 {th:"Work",t:"gap",sk:["es_ser_estar","es_presente"],s:"Mi madre es enfermera y ___ de noche.",a:["trabaja"],h:"trabajar",fr:"Ma mère est infirmière et travaille de nuit.",why:"Le métier avec ser : es enfermera. Puis trabaja, la forme de ella."},
 {th:"Nature",t:"gap",sk:["es_articulos","es_ser_estar"],s:"___ agua del río está muy fría.",a:["El"],h:"el / la",fr:"L'eau de la rivière est très froide.",why:"Agua est féminin (fría), mais il prend el devant son a accentué. Comme el águila."},
 {th:"Home",t:"gap",sk:["es_gustar","es_plurales"],s:"A mis padres les ___ las casas antiguas.",a:["gustan"],fr:"Mes parents aiment les maisons anciennes.",why:"Ce qu'on aime, las casas, est au pluriel : gustan."},
 {th:"Family",t:"gap",sk:["es_tener_ir","es_plurales"],s:"Mis hermanos ___ dos perros.",a:["tienen"],h:"tener",fr:"Mes frères ont deux chiens.",why:"Tener avec ellos : tienen. Le e se change en ie."},
 {th:"Shopping",t:"gap",sk:["es_hay","es_plurales"],s:"En el mercado ___ muchas flores.",a:["hay"],h:"hay / están",fr:"Au marché, il y a beaucoup de fleurs.",why:"Hay ne change pas, même devant un pluriel : hay muchas flores."},
 {th:"Travel",t:"qcm",sk:["es_tener_ir","es_articulos"],s:"Mañana vamos ___ aeropuerto en taxi.",o:["a el","al","en el"],a:1,fr:"Demain, nous allons à l'aéroport en taxi.",why:"Avec ir, la direction se dit a. Et a + el devient toujours al."},
 {th:"Health",t:"qcm",sk:["es_gustar","es_ser_estar"],s:"A mi hijo no le gusta el médico porque ___ muy serio.",o:["está","es","hay"],a:1,fr:"Mon fils n'aime pas le médecin parce qu'il est très sérieux.",why:"Le caractère d'une personne ne change pas d'un jour à l'autre : ser."},
 {th:"Food",t:"qcm",sk:["es_presente","es_gustar"],s:"Ana y yo ___ mucho pescado porque nos gusta.",o:["comen","comemos","come"],a:1,fr:"Ana et moi mangeons beaucoup de poisson parce que nous l'aimons.",why:"Ana y yo, c'est nosotros : comemos."},
 {th:"City",t:"qcm",sk:["es_hay","es_ser_estar"],s:"En mi barrio ___ dos museos, pero están cerrados.",o:["están","hay","son"],a:1,fr:"Dans mon quartier, il y a deux musées, mais ils sont fermés.",why:"Hay annonce que les musées existent. Fermés, c'est leur état du moment : están."}
],
"A2":[
 {th:"Travel",t:"tr",sk:["es_imperfecto","es_indefinido"],fr:"Avant, nous allions à la plage, mais cette année, nous sommes allés à la montagne.",a:["Antes íbamos a la playa, pero este año fuimos a la montaña.","Antes íbamos a la playa, pero este año hemos ido a la montaña."],why:"Avant, c'était une habitude : íbamos. Cette année, c'est un voyage précis : fuimos."},
 {th:"Food",t:"tr",sk:["es_ir_a","es_pronombres_cd"],fr:"Le gâteau ? Je vais le faire ce soir.",a:["¿El pastel? Voy a hacerlo esta noche.","¿El pastel? Lo voy a hacer esta noche.","¿La tarta? Voy a hacerla esta noche.","¿La tarta? La voy a hacer esta noche.","¿El pastel? Esta noche voy a hacerlo.","¿El pastel? Esta noche lo voy a hacer."],why:"Voy a + infinitif. Le pronom se colle à l'infinitif (hacerlo) ou passe avant voy."},
 {th:"Family",t:"tr",sk:["es_imperfecto","es_comparativos"],fr:"Quand il était jeune, mon père était plus mince que moi.",a:["Cuando era joven, mi padre era más delgado que yo.","De joven, mi padre era más delgado que yo."],why:"Une description dans le passé : era. Et pour comparer : más delgado que yo."},
 {th:"Health",t:"tr",sk:["es_reflexivos","es_indefinido"],fr:"Hier, je me suis couché à minuit.",a:["Ayer me acosté a medianoche.","Ayer me acosté a las doce.","Anoche me acosté a medianoche.","Ayer yo me acosté a medianoche."],why:"Acostarse, un moment précis hier : me acosté. Le pronom se met avant le verbe."},
 {th:"Work",t:"tr",sk:["es_gerundio","es_pronombres_cd"],fr:"Le courriel ? Je suis en train de l'écrire.",a:["¿El correo? Lo estoy escribiendo.","¿El correo? Estoy escribiéndolo.","¿El email? Lo estoy escribiendo.","¿El email? Estoy escribiéndolo.","¿El mensaje? Lo estoy escribiendo.","¿El mensaje? Estoy escribiéndolo."],why:"Lo se place avant estoy. Tu peux aussi le coller au gérondif : escribiéndolo, avec un accent."},
 {th:"Climbing",t:"tr",sk:["es_indefinido","es_comparativos"],fr:"Samedi, nous avons fait la voie la plus difficile de la salle.",a:["El sábado hicimos la vía más difícil del rocódromo.","El sábado hicimos la vía más difícil de la sala.","El sábado escalamos la vía más difícil del rocódromo."],why:"Hacer au passé : hicimos. Et le superlatif, sans répéter l'article : la vía más difícil."},
 {th:"Home",t:"tr",sk:["es_reflexivos","es_ir_a"],fr:"Demain, je vais me lever tôt.",a:["Mañana voy a levantarme temprano.","Mañana me voy a levantar temprano.","Mañana voy a levantarme pronto.","Mañana me voy a levantar pronto."],why:"Voy a + infinitif. Le me se colle à la fin, levantarme, ou passe avant voy."},
 {th:"Weather",t:"tr",sk:["es_imperfecto","es_indefinido"],fr:"Il faisait froid, mais nous sommes sortis.",a:["Hacía frío, pero salimos.","Hacía frío, pero nosotros salimos."],why:"Le froid, c'est le décor : hacía. Sortir, c'est l'action : salimos."},
 {th:"City",t:"gap",sk:["es_gerundio","es_reflexivos"],s:"Nos estamos ___ en esta ciudad.",a:["perdiendo"],h:"perderse",fr:"Nous sommes en train de nous perdre dans cette ville.",why:"Estar + gérondif : perdiendo. Et le pronom nos peut se placer avant estar."},
 {th:"Shopping",t:"gap",sk:["es_pronombres_cd","es_indefinido"],s:"¿Las gafas? ___ compré en esa tienda.",a:["Las"],fr:"Les lunettes ? Je les ai achetées dans ce magasin.",why:"Las gafas est féminin pluriel : las. Il se place avant le verbe."},
 {th:"Restaurant",t:"gap",sk:["es_ir_a","es_pronombres_cd"],s:"¿La paella? ___ vamos a pedir para dos.",a:["La"],fr:"La paella ? Nous allons la commander pour deux.",why:"Le pronom peut passer avant ir a : la vamos a pedir. C'est très naturel à l'oral."},
 {th:"Nature",t:"gap",sk:["es_comparativos","es_imperfecto"],s:"Antes el río estaba ___ limpio que ahora.",a:["más"],h:"plus",fr:"Avant, la rivière était plus propre que maintenant.",why:"Pour comparer, más… que, même au passé."},
 {th:"Family",t:"gap",sk:["es_indefinido","es_comparativos"],s:"Ayer mi abuela ___ noventa años: es la mayor de la familia.",a:["cumplió"],h:"cumplir",fr:"Hier, ma grand-mère a eu quatre-vingt-dix ans : c'est la plus âgée de la famille.",why:"Fêter ses ans se dit cumplir años. Hier, un événement précis : cumplió."},
 {th:"Travel",t:"gap",sk:["es_ir_a","es_reflexivos"],s:"Esta noche ___ a quedar en un hotel.",a:["nos vamos"],h:"ir, nosotros + pronom",fr:"Ce soir, nous allons loger à l'hôtel.",why:"Quedarse avec ir a : le pronom nos peut passer devant, nos vamos a quedar."},
 {th:"Health",t:"qcm",sk:["es_imperfecto","es_reflexivos"],s:"De niño, yo siempre ___ resfriaba en invierno.",o:["se","me","te"],a:1,fr:"Enfant, je m'enrhumais toujours en hiver.",why:"Resfriarse avec yo : me. Une habitude d'enfance, donc l'imparfait : resfriaba."},
 {th:"Work",t:"qcm",sk:["es_gerundio","es_pronombres_cd"],s:"¿El informe? Estoy ___ ahora.",o:["lo revisando","revisándolo","revisando lo"],a:1,fr:"Le rapport ? Je suis en train de le relire.",why:"Le pronom se colle au gérondif : revisándolo. L'accent garde la bonne intonation."},
 {th:"Food",t:"qcm",sk:["es_comparativos","es_indefinido"],s:"Ayer la paella me salió ___ que la última vez.",o:["más buena","mejor","más bien"],a:1,fr:"Hier, ma paella était meilleure que la dernière fois.",why:"Meilleur se dit mejor, jamais más bueno."},
 {th:"Weather",t:"qcm",sk:["es_ir_a","es_comparativos"],s:"Mañana va ___ hacer menos calor que hoy.",o:["de","a","por"],a:1,fr:"Demain, il va faire moins chaud qu'aujourd'hui.",why:"Ir a + infinitif : le a est obligatoire, ne l'oublie pas."}
],
"B1":[
 {th:"Travel",t:"tr",sk:["es_perfecto","es_indef_imperf"],fr:"Cette année, je suis allé deux fois en Espagne ; la première fois, il pleuvait.",a:["Este año he ido dos veces a España; la primera vez llovía.","Este año he estado dos veces en España; la primera vez llovía.","Este año he ido a España dos veces; la primera vez llovía.","Este año he estado en España dos veces; la primera vez llovía.","Este año fui dos veces a España; la primera vez llovía.","Este año he ido dos veces a España; la primera vez estaba lloviendo."],why:"Este año n'est pas fini : he ido. La pluie, c'est le décor : llovía."},
 {th:"Health",t:"tr",sk:["es_subj_deseo","es_condicional"],fr:"Le médecin veut que je fasse du sport ; il dit que ça m'aiderait.",a:["El médico quiere que haga deporte; dice que me ayudaría.","El médico quiere que haga deporte y dice que me ayudaría.","La médica quiere que haga deporte; dice que me ayudaría."],why:"Querer que + subjonctif : haga. Puis une hypothèse au conditionnel : ayudaría."},
 {th:"Work",t:"tr",sk:["es_futuro","es_por_para"],fr:"Je finirai le projet pour vendredi.",a:["Terminaré el proyecto para el viernes.","Acabaré el proyecto para el viernes.","Tendré el proyecto terminado para el viernes."],why:"Futur de yo en -é : terminaré. Pour une date limite, para el viernes."},
 {th:"Family",t:"tr",sk:["es_imperativo","es_subj_deseo"],fr:"Appelle ta grand-mère, elle veut que tu lui rendes visite.",a:["Llama a tu abuela, quiere que la visites.","Llama a tu abuela, quiere que vayas a verla.","Llama a tu abuela, quiere que la vayas a ver."],why:"Impératif tú : llama. Puis querer que + subjonctif. Visitar prend un complément direct : la visites."},
 {th:"Nature",t:"tr",sk:["es_condicional","es_por_para"],fr:"J'aimerais monter par ce chemin pour voir la cascade.",a:["Me gustaría subir por este camino para ver la cascada.","Me gustaría ir por este camino para ver la cascada."],why:"Por pour le chemin qu'on emprunte, para pour le but. Et me gustaría pour un souhait poli."},
 {th:"Restaurant",t:"tr",sk:["es_perfecto","es_imperativo"],fr:"Tu n'as pas encore goûté le dessert ? Goûte-le !",a:["¿Todavía no has probado el postre? ¡Pruébalo!","¿Aún no has probado el postre? ¡Pruébalo!","¿No has probado todavía el postre? ¡Pruébalo!","¿No has probado el postre todavía? ¡Pruébalo!","¿No has probado aún el postre? ¡Pruébalo!"],why:"Todavía no + passé composé : has probado. À l'impératif, le pronom se colle avec un accent : pruébalo."},
 {th:"Weather",t:"tr",sk:["es_subj_deseo","es_futuro"],fr:"Pourvu qu'il fasse beau : nous irons à la plage.",a:["¡Ojalá haga buen tiempo! Iremos a la playa.","¡Ojalá haga sol! Iremos a la playa.","Ojalá haga buen tiempo: iremos a la playa.","Ojalá haga sol: iremos a la playa."],why:"Ojalá + subjonctif : haga. Puis le futur pour la suite certaine : iremos."},
 {th:"Climbing",t:"tr",sk:["es_indef_imperf","es_imperativo"],fr:"Je grimpais quand j'ai glissé. Ne fais pas comme moi !",a:["Escalaba cuando me resbalé. ¡No hagas como yo!","Estaba escalando cuando me resbalé. ¡No hagas como yo!","Escalaba cuando resbalé. ¡No hagas como yo!","Estaba escalando cuando resbalé. ¡No hagas como yo!","Escalaba cuando me resbalé. ¡No hagas lo mismo que yo!"],why:"Une action en cours (escalaba), un événement soudain (me resbalé). Pour interdire, le subjonctif : no hagas."},
 {th:"City",t:"gap",sk:["es_subj_deseo","es_por_para"],s:"Te dejo el mapa para que no te ___.",a:["pierdas"],h:"perderse, tú",fr:"Je te laisse le plan pour que tu ne te perdes pas.",why:"Para que + subjonctif : pierdas. Le e se change en ie, comme au présent."},
 {th:"Shopping",t:"gap",sk:["es_por_para","es_perfecto"],s:"Hoy he comprado este abrigo ___ cincuenta euros.",a:["por"],h:"por / para",fr:"Aujourd'hui, j'ai acheté ce manteau pour cinquante euros.",why:"Pour un prix, un échange : por."},
 {th:"Home",t:"gap",sk:["es_imperativo","es_futuro"],s:"Ayúdame y ___ antes.",a:["terminaremos","acabaremos"],h:"terminar, nosotros",fr:"Aide-moi et nous finirons plus tôt.",why:"Après l'ordre, la conséquence au futur : terminaremos."},
 {th:"Food",t:"gap",sk:["es_imperativo","es_subj_deseo"],s:"Pon la mesa: mamá quiere que ___ antes de las dos.",a:["comamos"],h:"comer, nosotros",fr:"Mets la table : maman veut que nous mangions avant deux heures.",why:"Maman veut, nous mangeons : deux sujets, donc subjonctif. Comer devient comamos."},
 {th:"Work",t:"gap",sk:["es_perfecto","es_indef_imperf"],s:"Esta mañana ___ llegado tarde porque había mucho tráfico.",a:["he"],fr:"Ce matin, je suis arrivé en retard parce qu'il y avait beaucoup de circulation.",why:"Esta mañana : passé composé avec haber, he llegado. Jamais « soy llegado »."},
 {th:"Family",t:"gap",sk:["es_imperativo","es_por_para"],s:"No te ___, lo hago por ti.",a:["preocupes"],h:"preocuparse, tú",fr:"Ne t'inquiète pas, je le fais pour toi.",why:"Pour interdire, le subjonctif : no te preocupes. Por ti veut dire « pour toi, à ta place »."},
 {th:"Travel",t:"qcm",sk:["es_por_para","es_futuro"],s:"Mañana saldremos ___ Granada muy temprano.",o:["por","para","en"],a:1,fr:"Demain, nous partirons pour Grenade très tôt.",why:"Pour une destination, para. Por Granada voudrait dire « en passant par Grenade »."},
 {th:"Nature",t:"qcm",sk:["es_indef_imperf","es_perfecto"],s:"¡Qué día! ___ el sol cuando salimos, pero luego llovió.",o:["Brilló","Brillaba","Ha brillado"],a:1,fr:"Quelle journée ! Le soleil brillait quand nous sommes partis, mais ensuite il a plu.",why:"Le soleil brillait, c'est le décor de la sortie : imperfecto, brillaba."},
 {th:"Health",t:"qcm",sk:["es_imperativo","es_subj_deseo"],s:"___ este jarabe para que se te pase la tos.",o:["Tomas","Toma","Tomes"],a:1,fr:"Prends ce sirop pour que ta toux passe.",why:"Un ordre positif à tú : toma. Tomes, c'est pour l'interdiction, no tomes."},
 {th:"Home",t:"qcm",sk:["es_condicional","es_futuro"],s:"Yo que tú, no ___ la calefacción: mañana hará calor.",o:["pondré","pondría","ponería"],a:1,fr:"À ta place, je ne mettrais pas le chauffage : demain, il fera chaud.",why:"Yo que tú appelle le conditionnel. Poner devient pondr- : pondría."}
]
});

Object.assign(P.levels, {
"A1":{can:["Tu sais te présenter : ton nom, ton âge, ta ville et ton métier.","Tu sais écrire un message simple pour dire ce que tu aimes et ce que tu fais.","Tu sais comprendre des panneaux, un menu et des phrases lentes sur des sujets familiers.","Tu sais poser et répondre à des questions simples : où est…, il y a…, combien…"],ex:"Me llamo Léa, tengo treinta años y vivo en Lyon.",fr:"Je m'appelle Léa, j'ai trente ans et j'habite à Lyon.",hours:100},
"A2":{can:["Tu sais raconter ce que tu as fait le week-end ou pendant tes vacances.","Tu sais écrire un court message pour inviter, remercier ou t'excuser.","Tu sais comprendre l'essentiel d'une annonce ou d'un message court et clair.","Tu sais faire des achats, commander au restaurant et demander ton chemin."],ex:"El sábado fuimos a la playa y comimos en un restaurante muy bueno.",fr:"Samedi, nous sommes allés à la plage et nous avons mangé dans un très bon restaurant.",hours:200},
"B1":{can:["Tu sais raconter une expérience ou un événement et donner ton avis en quelques phrases.","Tu sais écrire un e-mail simple et cohérent pour raconter, demander ou proposer.","Tu sais comprendre les points principaux d'une conversation ou d'une émission sur un sujet familier.","Tu sais te débrouiller en voyage et participer sans préparation à une conversation courante."],ex:"Cuando vivía en Sevilla, conocí a gente que todavía es muy importante para mí.",fr:"Quand j'habitais à Séville, j'ai rencontré des gens qui comptent encore beaucoup pour moi.",hours:400}
});
})();

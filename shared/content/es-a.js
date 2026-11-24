// Spanish exercise bank, levels A1–B1.
(function(){
const P = window.PACKS && window.PACKS.es; if(!P) return;
P.bank = P.bank || {}; P.boss = P.boss || {}; P.levels = P.levels || {};
Object.assign(P.bank, {

es_ser_estar:[
 {th:"Food",t:"tr",fr:"La soupe est froide.",a:["La sopa está fría."],why:"Un état passager (froid, chaud, prêt) se dit avec estar."},
 {th:"Work",t:"tr",fr:"Mon père est professeur.",a:["Mi padre es profesor.","Mi papá es profesor."],why:"Le métier = ser, et sans article, comme en français."},
 {th:"City",t:"tr",fr:"Le musée est fermé.",a:["El museo está cerrado."],why:"Fermé, ouvert : l'état du moment, donc estar."},
 {th:"Family",t:"tr",fr:"Ma sœur est très sympa.",a:["Mi hermana es muy simpática.","Mi hermana es muy maja.","Mi hermana es muy amable."],why:"Le caractère d'une personne = ser."},
 {th:"Health",t:"tr",fr:"Aujourd'hui, je suis malade.",a:["Hoy estoy enfermo.","Hoy estoy enferma.","Estoy enfermo hoy.","Estoy enferma hoy.","Hoy yo estoy enfermo.","Hoy yo estoy enferma."],why:"Être malade est un état, pas une identité : estar."},
 {th:"Travel",t:"gap",s:"Mis amigos ___ en Madrid.",a:["están"],h:"ser / estar",fr:"Mes amis sont à Madrid.",why:"Un lieu se dit toujours avec estar, jamais ser."},
 {th:"Nature",t:"gap",s:"El lago ___ muy grande.",a:["es"],h:"ser / estar",fr:"Le lac est très grand.",why:"La taille est une caractéristique durable : ser."},
 {th:"Home",t:"gap",s:"La puerta ___ abierta.",a:["está"],h:"ser / estar",fr:"La porte est ouverte.",why:"Ouvert est un état du moment : estar."},
 {th:"Climbing",t:"gap",s:"Después de escalar, ___ muy cansados.",a:["estamos"],h:"ser / estar, nosotros",fr:"Après l'escalade, nous sommes très fatigués.",why:"La fatigue est un état : estar, nosotros → estamos."},
 {th:"Weather",t:"qcm",s:"Hoy el cielo ___ gris.",o:["es","está","hay"],a:1,fr:"Aujourd'hui, le ciel est gris.",why:"Gris aujourd'hui : état passager, donc estar."},
 {th:"Shopping",t:"qcm",s:"Esta camiseta ___ de algodón.",o:["está","es","hay","tiene"],a:1,fr:"Ce tee-shirt est en coton.",why:"La matière (ser de) fait partie de l'identité de l'objet."},
 {th:"Restaurant",t:"qcm",s:"El camarero ___ argentino.",o:["está","es","hay"],a:1,fr:"Le serveur est argentin.",why:"L'origine = ser, même si on le voit au travail."}
],

es_articulos:[
 {th:"Food",t:"tr",fr:"Le lait est frais.",a:["La leche está fresca."],why:"Leche est féminin en espagnol : la leche fresca."},
 {th:"Nature",t:"tr",fr:"La vallée est belle.",a:["El valle es bonito.","El valle es precioso.","El valle es hermoso.","El valle es bello."],why:"Valle est masculin : el valle, et l'adjectif suit au masculin."},
 {th:"City",t:"tr",fr:"J'ai le plan de la ville.",a:["Tengo el mapa de la ciudad.","Tengo el plano de la ciudad.","Yo tengo el mapa de la ciudad."],why:"Mapa finit en -a mais il est masculin : el mapa."},
 {th:"Shopping",t:"tr",fr:"La couleur est jolie.",a:["El color es bonito.","El color es precioso.","El color es lindo."],why:"Color est masculin en espagnol : el color bonito."},
 {th:"Weather",t:"tr",fr:"Le climat est doux.",a:["El clima es suave.","El clima es templado."],why:"Les mots grecs en -ma sont masculins : el clima, el problema."},
 {th:"Home",t:"gap",s:"___ sofá es muy cómodo.",a:["El"],h:"el / la",fr:"Le canapé est très confortable.",why:"Sofá est masculin malgré sa finale en -á."},
 {th:"Family",t:"gap",s:"Tengo ___ hermana y un hermano.",a:["una"],fr:"J'ai une sœur et un frère.",why:"Hermana est féminin : una hermana."},
 {th:"Travel",t:"gap",s:"___ foto del viaje es preciosa.",a:["La"],h:"el / la",fr:"La photo du voyage est magnifique.",why:"Foto abrège fotografía : féminin malgré le -o."},
 {th:"Restaurant",t:"gap",s:"___ sal está en la mesa.",a:["La"],h:"el / la",fr:"Le sel est sur la table.",why:"Piège : le sel est masculin en français, mais la sal est féminin."},
 {th:"Climbing",t:"qcm",s:"___ equipo de escalada es caro.",o:["La","El","Los"],a:1,fr:"L'équipement d'escalade est cher.",why:"Equipo est masculin ; le « l' » français ne t'aide pas pour le genre."},
 {th:"Health",t:"qcm",s:"___ sangre es roja.",o:["El","La","Lo"],a:1,fr:"Le sang est rouge.",why:"Sangre est féminin : la sangre. Lo ne se met pas devant un nom."},
 {th:"Nature",t:"qcm",s:"___ águila vuela muy alto.",o:["La","El","Lo"],a:1,fr:"L'aigle vole très haut.",why:"Águila est féminin, mais el devant un a tonique, comme el agua."}
],

es_plurales:[
 {th:"Food",t:"tr",fr:"Les tomates sont rouges.",a:["Los tomates son rojos."],why:"Tomate est masculin ; voyelle finale → -s, et l'adjectif s'accorde."},
 {th:"City",t:"tr",fr:"Les rues sont étroites.",a:["Las calles son estrechas.","Las calles son angostas."],why:"Calle finit par une voyelle : on ajoute -s."},
 {th:"Nature",t:"tr",fr:"Les fleurs sont jolies.",a:["Las flores son bonitas.","Las flores son preciosas.","Las flores son lindas."],why:"Flor finit par une consonne : on ajoute -es."},
 {th:"Work",t:"tr",fr:"Demain, j'ai trois réunions.",a:["Mañana tengo tres reuniones.","Tengo tres reuniones mañana.","Mañana yo tengo tres reuniones."],why:"Reunión → reuniones : -es, et l'accent écrit disparaît."},
 {th:"Family",t:"tr",fr:"Mes parents sont jeunes.",a:["Mis padres son jóvenes."],why:"Joven → jóvenes : -es, et on ajoute un accent pour garder l'intonation."},
 {th:"Home",t:"gap",s:"En la cocina hay dos ___.",a:["luces"],h:"luz",fr:"Dans la cuisine, il y a deux lampes.",why:"Le z devient c devant -es : luz → luces."},
 {th:"Shopping",t:"gap",s:"Compro tres ___ en la panadería.",a:["panes"],h:"pan",fr:"J'achète trois pains à la boulangerie.",why:"Pan finit par une consonne : panes."},
 {th:"Travel",t:"gap",s:"Los ___ salen a las nueve.",a:["autobuses"],h:"autobús",fr:"Les bus partent à neuf heures.",why:"Autobús → autobuses : -es, et l'accent écrit disparaît."},
 {th:"Restaurant",t:"gap",s:"¿Tienen ___ para niños?",a:["menús"],h:"menú",fr:"Vous avez des menus pour enfants ?",why:"Voyelle accentuée finale : on ajoute simplement -s, menús."},
 {th:"Weather",t:"qcm",s:"En invierno, los días son ___.",o:["gris","grises","grisos"],a:1,fr:"En hiver, les jours sont gris.",why:"Gris finit par une consonne : grises. Le français, lui, ne change pas."},
 {th:"Climbing",t:"qcm",s:"Tengo los ___ cansados.",o:["pieses","pies","piés"],a:1,fr:"J'ai les pieds fatigués.",why:"Pie finit par une voyelle : pies, sans accent."},
 {th:"Health",t:"qcm",s:"Voy al médico dos ___ al año.",o:["vez","vezes","veces"],a:2,fr:"Je vais chez le médecin deux fois par an.",why:"z → c au pluriel : vez → veces."}
],

es_hay:[
 {th:"Home",t:"tr",fr:"Il y a deux chambres.",a:["Hay dos habitaciones.","Hay dos dormitorios.","Hay dos cuartos."],why:"Il y a = hay, invariable, même au pluriel."},
 {th:"City",t:"tr",fr:"La banque est sur la place.",a:["El banco está en la plaza."],why:"Une chose précise (el, la) se situe avec estar, pas hay."},
 {th:"Food",t:"tr",fr:"Il y a des œufs dans le frigo.",a:["Hay huevos en la nevera.","Hay huevos en el frigorífico.","Hay huevos en el frigo.","Hay huevos en el refrigerador.","Hay huevos en la heladera."],why:"Hay + nom sans article : le « des » français disparaît."},
 {th:"Travel",t:"tr",fr:"Où sont les toilettes ?",a:["¿Dónde están los servicios?","¿Dónde están los aseos?","¿Dónde están los baños?","¿Dónde está el baño?","¿Dónde está el servicio?"],why:"Dónde + estar pour situer ; estar s'accorde au pluriel : están."},
 {th:"Nature",t:"tr",fr:"Ici, il n'y a pas d'arbres.",a:["Aquí no hay árboles.","No hay árboles aquí."],why:"No hay + nom, sans article ni « de »."},
 {th:"Shopping",t:"gap",s:"___ un supermercado en mi calle.",a:["Hay"],h:"hay / está",fr:"Il y a un supermarché dans ma rue.",why:"Avec un, una : on annonce l'existence, donc hay."},
 {th:"Restaurant",t:"gap",s:"Mi mesa ___ al lado de la ventana.",a:["está"],h:"hay / está",fr:"Ma table est à côté de la fenêtre.",why:"Mi mesa est précise : on la situe avec estar."},
 {th:"Work",t:"gap",s:"En mi oficina ___ diez personas.",a:["hay"],h:"hay / están",fr:"Dans mon bureau, il y a dix personnes.",why:"Hay reste invariable, même avec diez personas."},
 {th:"Climbing",t:"gap",s:"La cuerda ___ en el coche.",a:["está"],h:"hay / está",fr:"La corde est dans la voiture.",why:"La cuerda est déterminée (la) : estar, jamais « hay la »."},
 {th:"Family",t:"qcm",s:"Mis padres ___ en casa.",o:["hay","están","son"],a:1,fr:"Mes parents sont à la maison.",why:"Lieu de personnes précises : estar, accordé au pluriel."},
 {th:"Weather",t:"qcm",s:"Hoy ___ mucha niebla.",o:["está","hay","es"],a:1,fr:"Aujourd'hui, il y a beaucoup de brouillard.",why:"Mucha niebla annonce une quantité, sans article défini : hay."},
 {th:"Health",t:"qcm",s:"¿Dónde ___ el hospital?",o:["hay","está","es"],a:1,fr:"Où est l'hôpital ?",why:"El hospital est précis : on demande où il se trouve avec estar."}
],

es_gustar:[
 {th:"Food",t:"tr",fr:"J'aime les oranges.",a:["Me gustan las naranjas.","A mí me gustan las naranjas."],why:"La chose aimée est le sujet : pluriel → gustan."},
 {th:"Nature",t:"tr",fr:"Nous aimons la montagne.",a:["Nos gusta la montaña.","A nosotros nos gusta la montaña.","A nosotras nos gusta la montaña."],why:"Nos gusta : la montagne est singulière, même si « nous » est pluriel."},
 {th:"Climbing",t:"tr",fr:"Ma copine aime grimper.",a:["A mi novia le gusta escalar.","A mi novia le gusta trepar."],why:"Pour une autre personne : a + personne + le gusta + infinitif."},
 {th:"Weather",t:"tr",fr:"Je n'aime pas la pluie.",a:["No me gusta la lluvia.","A mí no me gusta la lluvia."],why:"No se place avant le pronom : no me gusta."},
 {th:"Travel",t:"tr",fr:"Vous aimez voyager ? (vous = vosotros)",a:["¿Os gusta viajar?","¿A vosotros os gusta viajar?","¿A vosotras os gusta viajar?","¿Les gusta viajar?","¿A ustedes les gusta viajar?"],why:"Gusta + infinitif reste au singulier ; vosotros → os."},
 {th:"Home",t:"gap",s:"Me ___ mucho tu casa.",a:["gusta"],fr:"Ta maison me plaît beaucoup.",why:"Tu casa est singulier : gusta."},
 {th:"Shopping",t:"gap",s:"¿Te ___ estos zapatos?",a:["gustan"],fr:"Ces chaussures te plaisent ?",why:"Estos zapatos est pluriel : gustan."},
 {th:"Family",t:"gap",s:"A mis hijos ___ gustan los dibujos animados.",a:["les"],fr:"Mes enfants aiment les dessins animés.",why:"Pour ellos / ellas : les gusta(n), même avec a mis hijos."},
 {th:"Restaurant",t:"gap",s:"A Ana no le ___ el pescado.",a:["gusta"],fr:"Ana n'aime pas le poisson.",why:"El pescado est singulier : gusta, jamais « gusto »."},
 {th:"City",t:"qcm",s:"___ gusta vivir en Madrid.",o:["Yo","Me","Mi"],a:1,fr:"J'aime vivre à Madrid.",why:"Jamais « yo gusto » : la personne est un pronom, me."},
 {th:"Work",t:"qcm",s:"A mi jefe no ___ gustan las reuniones largas.",o:["le","lo","les","se"],a:0,fr:"Mon chef n'aime pas les longues réunions.",why:"Une personne (él) → le ; gustan s'accorde avec las reuniones."},
 {th:"Health",t:"qcm",s:"Nos ___ las verduras.",o:["gusta","gustan","gustamos"],a:1,fr:"Nous aimons les légumes.",why:"Le verbe s'accorde avec las verduras, pas avec nosotros."}
],

es_presente:[
 {th:"Food",t:"tr",fr:"Je cuisine le soir.",a:["Cocino por la noche.","Yo cocino por la noche.","Cocino por las noches."],why:"Yo : on enlève -ar et on ajoute -o, sans pronom."},
 {th:"Work",t:"tr",fr:"Mon frère travaille à l'hôpital.",a:["Mi hermano trabaja en el hospital."],why:"Él : -ar → -a. Le lieu où l'on est : en."},
 {th:"Shopping",t:"tr",fr:"Nous achetons du pain.",a:["Compramos pan.","Nosotros compramos pan.","Nosotras compramos pan."],why:"Nosotros → -amos ; pas de partitif en espagnol : compramos pan."},
 {th:"Home",t:"tr",fr:"Ils habitent dans un appartement.",a:["Viven en un piso.","Viven en un apartamento.","Ellos viven en un piso.","Ellos viven en un apartamento.","Ellas viven en un piso.","Ellas viven en un apartamento.","Viven en un departamento."],why:"Vivir, ellos : -ir → -en."},
 {th:"Climbing",t:"tr",fr:"Tu grimpes le samedi ?",a:["¿Escalas los sábados?","¿Tú escalas los sábados?"],why:"Tú : -as ; une habitude se dit los sábados, au pluriel."},
 {th:"City",t:"gap",s:"Yo ___ en el centro.",a:["vivo"],h:"vivir",fr:"J'habite dans le centre.",why:"Yo : -o pour les trois groupes."},
 {th:"Restaurant",t:"gap",s:"¿Qué ___ vosotros?",a:["bebéis"],h:"beber",fr:"Qu'est-ce que vous buvez ?",why:"Vosotros, verbe en -er : -éis."},
 {th:"Travel",t:"gap",s:"El tren ___ a las diez.",a:["llega"],h:"llegar",fr:"Le train arrive à dix heures.",why:"Él / ella, verbe en -ar : -a."},
 {th:"Family",t:"gap",s:"Mis abuelos ___ el periódico cada día.",a:["leen"],h:"leer",fr:"Mes grands-parents lisent le journal tous les jours.",why:"Ellos, verbe en -er : -en, d'où leen avec deux e."},
 {th:"Weather",t:"qcm",s:"En invierno ___ mucho.",o:["llove","llueve","lluvia"],a:1,fr:"En hiver, il pleut beaucoup.",why:"Llover diphtongue : o → ue. Lluvia est le nom (la pluie)."},
 {th:"Nature",t:"qcm",s:"Nosotros ___ por el bosque los domingos.",o:["caminamos","caminemos","caminan"],a:0,fr:"Nous marchons dans la forêt le dimanche.",why:"Nosotros, verbe en -ar : -amos."},
 {th:"Health",t:"qcm",s:"Mi hija ___ diez horas cada noche.",o:["dorme","duerme","dormes"],a:1,fr:"Ma fille dort dix heures chaque nuit.",why:"Dormir diphtongue : o → ue, duerme."}
],

es_tener_ir:[
 {th:"Weather",t:"tr",fr:"J'ai froid.",a:["Tengo frío.","Yo tengo frío."],why:"La sensation de froid se dit avec tener, comme avoir."},
 {th:"Travel",t:"tr",fr:"Nous allons à la plage.",a:["Vamos a la playa.","Nosotros vamos a la playa.","Nosotras vamos a la playa."],why:"Ir, nosotros = vamos, suivi de a pour la destination."},
 {th:"Family",t:"tr",fr:"Ma sœur a deux enfants.",a:["Mi hermana tiene dos hijos.","Mi hermana tiene dos niños."],why:"Avoir = tener ; ella → tiene, avec diphtongue."},
 {th:"Health",t:"tr",fr:"Tu as soif ?",a:["¿Tienes sed?","¿Tú tienes sed?"],why:"La soif se dit avec tener : tienes sed."},
 {th:"Climbing",t:"tr",fr:"Ils vont à la salle d'escalade.",a:["Van al rocódromo.","Ellos van al rocódromo.","Ellas van al rocódromo.","Van a la sala de escalada.","Van al muro de escalada."],why:"Ir, ellos = van ; a + el se contracte en al."},
 {th:"Work",t:"gap",s:"Hoy ___ mucho trabajo.",a:["tengo"],h:"tener, yo",fr:"Aujourd'hui, j'ai beaucoup de travail.",why:"Tener est irrégulier : yo tengo."},
 {th:"City",t:"gap",s:"¿___ al museo con nosotros?",a:["Vas"],h:"ir, tú",fr:"Tu vas au musée avec nous ?",why:"Ir, tú = vas : rien à voir avec l'infinitif."},
 {th:"Shopping",t:"gap",s:"Vamos ___ supermercado.",a:["al"],fr:"Nous allons au supermarché.",why:"a + el = al, contraction obligatoire."},
 {th:"Home",t:"gap",s:"Mi casa ___ un jardín pequeño.",a:["tiene"],h:"tener",fr:"Ma maison a un petit jardin.",why:"Ella → tiene : la diphtongue e → ie."},
 {th:"Restaurant",t:"qcm",s:"Mi hijo ___ hambre.",o:["es","está","tiene"],a:2,fr:"Mon fils a faim.",why:"Avoir faim = tener hambre, jamais ser ou estar."},
 {th:"Food",t:"qcm",s:"¿Vosotros ___ al mercado hoy?",o:["vais","vas","vamos"],a:0,fr:"Vous allez au marché aujourd'hui ?",why:"Ir, vosotros = vais."},
 {th:"Nature",t:"qcm",s:"Mañana voy ___ montaña.",o:["a la","en la","al"],a:0,fr:"Demain, je vais à la montagne.",why:"Direction = a ; en indique où l'on est. Montaña est féminin : a la."}
],

es_indefinido:[
 {th:"Travel",t:"tr",fr:"L'année dernière, j'ai visité Séville.",a:["El año pasado visité Sevilla.","Visité Sevilla el año pasado.","El año pasado yo visité Sevilla."],why:"Moment passé et terminé (el año pasado) : indefinido, visité."},
 {th:"Food",t:"tr",fr:"Hier soir, nous avons dîné chez Ana.",a:["Anoche cenamos en casa de Ana.","Ayer por la noche cenamos en casa de Ana.","Anoche cenamos con Ana en su casa."],why:"Anoche situe l'action : indefinido. Chez = en casa de."},
 {th:"Work",t:"tr",fr:"Il a fini le rapport lundi.",a:["Terminó el informe el lunes.","Acabó el informe el lunes.","Él terminó el informe el lunes.","Él acabó el informe el lunes.","Terminó el reporte el lunes."],why:"Él, -ar → -ó, avec l'accent : terminó (≠ termino, je termine)."},
 {th:"Climbing",t:"tr",fr:"Nous avons grimpé pendant six heures.",a:["Escalamos seis horas.","Escalamos durante seis horas.","Nosotros escalamos seis horas.","Nosotros escalamos durante seis horas."],why:"Durée finie : indefinido. Nosotros -amos est pareil au présent."},
 {th:"Shopping",t:"tr",fr:"Samedi, j'ai acheté une veste.",a:["El sábado compré una chaqueta.","Compré una chaqueta el sábado.","El sábado compré una cazadora.","El sábado compré una chamarra.","El sábado yo compré una chaqueta."],why:"Yo, -ar → -é : compré. Samedi précis → el sábado."},
 {th:"Family",t:"gap",s:"Mis padres ___ a Italia en 2019.",a:["fueron"],h:"ir",fr:"Mes parents sont allés en Italie en 2019.",why:"Ir est irrégulier : fui, fuiste, fue, fuimos, fueron."},
 {th:"City",t:"gap",s:"Ayer ___ el autobús.",a:["perdí"],h:"perder, yo",fr:"Hier, j'ai raté le bus.",why:"Rater le bus = perder ; yo, -er → -í."},
 {th:"Health",t:"gap",s:"¿Por qué no ___ ayer al médico?",a:["fuiste"],h:"ir, tú",fr:"Pourquoi tu n'es pas allé chez le médecin hier ?",why:"Ir, tú = fuiste : jamais de -s final (« fuistes »)."},
 {th:"Weather",t:"gap",s:"El sábado ___ todo el día.",a:["llovió"],h:"llover",fr:"Samedi, il a plu toute la journée.",why:"Journée précise et finie : indefinido, llovió."},
 {th:"Home",t:"qcm",s:"Anoche yo ___ una pizza en casa.",o:["hací","hice","hizo"],a:1,fr:"Hier soir, j'ai fait une pizza à la maison.",why:"Hacer a un radical irrégulier : hice, sans accent."},
 {th:"Restaurant",t:"qcm",s:"El domingo, Ana y yo ___ en un restaurante chino.",o:["comemos","comimos","comíamos"],a:1,fr:"Dimanche, Ana et moi avons mangé dans un restaurant chinois.",why:"Un dimanche précis et terminé : indefinido, comimos."},
 {th:"Nature",t:"qcm",s:"Ayer ___ un ciervo en el bosque.",o:["vimos","veíamos","vemos"],a:0,fr:"Hier, nous avons vu un cerf dans la forêt.",why:"Événement ponctuel d'hier : indefinido, vimos."}
],

es_imperfecto:[
 {th:"Family",t:"tr",fr:"Mon grand-père était pêcheur.",a:["Mi abuelo era pescador."],why:"Description dans le passé : imperfecto. Ser est irrégulier : era."},
 {th:"Home",t:"tr",fr:"Avant, nous avions un chien.",a:["Antes teníamos un perro.","Antes nosotros teníamos un perro."],why:"Situation durable du passé (antes) : imperfecto, teníamos."},
 {th:"Weather",t:"tr",fr:"Il faisait très chaud.",a:["Hacía mucho calor."],why:"La météo comme décor : imperfecto. Calor est un nom : mucho."},
 {th:"Climbing",t:"tr",fr:"Le mur était très haut.",a:["La pared era muy alta.","El muro era muy alto."],why:"Description d'un lieu passé : imperfecto, era."},
 {th:"Travel",t:"tr",fr:"Tous les étés, nous allions en Espagne.",a:["Todos los veranos íbamos a España.","Cada verano íbamos a España."],why:"Habitude passée : imperfecto. Ir est irrégulier : iba, íbamos."},
 {th:"Food",t:"gap",s:"De niña, no me ___ las verduras.",a:["gustaban"],h:"gustar",fr:"Petite, je n'aimais pas les légumes.",why:"Habitude passée et pluriel (las verduras) : gustaban."},
 {th:"Work",t:"gap",s:"Antes ___ en una tienda.",a:["trabajaba"],h:"trabajar, yo",fr:"Avant, je travaillais dans un magasin.",why:"-ar → -aba à l'imperfecto : trabajaba."},
 {th:"City",t:"gap",s:"Cuando era joven, ___ al cine cada semana.",a:["iba"],h:"ir, yo",fr:"Quand j'étais jeune, j'allais au cinéma chaque semaine.",why:"Habitude (cada semana) : imperfecto, ir → iba."},
 {th:"Health",t:"gap",s:"Mi abuela ___ mucho deporte.",a:["hacía"],h:"hacer, imperfecto",fr:"Ma grand-mère faisait beaucoup de sport.",why:"-er → -ía, avec accent : hacía."},
 {th:"Nature",t:"qcm",s:"La casa ___ cerca de un río.",o:["estuvo","estaba","está"],a:1,fr:"La maison était près d'une rivière.",why:"Situer un décor passé : imperfecto, estaba."},
 {th:"Shopping",t:"qcm",s:"Antes las cosas ___ más baratas.",o:["eran","fueron","son"],a:0,fr:"Avant, les choses étaient moins chères.",why:"Comparaison avec une époque passée : imperfecto, eran."},
 {th:"Restaurant",t:"qcm",s:"De pequeños, nuestros padres nos ___ a este bar.",o:["llevaban","llevaron","llevan"],a:0,fr:"Quand on était petits, nos parents nous emmenaient dans ce bar.",why:"De pequeños = habitude de l'enfance : imperfecto."}
],

es_reflexivos:[
 {th:"Health",t:"tr",fr:"Je me brosse les dents.",a:["Me lavo los dientes.","Me cepillo los dientes.","Yo me lavo los dientes.","Yo me cepillo los dientes."],why:"Pronominal + article : los dientes, pas « mis dientes »."},
 {th:"Home",t:"tr",fr:"Il se réveille tôt.",a:["Se despierta temprano.","Se despierta pronto.","Él se despierta temprano."],why:"Despertarse : se avant le verbe, et diphtongue e → ie."},
 {th:"Family",t:"tr",fr:"Mes enfants s'habillent seuls.",a:["Mis hijos se visten solos.","Mis niños se visten solos."],why:"Vestirse, ellos : se visten (e → i)."},
 {th:"Work",t:"tr",fr:"Tu te reposes le dimanche ?",a:["¿Descansas los domingos?","¿Tú descansas los domingos?"],why:"Piège : se reposer = descansar, qui n'est pas pronominal."},
 {th:"Travel",t:"tr",fr:"Nous partons demain.",a:["Nos vamos mañana.","Mañana nos vamos.","Nosotros nos vamos mañana."],why:"Partir d'un lieu se dit souvent irse : nos vamos."},
 {th:"Climbing",t:"gap",s:"Antes de escalar, ___ ponemos el arnés.",a:["nos"],fr:"Avant de grimper, nous mettons le baudrier.",why:"Mettre sur soi = ponerse ; nosotros → nos."},
 {th:"Restaurant",t:"gap",s:"Ana se ___ a cenar.",a:["queda"],h:"quedarse",fr:"Ana reste dîner.",why:"Rester = quedarse, pronominal en espagnol."},
 {th:"City",t:"gap",s:"Siempre me ___ en esta ciudad.",a:["pierdo"],h:"perderse",fr:"Je me perds toujours dans cette ville.",why:"Perderse diphtongue : me pierdo."},
 {th:"Weather",t:"gap",s:"Con este frío, me ___ el abrigo.",a:["pongo"],h:"ponerse",fr:"Avec ce froid, je mets mon manteau.",why:"Ponerse = mettre sur soi ; yo → pongo, avec l'article el."},
 {th:"Food",t:"qcm",s:"¿Quieres ___ a cenar?",o:["quedarte","te quedar","quedarse"],a:0,fr:"Tu veux rester dîner ?",why:"Avec un infinitif, le pronom se colle à la fin et s'accorde : quedarte."},
 {th:"Nature",t:"qcm",s:"Vosotros ___ bañáis en el río.",o:["os","se","vos","nos"],a:0,fr:"Vous vous baignez dans la rivière.",why:"Vosotros → os. Se sert pour él, ellos, usted."},
 {th:"Shopping",t:"qcm",s:"Mi madre ___ prueba el vestido.",o:["se","le","la","me"],a:0,fr:"Ma mère essaie la robe.",why:"Essayer un vêtement = probarse : se prueba."}
],

es_ir_a:[
 {th:"Weather",t:"tr",fr:"Demain, il va faire froid.",a:["Mañana va a hacer frío.","Va a hacer frío mañana."],why:"Futur proche : va a + infinitif. Le a est obligatoire."},
 {th:"Food",t:"tr",fr:"Je vais préparer une tortilla.",a:["Voy a preparar una tortilla.","Voy a hacer una tortilla.","Yo voy a preparar una tortilla.","Yo voy a hacer una tortilla."],why:"Voy a + infinitif, jamais « voy preparar »."},
 {th:"Travel",t:"tr",fr:"Nous allons prendre le train.",a:["Vamos a coger el tren.","Vamos a tomar el tren.","Nosotros vamos a coger el tren.","Nosotros vamos a tomar el tren."],why:"Vamos a + infinitif. Prendre le train : coger (Espagne) ou tomar."},
 {th:"Climbing",t:"tr",fr:"Elles vont grimper cet après-midi.",a:["Van a escalar esta tarde.","Ellas van a escalar esta tarde.","Esta tarde van a escalar."],why:"Ellas → van a + infinitif."},
 {th:"Family",t:"tr",fr:"Tu vas voir tes grands-parents ?",a:["¿Vas a ver a tus abuelos?","¿Tú vas a ver a tus abuelos?","¿Vas a visitar a tus abuelos?"],why:"Vas a + infinitif, puis a devant une personne COD."},
 {th:"Work",t:"gap",s:"Mañana ___ a empezar un trabajo nuevo.",a:["voy"],h:"ir, yo",fr:"Demain, je vais commencer un nouveau travail.",why:"Le verbe ir se conjugue : yo → voy."},
 {th:"Home",t:"gap",s:"Vamos ___ pintar la cocina.",a:["a"],fr:"Nous allons peindre la cuisine.",why:"Le a entre ir et l'infinitif est obligatoire : erreur n° 1 des francophones."},
 {th:"Health",t:"gap",s:"El médico te ___ a dar un jarabe.",a:["va"],h:"ir",fr:"Le médecin va te donner un sirop.",why:"El médico = él → va a + infinitif."},
 {th:"Shopping",t:"gap",s:"¿Qué ___ a comprar vosotros?",a:["vais"],h:"ir",fr:"Qu'est-ce que vous allez acheter ?",why:"Vosotros → vais a + infinitif."},
 {th:"City",t:"qcm",s:"Esta noche ___ salir con Tom.",o:["voy","voy a","vaya"],a:1,fr:"Ce soir, je vais sortir avec Tom.",why:"Sans a, la phrase est fausse : voy a salir."},
 {th:"Restaurant",t:"qcm",s:"¿Qué ___ a pedir ustedes?",o:["van","vais","vamos"],a:0,fr:"Qu'est-ce que vous allez commander ?",why:"Ustedes se conjugue à la 3e personne du pluriel : van."},
 {th:"Nature",t:"qcm",s:"Creo que ___ a nevar.",o:["va","vamos","está"],a:0,fr:"Je crois qu'il va neiger.",why:"Nevar est impersonnel : va a nevar, à la 3e personne."}
],

es_comparativos:[
 {th:"City",t:"tr",fr:"Madrid est plus grand que Séville.",a:["Madrid es más grande que Sevilla."],why:"Plus … que = más … que."},
 {th:"Food",t:"tr",fr:"Ce gâteau est meilleur que l'autre.",a:["Este pastel es mejor que el otro.","Esta tarta es mejor que la otra.","Este bizcocho es mejor que el otro.","Esta torta es mejor que la otra."],why:"Meilleur = mejor, irrégulier ; jamais « más bueno »."},
 {th:"Weather",t:"tr",fr:"Aujourd'hui, il fait moins froid qu'hier.",a:["Hoy hace menos frío que ayer."],why:"Moins … que = menos … que, même devant un nom."},
 {th:"Family",t:"tr",fr:"Mon frère est plus âgé que moi.",a:["Mi hermano es mayor que yo."],why:"Plus âgé = mayor ; après que, on dit yo, pas « mí »."},
 {th:"Climbing",t:"tr",fr:"Cette voie est aussi difficile que l'autre.",a:["Esta vía es tan difícil como la otra.","Esta ruta es tan difícil como la otra."],why:"Égalité avec un adjectif : tan … como, pas « tan … que »."},
 {th:"Shopping",t:"gap",s:"Esta tienda es ___ cara que la otra.",a:["menos"],h:"moins",fr:"Ce magasin est moins cher que l'autre.",why:"Moins = menos, suivi de que."},
 {th:"Travel",t:"gap",s:"El avión es más rápido ___ el tren.",a:["que"],fr:"L'avion est plus rapide que le train.",why:"Avec más ou menos, la comparaison se fait avec que."},
 {th:"Health",t:"gap",s:"Hoy me siento ___ que ayer.",a:["mejor"],h:"mieux",fr:"Aujourd'hui, je me sens mieux qu'hier.",why:"Mieux = mejor, comme meilleur : un seul mot."},
 {th:"Home",t:"gap",s:"Mi piso es tan pequeño ___ el tuyo.",a:["como"],fr:"Mon appartement est aussi petit que le tien.",why:"Après tan, on met como, jamais que."},
 {th:"Work",t:"qcm",s:"Este proyecto es ___ que el anterior.",o:["más malo","peor","más peor"],a:1,fr:"Ce projet est pire que le précédent.",why:"Pire = peor, irrégulier ; « más peor » est un double comparatif."},
 {th:"Restaurant",t:"qcm",s:"Aquí hay ___ mesas como en el otro bar.",o:["tan","tantas","tantos","más"],a:1,fr:"Ici, il y a autant de tables que dans l'autre bar.",why:"Devant un nom : tanto s'accorde, mesas → tantas."},
 {th:"Nature",t:"qcm",s:"El Everest es la montaña ___ alta del mundo.",o:["más","la más","mejor"],a:0,fr:"L'Everest est la montagne la plus haute du monde.",why:"Superlatif : l'article ne se répète pas, la montaña más alta."}
],

es_gerundio:[
 {th:"Food",t:"tr",fr:"Je suis en train de cuisiner.",a:["Estoy cocinando.","Yo estoy cocinando."],why:"Être en train de = estar + gérondif en -ando."},
 {th:"Weather",t:"tr",fr:"Il est en train de neiger.",a:["Está nevando."],why:"Estar + gérondif, à la 3e personne : está nevando."},
 {th:"Family",t:"tr",fr:"Les enfants sont en train de jouer dans le jardin.",a:["Los niños están jugando en el jardín.","Los chicos están jugando en el jardín."],why:"Ellos → están + gérondif ; jugar → jugando."},
 {th:"Work",t:"tr",fr:"Nous sommes en train de préparer la réunion.",a:["Estamos preparando la reunión.","Nosotros estamos preparando la reunión.","Nosotras estamos preparando la reunión."],why:"Seul estar se conjugue ; le gérondif reste invariable."},
 {th:"Climbing",t:"tr",fr:"Tom est en train de grimper.",a:["Tom está escalando."],why:"-ar → -ando : escalando."},
 {th:"Health",t:"gap",s:"El paciente está ___.",a:["durmiendo"],h:"dormir",fr:"Le patient est en train de dormir.",why:"Dormir change son o en u : durmiendo."},
 {th:"Restaurant",t:"gap",s:"El camarero está ___ la cuenta.",a:["trayendo"],h:"traer",fr:"Le serveur est en train d'apporter l'addition.",why:"Après une voyelle, -iendo devient -yendo : trayendo."},
 {th:"Travel",t:"gap",s:"Estamos ___ en el aeropuerto.",a:["esperando"],h:"esperar",fr:"Nous sommes en train d'attendre à l'aéroport.",why:"-ar → -ando : esperando."},
 {th:"Home",t:"gap",s:"Mi padre ___ limpiando la cocina.",a:["está"],h:"estar",fr:"Mon père est en train de nettoyer la cuisine.",why:"Le gérondif progressif se construit avec estar, jamais ser."},
 {th:"City",t:"qcm",s:"Están ___ un hotel nuevo en el centro.",o:["construyendo","construiendo","construido"],a:0,fr:"Ils sont en train de construire un nouvel hôtel dans le centre.",why:"Construir : le i entre voyelles devient y, construyendo."},
 {th:"Shopping",t:"qcm",s:"Mi madre está ___ un regalo.",o:["eligiendo","eligendo","elegiendo"],a:0,fr:"Ma mère est en train de choisir un cadeau.",why:"Elegir change e en i au gérondif : eligiendo."},
 {th:"Nature",t:"qcm",s:"Mira, los pájaros están ___.",o:["cantando","cantiendo","cantar"],a:0,fr:"Regarde, les oiseaux sont en train de chanter.",why:"Verbe en -ar : -ando, jamais -iendo."}
],

es_pronombres_cd:[
 {th:"Food",t:"tr",fr:"Les tomates ? Je les achète au marché.",a:["¿Los tomates? Los compro en el mercado."],why:"Los tomates est masculin pluriel → los, avant le verbe."},
 {th:"Family",t:"tr",fr:"Ma grand-mère ? Je la vois le dimanche.",a:["¿Mi abuela? La veo los domingos.","¿Mi abuela? La veo el domingo."],why:"Une femme COD → la, placé avant le verbe conjugué."},
 {th:"Shopping",t:"tr",fr:"Cette robe ? Je la prends.",a:["¿Este vestido? Me lo llevo.","¿Este vestido? Lo compro.","¿Este vestido? Lo quiero.","¿Este vestido? Lo cojo."],why:"Piège : el vestido est masculin, donc lo, pas la."},
 {th:"Home",t:"tr",fr:"La porte ? Je la ferme.",a:["¿La puerta? La cierro.","¿La puerta? Yo la cierro."],why:"La puerta → la, devant le verbe conjugué."},
 {th:"Work",t:"tr",fr:"Le rapport ? Je vais l'écrire demain.",a:["¿El informe? Voy a escribirlo mañana.","¿El informe? Lo voy a escribir mañana.","¿El informe? Mañana voy a escribirlo.","¿El informe? Mañana lo voy a escribir."],why:"Avec un infinitif : collé à la fin (escribirlo) ou avant voy."},
 {th:"Restaurant",t:"gap",s:"¿La cuenta? Ahora ___ traigo.",a:["la"],fr:"L'addition ? Je vous l'apporte tout de suite.",why:"La cuenta est féminin → la."},
 {th:"Travel",t:"gap",s:"¿Los billetes? ___ tengo en el móvil.",a:["Los"],fr:"Les billets ? Je les ai sur mon portable.",why:"Masculin pluriel → los, jamais « les » (c'est le COI)."},
 {th:"Climbing",t:"gap",s:"¿El arnés? ___ necesito para escalar.",a:["Lo"],fr:"Le baudrier ? J'en ai besoin pour grimper.",why:"El arnés → lo. En espagnol, necesitar prend un COD direct."},
 {th:"Health",t:"gap",s:"¿Las pastillas? ___ tomo cada mañana.",a:["Las"],fr:"Les comprimés ? Je les prends chaque matin.",why:"Féminin pluriel → las."},
 {th:"City",t:"qcm",s:"¿La plaza Mayor? No ___ encuentro.",o:["lo","la","le"],a:1,fr:"La plaza Mayor ? Je ne la trouve pas.",why:"La plaza est féminin → la ; le est un pronom COI."},
 {th:"Nature",t:"qcm",s:"¿Las plantas? ___ riego cada día.",o:["Los","Las","Les"],a:1,fr:"Les plantes ? Je les arrose tous les jours.",why:"Las plantas, féminin pluriel → las. Les est le COI."},
 {th:"Weather",t:"qcm",s:"¿El paraguas? ___ dejé en casa.",o:["La","Lo","Le"],a:1,fr:"Le parapluie ? Je l'ai laissé à la maison.",why:"El paraguas est masculin (singulier malgré le -s) → lo."}
],

es_indef_imperf:[
 {th:"Weather",t:"tr",fr:"Il faisait beau quand nous sommes partis.",a:["Hacía buen tiempo cuando salimos.","Hacía sol cuando salimos.","Hacía buen tiempo cuando nos fuimos.","Hacía sol cuando nos fuimos.","Cuando salimos, hacía buen tiempo.","Cuando salimos, hacía sol."],why:"La météo = décor (imperfecto) ; le départ = événement (indefinido)."},
 {th:"Climbing",t:"tr",fr:"Je grimpais quand j'ai entendu un bruit.",a:["Escalaba cuando oí un ruido.","Estaba escalando cuando oí un ruido.","Escalaba cuando escuché un ruido.","Estaba escalando cuando escuché un ruido."],why:"Action en cours (escalaba) interrompue par un événement (oí)."},
 {th:"Health",t:"tr",fr:"Elle s'est cassé le bras quand elle avait dix ans.",a:["Se rompió el brazo cuando tenía diez años.","Se partió el brazo cuando tenía diez años.","Se rompió el brazo cuando tenía 10 años.","Se quebró el brazo cuando tenía diez años."],why:"L'âge est une description (tenía) ; la fracture, un fait ponctuel (se rompió)."},
 {th:"Family",t:"tr",fr:"Mes parents se sont rencontrés quand ils travaillaient à Paris.",a:["Mis padres se conocieron cuando trabajaban en París."],why:"Se rencontrer = conocerse, ponctuel ; le travail est le cadre : trabajaban."},
 {th:"City",t:"tr",fr:"Il y avait beaucoup de monde, alors nous sommes partis.",a:["Había mucha gente, así que nos fuimos.","Como había mucha gente, nos fuimos.","Había mucha gente, entonces nos fuimos."],why:"Había décrit la situation ; nos fuimos est la décision prise."},
 {th:"Travel",t:"gap",s:"Mientras ___ el tren, leí una novela.",a:["esperaba"],h:"esperar, yo",fr:"Pendant que j'attendais le train, j'ai lu un roman.",why:"Mientras introduit le cadre en cours : imperfecto."},
 {th:"Food",t:"gap",s:"Cocinaba cuando de repente se ___ la luz.",a:["fue"],h:"irse",fr:"Je cuisinais quand, tout à coup, il y a eu une coupure de courant.",why:"De repente signale un événement soudain : indefinido, se fue."},
 {th:"Home",t:"gap",s:"Cuando ___ a casa, mi hermano dormía.",a:["llegué"],h:"llegar, yo",fr:"Quand je suis arrivé à la maison, mon frère dormait.",why:"L'arrivée est ponctuelle : llegué, avec gu pour garder le son."},
 {th:"Work",t:"gap",s:"Ayer no ___ a la reunión porque estaba enfermo.",a:["fui"],h:"ir, yo",fr:"Hier, je ne suis pas allé à la réunion parce que j'étais malade.",why:"Le fait (no fui) est ponctuel ; la cause (estaba) décrit l'état."},
 {th:"Nature",t:"qcm",s:"Paseábamos por el campo cuando ___ a llover.",o:["empezaba","empezó","empieza"],a:1,fr:"Nous nous promenions dans la campagne quand il s'est mis à pleuvoir.",why:"Le début de la pluie interrompt la promenade : indefinido."},
 {th:"Restaurant",t:"qcm",s:"El restaurante ___ lleno, así que cenamos en casa.",o:["estuvo","estaba","fue"],a:1,fr:"Le restaurant était plein, alors nous avons dîné à la maison.",why:"Lleno décrit la situation au moment des faits : imperfecto."},
 {th:"Shopping",t:"qcm",s:"Ayer ___ tres horas en el centro comercial.",o:["estábamos","estuvimos","estamos"],a:1,fr:"Hier, nous avons passé trois heures au centre commercial.",why:"Durée délimitée et terminée (tres horas) : indefinido."}
],

es_perfecto:[
 {th:"Food",t:"tr",fr:"Aujourd'hui, j'ai mangé une salade.",a:["Hoy he comido una ensalada.","Hoy he comido ensalada.","Hoy yo he comido una ensalada."],why:"Hoy est une période pas finie : pretérito perfecto en Espagne."},
 {th:"Travel",t:"tr",fr:"Nous n'avons jamais pris l'avion.",a:["Nunca hemos tomado un avión.","Nunca hemos cogido un avión.","Nunca hemos volado.","No hemos volado nunca.","Nunca hemos viajado en avión.","Nunca hemos ido en avión."],why:"Expérience sans date (nunca) : haber + participe."},
 {th:"Work",t:"tr",fr:"Cette semaine, j'ai beaucoup travaillé.",a:["Esta semana he trabajado mucho.","He trabajado mucho esta semana."],why:"Esta semana n'est pas finie : perfecto. Avoir = haber, jamais tener."},
 {th:"Health",t:"tr",fr:"Tu as déjà vu le médecin ?",a:["¿Ya has visto al médico?","¿Has visto ya al médico?","¿Ya has ido al médico?","¿Has ido ya al médico?"],why:"Ya + perfecto ; ver irrégulier : visto. A devant une personne."},
 {th:"Climbing",t:"tr",fr:"Ce matin, elle a fait trois voies.",a:["Esta mañana ha hecho tres vías.","Ha hecho tres vías esta mañana.","Esta mañana ha escalado tres vías.","Esta mañana hizo tres vías."],why:"Esta mañana, encore aujourd'hui : perfecto. Hacer → hecho."},
 {th:"Home",t:"gap",s:"¿Quién ___ roto la ventana?",a:["ha"],fr:"Qui a cassé la fenêtre ?",why:"Auxiliaire haber, 3e personne : ha. Romper → roto."},
 {th:"Family",t:"gap",s:"Mis primos todavía no han ___.",a:["vuelto"],h:"volver",fr:"Mes cousins ne sont pas encore rentrés.",why:"Participe irrégulier : volver → vuelto. Toujours haber, jamais « ser »."},
 {th:"Shopping",t:"gap",s:"Este mes hemos ___ demasiado.",a:["gastado"],h:"gastar",fr:"Ce mois-ci, nous avons trop dépensé.",why:"-ar → -ado ; le participe ne s'accorde jamais avec haber."},
 {th:"Weather",t:"gap",s:"Esta semana ha ___ mucho.",a:["llovido"],h:"llover",fr:"Cette semaine, il a beaucoup plu.",why:"-er → -ido : llovido."},
 {th:"City",t:"qcm",s:"Todavía no he ___ el nuevo museo.",o:["visto","veído","vido"],a:0,fr:"Je n'ai pas encore vu le nouveau musée.",why:"Ver a un participe irrégulier : visto."},
 {th:"Restaurant",t:"qcm",s:"Hoy nosotros ___ el menú del día.",o:["hemos pedido","habemos pedido","hemos pidido"],a:0,fr:"Aujourd'hui, nous avons pris le menu du jour.",why:"Haber, nosotros = hemos ; le participe de pedir reste régulier : pedido."},
 {th:"Nature",t:"qcm",s:"Los niños han ___ un nido.",o:["descubrido","descubierto","descubiertos"],a:1,fr:"Les enfants ont découvert un nid.",why:"Participe irrégulier (descubierto), invariable après haber."}
],

es_por_para:[
 {th:"Travel",t:"tr",fr:"Le train pour Valence part à dix heures.",a:["El tren para Valencia sale a las diez.","El tren a Valencia sale a las diez.","El tren hacia Valencia sale a las diez."],why:"La destination se dit avec para, pas por."},
 {th:"City",t:"tr",fr:"Nous nous promenons dans le parc.",a:["Paseamos por el parque.","Damos un paseo por el parque.","Caminamos por el parque."],why:"Se déplacer à travers un lieu = por."},
 {th:"Health",t:"tr",fr:"Ces pastilles sont pour la toux.",a:["Estas pastillas son para la tos."],why:"Le but, l'usage prévu = para."},
 {th:"Shopping",t:"tr",fr:"Je l'ai acheté pour vingt euros.",a:["Lo compré por veinte euros.","Lo he comprado por veinte euros.","Lo compré por 20 euros.","Lo he comprado por 20 euros.","La compré por veinte euros.","La he comprado por veinte euros.","La compré por 20 euros.","La he comprado por 20 euros."],why:"Un échange, un prix = por."},
 {th:"Climbing",t:"tr",fr:"Je m'entraîne pour mieux grimper.",a:["Entreno para escalar mejor.","Me entreno para escalar mejor.","Yo entreno para escalar mejor."],why:"Pour + infinitif exprimant un but = para."},
 {th:"Work",t:"gap",s:"Tengo que terminar el informe ___ el viernes.",a:["para"],h:"por / para",fr:"Je dois finir le rapport pour vendredi.",why:"Une date limite = para."},
 {th:"Weather",t:"gap",s:"No salimos ___ la lluvia.",a:["por","a causa de"],h:"por / para",fr:"Nous ne sommes pas sortis à cause de la pluie.",why:"La cause = por."},
 {th:"Family",t:"gap",s:"Este pastel es ___ mi abuela.",a:["para"],h:"por / para",fr:"Ce gâteau est pour ma grand-mère.",why:"Le destinataire = para."},
 {th:"Food",t:"gap",s:"Como fruta dos veces ___ día.",a:["por","al"],h:"par jour",fr:"Je mange des fruits deux fois par jour.",why:"La fréquence : por día (ou al día), jamais para."},
 {th:"Restaurant",t:"qcm",s:"Gracias ___ la cena.",o:["para","por","de"],a:1,fr:"Merci pour le dîner.",why:"Gracias por : on remercie pour une cause."},
 {th:"Nature",t:"qcm",s:"Pasamos ___ un bosque precioso.",o:["para","por","en"],a:1,fr:"Nous sommes passés par une forêt magnifique.",why:"Passer par un lieu = por."},
 {th:"Home",t:"qcm",s:"Esta habitación es ___ los invitados.",o:["por","para","a"],a:1,fr:"Cette chambre est pour les invités.",why:"Le destinataire = para."}
],

es_subj_deseo:[
 {th:"Family",t:"tr",fr:"Je veux que vous veniez dîner. (vous = vosotros)",a:["Quiero que vengáis a cenar.","Yo quiero que vengáis a cenar.","Quiero que vengan a cenar."],why:"Querer que + autre sujet → subjonctif : vengáis."},
 {th:"Weather",t:"tr",fr:"Pourvu qu'il ne pleuve pas ! (ojalá)",a:["¡Ojalá no llueva!"],why:"Ojalá est toujours suivi du subjonctif : llueva."},
 {th:"Health",t:"tr",fr:"Le médecin veut que je me repose.",a:["El médico quiere que descanse.","El médico quiere que yo descanse.","La médica quiere que descanse."],why:"Sujet différent après querer que : subjonctif, descanse."},
 {th:"Work",t:"tr",fr:"Je t'envoie le fichier pour que tu le lises.",a:["Te envío el archivo para que lo leas.","Te mando el archivo para que lo leas.","Te envío el fichero para que lo leas.","Te mando el fichero para que lo leas."],why:"Para que + subjonctif, comme « pour que » : leas."},
 {th:"Climbing",t:"tr",fr:"Je veux grimper demain.",a:["Quiero escalar mañana.","Mañana quiero escalar.","Yo quiero escalar mañana."],why:"Même sujet (moi … moi) : infinitif, pas de que."},
 {th:"Travel",t:"gap",s:"Ojalá ___ un buen viaje.",a:["tengáis","tengan"],h:"tener, vosotros",fr:"Pourvu que vous fassiez un bon voyage.",why:"Ojalá + subjonctif : tener → tengáis."},
 {th:"Home",t:"gap",s:"Mis padres quieren que ___ mi habitación.",a:["ordene"],h:"ordenar, yo",fr:"Mes parents veulent que je range ma chambre.",why:"Autre sujet : subjonctif. Verbe en -ar → terminaison en -e."},
 {th:"Food",t:"gap",s:"Prefiero que ___ tú la cena.",a:["hagas"],h:"hacer",fr:"Je préfère que tu fasses le dîner.",why:"Preferir que + subjonctif ; hacer → hagas."},
 {th:"Shopping",t:"gap",s:"Te doy dinero para que ___ pan.",a:["compres"],h:"comprar, tú",fr:"Je te donne de l'argent pour que tu achètes du pain.",why:"Para que + subjonctif : -ar → -es."},
 {th:"City",t:"qcm",s:"Quiero que me ___ la ciudad.",o:["enseñas","enseñes","enseñar"],a:1,fr:"Je veux que tu me fasses visiter la ville.",why:"Après querer que avec un autre sujet : subjonctif, jamais indicatif."},
 {th:"Restaurant",t:"qcm",s:"Ojalá ___ mesa libre.",o:["hay","haya","habrá"],a:1,fr:"Pourvu qu'il y ait une table libre.",why:"Ojalá + subjonctif : hay → haya."},
 {th:"Nature",t:"qcm",s:"Queremos ___ el amanecer desde la montaña.",o:["que veamos","ver","veamos"],a:1,fr:"Nous voulons voir le lever du soleil depuis la montagne.",why:"Même sujet : infinitif. Le subjonctif est pour un autre sujet."}
],

es_futuro:[
 {th:"Weather",t:"tr",fr:"Demain, il fera chaud.",a:["Mañana hará calor.","Hará calor mañana."],why:"Hacer a un radical irrégulier au futur : hará."},
 {th:"Travel",t:"tr",fr:"Nous arriverons à Lisbonne lundi.",a:["Llegaremos a Lisboa el lunes.","El lunes llegaremos a Lisboa."],why:"Futur = infinitif entier + -emos : llegaremos."},
 {th:"Work",t:"tr",fr:"Je ferai la présentation.",a:["Haré la presentación.","Yo haré la presentación."],why:"Hacer → har- + é : haré."},
 {th:"Family",t:"tr",fr:"Ma fille aura dix ans en mai.",a:["Mi hija tendrá diez años en mayo.","Mi hija cumplirá diez años en mayo.","Mi hija tendrá 10 años en mayo.","Mi hija cumplirá 10 años en mayo."],why:"L'âge avec tener ; futur irrégulier : tendrá."},
 {th:"Climbing",t:"tr",fr:"S'il pleut, nous grimperons en salle.",a:["Si llueve, escalaremos en el rocódromo.","Si llueve, escalaremos en un rocódromo.","Si llueve, escalaremos en la sala.","Si llueve, escalaremos bajo techo."],why:"Après si : présent (llueve), puis futur, comme en français."},
 {th:"Home",t:"gap",s:"El sábado ___ la casa.",a:["limpiaremos"],h:"limpiar, nosotros",fr:"Samedi, nous nettoierons la maison.",why:"Infinitif + -emos : limpiaremos."},
 {th:"City",t:"gap",s:"¿A qué hora ___ el museo?",a:["abrirá"],h:"abrir, futuro",fr:"À quelle heure ouvrira le musée ?",why:"Infinitif + -á, avec accent : abrirá."},
 {th:"Health",t:"gap",s:"No te preocupes, pronto ___ bien.",a:["estarás"],h:"estar, tú",fr:"Ne t'inquiète pas, tu iras bientôt bien.",why:"Un état futur avec estar : estarás."},
 {th:"Shopping",t:"gap",s:"Mañana ___ ir de compras.",a:["podré"],h:"poder, yo, futuro",fr:"Demain, je pourrai aller faire les courses.",why:"Poder perd son e au futur : podré."},
 {th:"Food",t:"qcm",s:"Si tienes hambre, te ___ un bocadillo.",o:["haceré","haré","haga"],a:1,fr:"Si tu as faim, je te ferai un sandwich.",why:"Hacer est irrégulier au futur : haré, jamais « haceré »."},
 {th:"Restaurant",t:"qcm",s:"Si llegamos tarde, no ___ mesa.",o:["habrá","haberá","hubo"],a:0,fr:"Si on arrive tard, il n'y aura pas de table.",why:"Futur de hay : habrá, radical irrégulier habr-."},
 {th:"Nature",t:"qcm",s:"Si ___ el sol, bajaremos al río.",o:["saldrá","sale","saliera"],a:1,fr:"Si le soleil sort, nous descendrons à la rivière.",why:"Jamais de futur après si : présent, sale."}
],

es_condicional:[
 {th:"Restaurant",t:"tr",fr:"Je voudrais un café, s'il vous plaît.",a:["Querría un café, por favor.","Quería un café, por favor.","Me gustaría un café, por favor.","Me gustaría tomar un café, por favor.","¿Me pone un café, por favor?"],why:"Le conditionnel (querría, me gustaría) adoucit la demande."},
 {th:"Travel",t:"tr",fr:"Nous aimerions visiter Cuba.",a:["Nos gustaría visitar Cuba.","A nosotros nos gustaría visitar Cuba.","Nos encantaría visitar Cuba."],why:"Gustar au conditionnel : nos gustaría, au singulier devant un infinitif."},
 {th:"Health",t:"tr",fr:"Tu devrais dormir plus.",a:["Deberías dormir más.","Tú deberías dormir más."],why:"Un conseil = deber au conditionnel : deberías."},
 {th:"Work",t:"tr",fr:"Pourriez-vous m'envoyer le contrat ? (vous = usted)",a:["¿Podría enviarme el contrato?","¿Me podría enviar el contrato?","¿Podría mandarme el contrato?","¿Me podría mandar el contrato?","¿Podría usted enviarme el contrato?"],why:"Usted → 3e personne : podría. Poder perd son e : podr-."},
 {th:"Home",t:"tr",fr:"Avec plus d'argent, j'achèterais une maison.",a:["Con más dinero, compraría una casa.","Con más dinero yo compraría una casa."],why:"Hypothèse : infinitif + -ía, compraría."},
 {th:"Family",t:"gap",s:"¿Te ___ venir con nosotros?",a:["gustaría"],h:"gustar",fr:"Tu aimerais venir avec nous ?",why:"Invitation polie : te gustaría + infinitif."},
 {th:"Climbing",t:"gap",s:"Yo no ___ esa vía sin casco.",a:["haría"],h:"hacer",fr:"Moi, je ne ferais pas cette voie sans casque.",why:"Même radical irrégulier qu'au futur : har- + ía."},
 {th:"City",t:"gap",s:"¿Me ___ decir dónde está la estación?",a:["podría"],h:"poder, usted",fr:"Pourriez-vous me dire où est la gare ?",why:"Demande polie à usted : podría."},
 {th:"Weather",t:"gap",s:"Con este tiempo, ___ mejor quedarnos en casa.",a:["sería"],h:"ser",fr:"Avec ce temps, il vaudrait mieux rester à la maison.",why:"Il vaudrait mieux = sería mejor : ser au conditionnel."},
 {th:"Shopping",t:"qcm",s:"Yo que tú, ___ ese abrigo.",o:["compraré","compraría","compre"],a:1,fr:"À ta place, j'achèterais ce manteau.",why:"Yo que tú (à ta place) appelle le conditionnel : compraría."},
 {th:"Food",t:"qcm",s:"¿Qué ___ tú en mi lugar?",o:["harías","hacerías","haces"],a:0,fr:"Qu'est-ce que tu ferais à ma place ?",why:"Hacer : radical har- au conditionnel, jamais « hacerías »."},
 {th:"Nature",t:"qcm",s:"Me ___ vivir cerca del mar.",o:["gustaría","gustaríamos","gustarías"],a:0,fr:"J'aimerais vivre près de la mer.",why:"Gustar s'accorde avec la chose (vivir) : gustaría, pas avec yo."}
],

es_imperativo:[
 {th:"Food",t:"tr",fr:"Goûte cette soupe !",a:["¡Prueba esta sopa!"],why:"Tú affirmatif = 3e personne du présent : prueba."},
 {th:"City",t:"tr",fr:"Tourne à gauche.",a:["Gira a la izquierda.","Dobla a la izquierda.","Tuerce a la izquierda."],why:"Impératif tú = forme du présent él : gira."},
 {th:"Health",t:"tr",fr:"Ne bois pas d'alcool.",a:["No bebas alcohol.","No tomes alcohol."],why:"À la négative : subjonctif, no bebas."},
 {th:"Climbing",t:"tr",fr:"Fais attention !",a:["¡Ten cuidado!"],why:"Faire attention = tener cuidado ; impératif irrégulier : ten."},
 {th:"Home",t:"tr",fr:"Ferme la fenêtre, s'il te plaît.",a:["Cierra la ventana, por favor.","Por favor, cierra la ventana."],why:"Cerrar diphtongue aussi à l'impératif : cierra."},
 {th:"Family",t:"gap",s:"Niños, no ___ en el sofá.",a:["saltéis","salten"],h:"saltar, vosotros",fr:"Les enfants, ne sautez pas sur le canapé.",why:"Négatif = subjonctif : vosotros → saltéis."},
 {th:"Work",t:"gap",s:"___ este correo a Ana, por favor.",a:["Envía"],h:"enviar, tú",fr:"Envoie ce courriel à Ana, s'il te plaît.",why:"Tú affirmatif : envía, avec accent sur le í."},
 {th:"Travel",t:"gap",s:"No ___ el pasaporte.",a:["olvides"],h:"olvidar, tú",fr:"N'oublie pas ton passeport.",why:"No + subjonctif : -ar → -es, olvides."},
 {th:"Restaurant",t:"gap",s:"___ aquí, hay una mesa libre.",a:["Siéntate"],h:"sentarse, tú",fr:"Assieds-toi ici, il y a une table libre.",why:"Affirmatif : le pronom se colle à la fin, siéntate."},
 {th:"Weather",t:"qcm",s:"___ el abrigo, hace frío.",o:["Ponte","Póngate","Te pon"],a:0,fr:"Mets ton manteau, il fait froid.",why:"Ponerse : impératif irrégulier pon, pronom collé à la fin, ponte."},
 {th:"Shopping",t:"qcm",s:"No ___ eso, es muy caro.",o:["compra","compres","comprar"],a:1,fr:"N'achète pas ça, c'est très cher.",why:"Négatif : subjonctif, no compres."},
 {th:"Nature",t:"qcm",s:"No ___ las flores del parque.",o:["arrancas","arranques","arranca"],a:1,fr:"N'arrache pas les fleurs du parc.",why:"Négatif = subjonctif ; c devient qu devant e : arranques."}
]
});

Object.assign(P.boss, {
"A1":[
 {th:"Home",t:"tr",sk:["es_hay","es_ser_estar"],fr:"Il y a un parc près de chez moi et il est très grand.",a:["Hay un parque cerca de mi casa y es muy grande."],why:"Hay annonce le parc ; sa taille est une caractéristique : ser."},
 {th:"Food",t:"tr",sk:["es_gustar","es_plurales"],fr:"J'aime les tomates, mais je n'aime pas les oignons.",a:["Me gustan los tomates, pero no me gustan las cebollas.","A mí me gustan los tomates, pero no me gustan las cebollas."],why:"Gustan s'accorde avec les choses au pluriel, les deux fois."},
 {th:"Family",t:"tr",sk:["es_tener_ir","es_ser_estar"],fr:"Ma sœur a vingt ans et elle est étudiante.",a:["Mi hermana tiene veinte años y es estudiante.","Mi hermana tiene 20 años y es estudiante."],why:"L'âge avec tener ; une occupation durable avec ser."},
 {th:"Shopping",t:"tr",sk:["es_tener_ir","es_presente"],fr:"Le samedi, nous allons au marché et nous achetons des fruits.",a:["Los sábados vamos al mercado y compramos fruta.","Los sábados vamos al mercado y compramos frutas.","Los sábados nosotros vamos al mercado y compramos fruta."],why:"Habitude : los sábados ; a + el = al ; pas de partitif."},
 {th:"Health",t:"tr",sk:["es_tener_ir","es_ser_estar"],fr:"J'ai froid et je suis fatigué.",a:["Tengo frío y estoy cansado.","Tengo frío y estoy cansada.","Yo tengo frío y estoy cansado.","Yo tengo frío y estoy cansada."],why:"Avoir froid = tener frío ; la fatigue est un état : estar."},
 {th:"City",t:"tr",sk:["es_hay","es_articulos"],fr:"Où est la gare ? Il y a un plan ?",a:["¿Dónde está la estación? ¿Hay un mapa?","¿Dónde está la estación? ¿Hay un plano?"],why:"Situer la gare : estar ; annoncer un plan : hay. El mapa est masculin."},
 {th:"Climbing",t:"tr",sk:["es_gustar","es_presente"],fr:"Mon ami aime grimper et il grimpe tous les jours.",a:["A mi amigo le gusta escalar y escala todos los días.","A mi amigo le gusta escalar y escala cada día."],why:"A mi amigo le gusta + infinitif, puis présent él : escala."},
 {th:"Weather",t:"tr",sk:["es_presente","es_plurales"],fr:"En hiver, les jours sont courts et il pleut beaucoup.",a:["En invierno, los días son cortos y llueve mucho.","En invierno los días son cortos y llueve mucho."],why:"Día est masculin pluriel : cortos ; llover diphtongue : llueve."},
 {th:"Restaurant",t:"gap",sk:["es_hay","es_plurales"],s:"¿Dónde ___ los servicios?",a:["están"],h:"hay / estar",fr:"Où sont les toilettes ?",why:"Chose précise et plurielle : estar, accordé en están."},
 {th:"Work",t:"gap",sk:["es_ser_estar","es_presente"],s:"Mi madre es enfermera y ___ de noche.",a:["trabaja"],h:"trabajar",fr:"Ma mère est infirmière et travaille de nuit.",why:"Métier avec ser, puis présent él : trabaja."},
 {th:"Nature",t:"gap",sk:["es_articulos","es_ser_estar"],s:"___ agua del río está muy fría.",a:["El"],h:"el / la",fr:"L'eau de la rivière est très froide.",why:"Agua est féminin (fría) mais prend el devant le a tonique."},
 {th:"Home",t:"gap",sk:["es_gustar","es_plurales"],s:"A mis padres les ___ las casas antiguas.",a:["gustan"],fr:"Mes parents aiment les maisons anciennes.",why:"Le verbe s'accorde avec las casas : gustan."},
 {th:"Family",t:"gap",sk:["es_tener_ir","es_plurales"],s:"Mis hermanos ___ dos perros.",a:["tienen"],h:"tener",fr:"Mes frères ont deux chiens.",why:"Tener, ellos : tienen, avec diphtongue."},
 {th:"Shopping",t:"gap",sk:["es_hay","es_plurales"],s:"En el mercado ___ muchas flores.",a:["hay"],h:"hay / están",fr:"Au marché, il y a beaucoup de fleurs.",why:"Hay reste invariable devant un pluriel indéfini."},
 {th:"Travel",t:"qcm",sk:["es_tener_ir","es_articulos"],s:"Mañana vamos ___ aeropuerto en taxi.",o:["a el","al","en el"],a:1,fr:"Demain, nous allons à l'aéroport en taxi.",why:"Direction avec ir : a ; a + el se contracte toujours en al."},
 {th:"Health",t:"qcm",sk:["es_gustar","es_ser_estar"],s:"A mi hijo no le gusta el médico porque ___ muy serio.",o:["está","es","hay"],a:1,fr:"Mon fils n'aime pas le médecin parce qu'il est très sérieux.",why:"Le caractère d'une personne : ser."},
 {th:"Food",t:"qcm",sk:["es_presente","es_gustar"],s:"Ana y yo ___ mucho pescado porque nos gusta.",o:["comen","comemos","come"],a:1,fr:"Ana et moi mangeons beaucoup de poisson parce que nous l'aimons.",why:"Ana y yo = nosotros : comemos."},
 {th:"City",t:"qcm",sk:["es_hay","es_ser_estar"],s:"En mi barrio ___ dos museos, pero están cerrados.",o:["están","hay","son"],a:1,fr:"Dans mon quartier, il y a deux musées, mais ils sont fermés.",why:"Existence (dos museos) : hay ; leur état ensuite : están."}
],
"A2":[
 {th:"Travel",t:"tr",sk:["es_imperfecto","es_indefinido"],fr:"Avant, nous allions à la plage, mais cette année, nous sommes allés à la montagne.",a:["Antes íbamos a la playa, pero este año fuimos a la montaña.","Antes íbamos a la playa, pero este año hemos ido a la montaña."],why:"Habitude ancienne : íbamos ; voyage précis de cette année : fuimos."},
 {th:"Food",t:"tr",sk:["es_ir_a","es_pronombres_cd"],fr:"Le gâteau ? Je vais le faire ce soir.",a:["¿El pastel? Voy a hacerlo esta noche.","¿El pastel? Lo voy a hacer esta noche.","¿La tarta? Voy a hacerla esta noche.","¿La tarta? La voy a hacer esta noche.","¿El pastel? Esta noche voy a hacerlo.","¿El pastel? Esta noche lo voy a hacer."],why:"Voy a + infinitif ; le pronom se colle à l'infinitif ou se met avant voy."},
 {th:"Family",t:"tr",sk:["es_imperfecto","es_comparativos"],fr:"Quand il était jeune, mon père était plus mince que moi.",a:["Cuando era joven, mi padre era más delgado que yo.","De joven, mi padre era más delgado que yo."],why:"Description passée : era ; comparaison : más … que yo."},
 {th:"Health",t:"tr",sk:["es_reflexivos","es_indefinido"],fr:"Hier, je me suis couché à minuit.",a:["Ayer me acosté a medianoche.","Ayer me acosté a las doce.","Anoche me acosté a medianoche.","Ayer yo me acosté a medianoche."],why:"Acostarse au passé ponctuel : me acosté, pronom avant le verbe."},
 {th:"Work",t:"tr",sk:["es_gerundio","es_pronombres_cd"],fr:"Le courriel ? Je suis en train de l'écrire.",a:["¿El correo? Lo estoy escribiendo.","¿El correo? Estoy escribiéndolo.","¿El email? Lo estoy escribiendo.","¿El email? Estoy escribiéndolo.","¿El mensaje? Lo estoy escribiendo.","¿El mensaje? Estoy escribiéndolo."],why:"Lo avant estar, ou collé au gérondif avec un accent : escribiéndolo."},
 {th:"Climbing",t:"tr",sk:["es_indefinido","es_comparativos"],fr:"Samedi, nous avons fait la voie la plus difficile de la salle.",a:["El sábado hicimos la vía más difícil del rocódromo.","El sábado hicimos la vía más difícil de la sala.","El sábado escalamos la vía más difícil del rocódromo."],why:"Hacer irrégulier : hicimos ; superlatif sans second article : la vía más difícil."},
 {th:"Home",t:"tr",sk:["es_reflexivos","es_ir_a"],fr:"Demain, je vais me lever tôt.",a:["Mañana voy a levantarme temprano.","Mañana me voy a levantar temprano.","Mañana voy a levantarme pronto.","Mañana me voy a levantar pronto."],why:"Voy a + infinitif ; me se colle à levantar ou passe avant voy."},
 {th:"Weather",t:"tr",sk:["es_imperfecto","es_indefinido"],fr:"Il faisait froid, mais nous sommes sortis.",a:["Hacía frío, pero salimos.","Hacía frío, pero nosotros salimos."],why:"Le froid est le décor (hacía) ; la sortie est l'action (salimos)."},
 {th:"City",t:"gap",sk:["es_gerundio","es_reflexivos"],s:"Nos estamos ___ en esta ciudad.",a:["perdiendo"],h:"perderse",fr:"Nous sommes en train de nous perdre dans cette ville.",why:"Estar + gérondif ; le pronom nos peut se placer avant estar."},
 {th:"Shopping",t:"gap",sk:["es_pronombres_cd","es_indefinido"],s:"¿Las gafas? ___ compré en esa tienda.",a:["Las"],fr:"Les lunettes ? Je les ai achetées dans ce magasin.",why:"Las gafas, féminin pluriel → las, avant le verbe au passé."},
 {th:"Restaurant",t:"gap",sk:["es_ir_a","es_pronombres_cd"],s:"¿La paella? ___ vamos a pedir para dos.",a:["La"],fr:"La paella ? Nous allons la commander pour deux.",why:"Le pronom peut précéder ir a + infinitif : la vamos a pedir."},
 {th:"Nature",t:"gap",sk:["es_comparativos","es_imperfecto"],s:"Antes el río estaba ___ limpio que ahora.",a:["más"],h:"plus",fr:"Avant, la rivière était plus propre que maintenant.",why:"Plus … que = más … que, dans une description au passé."},
 {th:"Family",t:"gap",sk:["es_indefinido","es_comparativos"],s:"Ayer mi abuela ___ noventa años: es la mayor de la familia.",a:["cumplió"],h:"cumplir",fr:"Hier, ma grand-mère a eu quatre-vingt-dix ans : c'est la plus âgée de la famille.",why:"Avoir (un anniversaire) = cumplir ; ayer → indefinido, cumplió."},
 {th:"Travel",t:"gap",sk:["es_ir_a","es_reflexivos"],s:"Esta noche ___ a quedar en un hotel.",a:["nos vamos"],h:"ir, nosotros + pronom",fr:"Ce soir, nous allons loger à l'hôtel.",why:"Quedarse + ir a : le pronom nos passe avant vamos."},
 {th:"Health",t:"qcm",sk:["es_imperfecto","es_reflexivos"],s:"De niño, yo siempre ___ resfriaba en invierno.",o:["se","me","te"],a:1,fr:"Enfant, je m'enrhumais toujours en hiver.",why:"Resfriarse avec yo → me ; habitude passée à l'imperfecto."},
 {th:"Work",t:"qcm",sk:["es_gerundio","es_pronombres_cd"],s:"¿El informe? Estoy ___ ahora.",o:["lo revisando","revisándolo","revisando lo"],a:1,fr:"Le rapport ? Je suis en train de le relire.",why:"Après le gérondif, le pronom s'y colle : revisándolo."},
 {th:"Food",t:"qcm",sk:["es_comparativos","es_indefinido"],s:"Ayer la paella me salió ___ que la última vez.",o:["más buena","mejor","más bien"],a:1,fr:"Hier, ma paella était meilleure que la dernière fois.",why:"Meilleur = mejor, comparatif irrégulier."},
 {th:"Weather",t:"qcm",sk:["es_ir_a","es_comparativos"],s:"Mañana va ___ hacer menos calor que hoy.",o:["de","a","por"],a:1,fr:"Demain, il va faire moins chaud qu'aujourd'hui.",why:"Ir a + infinitif : le a est obligatoire."}
],
"B1":[
 {th:"Travel",t:"tr",sk:["es_perfecto","es_indef_imperf"],fr:"Cette année, je suis allé deux fois en Espagne ; la première fois, il pleuvait.",a:["Este año he ido dos veces a España; la primera vez llovía.","Este año he estado dos veces en España; la primera vez llovía.","Este año he ido a España dos veces; la primera vez llovía.","Este año he estado en España dos veces; la primera vez llovía.","Este año fui dos veces a España; la primera vez llovía.","Este año he ido dos veces a España; la primera vez estaba lloviendo."],why:"Este año non fini : perfecto ; la pluie est le décor : llovía."},
 {th:"Health",t:"tr",sk:["es_subj_deseo","es_condicional"],fr:"Le médecin veut que je fasse du sport ; il dit que ça m'aiderait.",a:["El médico quiere que haga deporte; dice que me ayudaría.","El médico quiere que haga deporte y dice que me ayudaría.","La médica quiere que haga deporte; dice que me ayudaría."],why:"Querer que + subjonctif (haga) ; une hypothèse : conditionnel, ayudaría."},
 {th:"Work",t:"tr",sk:["es_futuro","es_por_para"],fr:"Je finirai le projet pour vendredi.",a:["Terminaré el proyecto para el viernes.","Acabaré el proyecto para el viernes.","Tendré el proyecto terminado para el viernes."],why:"Futur en -é ; une échéance se dit avec para."},
 {th:"Family",t:"tr",sk:["es_imperativo","es_subj_deseo"],fr:"Appelle ta grand-mère, elle veut que tu lui rendes visite.",a:["Llama a tu abuela, quiere que la visites.","Llama a tu abuela, quiere que vayas a verla.","Llama a tu abuela, quiere que la vayas a ver."],why:"Impératif tú : llama ; querer que + subjonctif. Visitar prend un COD : la."},
 {th:"Nature",t:"tr",sk:["es_condicional","es_por_para"],fr:"J'aimerais monter par ce chemin pour voir la cascade.",a:["Me gustaría subir por este camino para ver la cascada.","Me gustaría ir por este camino para ver la cascada."],why:"Passage = por ; but = para ; souhait poli : me gustaría."},
 {th:"Restaurant",t:"tr",sk:["es_perfecto","es_imperativo"],fr:"Tu n'as pas encore goûté le dessert ? Goûte-le !",a:["¿Todavía no has probado el postre? ¡Pruébalo!","¿Aún no has probado el postre? ¡Pruébalo!","¿No has probado todavía el postre? ¡Pruébalo!","¿No has probado el postre todavía? ¡Pruébalo!","¿No has probado aún el postre? ¡Pruébalo!"],why:"Todavía no + perfecto ; impératif affirmatif : pronom collé et accent, pruébalo."},
 {th:"Weather",t:"tr",sk:["es_subj_deseo","es_futuro"],fr:"Pourvu qu'il fasse beau : nous irons à la plage.",a:["¡Ojalá haga buen tiempo! Iremos a la playa.","¡Ojalá haga sol! Iremos a la playa.","Ojalá haga buen tiempo: iremos a la playa.","Ojalá haga sol: iremos a la playa."],why:"Ojalá + subjonctif : haga ; projet certain ensuite : futur, iremos."},
 {th:"Climbing",t:"tr",sk:["es_indef_imperf","es_imperativo"],fr:"Je grimpais quand j'ai glissé. Ne fais pas comme moi !",a:["Escalaba cuando me resbalé. ¡No hagas como yo!","Estaba escalando cuando me resbalé. ¡No hagas como yo!","Escalaba cuando resbalé. ¡No hagas como yo!","Estaba escalando cuando resbalé. ¡No hagas como yo!","Escalaba cuando me resbalé. ¡No hagas lo mismo que yo!"],why:"Action en cours + événement ; impératif négatif = subjonctif : no hagas."},
 {th:"City",t:"gap",sk:["es_subj_deseo","es_por_para"],s:"Te dejo el mapa para que no te ___.",a:["pierdas"],h:"perderse, tú",fr:"Je te laisse le plan pour que tu ne te perdes pas.",why:"Para que + subjonctif ; perder diphtongue : pierdas."},
 {th:"Shopping",t:"gap",sk:["es_por_para","es_perfecto"],s:"Hoy he comprado este abrigo ___ cincuenta euros.",a:["por"],h:"por / para",fr:"Aujourd'hui, j'ai acheté ce manteau pour cinquante euros.",why:"Un prix, un échange = por."},
 {th:"Home",t:"gap",sk:["es_imperativo","es_futuro"],s:"Ayúdame y ___ antes.",a:["terminaremos","acabaremos"],h:"terminar, nosotros",fr:"Aide-moi et nous finirons plus tôt.",why:"Impératif + conséquence future : infinitif + -emos."},
 {th:"Food",t:"gap",sk:["es_imperativo","es_subj_deseo"],s:"Pon la mesa: mamá quiere que ___ antes de las dos.",a:["comamos"],h:"comer, nosotros",fr:"Mets la table : maman veut que nous mangions avant deux heures.",why:"Querer que + autre sujet : subjonctif, -er → -amos."},
 {th:"Work",t:"gap",sk:["es_perfecto","es_indef_imperf"],s:"Esta mañana ___ llegado tarde porque había mucho tráfico.",a:["he"],fr:"Ce matin, je suis arrivé en retard parce qu'il y avait beaucoup de circulation.",why:"Esta mañana : perfecto avec haber, jamais « soy llegado »."},
 {th:"Family",t:"gap",sk:["es_imperativo","es_por_para"],s:"No te ___, lo hago por ti.",a:["preocupes"],h:"preocuparse, tú",fr:"Ne t'inquiète pas, je le fais pour toi.",why:"Négatif = subjonctif, pronom devant : no te preocupes. Por ti = à ta place, pour toi."},
 {th:"Travel",t:"qcm",sk:["es_por_para","es_futuro"],s:"Mañana saldremos ___ Granada muy temprano.",o:["por","para","en"],a:1,fr:"Demain, nous partirons pour Grenade très tôt.",why:"La destination = para ; por Granada voudrait dire « en passant par »."},
 {th:"Nature",t:"qcm",sk:["es_indef_imperf","es_perfecto"],s:"¡Qué día! ___ el sol cuando salimos, pero luego llovió.",o:["Brilló","Brillaba","Ha brillado"],a:1,fr:"Quelle journée ! Le soleil brillait quand nous sommes partis, mais ensuite il a plu.",why:"Le soleil est le décor de la sortie : imperfecto."},
 {th:"Health",t:"qcm",sk:["es_imperativo","es_subj_deseo"],s:"___ este jarabe para que se te pase la tos.",o:["Tomas","Toma","Tomes"],a:1,fr:"Prends ce sirop pour que ta toux passe.",why:"Ordre affirmatif à tú : toma ; tomes servirait à la négative."},
 {th:"Home",t:"qcm",sk:["es_condicional","es_futuro"],s:"Yo que tú, no ___ la calefacción: mañana hará calor.",o:["pondré","pondría","ponería"],a:1,fr:"À ta place, je ne mettrais pas le chauffage : demain, il fera chaud.",why:"Yo que tú → conditionnel, radical irrégulier pondr-."}
]
});

Object.assign(P.levels, {
"A1":{can:["Tu sais te présenter : ton nom, ton âge, ta ville et ton métier.","Tu sais écrire un message simple pour dire ce que tu aimes et ce que tu fais.","Tu sais comprendre des panneaux, un menu et des phrases lentes sur des sujets familiers.","Tu sais poser et répondre à des questions simples : où est…, il y a…, combien…"],ex:"Me llamo Léa, tengo treinta años y vivo en Lyon.",fr:"Je m'appelle Léa, j'ai trente ans et j'habite à Lyon.",hours:100},
"A2":{can:["Tu sais raconter ce que tu as fait le week-end ou pendant tes vacances.","Tu sais écrire un court message pour inviter, remercier ou t'excuser.","Tu sais comprendre l'essentiel d'une annonce ou d'un message court et clair.","Tu sais faire des achats, commander au restaurant et demander ton chemin."],ex:"El sábado fuimos a la playa y comimos en un restaurante muy bueno.",fr:"Samedi, nous sommes allés à la plage et nous avons mangé dans un très bon restaurant.",hours:200},
"B1":{can:["Tu sais raconter une expérience ou un événement et donner ton avis en quelques phrases.","Tu sais écrire un e-mail simple et cohérent pour raconter, demander ou proposer.","Tu sais comprendre les points principaux d'une conversation ou d'une émission sur un sujet familier.","Tu sais te débrouiller en voyage et participer sans préparation à une conversation courante."],ex:"Cuando vivía en Sevilla, conocí a gente que todavía es muy importante para mí.",fr:"Quand j'habitais à Séville, j'ai rencontré des gens qui comptent encore beaucoup pour moi.",hours:400}
});
})();

// Spanish situations added on 2026-11-23: 8 situations, their words (by level) and the exercises of their tests.
(function(){
const P = window.PACKS && window.PACKS.es; if(!P) return;
P.bank = P.bank || {};

P.cours.push(
 {id:"intro", theme:"Intro", t:"Se présenter et faire connaissance", situ:"Dire son nom, d'où on vient, ce qu'on fait et ce qu'on aime.",
  ph:[["Me llamo Julie, ¿y tú?","Je m'appelle Julie, et toi ?"],["Soy de Lyon, pero vivo en Madrid.","Je suis de Lyon, mais je vis à Madrid."],["¿A qué te dedicas?","Qu'est-ce que tu fais dans la vie ?"],["Trabajo de enfermera.","Je travaille comme infirmière."],["En mi tiempo libre, toco la guitarra.","Pendant mon temps libre, je joue de la guitare."],["Encantado de conocerte.","Ravi de faire ta connaissance."],["¿Cuánto tiempo llevas aquí?","Ça fait combien de temps que tu es ici ?"]],
  dia:[["Lucía","Hola, soy Lucía. ¿Eres nuevo en el grupo?"],["Tú","Sí, me llamo Hugo. Soy francés, de Burdeos."],["Lucía","¡Encantada! ¿Y a qué te dedicas?"],["Tú","Soy ingeniero. ¿Y tú?"],["Lucía","Soy profesora de música. ¿Qué haces en tu tiempo libre?"],["Tú","Me encanta correr y leer novelas."]],
  g:{t:"ser pour l'identité, estar pour l'état", r:"Pour se présenter, ser donne ce qu'on est durablement : le nom, l'origine, la nationalité, le métier (sans article : soy médico). Estar dit où l'on est et comment on va : estoy en Madrid, estoy muy bien. La situation de famille se dit le plus souvent avec estar : estoy casado.", ex:["Soy francesa, de Nantes.","Soy diseñador gráfico.","Estoy en Sevilla por trabajo."], skill:"es_ser_estar"},
  tr:[["Soy un profesor","Soy profesor","Après ser, le métier se dit sans article, sauf s'il est qualifié : es un profesor excelente."],["Estoy francés","Soy francés","La nationalité fait partie de l'identité : ser."],["Soy en Madrid","Estoy en Madrid","Le lieu où l'on se trouve se dit avec estar ; soy de Madrid indique l'origine."]],
  task:[["Je suis française et je travaille comme architecte.","Soy francesa y trabajo de arquitecta."],["Qu'est-ce que tu fais pendant ton temps libre ?","¿Qué haces en tu tiempo libre?"],["Je vis à Valence depuis deux ans.","Vivo en Valencia desde hace dos años."]]},
 {id:"hotel", theme:"Hotel", t:"À l'hôtel", situ:"Réserver, arriver, signaler un problème dans la chambre, régler la note.",
  ph:[["Tengo una reserva a nombre de Martin.","J'ai une réservation au nom de Martin."],["¿El desayuno está incluido?","Le petit-déjeuner est compris ?"],["¿A qué hora hay que dejar la habitación?","À quelle heure faut-il libérer la chambre ?"],["El aire acondicionado no funciona.","La climatisation ne marche pas."],["¿Me puede cambiar de habitación?","Vous pouvez me changer de chambre ?"],["¿Puedo dejar las maletas en consigna?","Je peux laisser mes valises à la bagagerie ?"],["¿Me prepara la factura, por favor?","Vous pouvez me préparer la facture, s'il vous plaît ?"]],
  dia:[["Recepcionista","Buenas tardes. ¿En qué puedo ayudarle?"],["Tú","Hola, tengo una reserva a nombre de Dubois, para tres noches."],["Recepcionista","Sí, una habitación doble. ¿Me deja su pasaporte?"],["Tú","Aquí tiene. ¿A qué hora es el desayuno?"],["Recepcionista","De siete a diez, en la primera planta. Aquí tiene su tarjeta."],["Tú","Gracias. ¿Hay wifi en la habitación?"],["Recepcionista","Sí, la contraseña está en el sobre."]],
  g:{t:"Demander poliment : podría, quería", r:"À la réception, le conditionnel (¿podría…?) et l'imparfait de politesse (quería…) adoucissent une demande. ¿Me puede…? au présent reste poli avec usted. Quiero sonne exigeant.", ex:["¿Podría despertarme a las siete?","Quería una habitación con vistas al mar.","¿Me podría traer otra toalla?"], skill:"es_condicional"},
  tr:[["La habitación es sucia","La habitación está sucia","Sale ou propre : c'est l'état de la chambre en ce moment, donc estar."],["Quiero una cámara doble","Quiero una habitación doble","Une chambre d'hôtel = la habitación ; la cámara est un appareil photo."],["¿Me puede despertar en las siete?","¿Me puede despertar a las siete?","L'heure se dit avec a : a las siete."]],
  task:[["Je voudrais une chambre pour deux nuits.","Quería una habitación para dos noches."],["Il n'y a pas de serviettes dans la salle de bains.","No hay toallas en el baño."],["Vous pourriez me réveiller à sept heures ?","¿Podría despertarme a las siete?"]]},
 {id:"party", theme:"Party", t:"Sortir entre amis", situ:"Proposer une sortie, accepter ou refuser, se retrouver dans un bar ou à une soirée.",
  ph:[["¿Quedamos el sábado?","On se voit samedi ?"],["¿Te apetece tomar algo?","Ça te dit d'aller boire un verre ?"],["Me encantaría, pero no puedo.","J'adorerais, mais je ne peux pas."],["¿A qué hora quedamos?","On se retrouve à quelle heure ?"],["Esta ronda la pago yo.","Cette tournée, c'est moi qui la paie."],["Lo pasamos genial anoche.","On s'est super bien amusés hier soir."],["Me voy ya, que mañana madrugo.","J'y vais, je me lève tôt demain."]],
  dia:[["Marta","¿Qué haces el viernes? Hay una fiesta en casa de Pablo."],["Tú","¡Qué guay! ¿A qué hora empieza?"],["Marta","Sobre las diez. ¿Te apetece venir?"],["Tú","Sí, me apetece mucho. ¿Llevo algo?"],["Marta","Trae algo de beber, si quieres."],["Tú","Vale. ¿Quedamos antes en la boca de metro?"]],
  g:{t:"ir a + infinitif pour proposer et prévoir", r:"Pour parler de ce qu'on va faire ce soir ou ce week-end, ir a + infinitif est le plus naturel. Vamos a… sert aussi à proposer : ¡vamos a bailar! veut dire « allons danser ! ».", ex:["Vamos a salir esta noche.","¿Vas a venir a la fiesta?","Voy a quedarme en casa."], skill:"es_ir_a"},
  tr:[["Me he divertido mucho a la fiesta","Me he divertido mucho en la fiesta","On est à une fête, pas en train d'y aller : en, pas a."],["¿Quieres salir conmigo? (entre amis)","¿Quedamos?","Salir con alguien veut souvent dire sortir ensemble, être en couple. Entre amis, on dit quedar."],["Ayer fui en una fiesta","Ayer fui a una fiesta","Aller à un endroit = ir a, jamais ir en."]],
  task:[["On se voit vendredi soir ?","¿Quedamos el viernes por la noche?"],["Je suis désolé, je ne peux pas ce soir.","Lo siento, esta noche no puedo."],["On va danser après le dîner.","Vamos a bailar después de cenar."]]},
 {id:"interview", theme:"Interview", t:"L'entretien d'embauche", situ:"Parler de son parcours, de ses points forts et poser ses questions.",
  ph:[["Le agradezco que me haya recibido.","Je vous remercie de m'avoir reçu."],["He trabajado cinco años en el sector.","J'ai travaillé cinq ans dans le secteur."],["Mi punto fuerte es la organización.","Mon point fort, c'est l'organisation."],["Trabajo bien en equipo.","Je travaille bien en équipe."],["¿Cuáles serían mis funciones?","Quelles seraient mes missions ?"],["¿Cuándo podría incorporarme?","Quand est-ce que je pourrais commencer ?"],["Estoy acostumbrado a trabajar bajo presión.","J'ai l'habitude de travailler sous pression."]],
  dia:[["Entrevistadora","Háblenos un poco de su experiencia."],["Tú","He trabajado cuatro años como contable en una empresa de transporte."],["Entrevistadora","¿Y por qué quiere cambiar de trabajo?"],["Tú","Busco un puesto con más responsabilidades."],["Entrevistadora","¿Cuál diría que es su mayor defecto?"],["Tú","A veces soy demasiado perfeccionista, pero estoy aprendiendo a delegar."],["Entrevistadora","Muy bien. ¿Tiene alguna pregunta?"],["Tú","Sí, ¿cómo es un día normal en este puesto?"]],
  g:{t:"Le passé composé pour son parcours", r:"Pour une expérience sans date précise, qui compte encore aujourd'hui, on utilise le pretérito perfecto : he trabajado, he dirigido. Avec une date ou une période close (en 2019, de 2015 a 2018), on passe à l'indefinido : trabajé allí tres años.", ex:["He dirigido un equipo de diez personas.","Nunca he trabajado en el extranjero.","En 2020 trabajé en Londres."], skill:"es_perfecto"},
  tr:[["Soy muy motivado","Estoy muy motivado","Motivé décrit un état d'esprit : estar motivado."],["He aplicado a este puesto","Me he presentado a este puesto","Postuler = presentarse a, solicitar ou, en Amérique latine, postular ; aplicar est un calque de l'anglais."],["Tengo una experiencia de tres años","Tengo tres años de experiencia","La durée se place directement devant de experiencia."]],
  task:[["J'ai travaillé trois ans dans une agence de communication.","Trabajé tres años en una agencia de comunicación."],["Je voudrais savoir quel est le salaire.","Quería saber cuál es el sueldo."],["Je suis disponible à partir de lundi.","Estoy disponible a partir del lunes."]]},
 {id:"admin", theme:"Admin", t:"Banque et démarches", situ:"Ouvrir un compte, remplir un formulaire, aller à un rendez-vous administratif.",
  ph:[["Quería abrir una cuenta.","Je voudrais ouvrir un compte."],["¿Qué documentos necesito?","De quels documents ai-je besoin ?"],["Tiene que pedir cita previa.","Vous devez prendre rendez-vous à l'avance."],["Rellene este formulario, por favor.","Remplissez ce formulaire, s'il vous plaît."],["Firme aquí y aquí.","Signez ici et ici."],["¿Me puede dar un justificante?","Vous pouvez me donner un justificatif ?"],["Me han bloqueado la tarjeta.","Ma carte a été bloquée."]],
  dia:[["Empleado","Buenos días, ¿tiene cita?"],["Tú","Sí, a las diez. Vengo a abrir una cuenta."],["Empleado","Muy bien. ¿Me enseña su pasaporte y su NIE?"],["Tú","Aquí tiene. ¿La cuenta tiene alguna comisión?"],["Empleado","No, si domicilia su nómina. Rellene este impreso y fírmelo abajo."],["Tú","De acuerdo. ¿Cuándo recibiré la tarjeta?"],["Empleado","Se la enviaremos a casa en una semana."]],
  g:{t:"L'impératif poli (usted)", r:"Au guichet, les consignes sont à l'impératif de usted, qui prend la forme du subjonctif présent : rellene, firme, espere. Le pronom se colle à la fin du verbe : fírmelo, rellénelo. À la forme négative, il repasse devant : no lo firme todavía.", ex:["Rellene este impreso.","Espere su turno, por favor.","Fírmelo aquí abajo."], skill:"es_imperativo"},
  tr:[["Quiero abrir un conto","Quiero abrir una cuenta","Un compte bancaire = la cuenta ; un conte = un cuento."],["Tengo un rendez-vous a las diez","Tengo cita a las diez","Un rendez-vous administratif ou médical = la cita."],["Quiero cobrar dinero en el cajero","Quiero sacar dinero del cajero","Retirer de l'argent = sacar dinero ; cobrar, c'est encaisser ou faire payer."]],
  task:[["Je voudrais prendre rendez-vous.","Quería pedir cita."],["Où est-ce que je dois signer ?","¿Dónde tengo que firmar?"],["J'ai perdu ma carte bancaire.","He perdido la tarjeta del banco."]]},
 {id:"tech", theme:"Tech", t:"Téléphone, ordi et internet", situ:"Expliquer un problème, se connecter au wifi, retrouver un mot de passe, installer une appli.",
  ph:[["¿Cuál es la contraseña del wifi?","C'est quoi le mot de passe du wifi ?"],["Me he quedado sin batería.","Je n'ai plus de batterie."],["El ordenador va muy lento.","L'ordinateur est très lent."],["No me llega el código de verificación.","Je ne reçois pas le code de vérification."],["¿Has probado a reiniciarlo?","Tu as essayé de le redémarrer ?"],["Se me ha olvidado la contraseña.","J'ai oublié mon mot de passe."],["Descárgate la aplicación.","Télécharge l'application."]],
  dia:[["A","No puedo conectarme a internet."],["B","¿Estás conectado al wifi de casa?"],["A","Sí, pero me dice que la contraseña es incorrecta."],["B","Ojo, distingue entre mayúsculas y minúsculas."],["A","Ah, vale. Ya funciona. ¿Y por qué va tan lento el portátil?"],["B","Tienes demasiadas pestañas abiertas. Ciérralas y reinícialo."]],
  g:{t:"Le passé composé pour un problème qui vient d'arriver", r:"Pour décrire une panne récente dont on voit encore l'effet, l'espagnol d'Espagne emploie le pretérito perfecto : se ha bloqueado, he perdido. Avec se me…, l'action semble arriver toute seule : se me ha roto la pantalla (mon écran s'est cassé). En Amérique latine, on dira plutôt se me rompió.", ex:["Se ha caído la conexión.","He borrado el archivo sin querer.","Se me ha roto la pantalla."], skill:"es_perfecto"},
  tr:[["Mi ordinador no funciona","Mi ordenador no funciona","Ordinateur = el ordenador en Espagne, la computadora en Amérique latine."],["He olvidado mi palabra de pasaje","He olvidado mi contraseña","Mot de passe = la contraseña (ou la clave)."],["Voy a telecargar la aplicación","Voy a descargar la aplicación","Télécharger = descargar, ou bajar dans la langue courante."]],
  task:[["Je n'arrive pas à me connecter.","No consigo conectarme."],["Mon portable est à plat.","Me he quedado sin batería."],["Tu peux m'envoyer le lien ?","¿Me puedes mandar el enlace?"]]},
 {id:"emergency", theme:"Emergency", t:"Urgences", situ:"Signaler une perte ou un vol, parler à la police, réagir à un accident, appeler à l'aide.",
  ph:[["¡Socorro!","Au secours !"],["Llame a una ambulancia, por favor.","Appelez une ambulance, s'il vous plaît."],["Me han robado la cartera.","On m'a volé mon portefeuille."],["He perdido el pasaporte.","J'ai perdu mon passeport."],["Quiero poner una denuncia.","Je veux porter plainte."],["Ha habido un accidente.","Il y a eu un accident."],["¿Dónde está la comisaría más cercana?","Où est le commissariat le plus proche ?"]],
  dia:[["Policía","Buenas tardes, ¿qué le ha pasado?"],["Tú","Me han robado el bolso en el metro."],["Policía","¿Cuándo ha ocurrido?"],["Tú","Hace una hora, en la línea 3. Había mucha gente."],["Policía","¿Qué llevaba en el bolso?"],["Tú","La cartera, las llaves y el móvil."],["Policía","Rellene esta denuncia y le daremos una copia."]],
  g:{t:"Raconter ce qui s'est passé : indefinido et imperfecto", r:"Pour raconter un incident, l'indefinido (ou le perfecto, si ça vient d'arriver) donne les actions : me robaron, me caí. L'imperfecto plante le décor : había mucha gente, estaba en el metro. Le décor à l'imperfecto, l'événement à l'indefinido.", ex:["Estaba en el metro cuando me robaron la cartera.","Llovía y el coche patinó.","No vi nada porque miraba el móvil."], skill:"es_indef_imperf"},
  tr:[["Me han volado el móvil","Me han robado el móvil","Voler (dérober) = robar ; volar, c'est voler dans les airs."],["Quiero hacer una queja a la policía","Quiero poner una denuncia","Porter plainte à la police = poner una denuncia ; una queja est une réclamation."],["¡Al socorro!","¡Socorro!","Au secours ! = ¡Socorro! ou ¡Auxilio!, sans préposition."]],
  task:[["Appelez la police !","¡Llame a la policía!"],["On m'a volé mon sac.","Me han robado el bolso."],["Mon ami est blessé.","Mi amigo está herido."]]},
 {id:"culture", theme:"Culture", t:"Films, séries, livres et musique", situ:"Donner son avis, recommander, parler de ce qu'on regarde ou écoute.",
  ph:[["¿Has visto la última de Almodóvar?","Tu as vu le dernier Almodóvar ?"],["Te la recomiendo, está muy bien.","Je te le recommande, il est très bien."],["Estoy enganchadísimo a esta serie.","Je suis complètement accro à cette série."],["El final me decepcionó.","La fin m'a déçu."],["¿De qué va el libro?","De quoi parle le livre ?"],["Prefiero la versión original con subtítulos.","Je préfère la version originale sous-titrée."],["Está basada en una historia real.","C'est tiré d'une histoire vraie."]],
  dia:[["A","¿Qué estás viendo ahora?"],["B","Una serie argentina. Me tiene enganchadísima."],["A","¿De qué va?"],["B","De una familia que esconde un secreto. Los actores son buenísimos."],["A","¿Es mejor que la que me recomendaste el mes pasado?"],["B","Mucho mejor. Te va a encantar, ya verás."]],
  g:{t:"Donner son avis : me gusta, me encanta, me parece", r:"Pour réagir à une œuvre, gustar, encantar, interesar et parecer se construisent tous avec un pronom : me encanta este grupo, me parece aburrida. Le verbe s'accorde avec l'œuvre : me gustan sus novelas.", ex:["Me encantan las películas de terror.","Esa serie me parece sobrevalorada.","¿Te interesa la música clásica?"], skill:"es_gustar"},
  tr:[["Soy aburrido con esta película","Me aburro con esta película","Ser aburrido = être ennuyeux ; pour dire qu'on s'ennuie : aburrirse ou estar aburrido."],["Me gusta mucho los libros de Cortázar","Me gustan mucho los libros de Cortázar","Les livres sont au pluriel : gustan."],["Es una película muy emocionante (pour « émouvante »)","Es una película muy conmovedora","Emocionante veut dire palpitant ; émouvant se dit conmovedor ou emotivo."]],
  task:[["Je te recommande ce livre.","Te recomiendo este libro."],["La série m'a beaucoup plu.","La serie me ha gustado mucho."],["De quoi parle le film ?","¿De qué va la película?"]]}
);

P.words.Intro = [
 ["¿Cómo te llamas?","comment tu t'appelles ?","La question la plus courante ; avec usted : ¿cómo se llama?","A1"],
 ["encantado","enchanté","Une femme dit encantada. On peut aussi dire mucho gusto.","A1"],
 ["mucho gusto","enchanté","Un peu plus formel qu'encantado, très courant en Amérique latine.","A1"],
 ["la nacionalidad","nationalité","Se dit avec ser : soy de nacionalidad francesa, ou simplement soy francés.","A1"],
 ["¿De dónde eres?","d'où viens-tu ?","On répond avec ser de : soy de Burdeos.","A1"],
 ["el tiempo libre","temps libre","En mi tiempo libre… : pendant mon temps libre.","A1"],
 ["presentar","présenter","Te presento a Marta : je te présente Marta (a devant une personne).","A1"],
 ["¿Cuántos años tienes?","quel âge as-tu ?","L'âge se dit avec tener : tengo treinta años.","A1"],
 ["¿Qué tal?","ça va ?","La salutation la plus courante ; ¿qué tal el viaje? = comment s'est passé le voyage ?","A1"],
 ["saludar","saluer, dire bonjour","Saludar a alguien, avec a devant la personne.","A1"],
 ["el pasatiempo","passe-temps, loisir","On dit aussi la afición ou, familièrement, el hobby.","A2"],
 ["¿A qué te dedicas?","qu'est-ce que tu fais dans la vie ?","Plus naturel que ¿cuál es tu profesión?","A2"],
 ["extranjero","étranger","Vivir en el extranjero = vivre à l'étranger.","A2"],
 ["hacer amigos","se faire des amis","Avec hacer : me cuesta hacer amigos = j'ai du mal à me faire des amis.","A2"],
 ["tímido","timide","Le contraire : abierto ou extrovertido.","A2"],
 ["el segundo apellido","deuxième nom de famille","En Espagne, c'est le premier nom de famille de la mère.","A2"],
 ["el nombre de pila","prénom","Le prénom de baptême ; sur les formulaires, on lit simplement nombre.","A2"],
 ["dar dos besos","faire la bise","En Espagne, deux bises, en commençant par la joue droite ; en Amérique latine, souvent une seule.","A2"],
 ["conocerse","se rencontrer, faire connaissance","¿Dónde os conocisteis? = où vous êtes-vous rencontrés ?","A2"],
 ["la afición","passion, hobby","Tengo afición por la fotografía. Los aficionados = les amateurs, les supporters.","B1"],
 ["el estudiante de intercambio","étudiant en échange","On dit aussi tout simplement : estoy de Erasmus.","B1"],
 ["la lengua materna","langue maternelle","On dit aussi el idioma materno.","B1"],
 ["bilingüe","bilingue","Le ü se prononce : « bi-LIN-gwé ».","B1"],
 ["el ocio","les loisirs","Un mot très courant : la oferta de ocio de una ciudad.","B1"],
 ["caer bien","être sympathique à","Se construit comme gustar : Marta me cae muy bien.","B1"],
 ["extrovertido","extraverti, sociable","Le contraire : introvertido.","B1"],
 ["la presentación","présentation","Hacer las presentaciones = faire les présentations.","B1"],
 ["el desconocido","inconnu","No hables con desconocidos : ne parle pas aux inconnus.","B1"],
 ["tutear","tutoyer","¿Nos tuteamos? En Espagne, on tutoie très vite, même des inconnus.","B1"],
 ["la ciudad natal","ville natale","Mi ciudad natal es Lille.","B1"],
 ["estrechar la mano","serrer la main","On dit aussi dar la mano.","B1"],
 ["el recién llegado","nouveau venu","Recién + participe : quelqu'un qui vient d'arriver.","B1"],
 ["el carácter","caractère","L'accent tonique tombe au milieu : ca-RÁC-ter ; au pluriel, los caracteres.","B2"],
 ["romper el hielo","briser la glace","La même image qu'en français.","B2"],
 ["tratar de usted","vouvoyer","En Amérique latine, usted est bien plus fréquent qu'en Espagne.","B2"],
 ["el mote","surnom","On dit aussi el apodo ; en Amérique latine, el sobrenombre.","B2"],
 ["criarse","grandir, être élevé","Me crié en un pueblo de Bretaña : j'ai grandi dans un village de Bretagne.","B2"],
 ["el expatriado","expatrié","Familièrement, on dit aussi el expat.","B2"],
 ["tener don de gentes","avoir le sens du contact","Se dit de quelqu'un qui met tout le monde à l'aise.","C1"],
 ["caer gordo","être antipathique à","Familier, l'inverse de caer bien : ese tipo me cae gordo.","C1"],
 ["afincarse","s'installer durablement","Se afincó en Valencia hace años : il s'est établi à Valence.","C1"],
 ["echar raíces","s'enraciner, faire sa vie quelque part","Littéralement « jeter des racines » : he echado raíces en Sevilla.","C1"]
];

P.words.Hotel = [
 ["la habitación doble","chambre double","Pour un grand lit, on précise : con cama de matrimonio.","A1"],
 ["la habitación individual","chambre simple","En Amérique latine, on dit aussi habitación sencilla.","A1"],
 ["el recepcionista","réceptionniste","Une femme : la recepcionista.","A1"],
 ["la habitación con baño","chambre avec salle de bains","Le contraire : con baño compartido.","A1"],
 ["el champú","shampoing","Avec un accent sur le u : « tcham-POU ».","A1"],
 ["la planta baja","rez-de-chaussée","La primera planta = le premier étage.","A2"],
 ["la caja fuerte","coffre-fort","Fuerte = solide : il y en a souvent un dans l'armoire.","A2"],
 ["el minibar","minibar","Tout ce qu'on y prend s'ajoute à la note.","A2"],
 ["dejar la habitación","libérer la chambre","Hay que dejar la habitación antes de las doce.","A2"],
 ["completo","complet","El hotel está completo : avec estar, car c'est un état.","A2"],
 ["las vistas","la vue","Con vistas al mar = avec vue sur la mer ; toujours au pluriel en Espagne.","A2"],
 ["de cinco estrellas","cinq étoiles","Un hotel de cinco estrellas ; una estrella = une étoile.","A2"],
 ["la tarjeta de la habitación","carte de la chambre","Elle remplace souvent la clé ; il faut parfois l'insérer pour avoir la lumière.","A2"],
 ["la cama de matrimonio","grand lit","Un lit double ; deux lits séparés = dos camas.","A2"],
 ["el secador de pelo","sèche-cheveux","Secar = sécher ; on dit souvent el secador tout court.","A2"],
 ["las sábanas","draps","Cambiar las sábanas = changer les draps.","A2"],
 ["la limpieza","ménage, propreté","El servicio de limpieza passe le matin.","A2"],
 ["el desayuno bufé","petit-déjeuner buffet","On écrit aussi bufet ou buffet.","A2"],
 ["la percha","cintre","Il en manque toujours dans les armoires d'hôtel.","A2"],
 ["ruidoso","bruyant","El ruido = le bruit : una habitación muy ruidosa.","A2"],
 ["la pensión","pension, petit hôtel","Media pensión = demi-pension ; pensión completa = pension complète.","B1"],
 ["el botones","groom, bagagiste","Invariable : el botones, los botones.","B1"],
 ["el servicio de habitaciones","service d'étage","Pour se faire monter un repas dans la chambre.","B1"],
 ["alojarse","loger, séjourner","Me alojo en un hotel del centro.","B1"],
 ["la queja","plainte, réclamation","Poner una queja = faire une réclamation.","B1"],
 ["la moqueta","moquette","Pas de piège : c'est bien la moquette.","B1"],
 ["el cartel de no molestar","panneau « Ne pas déranger »","On l'accroche à la poignée de la porte.","B1"],
 ["la ropa de cama","linge de lit","Draps, taies et housse de couette.","B1"],
 ["la camarera de piso","femme de chambre","Celle qui fait le ménage des chambres.","B1"],
 ["el servicio de despertador","service de réveil","On demande à la réception d'être réveillé par téléphone.","B1"],
 ["anular la reserva","annuler la réservation","On dit aussi cancelar la reserva.","B1"],
 ["el vecino de habitación","voisin de chambre","Mi vecino de habitación ronca : mon voisin de chambre ronfle.","B1"],
 ["la cama supletoria","lit d'appoint","Pour un enfant ou une troisième personne.","B2"],
 ["la tasa turística","taxe de séjour","Elle se paie en plus, souvent à l'arrivée.","B2"],
 ["el huésped","client (d'un hôtel)","Celui qui loge : los huéspedes del hotel.","B2"],
 ["gotear","goutter, fuir","El grifo gotea : le robinet goutte.","B2"],
 ["atascado","bouché","El lavabo está atascado : le lavabo est bouché.","B2"],
 ["el parador","parador","Un hôtel public installé dans un château ou un monastère historique.","B2"],
 ["el conserje","concierge, portier","Celui qui renseigne les clients à l'accueil.","B2"],
 ["el registro de entrada","enregistrement à l'arrivée","Le check-in ; à la sortie, on parle du check-out.","B2"],
 ["la sobreventa","surréservation","On dit aussi el overbooking : plus de réservations que de chambres.","C1"],
 ["estar de bote en bote","être plein à craquer","Familier : en agosto los hoteles están de bote en bote.","C1"],
 ["a pie de playa","les pieds dans l'eau","Un hôtel juste au bord de la plage.","C1"],
 ["el desperfecto","dégât","Un petit dommage dans la chambre : cualquier desperfecto se cobrará.","C1"]
];

P.words.Party = [
 ["la discoteca","boîte de nuit","On dit aussi la disco ; au Mexique, el antro ; en Argentine, el boliche.","A1"],
 ["¡Salud!","santé !","Ce qu'on dit en trinquant, et aussi quand quelqu'un éternue.","A1"],
 ["divertido","amusant, drôle","Pas « diverti » : una fiesta muy divertida.","A1"],
 ["la invitación","invitation","Invitar a alguien a una fiesta.","A1"],
 ["la fiesta de cumpleaños","fête d'anniversaire","On dit aussi el cumple, familier.","A1"],
 ["tomar algo","boire un verre","¿Tomamos algo? : on va boire un verre ?","A1"],
 ["el concierto","concert","Ir a un concierto ; en directo = en live.","A1"],
 ["¿Te apetece?","ça te dit ?","Apetecer se construit comme gustar : me apetece una cerveza.","A2"],
 ["el plan","programme, plan","¿Qué plan tienes para el finde? : tu fais quoi ce week-end ?","A2"],
 ["el finde","le week-end","Familier, pour el fin de semana.","A2"],
 ["el ambiente","ambiance","Hay muy buen ambiente aquí.","A2"],
 ["guay","cool","Très espagnol ; au Mexique, padre ; en Argentine, copado.","A2"],
 ["pasarlo bien","bien s'amuser","Lo pasamos muy bien : le lo reste invariable.","A2"],
 ["aburrirse","s'ennuyer","Estar aburrido = s'ennuyer ; ser aburrido = être ennuyeux.","A2"],
 ["el karaoke","karaoké","Se prononce « ka-ra-O-ké ».","A2"],
 ["el chiste","blague","Contar un chiste = raconter une blague.","A2"],
 ["la fiesta sorpresa","fête surprise","Le mot sorpresa reste invariable : dos fiestas sorpresa.","A2"],
 ["quedar con alguien","retrouver quelqu'un","He quedado con Ana a las ocho : j'ai rendez-vous avec Ana à huit heures.","A2"],
 ["salir de copas","sortir boire des verres","La copa est un verre à pied, souvent un cocktail ou un alcool.","B1"],
 ["el brindis","toast","Hacer un brindis ; brindar por alguien = porter un toast à quelqu'un.","B1"],
 ["la resaca","gueule de bois","Tener resaca : avoir la gueule de bois.","B1"],
 ["emborracharse","se soûler","Borracho = ivre.","B1"],
 ["dejar plantado","poser un lapin","Me dejó plantado = il m'a posé un lapin.","B1"],
 ["el compromiso","engagement, obligation","Tengo un compromiso = j'ai déjà quelque chose de prévu.","B1"],
 ["trasnochar","se coucher tard","Le contraire : madrugar, se lever tôt.","B1"],
 ["salir de marcha","sortir faire la fête","Très espagnol : ¿salimos de marcha esta noche?","B1"],
 ["apuntarse","être partant, s'inscrire","¡Me apunto! = je suis partant !","B1"],
 ["el botellón","beuverie en plein air","Typique en Espagne : des jeunes qui boivent ensemble dans la rue ou un parc.","B2"],
 ["el anfitrión","hôte, maître de maison","Celui qui reçoit ; une femme : la anfitriona.","B2"],
 ["la despedida de soltero","enterrement de vie de garçon","Pour une femme : la despedida de soltera.","B2"],
 ["la juerga","la fête, la nouba","Ir de juerga = faire la fête, familier.","B2"],
 ["ir a medias","faire moitié-moitié","Chacun paie la moitié.","B2"],
 ["la previa","l'apéro avant de sortir","On boit un verre chez quelqu'un avant d'aller en boîte.","B2"],
 ["el sarao","la fête animée","Familier : se montó un buen sarao.","C1"],
 ["la peña","la bande de potes","Familier ; c'est aussi un club de supporters.","C1"],
 ["estar de bajón","avoir un coup de mou","Familier : après la fête, on est souvent de bajón.","C1"],
 ["cerrar el bar","rester jusqu'à la fermeture","Être les derniers clients, littéralement « fermer le bar ».","C1"],
 ["ser un muermo","être rasoir","Familier : se dit d'une personne ou d'une soirée ennuyeuse à mourir.","C1"],
 ["rajarse","se défiler","Familier : dijo que venía y al final se rajó.","C1"]
];

P.words.Interview = [
 ["la experiencia","expérience","Tengo tres años de experiencia : la durée se place devant.","A1"],
 ["el trabajo de mis sueños","le travail de mes rêves","El sueño = le rêve, mais aussi le sommeil.","A1"],
 ["puntual","ponctuel","Ser puntual ; la puntualidad = la ponctualité.","A1"],
 ["responsable","responsable, sérieux","Soy una persona responsable.","A1"],
 ["el candidato","candidat","Pour une femme : la candidata.","A2"],
 ["la oferta de empleo","offre d'emploi","On dit aussi la oferta de trabajo.","A2"],
 ["el punto fuerte","point fort","Le contraire : el punto débil.","A2"],
 ["el defecto","défaut","Un défaut de caractère ; une qualité = una virtud.","A2"],
 ["dirigir","diriger","He dirigido un equipo de diez personas.","A2"],
 ["la entrevista de trabajo","entretien d'embauche","Une entrevista, c'est aussi une interview.","A2"],
 ["el puesto de trabajo","poste","Un puesto vacante = un poste à pourvoir.","A2"],
 ["organizado","organisé","Avec ser pour le caractère : soy muy organizado.","A2"],
 ["la cualidad","qualité","Une qualité d'une personne ; la calidad, c'est la qualité d'un produit.","A2"],
 ["el máster","master","Hacer un máster ; le diplôme d'avant, el grado.","A2"],
 ["el entrevistador","recruteur, personne qui fait passer l'entretien","Une femme : la entrevistadora.","A2"],
 ["la jornada completa","temps plein","À mi-temps : media jornada.","B1"],
 ["el perfil","profil","Buscamos un perfil técnico.","B1"],
 ["el salario bruto","salaire brut","Le net : el salario neto.","B1"],
 ["la referencia","référence","Dar referencias = donner des références.","B1"],
 ["hacer horas extra","faire des heures supplémentaires","On dit aussi horas extras.","B1"],
 ["la virtud","qualité, vertu","Le contraire de el defecto.","B1"],
 ["el horario flexible","horaires flexibles","Un horario au singulier en espagnol.","B1"],
 ["el teletrabajo","télétravail","Teletrabajar desde casa.","B1"],
 ["las funciones","missions, fonctions","¿Cuáles serían mis funciones? : quelles seraient mes missions ?","B1"],
 ["el cargo","poste, fonction","Ocupar un cargo de responsabilidad.","B1"],
 ["la vacante","poste vacant","Cubrir una vacante = pourvoir un poste.","B2"],
 ["incorporarse","prendre ses fonctions","¿Cuándo puede incorporarse? = quand pouvez-vous commencer ?","B2"],
 ["la trayectoria","parcours","Su trayectoria profesional = son parcours professionnel.","B2"],
 ["cualificado","qualifié","En Amérique latine, on dit plutôt calificado.","B2"],
 ["proactivo","dynamique, plein d'initiative","Un mot à la mode dans les offres d'emploi.","B2"],
 ["las aptitudes","aptitudes, compétences","Synonymes : las competencias, las habilidades.","B2"],
 ["la remuneración","rémunération","Plus formel que sueldo ou salario.","B2"],
 ["venderse bien","savoir se vendre","Indispensable en entretien.","B2"],
 ["el proceso de selección","processus de recrutement","Le recruteur : el reclutador ou el seleccionador.","B2"],
 ["las expectativas salariales","prétentions salariales","Question classique : ¿cuáles son sus expectativas salariales?","B2"],
 ["la pregunta trampa","question piège","Trampa est invariable ici : dos preguntas trampa.","B2"],
 ["la incorporación inmediata","prise de poste immédiate","Formule fréquente dans les offres d'emploi.","B2"],
 ["la ETT","agence d'intérim","Empresa de Trabajo Temporal.","B2"],
 ["la dinámica de grupo","épreuve de groupe","Un exercice collectif lors d'un recrutement.","C1"],
 ["desempeñar","exercer (une fonction)","Desempeñar un cargo ; registre plutôt écrit.","C1"],
 ["remangarse","retrousser ses manches","Au sens propre comme au figuré : s'y mettre sérieusement.","C1"],
 ["el cazatalentos","chasseur de têtes","Invariable : el cazatalentos, los cazatalentos.","C1"]
];

P.words.Admin = [
 ["la fotocopia","photocopie","Traiga una fotocopia del DNI.","A1"],
 ["la fecha de nacimiento","date de naissance","Sur les formulaires, souvent sous la forme día/mes/año.","A1"],
 ["la firma","signature","Firmar = signer.","A1"],
 ["el código postal","code postal","Toujours demandé dans un formulaire.","A1"],
 ["la cuenta corriente","compte courant","La cuenta de ahorro = le compte épargne.","A2"],
 ["sacar dinero","retirer de l'argent","Sacar dinero del cajero ; retirar se dit aussi, plus formel.","A2"],
 ["el formulario","formulaire","En Espagne, on dit aussi el impreso.","A2"],
 ["rellenar","remplir (un formulaire)","En Amérique latine : llenar.","A2"],
 ["la cita previa","rendez-vous préalable","Obligatoire pour la plupart des démarches en Espagne.","A2"],
 ["el DNI","carte d'identité","Documento Nacional de Identidad, prononcé « dé-éné-I ».","A2"],
 ["el PIN","code PIN","Se prononce « pine ».","A2"],
 ["el domicilio","domicile, adresse","Sur les formulaires, domicilio veut dire adresse.","A2"],
 ["el sello","tampon","Un document officiel en porte souvent un ; c'est aussi un timbre.","A2"],
 ["el impreso","formulaire (papier)","Rellenar un impreso.","A2"],
 ["el certificado","certificat, attestation","Pedir un certificado al ayuntamiento.","A2"],
 ["la tarjeta de débito","carte de débit","Le paiement est débité tout de suite du compte.","A2"],
 ["el número de cuenta","numéro de compte","En Espagne, on donne surtout l'IBAN, qui commence par ES.","A2"],
 ["el recibo","reçu, facture","El recibo de la luz = la facture d'électricité.","A2"],
 ["coger número","prendre un ticket","Au guichet, on prend un numéro et on attend son tour ; en Amérique latine, coger est à éviter.","A2"],
 ["el NIE","numéro d'identité d'étranger","Indispensable pour travailler ou ouvrir un compte en Espagne.","B1"],
 ["ingresar","déposer (de l'argent)","Ingresar dinero en la cuenta ; en Amérique latine, depositar.","B1"],
 ["la ventanilla","guichet","C'est aussi la vitre d'une voiture.","B1"],
 ["el trámite","démarche","Los trámites = les formalités.","B1"],
 ["el justificante","justificatif","Un justificante de domicilio ; en Amérique latine, un comprobante.","B1"],
 ["la comisión","frais bancaires","Une cuenta sin comisiones = un compte sans frais.","B1"],
 ["el préstamo","prêt","Pedir un préstamo al banco.","B1"],
 ["el saldo","solde (d'un compte)","Consultar el saldo ; les soldes des magasins = las rebajas.","B1"],
 ["la sucursal","agence (bancaire)","On dit aussi la oficina.","B1"],
 ["el estado civil","situation de famille","Soltero, casado, divorciado, viudo…","B1"],
 ["la Seguridad Social","Sécurité sociale","Le numéro de la Seguridad Social sert pour travailler et se soigner.","B1"],
 ["el funcionario","fonctionnaire","Une femme : la funcionaria.","B1"],
 ["la burocracia","bureaucratie","Se plaindre de la burocracia est un sport national.","B1"],
 ["la solicitud","demande (officielle)","Presentar una solicitud = déposer une demande.","B1"],
 ["el papeleo","paperasse","Familier : ¡cuánto papeleo!","B2"],
 ["la domiciliación","prélèvement automatique","Domiciliar un recibo = le payer par prélèvement.","B2"],
 ["Hacienda","le fisc","Toujours sans article : tengo que pagar a Hacienda.","B2"],
 ["la declaración de la renta","déclaration de revenus","En Espagne, on la fait au printemps.","B2"],
 ["el padrón","registre municipal des habitants","On s'y inscrit à la mairie : c'est souvent la première démarche.","B2"],
 ["la oficina de extranjería","bureau des étrangers","Pour les titres de séjour et le NIE.","B2"],
 ["compulsar","certifier conforme","Una copia compulsada = une copie certifiée conforme.","C1"],
 ["dar largas","faire traîner","Familier : me están dando largas con el trámite.","C1"],
 ["ir de ventanilla en ventanilla","être renvoyé d'un guichet à l'autre","Le cauchemar administratif.","C1"],
 ["el moroso","mauvais payeur","Quelqu'un qui ne rembourse pas ses dettes.","C1"]
];

P.words.Tech = [
 ["la aplicación","application","On dit souvent la app, prononcé « la ap ».","A1"],
 ["el móvil","téléphone portable","En Amérique latine, el celular.","A1"],
 ["la contraseña","mot de passe","On dit aussi la clave.","A1"],
 ["la batería","batterie","Me he quedado sin batería = je n'ai plus de batterie.","A1"],
 ["el wifi","wifi","Se prononce « oui-fi » ; on l'écrit aussi wi-fi.","A1"],
 ["el portátil","ordinateur portable","En Amérique latine, la laptop.","A2"],
 ["el cargador","chargeur","Cargar el móvil = charger le téléphone.","A2"],
 ["descargar","télécharger","Familier : bajar. Se ha descargado = c'est téléchargé.","A2"],
 ["subir una foto","publier une photo","Subir = mettre en ligne ; descargar, bajar = télécharger.","A2"],
 ["la conexión","connexion","Se ha caído la conexión = la connexion a sauté.","A2"],
 ["borrar","effacer, supprimer","Borrar un mensaje.","A2"],
 ["la arroba","arobase","Dans une adresse mail : « juan arroba gmail punto com ».","A2"],
 ["el usuario","identifiant, utilisateur","Nombre de usuario = identifiant.","A2"],
 ["los auriculares","écouteurs, casque","En Amérique latine, los audífonos.","A2"],
 ["el código","code","El código de verificación.","A2"],
 ["la tableta","tablette","On entend aussi la tablet.","A2"],
 ["la pantalla táctil","écran tactile","La pantalla = l'écran.","A2"],
 ["la copia de seguridad","sauvegarde","Hacer una copia de seguridad.","B1"],
 ["actualizar","mettre à jour","Attention : actualmente veut dire « en ce moment ».","B1"],
 ["la actualización","mise à jour","Hay una actualización pendiente.","B1"],
 ["reiniciar","redémarrer","¿Has probado a reiniciarlo? : tu as essayé de le redémarrer ?","B1"],
 ["colgarse","planter, se figer","El ordenador se ha colgado. Colgar, c'est aussi raccrocher.","B1"],
 ["la cobertura","réseau (téléphone)","No tengo cobertura = je n'ai pas de réseau.","B1"],
 ["los datos móviles","données mobiles","Quedarse sin datos = ne plus avoir de data.","B1"],
 ["iniciar sesión","se connecter (à un compte)","Cerrar sesión = se déconnecter.","B1"],
 ["el navegador","navigateur","Aussi le GPS de la voiture.","B1"],
 ["la pestaña","onglet","C'est aussi le cil ! Abrir una pestaña nueva.","B1"],
 ["en la nube","dans le cloud","Guardar fotos en la nube ; la nube = le nuage.","B1"],
 ["la captura de pantalla","capture d'écran","Familier : un pantallazo.","B1"],
 ["el altavoz","haut-parleur, enceinte","En Amérique latine, la bocina ou el parlante.","B1"],
 ["las redes sociales","réseaux sociaux","Estar en redes = être présent sur les réseaux.","B1"],
 ["el archivo adjunto","pièce jointe","Adjuntar un archivo = joindre un fichier.","B1"],
 ["el correo basura","spam, courrier indésirable","La basura = la poubelle, les déchets.","B1"],
 ["la tarifa plana","forfait illimité","Un prix fixe, quelle que soit la consommation.","B2"],
 ["el pirata informático","pirate informatique","On dit aussi el hacker.","B2"],
 ["el fallo","bug, panne","Un fallo del sistema.","B2"],
 ["el soporte técnico","support technique","On dit aussi el servicio técnico.","B2"],
 ["el dispositivo","appareil","Terme général pour téléphone, tablette ou ordinateur.","B2"],
 ["cifrar","chiffrer","Mensajes cifrados de extremo a extremo.","C1"],
 ["el cortafuegos","pare-feu","Invariable : el cortafuegos, los cortafuegos.","C1"],
 ["la ciberestafa","arnaque en ligne","Le phishing se dit aussi suplantación de identidad.","C1"],
 ["ser un negado para la tecnología","être nul en technologie","Negado = complètement nul pour quelque chose.","C1"]
];

P.words.Emergency = [
 ["¡Socorro!","au secours !","Sans préposition, à crier fort.","A1"],
 ["los bomberos","pompiers","Le numéro d'urgence unique en Espagne est le 112.","A1"],
 ["el 112","numéro d'urgence","Gratuit et valable dans toute l'Union européenne.","A1"],
 ["la policía","police","La policía (l'institution) ; el policía (l'agent).","A1"],
 ["robar","voler, dérober","Robar algo a alguien. Voler dans les airs, c'est volar.","A1"],
 ["el accidente","accident","Tener un accidente = avoir un accident.","A1"],
 ["¡Cuidado!","attention !","Tener cuidado = faire attention.","A1"],
 ["¡Fuego!","au feu !","El fuego = le feu ; un incendie = un incendio.","A1"],
 ["el ladrón","voleur","Une voleuse : la ladrona.","A2"],
 ["el robo","vol","Robar algo a alguien = voler quelque chose à quelqu'un.","A2"],
 ["el incendio","incendie","Le feu de cheminée, c'est el fuego.","A2"],
 ["herido","blessé","Estar herido ; la herida = la blessure.","A2"],
 ["la emergencia","urgence (situation)","En caso de emergencia… : en cas d'urgence.","A2"],
 ["el susto","frayeur","¡Qué susto! = quelle peur !","A2"],
 ["la embajada","ambassade","El embajador = l'ambassadeur.","A2"],
 ["la oficina de objetos perdidos","bureau des objets trouvés","En espagnol, on parle d'objets « perdus ».","A2"],
 ["¡Auxilio!","à l'aide !","Plus rare que ¡socorro!, mais compris partout.","B1"],
 ["la denuncia","plainte","Poner una denuncia = porter plainte.","B1"],
 ["el carterista","pickpocket","La cartera = le portefeuille.","B1"],
 ["el choque","collision","Un choque entre dos coches.","B1"],
 ["la salida de emergencia","sortie de secours","Toujours signalée en vert.","B1"],
 ["el extintor","extincteur","Avec un x, pas « extinctor ».","B1"],
 ["el consulado","consulat","Pour un passeport perdu, on va au consulat.","B1"],
 ["el testigo","témoin","Une femme : la testigo.","B1"],
 ["la víctima","victime","Toujours féminin, même pour un homme.","B1"],
 ["el agente","agent de police","Pour s'adresser à un policier : perdone, agente.","B1"],
 ["la Guardia Civil","Garde civile","La police des routes et des campagnes en Espagne, l'équivalent de la gendarmerie.","B1"],
 ["el atropello","fait de renverser un piéton","Atropellar a alguien = renverser quelqu'un.","B2"],
 ["el atraco","braquage","El atracador = le braqueur.","B2"],
 ["amenazar","menacer","La amenaza = la menace.","B2"],
 ["el sospechoso","suspect","Le mot sert aussi d'adjectif : un paquete sospechoso.","B2"],
 ["huir","s'enfuir","Se conjugue avec un y : huyo, huyes, huyó.","B2"],
 ["el botiquín","trousse de secours","Il y en a un dans chaque voiture et chaque bureau.","B2"],
 ["los primeros auxilios","premiers secours","Un curso de primeros auxilios.","B2"],
 ["el desfibrilador","défibrillateur","On en trouve dans les gares et les centres commerciaux.","B2"],
 ["estar fuera de peligro","être hors de danger","Le blessé está fuera de peligro.","C1"],
 ["el siniestro","sinistre","Vocabulaire des assurances : declarar un siniestro.","C1"],
 ["el tirón","vol à l'arraché","Me dieron un tirón = on m'a arraché mon sac.","C1"],
 ["salir ileso","s'en sortir indemne","Salió ileso del accidente.","C1"],
 ["la reanimación","réanimation","Hacer la reanimación cardiopulmonar.","C1"]
];

P.words.Culture = [
 ["la serie","série","Ver una serie ; au pluriel, las series.","A1"],
 ["el actor","acteur","Une actrice : la actriz.","A1"],
 ["el cantante","chanteur","Une chanteuse : la cantante.","A1"],
 ["la película","film","Féminin : una película de terror.","A1"],
 ["la canción","chanson","Una canción de amor.","A1"],
 ["el cómic","bande dessinée","On dit aussi el tebeo, pour les BD d'enfants.","A1"],
 ["la novela","roman","Attention : une nouvelle se dit el cuento ou el relato.","A2"],
 ["el director","réalisateur","Au cinéma, el director ; le producteur, el productor.","A2"],
 ["el personaje","personnage","Masculin : el personaje principal.","A2"],
 ["el final","la fin","Un final abierto = une fin ouverte.","A2"],
 ["el capítulo","épisode, chapitre","Une série se compose de capítulos ou episodios.","A2"],
 ["la temporada","saison (d'une série)","La segunda temporada ; c'est aussi la saison touristique.","A2"],
 ["los subtítulos","sous-titres","Ver una película con subtítulos.","A2"],
 ["el escritor","écrivain","Une écrivaine : la escritora.","A2"],
 ["la comedia","comédie","Una comedia romántica.","A2"],
 ["el documental","documentaire","Un documental sobre la naturaleza.","A2"],
 ["la segunda parte","la suite (d'un film)","On dit aussi la secuela.","A2"],
 ["el protagonista","personnage principal","Homme ou femme : el protagonista, la protagonista.","B1"],
 ["la trama","intrigue","La trama se complica : l'intrigue se complique.","B1"],
 ["la versión original","version originale","En Espagne, les films sont souvent doublés : cherche « VOSE » pour la VO sous-titrée.","B1"],
 ["doblado","doublé","Una película doblada al español.","B1"],
 ["el estreno","sortie, première","Se estrena el viernes = il sort vendredi.","B1"],
 ["la crítica","critique","Las críticas son buenas : les critiques sont bonnes.","B1"],
 ["el spoiler","spoiler","On dit aussi destripar : no me destripes el final.","B1"],
 ["engancharse","devenir accro","Me he enganchado a esta serie.","B1"],
 ["la banda sonora","bande originale","La musique d'un film.","B1"],
 ["la poesía","poésie","Un poème = un poema, masculin.","B1"],
 ["el género","genre","El género policíaco, de terror, de ciencia ficción.","B1"],
 ["la plataforma","plateforme","Las plataformas de streaming.","B1"],
 ["el guion","scénario","S'écrit sans accent depuis 2010 : el guion.","B1"],
 ["la saga","saga","Una saga de libros o de películas.","B1"],
 ["el argumento","histoire, scénario","Faux ami : el argumento de una película est son histoire.","B2"],
 ["la taquilla","guichet, box-office","Un éxito de taquilla = un succès au box-office.","B2"],
 ["el estribillo","refrain","El estribillo se queda en la cabeza.","B2"],
 ["el ensayo","essai","C'est aussi la répétition d'un spectacle.","B2"],
 ["sobrevalorado","surcoté","Le contraire : infravalorado.","B2"],
 ["conmovedor","émouvant","Emocionante veut plutôt dire palpitant.","B2"],
 ["la obra maestra","chef-d'œuvre","Las Meninas es una obra maestra.","B2"],
 ["de culto","culte","Una película de culto.","B2"],
 ["trillado","rebattu, vu et revu","Un tema muy trillado.","C1"],
 ["el bodrio","navet","Familier : ¡qué bodrio de película!","C1"],
 ["el taquillazo","carton au box-office","Familier : un énorme succès en salles.","C1"],
 ["ponerse los pelos de punta","avoir la chair de poule","Littéralement, les cheveux se dressent sur la tête.","C1"],
 ["el hilo conductor","fil conducteur","Ce qui relie toutes les parties d'une œuvre.","C1"],
 ["el desenlace","dénouement","La fin d'une intrigue, quand tout se résout.","C1"],
 ["darse un atracón de series","enchaîner les épisodes","Darse un atracón = s'empiffrer ; ici, regarder des séries sans s'arrêter.","C1"]
];

const add = (sk, list) => (P.bank[sk] = P.bank[sk] || []).push(...list);

// Intro
add("es_ser_estar", [
 {th:"Intro",t:"tr",fr:"Je suis français, de Bordeaux.",a:["Soy francés, de Burdeos.","Yo soy francés, de Burdeos.","Soy francés, soy de Burdeos."],why:"L'origine et la nationalité font partie de l'identité : ser. Bordeaux se dit Burdeos."},
 {th:"Intro",t:"qcm",s:"Mi hermana ___ médica.",o:["es","está","hay"],a:0,fr:"Ma sœur est médecin.",why:"Le métier se dit avec ser, et sans article."},
 {th:"Intro",t:"gap",s:"Ahora ___ en Barcelona por trabajo.",a:["estoy"],h:"ser / estar, yo",fr:"En ce moment, je suis à Barcelone pour le travail.",why:"Le lieu où l'on se trouve se dit toujours avec estar."}
]);
add("es_presente", [
 {th:"Intro",t:"tr",fr:"Je vis à Madrid et je travaille dans une banque.",a:["Vivo en Madrid y trabajo en un banco.","Yo vivo en Madrid y trabajo en un banco."],why:"Présent régulier : vivir donne vivo, trabajar donne trabajo."},
 {th:"Intro",t:"gap",s:"¿Y tú, a qué te ___?",a:["dedicas"],h:"dedicarse, tú",fr:"Et toi, qu'est-ce que tu fais dans la vie ?",why:"Dedicarse au présent, avec tú : te dedicas."}
]);
add("es_gustar", [
 {th:"Intro",t:"qcm",s:"Me ___ mucho los idiomas.",o:["gusta","gustan","gusto"],a:1,fr:"J'aime beaucoup les langues.",why:"Gustar s'accorde avec ce qui plaît : los idiomas est au pluriel, donc gustan."},
 {th:"Intro",t:"tr",fr:"Tu aimes lire ?",a:["¿Te gusta leer?","¿A ti te gusta leer?"],why:"Devant un infinitif, gustar reste au singulier : te gusta leer."}
]);
add("es_tener_ir", [
 {th:"Intro",t:"tr",fr:"J'ai trente-deux ans.",a:["Tengo treinta y dos años.","Tengo 32 años.","Yo tengo treinta y dos años.","Yo tengo 32 años."],why:"L'âge se dit avec tener, comme « avoir » en français."}
]);
add("es_reflexivos", [
 {th:"Intro",t:"gap",s:"Mi novio ___ Marc.",a:["se llama"],h:"llamarse",fr:"Mon copain s'appelle Marc.",why:"Llamarse est pronominal : me llamo, te llamas, se llama."}
]);
add("es_indefinido", [
 {th:"Intro",t:"tr",fr:"Je suis né à Lille.",a:["Nací en Lille.","Yo nací en Lille."],why:"La naissance est un fait ponctuel et terminé : indefinido, nací."}
]);
add("es_imperfecto", [
 {th:"Intro",t:"gap",s:"De pequeño, ___ en un pueblo cerca de Lyon.",a:["vivía"],h:"vivir, yo",fr:"Petit, je vivais dans un village près de Lyon.",why:"Une situation qui durait dans le passé se dit à l'imperfecto : vivía."}
]);
add("es_por_para", [
 {th:"Intro",t:"qcm",s:"Vine a Madrid ___ aprender español.",o:["por","para","a"],a:1,fr:"Je suis venu à Madrid pour apprendre l'espagnol.",why:"Le but, devant un infinitif : para."}
]);
add("es_subj_deseo", [
 {th:"Intro",t:"gap",s:"Espero que te ___ bien en el nuevo trabajo.",a:["vaya"],h:"ir, subjonctif",fr:"J'espère que ça se passera bien pour toi dans ton nouveau travail.",why:"Esperar que exprime un souhait : il est suivi du subjonctif, vaya."}
]);
add("es_relativos", [
 {th:"Intro",t:"qcm",s:"Te presento a Ana, la chica ___ te hablé.",o:["que","de la que","quien"],a:1,fr:"Je te présente Ana, la fille dont je t'ai parlé.",why:"On dit hablar de alguien : la préposition passe devant le relatif, de la que (ou de quien)."}
]);
add("es_perifrasis", [
 {th:"Intro",t:"tr",fr:"J'habite ici depuis trois ans.",a:["Llevo tres años viviendo aquí.","Vivo aquí desde hace tres años.","Hace tres años que vivo aquí.","Llevo tres años aquí."],why:"Pour une durée qui continue, llevar + durée + gérondif est le plus naturel ; desde hace et hace… que se disent aussi."}
]);

// Hotel
add("es_hay", [
 {th:"Hotel",t:"tr",fr:"Il n'y a pas d'eau chaude.",a:["No hay agua caliente."],why:"Hay sert aussi à la forme négative, sans article : no hay agua caliente."},
 {th:"Hotel",t:"gap",s:"¿___ una farmacia cerca del hotel?",a:["Hay"],h:"hay / está",fr:"Il y a une pharmacie près de l'hôtel ?",why:"Une pharmacie quelconque, introduite par un article indéfini : hay."},
 {th:"Hotel",t:"qcm",s:"La piscina ___ en la azotea.",o:["hay","está","es"],a:1,fr:"La piscine est sur le toit-terrasse.",why:"Une chose précise (la piscina) que l'on situe : estar, pas hay."}
]);
add("es_articulos", [
 {th:"Hotel",t:"qcm",s:"Necesito ___ toalla limpia.",o:["un","una","la"],a:1,fr:"J'ai besoin d'une serviette propre.",why:"Toalla est féminin, et on parle d'une serviette quelconque : una."}
]);
add("es_ser_estar", [
 {th:"Hotel",t:"tr",fr:"La chambre est sale.",a:["La habitación está sucia.","El cuarto está sucio."],why:"Sale, propre : c'est l'état de la chambre en ce moment, donc estar."}
]);
add("es_tener_ir", [
 {th:"Hotel",t:"tr",fr:"J'ai une réservation pour deux nuits.",a:["Tengo una reserva para dos noches.","Yo tengo una reserva para dos noches.","Tengo una reservación para dos noches."],why:"Avoir = tener. La reserva en Espagne, la reservación en Amérique latine."}
]);
add("es_pronombres_cd", [
 {th:"Hotel",t:"gap",s:"¿Las maletas? ___ dejo en recepción.",a:["Las"],h:"pronom COD",fr:"Les valises ? Je les laisse à la réception.",why:"Las maletas est féminin pluriel : las, placé avant le verbe conjugué."}
]);
add("es_indefinido", [
 {th:"Hotel",t:"tr",fr:"Nous sommes arrivés hier soir.",a:["Llegamos anoche.","Llegamos ayer por la noche.","Nosotros llegamos anoche.","Llegamos ayer en la noche.","Anoche llegamos."],why:"Un moment passé précis (anoche, hier soir) : indefinido, llegamos."}
]);
add("es_comparativos", [
 {th:"Hotel",t:"qcm",s:"Esta habitación es ___ grande que la otra.",o:["más","tan","mucho"],a:0,fr:"Cette chambre est plus grande que l'autre.",why:"Plus… que = más… que. Tan va avec como."}
]);
add("es_condicional", [
 {th:"Hotel",t:"tr",fr:"Pourriez-vous me réveiller à sept heures ?",a:["¿Podría despertarme a las siete?","¿Me podría despertar a las siete?","¿Podría usted despertarme a las siete?"],why:"Le conditionnel de poder rend la demande polie ; avec usted, podría."}
]);
add("es_imperativo", [
 {th:"Hotel",t:"gap",s:"Por favor, ___ la tarjeta en la ranura para encender la luz.",a:["introduzca","meta","inserte"],h:"introducir, usted",fr:"S'il vous plaît, introduisez la carte dans la fente pour allumer la lumière.",why:"L'impératif de usted prend la forme du subjonctif présent : introduzca."}
]);
add("es_perfecto", [
 {th:"Hotel",t:"tr",fr:"Ils n'ont pas encore nettoyé la chambre.",a:["Todavía no han limpiado la habitación.","Aún no han limpiado la habitación.","No han limpiado la habitación todavía.","No han limpiado todavía la habitación.","Todavía no han limpiado el cuarto.","Aún no han limpiado el cuarto."],why:"Avec todavía no (pas encore), on emploie le pretérito perfecto : han limpiado."}
]);
add("es_por_para", [
 {th:"Hotel",t:"qcm",s:"Pagamos noventa euros ___ noche.",o:["por","para","a"],a:0,fr:"Nous payons quatre-vingt-dix euros par nuit.",why:"Un prix par unité se dit avec por : noventa euros por noche."}
]);
add("es_pasiva_se", [
 {th:"Hotel",t:"gap",s:"En este hotel no ___ animales.",a:["se admiten","se aceptan","se permiten"],h:"admitir, se impersonnel",fr:"Dans cet hôtel, les animaux ne sont pas acceptés.",why:"Se passif : le verbe s'accorde avec animales, au pluriel."}
]);
add("es_si_imperfecto", [
 {th:"Hotel",t:"tr",fr:"Si l'hôtel était moins cher, nous resterions une semaine.",a:["Si el hotel fuera más barato, nos quedaríamos una semana.","Si el hotel fuese más barato, nos quedaríamos una semana.","Si el hotel costara menos, nos quedaríamos una semana.","Si el hotel costase menos, nos quedaríamos una semana."],why:"Hypothèse irréelle : si + subjonctif imparfait (fuera, fuese), puis conditionnel (nos quedaríamos)."}
]);

// Party
add("es_gustar", [
 {th:"Party",t:"qcm",s:"¿Te ___ bailar?",o:["gusta","gustan","gustas"],a:0,fr:"Tu aimes danser ?",why:"Devant un infinitif, gustar reste au singulier : te gusta bailar."},
 {th:"Party",t:"tr",fr:"Nous adorons ce bar.",a:["Nos encanta este bar.","A nosotros nos encanta este bar."],why:"Encantar se construit comme gustar : nos encanta, accordé avec el bar."}
]);
add("es_presente", [
 {th:"Party",t:"gap",s:"¿A qué hora ___ la fiesta?",a:["empieza","comienza"],h:"empezar",fr:"À quelle heure commence la fête ?",why:"Empezar diphtongue au présent : le e devient ie, empieza."},
 {th:"Party",t:"tr",fr:"Je ne peux pas ce soir.",a:["No puedo esta noche.","Esta noche no puedo.","Yo no puedo esta noche."],why:"Poder diphtongue au présent : le o devient ue, puedo."}
]);
add("es_tener_ir", [
 {th:"Party",t:"gap",s:"Esta noche ___ al concierto con Laura.",a:["voy"],h:"ir, yo",fr:"Ce soir, je vais au concert avec Laura.",why:"Ir est irrégulier : voy. Et a + el se contracte en al."}
]);
add("es_ir_a", [
 {th:"Party",t:"tr",fr:"Nous allons sortir ce soir.",a:["Vamos a salir esta noche.","Esta noche vamos a salir.","Nosotros vamos a salir esta noche."],why:"Un projet proche : ir a + infinitif, sans oublier le a."},
 {th:"Party",t:"qcm",s:"¿Vas ___ venir a la cena?",o:["a","de","en"],a:0,fr:"Tu vas venir au dîner ?",why:"Ir a + infinitif : le a est obligatoire."}
]);
add("es_indefinido", [
 {th:"Party",t:"tr",fr:"Hier soir, on s'est bien amusés.",a:["Anoche lo pasamos bien.","Lo pasamos bien anoche.","Anoche nos divertimos.","Nos divertimos anoche.","Anoche nos lo pasamos bien."],why:"Un moment passé et terminé (anoche) : indefinido, lo pasamos, nos divertimos."}
]);
add("es_reflexivos", [
 {th:"Party",t:"gap",s:"Los sábados ___ muy tarde.",a:["me acuesto"],h:"acostarse, yo",fr:"Le samedi, je me couche très tard.",why:"Acostarse est pronominal et diphtongue : me acuesto."}
]);
add("es_subj_deseo", [
 {th:"Party",t:"tr",fr:"J'espère que tu viendras.",a:["Espero que vengas.","Ojalá vengas.","Yo espero que vengas."],why:"Après esperar que ou ojalá, le souhait se met au subjonctif : vengas."}
]);
add("es_imperativo", [
 {th:"Party",t:"gap",s:"¡___ a la fiesta, lo vas a pasar genial!",a:["Ven","Vente"],h:"venir, tú",fr:"Viens à la fête, tu vas t'éclater !",why:"Venir a un impératif irrégulier : ven."}
]);
add("es_indef_imperf", [
 {th:"Party",t:"qcm",s:"Cuando llegamos, la gente ya ___.",o:["bailaba","bailó","baila"],a:0,fr:"Quand nous sommes arrivés, les gens dansaient déjà.",why:"Une action en cours, en toile de fond, quand l'autre arrive : imperfecto."}
]);
add("es_condicional", [
 {th:"Party",t:"tr",fr:"J'adorerais, mais j'ai du travail.",a:["Me encantaría, pero tengo trabajo.","Me encantaría, pero tengo que trabajar.","Me encantaría, pero tengo mucho trabajo."],why:"Le conditionnel adoucit un refus : me encantaría."}
]);
add("es_subj_emocion", [
 {th:"Party",t:"gap",s:"Me alegra que ___ venir.",a:["puedas"],h:"poder, tú",fr:"Je suis content que tu puisses venir.",why:"Après un verbe de sentiment + que, le subjonctif : puedas."}
]);
add("es_aunque", [
 {th:"Party",t:"tr",fr:"Même s'il pleut, on sortira.",a:["Aunque llueva, saldremos.","Aunque llueva, vamos a salir.","Aunque llueva, salimos.","Saldremos aunque llueva.","Vamos a salir aunque llueva."],why:"Aunque + subjonctif présente une hypothèse : même s'il pleut (on ne sait pas encore)."}
]);

// Interview
add("es_ser_estar", [
 {th:"Interview",t:"qcm",s:"___ disponible a partir de septiembre.",o:["Soy","Estoy","Hay"],a:1,fr:"Je suis disponible à partir de septembre.",why:"La disponibilité est un état : estar."},
 {th:"Interview",t:"tr",fr:"Je suis ingénieure.",a:["Soy ingeniera.","Yo soy ingeniera."],why:"Le métier se dit avec ser, sans article."}
]);
add("es_presente", [
 {th:"Interview",t:"gap",s:"Actualmente ___ en una agencia de publicidad.",a:["trabajo"],h:"trabajar, yo",fr:"Actuellement, je travaille dans une agence de publicité.",why:"Présent régulier en -ar : trabajo. Actualmente veut dire « en ce moment »."},
 {th:"Interview",t:"tr",fr:"Je parle trois langues.",a:["Hablo tres idiomas.","Hablo tres lenguas.","Yo hablo tres idiomas.","Yo hablo tres lenguas."],why:"Hablar est régulier : hablo."}
]);
add("es_tener_ir", [
 {th:"Interview",t:"tr",fr:"J'ai cinq ans d'expérience.",a:["Tengo cinco años de experiencia.","Yo tengo cinco años de experiencia."],why:"Tener, irrégulier : tengo. La durée se place devant de experiencia."}
]);
add("es_indefinido", [
 {th:"Interview",t:"gap",s:"En 2021 ___ un máster en Barcelona.",a:["hice"],h:"hacer, yo",fr:"En 2021, j'ai fait un master à Barcelone.",why:"Une année précise et passée : indefinido. Hacer est irrégulier : hice, sans accent."},
 {th:"Interview",t:"qcm",s:"De 2018 a 2022 ___ en una empresa alemana.",o:["trabajé","trabajaba","he trabajado"],a:0,fr:"De 2018 à 2022, j'ai travaillé dans une entreprise allemande.",why:"Une période close et datée : indefinido."}
]);
add("es_comparativos", [
 {th:"Interview",t:"tr",fr:"Ce poste est plus intéressant que le précédent.",a:["Este puesto es más interesante que el anterior."],why:"Plus… que = más… que."}
]);
add("es_perfecto", [
 {th:"Interview",t:"tr",fr:"Je n'ai jamais travaillé à l'étranger.",a:["Nunca he trabajado en el extranjero.","No he trabajado nunca en el extranjero.","Yo nunca he trabajado en el extranjero."],why:"Une expérience de vie, sans date : pretérito perfecto, avec nunca."}
]);
add("es_condicional", [
 {th:"Interview",t:"gap",s:"¿Cuáles ___ mis funciones?",a:["serían"],h:"ser, conditionnel",fr:"Quelles seraient mes missions ?",why:"Le conditionnel rend la question prudente et polie : serían."}
]);
add("es_futuro", [
 {th:"Interview",t:"qcm",s:"Le ___ una respuesta antes del viernes.",o:["daremos","dábamos","demos"],a:0,fr:"Nous vous donnerons une réponse avant vendredi.",why:"Une promesse pour plus tard : futur, daremos."}
]);
add("es_por_para", [
 {th:"Interview",t:"gap",s:"Gracias ___ su tiempo.",a:["por"],h:"por / para",fr:"Merci pour votre temps.",why:"On remercie toujours por quelque chose : gracias por."}
]);
add("es_relativos", [
 {th:"Interview",t:"tr",fr:"C'est le poste que je cherchais.",a:["Es el puesto que buscaba.","Este es el puesto que buscaba.","Es el puesto que estaba buscando.","Este es el puesto que estaba buscando."],why:"Le relatif complément d'objet est que, comme en français."}
]);
add("es_estilo_indirecto", [
 {th:"Interview",t:"qcm",s:"La entrevistadora me dijo que me ___ la semana siguiente.",o:["llamarían","llamarán","llaman","llamen"],a:0,fr:"La recruteuse m'a dit qu'ils m'appelleraient la semaine suivante.",why:"Un futur rapporté après un verbe au passé passe au conditionnel : llamarían."}
]);
add("es_registro", [
 {th:"Interview",t:"tr",fr:"Je vous remercie de m'avoir reçu.",a:["Le agradezco que me haya recibido.","Les agradezco que me hayan recibido.","Le agradezco que me recibiera.","Le agradezco haberme recibido.","Muchas gracias por recibirme.","Gracias por recibirme."],why:"Registre soutenu avec usted : agradecer que + subjonctif, plus formel qu'un simple gracias."}
]);

// Admin
add("es_articulos", [
 {th:"Admin",t:"qcm",s:"Necesito ___ fotocopia del pasaporte.",o:["un","una","unos"],a:1,fr:"J'ai besoin d'une photocopie du passeport.",why:"Fotocopia est féminin : una."}
]);
add("es_plurales", [
 {th:"Admin",t:"tr",fr:"Je dois remplir deux formulaires.",a:["Tengo que rellenar dos formularios.","Tengo que llenar dos formularios.","Debo rellenar dos formularios.","Debo llenar dos formularios."],why:"Un nom terminé par une voyelle prend un s au pluriel : formularios."},
 {th:"Admin",t:"gap",s:"Las ___ del banco cierran a las dos.",a:["sucursales"],h:"sucursal, au pluriel",fr:"Les agences de la banque ferment à deux heures.",why:"Un nom terminé par une consonne prend -es au pluriel : sucursales."}
]);
add("es_hay", [
 {th:"Admin",t:"qcm",s:"¿___ un cajero por aquí?",o:["Hay","Está","Es"],a:0,fr:"Il y a un distributeur par ici ?",why:"On cherche un distributeur quelconque (un cajero) : hay."}
]);
add("es_tener_ir", [
 {th:"Admin",t:"tr",fr:"Je dois prendre rendez-vous.",a:["Tengo que pedir cita.","Tengo que pedir una cita.","Tengo que pedir cita previa.","Tengo que sacar cita.","Tengo que coger cita.","Yo tengo que pedir cita."],why:"Devoir = tener que + infinitif. Prendre rendez-vous se dit pedir cita."}
]);
add("es_presente", [
 {th:"Admin",t:"gap",s:"¿A qué hora ___ la oficina?",a:["abre"],h:"abrir",fr:"À quelle heure ouvre le bureau ?",why:"Abrir est régulier au présent : abre."}
]);
add("es_pronombres_cd", [
 {th:"Admin",t:"tr",fr:"Le formulaire ? Je le remplis maintenant.",a:["¿El formulario? Lo relleno ahora.","¿El formulario? Ahora lo relleno.","¿El formulario? Lo lleno ahora.","¿El formulario? Ahora lo lleno."],why:"El formulario est masculin singulier : lo, placé avant le verbe conjugué."}
]);
add("es_indefinido", [
 {th:"Admin",t:"qcm",s:"Ayer ___ al banco para cambiar el PIN.",o:["fui","iba","voy"],a:0,fr:"Hier, je suis allé à la banque pour changer le code PIN.",why:"Une action terminée à un moment précis (ayer) : indefinido. Ir donne fui."}
]);
add("es_imperativo", [
 {th:"Admin",t:"gap",s:"___ aquí, por favor.",a:["Firme"],h:"firmar, usted",fr:"Signez ici, s'il vous plaît.",why:"L'impératif de usted d'un verbe en -ar se termine en -e : firme."},
 {th:"Admin",t:"tr",fr:"Attendez votre tour, s'il vous plaît.",a:["Espere su turno, por favor.","Por favor, espere su turno.","Espere su turno."],why:"Impératif de usted : espere, et le possessif de usted est su."}
]);
add("es_perfecto", [
 {th:"Admin",t:"tr",fr:"On m'a bloqué ma carte.",a:["Me han bloqueado la tarjeta.","Me han bloqueado mi tarjeta.","Me bloquearon la tarjeta."],why:"Un fait récent qui a encore un effet : pretérito perfecto en Espagne. « On » se rend par la 3e personne du pluriel."}
]);
add("es_futuro", [
 {th:"Admin",t:"gap",s:"Recibirá la tarjeta en casa y ___ que activarla.",a:["tendrá"],h:"tener, usted",fr:"Vous recevrez la carte chez vous et vous devrez l'activer.",why:"Tener a un futur irrégulier : tendr-, donc tendrá."}
]);
add("es_pasiva_se", [
 {th:"Admin",t:"qcm",s:"Aquí no ___ pagos en efectivo.",o:["se aceptan","se acepta","aceptan se"],a:0,fr:"Ici, on n'accepte pas les paiements en espèces.",why:"Se passif : le verbe s'accorde avec pagos, au pluriel."}
]);
add("es_por_para", [
 {th:"Admin",t:"qcm",s:"Necesito el certificado ___ el lunes.",o:["para","por","en"],a:0,fr:"J'ai besoin du certificat pour lundi.",why:"Une échéance, une date limite : para."}
]);
add("es_conectores", [
 {th:"Admin",t:"gap",s:"No tiene el NIE; ___, no puede abrir la cuenta.",a:["por lo tanto","por tanto","por consiguiente","en consecuencia"],h:"connecteur de conséquence",fr:"Il n'a pas de NIE ; par conséquent, il ne peut pas ouvrir le compte.",why:"Pour introduire une conséquence : por lo tanto, por consiguiente."}
]);

// Tech
add("es_ser_estar", [
 {th:"Tech",t:"qcm",s:"Hoy la conexión ___ muy lenta.",o:["es","está","hay"],a:1,fr:"Aujourd'hui, la connexion est très lente.",why:"Lente aujourd'hui, c'est un état passager : estar."}
]);
add("es_presente", [
 {th:"Tech",t:"tr",fr:"Mon ordinateur ne s'allume pas.",a:["Mi ordenador no se enciende.","Mi computadora no se enciende.","Mi computadora no prende."],why:"Encender diphtongue au présent : le e devient ie, se enciende."},
 {th:"Tech",t:"gap",s:"No ___ la contraseña.",a:["recuerdo"],h:"recordar, yo",fr:"Je ne me souviens pas du mot de passe.",why:"Recordar diphtongue au présent : le o devient ue, recuerdo."}
]);
add("es_hay", [
 {th:"Tech",t:"tr",fr:"Il n'y a pas de wifi ici.",a:["No hay wifi aquí.","Aquí no hay wifi.","No hay wi-fi aquí.","Aquí no hay wi-fi."],why:"Hay, à la forme négative, sans article : no hay wifi."}
]);
add("es_gustar", [
 {th:"Tech",t:"qcm",s:"No me ___ las redes sociales.",o:["gusta","gustan","gusto"],a:1,fr:"Je n'aime pas les réseaux sociaux.",why:"Las redes sociales est au pluriel : gustan."}
]);
add("es_pronombres_cd", [
 {th:"Tech",t:"gap",s:"¿El portátil? Tienes que ___.",a:["reiniciarlo"],h:"reiniciar + pronom",fr:"L'ordinateur portable ? Tu dois le redémarrer.",why:"Avec un infinitif, le pronom se colle à la fin : reiniciarlo."}
]);
add("es_gerundio", [
 {th:"Tech",t:"tr",fr:"Je suis en train de télécharger la mise à jour.",a:["Estoy descargando la actualización.","Estoy bajando la actualización.","Yo estoy descargando la actualización."],why:"Être en train de = estar + gérondif : descargando."}
]);
add("es_ir_a", [
 {th:"Tech",t:"qcm",s:"___ a instalar la aplicación ahora.",o:["Voy","Estoy","Tengo"],a:0,fr:"Je vais installer l'application maintenant.",why:"Futur proche : ir a + infinitif, voy a instalar."}
]);
add("es_perfecto", [
 {th:"Tech",t:"tr",fr:"J'ai oublié mon mot de passe.",a:["He olvidado mi contraseña.","He olvidado la contraseña.","Me he olvidado de mi contraseña.","Me he olvidado de la contraseña.","Se me ha olvidado la contraseña.","Se me ha olvidado mi contraseña.","Olvidé mi contraseña.","Olvidé la contraseña.","Se me olvidó la contraseña.","Se me olvidó mi contraseña."],why:"Un oubli récent dont on subit l'effet : pretérito perfecto en Espagne ; en Amérique latine, l'indefinido (olvidé)."},
 {th:"Tech",t:"gap",s:"Se ___ caído la conexión otra vez.",a:["ha"],h:"haber",fr:"La connexion a encore sauté.",why:"Pretérito perfecto : haber conjugué + participe, se ha caído."}
]);
add("es_imperativo", [
 {th:"Tech",t:"tr",fr:"Redémarre ton téléphone.",a:["Reinicia tu móvil.","Reinicia el móvil.","Reinicia tu teléfono.","Reinicia el teléfono.","Reinicia tu celular.","Reinicia el celular."],why:"L'impératif de tú a la forme de la 3e personne du présent : reinicia."}
]);
add("es_condicional", [
 {th:"Tech",t:"gap",s:"¿___ ayudarme con el ordenador?",a:["Podrías"],h:"poder, tú, conditionnel",fr:"Tu pourrais m'aider avec l'ordinateur ?",why:"Le conditionnel rend la demande polie : podrías."}
]);
add("es_pasiva_se", [
 {th:"Tech",t:"tr",fr:"On ne peut pas ouvrir ce fichier.",a:["No se puede abrir este archivo.","Este archivo no se puede abrir.","No se puede abrir ese archivo.","Ese archivo no se puede abrir."],why:"« On » impersonnel : se + verbe à la 3e personne, se puede."}
]);
add("es_si_imperfecto", [
 {th:"Tech",t:"gap",s:"Si ___ copias de seguridad, no perderías tus fotos.",a:["hicieras","hicieses"],h:"hacer, tú",fr:"Si tu faisais des sauvegardes, tu ne perdrais pas tes photos.",why:"Hypothèse sur le présent : si + subjonctif imparfait, hicieras ou hicieses."}
]);
add("es_si_pluscuam", [
 {th:"Tech",t:"tr",fr:"Si j'avais sauvegardé le fichier, je ne l'aurais pas perdu.",a:["Si hubiera guardado el archivo, no lo habría perdido.","Si hubiese guardado el archivo, no lo habría perdido.","Si hubiera guardado el archivo, no lo hubiera perdido.","Si hubiese guardado el archivo, no lo hubiera perdido."],why:"Regret sur le passé : si + subjonctif plus-que-parfait (hubiera guardado), puis conditionnel passé (habría perdido) ou hubiera perdido."}
]);

// Emergency
add("es_ser_estar", [
 {th:"Emergency",t:"tr",fr:"Mon ami est blessé.",a:["Mi amigo está herido."],why:"Être blessé est un état : estar."},
 {th:"Emergency",t:"qcm",s:"¿Dónde ___ la comisaría?",o:["es","está","hay"],a:1,fr:"Où est le commissariat ?",why:"Situer un lieu précis : estar."}
]);
add("es_hay", [
 {th:"Emergency",t:"gap",s:"___ un herido en la calle.",a:["Hay"],h:"hay / está",fr:"Il y a un blessé dans la rue.",why:"Pour signaler la présence de quelqu'un d'indéfini (un herido) : hay."}
]);
add("es_tener_ir", [
 {th:"Emergency",t:"tr",fr:"Je dois appeler la police.",a:["Tengo que llamar a la policía.","Yo tengo que llamar a la policía.","Debo llamar a la policía."],why:"Devoir = tener que + infinitif."}
]);
add("es_presente", [
 {th:"Emergency",t:"gap",s:"No ___ mi pasaporte.",a:["encuentro"],h:"encontrar, yo",fr:"Je ne trouve pas mon passeport.",why:"Encontrar diphtongue au présent : le o devient ue, encuentro."}
]);
add("es_indefinido", [
 {th:"Emergency",t:"tr",fr:"Hier, on m'a volé mon portable.",a:["Ayer me robaron el móvil.","Ayer me robaron el celular.","Ayer me robaron el teléfono.","Me robaron el móvil ayer.","Me robaron el celular ayer.","Ayer me robaron mi móvil."],why:"Un fait daté (ayer) : indefinido. « On » se rend par la 3e personne du pluriel : me robaron."},
 {th:"Emergency",t:"gap",s:"El ladrón ___ corriendo hacia el metro.",a:["salió"],h:"salir, indefinido",fr:"Le voleur est parti en courant vers le métro.",why:"Une action ponctuelle du récit : indefinido, salió."}
]);
add("es_imperfecto", [
 {th:"Emergency",t:"qcm",s:"La calle ___ oscura y no había nadie.",o:["estaba","estuvo","está"],a:0,fr:"La rue était sombre et il n'y avait personne.",why:"Une description dans le passé, le décor : imperfecto, estaba."}
]);
add("es_indef_imperf", [
 {th:"Emergency",t:"tr",fr:"Je marchais dans la rue quand j'ai entendu un cri.",a:["Caminaba por la calle cuando oí un grito.","Iba por la calle cuando oí un grito.","Andaba por la calle cuando oí un grito.","Estaba caminando por la calle cuando oí un grito.","Caminaba por la calle cuando escuché un grito.","Iba por la calle cuando escuché un grito.","Andaba por la calle cuando escuché un grito.","Estaba caminando por la calle cuando escuché un grito."],why:"L'action en cours à l'imperfecto (caminaba), l'événement qui l'interrompt à l'indefinido (oí)."},
 {th:"Emergency",t:"qcm",s:"Mientras el policía ___ la denuncia, sonó mi teléfono.",o:["escribía","escribió","escribe"],a:0,fr:"Pendant que le policier rédigeait la plainte, mon téléphone a sonné.",why:"Mientras introduit une action en cours : imperfecto, escribía."}
]);
add("es_imperativo", [
 {th:"Emergency",t:"tr",fr:"Appelez une ambulance !",a:["¡Llame a una ambulancia!","¡Llamen a una ambulancia!","¡Llama a una ambulancia!"],why:"Impératif : llame (usted), llamen (ustedes), llama (tú). Llamar a + personne ou service."},
 {th:"Emergency",t:"gap",s:"¡No ___, ya viene la ayuda!",a:["te muevas"],h:"moverse, tú, négatif",fr:"Ne bouge pas, les secours arrivent !",why:"À la forme négative, l'impératif prend le subjonctif et le pronom passe devant : no te muevas."}
]);
add("es_perfecto", [
 {th:"Emergency",t:"tr",fr:"Il y a eu un accident sur l'autoroute.",a:["Ha habido un accidente en la autopista.","Hubo un accidente en la autopista."],why:"Un fait récent : ha habido, au pretérito perfecto ; hubo s'il est plus éloigné ou en Amérique latine."}
]);
add("es_pluscuamperfecto", [
 {th:"Emergency",t:"gap",s:"Cuando llegó la policía, el ladrón ya se ___ ido.",a:["había"],h:"haber, plus-que-parfait",fr:"Quand la police est arrivée, le voleur était déjà parti.",why:"Une action antérieure à une autre action passée : plus-que-parfait, había ido."}
]);
add("es_estilo_indirecto", [
 {th:"Emergency",t:"qcm",s:"El agente me preguntó dónde ___ el robo.",o:["había ocurrido","ha ocurrido","ocurra"],a:0,fr:"L'agent m'a demandé où le vol avait eu lieu.",why:"Au discours rapporté après un verbe au passé, le passé recule d'un cran : había ocurrido."}
]);

// Culture
add("es_gustar", [
 {th:"Culture",t:"tr",fr:"J'adore cette chanson.",a:["Me encanta esta canción.","A mí me encanta esta canción."],why:"Encantar se construit comme gustar et s'accorde avec la chanson : me encanta."},
 {th:"Culture",t:"qcm",s:"A mi hermano le ___ las películas de terror.",o:["gusta","gustan","gustamos"],a:1,fr:"Mon frère aime les films d'horreur.",why:"Las películas est au pluriel : gustan."},
 {th:"Culture",t:"gap",s:"¿Te ___ la música clásica?",a:["gusta"],h:"gustar, tú",fr:"Tu aimes la musique classique ?",why:"La música est au singulier : te gusta."}
]);
add("es_ser_estar", [
 {th:"Culture",t:"qcm",s:"Los actores ___ argentinos.",o:["son","están","hay"],a:0,fr:"Les acteurs sont argentins.",why:"La nationalité, l'origine : ser."}
]);
add("es_plurales", [
 {th:"Culture",t:"tr",fr:"Les films espagnols sont très bons.",a:["Las películas españolas son muy buenas."],why:"Tout s'accorde au féminin pluriel, car película est féminin : las películas españolas son buenas."}
]);
add("es_indefinido", [
 {th:"Culture",t:"tr",fr:"Hier, j'ai vu un film très drôle.",a:["Ayer vi una película muy divertida.","Ayer vi una película muy graciosa.","Vi una película muy divertida ayer.","Ayer yo vi una película muy divertida."],why:"Un fait daté (ayer) : indefinido. Ver donne vi, sans accent."}
]);
add("es_comparativos", [
 {th:"Culture",t:"gap",s:"El libro es ___ que la película.",a:["mejor"],h:"bueno, comparatif",fr:"Le livre est mieux que le film.",why:"Le comparatif de bueno est irrégulier : mejor, jamais « más bueno » dans ce sens."}
]);
add("es_pronombres_cd", [
 {th:"Culture",t:"qcm",s:"¿La última de Almodóvar? Ya ___ he visto.",o:["la","lo","le"],a:0,fr:"Le dernier Almodóvar ? Je l'ai déjà vu.",why:"On parle de la película, au féminin : la."}
]);
add("es_perfecto", [
 {th:"Culture",t:"tr",fr:"Tu as déjà vu cette série ?",a:["¿Ya has visto esta serie?","¿Has visto ya esta serie?","¿Has visto esta serie?","¿Ya viste esta serie?"],why:"Une expérience sans date, avec ya : pretérito perfecto ; en Amérique latine, ¿ya viste…?"}
]);
add("es_imperativo", [
 {th:"Culture",t:"gap",s:"___ esta novela, te va a encantar.",a:["Lee","Léete"],h:"leer, tú",fr:"Lis ce roman, tu vas adorer.",why:"L'impératif de tú a la forme de la 3e personne du présent : lee."}
]);
add("es_subj_emocion", [
 {th:"Culture",t:"tr",fr:"Ça m'énerve qu'on me raconte la fin.",a:["Me molesta que me cuenten el final.","Me fastidia que me cuenten el final.","Me da rabia que me cuenten el final.","Me molesta que me destripen el final."],why:"Après un verbe de sentiment + que, le subjonctif : cuenten."}
]);
add("es_relativos", [
 {th:"Culture",t:"qcm",s:"Es el director ___ películas siempre ganan premios.",o:["cuyas","cuyos","que sus","quien"],a:0,fr:"C'est le réalisateur dont les films gagnent toujours des prix.",why:"Cuyo exprime la possession et s'accorde avec ce qui suit : películas, donc cuyas."}
]);
add("es_pasiva_se", [
 {th:"Culture",t:"gap",s:"La película ___ en Sevilla el año pasado.",a:["se rodó"],h:"rodar, se passif",fr:"Le film a été tourné à Séville l'année dernière.",why:"Se passif à l'indefinido : se rodó, accordé avec la película."}
]);
add("es_aunque", [
 {th:"Culture",t:"tr",fr:"Bien que le film soit long, je ne me suis pas ennuyé.",a:["Aunque la película es larga, no me aburrí.","Aunque la película es larga, no me he aburrido.","Aunque la película era larga, no me aburrí.","Aunque la película era larga, no me he aburrido.","Aunque la película fue larga, no me aburrí."],why:"Aunque + indicatif pour un fait admis (le film est long, c'est sûr), même si le français met le subjonctif après « bien que »."}
]);
add("es_como_si", [
 {th:"Culture",t:"gap",s:"Habla de la película como si la ___ visto diez veces.",a:["hubiera","hubiese"],h:"haber, subjonctif",fr:"Il parle du film comme s'il l'avait vu dix fois.",why:"Como si + action antérieure : subjonctif plus-que-parfait, hubiera visto."}
]);
})();

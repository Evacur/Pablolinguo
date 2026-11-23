// The conversation scenes (S'entraîner › Parler), shared by the app and /api/ai. The browser only sends a scene id:
// the character and the learner's goal are read here by the server, which builds the prompt itself.
// theme: the vocabulary theme the scene belongs to (its pixel icon). who: the character. goal: what the learner must get.
export const SCENES = [
  { id: "hotel", theme: "Hotel", title: "À la réception de l'hôtel", who: "réceptionniste d'un hôtel", goal: "Obtenir une chambre calme pour deux nuits et savoir si le petit-déjeuner est compris." },
  { id: "restaurant", theme: "Restaurant", title: "Au restaurant", who: "serveur d'un restaurant", goal: "Commander un plat sans viande, demander ce qu'il conseille, puis l'addition." },
  { id: "interview", theme: "Interview", title: "L'entretien d'embauche", who: "recruteuse d'une entreprise", goal: "Te présenter, expliquer pourquoi tu veux ce poste et poser une question sur l'équipe." },
  { id: "travel", theme: "Travel", title: "Le vol annulé", who: "agent au comptoir d'une compagnie aérienne", goal: "Ton vol est annulé : obtenir une place sur le prochain vol, sans frais." },
  { id: "intro", theme: "Intro", title: "Faire connaissance", who: "personne que tu rencontres à une soirée chez des amis", goal: "Te présenter, trouver un point commun et proposer de se revoir." },
  { id: "shopping", theme: "Shopping", title: "Rendre un article", who: "vendeur d'un magasin de vêtements", goal: "Rendre une veste trop petite et obtenir un échange ou un remboursement." },
  { id: "health", theme: "Health", title: "Chez le médecin", who: "médecin généraliste", goal: "Décrire tes symptômes depuis trois jours et comprendre le traitement." },
  { id: "work", theme: "Work", title: "La réunion qui déborde", who: "collègue qui mène un projet avec toi", goal: "Annoncer un retard d'une semaine et te mettre d'accord sur une nouvelle date." },
  { id: "city", theme: "City", title: "Demander son chemin", who: "passant dans la rue", goal: "Trouver comment aller à la gare à pied ou en bus, et combien de temps ça prend." },
  { id: "home", theme: "Home", title: "Visiter un appartement", who: "propriétaire qui fait visiter son appartement", goal: "Connaître le loyer, les charges et négocier une date d'entrée." },
  { id: "food", theme: "Food", title: "Au marché", who: "marchand de fruits et légumes", goal: "Acheter de quoi cuisiner pour quatre personnes et demander un conseil de recette." },
  { id: "admin", theme: "Admin", title: "Ouvrir un compte en banque", who: "conseiller dans une banque", goal: "Ouvrir un compte, savoir quels papiers il faut et quand la carte arrive." },
  { id: "tech", theme: "Tech", title: "Le wifi ne marche plus", who: "technicien du service client d'un fournisseur internet", goal: "Expliquer la panne, suivre ses consignes et obtenir un rendez-vous." },
  { id: "emergency", theme: "Emergency", title: "Appeler les secours", who: "opérateur d'un numéro d'urgence", goal: "Signaler un accident de vélo : dire où tu es, ce qui s'est passé et l'état du blessé." },
  { id: "party", theme: "Party", title: "Organiser un anniversaire", who: "ami avec qui tu prépares une fête surprise", goal: "Vous mettre d'accord sur le lieu, la date et qui apporte quoi." },
  { id: "culture", theme: "Culture", title: "Parler d'un film", who: "ami qui sort du cinéma avec toi", goal: "Donner ton avis sur le film, dire pourquoi, et lui en conseiller un autre." },
  { id: "family", theme: "Family", title: "Le repas de famille", who: "parent de ton ami, qui te reçoit à dîner pour la première fois", goal: "Parler de ta famille, poser des questions sur la sienne et remercier pour le repas." },
  { id: "weather", theme: "Weather", title: "La sortie tombe à l'eau", who: "ami avec qui tu devais partir en randonnée demain", goal: "Il annonce de l'orage : décider ensemble d'un autre plan pour la journée." },
  { id: "nature", theme: "Nature", title: "Au camping", who: "gérant d'un camping", goal: "Trouver un emplacement à l'ombre pour trois nuits et savoir où faire un feu." },
  { id: "climbing", theme: "Climbing", title: "À la salle d'escalade", who: "moniteur d'une salle d'escalade", goal: "T'inscrire à un cours débutant, louer le matériel et connaître les règles de sécurité." },
];
export const sceneOf = (id) => SCENES.find((s) => s.id === id) || null;
// The mark that separates the character's line from the correction of the learner's last message (see api/ai.js).
export const FIX_MARK = "§";
// How long a conversation can get: the server refuses more, the screen offers the debrief before that.
export const MAX_TURNS = 14; // learner messages

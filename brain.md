# Contrat de gameplay — PartouTetris 0.1.6
- Monde égyptien futuriste : sauver la Terre en supprimant des anneaux de débris sur la Lune.
- Four fronts : quatre pièces simultanées; les trois autres continuent quand l'une est manipulée.
- Jeu logique : 48 secteurs continus modulo 48, 10 couronnes radiales, 7 tétriminos, rotations par pas de 90°, tangentiel, chute au centre, collisions, silhouette fantôme.
- Couronne remplie à 360° : suppression, glissement radial des couronnes extérieures vers le centre, score/combo.
- Accélération progressive lente : défaut 5 s/étage, réglage 2–8 s, progression toutes les 150 s ou via les couronnes. Pause, fin par débordement.
- État réel : première implémentation jouable en HTML Canvas embarquée dans une WebView Android sans Internet. Graphismes vectoriels de prototype ; musique électronique originale et FX synthétisés en WebAudio après geste utilisateur, volumes distincts, mute. Pas encore de sprites 3D ni de médias externes.
- Distinguer moteur testé avec Node et interface tactile à valider sur le téléphone.

- Interaction PT-004 : contact primaire maintenu = prise et glissement tangentiel ; tap rapide secondaire (autre doigt) = rotation de 90° de la pièce tenue ; relâchement du primaire = fin de prise et de chute accélérée. Pas de rotation sur simple relâchement du doigt primaire. Le bouton de rotation reste disponible.

- PT-005 : les pièces actives sont non solides entre elles en l'air. canPlace() ne consulte que la grille verrouillée ; lock() résout le placement final vers l'extérieur si un autre bloc a été posé simultanément, puis game-over si aucun logement orbital valide.
- PT-006 : décor lunaire procédural hors ligne (cratères, texture, pyramides), Terre lointaine, panneaux dorés, blocs à reflets et voiles solaires ; pas encore de textures 3D importées.

- PT-007 : verrouillage portrait Android (manifest + Activity), plateau calculé entre HUD et dock inférieur via layout.js. Pyramides déplacées près du titre, effacées de la surface lunaire ; quatre chutes conservées.

- PT-008 : award centralise vrais points et franchissements de 1000. +40 par verrouillage réussi ; gain couronne 480*n²*niveau + 100 par combo répété ; aucune récompense sur game-over.
- Festival : couronne simple bulles et 5 projecteurs ; double couronne boule à facettes et bulles ; paliers 1000 feux pendant au plus 5,6s et mini-fanfare WebAudio. Gains de pose flottants sans scène envahissante ; effets doux enregistrés et overlay transparent aux touches.

- NOM OFFICIEL : PartouTetris ; ancien dépôt PartouTeris renommé. Package interne com.greenpower2669.partouteris maintenu afin de préserver record et réglages Android.
- PT-009 : proximité du centre = base 40 + arrondi((9 - moyenne des rayons des 4 cellules) × 12). Contacts distincts avec cellules verrouillées préexistantes sur voisins polaires → 2 cases : ×2, 3 : ×3, etc., x1 pour 0 ou 1. Gain évalué avant l'écriture des blocs.
- Deuxième doigt : appui long stable 420ms = accélération de la pièce tenue, relâchement = retour normal ; tap court garde rotation à 90°. Le déplacement radial du premier doigt reste disponible.
- Terre agrandie avec position réservée sous Lune ; célébrations Block Boost réorientées de la Terre vers l'orbite ; animations douces et cinq boutons maintenus.

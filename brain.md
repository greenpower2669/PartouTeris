# Contrat de gameplay — PartouTeris 0.1.2
- Monde égyptien futuriste : sauver la Terre en supprimant des anneaux de débris sur la Lune.
- Four fronts : quatre pièces simultanées; les trois autres continuent quand l'une est manipulée.
- Jeu logique : 48 secteurs continus modulo 48, 10 couronnes radiales, 7 tétriminos, rotations par pas de 90°, tangentiel, chute au centre, collisions, silhouette fantôme.
- Couronne remplie à 360° : suppression, glissement radial des couronnes extérieures vers le centre, score/combo.
- Accélération progressive lente : défaut 5 s/étage, réglage 2–8 s, progression toutes les 150 s ou via les couronnes. Pause, fin par débordement.
- État réel : première implémentation jouable en HTML Canvas embarquée dans une WebView Android sans Internet. Graphismes vectoriels de prototype ; musique électronique originale et FX synthétisés en WebAudio après geste utilisateur, volumes distincts, mute. Pas encore de sprites 3D ni de médias externes.
- Distinguer moteur testé avec Node et interface tactile à valider sur le téléphone.

- Interaction PT-004 : contact primaire maintenu = prise et glissement tangentiel ; tap rapide secondaire (autre doigt) = rotation de 90° de la pièce tenue ; relâchement du primaire = fin de prise et de chute accélérée. Pas de rotation sur simple relâchement du doigt primaire. Le bouton de rotation reste disponible.

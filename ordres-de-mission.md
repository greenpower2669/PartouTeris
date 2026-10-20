# Ordres de mission — PartouTeris

## IMMUTABLE / À PRÉSERVER
- Dépôt canonique : `greenpower2669/PartouTeris` (orthographe vérifiée sur GitHub).
- Licence MIT existante préservée.
- Ne jamais fusionner `main` ni publier une Release définitive sans l'accord explicite de Fab.
- Fournir une APK Android directe, non enfermée dans un ZIP, et prévoir distinctement un AAB pour une future publication.
- Package Android `com.greenpower2669.partouteris` : **provisoire, non validé pour publication**.

## PT-001 — Concept quatre fronts
- **Demande de Fab, 20/10/2026 :** Lune ronde vue latéralement ; quatre cadrans de 90°, quatre pièces chutant simultanément et indépendamment sous des parachutes ; rotation et correction tangentielle ; projections semi-transparentes ; Tetris de plus en plus rapide ; couronne géodésique continue 360° qui disparaît ; effets Égypte/pharaons futuristes ; destruction de la Terre si débordement.
- **Demande de Fab :** « Ok code ça ».
- **Statut :** Prototype initial 0.1.0 codé sur branche `feature/lunar-four-fronts-001` ; APK construite, validation tactile humaine attendue.

## PT-002 — Livraison et identité Android
- Livrer une APK debug directement installable depuis GitHub Actions sans extraction ZIP sur téléphone.
- Tester Android 16 / SM-A576B.
- **Statut :** APK 0.1.0 debug créée et vérifiée dans GitHub (run #39504100261), lien direct dans README ; validation humaine sur Android 16 attendue, pas de publication Play.

## PT-003 — Descente lente et jeu vivant (21/10/2026)
- **Retour utilisateur :** « Trop rapide la descente et pa,de sons c pas gai ».
- **Action demandée :** réduire fortement la cadence et ajouter sons/musique motivants.
- **Implémentation :** v0.1.1 : 5 s/étage, vitesse réglable 2–8 s, progression lente, thème original WebAudio et sons d'interaction, curseurs indépendants et mute.
- **Statut :** Build Android et tests CI vérifiés (#39509803472), APK directe 0.1.1 disponible ; ressenti de Fab et son Android réels restent à valider.

## PT-004 — Contrôle naturel à deux mains (21/10/2026)
- Retour de Fab : « Pour moi mlus intuitif j attrape main droite et je tapote main gauche pour pivoter ».
- Contrat : un doigt de la main droite attrape et guide la pièce, le second doigt de la gauche fait tourner **la pièce tenue** par tapotements successifs sans avoir à relâcher la prise ; le second doigt ne détourne jamais la pièce sélectionnée. Bouton de rotation conservé pour un doigt.
- Statut : implémenté en 0.1.2 ; tests automatiques et build Android validés (#39513900116), APK directe disponible ; validation tactile humaine sur Samsung SM-A576B Android 16 attendue.

## PT-005 — Collision aérienne non bloquante (21/10/2026)
- **Demande Fab :** « Les block entre se bloque dàs les air il ne faut pas tans que parachute, bousculé mais continu vers le sol ».
- **Contrat :** aucune collision solide entre blocs actifs en vol ; les blocs verrouillés et le sol sont les seuls obstacles ; priorité de pose déterministe et zéro écrasement lors d'atterrissages simultanés.
- **Statut :** implémenté dans la 0.1.3 ; CI #39517259972 réussie, APK 0.1.3 directe vérifiée ; test sur téléphone encore attendu.

## PT-006 — Refonte visuelle pharaons (21/10/2026)
- **Demande Fab :** « les graphismes doivent être plus beaux que la, on dirait un poc dégeux » ; « Ok code ça ».
- **Contrat :** Lune plus volumétrique, cratères et ombrages, blocs à facettes/reflets, voiles techno-pharaoniques, fond spatial, effets d'énergie, interface plus soignée ; maintenir la lisibilité.
- **Statut :** première refonte graphique procédurale codée en 0.1.3 ; build CI #39517259972 validé ; rendu visuel réel et ressenti de Fab à valider sur téléphone.

## PT-007 — Portrait fixe et pyramides près du titre (21/10/2026)
- Source : capture Android paysage de la 0.1.3 envoyée par Fab.
- Demande explicite : « Met ça en portrait figé stp et les piramides met les plutôt vers le titre en haut ^^ ».
- Verrouillage Android portrait via manifeste et activité, plein écran maintenu.
- Le plateau doit rester entre le HUD et les boutons, jamais sous les contrôles ; l'interface portrait place les commandes sur deux rangées.
- Trois pyramides décoratives à côté du titre en haut, retirées de la texture lunaire (cratères conservés).
- Statut : code et tests validés par CI #39518335994, APK directe 0.1.4 vérifiée ; contrôle du rendu portrait sur Samsung toujours attendu.

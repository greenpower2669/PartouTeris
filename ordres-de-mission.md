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

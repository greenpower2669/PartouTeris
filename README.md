# 🌙 PartouTetris — Les Pharaons de la Lune

## Prototype Android 0.1.9 — deux phases de descente et satellites pyramidaux

Retour utilisateur (21 octobre 2026) : rétablir des parachutes **très discrets dans la zone lunaire seulement**, s'inspirer de l'icône officielle PartouTetris et de l'illustration des pharaons et pyramides-satellites pour l'esthétique.

- **Espace lointain (r ≥ 10) :** pièces enflammées sur quatre étapes radiales hors de la grille ; aucun parachute.
- **Zone lunaire (0 ≤ r < 10) :** le bloc active une **petite voile de stabilisation** cyan et or semi-transparente (6 à 11 px, fils très fins), en conservant sa forme et sa maniabilité. La voile ne participe pas aux collisions et ne ralentit pas artificiellement le moteur.
- **Satellites terrestres :** les trois anciens modules rectangulaires sont redessinés dans l'univers du concept : silhouettes de **pyramides dorées** à facettes, base à anneau cyan lumineux, propulsion subtile. Trois lasers convergent toujours vers la cible visée.
- **Identité artistique :** bleu nuit spatial, cyan technologique, lueurs dorées, ambiance pharaons futuristes, fines orbites terrestres. Reprise de l'icône originale dans Android et près du titre, sans remplacer son fichier.
- **La Lune ne porte aucune pyramide.** Les pyramides sont uniquement dans le logo et les satellites hors de la Lune.
- Tout le gameplay conservé : quatre fronts, mode portrait, tirs, score et podium, pseudo, combo et célébrations, double tactile, réglages et musique.
- Un mode d'effets visuels doux reste disponible.

### APK Android installable
Après validation du build GitHub Actions, APK brute sans archive ZIP :
[PartouTetris-v0.1.9-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTetris/feature/lunar-four-fronts-001/temp/PartouTetris-v0.1.9-debug.apk).

Source : `greenpower2669/PartouTetris`, branche `feature/lunar-four-fronts-001`. Ne jamais fusionner `main` ou publier une Release sans validation explicite. Package `com.greenpower2669.partouteris` et préférences historiques conservés.

Tests : `node --test tests/*.test.cjs`; build Android `gradle :app:assembleDebug`.

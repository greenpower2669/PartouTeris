# TODO — PartouTetris
- [x] Identifier le vrai dépôt `greenpower2669/PartouTetris` et lire son état.
- [x] Créer la branche `feature/lunar-four-fronts-001` sans modifier main.
- [x] Implémenter grille polaire et quatre pièces simultanées.
- [x] Ajouter commandes tactiles, ghosts, graphismes provisoires, score, pause.
- [x] Préparer l'application Android et son icône.
- [x] Ajouter tests Node et workflow de génération d'APK directe.
- [x] Build et tests verts : GitHub Actions run 39504100261 ; APK direct vérifié (16 005 octets) dans `temp/PartouTetris-v0.1.0-debug.apk`.
- [ ] Tester l'APK sur SM-A576B Android 16, ajuster contrôle/police/contraste selon retour Fab.
- [ ] Valider les règles de concurrence de pièces sur la frontière de deux cadrans.
- [ ] Ajouter les FX sonores, animations pyramidales, aides tactiles réglables et réglages d'accessibilité.
- [ ] Valider avec Fab le package Android avant toute publication Play Store ; AAB signé plus tard.
- [ ] Ne pas fusionner main ou publier de Release définitive sans validation explicite.

## PT-003 — Descente/audio 0.1.1
- [x] Ralentir la chute initiale et ajouter contrôle de vitesse sauvegardé.
- [x] Produire une musique de fond synthétique originale sans accès réseau.
- [x] Effets rotation, déplacement, collision, couronne, game over ; volumes indépendants et mute.
- [x] Déclenchement WebAudio après un geste de démarrage explicite.
- [x] Tests et compilation APK 0.1.1 validés par GitHub Actions #39509803472 ; fichier brut `temp/PartouTetris-v0.1.1-debug.apk` vérifié (20 206 octets).
- [ ] Tester la nouvelle vitesse et l'audio réellement sur SM-A576B Android 16.
- [ ] Selon retour Fab, enrichir FX pharaons/pyramides avec les ressources partagées (sans créer de dépendance obligatoire).
- [x] Adapter le test de gravité à la nouvelle durée (ancienne hypothèse 0,82 s incompatible avec 5 s).

## PT-004 — Tactile à deux mains
- [x] Attraper et guider d'une main pendant que l'autre tapote pour pivoter la pièce tenue.
- [x] Bloquer les rotations accidentelles sur glissement/maintien du second doigt et relâchement du doigt principal.
- [x] Préserver commandes alternatives, pause, son et sauvegardes.
- [x] Ajouter six scénarios de test sur les deux doigts.
- [x] Build et tests verts dans GitHub Actions #39513900116 ; APK directe vérifiée : `temp/PartouTetris-v0.1.2-debug.apk` (21 283 octets).
- [ ] Confirmer ressenti et multitouch réel sur SM-A576B Android 16, puis ajuster seuils si nécessaire.

## PT-005 et PT-006 — Version 0.1.3
- [x] Retirer les collisions entre pièces aériennes, sans supprimer les collisions sol/blocs verrouillés.
- [x] Déterminiser les poses synchronisées et empêcher l'écrasement de blocs.
- [x] Ajouter tests moteur pour croisements, contact et débordement.
- [x] Refaire les décors lunaires et pyramides, les cellules, les voiles, les halos et le HUD en rendu procédural.
- [x] GitHub Actions #39517259972 : tests Node et build Android réussis ; APK brute vérifiée dans `temp/PartouTetris-v0.1.3-debug.apk` (25 278 octets).
- [ ] Valider qualité, lisibilité et cadence sur Samsung SM-A576B.
- [ ] Enrichir textures/sons et affiner les effets suivant le ressenti Fab, sans changer le concept.

## PT-007 — Portrait et titre
- [x] Verrouiller Android en portrait via manifeste et activité.
- [x] Adapter géométrie lunaire au rectangle central libre.
- [x] Réorganiser les cinq boutons en deux rangées sans recouvrir le jeu.
- [x] Déplacer les pyramides près du titre et nettoyer la texture lunaire.
- [x] Ajouter tests Node orientation et géométrie aux tailles portrait.
- [x] CI GitHub Actions #39518335994 réussie (tests Node + compilation Android) ; APK directe vérifiée `temp/PartouTetris-v0.1.4-debug.apk` (26 736 octets).
- [ ] Valider visuellement sur SM-A576B Android 16 avec une nouvelle capture.

## PT-008 — Score et célébrations 0.1.5
- [x] Récompenser pièces posées, couronnes et combos réels.
- [x] Afficher +40 flottants, bulles et projecteurs sur couronnes.
- [x] Boule à facettes aux doubles couronnes et feux d'artifice à chaque 1000 points.
- [x] Fanfare WebAudio indépendante du fond musical, mode visuel doux.
- [x] Préserver portrait, quatre chutes, tactile 2 mains, sauvegardes.
- [x] Ajouter tests des scores, seuils et animations.
- [x] CI GitHub Actions #39521425766 verte (tests Node et compilation Android), APK directe 0.1.5 vérifiée dans temp/ (31 036 octets).
- [ ] Tester l'affichage des scores, des animations et des sons sur Samsung SM-A576B Android 16.

## PT-009 — Version 0.1.6 / nom officiel PartouTetris
- [x] Préserver le nom corrigé dans le titre, le dépôt, l'APK, Android, Actions et les mémoires.
- [x] Agrandir la Terre, préserver une place dédiée, créer trajectoires de célébration Terre → Lune.
- [x] Valoriser placement près du centre et multiplicateur xN par N cellules déjà posées voisines.
- [x] Appui long stable du second doigt pour chute rapide, tap bref conservé pour tourner.
- [x] Couvrir les nouveaux comportements par tests Node, sans désactiver les tests précédents.
- [x] CI GitHub Actions #39573299164 réussie après correction Bézier des continents ; tests Node + build Android, APK 0.1.6 brute vérifiée, 33 060 octets.
- [ ] Tester physiquement sur Samsung SM-A576B Android 16 : taille Terre, audio, récompenses, gestes 2 doigts.

## PT-010 — Android 0.1.7
- [x] Déplacer gains flottants et panneau du dernier gain dans la bande libre sous la Lune.
- [x] Grand score en haut sur toute la largeur, trois meilleurs scores immédiatement dessous.
- [x] Local highscore top 10 avec migration de l'ancien record et pseudo éditable en options.
- [x] Traînées de flammes sur les quatre débris entrants, tout en conservant les voiles.
- [x] Tir laser depuis Terre vers une pièce, rotation et éventuelle correction tangentielle si collision libre ; mode explicite.
- [x] Sons laser et respect du mode visuel doux ; anciens contrôles préservés.
- [x] Tests Node pour pseudo, classement, collisions laser et interfaces.
- [x] CI GitHub Actions #39578438005 : tests Node et compilation Android réussis ; APK brute PartouTetris-v0.1.7-debug.apk vérifiée sur branche (37 691 octets).
- [ ] Tester intuitivité lasers, lisibilité haut/bas et sensation des flammes sur SM-A576B Android 16.

## PT-011 — 0.1.8 / direction artistique corrigée
- [x] Remplacer l'icône Android de prototype par l'icône authentique de Fab (WebP optimisé).
- [x] Afficher l'icône d'origine à côté du titre.
- [x] Déplacer le spawn quatre étapes en dehors des anneaux, sans collisions aériennes supplémentaires.
- [x] Rendre les blocs extérieurs effectivement visibles et enflammés.
- [x] Supprimer tous les parachutes du jeu, sans retirer le motif de l'icône originale.
- [x] Dessiner trois satellites autour de la Terre et faire converger leurs lasers vers la cible.
- [x] Conserver une Lune à cratères, sans pyramides.
- [x] GitHub Actions #39591033182 : tests Node et APK Android 0.1.8 validés ; fichier direct vérifié (47 265 octets). Icône WebP exacte contrôlée par le SHA Git `e0eedc703359d7e27be9501b0f3c67bec1186229` dans Android + assets.
- [ ] Confirmer esthétique, espaces, lasers, fluidité sur SM-A576B Android 16.

## PT-012 — 0.1.9 Pharaonites et parachutes légers
- [x] Parachutes discrets uniquement à l'intérieur des 10 couronnes ; jamais dans l'espace.
- [x] Voiles cyan/or semi-transparentes, petites et dessinées sous les cellules.
- [x] Refonte des trois satellites vers des pyramides spatiales dorées à propulsion cyan.
- [x] Ajouter orbites cyan/or autour de la Terre, sans pyramide sur la Lune.
- [x] Préserver flammes hors zone, collisions, lasers, score, highscore, tactile et musique.
- [x] Tests Node sur transition des deux phases et intégration des trois satellites pyramidaux.
- [x] GitHub Actions #39594087561 : tests Node, compilation Android et publication APK brutes réussis. Fichier direct vérifié `temp/PartouTetris-v0.1.9-debug.apk` (48 461 octets).
- [ ] Essai réel SM-A576B : élégance, taille et visibilité des voiles, trois lasers satellites, nouvelles lumières.

## PT-013 — Charte, musique, lasers (0.2.0)
- [x] Lire les mémoires, auditer les commandes, la branche, le packaging et la médiathèque Djipie.
- [x] Copier par objet Git exact la charte officielle dans `design/charte-officielle.png`, indépendamment de l'interface.
- [x] Intégrer par objet Git le MP3 officiel dans les assets Android, mettre les volumes/mute/boucle et le secours audio exclusif.
- [x] Refiner les panneaux/titre/score avec or et cyan, rendre l'aide droite/gauche compacte et lisible, préserver toutes les commandes.
- [x] Ajouter la charge lumineuse des satellites et un effet laser à plusieurs phases ; sans média privé.
- [x] Mettre version Android et noms d'APK 0.2.0, ajouter des tests de ressources et de rendu.
- [ ] Vérifier GitHub Actions, tests Node, construction et dépôt direct `temp/PartouTetris-v0.2.0-debug.apk`.
- [ ] Valider visuellement l'APK sur Samsung avec le PNG officiel (charte non directement prévisualisable via l'API binaire ici) ; ajuster textures, Terre, Lune, satellites et HUD si nécessaire.
- [ ] Écouter le MP3 en entier et vérifier sa boucle sans blanc perceptible. Valider les effets laser avec Fab.
- [ ] Examiner provenance et droits de chaque son Djipie avant éventuelle intégration individuelle au dépôt public ; aucun son privé automatiquement redistribué.
- [ ] Préserver `main`, package, données locales, et publier Release/AAB uniquement après accord de Fab.

- [x] #39627108353 : tests Node, Android Gradle et APK brut 0.2.0 vérifiés après reprise du modèle Terre/horizon.
- [x] Aperçu de la véritable charte graphique généré et inspecté ; correction des proportions terre et disposition 5 boutons.
- [ ] Contrôler capture du rendu réel par Chromium CI (si disponible), puis test visuel/tactile/sonore sur Samsung.

- [x] Capturer le vrai rendu Chromium ; détecter HUD score tronqué et laser sur consignes ; correctifs DOM/CSS appliqués.
- [ ] Vérifier le nouvel aperçu Chromium après correction du panneau de score, du bouton laser et de l'aide tactile.

- [x] Corriger assertion PT-013 inutilement échouée à cause d'une échappement dans la regex du test ; relancer CI et vérifier capture actualisée.

## PT-013 — Contrôle de clôture technique (21/10/2026)
- [x] **GitHub Actions #39628651992 : succès** (65+ tests Node, Gradle, APK directe et aperçu Chromium).
- [x] **APK brute vérifiée** : `temp/PartouTetris-v0.2.0-debug.apk` (8 782 536 octets, SHA Git `01e56c4ae65ca8fd0f5ea7be2b98d22aeb07c997`).
- [x] Capture réelle du rendu sur navigateur sous `design/rendu-jeu-apercu.jpg` ; panneau score 100 % et LASER sans recouvrement de l'aide confirmés par inspection.
- [ ] Valider la fidélité fine de la charte par Fab : jeu actuel = refonte graphique codée fonctionnelle mais encore moins photoréaliste que le PNG fourni (Terre, nébuleuses, météorites).
- [ ] Écoute réelle du MP3 complet et de sa jonction en boucle, latence et sons laser sur Android 16 ; aucun test matériel humain effectué ici.
- [ ] Définir une sélection Djipie dont provenance et licence sont vérifiées individuellement puis intégrer uniquement ces sons autorisés (aucun son privé recopié actuellement).
- [ ] Vérifier visuellement, tactilement et en performance l'APK sur Samsung SM-A576B. AAB de publication et merge main non autorisés avant validation.

## PT-014 — Correction annonces de score (21/10/2026)
- [x] Auditer screenshot et identifier `#scoreBurst .fx-banner`, `floatScore` et `#pointFeed` comme trois sources de recouvrement.
- [x] Annonces de palier/couronne uniquement dans le HUD supérieur, sans changer sa hauteur ; cacher le podium au lieu du plateau pendant la scène.
- [x] Gains ordinaires dans la ligne du classement en haut, petite bulle courte, aucune création de textes flottants sur la Lune.
- [x] Tests de confinement et simultanéité ajoutés, identité Android et paramètres préservés ; version cible 0.2.1.
- [ ] Exécuter tests Node et Gradle GitHub Actions, valider capture Chromium, vérifier fichier `temp/PartouTetris-v0.2.1-debug.apk` brut.
- [ ] Vérifier lisibilité au niveau 5 avec couronnes remplies, petits écrans et double tactile sur Samsung.
- [ ] Écouter boucle de musique officielle MP3 sur Samsung pour certifier que le raccord est inaudible.

### PT-014 — Livraison automatisée vérifiée
- [x] Run GitHub Actions **#39644183018 = success** : tests Node (dont placement des annonces), Gradle, génération APK brute.
- [x] APK directe **`temp/PartouTetris-v0.2.1-debug.apk`**, 8 783 364 octets, blob Git SHA `227577f65bdd14fd61996d22e7c5deca160d6b07` (confirmé sur branche).
- [x] Aperçu portrait Chromium actuel `design/rendu-jeu-apercu.jpg` inspecté : aucune annonce au centre au repos, interface intacte.
- [ ] Test Samsung avec franchissement de 20 000 points et combos pour vérifier l'effet *en situation* ; continuité perceptive de la boucle MP3 à écouter.

## PT-015 — Meilleur score de Pharaonite et Tous3nKamion
- [x] Nouveau libellé « MEILLEUR SCORE DE PHARAONITE » dans le HUD.
- [x] Nouveau pseudo par défaut « Tous3nKamion » dans le code et le champ de réglages.
- [x] Migration de l'ancien défaut, sans changement des records/personnalisations sauvegardés.
- [x] Tests du pseudo et de la préservation des scores. Version Android 0.2.2.
- [ ] Vérifier compilation Actions et APK brute `temp/PartouTetris-v0.2.2-debug.apk`.
- [ ] Vérifier le libellé et pseudo sur SM-A576B.

### PT-015 — Validation technique finale
- [x] Exécution GitHub Actions [#39647494324](https://github.com/greenpower2669/PartouTetris/actions/runs/39647494324) : **success** (tests Node et APK Android).
- [x] Fichier non compressé `temp/PartouTetris-v0.2.2-debug.apk` vérifié (8 783 572 octets ; SHA blob Git `07ada0aa7d5a00acf77dce04c42319d39f4f9048`).
- [x] Aperçu portrait `design/rendu-jeu-apercu.jpg` inspecté : « MEILLEUR SCORE DE PHARAONITE » et « Tous3nKamion » visibles sans chevauchement du plateau.
- [ ] Validation sur Samsung du pseudo migré et des anciens records sur une installation existante.

## PT-016 — Bannière arcade en CODE 0.2.3
- [x] Conserver le HUD vrai DOM et les clés de records, pseudo, score et classement.
- [x] Titre doré, O lunaire en CSS, quatre tétriminos de 4 carrés et carénage cyan/or en CSS responsive.
- [x] Score géant live or + meilleur score Pharaonite live cyan ; annonce PT-014 et classement restant accessibles.
- [x] Tests statiques du module bannière, version Gradle et chemin APK 0.2.3.
- [ ] Valider tous les tests Node, GitHub Actions Gradle et fichier `temp/PartouTetris-v0.2.3-debug.apk`.
- [ ] Examiner le rendu Chromium de 0.2.3 et ajuster si chevauchement ou réduction du plateau.
- [ ] Essai réel SM-A576B Android 16 avant publication, `main` intacte.

### PT-016 — Vérification finale (21/10/2026)
- [x] Build GitHub Actions [#39655192888](https://github.com/greenpower2669/PartouTetris/actions/runs/39655192888) réussi : tests Node + Gradle et capture portrait Chromium.
- [x] APK brute vérifiée : `temp/PartouTetris-v0.2.3-debug.apk`, 8 787 418 octets (Git blob SHA `d634edadaa9f9f46661b44b1c3838f69255055bd`).
- [x] Capture `design/rendu-jeu-apercu.jpg` inspectée : quatre tétriminos néon, titre or avec O-Lune agrandi, panneau score et meilleur score Pharaonite visibles, anneaux lunaires et boutons libres.
- [x] Correction d'effondrement Flex du titre (`flex:0 0 auto`), agrandissement du mot titre et meilleure taille de score.
- [ ] Tester réellement l'esthétique et la lisibilité avec Fab sur SM-A576B, notamment en cours de partie avec score > 10 000 et top 3 rempli.
- [ ] Valider l'audio MP3 réel et le comportement multitouch en conditions Samsung ; `main` inchangée.

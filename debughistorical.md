# Débogage — PartouTetris
## PT-001, 20/10/2026
- Dépôt neuf, seuls README et LICENSE présents lors de l'audit.
- Problèmes à vérifier en conditions réelles : maniabilité sur écran tactile Android, collisions au raccord 0°/360°, simultanéité de plusieurs contacts, comportement de WebView Android 16, performance Canvas et signature APK debug.
- Vérifications initiales : tests purs du moteur (sans Android) exécutés pendant le développement.
- CI initiale : `android-actions/setup-android@v3` a échoué sur `sdkmanager tools` (package obsolète). Contournement initial par appel direct `sdkmanager` ensuite en échec, commande absente du PATH.
- Correctif vérifié : localisation de `sdkmanager` dans `$ANDROID_HOME/cmdline-tools/` du runner, puis installation SDK 35.
- Preuve : run GitHub Actions #39504100261 **success**, avec tests Node, compilation Android, upload artifact et copie directe APK dans `temp/`.
- Reste non testé : installation et contrôles réels sur Android 16 / SM-A576B.

## PT-003 — Retour téléphone, 21/10/2026
- Symptôme confirmé par Fab : quatre descentes trop rapides ; aucun son et ambiance peu vivante.
- Cause de vitesse dans la 0.1.0 : intervalle initial codé à 0,82 seconde par case radiale, avec quatre fronts simultanés : trop peu de temps de décision.
- Correction de code 0.1.1 : intervalle initial 5,0 secondes (réglable 2–8 s), palier de progression tempéré, FX et musique WebAudio originaux.
- Risque à tester : WebAudio nécessite un geste Android ; activé par écran de démarrage explicite. Performance et volumes réels à vérifier.

- CI premier essai 0.1.1 : 14 tests / 15, échec d'un ancien test qui attendait une chute après seulement 1,08 s. Contrat modifié : 5 s/étage ; test corrigé pour vérifier l'absence de chute à 1,08 s et une chute après 5 s. Ce n'était pas une panne moteur.

- Correction complémentaire : un toucher ne doit pas remettre l'horloge musicale à zéro ; test mock WebAudio ajouté.
- CI finale 0.1.1 #39509803472 : tests Node et build Android réussis, fichier `temp/PartouTetris-v0.1.1-debug.apk` confirmé (20 206 octets). Un build intermédiaire a échoué uniquement lors du push de l'APK à cause de builds parallèles ; le dernier a réussi.
- Audio réel sur téléphone toujours **à valider**, pas de conclusion tirée du simple build.

## PT-004 — Retour ergonomique, 21/10/2026
- Observation : le geste de rotation sur un tap du doigt principal obligeait à lâcher le contrôle. Fab préfère attraper/déplacer de la droite tout en tapotant de la gauche pour pivoter.
- Changement : `touch.js` garde le doigt primaire responsable de la prise et donne aux taps rapides d'un autre doigt la seule commande de rotation. Un contact secondaire ne sélectionne plus un autre front. Les gestes secondaires glissés, longs ou annulés ne pivotent pas ; si la prise se termine avant le tap, celui-ci est annulé.
- À vérifier sur téléphone : double tactile WebView Samsung, sensibilité des 26 px / 360 ms, possibilité de manipuler les quatre cadrans sur écran paysage.

- Vérification livraison PT-004 : GitHub Actions #39513900116 réussie, compilation Android et tests Node verts ; `temp/PartouTetris-v0.1.2-debug.apk` confirmée (21 283 octets). Essai humain non encore effectué.

## PT-005/PT-006 — 21/10/2026
- Bug rapporté par Fab : les pièces sous parachute se bloquent mutuellement **en l'air** ; cause confirmée par lecture : `canPlace()` comparait chaque case aux quatre pièces actives, ce qui gelait leur descente.
- Correctif : `canPlace()` ignore les pièces aériennes et consulte seulement les blocs définitivement posés ; `landingRadius()` résout les arrivées concurrentes avant écriture sur le plateau et ne permet plus d'écrasement.
- Visuel : rendu Canvas initial trop minimal (petite Lune, arcs unis, parachute filaire) ; remplacé par art procédural hors ligne, cratères/pyramides ombrés, cellules réfléchissantes et HUD métallique.
- Tests CI et performances/ergonomie Android réelles restent à vérifier.

- Preuve technique PT-005/PT-006 : GitHub Actions #39517259972 réussie (tests Node, compilation Android, copie Git du fichier). APK `temp/PartouTetris-v0.1.3-debug.apk` vérifiée, 25 278 octets. Les rendus sur appareil ne sont pas encore observés.

## PT-007 — Capture paysage 0.1.3 (21/10/2026)
- Problème constaté sur la capture fournie : plateau immense en paysage, fond du cercle caché sous les cinq boutons horizontaux ; pyramides posées sur la Lune alors que Fab les veut près du titre.
- Résolution : portrait Android forcé, mise en page HUD/cercle/commandes en trois zones avec bornes calculées depuis les rectangles DOM. Pyramides en icône SVG près du titre, cratères lunaires laissés libres.
- Risques à confirmer sur Samsung : taille réelle des boutons, zones tactiles et disponibilité de l'espace pour les quatre voiles en portrait.

- CI PT-007 : run #39518335994 **success**, tests Node, build Android et publication APK brute de 26 736 octets dans `temp/PartouTetris-v0.1.4-debug.apk`. Aucune fusion `main` ; capture réelle du mode portrait en attente.

## PT-008 — Récompenses (21 octobre 2026)
- Lacune 0.1.4 : aucun score au placement ; célébrations trop rares.
- Correctif : points calculés uniquement à la pose solide (+40), combo de couronnes réelles, palier 1000 détecté une seule fois même en cas de jackpot.
- Scènes inspirées de Block Boost, mais synthèse graphique/sonore autonome ; pas de fichiers audio privés.
- Animation limitée, option douce, pas de stroboscope et overlay pointer-events:none. Tests et rendu réel sur Samsung à confirmer.

- Livraison 0.1.5 vérifiée : GitHub Actions #39521425766 success (tests et Gradle), fichier brut temp/PartouTetris-v0.1.5-debug.apk : 31 036 octets. Aucune fusion main ; démonstration visuelle et audio réelle à vérifier sur téléphone.

## PT-009 — 21 octobre 2026
- Renommage confirmé du dépôt PartouTeris vers **PartouTetris**, avec correction du titre, de l'APK et de la documentation. Package Android com.greenpower2669.partouteris non modifié pour maintenir l'installation/sauvegarde.
- Nouvelle règle score : proximité du centre + contacts avec cases verrouillées préexistantes (distinctes), 2 → ×2, 3 → ×3 ; aucun bonus artificiel pour cellules nouvelles ni Lune elle-même.
- Tactile : tap secondaire < 360ms tourne ; appui secondaire stable ≥420ms accélère et n'entraîne pas de rotation ; test d'annulation au relâchement.
- Visuel : Terre plus grande dans espace sous Lune, particules / faisceau sortant de la Terre, non interceptant, préférence effets doux conservée.
- Tests et compilation 0.1.6 à contrôler avant d'annoncer une APK.

- CI et sortie finales : GitHub Actions #39573299164 success (tests Node, Android, dépôt APK directe). Fichier temp/PartouTetris-v0.1.6-debug.apk 33 060 octets. Correctif supplémentaire : 6 coordonnées aux appels Bézier de la Terre pour éviter une exception Canvas au rendu. main non fusionnée ; vérification sur téléphone encore nécessaire.

## PT-010 — Score, leaderboard, pseudo et lasers (21/10/2026)
- Observation : manque de hiérarchie du score en tête et petits gains de points couvrant les pièces au lieu de s'afficher en bas.
- Modifications : affichage score plein bandeau, podium top 3 local, pseudo paramétrable et sauvegardé, migration du record individuel historique ; aucun service externe.
- Débris en flammes : nouvel effet procédural limité à la phase haute de chute ; aucune collision ni vitesse modifiée.
- Lasers : sélection de la cible proche seulement lorsque mode laser activé ; rotation 90° et poussée d'un secteur en cas de visée latérale, respect strict des blocs verrouillés ; son et faisceau Canvas depuis la Terre ; cooldown 420 ms.
- Tests intégration, performances et gestes Android réels nécessaires avant validation finale.

- Preuve livraison PT-010 : GitHub Actions #39578438005 **success**, tests Node, compilation Android, dépôt APK directe (37 691 octets) sous temp/PartouTetris-v0.1.7-debug.apk. main inchangée. Ergonomie du podium, pseudo, lasers et flammes à confirmer sur téléphone.

## PT-011 — Corrections conceptuelles (21/10/2026)
- Écart avec demande : la précédente réponse a généré une nouvelle illustration au lieu de coder. Fab réclame un **APK de jeu corrigé**, et sa propre icône doit servir à l'application.
- Cause : `spawn` à RINGS+1, cellules dessinées seulement sur r<10, parachute toujours rendu, laser depuis l'objet Terre unique.
- Correction : apparition à RINGS+4, cellules rendues jusqu'à r<16 avec compression de l'espace, traînée de flammes en phase spatiale ; parachute entièrement retiré, 3 satellites terrestres affichés et 3 rayons par tir, visée et scoring conservés.
- Lune sans pyramides (elles figurent dans l'icône et près du titre seulement). Tests et rendu téléphone à valider.

- PT-011 CI finale : première tentative échouée à cause d'une ancienne assertion `radial<4.5` non mise à jour vers `radial<9` ; corrigée. Deuxième passage détection d'une variation lors de la transcription binaire WebP optimisée ; l'icône a été corrigée en confrontant les blocs encodés à l'original et SHA Git exact `e0eedc703359d7e27be9501b0f3c67bec1186229`. Test d'empreinte ajouté et vert.
- **Build final réussi GitHub Actions #39591033182** : tests Node, compilation Gradle, APK directe `temp/PartouTetris-v0.1.8-debug.apk` vérifiée à 47 265 octets. `main` non fusionnée. Essai tactile/visuel Samsung encore à faire.

## PT-012 — Nouvelle convention parachutes après phase spatiale (21 octobre 2026)
- Précision de Fab : le retrait total des parachutes (PT-011) était trop radical. Ils doivent revenir **uniquement dans la zone lunaire**, en taille plus discrète.
- Ancien test « No parachutes » est remplacé par tests sur la règle r<10 ; logique des collisions inchangée. Petite voile cyan/or à fils discrets, sans capsule massive.
- Les satellites rectangulaires du prototype ne représentaient pas suffisamment les deux dernières références : remplacés par **pyramides-satellites dorées**, anneaux de propulsion cyan. Orbits fines ajoutées autour de la Terre ; aucun objet pyramidal ajouté à la Lune.
- À valider : cohérence visuelle sur petit écran Samsung Android 16, non-obstruction des blocs, phonophobie/contrastes ; CI et APK en attente.

- PT-012 : validation technique GitHub Actions #39594087561 **success** (tests Node, Android Gradle, artifact et push de l'APK directe). Fichier `temp/PartouTetris-v0.1.9-debug.apk` présent, 48 461 octets. `main` non fusionnée ; ressenti esthétique et commandes sur Samsung à valider.

## PT-013 — Première intégration officielle 0.2.0 (21/10/2026)
- Image PNG (2,6 Mio) et musique MP3 (8,7 Mio) déjà déposées sur `main`. Le canal de consultation du contenu binaire n'a pas permis de visualiser le PNG ni d'écouter le MP3 directement. Import fiable par référence de leurs blobs SHA Git exacts dans la branche de travail ; aucun réupload, aucune modification de `main`.
- Référence graphique non directement visible pendant cette session : fidélité fine non vérifiée visuellement. Conservé comme source entière sans l'utiliser comme image plaquée sur le Canvas. Interface et cadrans améliorés par code indépendant ; comparaison avec Fab indispensable.
- Audio : HTMLAudioElement local en boucle après un geste, fallback WebAudio seulement en cas de fichier/lecture indisponible ; joindre une lecture réelle sur Samsung pour contrôler latence, gap à la boucle et niveau de fond.
- Sons Djipie : index consultés, nombreuses sources privées, droits unitaires/identité de provenance insuffisamment vérifiés ; aucun son préexistant copié en public. Laser synthétique construit en couches, non assimilé abusivement à des prises sonores réalistes certifiées.
- Statut CI 0.2.0 et install Android : **à vérifier** avant de confirmer une APK finale.

- PT-013 : une miniature GitHub CI a permis d'examiner la charte authentique : Terre occupante massive, titre or centré et cinq commandes sur une rangée. La refonte Terre/horizon correspondante a passé CI #39627108353 ; le rendu écran reste à comparer et valider sur Android.

- PT-013 capture headless Chromium 412x915 obtenue, `design/rendu-jeu-apercu.jpg` : deux écarts avérés malgré CI verte : scoreboard étroit à cause du max-width de `#hud .scoreboard` et LASER flottant recouvrant partiellement consignes. Correctifs : scoreboard forcé width/max-width 100%, bouton LASER intégré au panneau d'aide avec pointer-events réactivés uniquement pour lui. Nouveau contrôle sur image CI requis.

- CI b4ee2e6 (#39628428178) : une unique assertion du nouveau test PT-013 a échoué : l'expression régulière du test utilisait `\\s` au lieu de `\s`, sans échec de compilation ni bogue runtime prouvé. Correctif du test par séparation DOM textuelle plutôt que regex échappée ; build à revalider. L'APK 0.2.0 précédent reste disponible.

## PT-013 — Résultat final CI provisoire (21/10/2026)
- **Exécution #39628651992 = success** : 0.2.0 construite, APK brute 8 782 536 octets dans `temp/`. SHA Git `01e56c4ae65ca8fd0f5ea7be2b98d22aeb07c997`.
- Vrai snapshot Chromium `design/rendu-jeu-apercu.jpg` : score de nouveau plein format et LASER intégré au panneau d'aide, sans chevauchement. Comparaison avec la charte PNG : style or/cyan, Terre large, Lune et trois satellites reconnaissables ; photo-réalisme du modèle et densité des décors encore inférieurs à l'illustration. Ne pas marquer fidélité 1:1 achevée.
- **Différence vérifiable :** CI garantit syntaxe, tests moteur et compilation ; elle ne garantit ni qualité audio perceptive, ni performance/gestes réels sur SM-A576B. Pas de sons privés Djipie embarqués sans autorisation documentaire.

## PT-014 — Annonces masquant le plateau (21/10/2026)
- Preuve : capture réelle Fab 0.2.0, score 20 319, niveau 5 ; la bannière « 20 000 POINTS ! » traverse le centre lunaire et « GAIN +484 ×4 » chevauche le bas des anneaux.
- Cause isolée dans le code : `Festival.show` ajoutait `.fx-banner` à `#scoreBurst` qui définissait `left:var(--fx-x)` et `top:var(--fx-y)` au centre du jeu ; `Festival.floatScore` créait des nodes sous le plateau ; `index.html` positionnait `#pointFeed` à proximité du bord lunaire.
- Solution : bannière dans un hôte absolu *interne* au scoreboard, gain court sur sa ligne de titre, timers bornés et nettoyage ; aucun changement de géométrie du moteur ni du comportement des sons. Vérification CI/capture requise.

- **PT-014, preuve finale :** Actions #39644183018 **success** après mise à jour de l'ancienne assertion PT-010 devenue obsolète ; APK 0.2.1 brute vérifiée 8 783 364 octets. La nouvelle capture Chromium confirme le HUD au repos ; pas de capture d'événement réel au palier 20 000, donc test tactile visuel humain ouvert. La musique officielle conserve `HTMLAudioElement.loop=true` et doit être écoutée jusqu'à son raccord pour confirmer l'absence de blanc audible.

## PT-015 — Pseudo et titre de classement (21/10/2026)
- Fab précise qu'il ne demande pas une nouvelle récompense en jeu mais le **libellé du meilleur score de Pharaonite** et un **pseudo par défaut Tous3nKamion** (Toutânkhamon).
- Ancien défaut `PHARAON` dans `cleanName`, constructeur, fallback et placeholder. Correction des textes ; `partoutetris-leaderboard-v1`/`partouteris-record` et scores historiques conservés. L'ancien défaut exact est migré à la lecture. Une ancienne valeur personnalisée exactement « PHARAON » n'est pas distinguable du défaut d'origine.

- **PT-015 CI finale :** #39647494324 success, APK directe v0.2.2 présente sur branche (8 783 572 octets). Capture Chromium portrait vérifiée : libellé complet, pseudo exact sans obstruction du jeu. Tests de conservation des scores et de migration de l'ancien défaut exécutés en CI. Installation réelle Android à valider.

## PT-016 — Changement de spécification confirmé (21/10/2026)
- La demande « Notre bannière est triste, tu peux faire comme celle-là ? » concerne le **HUD intégré dans le logiciel**, et non une image générée. Fab corrige explicitement « Non, en code ^^ » après proposition d'image.
- Solution : composition CSS sans asset externe `hud-pt016.css`, vraie typographie dorée et tranches de néon, quatre tétriminos construits chacun de quatre carrés HTML, mini-Lune CSS dans le O à l'exécution, score, pseudo et meilleur score reliés aux données.
- Préserver impérativement l'espace de plateau par layout mesuré DOM et éviter tout modèle statique impossible à actualiser.

- PT-016 CI #39654253505 success mais capture Chrome révèle un bug de rendu : la marque est écrasée à hauteur quasi nulle. Cause CSS : ancien `flex:1 1 66%` en contexte colonne, alors que tous les enfants de la marque sont désormais absolus => taille intrinsèque zéro ; `height` ne fixe pas la base flexible. Correctif `flex:0 0 auto` et min-height adaptatif. Nouvelle capture nécessaire avant livraison.

## PT-016 — Livraison en CODE, CI et examen visuel (21/10/2026)
- Correction du bandeau finale v0.2.3 : HTML/CSS/JS sans image plaquée, score et record dynamiques, titre gold PART🌕UTETRIS et quatre tétriminos CSS.
- Premier rendu CI #39654253505 : succès technique mais bandeau masqué par effondrement Flex (tous enfants absolus) ; correctif `flex:0 0 auto` CI #39654800396 succès, visuel visible ; taille titre et score augmentée.
- Run final **#39655192888 success**, screenshot `design/rendu-jeu-apercu.jpg` inspecté : titre or lisible, mini-lune, tétriminos lumineux, scoreboard intact ; plateau et commandes restent exposés.
- `temp/PartouTetris-v0.2.3-debug.apk` brute 8 787 418 octets (Git blob SHA `d634edadaa9f9f46661b44b1c3838f69255055bd`). Confirmation tactile Android réelle et fidélité esthétique finale à recueillir auprès de Fab.

## PT-017 — Descente et distance de la phase spatiale (21/10/2026)
- Diagnostic : `Game.step()` cumulait `dt*(boost?5:1)` et ne consommait **qu'un** intervalle/frame, donc la descente freinait artificiellement malgré un appui long.
- Correction : `BOOST_MULTIPLIER=10`, consommation répétée (cap 8 pour éviter les cycles infinis et ne pas booster le nouveau bloc spawn). Deuxième doigt toujours 420 ms/tap bref inchangé ; nouveau libellé CHUTE ×10.
- Phase espace : 4→5 marches, multiplicateur intervalle .72→.82, `shift` refusé (y compris après laser), `rotate` sans kick angulaire.
- Affichage : pièce extra-lunaire dessinée avec projection de Terre vers la porte polaire (art.spacePiece) ; aucun changement des collisions, ni de la sauvegarde. CI et visionnage Android à valider.

### PT-017 — Retour du CI et analyse visuelle
- Deux CI intermédiaires ont échoué sur d'**anciennes assertions de test** devenues invalides (déplacement autorisé dès le départ dans l'espace, ancienne initialisation artificielle du niveau). Tests corrigés en indiquant explicitement la phase lunaire et en ajustant le chronomètre. Aucun rollback du comportement demandé.
- Exécution finale **#39682743622 success** : Node + Android Gradle + APK 0.2.4 non compressée. Capture `design/rendu-jeu-apercu.jpg` confirme les quatre petites pièces distinctes au départ de la Terre, contrairement à l'ancienne apparition radiale tout autour du cercle.
- La trajectoire est une **projection graphique depuis la Terre vers les quatre points d'entrée**, tandis que `p.radius` est la seule altitude de collision/gravité. Cela assure la stabilité logique et les quatre fronts, mais l'impression de perspective reste à juger sur le Samsung.

## PT-018 — Diagnostics du tir laser maintenu
- Règle Fab : satellites plus vivants, Terre animée, nuages blancs transparents et cyclones, destruction coûteuse des briques fixées au laser long. Implémentation hors-ligne et purement graphique pour météo (pas de données météo réelles).
- Risque de régression : laser bref sur pièce mobile = déjà rotation, et gestes à deux doigts ; séparation du laser par mode et hit-test des **cases fixées** uniquement. Maintien unique 1300 ms et tolérance 23 px ; arrêt sur sortie de mode, pause, annulation, relâchement et perte de focus.
- Formule prototype : 80 × (r+1) × ceil((r+1)/2), facturation bornée au score existant, affichage MALUS théorique dans scoreboard, records intacts. Cases vides, limites polaires et partie arrêtée refusées.
- Concurrence CI : publication automatique antérieure APK 0.2.4 sur la branche pendant les commits. Toutes les écritures suivantes utilisent le SHA de tête actualisé. CI 0.2.5 encore à confirmer.

- **PT-018 rendu final :** CI #39687843781 réussie après correction doublon sonore et défilement continu de la rotation planétaire. APK 0.2.5 brute 8 791 813 octets vérifiée ; capture statique Chromium montre au moins un cyclone et les trois satellites, mais ne remplace pas un essai animé/tactile. Un run intermédiaire a échoué uniquement sur l'étape de publication Git après une mise à jour concurrente, tests + Gradle y avaient réussi ; le run final s'est publié avec succès.

## PT-019 : Ciblage laser trop précis sur Android
Une brique occupe une surface très étroite dans les 48 secteurs. En version 0.2.5, le pointeur devait rester appuyé, sans bouger, pendant 1300 ms ; un relâchement interrompait le focus. Version 0.2.6 : visée magnétique, focus conservé après levée du doigt, progression visible en haut de l'écran. Run #39689590579 réussi, test réel Samsung à effectuer.

## PT-020 — Chiralités, couleurs et séries de tirages (22/10/2026)
- Cause confirmée : les couleurs étaient codées par front (`COLORS[p.lane]`) et les cellules verrouillées ne mémorisaient que ce front. Le tirage était indépendant, avec possibilité de répétitions longues.
- Correction : sept couleurs par type I/O/L/J/Z/S/T, `boardTypes` synchronisé à la pose, aux couronnes et au laser, tirage équitable par sac global de sept, et log des chiralités posées sous `PartouChirality` (forme, rotation, front, couleur, compteurs tirés/posés).
- Tests Node, compilation Gradle et aperçu Chromium réussis : Actions #39742860690. Aucun log réel de partie sur Samsung encore recueilli. La réflexion du repère polaire n'est pas modifiée afin de préserver collisions et commandes ; l'observation des logs et visuels déterminera la suite.

## PT-021 — Chute accélérée aléatoire rapportée par Fab
- Symptôme : chute « de son plein gré » pendant le guidage d'une pièce, souvent au passage entre quartiers.
- Deux causes concrètes visibles en code 0.2.7 : `g.inward=p.distance<g.startDistance-17` suivie de `active=this.grip.inward||secondFinger.long` accélère sans deuxième doigt ; `fast pointerup => game.boost(selected,false)` peut laisser accéléré le front qui était sélectionné au début de la pression.
- Correction 0.2.8 : suppression totale du boost par direction radiale ; le second doigt doit être immobile et maintenu ≥420 ms, et tout glissement significatif après activation l'arrête. Sources de boost séparées/pinnées par front pour bouton, doigts et clavier ; remise à zéro sur pause, cache et changement de mode ; traces Android `PartouTouch`.
- CI Node + Android et essai réel Samsung à confirmer. Collisions et vitesse de gravité non modifiées.

## PT-022 — Sauvegarde persistante et titre pharaonique (22/10/2026)
- Avant : preferences audio/vitesse et leaderboard uniquement ; pas de partie en cours persistante. La réouverture réinitialisait quatre pièces et score.
- Correction : `session.js` (version 1, clé distincte) enregistre l'état complet y compris position/rotation des quatre pièces, metadata des couleurs posées, bag aléatoire, compteurs, gravité, combinaisons. Vérification dimension/type + copie profonde avant restauration. Aucune reprise d'un boost encore tenu ni ancienne file d'événements.
- Vue : `startPanel` propose REPRENDRE avec score retrouvé ou NOUVELLE PARTIE, le moteur reste en pause en attente du geste qui autorise aussi la musique. Sauvegarde régulière ~850ms + pagehide/visibilitychange + WebView Activity.onPause. Quand le jeu se termine, checkpoint supprimé sans effacer records/paramètres.
- Identité : A pyramide CSS sculpté en or, O reste une Lune bleue. Capture Chromium 412×915 inspectée, logo lisible, écran lunaire dégagé.
- Tests Node et assemblage Android réussis : CI #39760329152 ; `temp/PartouTetris-v0.2.9-debug.apk` 8 799 042 octets SHA blob f8322d35b2b938ba14115bb18ad3f939200dbe83.
- Essai réel restant : démarrer une partie, placer quelques blocs, quitter/forcer arrêt de l'application puis relancer et tester reprise exacte du score, cellules, pièces et palette ; nouveau jeu doit laisser les records intacts.

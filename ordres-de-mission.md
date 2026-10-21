# Ordres de mission — PartouTetris

## IMMUTABLE / À PRÉSERVER
- Dépôt canonique : `greenpower2669/PartouTetris` (orthographe vérifiée sur GitHub).
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

## PT-008 — Points et célébrations Block Boost (21 octobre 2026)
- Demande : « Faut des points et des célébrations comme avec block boost pour dynamiser ».
- Référence auditée : Block-Boost (fireworks.mjs, result-celebration.mjs, disco-sprites.mjs) ; principes des scènes bornées et seuils de 1 000 points.
- Code 0.1.5 : +40 points à chaque pose valable, score réel de couronnes et combos, gains flottants ; bulles/projecteurs, disco, feux d'artifice, fanfare originale et option visuelle douce.
- Préserver la licence, les sauvegardes, le tactile, le portrait et les sons existants. Aucun média privé de Djipie transféré.
- Statut : code et build CI #39521425766 vérifiés, APK 0.1.5 non compressée présente sur branche ; validation téléphone attendue.

## IMMUTABLE — Correction officielle de nom (21 octobre 2026)
- Fab confirme : « J ai corrigé le nomnc est PartouTetris ».
- **Dépôt et appellation officiels : `greenpower2669/PartouTetris`**, APK, title Android, en-tête graphique, README, Actions et documentation doivent utiliser ce nom.
- L'ancien nom « PartouTeris » est abandonné pour la présentation ; on préserve le package interne `com.greenpower2669.partouteris` afin de ne pas perdre sauvegardes et compatibilité des APK précédentes.
- N'effectuer aucun renommage du package Android ou des clés localStorage sans accord et migration explicite.

## PT-009 — Terre source des festivités, profondeur, contacts, appui long du deuxième doigt
- Demande Fab : « des célébration devrait venir se la terre que devrait aussibêtre plus grosse » ; « plus il les bloque se pose au centre plus il font des points et plus ils sont en contact avec s autre block aussi 2 autre bloc bonus fois 2 ainsi se suite le deuxieme doigt appuis long accélère la dézcente ».
- Scoring : 40 points de base + 12 × proximité radiale moyenne vers la Lune, multiplicateur ×N à partir de N=2 cellules déjà posées distinctes en contact radial ou tangentiel. Un contact = ×1. Contacts évalués avant placement ; pas de bonus avec la nouvelle pièce elle-même.
- Gestes : doigt primaire guide ; deuxième doigt tap court = rotation ; maintien stable ≥420 ms = chute rapide, retour à normal au relâchement, aucune rotation lors du maintien.
- Visuel : Terre plus grosse, place réservée sous le cercle en portrait ; faisceau, bulles et particules sortent de la Terre vers la Lune ; accessibilité préservée.
- Statut : code PT-009 et APK 0.1.6 compilés avec succès en CI #39573299164 ; test visuel/multitactile Samsung toujours à faire.

## PT-010 — Score, meilleurs scores, pseudo, rentrées enflammées et tirs laser (21/10/2026)
- **Demande Fab :** afficher les points gagnés plus bas ; rendre les débris arrivant de l'espace en flammes ; donner la possibilité de tirer au laser pour orienter les pièces ; en haut, score occupant toute la largeur, avec meilleurs scores en dessous ; réglage d'un pseudo.
- **Scoring inchangé :** points de proximité + contacts et combos conservés. Afficher les gains bas sans recouvrir la Lune ; bandeau supérieur affiche grand score et podium 3 local.
- **Classement :** garder l'ancienne valeur de record (`partouteris-record`) lors de l'introduction du classement local à pseudo modifiable; ne pas perdre les sauvegardes.
- **Laser :** mode explicite par bouton, viser/toucher une pièce volante proche de la trajectoire ; rotation + poussée tangentielle opposée au côté touché si possible ; pas de traversée des blocs fixes, pas d'interruption du contrôle standard lorsqu'on désactive le mode. Son/trace depuis Terre, cadence raisonnable.
- **Entrée en flammes :** simple présentation Canvas, non liée à collision physique ou à un temps de chute différent ; mouvement réduit honoré.
- **Statut :** code et tests PT-010 en 0.1.7 ; CI et vérification humaine Samsung en attente.

## PT-011 — Icône authentique, long trajet spatial, satellites convergents, lune sans pyramides (21 octobre 2026)
- Correction de Fab : « Mais non dessine pas code et prends la nouvelle icone 😀 ... sauf que je ne veux pas de pyramide sur la lune, pas plus maintenant 😜 ».
- Préserver **exactement le concept graphique de l'icône fournie** ; intégrer en ressource binaire Android et en emblème du bandeau, sans nouveau dessin IA. La source originale envoyée est /mnt/data/25255.png.
- Arrivées : les quatre pièces démarrent 4 niveaux radiaux hors du plateau (approche spatiale distincte), traînées incandescentes et blocs réellement visibles en espace libre ; enlever tout parachute du jeu. Maintenir vitesse réglée, quatre fronts, collisions uniquement avec blocs verrouillés, et contrôle tactile à deux doigts.
- Lasers : le tir n'émane plus d'un point central de la Terre mais de **3 satellites terrestres visibles et distincts**, leurs faisceaux convergeant vers une cible unique. Préserver impacts et effets sonores existants.
- Lune : conserver seulement cratères et texture géologique, **aucune pyramide**, aucune icône collée sur le globe ; l'Égypte futuriste reste dans logo et HUD.
- Branches/FabCopilot : intervenir uniquement sur feature/lunar-four-fronts-001, sans fusion main ni Release; APK directe non ZIP. Statut : CI #39591033182 et APK 0.1.8 brute vérifiées ; rendu visuel à valider sur Samsung.

## PT-012 — Petites voiles en zone lunaire et esthétique des deux images (21 octobre 2026)
- Fab précise : les parachutes doivent se déployer **une fois que les pièces entrent dans la zone de jeu**, et rester beaucoup plus discrets qu'au début.
- Phase spatiale de quatre rayons au-delà des dix couronnes : blocs incandescents **sans parachute** ; zone de dix couronnes : petites voiles de stabilisation cyan/or, transparentes, accessoires purement graphiques.
- Inspiration visuelle obligatoire : **icône officielle PartouTetris** (bleu, cyan néon, or, pyramides) + visuel récent de pharaons futuristes, Terre et pyramides-satellites. Satellites modélisés en forme de pyramides dorées avec anneaux et moteurs cyan. Aucun nouveau dessin généré, exclusivement code Canvas Android.
- **Interdit de dessiner des pyramides sur la surface lunaire.** Conserver textures/cratères et tous les contrôles, sauvegardes, scores, vitesse, musique.
- Travaux v0.1.9 dans `feature/lunar-four-fronts-001` ; aucun merge main/release définitive. GitHub Actions #39594087561 et APK 0.1.9 vérifiées ; test visuel/tactile sur téléphone toujours en attente.

## PT-013 — Refonte fidèle, musique officielle et Djipie (21/10/2026)
- Source du design : le PNG déposé sur `main` par Fab, désormais copié à l'identique dans `design/charte-officielle.png` sur la branche de travail. Référence esthétique absolue. Ne pas l'aplatir en fond masquant les commandes.
- UI : titre doré, panneaux cadrés or/cyan, score large, aide gestuelle compacte correcte et commandes existantes conservées. Lune géologique sans pyramides, blocs sur quatre fronts, Terre et satellites-pyramides indépendants, lasers convergents.
- Audio : le MP3 `musique PartouTetris .mp3` de `main` est importé byte-identical comme `official-theme.mp3` ; lecture déclenchée au toucher, boucle et volume paramétrable. Synthèse originale en secours ; laser synthétique étagé activation/charge/tir/impact.
- Djipie : sources des catégories audio consultées ; droits des fichiers individuels non confirmés pour publication publique, donc **aucune copie des sons privés**.
- Livraison attendue : APK brute v0.2.0 sous `temp/`, branche `feature/lunar-four-fronts-001` uniquement, `main` inchangée. État : développé sur branche ; tests CI et fidélité visuelle réelle à valider, aucune fusion/release.

### PT-013 — État technique (21 octobre 2026)
- **Livré sur branche, à valider par Fab :** APK 0.2.0 directe, #39628651992 success, accès via `temp/PartouTetris-v0.2.0-debug.apk`.
- **Non clos :** fidélité fine à la charte officielle ; écoute et boucle musicale sur Samsung ; sons Djipie privés soumis à preuve de droits ; contrôle tactile réel. Aucune fusion `main`, aucune Release et aucun AAB de publication.

## PT-014 — Annonces de score hors plateau (21 octobre 2026)
- **Retour Fab, capture Android 0.2.0 :** le bandeau « 20 000 POINTS ! » au centre cache des couronnes et des pièces ; le bandeau « GAIN +484 ×4 » cache une partie de la vue.
- **Commande explicite « Ok go » :** faire apparaître ces messages **en haut ou en bas, jamais sur le plateau**. Conserver tous les effets, le scoring, les commandes et la musique.
- **Implémentation v0.2.1 :** bannière de célébration dans le panneau score supérieur, remplaçant uniquement le classement pendant l'événement ; petit gain compact sur la ligne « meilleurs scores », sans reflow du HUD. Les animations de particules subsistent sans obstacle tactile. Ces annonces disparaissent automatiquement et libèrent le classement.
- **Musique :** loop HTMLAudioElement (MP3 local officiel), réglages/mute et solution de secours préservés ; raccord sonore réel à tester à l'écoute.
- **État :** correction codée sur `feature/lunar-four-fronts-001`, CI et contrôle Samsung à vérifier. `main` intacte.

### PT-014 — État de livraison (21/10/2026)
- **Livré, à valider par Fab :** version Android 0.2.1 via Actions #39644183018 (success), fichier .apk non compressé dans `temp/`.
- Maintien du lecteur officiel en boucle `track.loop=true`, sans modification du fichier musical ni des préférences de volume. La présence de la boucle dans le code est confirmée, mais la qualité du raccord ne peut être certifiée sans écoute de toute la piste.
- Aucun merge `main` ni Release officielle, prochain essai humain : palier 20 000 et gains simultanés sur Samsung.

## PT-015 — Score de Pharaonite et pseudo Tous3nKamion (21/10/2026)
- Correction de Fab : **« Meilleur score de Pharaonite »** (libellé de la rubrique) et pseudo **« Tous3nKamion »** par défaut, jeu de mots avec Toutânkhamon.
- Préserver classement top 3/top 10, sauvegardes, anciens records, pseudos personnalisés et package Android. Migration de la seule ancienne valeur par défaut « PHARAON », sans altérer les entrées du classement.
- Version cible 0.2.2, branche `feature/lunar-four-fronts-001` seulement ; `main` inchangée. CI et APK à vérifier.

### PT-015 — Livraison à valider
- Version 0.2.2 compilée et tests verts, Actions #39647494324 ; APK brute disponible sur branche via `temp/PartouTetris-v0.2.2-debug.apk`.
- Contrôle visuel Chromium de la bannière « MEILLEUR SCORE DE PHARAONITE » et du pseudo « Tous3nKamion » effectué ; tests réels Samsung et audio restent ouverts. `main` intacte.

## PT-016 — Bannière de jeu néon/or recréée en CODE (21/10/2026)
- Fab fournit visuel de référence titre PARTOUTETRIS doré, O lunaire cyan, pièces géométriques colorées, carénage science-fiction cyan/or, score or géant, record cyan ; il précise expressément « Non, en code ^^ » après une génération d'image incorrecte.
- **Contrat : aucun visuel généré plaqué en fond.** Construire le bandeau en HTML/CSS/DOM, chiffres, pseudo, records toujours dynamiques et sauvegardes inchangées. Ne pas dégrader la zone jouable en portrait ni chevaucher les annonces PT-014.
- Le titre reste accessible sous sa chaîne d'origine, le O visible est une sphère lunaire à cratères dessinée en CSS, 4 tétriminos lumineux sont composés de cellules CSS, les panneaux affichent le score vivant et la meilleure valeur Pharaonite.
- Branche de travail `feature/lunar-four-fronts-001`, cible Android 0.2.3, CI et photo comparative à valider, aucune fusion de main.

### PT-016 — Validation technique
- **Livré pour essai** sur `feature/lunar-four-fronts-001` : Gradle v0.2.3, APK directe non ZIP `temp/PartouTetris-v0.2.3-debug.apk` et capture Chromium `design/rendu-jeu-apercu.jpg`, GitHub Actions #39655192888 success.
- Décor du bandeau 100 % HTML/CSS ; le jeu lui-même et les scores restent dynamiques. `main` n'a pas été fusionnée ni publiée. Attendre feu vert de Fab avant Release/AAB.

## PT-017 — Boost franc ×10 et arrivée depuis la Terre (21 octobre 2026)
- Demande Fab : deuxième doigt maintenu → descente **dix fois plus rapide** et réellement fluide comme dans Tetris, rotation au tap court inchangée ; bouton CHUTE de même puissance.
- Annonce spatiale plus longue (cinq étapes au lieu de quatre, phase légèrement ralentie) ; dans l'espace on peut **tourner mais pas déplacer latéralement**, la prise et l'orientation sont conservées à l'entrée des couronnes.
- Trajectoires graphiques depuis la Terre au premier plan vers quatre directions d'arrivée autour de la Lune ; le visuel 3D simulé n'affecte ni la position logique du moteur ni le contact des blocs.
- Préserver quatre fronts, music loop, nouveaux HUD PT-016, pseudo Tous3nKamion, scores/records et package Android. Cible 0.2.4 sur `feature/lunar-four-fronts-001` ; ne pas fusionner `main`.

### PT-017 — Livraison à tester
- GitHub Actions #39682743622 confirmé **success**, `temp/PartouTetris-v0.2.4-debug.apk` vérifiée 8 789 389 octets sur la branche. Aperçu Chrome réel inspecté : quatre unités spatiales naissent près de l'horizon terrestre et HUD inchangé.
- Le `×10` signifie une vraie multiplication de progression de chute, non une animation artificielle. Rotation conserve tap court, long appui accélère ; pas de translation de secteur pendant approche.
- Test humain sur Samsung requis avant validation définitive. Aucune fusion `main`, aucune Release/AAB.

## PT-018 — Satellites plus vivants, Terre en mouvement et malus laser
- Demande Fab : effets de vie des satellites-pyramides, rotation apparente de la Terre, nuages et cyclones blancs semi-transparents, destruction au tir laser prolongé sur une brique posée avec malus fortement croissant vers les couches élevées.
- Prototype : maintien LASER 1,3 s sur une case verrouillée ; glissement >23px ou relâchement annule la charge, effet visible, une seule case détruite, pas de destruction en chaîne.
- Pénalité = 80×(r+1)×ceil((r+1)/2), facturation plafonnée au score pour empêcher les points négatifs ; toutes les sauvegardes restent inchangées.
- Tout est rendu en Canvas local, satellites avec micro-orbites et poussée cyan pulsante, météo illustrée, réduction effets honorée. Aucun merge `main`, version 0.2.5 branch test.

### PT-018 — Prêt pour validation de Fab
- APK Android de test 0.2.5 livrée non compressée, Actions #39687843781 **success** ; artefact `temp/PartouTetris-v0.2.5-debug.apk` sur branche. Aucune fusion `main`, aucun AAB de publication.
- Les animations Terre/cloud/cyclones/satellites sont calculées localement sans asset de météo ; scoring de laser maintenu et chute ×10 inchangés. Essai réel sur Samsung encore requis.

## PT-019 : Correction laser approuvée par retour utilisateur
Objectif : corriger un mauvais placement moyennant du temps et des points. L'ancienne manipulation empêchait souvent de terminer le tir. Nouvelle manipulation : LASER activé, touche sur une brique posée, focus automatique 1,3 seconde, malus croissant puis retrait d'une brique. Conserver les sauvegardes et `main` intacte ; APK de test 0.2.6 sur la branche.

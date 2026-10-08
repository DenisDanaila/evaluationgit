# L'Agora Étudiante

L'Agora Étudiante est un site vitrine pour une association étudiante fictive. Il présente le collectif, ses engagements et ses événements, et permet aux étudiants de remplir un formulaire de préinscription.

Le site est réalisé en HTML, CSS et JavaScript sans dépendance ni outil de compilation.

**Site publié :** [denisdanaila.github.io/evaluationgit](https://denisdanaila.github.io/evaluationgit/)

## Fonctionnalités

- Présentation de l'association et de ses engagements.
- Navigation par ancres entre l'accueil, l'association, les événements, les engagements et l'inscription.
- Menu mobile accessible au clavier, avec fermeture par Échap ou après le choix d'une rubrique.
- Catalogue de trois événements, avec dates, lieux, descriptions et liens d'inscription.
- Formulaire de préinscription avec nom, adresse e-mail, téléphone et choix d'un événement.
- Validation native des champs et confirmation côté client. Aucune donnée n'est envoyée à un serveur ou enregistrée.
- Mise en page responsive, lien d'évitement et respect de la préférence de réduction des animations.

## Équipe et responsabilités

| Pseudonyme GitHub | Nom | Prénom | Rôle et contribution |
|---|---|---|---|
| [@DenisDanaila](https://github.com/DenisDanaila) | Danaila | Denis | Étudiant — présentation de l'association, navigation et coordination des intégrations |
| [@matgaryyy](https://github.com/matgaryyy) | Gary | Mat | Étudiant — catalogue des événements |
| [@Raptorr83](https://github.com/Raptorr83) | Medkour | Sofiane | Étudiant — formulaire d'inscription et intégration avec le catalogue |

## Étapes du développement

1. Création de la présentation de l'association et de la navigation, dans une branche de fonctionnalité.
2. Ajout du catalogue d'événements dans une branche dédiée.
3. Développement du formulaire de préinscription dans une branche dédiée.
4. Intégration des fonctionnalités par pull requests et raccordement des liens des événements au formulaire.
5. Publication du site avec GitHub Pages depuis la branche `main`.

## Workflow Git

- Les développements sont réalisés dans des branches de fonctionnalité (`feature/...`) afin de séparer les changements.
- Les pull requests servent à présenter les changements, en discuter et les intégrer dans la branche cible.
- `develop` a servi de branche intermédiaire d'intégration ; `main` contient la version destinée à la publication.
- Les pull requests #1 et #2 ont apporté la présentation/navigation et le catalogue d'événements. Les pull requests #3 et #4 ont servi à intégrer les changements entre `main` et `develop`. La pull request #5 a intégré le formulaire.
- GitHub Pages construit et déploie le site à partir de `main`.

## Conflit et résolution

Lors de l'intégration du formulaire avec le catalogue d'événements, il fallait conserver les deux fonctionnalités et relier les appels à l'inscription au formulaire. Le commit d'intégration rassemble le catalogue et le formulaire, puis connecte ces liens. La résolution a donc consisté à préserver les deux fonctionnalités dans la version intégrée, plutôt qu'à remplacer l'une par l'autre.

## Versions publiées

Aucune version numérotée ou tag de version n'est documenté dans le dépôt. La version actuellement publiée correspond au contenu de `main` et est déployée sur [GitHub Pages](https://denisdanaila.github.io/evaluationgit/). Les mises à jour de `main` déclenchent la construction et le déploiement du site.

## Difficultés rencontrées

- L'intégration du formulaire et du catalogue demandait de conserver les deux fonctionnalités et de vérifier leurs liens.
- Lors du premier contrôle de publication, GitHub Pages affichait une erreur 404 pendant que le déploiement était encore en cours. Le site est devenu accessible après la fin de l'action de déploiement.
- Le formulaire est une démonstration côté client : il ne transmet ni ne stocke les informations saisies.

## Questions sur le workflow Git

### 1. Quel est l'intérêt de séparer les développements en cours et les versions stables ?

**Auteur : Denis Danaila (@DenisDanaila)**  
La séparation évite que du code incomplet perturbe la version stable. Les développements peuvent avancer dans `develop` ou dans des branches dédiées, tandis que `main` reste publiable.

### 2. Pourquoi imposer une revue de code avant intégration ?

**Auteur : Denis Danaila (@DenisDanaila)**  
La revue permet à une autre personne de repérer des erreurs, de vérifier que le changement répond au besoin et de partager sa compréhension du code avant sa fusion.

### 3. Quelles situations provoquent un conflit Git et pourquoi sa résolution n'est-elle pas toujours automatique ?

**Auteur : Denis Danaila (@DenisDanaila)**  
Un conflit survient notamment lorsque deux branches modifient les mêmes lignes, ou des parties liées d'un même fichier. Git peut signaler les versions en concurrence, mais ne peut pas décider quelle intention fonctionnelle doit être conservée.

### 4. Quelle différence entre correction classique et correction urgente de production ?

**Auteur : Mat Gary (@matgaryyy)**  
Une correction classique suit le cycle normal de développement et de validation. Une correction urgente, ou *hotfix*, part de la version publiée afin de limiter rapidement un problème qui touche les utilisateurs.

### 5. Pourquoi répercuter une correction de production dans les développements en cours ?

**Auteur : Mat Gary (@matgaryyy)**  
Pour que le défaut corrigé ne réapparaisse pas dans une prochaine version et que les branches de développement bénéficient elles aussi du correctif.

### 6. Quel est le rôle d'une branche de release ?

**Auteur : Mat Gary (@matgaryyy)**  
Elle permet de préparer une version à publier — stabilisation, dernières corrections et vérifications — sans bloquer la poursuite des nouveaux développements.

### 7. Comment GitHub Projects et les Issues facilitent-ils organisation et traçabilité ?

**Auteur : Sofiane Medkour (@Raptorr83)**  
Projects aide à visualiser les tâches, leur état et leurs responsables. Les Issues décrivent les demandes ou problèmes et conservent leur discussion ; elles peuvent être reliées aux pull requests et aux changements correspondants.

### 8. Comment retrouver l'origine d'une modification dans l'historique GitHub ?

**Auteur : Sofiane Medkour (@Raptorr83)**  
La vue **History** permet de parcourir les commits d'un dépôt ou d'un fichier. La vue **Blame** indique, ligne par ligne, le commit et l'auteur associés à la dernière modification.

## Lancer le site

Ouvrir `index.html` dans un navigateur récent. Aucune installation n'est nécessaire.

## Personnalisation

Le nom, les textes de présentation et les événements sont des exemples à valider ou remplacer par les informations réelles de l'association avant publication. Le formulaire est une démonstration côté client : les données saisies ne sont ni envoyées ni enregistrées.
.

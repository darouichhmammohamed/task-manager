# ✅ Task Manager – Application Angular

Application web de gestion de tâches réalisée avec **Angular 22** dans le cadre de mon apprentissage du développement frontend.
Elle permet de créer, consulter, filtrer et supprimer des tâches, avec une interface moderne et responsive.

## Fonctionnalités

- **Liste des tâches** avec filtres : *All*, *Active* (en cours) et *Completed* (terminées)
- **Création d'une tâche** avec un formulaire validé (titre de 3 caractères minimum, description de 10 caractères minimum, messages d'erreur sous chaque champ)
- **Page de détail** d'une tâche : titre, description, statut, identifiant et date de création
- **Suppression** d'une tâche depuis la liste ou depuis sa page de détail
- **Sauvegarde dans le navigateur** (`localStorage`) : les tâches ajoutées restent après un rechargement de la page
- **Interface responsive** : barre de navigation fixe, lien actif mis en avant, adaptation aux écrans de téléphone
- **Accessibilité** : `aria-label`, `aria-pressed` sur les filtres, `aria-invalid` sur les champs du formulaire

## Technologies

| Domaine | Outils |
|---|---|
| Framework | Angular 22 (composants standalone) |
| Langage | TypeScript |
| État de l'application | Signals (`signal`, `computed`) |
| Formulaires | Reactive Forms (`FormBuilder`, `Validators`) |
| Navigation | Angular Router (`routerLink`, `routerLinkActive`, paramètres de route) |
| Style | CSS (variables CSS, flexbox, media queries) |
| Tests | Vitest |

## Ce que ce projet m'a permis d'apprendre

- Organiser une application en **pages** (composants) et en **service**
- Partager des données entre les pages grâce à un **service injectable** (`inject()`)
- Gérer l'état avec les **signals** et calculer des listes filtrées avec `computed`
- Utiliser la nouvelle syntaxe des templates : `@for`, `@if`, `@empty`
- Valider un formulaire avec les **Reactive Forms**
- Lire un paramètre dans l'URL (`/task/:id`) avec `ActivatedRoute`
- Sauvegarder des données dans le `localStorage`

## Structure du projet

```
src/app/
├── app.ts / app.html / app.css      Structure générale : en-tête, navigation, pied de page
├── app.routes.ts                    Routes de l'application
├── services/
│   └── task-service.ts              Données des tâches (signals + localStorage)
└── pages/
    ├── task-list/                   Liste des tâches et filtres
    ├── task-form/                   Formulaire de création
    └── task-details/                Détail d'une tâche
```

## Routes

| URL | Page |
|---|---|
| `/` | Liste des tâches |
| `/add-task` | Créer une tâche |
| `/task/:id` | Détail d'une tâche |

## Installation et lancement

Prérequis : **Node.js** et **Angular CLI** (`npm install -g @angular/cli`).

```bash
git clone https://github.com/darouichhmammohamed/task-manager.git
cd task-manager
npm install
ng serve
```

Ouvrir ensuite **http://localhost:4200** dans le navigateur.

## Tests

```bash
ng test
```

## Améliorations prévues

- Marquer une tâche comme terminée directement depuis la liste
- Modifier une tâche existante
- Afficher les dates dans un format plus lisible
- Connecter l'application à une API (Spring Boot) et à une base de données

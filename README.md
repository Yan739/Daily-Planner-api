# Daily Planner API

<div align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger">
</div>

## Description

**Daily Planner API** est un backend développé en **NestJS** et structuré selon les principes de la **clean architecture** (hexagonale). Il permet à un utilisateur de planifier sa journée, gérer des tâches, des objectifs, des notes, un planning horaire, et de consulter la météo via une API externe.

## Objectif du projet

Ce projet a pour objectif de fournir une **API REST** sécurisée, claire et extensible qui permet à un utilisateur de :

- Planifier sa journée de 06h00 à 21h00
- Gérer des tâches, objectifs, notes et plannings
- Consulter la météo quotidienne via une API tierce (OpenWeatherMap)
- Interagir avec une interface web ou mobile

## Architecture technique

### Technologies utilisées

- **NestJS** - Framework Node.js modulaire
- **MySQL** - Base de données relationnelle
- **TypeORM** - ORM pour TypeScript et JavaScript
- **JWT** - Authentification sécurisée
- **Swagger** - Documentation interactive de l'API
- **OpenWeatherMap** - API météo intégrée

### Structure du projet (hexagonale)

```
src/
├── modules/
│   ├── auth/          # Authentification (JWT, stratégies, guards)
│   ├── users/         # Gestion des utilisateurs
│   ├── tasks/         # Gestion des tâches
│   ├── schedules/     # Emplois du temps (planning horaire)
│   ├── goals/         # Objectifs journaliers
│   ├── notes/         # Notes personnelles
│   ├── weather/       # Appel à l'API météo externe
│   └── shared/        # Modules réutilisables
├── core/
├── usecases/          # Logique métier (Application Layer)
├── services/          # Services internes du domaine
├── repositories/      # Interfaces des repositories (Domain Layer)
└── infrastructure/    # Implémentation des repositories (MySQL)
├── config/            # Configuration globale (env, base de données)
├── main.ts           # Point d'entrée de l'application
└── app.module.ts     # Module racine de l'application
```

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- MySQL 8
- NestJS CLI : `npm install -g @nestjs/cli`

### Étapes d'installation

```bash
# Cloner le projet
git clone https://github.com/votre-utilisateur/daily-planner-api.git
cd daily-planner-api

# Installer les dépendances
npm install

# Copier et modifier les variables d'environnement
cp .env.example .env

# Lancer l'application
npm run start:dev
```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=motdepasse
DB_NAME=daily_planner

# Authentification JWT
JWT_SECRET=jwtsecretkey
JWT_EXPIRATION=3600s

# API météo (OpenWeatherMap)
WEATHER_API_KEY=votre_cle_api

# Port de l'application
PORT=3000
```

## Documentation API

Après démarrage, la documentation Swagger est disponible à :

```
http://localhost:3000/api
```

Elle permet de tester tous les endpoints de l'API de façon interactive.

## Scripts disponibles

```bash
# Développement
npm run start:dev

# Production
npm run start:prod

# Tests
npm run test

# Tests unitaires avec couverture
npm run test:cov

# Tests e2e
npm run test:e2e

# Linting
npm run lint

# Formatage du code
npm run format
```

## Fonctionnalités à venir

- Intégration complète d'OpenWeatherMap
- Notifications par e-mail ou push
- Vue hebdomadaire du planning
- Gestion multi-utilisateur avec rôles
- Sauvegarde des préférences utilisateur (thème, langue, etc.)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Auteur

**Yann NGATEU**

Projet réalisé dans le cadre d'un projet personnel d'apprentissage et de mise en pratique des architectures modernes côté backend.

---

<div align="center">
  Fait avec ❤️ par Yann NGATEU
</div>

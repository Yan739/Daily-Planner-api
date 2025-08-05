# Daily Planner API

<div align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger">
</div>

## Description

**Daily Planner API** is a backend developed in **NestJS** and structured according to **clean architecture** (hexagonal) principles. It allows users to plan their day, manage tasks, goals, notes, hourly schedules, and check weather through an external API.

## Project Objective

This project aims to provide a **secure, clear, and extensible REST API** that allows users to:

- Plan their day from 6:00 AM to 9:00 PM
- Manage tasks, goals, notes, and schedules
- Interact with web or mobile interfaces

## Technical Architecture

### Technologies Used

- **NestJS** - Modular Node.js framework
- **MySQL** - Relational database
- **TypeORM** - ORM for TypeScript and JavaScript
- **Swagger** - Interactive API documentation

### Project Structure (Hexagonal)

```
src/
├── modules/
│   ├── tasks/         # Task management
│   ├── schedules/     # Time schedules (hourly planning)
│   ├── goals/         # Daily goals
│   └── notes/         # Personal notes
├── core/
├── usecases/          # Business logic (Application Layer)
├── services/          # Internal domain services
├── repositories/      # Repository interfaces (Domain Layer)
└── infrastructure/    # Repository implementations (MySQL)
├── config/            # Global configuration (env, database)
├── main.ts           # Application entry point
└── app.module.ts     # Root application module
```

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- MySQL 8
- NestJS CLI: `npm install -g @nestjs/cli`

### Installation Steps

```bash
# Clone the project
git clone https://github.com/your-username/daily-planner-api.git
cd daily-planner-api

# Install dependencies
npm install

# Copy and modify environment variables
cp .env.example .env

# Start the application
npm run start:dev
```

## Configuration

### Environment Variables

Create a `.env` file at the project root:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=daily_planner

# Application port
PORT=3000
```

## API Documentation

After startup, Swagger documentation is available at:

```
http://localhost:3000/api
```

It allows interactive testing of all API endpoints.

## Available Scripts

```bash
# Development
npm run start:dev

# Production
npm run start:prod

# Tests
npm run test

# Unit tests with coverage
npm run test:cov

# End-to-end tests
npm run test:e2e

# Linting
npm run lint

# Code formatting
npm run format
```

## Upcoming Features

- Email or push notifications
- Weekly schedule view
- Multi-user management with roles
- User preference storage (theme, language, etc.)

## Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Yann NGATEU**

Project created as part of a personal learning project to practice modern backend architectures.

---

<div align="center">
  Made with ❤️ by Yann NGATEU
</div>

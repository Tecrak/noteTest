Notes Management Application

A full-stack web application designed for managing personal notes (creating, viewing, editing, and deleting) with built-in support for containerized databases, multi-language localization (i18n), and End-to-End testing.

🛠️ Tech Stack

- Backend: .NET 9 Web API, Entity Framework Core, PostgreSQL

- Frontend: React, TypeScript, Vite, i18next (Localization)

- DevOps & Testing: Docker Compose, Playwright / Cypress (E2E Testing)

🚀 Getting Started

Prerequisites

Before running the application, ensure you have the following installed:

- .NET 9 SDK

- Node.js (v18 or higher)

- Docker & Docker Compose

📦 Backend Setup & Instructions

Navigate to the backend directory:

1. cd backend

Start the PostgreSQL database using Docker Compose:

2. docker compose up -d

Run the .NET Web API service:

3. dotnet run

The database schema will be automatically created or migrated upon startup via Entity Framework.

🔌 API Endpoints

The backend exposes the following RESTful endpoints for note management:

GET /notes — Retrieve all notes

GET /notes/{id} — Retrieve a specific note by ID

POST /notes — Create a new note

PUT /notes/{id} — Update an existing note

DELETE /notes/{id} — Delete a specific note

Once running, you can access the interactive Swagger UI documentation at http://localhost:XXXX/swagger (replace XXXX with your active application port shown in the terminal output).

💻 Frontend Setup & Instructions

Navigate to the frontend directory:

1. cd frontend

Install the required Node.js dependencies:

2. npm install

3. Verify the API connection:
   Open src/services/api.ts and ensure the base URL port matches your running backend service port.

Launch the client application in development mode:

4. npm run dev

The application will be accessible locally at http://localhost:5173.

🧪 Running End-to-End (E2E) Tests

The project includes an E2E test suite to validate core user workflows, such as rendering the app, adding a note, and switching languages.

Note: Please make sure both the backend API and frontend client are actively running before executing the tests.

Ensure you are in the frontend directory:

1. cd frontend

2. Execute the E2E tests:

# If using Playwright:

npx playwright test

# If using Cypress:

npx cypress run

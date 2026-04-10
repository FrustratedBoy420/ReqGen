# ReqGen

ReqGen is a full-stack web application that helps users turn a project idea into a structured project plan using AI.  
It provides:

- User registration and login
- JWT-based authenticated sessions
- AI-generated project planning output (scope, features, timeline, cost, and tech stack)
- Saved project history per user

## Monorepo Structure

This repository contains two main applications:

- `ReqGen_Frontend` - React + Vite client
- `Server` - Node.js + Express + MongoDB API server

### Folder Overview

```
ReqGen/
	Readme.md
	ReqGen_Frontend/
		src/
			Components/
			contexts/
			main.jsx
			layout.jsx
	Server/
		src/
			AI/
			controller/
			middleware/
			models/
			routes/
			utils/
			index.js
			app.js
```

## Tech Stack

### Frontend

- React 19
- React Router DOM
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express 5
- MongoDB + Mongoose
- JWT authentication
- bcrypt password hashing
- OpenAI SDK configured against Groq endpoint
- Winston + Morgan logging

## How It Works

1. User registers via `/api/registerUser`.
2. User logs in via `/api/login`.
3. Server returns access and refresh tokens (cookies + JSON payload).
4. Frontend stores `user` and `accessToken` in local storage.
5. Authenticated user submits an idea to `/api/generateplan`.
6. Server calls Groq model and expects strict JSON response.
7. Parsed plan is saved in MongoDB as a `Project` document and linked to the user.
8. User can view previous plans from `/api/myprojects` on the History page.

## Frontend Routes

Defined in `ReqGen_Frontend/src/main.jsx`:

- `/` - Home
- `/login` - Login
- `/register` - Register
- `/get-started` - Generate project plan
- `/about` - About page
- `/history` - User project history

`ReqGen_Frontend/vite.config.js` proxies `/api/*` requests to `http://localhost:3000`.

## Backend API Routes

Base prefix: `/api`

- `POST /registerUser` - Create user account
- `POST /login` - Login and issue tokens
- `GET /logout` - Logout user (protected)
- `POST /generateplan` - Generate and save AI project plan (protected)
- `GET /myprojects` - Fetch current user's project history (protected)

Protected routes require JWT from:

- `accessToken` cookie, or
- `Authorization: Bearer <token>` header

## Data Models

### User

- `username` (unique)
- `email` (unique)
- `fullName`
- `password` (hashed before save)
- `projectID` (array of references to `Project`)
- `refreshToken`

### Project

- `scope` (string)
- `features` (string array)
- `timeline` (array of `{ phase, duration }`)
- `cost` (`{ minimum, maximum }`)
- `techStack` (string array)
- `createdBy` (reference to `User`)

## Environment Variables

Create `Server/.env` and provide:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d

NODE_ENV=development
```

## Getting Started

### 1) Clone and install dependencies

From repo root:

```
cd ReqGen_Frontend
npm install

cd ../Server
npm install
```

### 2) Start backend

In `Server`:

```
npm run dev
```

By default, backend runs on `http://localhost:3000`.

### 3) Start frontend

In `ReqGen_Frontend`:

```
npm run dev
```

By default, frontend runs on `http://localhost:5173`.

## NPM Scripts

### Frontend (`ReqGen_Frontend/package.json`)

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (`Server/package.json`)

- `npm run dev` - Start server with nodemon

## Authentication Notes

- Server sets `accessToken` and `refreshToken` as httpOnly cookies.
- Frontend also stores `accessToken` in local storage and sends bearer token for API calls.
- CORS in backend is configured for `http://localhost:5173` with credentials enabled.

## Logging

- Request logs are produced through Morgan and written via Winston logger.
- `Server/app.log` is present for server-side log output.

## Current Status and Caveats

- Root README has now been documented.
- There is a duplicate dependency name in backend package file (`bcrypt` and `brcypt` typo package).
- `PDFKit` import exists but PDF generation route is currently commented out.
- No automated test setup is currently configured in either frontend or backend package scripts.

## Suggested Next Improvements

- Add centralized error-handling middleware in Express for consistent API error responses.
- Add request validation using existing validator folder and schema checks.
- Add refresh-token rotation endpoint.
- Add test suites (frontend component tests + backend API tests).
- Add Docker support for one-command local startup.

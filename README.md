# Abdo Alatrash - Portfolio Website

A professional portfolio website showcasing expertise in machine learning, data science, and web development with a focus on physics-informed machine learning.

## Project Overview

This portfolio is built using:
- React (with Vite)
- Styled Components
- Firebase (Authentication, Firestore, Storage, Hosting)
- Formspree for contact form

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Firebase CLI

### Getting Started

1. Clone this repository
```bash
git clone https://github.com/abdo544445/abdo544445.github.io.git
cd abdo544445.github.io
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Setup Firebase
- Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
- Enable Authentication (Google provider)
- Create Firestore database
- Set up Firebase Storage
- Install Firebase CLI: `npm install -g firebase-tools`
- Login to Firebase: `firebase login`
- Initialize Firebase in the project: `firebase init`

4. Create `.env` file with Firebase config
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

5. Start development server
```bash
npm run dev
# or
yarn dev
```

6. Deploy to Firebase
```bash
npm run build
firebase deploy
```

7. Configure custom domain (alatrash.me)
- Follow the Firebase Hosting documentation to connect your custom domain

## Project Structure

```
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── admin/
│   ├── context/
│   ├── firebase/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .env
└── package.json
```

## Content Structure

### Skills Categories
- Machine Learning & AI
- Data Science & Analysis
- Web Development
- Research & Academic

### Projects
- ML/AI projects
- Data visualization projects
- Web applications
- Research implementations

## Admin Dashboard

The admin dashboard allows for easy content management:
- Login with Google authentication
- CRUD operations for all portfolio sections
- Image upload for projects
- Preview changes before publishing

## License

MIT

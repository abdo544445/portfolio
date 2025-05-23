# Firebase Configuration for Abdo Alatrash Portfolio

This file contains instructions for setting up your Firebase project for the portfolio website.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and name it "abdo-alatrash-portfolio"
3. Follow the setup wizard (you can enable Google Analytics if desired)

## Step 2: Configure Authentication

1. In the Firebase Console, go to "Authentication"
2. Click "Get Started"
3. Enable "Google" provider
4. Add your domain (alatrash.me) to the authorized domains list

## Step 3: Set up Firestore Database

1. Go to "Firestore Database"
2. Click "Create database"
3. Start in production mode
4. Choose a location closest to your target audience

### Database Collections Structure

Create the following collections:

#### skills
```
{
  id: string (auto)
  name: string
  category: string (machine-learning, data-science, web-development, research)
  proficiency: number (0-100)
  icon: string (optional)
  description: string (optional)
  yearsOfExperience: number (optional)
}
```

#### projects
```
{
  id: string (auto)
  title: string
  slug: string
  description: string
  longDescription: string (optional)
  category: string (ml-ai, data-viz, web-app, research)
  technologies: array<string>
  imageUrl: string
  githubUrl: string (optional)
  liveUrl: string (optional)
  paperUrl: string (optional)
  featured: boolean
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### research_interests
```
{
  id: string (auto)
  title: string
  description: string
  relatedProjects: array<string> (optional, project IDs)
}
```

#### publications
```
{
  id: string (auto)
  title: string
  authors: array<string>
  journal: string (optional)
  conference: string (optional)
  year: number
  abstract: string (optional)
  pdfUrl: string (optional)
  doiUrl: string (optional)
}
```

#### profile
```
{
  id: string (auto)
  fullName: string
  title: string
  summary: string
  email: string (optional)
  location: string (optional)
  socialLinks: {
    github: string (optional)
    linkedin: string (optional)
    twitter: string (optional)
    googleScholar: string (optional)
    researchGate: string (optional)
  }
  education: array<{
    institution: string
    degree: string
    field: string
    startYear: number
    endYear: number (optional)
    description: string (optional)
    location: string (optional)
  }>
  experience: array<{
    company: string
    position: string
    startDate: timestamp
    endDate: timestamp (optional)
    current: boolean
    description: string
    location: string (optional)
    technologies: array<string> (optional)
  }>
}
```

#### contact_submissions
```
{
  id: string (auto)
  name: string
  email: string
  subject: string (optional)
  message: string
  timestamp: timestamp
  read: boolean
  responded: boolean
}
```

## Step 4: Set up Firebase Storage

1. Go to "Storage"
2. Click "Get Started"
3. Start in production mode
4. Create the following folders:
   - profile
   - projects
   - publications
   - blog

## Step 5: Configure Security Rules

### Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access for all data
    match /{document=**} {
      allow read;
    }
    
    // Admin write access (authenticated users with specific email)
    match /{collection}/{docId} {
      allow write: if request.auth != null && request.auth.token.email == 'abdoforanything1@gmail.com';
    }
    
    // Allow anonymous contact form submissions
    match /contact_submissions/{docId} {
      allow create;
    }
  }
}
```

### Storage Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Public read access for all files
    match /{allPaths=**} {
      allow read;
    }
    
    // Admin write access (authenticated users with specific email)
    match /{allPaths=**} {
      allow write: if request.auth != null && request.auth.token.email == 'abdoforanything1@gmail.com';
    }
  }
}
```

## Step 6: Set up Firebase Hosting

1. Go to "Hosting"
2. Click "Get Started"
3. Install Firebase CLI (if not already installed):
   ```
   npm install -g firebase-tools
   ```
4. Login to Firebase:
   ```
   firebase login
   ```
5. Initialize Firebase in your project:
   ```
   firebase init
   ```
   - Select Hosting, Firestore, Storage, and Authentication
   - Use the default options when prompted
   
6. Deploy to Firebase:
   ```
   npm run build
   firebase deploy
   ```

## Step 7: Configure Custom Domain

1. Go to "Hosting" in Firebase Console
2. Click "Add custom domain"
3. Enter your domain "alatrash.me"
4. Follow the DNS configuration instructions to verify ownership
5. Add the specified TXT and A records to your domain's DNS settings

## Step 8: Set up Environment Variables

Create a `.env` file in your project root with the following variables (fill in your specific values):

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Important Notes

- Never commit your `.env` file to Git repositories
- Update the admin email in security rules to match your actual email
- Consider implementing additional security measures for production
- Remember to regularly back up your Firestore data

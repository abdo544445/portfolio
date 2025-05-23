// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCkDKk-NgLyyLpC0FZAjPyo-ko9iQeNxGA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "abdoalatrash-portfolio.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "abdoalatrash-portfolio",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "abdoalatrash-portfolio.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "316799589093",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:316799589093:web:15b0109aaafb2cd0fc79e8",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-S17NCCB8K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

// Auth provider
export const googleProvider = new GoogleAuthProvider();

// Export Firebase instance and functions
export default app;
export {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  signInWithEmailAndPassword,
  signInWithPopup,
  logEvent
};


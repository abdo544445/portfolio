// src/firebase/auth/index.ts
import {
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';

export {
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  onAuthStateChanged,
  signOut,
  User
};
export * from 'firebase/auth';

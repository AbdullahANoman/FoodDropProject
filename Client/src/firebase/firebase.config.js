// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAepuTVICb3HDCRmkffPq_QMBR0B-EmbY",
  authDomain: "foodapp-d1c99.firebaseapp.com",
  projectId: "foodapp-d1c99",
  storageBucket: "foodapp-d1c99.appspot.com",
  messagingSenderId: "782888084914",
  appId: "1:782888084914:web:1846851eab7f91bb6270ab"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export {
  auth,
  createUserWithEmailAndPassword,
  googleProvider,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};

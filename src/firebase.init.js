// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvd98CXnSz26P3Cq2DAPj-htJouL3a2jM",
  authDomain: "react-router-auth-intrigation.firebaseapp.com",
  projectId: "react-router-auth-intrigation",
  storageBucket: "react-router-auth-intrigation.firebasestorage.app",
  messagingSenderId: "930611302112",
  appId: "1:930611302112:web:4a6f309942768b52418a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
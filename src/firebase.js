// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA33pTGBIINZi1D-H87xfL2sv5gxWOyRik",
  authDomain: "auth-4d580.firebaseapp.com",
  projectId: "auth-4d580",
  storageBucket: "auth-4d580.appspot.com",
  messagingSenderId: "679217023692",
  appId: "1:679217023692:web:78c759ae9dfcb418f55069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
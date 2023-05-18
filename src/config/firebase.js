// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTAvVhafONs0zyp2eYiV9lMma1m2kFJ3Y",
  authDomain: "projetoaulateste-6b4a1.firebaseapp.com",
  projectId: "projetoaulateste-6b4a1",
  storageBucket: "projetoaulateste-6b4a1.appspot.com",
  messagingSenderId: "201456909655",
  appId: "1:201456909655:web:114151382f7601b4e45212"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
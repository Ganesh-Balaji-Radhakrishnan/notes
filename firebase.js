// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBMmAImMy1Rdp5jz1iAc2f0LnqRc6PTI0",
  authDomain: "react-notes-eb99c.firebaseapp.com",
  projectId: "react-notes-eb99c",
  storageBucket: "react-notes-eb99c.appspot.com",
  messagingSenderId: "348139613881",
  appId: "1:348139613881:web:419227aa3ad0954e473568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

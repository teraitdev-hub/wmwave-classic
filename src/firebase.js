import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlHDkdo3-dI9FBflzwK-Qm7iE3yFJiT_A",
  authDomain: "wmwave.firebaseapp.com",
  projectId: "wmwave",
  storageBucket: "wmwave.firebasestorage.app",
  messagingSenderId: "759895687961",
  appId: "1:759895687961:web:40e6f5b1188d6ad214fb88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Cloud Firestore Database
export const db = getFirestore(app);

// Firebase Storage for images and PDFs
export const storage = getStorage(app);

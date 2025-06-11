import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOs1m6VQuk7pKX79BY8P7EU0RgPof-XTk",
  authDomain: "fir-34896.firebaseapp.com",
  projectId: "fir-34896",
  storageBucket: "fir-34896.firebasestorage.app",
  messagingSenderId: "174576090289",
  appId: "1:174576090289:web:2ae46ca34b7b05d493b690",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };

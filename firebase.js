// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBMaddp2bcXMGBVlFO4ysdXyC3-tJj1M-E",
  authDomain: "pixel-and-palette.firebaseapp.com",
  databaseURL: "https://pixel-and-palette-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pixel-and-palette",
  storageBucket: "pixel-and-palette.firebasestorage.app",
  messagingSenderId: "584921792584",
  appId: "1:584921792584:web:8f6a9435ec344554f3187d",
  measurementId: "G-B0ZSTH5PLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export
export { database };

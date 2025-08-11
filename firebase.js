// firebase.js
// Modular Firebase SDK (v12.x)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// --- SENING FIREBASE KONFIGURATIONING ---
const firebaseConfig = {
  apiKey: "AIzaSyAJGJAa0aovPXHbkCeZ6E2h1QXFVkZ6_Go",
  authDomain: "taklifnoma-36fa1.firebaseapp.com",
  projectId: "taklifnoma-36fa1",
  storageBucket: "taklifnoma-36fa1.firebasestorage.app",
  messagingSenderId: "802256204530",
  appId: "1:802256204530:web:b79c29a39ae1a96022966b"
};
// -------------------------------------------

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
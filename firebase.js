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

const expiredList = document.getElementById('expiredList');
expiredList.innerHTML = ''; // Clear old expired cards

snapshot.forEach(doc => {
  const data = doc.data();
  const card = makeCard(doc.id, data);
  const target = new Date(data.iso);
  const now = new Date();

  if (target < now) {
    expiredList.appendChild(card); // Show expired separately
  } else {
    list.appendChild(card); // Show active
    count++;
  }
});

resultMsg.textContent = `✅ ${count} ta faol taklifnoma topildi.`;


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// firebase.js - single-file ES module to initialize Firebase services
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDVd91HXS26MqRncs8nwucqZZD9jUsr6OY",
    authDomain: "medconect-ecb4c.firebaseapp.com",
    projectId: "medconect-ecb4c",
    storageBucket: "medconect-ecb4c.firebasestorage.app",
    messagingSenderId: "1984141861",
    appId: "1:1984141861:web:7d4fe5078891b6f69ebdcc",
    measurementId: "G-94PC3YF2HN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

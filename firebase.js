import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "YOUR-apiKey-nCVgNHJXTs",
  authDomain: "YOUR-authDomain.firebaseapp.com",
  projectId: "YOUR-projectId-fb",
  storageBucket: "YOUR-storageBucket-fb.appspot.com",
  messagingSenderId: "YOUR-messagingSenderId",
  appId: "YOUR-appId-web:11c8d54e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

//create your custom method
export const getWolfs = () => {
  return getDocs(collection(db, "yourNameCollection"));
};
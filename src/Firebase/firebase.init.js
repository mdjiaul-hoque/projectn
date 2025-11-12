
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0HY1DF6fuvH3kniTVMnBqpwcI1QNcRo4",
  authDomain: "projectt-ed028.firebaseapp.com",
  projectId: "projectt-ed028",
  storageBucket: "projectt-ed028.firebasestorage.app",
  messagingSenderId: "645067317355",
  appId: "1:645067317355:web:34f0e753f6b609e876912e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
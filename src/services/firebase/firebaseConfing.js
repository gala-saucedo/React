import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOoS43kkkgkeDYQOBCFa255naVnCK-4ME",
  authDomain: "ecommerce-1e463.firebaseapp.com",
  projectId: "ecommerce-1e463",
  storageBucket: "ecommerce-1e463.appspot.com",
  messagingSenderId: "682574695297",
  appId: "1:682574695297:web:c0626753be11a8458d7680"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
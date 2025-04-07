// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxdgsM_GJEBRiF09Vj4UoRQUA12Eaq4Ek",
  authDomain: "nstm-foods.firebaseapp.com",
  projectId: "nstm-foods",
  storageBucket: "nstm-foods.firebasestorage.app",
  messagingSenderId: "605007176266",
  appId: "1:605007176266:web:812ed2497854571f457cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
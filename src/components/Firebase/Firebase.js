// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZNaMbyUhrEtTvSCzL_GY8b2Ok8m5VCFs",
  authDomain: "netflix-use.firebaseapp.com",
  projectId: "netflix-use",
  storageBucket: "netflix-use.appspot.com",
  messagingSenderId: "1093397550276",
  appId: "1:1093397550276:web:6a1de1b5f95a4a4414e591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth()

export const dataBase = getFirestore()

export default app;
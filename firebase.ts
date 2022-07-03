// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpMZSJ_dq6tzEs12YHbA3IM1--TIrnVT8",
    authDomain: "netflix-clone-c6f79.firebaseapp.com",
    projectId: "netflix-clone-c6f79",
    storageBucket: "netflix-clone-c6f79.appspot.com",
    messagingSenderId: "791956727349",
    appId: "1:791956727349:web:f565a491b366298431737c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

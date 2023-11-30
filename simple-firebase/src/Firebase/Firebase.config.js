// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMDhZIleDVJqdmeR4xckeRganS6AiEsF8",
  authDomain: "simple-firebase-f460f.firebaseapp.com",
  projectId: "simple-firebase-f460f",
  storageBucket: "simple-firebase-f460f.appspot.com",
  messagingSenderId: "846907932476",
  appId: "1:846907932476:web:e8ecc5dbff8be1d727e839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzBDSkVikc-M2rkjjd27lZc7RJKZIfiaQ",
  authDomain: "dragon-news-auth-5bd34.firebaseapp.com",
  projectId: "dragon-news-auth-5bd34",
  storageBucket: "dragon-news-auth-5bd34.appspot.com",
  messagingSenderId: "173824464331",
  appId: "1:173824464331:web:652818bc156d9de3af524e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxjqALbkxx-nj5in92BlhJ9y-81BLUMAI",
  authDomain: "auth-moha-milon-18f08.firebaseapp.com",
  projectId: "auth-moha-milon-18f08",
  storageBucket: "auth-moha-milon-18f08.appspot.com",
  messagingSenderId: "1044575029370",
  appId: "1:1044575029370:web:7e79cf22a313e04ba5d3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

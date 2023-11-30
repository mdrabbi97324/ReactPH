// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxW4JGVNT6g755paQS6jfi3yr_3GgI3w0",
  authDomain: "email-authentication-lr.firebaseapp.com",
  projectId: "email-authentication-lr",
  storageBucket: "email-authentication-lr.appspot.com",
  messagingSenderId: "956808821993",
  appId: "1:956808821993:web:428e69bfa76ec5cd1b0478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIOP14VWHwaz_eiTrga8vU-U_eobHYspI",
  authDomain: "fuel-up-2023.firebaseapp.com",
  projectId: "fuel-up-2023",
  storageBucket: "fuel-up-2023.appspot.com",
  messagingSenderId: "174054239521",
  appId: "1:174054239521:web:53916f8619a66f5818e260",
  measurementId: "G-P29HQJM1W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
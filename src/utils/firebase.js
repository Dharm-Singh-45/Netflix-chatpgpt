// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrhNyNLPgxZRQrfu1HIoTTDsT32ccz9E",
  authDomain: "net-flix-app-7a009.firebaseapp.com",
  projectId: "net-flix-app-7a009",
  storageBucket: "net-flix-app-7a009.firebasestorage.app",
  messagingSenderId: "39239812936",
  appId: "1:39239812936:web:b711f5c7c78c0cfa64157d",
  measurementId: "G-WZE103GPHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth  = getAuth();
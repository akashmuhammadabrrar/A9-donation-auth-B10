// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6b8GleebRFLvQVZfR33nYaL_WSKpxWiE",
  authDomain: "donation-cloths-auth.firebaseapp.com",
  projectId: "donation-cloths-auth",
  storageBucket: "donation-cloths-auth.firebasestorage.app",
  messagingSenderId: "691544777371",
  appId: "1:691544777371:web:50b9a7d49f928893bf5c3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

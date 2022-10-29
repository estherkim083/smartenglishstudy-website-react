// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlEPMQYhq7o6x21RwfPBQh3sHxo0p4dI",
  authDomain: "english-website-362600.firebaseapp.com",
  projectId: "english-website-362600",
  storageBucket: "english-website-362600.appspot.com",
  messagingSenderId: "790842426643",
  appId: "1:790842426643:web:f45d23c026b573e55686e6",
  measurementId: "G-LX8PL19HD7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db= getFirestore();
const storage = getStorage();
export {app, db, storage};
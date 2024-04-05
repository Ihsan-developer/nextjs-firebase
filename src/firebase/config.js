// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjH7NPOuQKcG4REdZAiNBjPmHssoopBWg",
  authDomain: "nextjs-firebase-81fa7.firebaseapp.com",
  projectId: "nextjs-firebase-81fa7",
  storageBucket: "nextjs-firebase-81fa7.appspot.com",
  messagingSenderId: "358090203989",
  appId: "1:358090203989:web:9d58dde805db55f8a5c5dc",
  measurementId: "G-RJJ5L5T84V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
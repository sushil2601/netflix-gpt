// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmqsmQJhzAkCl8NBzN9AHxE9PxMmhnl6Y",
  authDomain: "netflixchatgpt-bfdd2.firebaseapp.com",
  projectId: "netflixchatgpt-bfdd2",
  storageBucket: "netflixchatgpt-bfdd2.firebasestorage.app",
  messagingSenderId: "864622590669",
  appId: "1:864622590669:web:86c8ce8d12c92173c5c784",
  measurementId: "G-1LVWE9GL1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
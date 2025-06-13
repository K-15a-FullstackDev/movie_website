// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmtLxGrgquh7eizAev4YIBLYndpEX6A3U",
  authDomain: "netflixgpt-k.firebaseapp.com",
  projectId: "netflixgpt-k",
  storageBucket: "netflixgpt-k.firebasestorage.app",
  messagingSenderId: "279030468895",
  appId: "1:279030468895:web:fa2d098c002140ec45602a",
  measurementId: "G-NVDC45E5BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

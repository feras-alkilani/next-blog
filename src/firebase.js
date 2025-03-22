// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-2551b.firebaseapp.com",
  projectId: "insta-next-2551b",
  storageBucket: "insta-next-2551b.appspot.com",
  messagingSenderId: "1004528055367",
  appId: "1:1004528055367:web:440a120489f10005c7ad62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

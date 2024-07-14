// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-eb82b.firebaseapp.com",
  projectId: "mern-blog-eb82b",
  storageBucket: "mern-blog-eb82b.appspot.com",
  messagingSenderId: "542084777454",
  appId: "1:542084777454:web:64a134fa22743b5617faff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
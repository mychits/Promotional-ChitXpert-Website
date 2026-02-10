// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   appId: "YOUR_APP_ID",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // ✅ EXPORT auth (THIS IS IMPORTANT)
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3gLECwu8REAwZQtvQzzMd72D8xDvkpKA",
  authDomain: "mychits-17a68.firebaseapp.com",
  projectId: "mychits-17a68",
  storageBucket: "mychits-17a68.firebasestorage.app",
  messagingSenderId: "184932710676",
  appId: "1:184932710676:web:2a0e57f51b014334786a01",
  measurementId: "G-3656FDB4RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 export const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "portfolio-94b33.firebaseapp.com",
  projectId: "portfolio-94b33",
  storageBucket: "portfolio-94b33.appspot.com",
  messagingSenderId: "937288327904",
  appId: "1:937288327904:web:d1d95e0c89fc3bbf8f6685",
  measurementId: "G-RLYTGVF5KS",
  apiKey: process.env.NEXT_PUBLIC_apiKey,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

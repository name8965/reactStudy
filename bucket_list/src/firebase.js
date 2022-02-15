// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZ1X3D4SiqahmsFZX2m9948uGbbYwZ4E",
  authDomain: "sparta-react-basic-7575d.firebaseapp.com",
  projectId: "sparta-react-basic-7575d",
  storageBucket: "sparta-react-basic-7575d.appspot.com",
  messagingSenderId: "884696010874",
  appId: "1:884696010874:web:17e05da49436057bbfebc3",
  measurementId: "G-PS1W416963",
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();

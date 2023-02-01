// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZ1UCsSFWyuhjTtpnKi8KQwgeoz2aOKw",
  authDomain: "chat-app-db622.firebaseapp.com",
  projectId: "chat-app-db622",
  storageBucket: "chat-app-db622.appspot.com",
  messagingSenderId: "183385756019",
  appId: "1:183385756019:web:b1b1123208220d71b4b506",
  measurementId: "G-QTXP4ZTZ9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
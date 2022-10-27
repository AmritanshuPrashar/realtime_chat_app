
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDGrACi20hNcAOvW16msZOX4ylu_nTaXr8",
  authDomain: "gochat-da1e3.firebaseapp.com",
  projectId: "gochat-da1e3",
  storageBucket: "gochat-da1e3.appspot.com",
  messagingSenderId: "493842588208",
  appId: "1:493842588208:web:103b59128089b4eddd83f5"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
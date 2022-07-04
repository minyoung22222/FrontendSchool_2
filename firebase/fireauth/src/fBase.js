// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvtkvze-MgbBfYaNUy7X1iZSYJOCJ1Qoo",
  authDomain: "test-80a7b.firebaseapp.com",
  projectId: "test-80a7b",
  storageBucket: "test-80a7b.appspot.com",
  messagingSenderId: "78243216757",
  appId: "1:78243216757:web:d0ee0d6715f692d192a73c",
  measurementId: "G-RV3VPSWSMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authService = getAuth();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1ZaUGPnOd-PUIRwf_EdVHOPFKSQeMUrw",
  authDomain: "finance-tracker-c6c78.firebaseapp.com",
  projectId: "finance-tracker-c6c78",
  storageBucket: "finance-tracker-c6c78.firebasestorage.app",
  messagingSenderId: "321816326538",
  appId: "1:321816326538:web:983fed50ac28d8d0fd5873",
  measurementId: "G-4YKK7W5TV7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

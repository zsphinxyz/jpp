import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "zjppapp.firebaseapp.com",
  projectId: "zjppapp",
  storageBucket: "zjppapp.appspot.com",
  messagingSenderId: "321195852049",
  appId: "1:321195852049:web:0485b0dc2133a2f0d6ccb0",
  measurementId: "G-39G1LZLC98"
};

// Initialize Firebase
const app = getApps().length < 1 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5Y6RdLpjU9abIsbLJy2LKD0tQ_XmHobs",
  authDomain: "zjpp-app.firebaseapp.com",
  projectId: "zjpp-app",
  storageBucket: "zjpp-app.appspot.com",
  messagingSenderId: "1097994899638",
  appId: "1:1097994899638:web:c4a94390b6dee372095617",
  measurementId: "G-RR3X8NE9S3"
};
// Initialize Firebase
const app = getApps().length < 1 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
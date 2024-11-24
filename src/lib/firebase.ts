import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, memoryLocalCache, persistentLocalCache,initializeFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
import {  } from "firebase/firestore";

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
const app = getApps().length  ? getApp() : initializeApp(firebaseConfig);
// const firestoreDB =  initializeFirestore(app, { localCache: persistentLocalCache(/*cached*/{}) })
// const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
// const analytics = getAnalytics(app);
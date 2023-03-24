import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_KEY,
    authDomain: "turbo-shops.firebaseapp.com",
    projectId: "turbo-shops",
    storageBucket: "turbo-shops.appspot.com",
    messagingSenderId: import.meta.env.FIREBASE_MESSID,
    appId: import.meta.env.FIREBASE_APPID
}; // Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database };
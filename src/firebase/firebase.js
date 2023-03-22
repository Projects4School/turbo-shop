import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_KEY,
    authDomain: "turbo-shops.firebaseapp.com",
    projectId: "turbo-shops",
    storageBucket: "turbo-shops.appspot.com",
    messagingSenderId: "997009981183",
    appId: "1:997009981183:web:23b883f5a162f0751e96ca"
}; // Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW-sZdYfxZfR162pbKD2-1eAsVhjuPRw4",
    authDomain: "madgeekcollectibles-753bc.firebaseapp.com",
    projectId: "madgeekcollectibles-753bc",
    storageBucket: "madgeekcollectibles-753bc.appspot.com",
    messagingSenderId: "214642247081",
    appId: "1:214642247081:web:ea7eb7cf22113db20970b8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
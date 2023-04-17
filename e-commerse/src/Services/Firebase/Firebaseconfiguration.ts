import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCyrK3FDGyU79QA57n-MlyR__BJQr7oSLs",
  authDomain: "ecommerse-88cbb.firebaseapp.com",
  projectId: "ecommerse-88cbb",
  storageBucket: "ecommerse-88cbb.appspot.com",
  messagingSenderId: "493167763413",
  appId: "1:493167763413:web:856b493372daf6ed9ce75c",
  measurementId: "G-809VYGEC6S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage =getStorage(app);

export { app, auth,db,storage};

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgoJE9Wj8CH9zf5jo9noaQ8-LsbJlI-o4",
  authDomain: "cloning-b4a59.firebaseapp.com",
  projectId: "cloning-b4a59",
  storageBucket: "cloning-b4a59.appspot.com",
  messagingSenderId: "616628796775",
  appId: "1:616628796775:web:20ef06fe898b08201983c2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

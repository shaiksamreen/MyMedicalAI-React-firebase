// Import the functions you need from the SDKs you need
import { initializeApp , firebase} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions , httpsCallable} from "firebase/functions";
// import { getStorage } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: //,
  // authDomain: //,
  // projectId: //,
  // storageBucket: //,
  // messagingSenderId: //,
  // appId://,
  // measurementId: //
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore();
const functions = getFunctions(app);
const storage = getStorage();

export { app, auth, functions, storage, ref, uploadBytes, getDownloadURL, httpsCallable };


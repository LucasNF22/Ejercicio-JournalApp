// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6W6N4jh7z0AKYWcHGIw15jFDowjpWmbc",
  authDomain: "curso-react-10394.firebaseapp.com",
  projectId: "curso-react-10394",
  storageBucket: "curso-react-10394.appspot.com",
  messagingSenderId: "731733521031",
  appId: "1:731733521031:web:26e74a3ebaa3e601b67e22"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
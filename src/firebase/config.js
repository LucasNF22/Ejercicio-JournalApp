// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//Dev-Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyB6W6N4jh7z0AKYWcHGIw15jFDowjpWmbc",
//   authDomain: "curso-react-10394.firebaseapp.com",
//   projectId: "curso-react-10394",
//   storageBucket: "curso-react-10394.appspot.com",
//   messagingSenderId: "731733521031",
//   appId: "1:731733521031:web:26e74a3ebaa3e601b67e22"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDyGWniGTnJrSFFPKvQfLgZjK8M_8hrFpQ",
  authDomain: "testing-firebase-5b58d.firebaseapp.com",
  projectId: "testing-firebase-5b58d",
  storageBucket: "testing-firebase-5b58d.appspot.com",
  messagingSenderId: "756133884827",
  appId: "1:756133884827:web:d5878cfa88edbcbb3aa73e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
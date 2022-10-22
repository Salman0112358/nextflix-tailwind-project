// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPdDtcgeyEllp9tHZBaJ5pNoo1virpH2w",
    authDomain: "salmanflix-af3a7.firebaseapp.com",
    projectId: "salmanflix-af3a7",
    storageBucket: "salmanflix-af3a7.appspot.com",
    messagingSenderId: "407213313161",
    appId: "1:407213313161:web:bc9a2b7956618728480a58",
    measurementId: "G-2BCYXLSJ9M"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app);
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
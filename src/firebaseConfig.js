// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3QD3HYK7qm5KQRdE6_UC4hv91Asg5Hg0",
  authDomain: "ccny-summer.firebaseapp.com",
  projectId: "ccny-summer",
  storageBucket: "ccny-summer.appspot.com",
  messagingSenderId: "727899079393",
  appId: "1:727899079393:web:f03c4b225aecfdfa5beda0",
  measurementId: "G-5XDD1BH8DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {app, auth, firestore};


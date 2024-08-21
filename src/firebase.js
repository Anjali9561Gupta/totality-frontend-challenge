// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl75mwoUMRnK4DuxFfNX41yLiqM_eZJqY",
  authDomain: "rental-9264a.firebaseapp.com",
  projectId: "rental-9264a",
  storageBucket: "rental-9264a.appspot.com",
  messagingSenderId: "90163100578",
  appId: "1:90163100578:web:b70c961a104e49ea06d0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


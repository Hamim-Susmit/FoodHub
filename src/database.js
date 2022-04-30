import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMShKONc6jdYr6n-GTLvdWAkIC_h9T3A",
  authDomain: "cse470-862db.firebaseapp.com",
  projectId: "cse470-862db",
  storageBucket: "cse470-862db.appspot.com",
  messagingSenderId: "818475311336",
  appId: "1:818475311336:web:3259ab55639fe4e818295d"
};

// Initialize Firebase

const Firebase = firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export { db };
export default firebase;
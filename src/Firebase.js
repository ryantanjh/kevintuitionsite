import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAc1l8kQ3PEu-TDhaipEc6j29OU4_0sAw",
  authDomain: "kevin-s-tuition.firebaseapp.com",
  projectId: "kevin-s-tuition",
  storageBucket: "kevin-s-tuition.appspot.com",
  messagingSenderId: "850182024713",
  appId: "1:850182024713:web:e7995b6624699186f012d8",
  measurementId: "G-DQCYT5J813",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;

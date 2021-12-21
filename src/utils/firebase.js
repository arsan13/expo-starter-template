// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbfYf1bS7aMa96_n5C9S5AvSjMXnRVAE",
  authDomain: "labapp-412a5.firebaseapp.com",
  projectId: "labapp-412a5",
  storageBucket: "labapp-412a5.appspot.com",
  messagingSenderId: "860679276927",
  appId: "1:860679276927:web:fe68008f2cffb96c00b24a",
  measurementId: "G-J94ZLXW10Z",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase as default };

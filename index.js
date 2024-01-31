// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlEZGAZJrKCZaP0gfWqo7aQen7mtnuQ4Y",
  authDomain: "bigcheddardiscclub.firebaseapp.com",
  projectId: "bigcheddardiscclub",
  storageBucket: "bigcheddardiscclub.appspot.com",
  messagingSenderId: "589334482899",
  appId: "1:589334482899:web:15bba33109afa8fa3f2926",
  measurementId: "G-3657CS34X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "Players")

getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs);
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});




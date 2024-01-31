import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlEZGAZJrKCZaP0gfWqo7aQen7mtnuQ4Y",
  authDomain: "bigcheddardiscclub.firebaseapp.com",
  databaseURL: "https://bigcheddardiscclub-default-rtdb.firebaseio.com",
  projectId: "bigcheddardiscclub",
  storageBucket: "bigcheddardiscclub.appspot.com",
  messagingSenderId: "589334482899",
  appId: "1:589334482899:web:15bba33109afa8fa3f2926",
  measurementId: "G-3657CS34X0"
};

//init app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "Player");

//queries
 //const o = query(colRef, where("Name", "!=", "Adam"), orderBy("Name","desc"));
 //const q = query(o, where('Name',"==","Andrew"));

//get  real time data
onSnapshot(colRef, (snapshot) => {
  let Players = []
  snapshot.docs.forEach((doc) => {
    Players.push({ ...doc.data(), id: doc.id })
  });
  console.log(Players)
})

//add data
const addPlayerForm = document.querySelector('.add')
addPlayerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addDoc(colRef, {
    Name: addPlayerForm.playerName.value,
  }).then(() => {
    addPlayerForm.reset();
  })
});

//delete data
const deletePlayerForm = document.querySelector('.delete')
deletePlayerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'Player', deletePlayerForm.id.value);

  deleteDoc(docRef).then(() => {
    deletePlayerForm.reset();
  })

});

//get a single doc
const docRef = doc(db, "Player", "vxEgBbrqx4JwkyRl7CiR")

onSnapshot(docRef, (doc) => {
  console.log( {...doc.data(), id: doc.id});
})

//update docs
const updatePlayerForm = document.querySelector('.update')
updatePlayerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, "Player", updatePlayerForm.id.value)

  updateDoc(docRef, {
    Name: "Joshua"
  }).then(() => {
    updatePlayerForm.reset();
  })


});
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIboey0uWpDkZW4FBJLsCGAXiOXH5z8iM",
  authDomain: "clone-b2eca.firebaseapp.com",
  projectId: "clone-b2eca",
  storageBucket: "clone-b2eca.appspot.com",
  messagingSenderId: "176896742316",
  appId: "1:176896742316:web:4c9ce7d4a8c592c134a009",
  measurementId: "G-9V31FEM3WK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
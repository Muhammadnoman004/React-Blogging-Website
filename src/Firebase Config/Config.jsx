// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, updateDoc, doc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFDv22OczW0tsvgqDfwVgxSISEZqV_TfI",
    authDomain: "react-blogging-website-52472.firebaseapp.com",
    projectId: "react-blogging-website-52472",
    storageBucket: "react-blogging-website-52472.appspot.com",
    messagingSenderId: "1070992269449",
    appId: "1:1070992269449:web:7a8de9539dadee8b2b2658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    db, collection, addDoc, onSnapshot, deleteDoc, updateDoc, doc
}
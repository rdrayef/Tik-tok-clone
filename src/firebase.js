// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZv-PyzJx6F_tNeJqLrnjpo_Tz9LVExx0",
    authDomain: "tik-tok-clone-32d7f.firebaseapp.com",
    projectId: "tik-tok-clone-32d7f",
    storageBucket: "tik-tok-clone-32d7f.appspot.com",
    messagingSenderId: "627773165680",
    appId: "1:627773165680:web:e2667477f0c31612aae4b5",
    measurementId: "G-T0B34VQTKZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
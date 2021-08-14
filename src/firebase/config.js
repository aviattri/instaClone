import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";
//storage to store the imgs
import "firebase/storage";
//firestore is the datrabase
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDaABtTcf1ag3HT4-AnDHeqpQVOEbaj1Fg",
  authDomain: "photogallery-7460a.firebaseapp.com",
  projectId: "photogallery-7460a",
  storageBucket: "photogallery-7460a.appspot.com",
  messagingSenderId: "697626558846",
  appId: "1:697626558846:web:356d5480e3496ae60a332f",
  measurementId: "G-ZR5VSF092C",
};
// Initialize Firebase app and connect to the backend

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
// Initialise the 2 different services
// storage service
const projectStorage = firebase.storage();
// database
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };

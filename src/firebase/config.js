import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYaIPMMdQXOO-kXN5gAuxNkbVZm57NPrc",
  authDomain: "musics-project.firebaseapp.com",
  projectId: "musics-project",
  storageBucket: "musics-project.appspot.com",
  messagingSenderId: "782322336979",
  appId: "1:782322336979:web:85869e23b4f0f301540026",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

// init TimeStamp

const projectTimeStamp = firebase.firestore.FieldValue.serverTimestamp;

console.log("projectTimeStamp=>", projectTimeStamp);
export { projectFireStore, projectAuth, projectTimeStamp };

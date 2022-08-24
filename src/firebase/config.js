import firebase from "firebase/app";
import "firebase/firestore";

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

// init firestore
const projectFireStore = firebase.firestore();

export { projectFireStore };

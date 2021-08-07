import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdxzb5GXFMTjtRevtYv0US8ltTMbVKIqA",
    authDomain: "react-ecommerce-858ac.firebaseapp.com",
    projectId: "react-ecommerce-858ac",
    storageBucket: "react-ecommerce-858ac.appspot.com",
    messagingSenderId: "900657582915",
    appId: "1:900657582915:web:bf96dd385c6f1f7d6a15f6"
  };


 const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore() {
  return firebase.firestore(app)
}
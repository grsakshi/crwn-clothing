import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDg3bHY54SV0gaQLiW-tdYp61SNNrQLvsY",
    authDomain: "crwn-db-7ee81.firebaseapp.com",
    projectId: "crwn-db-7ee81",
    storageBucket: "crwn-db-7ee81.appspot.com",
    messagingSenderId: "513070913502",
    appId: "1:513070913502:web:5cf4c162906bd6214bef4f",
    measurementId: "G-GBJQQQ8KKP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
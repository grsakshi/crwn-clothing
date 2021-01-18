import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDg3bHY54SV0gaQLiW-tdYp61SNNrQLvsY",
  authDomain: "crwn-db-7ee81.firebaseapp.com",
  databaseURL: "https://crwn-db-7ee81-default-rtdb.firebaseio.com",
  projectId: "crwn-db-7ee81",
  storageBucket: "crwn-db-7ee81.appspot.com",
  messagingSenderId: "513070913502",
  appId: "1:513070913502:web:5cf4c162906bd6214bef4f"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
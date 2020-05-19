import firebase from 'firebase/app';
// We only import the firebase libraries we need
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7Yq8O7dp18t4ngLhRJcafml1GcJpJIwI",
    authDomain: "crown-ztm-db.firebaseapp.com",
    databaseURL: "https://crown-ztm-db.firebaseio.com",
    projectId: "crown-ztm-db",
    storageBucket: "crown-ztm-db.appspot.com",
    messagingSenderId: "1000986588388",
    appId: "1:1000986588388:web:82da3c524bfebcae3aa8f1",
    measurementId: "G-NQHZJYRWER"
  };

  firebase.initializeApp(config);

  // Configuration of firebase utility
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Configuation of Google authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
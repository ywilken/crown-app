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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    
    // console.log(userRef)
    // console.log(userRef.get())

    return userRef;
  }

  firebase.initializeApp(config);

  // Configuration of firebase utility
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Configuation of Google authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;




/*   // Learning Firebase referenceObject & snapshotObject
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/1234kdk'));
    console.log(firestore.doc('users/1234kdk').get());

    const exampleDocumentReference = firestore.doc('users/1234kdk');
    const exampleDocumentSnapshot = await exampleDocumentReference.get();
    console.log(exampleDocumentReference);
    console.log(exampleDocumentSnapshot);
    const myImaginaryData = exampleDocumentSnapshot.data();
    console.log(myImaginaryData);

    const exampleDocumentReference_exists = firestore.doc('users/myFirstDocument');
    const exampleDocumentSnapshot_exists = await exampleDocumentReference_exists.get(); 
    console.log(exampleDocumentSnapshot_exists);
    const myData  = exampleDocumentSnapshot_exists.data();
    console.log(`Retrieved Data: ${JSON.stringify(myData)}`);
    console.log(myData);
    console.log(myData.firstName);
  } */
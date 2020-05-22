import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// How to access date
// Option 01
/* 1. */ firestore.collection('users')
/* 2. */ firestore.collection('users').doc('Ohuo6bQWDcQHFI31lSh2')
/* 3. */ firestore.collection('users').doc('Ohuo6bQWDcQHFI31lSh2').collection('cartItems').doc('Jbh0e8pkRvA2FZ6FLih6');

// Option 02
/* 1. */ firestore.doc('/users/Ohuo6bQWDcQHFI31lSh2/cartItems/Jbh0e8pkRvA2FZ6FLih6');
/* 2. */ firestore.collection('/users/Ohuo6bQWDcQHFI31lSh2/cartItems');
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzoOywseubEVsrlsTZJmpi6EiGozSKU1Q',
  authDomain: 'where-s-waldo-455f0.firebaseapp.com',
  projectId: 'where-s-waldo-455f0',
  storageBucket: 'where-s-waldo-455f0.appspot.com',
  messagingSenderId: '1054009135711',
  appId: '1:1054009135711:web:44d83e8c32142c8cf241ea',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: '',

  authDomain: '',

  projectId: '',

  storageBucket: '',

  messagingSenderId: '',

  appId: '',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Initialize FileStorage
const projectStorage = firebase.storage();

// Initialize  Firestore
const projectFirestore = firebase.firestore();

// Initialize timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

import * as firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCAI5AJfOQbZApwNg7wU0EqFpmgPDyV3q0",
  authDomain: "durrelllyonsperforms.firebaseapp.com",
  databaseURL: "https://durrelllyonsperforms.firebaseio.com",
  projectId: "durrelllyonsperforms",
  storageBucket: "durrelllyonsperforms.appspot.com",
  messagingSenderId: "541233198141"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const photoCatRef = rootRef.child('photo_cat');
export const photoRef = rootRef.child('photos');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
export const storageRef = firebase.storage().ref();

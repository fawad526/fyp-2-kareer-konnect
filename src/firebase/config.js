
import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo0v9mcjrQPT1xfV0IXkMBUla8VYuUiYg",
  authDomain: "job-listing-8796f.firebaseapp.com",
  projectId: "job-listing-8796f",
  storageBucket: "job-listing-8796f.appspot.com",
  messagingSenderId: "296083921584",
  appId: "1:296083921584:web:5ac37b790794967a2cf975"
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase,firestore,app};
import firebase from 'firebase'
// import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmGnMT66bkyCcGrTYNOWTczIATGwTydmk",
  authDomain: "timeovergrow-3e1ca.firebaseapp.com",
  projectId: "timeovergrow-3e1ca",
  storageBucket: "timeovergrow-3e1ca.appspot.com",
  messagingSenderId: "219011344413",
  appId: "1:219011344413:web:bb9edbc8a3ca0c44ffbef4",
  measurementId: "G-5KC7H92YQP"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection('messages');
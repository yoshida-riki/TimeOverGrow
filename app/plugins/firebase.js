import firebase from 'firebase'
import firebaseAuth from './firebase.auth'

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
}

let userId;
firebase.auth().onAuthStateChanged( user => {
  if (user) {
    // User is signed in
    console.log('is login');
    
    userId = user.uid;
    db.collection('users').doc(userId).set({
      userId: userId,
    })
    console.log(userId);
    
    return userId
  } else {
    console.log('No user is signed in.')
  }
})

console.log(userId);

export const db = firebase.firestore();
// export const dbMessages = db.collection('messages');
export const dbMessages = db.collection('users').doc(userId).collection('messages');

export const auth = firebase.auth
export default firebase

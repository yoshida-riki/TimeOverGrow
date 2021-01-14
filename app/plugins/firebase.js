import firebase from 'firebase'
import firebaseAuth from './firebase.auth'


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
}

let userId;
firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    // User is signed in.
    console.log('is login.')

    userId = user.uid;
    dbUser.doc(userId).set({
      // userId:userId
    })
    console.log(user.uid);
    return userId
  } else {
    // No user is signed in.
    console.log('No user is signed in.')
  }
})
console.log(userId);

export const db = firebase.firestore()
export const dbUser = db.collection('user')
export const dbMessages = dbUser.doc(userId).collection('messages')

export const auth = firebase.auth
export default firebase

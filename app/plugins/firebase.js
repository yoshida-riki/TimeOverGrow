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
(function userauth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        // User is signed in.
        console.log('is login.')

        userId = user.uid;
        db.collection('user').doc(userId).set({
          userId,
        })
        console.log(userId);

        return userId
        resolve(userId)
      } else {
        // No user is signed in.
        console.log('No user is signed in.')
      }
    })
  })
})()

export const db = firebase.firestore()
export const dbUser = db.collection('user').doc(userId)
export const dbMessages = dbUser.collection('messages')


export const auth = firebase.auth
export default firebase

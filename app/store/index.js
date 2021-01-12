import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '../plugins/firebase'

import firebase from '../plugins/firebase'

Vue.use(Vuex);

export const strict = false

export const state = () => ({
    user: null,
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    // let userId;
    // firebase.auth().onAuthStateChanged( user => {
    //     if (user) {
    //         // User is signed in
    //         console.log('is login');
            
    //         userId = user.uid;
    //         db.collection('messages').doc(userId).set({
    //         userId: userId,
    //         })
    //         console.log(userId);
            
    //         return userId
    //     } else {
    //         console.log('No user is signed in.')
    //     }
    // }),

    signUp({ commit }, { email, password }) {
        return auth().createUserWithEmailAndPassword(email, password)
    },

    signInWithEmail({ commit }, { email, password }) {
        return auth().signInWithEmailAndPassword(email, password)
    },

    signInWithGoogle({ commit }){
        return auth().signInWithPopup(new auth.GoogleAuthProvider())
    },

    signOut() {
        return auth().signOut()
    }
}

export const getters = {
    user(state){
        return state.user
    },
    isAuthenticated (state) {
        return !!state.user
    }
}

// export default new Vuex.Store({
//     // state: {
//     //   idToken: null
//     // }, 
//     // getters: {
//     //   idToken: state => state.idToken
//     // },
//     mutations: {
//       updateIdToken(state, idToken) { 
//         state.idToken = idToken;
//       }
//     },
// });
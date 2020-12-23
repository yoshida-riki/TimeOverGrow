import { firestoreAction } from 'vuexfire'
import firebase from '../plugins/firebase'

const db = firebase.firestore()
const commentsRef = db.collection('comments')

export const state = () => ({
  comments: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('comments', commentsRef)
  }),
  add: firestoreAction((context, { index, name }) => {
    if (index.trim()) {
      commentsRef.add({
        name,
        index,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
  }),
}

export const getters = {
  orderdComments: (state) => {
    let _
    return _.sortBy(state.comments, 'created')
  },
}

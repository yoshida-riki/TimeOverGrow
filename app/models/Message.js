import firebase from 'firebase'
import { dbMessages } from '../plugins/firebase'
import firebaseAuth from '../plugins/firebase.auth';
import auth from '../plugins/firebase.auth'

class Message {
  constructor ({id, time, body, date}) {
    this.id = id;
    this.time = time;
    this.body = body;
    this.date = date;
  }

  static async save({ time, body }) {
    if (!time) {
      throw new Error('入力欄が空欄です。');
    }

    if (!body || !body.trim()) {
      throw new Error('入力欄が空欄です。');
    }

    const postData = {
      time,
      body,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await dbMessages.add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = this.create(docRef.id, data);
    // const model = this.create(user.uid, data);

    return model;
  }

  static async fetchMessages() {
    const collection = await dbMessages.orderBy('date').get();
    if (collection.empty) {
      return [];
    }

    return collection.docs.map(doc => {
      return this.create(userId, doc.data())
    });
  }

  static create(id, data) {
    return new Message({
      id,
      time: data.time,
      body: data.body,
      date: data.date.toDate().toLocaleString()
    });
  };

  static async dbtime() {
    try {
      const querySnapshot = await dbMessages.get()
      let totaltime = 0
      querySnapshot.forEach((postDoc) => {
        totaltime += postDoc.data().time
      })
      return totaltime
    } catch (err) {
      alert('dbtimeエラー')
    }
  }
}

export default Message;

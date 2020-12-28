import firebase from 'firebase'
import { dbMessages } from '../db'

class Message {
  constructor ({id, body, date}) {
    this.id = id;
    this.body = body;
    this.date = date;
  }

  static async save({ body }) {
    if (!body || !body.trim()) {
      throw new Error('入力欄が空欄です。');
    }

    const postData = {
      body,
      date: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await dbMessages.add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = this.create(docRef.id, data);

    return module;
  }

  static async fetchMessages() {
    const collection = await dbMessages.orderBy('date').get();
    if (collection.empty) {
      return [];
    }

    return collection.docs.map(doc => {
      return this.create(doc.id, doc.data())
    });
  }

  static create(id, data) {
    return new Message({
      id,
      body: data.body,
      date: data.date.toDate().toLocaleString()
    });
  }
}


export default Message;
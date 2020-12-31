import firebase from 'firebase'
import { dbMessages } from '../db'

class Message {
  constructor ({id, time, body, date}) {
    this.id = id;
    this.time = time;
    this.body = body;
    this.date = date;
  }

  static async save({ time, body }) {
    if (!time || !time.trim()) {
      throw new Error('入力欄が空欄です。');
    }

    if (!body || !body.trim()) {
      throw new Error('入力欄が空欄です。');
    }

    const postData = {
      time,
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
      time: data.time,
      body: data.body,
      date: data.date.toDate().toLocaleString()
    });
  };

  // 合計学習時間取得
  // let value = Number(document.getString(dbMessages));





}

const dbtime = dbMessages.where('time', '>=', '0')
console.log(dbtime);

export default Message;
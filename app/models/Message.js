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

    return model;
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
}

async function dbtime() {
  try {
    // 省略 
    // (Cloud Firestoreのインスタンスを初期化してdbにセット)
    // firebase.firestore.QuerySnapshotのインスタンスを取得
    const querySnapshot = await dbMessages.get()
    let totaltime = 0
    querySnapshot.forEach((postDoc) => {
      // console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data().time))
      // console.log(JSON.stringify(postDoc.data().time));
      totaltime += postDoc.data().time
      
    })
    console.log(totaltime);
    // const totaldbtime = await dbtime()
    // console.log(totaldbtime);
    // let myVal = utility.dbtime().then(result => console.log(result));
    
  } catch (err) {
    alert('dbtimeエラー')
  }
}

// const myVal = utility.dbtime().then(result => console.log(result));
// console.log(myVal);
dbtime()
// console.log(totalldbtime);

export default Message;
export { dbtime }
// export { totalldbtime }
// console.log(totalltime);

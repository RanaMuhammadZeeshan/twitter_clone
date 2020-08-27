import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7qxTbD30f91-aZmDD_-8VyW6XAZdpY_M",
  authDomain: "twitter-clone-7ba59.firebaseapp.com",
  databaseURL: "https://twitter-clone-7ba59.firebaseio.com",
  projectId: "twitter-clone-7ba59",
  storageBucket: "twitter-clone-7ba59.appspot.com",
  messagingSenderId: "453641376201",
  appId: "1:453641376201:web:a977378e47553961115818",
  measurementId: "G-Q74SEWDB88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAZaItjNGVwjAvzH66Bbw0ZsGmG2_dJkPg",
    authDomain: "shopping-cave.firebaseapp.com",
    projectId: "shopping-cave",
    storageBucket: "shopping-cave.appspot.com",
    messagingSenderId: "372148747028",
    appId: "1:372148747028:web:02346921e7b9da024ca001",
    measurementId: "G-WMHZ50EMNJ"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
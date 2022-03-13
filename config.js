import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
    apiKey: "AIzaSyD7veWTxdvYz2bZAmh_agZHivPPFV9rUpc",
    authDomain: "pro71-de1f1.firebaseapp.com",
    projectId: "pro71-de1f1",
    storageBucket: "pro71-de1f1.appspot.com",
    messagingSenderId: "737404671429",
    appId: "1:737404671429:web:e97b7d01d6e3b7d9f5e7ac"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


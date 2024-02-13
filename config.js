import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAIeLCvqvEyv6K6ygIOVP3nsPV0WQdfC4M",
  authDomain: "projeto-75-45d3a.firebaseapp.com",
  projectId: "projeto-75-45d3a",
  storageBucket: "projeto-75-45d3a.appspot.com",
  messagingSenderId: "154117585455",
  appId: "1:154117585455:web:cb6f1259df7f30be54a4da",
  measurementId: "G-5W9305KFV5"   AZ\                                                         aa
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

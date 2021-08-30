import React  from 'react';

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7FeiTdXZbm1jokVLS7R1elpdHQuzwYSY",
  authDomain: "starbucks-d0a9b.firebaseapp.com",
  projectId: "starbucks-d0a9b",
  storageBucket: "starbucks-d0a9b.appspot.com",
  messagingSenderId: "638601235312",
  appId: "1:638601235312:web:27413272149947e28b1db5",
  measurementId: "G-HDG9HXBDT8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }

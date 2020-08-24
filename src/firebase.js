import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEWVZxhjm6d7vkY6oB4Wn3fY7rihkp_DQ",
  authDomain: "chat-362a8.firebaseapp.com",
  databaseURL: "https://chat-362a8.firebaseio.com",
  projectId: "chat-362a8",
  storageBucket: "chat-362a8.appspot.com",
  messagingSenderId: "541186583743",
  appId: "1:541186583743:web:cd8eb6dfa60d452809ea0a"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
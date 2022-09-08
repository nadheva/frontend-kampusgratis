import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxi0tCVWf8vsrBZ0ST1vxcezr7Zd9ALjs",
  authDomain: "beta-be-kampus-gratis.firebaseapp.com",
  projectId: "beta-be-kampus-gratis",
  storageBucket: "beta-be-kampus-gratis.appspot.com",
  messagingSenderId: "888715233325",
  appId: "1:888715233325:web:f01f92124ddaf5886650a4",
  measurementId: "G-ZS9S94STYG",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

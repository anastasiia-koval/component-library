import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6DIBshv4ityqdW5Zf4nDWveAEaZz_OPc",
  authDomain: "component-library-a33b5.firebaseapp.com",
  projectId: "component-library-a33b5",
  storageBucket: "component-library-a33b5.appspot.com",
  messagingSenderId: "1043353691446",
  appId: "1:1043353691446:web:e4f46ab61271e5aeacbf97",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

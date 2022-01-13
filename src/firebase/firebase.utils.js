import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDBWq-xl4qnwoYWtofG6g2XTGwh3cPxXUg",
    authDomain: "crwn-db-b.firebaseapp.com",
    projectId: "crwn-db-b",
    storageBucket: "crwn-db-b.appspot.com",
    messagingSenderId: "667462411025",
    appId: "1:667462411025:web:b1d57ef29f3703185722b0",
    measurementId: "G-8Y43FQSJ86"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestory = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

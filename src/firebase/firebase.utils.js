import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyD5yWGg8HrzMLssl4wOD7GQGP1ji10VP4g",
    authDomain: "crown-db-3a242.firebaseapp.com",
    databaseURL: "https://crown-db-3a242.firebaseio.com",
    projectId: "crown-db-3a242",
    storageBucket: "crown-db-3a242.appspot.com",
    messagingSenderId: "602092223143",
    appId: "1:602092223143:web:5bce7cea400ea9ce3a7982",
    measurementId: "G-X9VGGYYZS6"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

//SETUP FOR GOOGLE AUTHENTICATION UTILITY

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const SignInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
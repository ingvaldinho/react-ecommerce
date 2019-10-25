import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAWHLu1k65qWMo1LwAp6ggwDSPOX4ZVlKI",
    authDomain: "react-ecommerce-db-9f66c.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-9f66c.firebaseio.com",
    projectId: "react-ecommerce-db-9f66c",
    storageBucket: "react-ecommerce-db-9f66c.appspot.com",
    messagingSenderId: "199730805843",
    appId: "1:199730805843:web:a1063839073f03cc2ddaa6",
    measurementId: "G-FCF53Y6PJP"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
//   const GithubAuthProvider = new firebase.auth.GithubAuthProvider();

  GoogleAuthProvider.setCustomParameters({prompt:'select_account'});
//   GithubAuthProvider.setCustomParameters({promp: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(GoogleAuthProvider);
//   export const signInwithGitHub = ()=> auth.signInWithPopup(GithubAuthProvider);

  export default firebase;
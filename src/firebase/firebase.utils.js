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


  export const createUserprofileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return;

//  DocumentReference is used to perform CRUD Operation
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef);

    const userSnapChot = await userRef.get();

    if(!userSnapChot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
            
        }
        
    }
    // console.log('User SnapChot : ', userSnapChot); 
    return userRef;
    
  }

  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
      const collectionRef = firestore.collection(collectionKey);

      console.log(collectionRef);
      const batch = firestore.batch();

      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc()
          batch.set(newDocRef,obj);
      })

      return await batch.commit();

  }

  export const convertCollectionSnapChotToMap = (collections)=>{
      const transformedCollection = collections.docs.map(doc => {
          const {title,items} = doc.data();

          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          }
      })

      return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator;
      },{})
  }

  export const getUserSession = ()=>{
      return new Promise((resolve,reject)=>{
          const unsubscribe = auth.onAuthStateChanged(userAuth=>{
              unsubscribe();
              resolve(userAuth);
          },reject)
      })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  googleAuthProvider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(googleAuthProvider);

  export default firebase;
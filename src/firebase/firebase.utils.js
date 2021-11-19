import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCMmf-S4zbrkt1pOMnqgvRNQhylr6HRjkc",
    authDomain: "crwn-db-3a173.firebaseapp.com",
    projectId: "crwn-db-3a173",
    storageBucket: "crwn-db-3a173.appspot.com",
    messagingSenderId: "211543091645",
    appId: "1:211543091645:web:02c74445c3b0caa9b5cad4",
    measurementId: "G-BFBNZTCZ2S"
};

// Auth & Firestore initialization
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle  = () => auth.signInWithPopup(provider);

// Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth)  // if there is no userAuth object (null, when the user isn't signed in)
    return;

  // console.log(firestore.doc('users/123jskfjklas'));

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // const cartItemsSnapshot = await userRef.collection('cartItems').get()
  // const userCartItems = cartItemsSnapshot.docs.map(doc => doc.data()); 

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {  // snapShot doesn't exist meaning it's null and we don't have that user on our DB
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt,
        ...additionalData
      });
    } catch(err) {
      console.log('error creating user ', err.message);
    }
  }

  return userRef;
};

export const pushUserOrders = async (currentUser, cartItems, total, orderedOn, tokenId) => {
  if (cartItems.length > 0 && currentUser) {
    try{
      await firestore.collection('users').doc(currentUser.id).collection('orders').doc(tokenId).set(
        {
          cartItems : cartItems,
          total: (total * 10.26).toFixed(2),
          orderedOn: new Date().toLocaleString(orderedOn)
        });
    } catch (err) {
      console.log('error pushing the data in ', err.message);
    }
  }
}

export const fetchUserOrders = async (currentUser) => {
  if (currentUser) {
    try {
      const target = firestore.collection('users').doc(currentUser.id).collection('orders');
      const snapshot = await target.get();
      return snapshot.docs;
    } catch (err) {
      console.log('error fetching the data ', err.message);
    }
  }
}

export default firebase;

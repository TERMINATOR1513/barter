import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

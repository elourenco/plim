import Config from 'react-native-config';
import firebase from 'react-native-firebase';

// const firebase = Firebase.initializeApp(config);
const auth = firebase.auth()
const firestore = firebase.firestore();

firestore.settings({timestampsInSnapshots: true});
firestore.enableNetwork(false);

export default {
  firebase,
  auth,
  firestore
};
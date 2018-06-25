import Config from 'react-native-config';
import Firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId
}

const firebase = Firebase.initializeApp(config);
const auth = firebase.auth()
const firestore = firebase.firestore();

Firebase.firestore.setLogLevel('debug');

firestore.settings({timestampsInSnapshots: true});
firestore.enableNetwork(true);

export default {
  firebase,
  auth,
  firestore
};
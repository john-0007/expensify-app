import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBclZbGZ-B3CZ2-voVIECuX9UIP4oEQmIY",
  authDomain: "expensify-manager.firebaseapp.com",
  databaseURL: "https://expensify-manager.firebaseio.com",
  projectId: "expensify-manager",
  storageBucket: "expensify-manager.appspot.com",
  messagingSenderId: "24181206622"
};
firebase.initializeApp(config);
const database=firebase.database();

export {firebase ,database as default};
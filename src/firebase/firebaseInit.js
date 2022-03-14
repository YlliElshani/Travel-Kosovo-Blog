import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOhoPoqHe144PqBLJ7G8GNve4n_V2ZoWk",
  authDomain: "travel-blog-kosova.firebaseapp.com",
  projectId: "travel-blog-kosova",
  storageBucket: "travel-blog-kosova.appspot.com",
  messagingSenderId: "459377360881",
  appId: "1:459377360881:web:9b0620f011eeab9f9e4e50",
};

const fireabaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const getAuth = firebase.auth();
export { timestamp,getAuth };
export default fireabaseApp.firestore();

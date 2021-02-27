import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoXuo6XFEdK4iGx9kfykpFxt6gWhHHxyA",
  authDomain: "netflix-clone-by-tupac.firebaseapp.com",
  projectId: "netflix-clone-by-tupac",
  storageBucket: "netflix-clone-by-tupac.appspot.com",
  messagingSenderId: "517156969862",
  appId: "1:517156969862:web:341b6af9e3251e4a67e007",
  measurementId: "G-V48BZ7747B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

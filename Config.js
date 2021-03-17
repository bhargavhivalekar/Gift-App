 import firebase from "firebase"
 require("@firebase/firestore")
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAv-vu2mGqIpa-sXKL_BXb2860s327IT04",
    authDomain: "gift-app-493d9.firebaseapp.com",
    projectId: "gift-app-493d9",
    storageBucket: "gift-app-493d9.appspot.com",
    messagingSenderId: "148069782910",
    appId: "1:148069782910:web:93063ec055d6ed71674f2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();


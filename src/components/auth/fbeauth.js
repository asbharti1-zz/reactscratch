// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, signInWithEmailAndPassword ,signOut} from "firebase/auth";

const auth = getAuth();

 const loginWithEmailPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const logoutEmailUser = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log(userCredential);
    console.log(userCredential.user);
    console.log("--> logout doen");
  }).catch((error) => {
    // An error happened.
  });
}

export {loginWithEmailPass,logoutEmailUser}
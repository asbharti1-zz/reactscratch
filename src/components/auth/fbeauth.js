import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIcHxna0G8fpzu6SFZ0tUuZ5gQgVAFnNw",
  authDomain: "localhost-auth-9dfbe.firebaseapp.com",
  projectId: "localhost-auth-9dfbe",
  storageBucket: "localhost-auth-9dfbe.appspot.com",
  messagingSenderId: "696634949309",
  appId: "1:696634949309:web:3d2d7d168c471c1acfc1d4",
  measurementId: "G-5MC930DHLC"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const auth = getAuth();

const loginWithEmailPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      //TODO
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const logoutEmailUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log(userCredential);
      console.log(userCredential.user);
      console.log("--> logout doen");
    })
    .catch((error) => {
      // An error happened.
    });
};

const getUserInfo = () => {
  console.log(auth);
  return auth;
};

export { loginWithEmailPass, logoutEmailUser, getUserInfo };

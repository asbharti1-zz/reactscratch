
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword ,signOut} from "firebase/auth";

const firebaseConfig = {

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

const getUserInfo = () =>{
  console.log(auth)
   return auth;
}

export {loginWithEmailPass,logoutEmailUser,getUserInfo}
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCwrBlLuXD6g4KgpbCKmUAp-qOaIUw_c",
  authDomain: "fir-auth-7cca2.firebaseapp.com",
  projectId: "fir-auth-7cca2",
  storageBucket: "fir-auth-7cca2.appspot.com",
  messagingSenderId: "1039760197127",
  appId: "1:1039760197127:web:502201a6afe52952970ca2"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}
const auth = firebase.auth()

export  { auth };
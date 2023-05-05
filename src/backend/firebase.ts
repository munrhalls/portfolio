// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCnEYNFXfcv0ywia3IWuhRMQrJzDPC__hc",

  authDomain: "munrhalls-portfolio.firebaseapp.com",

  projectId: "munrhalls-portfolio",

  storageBucket: "munrhalls-portfolio.appspot.com",

  messagingSenderId: "371831810460",

  appId: "1:371831810460:web:9a22feb91cb06be7b98059",

  measurementId: "G-04TKPC1D27",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);

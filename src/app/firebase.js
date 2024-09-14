// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uWz4TvMgNNm0gUB1waEXMjsDrUTMmNA",
  authDomain: "dashprimeconsulting.firebaseapp.com",
  projectId: "dashprimeconsulting",
  storageBucket: "dashprimeconsulting.appspot.com",
  messagingSenderId: "543866367148",
  appId: "1:543866367148:web:bb6baf76df09b8540e4309",
  measurementId: "G-3NE9KEH9KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
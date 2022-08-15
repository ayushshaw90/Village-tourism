// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK1RPPW0Vb-2F2I1uiVNq0jfKCCYk90sY",
  authDomain: "fir-auth-79e21.firebaseapp.com",
  projectId: "fir-auth-79e21",
  storageBucket: "fir-auth-79e21.appspot.com",
  messagingSenderId: "710745870842",
  appId: "1:710745870842:web:abc1fe370f0c1f67d91443",
  measurementId: "G-5SL3F5B93Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
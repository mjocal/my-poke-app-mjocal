import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDhMM4cemLAnHdHzub17bCGv-cFab-0dW0",
  authDomain: "reactproject-4c87f.firebaseapp.com",
  projectId: "reactproject-4c87f",
  storageBucket: "reactproject-4c87f.appspot.com",
  messagingSenderId: "468188492269",
  appId: "1:468188492269:web:494c4a332323dafcc3f7e4",
  measurementId: "G-78ZXXZEJ2X",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY ?? "",
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? "",
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ?? "",
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ?? "",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ?? "",
  // appId: process.env.REACT_APP_FIREBASE_APP_ID ?? "",
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ?? "",
});

export const auth = getAuth();

export default app;

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
});

export const auth = getAuth();

export default app;

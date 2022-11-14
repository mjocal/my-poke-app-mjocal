import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseCredentials";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const FirebaseContext = createContext({
  app: null,
  login: () => Promise.resolve(undefined),
  signin: () => Promise.resolve(undefined),
  logout: () => Promise.resolve(undefined),
});

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  // const navigate = useNavigate();

  // si eventualmente no quiero usar firebase, esta es la funcion que podria cambiar (login y signin)
  const signin = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);

      return user;
    } catch (error) {
      console.error("error", error);
    }
  };

  const login = async (email, password, navigate, target = "/home") => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);
      navigate(target);
      return user;
    } catch (error) {
      alert("Login failed");
      console.error("error", error);
    }
  };

  function logout() {
    try {
      return signOut(auth);
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    setCurrentUser(auth);
  }, []);

  const contextValue = {
    currentUser,
    login,
    signin,
    logout,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebaseAuth = () => useContext(FirebaseContext);

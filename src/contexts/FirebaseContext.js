import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseCredentials";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const FirebaseContext = createContext({
  app: null,
  login: () => Promise.resolve(undefined),
  signin: () => Promise.resolve(undefined),
  // logout: () => Promise.resolve(undefined),
});

export function useAuth() {
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // si eventualmente no quiero usar firebase, esta es la funcion que podria cambiar (login y signin)
  const signin = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setCurrentUser(user);
    return user;
  };

  const login = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser(user);
    return user;
  };

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    setCurrentUser(auth);
    setLoading(false);
  }, []);

  const contextValue = {
    currentUser,
    login,
    signin,
    logout,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}

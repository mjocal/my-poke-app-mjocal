import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// authcontext = firebasecontext
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// authprovider = firebaseprovider
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // register == signup
  function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  // si eventualmente no quiero usar firebase, esta es la funcion que podria cambiar (login y register)
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }

  const value = {
    currentUser,
    login,
    register,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

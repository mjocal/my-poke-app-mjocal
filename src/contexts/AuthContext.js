import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

// authcontext = firebasecontext
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// authprovider = firebaseprovider
export function AuthProvider({ children }) {
  // user == currentUser
  const [currentUser, setCurrentUser] = useState();

  // register == signup
  function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  const value = {
    currentUser,
    register,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

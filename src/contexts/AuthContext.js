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
  const [user, setUser] = useState();

  // register == signup
  async function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  const value = {
    user,
    register,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

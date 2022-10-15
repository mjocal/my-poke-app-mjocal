import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseCredentials";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext({
  app: null,
  login: () => Promise.resolve(undefined),
  register: () => Promise.resolve(undefined),
});

export function useAuth() {
  return useContext(AuthContext);
}

// authprovider = firebaseprovider
export function AuthProvider({ children }) {
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

  useEffect(() => {
    setCurrentUser(auth);
    setLoading(false);
  }, []);

  const contextValue = {
    currentUser,
    login,
    signin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

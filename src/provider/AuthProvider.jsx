import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // console.log(user);

  const createNewUser = (email, password) => {
    setLoader(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with google
  const provider = new GoogleAuthProvider();

  const handleWithGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   sign in with email and password (login)
  const userLogin = (email, password) => {
    setLoader(true);

    signInWithEmailAndPassword(auth, email, password);
  };
  //   sign out function
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //
  const updateUserProfile = ({ updatedData }) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loader,
    updateUserProfile,
    handleWithGoogleSignIn,
  };
  //   observer function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

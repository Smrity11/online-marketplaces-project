/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
        // if user exists then issue a token
        if (currentUser) {
            axios.post('https://online-marketplaces-server-red.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log('token response', res.data);
                })
        }
        else {
            axios.post('https://online-marketplaces-server-red.vercel.app/logout', loggedUser, {
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                })
        }
    });
    return () => {
        return unsubscribe();
    }
}, [])

  const authinfo = { user, loading, createUser, signIn, googleSignIn, logOut };
  return (
    <AuthContext.Provider value={authinfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
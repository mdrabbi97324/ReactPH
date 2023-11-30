import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/auth.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth);
        
    }

    // observer and state change

    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log("this is from observer and useEffect", currentUser)
            setUser(currentUser)
            setLoader(false);
        })

        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {user, registerUser, signInUser, signOutUser, loader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
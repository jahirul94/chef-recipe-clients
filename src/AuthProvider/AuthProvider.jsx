import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState({});
    const [ loading , setLoading ] = useState(true);
    const createUser = ( email , password ) =>{
            setLoading(true)
            return createUserWithEmailAndPassword( auth , email , password )
        }
        
    const login = ( email , password ) =>{
            setLoading(true)
            return signInWithEmailAndPassword( auth , email , password)
        }
        
    const loginWithGoogle = () =>{
            setLoading(true)
            return signInWithPopup( auth , googleProvider )
            
        }

    const loginWithGithub = () =>{
            setLoading(true)
            return signInWithPopup( auth , githubProvider)
        }
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged( auth , user =>{
             setUser(user)
             setLoading(false)
         } )
       
         return () =>{
             unsubscribe();
         }

    },[])

    const logOut = () =>{
        return signOut(auth)
    }
 
    const authInfo = {
       createUser,
       login,
       loginWithGoogle,
       loginWithGithub,
       user,
       loading,
       logOut

    }


    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
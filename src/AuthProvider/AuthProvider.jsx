import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
const createUser = ( email , password ) =>{
     return createUserWithEmailAndPassword( auth , email , password )
}
 
const login = ( email , password ) =>{
     return signInWithEmailAndPassword( auth , email , password)
}

 
    const authInfo = {
       createUser,
       login,
    }


    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
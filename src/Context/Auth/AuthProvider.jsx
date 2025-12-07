import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const function for sign user 
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser, 
        signInUser
    }

    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
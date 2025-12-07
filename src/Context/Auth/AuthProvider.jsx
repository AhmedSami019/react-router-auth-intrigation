import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    // user status
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const function for sign user 
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const sign out user
    const singOutUser = ()=>{
        signOut(auth)
        setUser(null)
    }

    // to get current loggedIn user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo = {
        user,
        createUser, 
        signInUser, 
        singOutUser
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
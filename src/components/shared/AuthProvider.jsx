import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const googleProvider=new GoogleAuthProvider()
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser={
                    email:currentUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('access_token', data.token)
                })
            }else{
                localStorage.removeItem('access_token')
            }
        });
        return ()=>{
        unSubscribe()
        }
    },[])

    const info={
        user,
        createUser,
        signIn,
        loading,
        googleLogin,
        logOut
    }

    return (
         <AuthContext.Provider value={info}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.js';
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext()

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Contextprovidor = ({children}) => {
    const [user,setuser] = useState(null);
    const [loading, setloading] = useState(true);

    function googlesignup(){
      setloading(true)
      return signInWithPopup(auth, provider)
    };
    function signin(email,password){
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    function login(email,password){
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            
              setuser(currentuser);
              setloading(false);
      })

            return () => unsubscribe();
          
    },[])

    function updateUserProfile (name){
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    
    function logout(){
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const userInfo = {
        user,
        loading,
        googlesignup,
        signin,
        login,
        updateUserProfile,
        logout
    }
    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Contextprovidor;
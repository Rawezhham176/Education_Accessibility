import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState(true);

// Sign up function
function signup(email, password, name, phonenumber) {
    auth.createUserWithEmailAndPassword(email, password, name, phonenumber) 
}
    useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
    setLoading(false)    
})
    return unsubcribe
}, []);

// Login function
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password) 
}
    useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
    setLoading(false)    
})

    return unsubcribe
}, []);


// Log out function
function logout(email, password) {
    auth.signOut()
}
    useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
    setLoading(false)    
})

    return unsubcribe
}, []);

const value = {
    currentUser,
    signup,
    login,
    logout
}

    return (
        <AuthContext.Provider value={value}>
            {!Loading && children }
        </AuthContext.Provider>
    )
}

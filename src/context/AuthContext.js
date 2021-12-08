import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState(true);


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



const value = {
    currentUser,
    signup,
    login
}

    return (
        <AuthContext.Provider value={value}>
            {!Loading && children }
        </AuthContext.Provider>
    )
}

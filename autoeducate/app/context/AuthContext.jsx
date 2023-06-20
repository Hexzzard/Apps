'use client'
import { useContext, createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, firestore } from '../api/firebase.config'
import { doc, setDoc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }
  async function guardarUsuario (currentUser) {
    const docuRef = doc(firestore, `Usuarios/${currentUser.uid}`)
    if (!(await getDoc(docuRef)).exist) {
      const email = currentUser.email
      const nombre = currentUser.displayName
      await setDoc(docuRef, { email, nombre, id: currentUser.uid })
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        console.log('El usuario ha iniciado sesión')
        guardarUsuario(currentUser)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}
export const UserAuth = () => {
  return useContext(AuthContext)
}

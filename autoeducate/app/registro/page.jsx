'use client'
/* eslint-disable @next/next/no-img-element */
import React,  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './form.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'

import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, firestore } from '../api/firebase.config'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

function App () {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!loading && session) {
      router.replace('/')
    }
  }, [loading, session, router])
  const navigate = useNavigate()
  async function registrarUsuario (email, password, nombre) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase
    })
    const user = infoUsuario.user
    await updateProfile(user, {
      displayName: nombre
    })
    navigate('/')
    window.location.reload()
    const docuRef = doc(firestore, `Usuarios/${infoUsuario.user.uid}`)
    setDoc(docuRef, { email, nombre, id: infoUsuario.user.uid })
  }

  function submitHandler (e) {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const confirmPassword = e.target.elements.confirmar.value
    const name = e.target.elements.name.value

    console.log('submit', email, password, confirmPassword, name)
    if (password === confirmPassword) {
      registrarUsuario(email, password, name)
    }
  }
  return (
    <div className='container-center-horizontal'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <form class='form' onSubmit={submitHandler}>
          <h2 class='form_title'>Registrate</h2>
          <div className='form_container'>
            <div className='form_group'>
              <input type='text' id='name' class='form_input' placeholder=' ' />
              <label for='name' class='form_label'>Nombre de usuario</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='text' id='email' class='form_input' placeholder=' ' />
              <label for='name' class='form_label'>email</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='password' class='form_input' placeholder=' ' />
              <label for='contraseña' class='form_label'>Contraseña</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='confirmar' class='form_input' placeholder=' ' />
              <label for='contraseña' class='form_label'>Confirma tu contraseña</label>
              <span class='form_line' />
            </div>
            <input type='submit' class='form_submit' value='Registrate' />
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default App

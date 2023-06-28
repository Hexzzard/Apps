'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './form.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'

import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase.config'

function App () {
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
    window.location.href = '/'
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
        <form className='form' onSubmit={submitHandler}>
          <h2 className='form_title'>Registrate</h2>
          <div className='form_container'>
            <div className='form_group'>
              <input type='text' id='name' className='form_input' placeholder=' ' />
              <label htmlFor='name' className='form_label'>Nombre de usuario</label>
              <span className='form_line' />
            </div>
            <div className='form_group'>
              <input type='text' id='email' className='form_input' placeholder=' ' />
              <label htmlFor='name' className='form_label'>email</label>
              <span className='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='password' className='form_input' placeholder=' ' />
              <label htmlFor='contraseña' className='form_label'>Contraseña</label>
              <span className='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='confirmar' className='form_input' placeholder=' ' />
              <label htmlFor='contraseña' className='form_label'>Confirma tu contraseña</label>
              <span className='form_line' />
            </div>
            <input type='submit' className='form_submit' value='Registrate' />
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default App

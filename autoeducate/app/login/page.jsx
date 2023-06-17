'use client'
/* eslint-disable @next/next/no-img-element */
import React, { use } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './form.css'
import { NavbarResponsive } from '../components/NavbarResponsive'
import { Footer } from '../components/footer'

import { UserAuth } from '../context/AuthContext'

function App () {
  const { user, googleSignIn } = UserAuth()
  console.log(user.displayName)

  const iniciarSesion = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container-center-horizontal'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <form class='form'>
          <h2 class='form_title'>Iniciar Sesion</h2>
          <p>Aun no tienes una cuenta, crea una aqui</p>
          <div className='form_container'>
            <div className='form_group'>
              <input type='text' id='name' class='form_input' placeholder=' ' />
              <label for='name' class='form_label'>Usuario</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='contraseña' class='form_input' placeholder=' ' />
              <label for='contraseña' class='form_label'>Contraseña</label>
              <span class='form_line' />
            </div>
            <input type='submit' class='form_submit' value='Entrar' />
            <div className='form_group'>
              <p>o tambien puedes</p>
              <div className='btn_google_lighthover' onClick={iniciarSesion}>
                <div className='official-buttons-sig'>
                  <img src='./assets/logo-googleg.png' alt='logo google' className='logo-googleg-48dp' />
                  <div className='sign-in-with-google'>
                    Inicia sesion con google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default App

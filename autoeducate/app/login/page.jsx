'use client'
/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './form.css'
import { NavbarResponsive } from '../components/NavbarResponsive'
import { Footer } from '../components/footer'

import { UserAuth } from '../context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase.config'
import { useNavigate } from 'react-router-dom'

function App () {
  const { googleSignIn } = UserAuth()
  const navigate = useNavigate()

  const iniciarSesion = async () => {
    try {
      await googleSignIn()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  function submitHandler (e) {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    try {
      signInWithEmailAndPassword(auth, email, password)
      window.location.href = '/'
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
        <form className='form' onSubmit={submitHandler}>
          <h2 className='form_title'>Iniciar Sesion</h2>
          <p>Aun no tienes una cuenta, crea una aqui</p>
          <div className='form_container'>
            <div className='form_group'>
              <input type='text' id='email' className='form_input' placeholder=' ' />
              <label htmlFor='email' className='form_label'>Correo</label>
              <span className='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='password' className='form_input' placeholder=' ' />
              <label htmlFor='password' className='form_label'>Contraseña</label>
              <span className='form_line' />
            </div>
            <input type='submit' className='form_submit' value='Entrar' />
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

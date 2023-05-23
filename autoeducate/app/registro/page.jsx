/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'app/test.css'

import { Navbar } from '../components/NavbarNormal'
import { Footer } from '../components/footer'

function App () {
  return <Login {...loginData} />
}

export default App

function Login (props) {
  const {
    title,
    iconUser,
    usuario,
    example,
    iconKey,
    contrasea,
    overlapGroup,
    text1,
    iconEye,
    logoGoogleg48Dp,
    signInWithGoogle,
    signUp
  } = props

  return (
    <div className='container-center-horizontal'>
      <div className='login screen'>
        <Navbar />
        <div className='overlap-group2'>
          <h1 className='title inter-extra-bold-black-72px'>
            {title}
          </h1>
          <div className='usuario'>
            <img className='icon-user' src={iconUser} alt='icon-user' />
            <div className='flex-col'>
              <div className='usuario-1 inter-bold-black-18px'>
                {usuario}
              </div>
              <div className='box'>
                <div className='overlap-group' style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className='text-1 inter-medium-black-14px'>
                    {example}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contrasea'>
            <img src={iconKey} alt='icon-key' className='icon-key' />
            <div className='flex-col-1'>
              <div className='contrasea-1 inter-bold-black-18px'>
                {contrasea}
              </div>
              <div className='box'>
                <div className='overlap-groupx2' style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className='text-1 inter-medium-black-14px'>
                    {text1}
                  </div>
                  <div className='izquierda'>
                    <img src={iconEye} alt='incon-eye' className='icon-eye' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right-nav'>
            <div className='button'>
              <div className='sign-up inter-medium-cultured-pearl-14px'>
                {signUp}
              </div>
            </div>
          </div>
          <div className='btn_google_lighthover'>
            <div className='official-buttons-sig'>
              <img src={logoGoogleg48Dp} alt='logo google' className='logo-googleg-48dp' />
              <div className='sign-in-with-google'>
                {signInWithGoogle}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

const loginData = {
  title: 'Iniciar Sesion',
  iconUser: '/assets/iconmonstr-user.png',
  usuario: 'Usuario',
  example: 'Example',
  rectangle593: '/assets/rectangle-593.png',
  iconKey: '/assets/iconmonstr-key.png',
  contrasea: 'Contraseña',
  overlapGroup: '/assets/rectangle-593.png',
  text1: '*********',
  iconEye: '/assets/iconmonstr-eye.png',
  logoGoogleg48Dp: './assets/logo-googleg.png',
  signInWithGoogle: 'Sign in with Google',
  signUp: 'Ingresar'
}

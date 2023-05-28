'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './ensayos.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'
import { Button2 } from '../components/Button2'

function App () {
  return (
    <div className='container-center-horizontal'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <form className='form2'>
          <h2 className='form_title'>Pregunta 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='radio-option'>
            <input type='radio' id='opcion1' name='opcion' value='A' />
            <label htmlFor='opcion1' className='radio-labelA'>
              <div className='radio-imageA' />
              <span className='option-label'>Elefante guerrero siquico ancestral</span>
            </label>
          </div>
          <div className='radio-option'>
            <input type='radio' id='opcion2' name='opcion' value='B' />
            <label htmlFor='opcion2' className='radio-labelB'>
              <div className='radio-imageB' />
              <span className='option-label'>Falso</span>
            </label>
          </div>
          <div className='radio-option'>
            <input type='radio' id='opcion3' name='opcion' value='C' />
            <label htmlFor='opcion3' className='radio-labelC'>
              <div className='radio-imageC' />
              <span className='option-label'>Shrek</span>
            </label>
          </div>
          <div className='radio-option'>
            <input type='radio' id='opcion4' name='opcion' value='D' />
            <label htmlFor='opcion4' className='radio-labelD'>
              <div className='radio-imageD' />
              <span className='option-label'>Si</span>
            </label>
          </div>
          <div className='botones'>
            <Button2 clase='button-ensayo'>Anterior</Button2>
            <Button2 clase='button-ensayo'>Siguiente</Button2>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default App

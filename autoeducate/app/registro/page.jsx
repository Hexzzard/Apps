'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './form.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'

function App () {
  return (
    <div className='container-center-horizontal'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <form class='form'>
          <h2 class='form_title'>Registrate</h2>
          <div className='form_container'>
            <div className='form_group'>
              <input type='text' id='name' class='form_input' placeholder=' ' />
              <label for='name' class='form_label'>Nombre de usuario</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='text' id='name' class='form_input' placeholder=' ' />
              <label for='name' class='form_label'>email</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='contraseña' class='form_input' placeholder=' ' />
              <label for='contraseña' class='form_label'>Contraseña</label>
              <span class='form_line' />
            </div>
            <div className='form_group'>
              <input type='password' id='contraseña' class='form_input' placeholder=' ' />
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

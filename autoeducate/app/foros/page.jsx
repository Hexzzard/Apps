'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './foros.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'

function App () {
  return (
    <div className='container-center-horizontal-2'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <div className='form2'>
          <h2 className='form_title'>Grupo de estudio 1</h2>
          <p>descripcion del grupo de estudio, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <div className='container-comentario'>
            <div className='container-reply'>
              <form>
                <input type='text' className='responder-comentario' placeholder='Publica algo' />
                <input type='submit' value='Publicar' />
              </form>
            </div>
          </div>
          <div className='container-comentario'>
            <div className='principal'>
              <div className='autor'>
                Usuario 1
              </div>
              <div className='comentario'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className='reply'>
              <div className='container-comentario-2'>
                <div className='principal'>
                  <div className='autor'>
                    Usuario 2
                  </div>
                  <div className='comentario'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <form>
                <div className='container-reply'>
                  <input type='text' className='responder-comentario' placeholder='Responder comentario' />
                  <input type='submit' value='Publicar' />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

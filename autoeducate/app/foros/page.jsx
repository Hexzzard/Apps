'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './foros.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'
import { HeaderForo } from '../components/headerForo'
import { Comentar } from '../components/Comentar'
import { Foro } from '../components/Foro'

function App () {
  return (
    <div className='container-center-horizontal-2'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <div className='form2'>
          <HeaderForo title='grupo de estudio 1'>
            <div>descripcion del grupo de estudio, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
          </HeaderForo>
          <div className='chat'>
            <Comentar />
            <div className='comentarios'>
              <Foro />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

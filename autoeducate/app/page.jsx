/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './test.css'

import { Footer } from './components/footer'
import { NavbarResponsive } from './components/NavBarResponsive'
import { Hero } from './components/Hero'

function App () {
  return (
    <div className='container-center-horizontal'>
      <div className='home screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <Hero />
        <Footer />
      </div>
    </div>
  )
}
export default App

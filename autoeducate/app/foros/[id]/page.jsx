'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../test.css'
import '../foros.css'
import { Footer } from '../../components/footer'
import { NavbarResponsive } from '../../components/NavbarResponsive'
import { Foro } from '../../components/Foro'

export default function App ({ params }) {
  const { id } = params
  return (
    <div className='container-center-horizontal-2'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <Foro id={id} />
        <Footer />
      </div>
    </div>
  )
}

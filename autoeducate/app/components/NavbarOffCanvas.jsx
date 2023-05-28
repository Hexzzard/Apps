/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import { HeaderMenuDefault } from './HeaderMenuDefault'

export function NavbarOffCanvas () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='header-2'>
      <div className='left-nav'>
        <div className='nav-items'>
          <div className='auto-educate inter-bold-black-14px'>
            <Link href='/'>
              <p>AUTOEDUCATE</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='compacto'>
        <button className='settings' onClick={handleShow}>
          <img src='/assets/settings.png' alt='settings' />
        </button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className='auto-educate inter-bold-black-14px'>
              <Link href='/'>
                AUTOEDUCATE
              </Link>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HeaderMenuDefault route='/grupos'>Grupos de estudio</HeaderMenuDefault>
            <HeaderMenuDefault route='/ensayos'>Ensayos</HeaderMenuDefault>
            <HeaderMenuDefault route='/foros'>Foros</HeaderMenuDefault>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

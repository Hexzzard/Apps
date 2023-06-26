/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas'
import Link from 'next/link'
import { HeaderMenuDefault } from './HeaderMenuDefault'

import { UserAuth } from '../context/AuthContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Button } from './Button'

export function NavbarOffCanvas () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { user, logOut } = UserAuth()

  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.displayName)
      } else {
        setCurrentUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

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
            {!user
              ? (
                <div>
                  <div className='button-3'>
                    <Button color='button-1' route='/login'>
                      Iniciar Sesion
                    </Button>
                  </div>
                  <div className='button-3'>
                    <Button color='button-2' route='/registro'>
                      Registrate
                    </Button>
                  </div>
                </div>
                )
              : (
                <div>
                  <div className='button-3'>
                    <Button color='button-1' route='/login'>
                      {user.displayName}
                    </Button>
                  </div>
                  <div className='button-3'>
                    <button className='button-2' onClick={cerrarSesion}>
                      <div className='login-1 inter-medium-winter-wizard-14px'>
                        Cerrar Sesion
                      </div>
                    </button>
                  </div>
                </div>
                )}
            <HeaderMenuDefault route='/grupos'>Grupos de estudio</HeaderMenuDefault>
            <HeaderMenuDefault route='/ensayos'>Ensayos</HeaderMenuDefault>
            <HeaderMenuDefault route='/grupos'>Foros</HeaderMenuDefault>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

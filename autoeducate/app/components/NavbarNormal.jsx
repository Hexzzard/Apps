'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeaderMenuDefault } from './HeaderMenuDefault'
import { Button } from './Button'
import { UserAuth } from '../context/AuthContext'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function NavbarNormal () {
  const { user, logOut } = UserAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si hay un usuario autenticado, actualiza el estado con el nombre de usuario
        setCurrentUser(user.displayName)
        console.log(user.displayName)
      } else {
        // Si no hay un usuario autenticado, establece el estado a null
        setCurrentUser(null)
      }
    })

    return () => {
      // Limpia la suscripción cuando el componente se desmonte
      unsubscribe()
    }
  }, [])

  return (
    <div className='header-2'>
      <div className='left-nav'>
        <div className='nav-items'>
          <div className='auto-educate inter-bold-black-14px'>
            <Link href='/'>
              AUTOEDUCATE
            </Link>
          </div>
          <HeaderMenuDefault route='/grupos'>Grupos de estudio</HeaderMenuDefault>
          <HeaderMenuDefault route='/ensayos'>Ensayos</HeaderMenuDefault>
          <HeaderMenuDefault route='/foros'>Foros</HeaderMenuDefault>
        </div>
      </div>
      {!user
        ? (
          <div className='right-nav-1 inter-normal-alto-14px'>
            <Button color='button-1' route='/login'>
              Iniciar Sesion
            </Button>
            <Button color='button-2' route='/registro'>
              Registrate
            </Button>
          </div>
          )
        : (
          <div className='right-nav-1 inter-normal-alto-14px'>
            <Button color='button-1' route='/login'>
              {user.displayName}
            </Button>
            <button className='button-2' onClick={cerrarSesion}>
              <div className='login-1 inter-medium-winter-wizard-14px'>
                Cerrar Sesion
              </div>
            </button>
          </div>
          )}
    </div>
  )
}

'use client'
import React, { useState, useEffect } from 'react'

import { NavbarNormal } from './NavbarNormal'
import { NavbarOffCanvas } from './NavbarOffCanvas'

export function NavbarResponsive () {
  const [WindowSize, setWindowSize] = useState()
  const [isSmallScreen, setisSmallScreen] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize(window.innerWidth)
        setisSmallScreen(WindowSize < 1000)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [WindowSize])

  return (
    <div className='navbarRes'>
      {!isSmallScreen
        ? (
          <div>
            <NavbarNormal />
          </div>
          )
        : (
          <div>
            <NavbarOffCanvas />
          </div>
          )}
    </div>
  )
}

export default NavbarResponsive

import React, { useState, useEffect } from 'react'

import { NavbarNormal } from './NavbarNormal'
import { NavbarOffCanvas } from './NavbarOffCanvas'

export function NavbarResponsive () {
  // const first = typeof window !== 'undefined' ? window.innerWidth : 0
  const [WindowSize, setWindowSize] = useState(1400)

  const isSmallScreen = WindowSize < 1000
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
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

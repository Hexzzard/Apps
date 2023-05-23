import React from 'react'

import { NavbarNormal } from './NavbarNormal'
import { NavbarSmall } from './NavbarSmall'

export function NavbarResponsive () {
  const isSmallScreen = window.innerWidth < 1000

  return (
    <div className='navbarResponsive'>
      {!isSmallScreen
        ? (
          <div>
            <NavbarNormal />
          </div>
          )
        : (
          <div>
            <NavbarSmall />
          </div>
          )}
    </div>
  )
}

export default NavbarResponsive

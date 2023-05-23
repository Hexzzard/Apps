import React, { useState } from 'react'
import Link from 'next/link'

import {
  Collapse,
  NavbarToggler,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export function NavbarSmall () {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div className='header-2'>
      <div className='left-nav'>
        <div className='nav-items'>
          <div className='auto-educate inter-bold-black-14px'>
            <Link href='/'>
              AUTOEDUCATE
            </Link>
          </div>
        </div>
      </div>
      <Navbar color='faded' light>
        <NavbarToggler onClick={toggleNavbar} className='me-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/login'>Iniciar Sesion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/registro'>Registro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/grupos'>Grupos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/ensayos'>Ensayos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/foros'>Foros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarSmall

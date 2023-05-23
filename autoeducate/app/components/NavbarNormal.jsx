import Link from 'next/link'
import { HeaderMenuDefault } from './HeaderMenuDefault'
import { Button } from './Button'

export function NavbarNormal () {
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
      <div className='right-nav-1 inter-normal-alto-14px'>
        <Button color='button-1' route='/login'>
          Iniciar Sesion
        </Button>
        <Button color='button-2' route='/registro'>
          Registrate
        </Button>
      </div>
    </div>
  )
}

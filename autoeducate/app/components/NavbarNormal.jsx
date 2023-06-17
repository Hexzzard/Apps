import Link from 'next/link'
import { HeaderMenuDefault } from './HeaderMenuDefault'
import { Button } from './Button'
import { UserAuth } from '../context/AuthContext'

export function NavbarNormal () {
  const { user, logOut } = UserAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
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

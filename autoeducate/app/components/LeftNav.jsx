import HeaderMenuDefault from './HeaderMenuDefault'
import Link from 'next/link'

export function LeftNav () {
  return (
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
  )
}

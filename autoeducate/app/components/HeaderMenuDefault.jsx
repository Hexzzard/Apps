import Link from 'next/link'

export function HeaderMenuDefault (props) {
  const { children, route } = props

  return (
    <div className='menu-item-default'>
      <div className='label-1 inter-medium-eerie-black-14px'>
        <Link href={route}>
          {children}
        </Link>
      </div>
    </div>
  )
}

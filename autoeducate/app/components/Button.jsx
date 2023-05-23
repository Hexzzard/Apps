import Link from 'next/link'
export function Button (props) {
  const { children, color, route } = props
  return (
    <Link href={route}>
      <button className={`${color}`}>
        <div className='login-1 inter-medium-winter-wizard-14px'>
          {children}
        </div>
      </button>
    </Link>
  )
}

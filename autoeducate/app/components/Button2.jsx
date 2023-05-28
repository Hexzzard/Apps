export function Button2 (props) {
  const { children, clase } = props
  return (
    <button type='submit' className={`${clase}`}>
      <div className='login-1 inter-medium-winter-wizard-14px'>
        {children}
      </div>
    </button>
  )
}

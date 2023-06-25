export default function HeaderForo (props) {
  const { children, title } = props
  return (
    <div className='headerForo'>
      <h2 className='form_title'>{title}</h2>
      <div className='descripcion'>
        {children}
      </div>
    </div>
  )
}

export function HeaderForo (props) {
  const { titulo, descripcion } = props
  return (
    <div className='headerForo'>
      <h2 className='form_title'>{titulo}</h2>
      <div className='descripcion'>
        {descripcion}
      </div>
    </div>
  )
}

export function Reply (props) {
  const { usuario, comentario } = props
  return (
    <div className='container-comentario-2'>
      <div className='principal'>
        <div className='autor'>
          {usuario}
        </div>
        <div className='comentario'>
          {comentario}
        </div>
      </div>
    </div>
  )
}

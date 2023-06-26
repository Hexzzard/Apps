/* eslint-disable @next/next/no-img-element */
export function GrupoEstudio (props) {
  const { imagen, nombre, descripcion } = props
  let rutaImagen = imagen
  if (imagen == null) {
    rutaImagen = '/assets/default.png'
  }

  return (
    <article className='row-1-item'>
      <img src={rutaImagen} alt='Cover' className='cover' />
      <div className='project-details'>
        <div className='project-title inter-semi-bold-eerie-black-24px'>
          {nombre}
        </div>
        <div className='project-tags inter-normal-eerie-black-16px'>
          {descripcion}
        </div>
      </div>
    </article>
  )
}

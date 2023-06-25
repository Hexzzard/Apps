/* eslint-disable @next/next/no-img-element */
export function GrupoEstudio (props) {
  const { imagen, nombre, descripcion } = props

  return (
    <article className='row-1-item'>
      <img src={imagen} alt='Cover' className='cover' />
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

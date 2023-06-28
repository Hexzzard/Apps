import { UserAuth } from '../context/AuthContext'
import { ReloadState } from '../context/ReloadContext'
import { AutoResizableTextarea } from './AutoTextArea'

export function Comentar (props) {
  const { id } = props
  const { user } = UserAuth()
  const { reloadComponent } = ReloadState()
  async function añadirComentario (usuario, comentario) {
    try {
      const data = new FormData()
      data.set('id', id)
      data.set('usuario', usuario)
      data.set('comentario', comentario)

      const res = await fetch('/api/upload/comentarios', {
        method: 'POST',
        body: data
      })
      console.log(res)

      if (res.ok) {
        console.log('Comentario añadido')
      }
    } catch (error) {
      console.error('error al contactar con el backend: ', error)
    }
    reloadComponent()
  }

  function submitHandler (e) {
    e.preventDefault()
    const comentar = e.target.elements.comentar.value
    const usuario = user.displayName
    añadirComentario(usuario, comentar)
  }

  return (
    <div className='container-comentario'>
      <div className='container-reply'>
        <form onSubmit={submitHandler}>
          <AutoResizableTextarea />
          <input type='submit' value='Publicar' />
        </form>
      </div>
    </div>
  )
}

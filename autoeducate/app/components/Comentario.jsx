import { Reply } from '../components/reply'
import { UserAuth } from '../context/AuthContext'
import { AutoResizableTextarea } from './AutoTextArea'
import { ReloadState } from '../context/ReloadContext'
import React from 'react'

export function Comentario (props) {
  const { usuario, comentario, reply, id, foro } = props
  const { user } = UserAuth()
  const { reloadComponent } = ReloadState()

  async function añadirReply (usuario, comentario) {
    try {
      const data = new FormData()
      data.set('id', id)
      data.set('usuario', usuario)
      data.set('comentario', comentario)
      data.set('foro', foro)

      const res = await fetch('/api/upload/reply', {
        method: 'POST',
        body: data
      })
      console.log(res)

      if (res.ok) {
        console.log('Respuesta añadida')
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
    añadirReply(usuario, comentar)
  }
  return (
    <div className='container-comentario'>
      <div className='principal'>
        <div className='autor'>
          {usuario}
        </div>
        <div className='comentario'>
          {comentario}
        </div>
      </div>
      <div className='reply'>
        {reply.map((elemento, index) => (
          <Reply key={index} usuario={elemento.usuario} comentario={elemento.comentario} />
        ))}
        <form onSubmit={submitHandler}>
          <div className='container-reply'>
            <AutoResizableTextarea />
            <input type='submit' value='Publicar' />
          </div>
        </form>
      </div>
    </div>
  )
}

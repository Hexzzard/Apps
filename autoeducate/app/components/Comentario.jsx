import { Reply } from '../components/reply'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import { UserAuth } from '../context/AuthContext'
import { AutoResizableTextarea } from './AutoTextArea'
import { ReloadState } from '../context/ReloadContext'
import React from 'react'

export function Comentario (props) {
  const { usuario, comentario, reply, id, foro } = props
  const { user } = UserAuth()
  const db = doc(firestore, 'Comentarios', foro)
  const { reloadComponent } = ReloadState()

  async function añadirReply (usuario, comentario) {
    const documentoSnapshot = await getDoc(db)
    const datosDocumento = documentoSnapshot.data().comentarios
    const nuevoComentario = {
      usuario,
      comentario
    }
    console.log(datosDocumento[id].reply)
    datosDocumento[id].reply.push(nuevoComentario)
    await updateDoc(db, { comentarios: datosDocumento })
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

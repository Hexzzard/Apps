import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import { useState, useEffect } from 'react'
import { Comentario } from './Comentario'
import { ReloadState } from '../context/ReloadContext'

export function Foro () {
  const foro = 'test' // añadir id del foro
  const [comentarios, setComentarios] = useState([])
  const { reload, reloadDone } = ReloadState()
  useEffect(() => {
    async function obtenerComentarios () {
      try {
        const db = doc(firestore, 'Comentarios', foro)
        const documentoSnapshot = await getDoc(db)
        const datosDocumento = documentoSnapshot.data().comentarios.slice().reverse()
        setComentarios(datosDocumento)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerComentarios()
    reloadDone()
  }, [foro, reload, reloadDone])
  const tamaño = comentarios.length - 1

  return (
    <div className='chat'>
      {comentarios.map((elemento, index) => (
        <Comentario key={index} id={tamaño - index} usuario={elemento.usuario} comentario={elemento.comentario} reply={elemento.reply} />
      ))}
    </div>
  )
}

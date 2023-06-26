import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import { useState, useEffect } from 'react'
import { Comentario } from './Comentario'
import { ReloadState } from '../context/ReloadContext'
import { Comentar } from './Comentar'
import { HeaderForo } from './HeaderForo'

export function Foro (props) {
  const [foro, setForo] = useState([])
  const [comentarios, setComentarios] = useState([])
  const { reload, reloadDone } = ReloadState()

  useEffect(() => {
    async function obtenerComentarios () {
      try {
        const { id } = props
        console.log(id)
        const dbforo = doc(firestore, 'Foros', id)
        const foroSnapshot = await getDoc(dbforo)
        const datosforo = foroSnapshot.data()
        setForo(datosforo)

        const dbComentarios = doc(firestore, 'Comentarios', id)
        const comentariosSnapshot = await getDoc(dbComentarios)
        const datosComentarios = comentariosSnapshot.data().comentarios.slice().reverse()
        setComentarios(datosComentarios)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerComentarios()
    reloadDone()
  }, [props, reload, reloadDone])
  const tamaño = comentarios.length - 1

  return (
    <div className='form2'>
      <HeaderForo title='grupo de estudio 1' titulo={foro.titulo} descripcion={foro.descripcion} />
      <div className='chat'>
        <Comentar id={props.id} />
        <div className='comentarios'>
          <div className='chat'>
            {comentarios.map((elemento, index) => (
              <Comentario key={index} id={tamaño - index} foro={props.id} usuario={elemento.usuario} comentario={elemento.comentario} reply={elemento.reply} />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

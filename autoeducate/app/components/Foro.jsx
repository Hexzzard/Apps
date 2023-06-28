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
    async function ObtenerComentarios () {
      try {
        const { id } = props
        console.log(id)
        const data = new FormData()
        data.set('id', id)
        await fetch('/api/get/comentarios', {
          method: 'POST',
          body: data
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            const success = data.success
            const datosforo = data.datosforo
            const datosComentarios = data.datosComentarios

            if (success) {
              setForo(datosforo)
              setComentarios(datosComentarios)
            } else {
              console.log('Error en la respuesta del backend')
            }
          })
      } catch (error) {
        console.error('error al contactar con el backend: ', error)
      }
    }

    ObtenerComentarios()
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

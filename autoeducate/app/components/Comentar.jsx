import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import { UserAuth } from '../context/AuthContext'
import { ReloadState } from '../context/ReloadContext'
import { AutoResizableTextarea } from './AutoTextArea'

export function Comentar () {
  // recibir foro id
  const foro = 'test'
  const { user } = UserAuth()
  const { reloadComponent } = ReloadState()
  const db = doc(firestore, 'Comentarios', foro)
  async function añadirComentario (usuario, comentario) {
    const documentoSnapshot = await getDoc(db)
    if (documentoSnapshot.exists()) {
      const datosDocumento = documentoSnapshot.data().comentarios
      const nuevoComentario = {
        usuario,
        comentario,
        reply: []
      }
      datosDocumento.push(nuevoComentario)
      await updateDoc(db, { comentarios: datosDocumento })
    } else {
      const nuevoDocumento = {
        comentarios: [{
          usuario,
          comentario,
          reply: []
        }]
      }
      await setDoc(db, nuevoDocumento)
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

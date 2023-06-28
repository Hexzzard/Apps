import { NextResponse } from 'next/server'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../../api/firebase.config'

// guarda archivos en local
export async function POST (request) {
  const data = await request.formData()
  const usuario = data.get('usuario')
  const comentario = data.get('comentario')
  const id = data.get('id')

  try {
    const dbComentarios = doc(firestore, 'Comentarios', id)
    const ComentariosSnapshot = await getDoc(dbComentarios)

    if (ComentariosSnapshot.exists()) {
      const datosDocumento = ComentariosSnapshot.data().comentarios
      const nuevoComentario = {
        usuario,
        comentario,
        reply: []
      }
      datosDocumento.push(nuevoComentario)
      await updateDoc(dbComentarios, { comentarios: datosDocumento })
    } else {
      const nuevoDocumento = {
        comentarios: [{
          usuario,
          comentario,
          reply: []
        }]
      }
      await setDoc(dbComentarios, nuevoDocumento)
    }
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}

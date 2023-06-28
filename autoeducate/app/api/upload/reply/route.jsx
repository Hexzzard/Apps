import { NextResponse } from 'next/server'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../../api/firebase.config'

// guarda archivos en local
export async function POST (request) {
  const data = await request.formData()
  const usuario = data.get('usuario')
  const comentario = data.get('comentario')
  const id = data.get('id')
  const foro = data.get('foro')

  try {
    const dbComentarios = doc(firestore, 'Comentarios', foro)
    const ComentariosSnapshot = await getDoc(dbComentarios)
    const datosDocumento = ComentariosSnapshot.data().comentarios
    const nuevoComentario = {
      usuario,
      comentario
    }
    datosDocumento[id].reply.push(nuevoComentario)
    await updateDoc(dbComentarios, { comentarios: datosDocumento })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}

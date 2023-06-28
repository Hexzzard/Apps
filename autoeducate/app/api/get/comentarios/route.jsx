import { NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../firebase.config'

export async function POST (request) {
  const data = await request.formData()
  const id = data.get('id')

  try {
    const dbforo = doc(firestore, 'Foros', id)
    const foroSnapshot = await getDoc(dbforo)
    const datosforo = foroSnapshot.data()

    const dbComentarios = doc(firestore, 'Comentarios', id)
    const comentariosSnapshot = await getDoc(dbComentarios)
    try {
      const datosComentarios = comentariosSnapshot.data().comentarios.slice().reverse()
      return NextResponse.json({ success: true, datosforo, datosComentarios })
    } catch (error) {
      const datosComentarios = []
      return NextResponse.json({ success: true, datosforo, datosComentarios })
    }
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}

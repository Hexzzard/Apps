import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../api/firebase.config'
import path from 'path'

// guarda archivos en local
export async function POST (request) {
  const data = await request.formData()
  const file = data.get('file')
  const id = data.get('id')
  const nombre = data.get('nombre')
  const asignatura = data.get('asignatura')
  const descripcion = data.get('descripcion')

  let ImagenRef = `/store/${file.name}`

  if (file === 'null') {
    ImagenRef = null
  }
  try {
    const docuRef = doc(firestore, `GruposEstudio/${id}`)
    const ForoRef = doc(firestore, `Foros/${id}`)
    const comentariosRef = doc(firestore, `Comentarios/${id}`)
    await setDoc(docuRef, { id, nombre, asignatura, imagen: ImagenRef, Foro: ForoRef })
    await setDoc(ForoRef, { id, titulo: nombre, descripcion, comentarios: comentariosRef })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const filePath = path.join(process.cwd(), 'public/store', file.name)
  await writeFile(filePath, buffer)

  return NextResponse.json({ success: true })
}

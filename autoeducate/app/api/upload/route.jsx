import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

// guarda archivos en local
export async function POST (request) {
  const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const filePath = path.join(process.cwd(), 'public/store', file.name)
  await writeFile(filePath, buffer)
  console.log(`open ${filePath} to see the uploaded file`)

  return NextResponse.json({ success: true })
}

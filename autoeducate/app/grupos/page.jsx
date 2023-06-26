'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.css'
import 'app/test.css'
import './grupos.css'
import '../login/form.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavBarResponsive'
import { GrupoEstudio } from '../components/GrupoEstudio'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import FormModal from '../components/FormModal'

export default function App () {
  const [grupos, setGrupos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [imagen, setImagen] = useState()
  useEffect(() => {
    const leftMov = () => {
      slider.scrollLeft -= scroll
    }
    const rightMov = () => {
      slider.scrollLeft += scroll
    }
    const slider = document.getElementById('slider')
    const right = document.getElementById('right')
    const left = document.getElementById('left')
    const scroll = window.innerWidth > 1000 ? 445 : 280
    left.addEventListener('click', leftMov)
    right.addEventListener('click', rightMov)

    return () => {
      left.removeEventListener('click', leftMov)
      right.removeEventListener('click', rightMov)
    }
  }, [])
  useEffect(() => {
    async function obtenerForos () {
      try {
        const gruposSnapshot = await getDocs(collection(firestore, 'GruposEstudio'))
        const grupos = []
        gruposSnapshot.forEach((doc) => {
          const datosForo = doc.data()
          grupos.push(datosForo)
        })
        setGrupos(grupos)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerForos()
  }, [])

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = e.target.elements.name.value
    const asignatura = e.target.elements.asignatura.value
    const descripcion = e.target.elements.descripcion.value
    console.log(imagen)
    registrarGrupo(nombre, asignatura, descripcion)
    handleCloseModal()
  }

  async function registrarGrupo (nombre, asignatura, descripcion) {
    const id = nombre.replace(/\s/g, '')
    const docuRef = doc(firestore, `GruposEstudio/${id}`)
    let ImagenRef = null

    if (imagen != null) {
      ImagenRef = `/store/${imagen.name}`
    }
    try {
      const ForoRef = doc(firestore, `Foros/${id}`)
      await setDoc(docuRef, { id, nombre, asignatura, imagen: ImagenRef, Foro: ForoRef })
      await setDoc(ForoRef, { id, titulo: nombre, descripcion })
      console.log('Grupo de estudio creado')
      try {
        const data = new FormData()
        data.set('file', imagen)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: data
        })
        console.log(res)

        if (res.ok) {
          console.log('File uploaded successfully')
        }
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error('Error al crear el grupo de estudio: ', error)
    }
  }

  return (
    <div className='container-center-horizontal'>
      <div className='principal screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <div className='overlap-group4'>
          <h1 className='title valing-text-midle inter-extra-bold-black-72px'>
            Grupos de estudio
          </h1>
          <FormModal isOpen={isOpen} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} setImagen={setImagen} />
          <div className='project-multiple-1'>
            <div className='projects'>
              <div className='row-1'>
                <img src='/assets/arrow_left.png' alt='Izquierda' className='arrow' id='left' />
                <div className='container-slider'>
                  <div className='slider' id='slider'>
                    {grupos.map((elemento, index) => (
                      <Link href={`/foros/${elemento.id}`} key={index}>
                        <GrupoEstudio imagen={elemento.imagen} nombre={elemento.nombre} descripcion={elemento.asignatura} />
                      </Link>
                    ))}
                    <article className='plus' onClick={handleOpenModal}>
                      <img src='/assets/plus.png' alt='añadir' className='cover2' />
                    </article>
                  </div>
                </div>
                <img src='/assets/arrow_right.png' alt='Derecha' className='arrow' id='right' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

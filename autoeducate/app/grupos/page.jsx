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
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'
import FormModal from '../components/FormModal'

export default function App () {
  const [grupos, setGrupos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [imagen, setImagen] = useState(null)
  const [reload, setReload] = useState()
  useEffect(() => {
    const slider = document.getElementById('slider')
    const right = document.getElementById('right')
    const left = document.getElementById('left')

    const leftMov = () => {
      const scroll = window.innerWidth > 500 ? 445 : 275
      slider.scrollLeft -= scroll
    }
    const rightMov = () => {
      const scroll = window.innerWidth > 500 ? 445 : 275
      slider.scrollLeft += scroll
    }
    left.addEventListener('click', leftMov)
    right.addEventListener('click', rightMov)

    return () => {
      left.removeEventListener('click', leftMov)
      right.removeEventListener('click', rightMov)
    }
  }, [])
  useEffect(() => {
    console.log('cargnado datos')
    async function obtenerForos () {
      try {
        const gruposSnapshot = await getDocs(collection(firestore, 'GruposEstudio'))
        const grupos = []
        gruposSnapshot.forEach((doc) => {
          const datosForo = doc.data()
          grupos.push(datosForo)
        })
        setGrupos(grupos)
        console.log(grupos)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerForos()
    setReload(false)
  }, [reload])

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
    setReload(true)
    console.log(reload)
    handleCloseModal()
  }

  async function registrarGrupo (nombre, asignatura, descripcion) {
    try {
      const id = nombre.replace(/\s/g, '')
      const data = new FormData()
      data.set('id', id)
      data.set('file', imagen)
      data.set('nombre', nombre)
      data.set('asignatura', asignatura)
      data.set('descripcion', descripcion)

      await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      setReload(true)
    } catch (error) {
      console.error('error al contactar con el backend: ', error)
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

'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.css'
import 'app/test.css'
import './grupos.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavBarResponsive'
import { GrupoEstudio } from '../components/GrupoEstudio'

export default function App () {
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
          <div className='project-multiple-1'>
            <div className='projects'>
              <div className='row-1'>
                <img src='/assets/arrow_left.png' alt='Izquierda' className='arrow' id='left' />
                <div className='container-slider'>
                  <div className='slider' id='slider'>
                    <Link href={`/grupos/${1}`}>
                      <GrupoEstudio
                        imagen='/assets/grupo1.png' titulo='grupo de estudio 1' descripcion='asignatura Example 1'
                      />
                    </Link>
                    <GrupoEstudio
                      imagen='/assets/grupo2.png' titulo='grupo de estudio 2' descripcion='asignatura Example 2'
                    />
                    <GrupoEstudio
                      imagen='/assets/grupo1.png' titulo='grupo de estudio 3' descripcion='asignatura Example 3'
                    />
                    <GrupoEstudio
                      imagen='/assets/grupo2.png' titulo='grupo de estudio 4' descripcion='asignatura Example 4'
                    />
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

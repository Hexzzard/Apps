'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'app/test.css'
import './grupos.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavBarResponsive'

function App () {
  return (
    <Principal
      title='Bienvenido User' sectionHeadingProps={principalData.sectionHeadingProps} x11Props={principalData.x11Props} x12Props={principalData.x12Props}
    />
  )
}

export default App

function Principal (props) {
  const { x11Props, x12Props } = props

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
                    <X1
                      cover={x11Props.cover} projectTitle={x11Props.projectTitle} projectTags={x11Props.projectTags}
                    />
                    <X1
                      cover={x12Props.cover} projectTitle={x12Props.projectTitle} projectTags={x12Props.projectTags}
                    />
                    <X1
                      cover={x12Props.cover} projectTitle={x12Props.projectTitle} projectTags={x12Props.projectTags}
                    />
                    <X1
                      cover={x12Props.cover} projectTitle={x12Props.projectTitle} projectTags={x12Props.projectTags}
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

function X1 (props) {
  const { cover, projectTitle, projectTags } = props

  return (
    <article className='row-1-item'>
      <img src={cover} alt='Cover' className='cover' />
      <div className='project-details'>
        <div className='project-title inter-semi-bold-eerie-black-24px'>
          {projectTitle}
        </div>
        <div className='project-tags inter-normal-eerie-black-16px'>
          {projectTags}
        </div>
      </div>
    </article>
  )
}

const x11data = {
  cover: '/assets/grupo1.png',
  projectTitle: 'grupo de estudio 1',
  projectTags: 'asignatura Example 1'
}

const x12data = {
  cover: '/assets/grupo2.png',
  projectTitle: 'grupo de estudio 2',
  projectTags: 'asignatura Example 2'
}

const principalData = {
  x11Props: x11data,
  x12Props: x12data,
  left: '/assets/arrow_left.png'
}

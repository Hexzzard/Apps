'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../test.css'
import './ensayos.css'

import { Footer } from '../components/footer'
import { NavbarResponsive } from '../components/NavbarResponsive'
import { Button2 } from '../components/Button2'
import { Pregunta } from '../components/preguntas'
import { UserAuth } from '../context/AuthContext'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'

function App () {
  const { user } = UserAuth()
  const [dataPreguntas, setPreguntas] = useState([])
  const [dataCorrectas, setCorrectas] = useState(0)

  useEffect(() => {
    const obtenerPreguntas = async () => {
      const db = doc(firestore, 'Ensayos', 'H1xrTzJTtqHLCuFwgJzE')
      const documentoSnapshot = await getDoc(db)
      try {
        const datosDocumento = documentoSnapshot.data().Preguntas
        console.log(datosDocumento)
        const preguntas = []
        for (const referencia of datosDocumento) {
          const pregunta = await getDoc(referencia)
          preguntas.push(pregunta.data())
        }
        setPreguntas(preguntas)
      } catch (error) {
        console.log('No se ha podido ubicar el Ensayo')
        console.log(error)
      }
    }
    obtenerPreguntas()
  }, [])
  console.log(dataPreguntas)
  function submitHandler (e) {
    e.preventDefault()
    console.log(e.target.elements)
    const selectores = [
      e.target.elements.P0.value,
      e.target.elements.P1.value

    ]
    console.log(selectores.length)
    revisar(selectores)
  }
  function revisar (selectores) {
    for (let id = 0; id < selectores.length; id++) {
      if (selectores[id] === dataPreguntas[id].correcta.toString()) {
        setCorrectas(dataCorrectas + 1)
      }
    }
    console.log(`Puntaje de ${dataCorrectas}`)
  }
  function guardarbd () {
    return true
  }
  return (
    <div className='container-center-horizontal-2'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <form className='form2' onSubmit={submitHandler}>
          <Pregunta
            id='test'
            title='Pregunta 1'
            descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            A='Elefante guerrero siquico ancestral'
            B='Falso'
            C='Shrek'
            D='Si'
          />
          {dataPreguntas.map((elemento, index) => (
            <Pregunta
              key={index}
              id={index}
              title={dataPreguntas[index].enunciado}
              descripcion={dataPreguntas[index].descripcion}
              A={dataPreguntas[index].A}
              B={dataPreguntas[index].B}
              C={dataPreguntas[index].C}
              D={dataPreguntas[index].D}
            />
          ))}
          <div className='botones'>
            <Button2 clase='button-ensayo'>Enviar</Button2>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default App

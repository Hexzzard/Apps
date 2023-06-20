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
import AlertModal from '../components/AlertModal'

import { UserAuth } from '../context/AuthContext'

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../api/firebase.config'

function App () {
  const { user } = UserAuth()
  const [dataPreguntas, setPreguntas] = useState([])
  const [dataCorrectas, setCorrectas] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    const obtenerPreguntas = async () => {
      if (reload) {
        const db = doc(firestore, 'Ensayos', 'H1xrTzJTtqHLCuFwgJzE')
        const documentoSnapshot = await getDoc(db)
        try {
          const datosDocumento = documentoSnapshot.data().Preguntas
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
        setReload(false)
      }
    }
    obtenerPreguntas()
  }, [reload])
  console.log(dataPreguntas)

  function submitHandler (e) {
    e.preventDefault()
    console.log(e.target.elements)
    const selectores = [
      e.target.elements.P0.value,
      e.target.elements.P1.value

    ]
    revisar(selectores)
  }
  function revisar (selectores) {
    let correctas = 0
    for (let id = 0; id < selectores.length; id++) {
      if (selectores[id] === dataPreguntas[id].correcta.toString()) {
        correctas += 1
      }
    }
    console.log(`Puntaje de ${correctas}`)
    setCorrectas(correctas)
    guardarEnsayo(correctas, dataPreguntas.length)
    setShowAlert(true)
    // redirect perfil
  }
  const handleCloseAlert = () => {
    setShowAlert(false)
    setReload(true)
  }

  async function guardarEnsayo (correctas, total) {
    const docuRef = doc(firestore, 'Usuarios', user.uid)
    const docSnapshot = await getDoc(docuRef)
    let ensayos = []
    if (Object.hasOwnProperty.call(docSnapshot.data(), 'ensayos')) {
      ensayos = docSnapshot.data().ensayos
    }
    const nuevo = { correctas, total }
    ensayos.push(nuevo)
    await updateDoc(docuRef, { ensayos })
  }

  return (
    <div className='container-center-horizontal-2'>
      <div className='login screen'>
        <div className='header-container'>
          <NavbarResponsive />
        </div>
        <AlertModal
          isOpen={showAlert}
          title='Resultados'
          message={`Correctas ${dataCorrectas}/${dataPreguntas.length}`}
          onClose={handleCloseAlert}
        />
        <form className='form2' onSubmit={submitHandler}>
          {dataPreguntas.map((elemento, index) => (
            <Pregunta
              key={index}
              id={index}
              title={elemento.enunciado}
              descripcion={elemento.descripcion}
              A={elemento.A}
              B={elemento.B}
              C={elemento.C}
              D={elemento.D}
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

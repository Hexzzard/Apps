import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './login/page'
import HomePage from './page'
import RegisterPage from './registro/page'
import GruposPage from './grupos/page'
import EnsayosPage from './ensayos/page'
import ForosPage from './foros/page'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/grupos' element={<GruposPage />} />
        <Route path='/ensayos' element={<EnsayosPage />} />
        <Route path='/foros' element={<ForosPage />} />
      </Routes>
    </Router>
  )
}

export default App

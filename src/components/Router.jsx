import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Logement from '../pages/Logement'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/logement' element={ <Logement /> } />
      <Route path='/*' element={ <NotFound /> } />
    </Routes>
  )
}

export default Router
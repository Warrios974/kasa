import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/about/About'
import Logement from '../../pages/logement/Logement'
import NotFound from '../../pages/notFound/NotFound'
import Home from '../../pages/home/Home'

function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/logement/:id' element={ <Logement /> } />
      <Route path='/*' element={ <NotFound /> } />
    </Routes>
  )
}

export default Router
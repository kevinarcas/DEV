import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Contacto } from '../components/Contacto'
import { Curriculum } from '../components/Curriculum'
import { Error } from '../components/Error'
import { Portafolio } from '../components/Portafolio'
import { Servicios } from '../components/Servicios'
import { Proyecto } from '../components/Proyecto'
import { Header } from '../components/layout/Header'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'

export const Rutas = () => {
  return (
    <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Nav */}
        <Nav />

        {/* Content */}
        <section className='content'>
            <Routes>
                <Route path='/' element={ <Navigate to='/inicio' /> } />
                <Route path='/inicio' element={ <Inicio /> } />
                <Route path='/contacto' element={ <Contacto /> } />
                <Route path='/curriculum' element={ <Curriculum /> } />
                <Route path='/portafolio' element={ <Portafolio /> } />
                <Route path='/servicios' element={ <Servicios /> } />
                <Route path='/proyecto/:id' element={ <Proyecto /> } />
                <Route path='/*' element={ <Error /> } />
            </Routes>
        </section>

        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}
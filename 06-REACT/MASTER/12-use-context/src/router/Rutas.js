import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'

export const Rutas = () => {
  return (
    <BrowserRouter>
      <header className='header'>
        <nav>
          <div className='logo'>
            <h2>Aprendiendo useContext</h2>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
              <NavLink to='/articulos'>Artículos</NavLink>
              <NavLink to='/acerca-de'>Acerca de</NavLink>
              <NavLink to='/contacto'>Contacto</NavLink>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className='content'>
        <Routes>
            <Route path='/' element={ <Inicio />} />
            <Route path='/inicio' element={ <Inicio />} />
            <Route path='/acerca-de' element={ <Acerca />} />
            <Route path='/articulos' element={ <Articulos />} />
            <Route path='/contacto' element={ <Contacto />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/*' element={ <Error />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
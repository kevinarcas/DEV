import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'

export const Rutas = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  const cerrarSesion = (e) => {
    e.preventDefault()
    setUsuario(null)
  }

  return (
    <BrowserRouter>
      <header className='header'>
        <nav>
          <div className='logo'>
            <h2>useContext</h2>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/articulos'>Artículos</NavLink>
            </li>
            <li>
              <NavLink to='/acerca-de'>Acerca de</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>
              {
                usuario !== null ?
                (
                  <>
                    <li>
                      <NavLink to='/'>{usuario.username}</NavLink>
                    </li>
                    <li>
                      <a href='#' onClick={cerrarSesion}>Cerrar sesión</a>
                    </li>
                  </>
                )
                : <NavLink to='/login'>Identifícate</NavLink>
              }
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
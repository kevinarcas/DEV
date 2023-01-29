import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Persona } from '../components/Persona'
import { Error } from '../components/Error'
import { ControlPanel } from '../components/ControlPanel'
import { PanelAcerca } from '../components/panel/PanelAcerca'
import { PanelCrear } from '../components/panel/PanelCrear'
import { PanelGestion } from '../components/panel/PanelGestion'
import { PanelInicio } from '../components/panel/PanelInicio'

export const RouterPrincipal = () => {

    /* Si el NavLink está activo, pone la clase 'activado' */
    const activado = (datos) => {
        return datos.isActive ? 'activado' : ''
    }


  return (
    <BrowserRouter>
        <h1>CABECERA</h1>
        <nav id='nav'>
            <ul>
                <NavLink to='/' className={ activado }>Inicio</NavLink>
                <NavLink to='/articulos' className={ activado }>Artículos</NavLink>
                <NavLink to='/contacto' className={ activado }>Contacto</NavLink>
                <NavLink to='/persona' className={ activado }>Persona</NavLink>
                <NavLink to='/panel' className={ activado }>ControlPanel</NavLink>
            </ul>
        </nav>
        <section>
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/articulos' element={ <Articulos /> } />
                <Route path='/contacto' element={ <Contacto /> } />
                <Route path='/persona' element={ <Persona /> } />
                <Route path='/persona/:nombre' element={ <Persona /> } />
                <Route path='/persona/:nombre/:apellido' element={ <Persona /> } />
                <Route path='*' element={ <Error />} />
                <Route path='/redirigir' element={ <Navigate to='/contacto' />} />
                <Route path='/panel/*' element={ <ControlPanel />} >
                    <Route path='inicio' element={ <PanelInicio /> } />
                    <Route path='crear-articulos' element={ <PanelCrear /> } />
                    <Route path='gestion-usuarios' element={ <PanelGestion /> } />
                    <Route path='acerca-de' element={ <PanelAcerca /> } />
                </Route>
            </Routes>
        </section>
        <footer>Pie de página</footer>
    </BrowserRouter>
  )
}
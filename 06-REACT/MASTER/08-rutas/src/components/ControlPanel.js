import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>Página de ControlPanel</h1>
        <p>Esta es la página de ControlPanel</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio' >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos'>Crear articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuarios'>Gestión usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Aquí van los componentes del módulo panel. */}
            <Outlet />
        </div>
    </div>
 )
}
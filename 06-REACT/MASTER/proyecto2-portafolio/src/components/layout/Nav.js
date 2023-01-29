import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

  const modActivo = (e) => {
    return e.isActive ? 'activo' : '';
  }
  
  return (
    <nav className='nav'>
        <ul>
            <NavLink to='/inicio' className={modActivo}>Inicio</NavLink>
            <NavLink to='/contacto' className={modActivo}>Contacto</NavLink>
            <NavLink to='/curriculum' className={modActivo}>Curriculum</NavLink>
            <NavLink to='/portafolio' className={modActivo}>Portafolio</NavLink>
            <NavLink to='/servicios' className={modActivo}>Servicios</NavLink>
        </ul>
    </nav>
  )
}
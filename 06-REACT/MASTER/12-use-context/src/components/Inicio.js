import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de inicio.</p>
      
      {
        usuario &&
        <p>Valor compartido: {usuario.nombre} {usuario.web}</p>
      }
    </div>
  )
}
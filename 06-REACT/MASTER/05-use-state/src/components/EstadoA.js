import React, {useState} from 'react'

export const EstadoA = () => {
    
    /*
    ESTE ES EL PROBLEMA, LO QUE NO FUNCIONA.
    let nombre = 'Kevin Arcas'

    const cambiarNombre = () => {
        nombre = 'Alejandra Ramos'
    }
    */

    const [ nombre, setNombre ] = useState('Kevin Arcas');

    const cambiarNombreAle = () => {
        setNombre('Alejandra Ramos')
    }

    const cambiarNombre = (nombreVar) => {
        setNombre(nombreVar)
    }
    
    const escribirNombre = (valor) => {
        setNombre(valor)
    }

  return (
    <div>
        <h3>Componente: EstadoA</h3>

        Nombre: <strong className='nombre'>{nombre}</strong>
        <br />
        <button onClick={cambiarNombreAle}>Cambiar nombre por Ale</button> &nbsp;
        <button onClick={ () => cambiarNombre('Jose Luis') }>Cambiar nombre por variable</button>
        <br />
        <label>Nombre nuevo:</label> &nbsp;
        <input type='text' onChange={ (e) => escribirNombre(e.target.value) } />
    </div>
  )
}
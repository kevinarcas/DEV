import React, { useState, useEffect, useCallback } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState('');

    const [pagina, setPagina] = useState(1);

    useEffect(() => {
      console.log('GESTION se ha renderizado')
    }, [nombre, pagina]);
    
    const modGestor = (e) => {
        setNombre(e.target.value)
    }

    const mostrarMensaje = useCallback(() => {
      console.log('mensaje');
    }, [pagina])


  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input  type='text'
                placeholder='Introduce el gestor...'
                onChange={modGestor}
        />

        <h2>Listado de empleados</h2>
        <p>Los empleados vienen de json...</p>
        
        <p>
            Elige tu página: &nbsp;
            <button onClick={() => setPagina(1)}>1</button>
            <button onClick={() => setPagina(2)}>2</button>
        </p>
        <Empleados page={pagina} mensaje={mostrarMensaje} />
    </div>
  )
}
import React from 'react'

export const ComponenteC = () => {

    let libros = ['Harry Potter', 'Juego de Tronos', 'El Quijote'];

  return (
    <div className='componenteC'>
        <h2>Listado de libros</h2>

        { (libros.length > 0) ? 
            <ul>
                {
                    libros.map( (libro,i) =>{
                        return <li key={i}>{libro}</li>
                    })
                }
            </ul>
            :
            <p>No hay libros</p>
        }
    </div>
  )
}
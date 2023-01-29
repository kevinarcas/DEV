import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

/*  Le pongo a limite por defecto el valor de trabajos.length
    Me va a mostrar ese número de trabajos. */
export const ListadoTrabajos = ({limite = trabajos.length}) => {
    
  return (
    <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={`/images/${trabajo.id}.png`} alt={trabajo.nombre} />
                </div>
                <span>{trabajo.categoria}</span>
                <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            )
          })
        }
      </section>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, mi nombre es <strong>Kevin Arcas</strong> y soy Desarrollador Web en Madrid. <br />
        Ofrezco mis servicios de <strong>programación y desarrollo</strong> en todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear un website o aplicación web,
        tener más visibilidad y relevancia en Internet. <br />
        <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos como Desarrollador Web.</p>

        <div className='projects'>
          <ListadoTrabajos limite='2' />
        </div>
      </section>
    </div>
  )
}
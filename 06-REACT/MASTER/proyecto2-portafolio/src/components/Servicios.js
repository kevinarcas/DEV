import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      <section className='services'>
        <article className='service'>
          <h2>Diseño web</h2>
          <p>Doy estilos a tu web para que sea más atractiva.</p>
        </article>
        <article className='service'>
          <h2>Desarrollo web</h2>
          <p>Creo tu página web desde cero.</p>
        </article>
        <article className='service'>
          <h2>Posicionamiento web SEO</h2>
          <p>Consigo que tu sitio web esté en las primeras páginas de Google y tenga más visitas.</p>
        </article>
      </section>
    </div>
  )
}
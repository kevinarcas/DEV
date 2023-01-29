import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre = useRef();
    const apellidos = useRef();
    const email = useRef();
    const miCaja = useRef();

    const mostrar = (e) => {
        e.preventDefault();

        console.log(nombre.current.value)
        console.log(miCaja)

        let caja = miCaja.current
        miCaja.current.classList.add('fondoVerde')
        caja.innerHTML = '<h2>Formulario enviado</h2>'
    }

  return (
    <div>
        <h1>Formulario</h1>
        <form onSubmit={mostrar}>
            <input type='text' placeholder='Nombre' ref={nombre} /> <br />
            <input type='text' placeholder='Apellidos' ref={apellidos} /> <br />
            <input type='email' placeholder='Correo electrónico' ref={email} /> <br />
            <input type='submit' value='Enviar' />
        </form>
        <div ref={miCaja} className='miCaja' >
            <h2>Pruebas con useRef</h2>
        </div>
    </div>
  )
}
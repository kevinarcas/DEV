import React from 'react'

export const Eventos = () => {

    const darClick = () => {
        console.log('Has dado click')
    }

    const saludar = (nombre, edad) => {
        console.log(`Hola ${nombre} tienes ${edad} años.`)
    }

    const darDobleClick = () => {
        console.log('Has dado doble click')
    }

    const raton = (mensaje) => {
        console.log(`Has ${mensaje}`)
    }

    const estasDentro = () => {
        console.log('Estás dentro del input')
    }

    const estasFuera = () => {
        console.log('Estás fuera del input')
    }

  return (
    <div>
        <h1>Eventos en React</h1>

        <p>
            {/******************
            *** Evento click ***
            ******************/}
            
            <button onClick={ () => {
                console.log('Hola')
            }}>Haz click</button>
            
            <button onClick={ (e) => {
                console.log('Capturando el evento',e)
            }}>Haz click 2</button>

            <button onClick={darClick}>Ejecutar función</button>

            {/* Para pasar parámetros tengo que hacerlo como flecha */}
            <button onClick={ () => saludar('Kevin', 29)}>Función con parámetros</button>
        </p>

        <p>
            {/***********************
            *** Evento dobleclick ***
            ***********************/}

            <button onDoubleClick={ darDobleClick }>Doble click</button>
        </p>

        <div id='caja' 
            onMouseEnter={ () => raton('entrado') }
            onMouseLeave={ () => raton('salido') }
        >
            {/***********************
            *** Evento mouse ***
            ***********************/}
            Pasa por encima
        </div>

        <p>
            {/*************************
            *** Evento focus y blur ***
            *************************/}
            <input type='text' 
                onFocus={ estasDentro } 
                onBlur={ estasFuera }
            placeholder='Introduce tu nombre'/>
        </p>

    </div>
  )
}
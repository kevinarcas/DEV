import React, { useReducer, useEffect } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer'

export const Juegos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('juegos')) || []
    }
    
    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos))
        console.log(juegos)
    }, [juegos]);

    const getDatos = (e) => {
        e.preventDefault()

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }

        if(juego.titulo && juego.descripcion){
            const action = {
                type: 'crear',
                payload: juego
            }
    
            dispatch(action)
        }
    }

    const borrar = (id) => {
        const action = {
            type: 'borrar',
            payload: id
        }

        dispatch(action)
    }

    const editar = (e, juego) =>{
        let juegoFinal = {
            id: juego.id,
            titulo: e.target.value,
            descripcion: juego.descripcion
        }
        
        const action = {
            type: 'editar',
            payload: juegoFinal
        }

        dispatch(action)
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Número de videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map( (juego) => {
                    return (
                        <>
                            <li key={juego.id}>{juego.titulo} - {juego.descripcion}</li>
                            &nbsp;
                            <button onClick={ () => borrar(juego.id) } >X</button>
                            <input type='text' onBlur={ (e) => editar(e, juego) } ></input>
                        </>
                    )
                })
            }
        </ul>

        <h3>Agregar juego</h3>
        <form onSubmit={getDatos}>
            <input type='text' name='titulo' placeholder='Título...' />
            <textarea name='descripcion' placeholder='Descripción...' />
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
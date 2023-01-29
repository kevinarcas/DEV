import React, { useState, useEffect, useRef } from 'react'

export const Tareas = () => {

    const [lista, setLista] = useState([]);

    const [tarea, setTarea] = useState( { id: null, name: '' } );

    /*  Es opcional: lo hago para acceder a su valor mas fácilmente. */
    const nombre = useRef()

    useEffect(() => {
        if(tarea.id){
            setLista( (actual) => {
                return [...actual, tarea]
            })
        }
    }, [tarea]);

    const guardarTarea = (e) => {
        e.preventDefault()
        
        if(nombre.current.value.length !== 0){
            let task = {
                id: Date.now(),
                name: nombre.current.value
            }
            
            setTarea(task)
        }
    }

    const borrarTarea = (id) => {
        let resultado = lista.filter( (tarea) => tarea.id !== parseInt(id) )
        setLista(resultado)
    }


  return (
    <div>
        <h1>Mis tareas</h1>
        <h3>Crear tarea</h3>
        <form onSubmit={guardarTarea}>
            <input type='text' name='nombre' ref={nombre} placeholder='Tarea...' />
            <input type='submit' value='Enviar' />
        </form>
        
        <br /><br />
        
        <h3>Lista de tareas</h3>
        <ul>
        {
            lista.length >= 1 ?
            (
                lista.map( 
                    (elem) => (
                        <li key={elem.id}>
                            {elem.name}
                            <button onClick={() => borrarTarea(elem.id)}>X</button>
                        </li>
                    )
                )
            )
            : <p>No hay elementos</p>
        }
        </ul>
    </div>
  )
}
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre, apellido} = useParams();
    const redirigir = useNavigate();

    const enviar = (e) => {
        e.preventDefault();

        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;

        if(nombre.length <=0 && apellido.length <=0){
            redirigir('/');
        }
        else{
            redirigir(`/persona/${nombre}/${apellido}`);
        }
    }


  return (
    <div>
        <h1>Página de persona</h1>
        <p>Esta es la página de persona</p>

        {
            !nombre &&
            <p className='texto rojo'>No hay param1 ni param2</p>
        }
        {
            nombre &&
            <p className='texto'>{nombre}</p>
        }
        {
            apellido &&
            <p className='texto'>{apellido}</p>
        }

        <form onSubmit={enviar}>
            <input type='text' name='nombre' /><br />
            <input type='text' name='apellido' /><br />
            <input type='submit' name='enviar' value='enviar' />
        </form>
    </div>
  )
}
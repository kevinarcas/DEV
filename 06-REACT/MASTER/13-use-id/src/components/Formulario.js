import React from 'react'
import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const { formu, enviarForm, modForm } = useForm({})

  return (
    <div>
        <h1>Formulario</h1>
        <div id='guardado'>
            <p><strong>Curso guardado:</strong></p>
            <p>Título: {formu.titulo}</p>
            <p>Año: {formu.anio}</p>
            <p>Descripción: {formu.descripcion}</p>
            <p>Autor: {formu.autor}</p>
            <p>Email: {formu.email}</p>
        </div>
        
        
        <form onSubmit={enviarForm}>
            <input type='text' onChange={modForm}
                name='titulo' placeholder='Título...'
            />
            <input type='number' onChange={modForm}
                name='anio' placeholder='Año publicación...'
            />
            <textarea name='descripcion' onChange={modForm}
                placeholder='Descripción...'
            />
            <input type='text' onChange={modForm}
                name='autor' placeholder='Autor...'
            />
            <input type='email' onChange={modForm}
                name='email' placeholder='Correo de contacto...'
            />

            <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}
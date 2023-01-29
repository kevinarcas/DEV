import React, {useState} from 'react'
import { GuardarStorage } from '../helpers/GuardarStorage';

export const Crear = ( {setLista} ) => {

    const tituloComponente = 'Añadir película';

    const [peli, setPeli] = useState({
      id: '',
      title: '',
      description: ''
    });

    const getFormData = (e) => {
      e.preventDefault(); /* Para no enviar el form y recargar la página. */

      /* Conseguir los datos del formulario */
      let peliNueva = {
        id: new Date().getTime(),
        title: e.target.title.value,
        description: e.target.description.value
      }

      /* Si el form tiene datos: */
      if(peliNueva.id && peliNueva.title && peliNueva.description){
        
        /* Actualizo el estado peli */
        setPeli(peliNueva);

        /* Actualizo el estado lista */
        setLista( (estado_previo) => {
          return [...estado_previo, peliNueva]
        });

        /* Guardo en localStorage la nueva peli */
        GuardarStorage('pelis',peliNueva);
      }
    }

    
  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <form onSubmit={getFormData}>
            <input    id='title'
                      name='title'
                      type="text"
                      placeholder='Título'
            />

            <textarea id='description'
                      name='description'
                      placeholder='Descripción'
            ></textarea>
            
            <button   id='save' name='save'>Guardar</button>
        </form>

        {/* Muestro los datos de la película en caso de que esté bien creada. */}
        {peli.id && peli.title && peli.description &&
          (
            <div id='peliCreada'>
              <p><strong>Película creada con éxito.</strong></p>
              <p>ID: {peli.id}</p>
              <p>Título: {peli.title}</p>
              <p>Descripción: {peli.description}</p>
            </div>
          )
        }
    </div>
  )
}
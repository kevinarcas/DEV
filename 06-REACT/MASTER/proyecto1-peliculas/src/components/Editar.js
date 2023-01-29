import React from 'react'

export const Editar = ({peli, setEditar, getLista, setLista}) => {

    const tituloComponente = 'Editar película';

    const editarPeli = (e, id) => {
        e.preventDefault();

        /* Consigo la lista de películas */
        const pelis = getLista();

        /* Conseguir los datos del formulario para actualizar la peli */
        let peliNueva = {
            id,
            title: e.target.title.value,
            description: e.target.description.value
        }
        
        /* Busco la peli a modificar */
        const indice = pelis.findIndex(peli => peli.id === id);

        /* Modifico la película en el listado de pelis. */
        pelis[indice] = peliNueva;

        /* Actualizo estado lista */
        setLista(pelis);

        /* Actualizo estado editar */
        setEditar(0);
        
        /* Guardo en localStorage */
        localStorage.setItem('pelis', JSON.stringify(pelis));
    }

  return (
    <div className='editForm'>
        <h3 className='title'>{tituloComponente}</h3>
        <form onSubmit={ (e) => editarPeli(e, peli.id) }>
            <input    id='title'
                      name='title'
                      type='text'
                      defaultValue={peli.title}
            />

            <textarea id='description'
                      name='description'
                      defaultValue={peli.description}
            ></textarea>
            
            <input type='submit' value='Actualizar' />
        </form>
    </div>
  )
}
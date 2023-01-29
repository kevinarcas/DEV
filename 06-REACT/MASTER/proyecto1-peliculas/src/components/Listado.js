/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { Editar } from './Editar';

/* Lo tengo que pasar con desestructuración, sino lista no me llega como array */
export const Listado = ( {lista, setLista} ) => {

    const [editar, setEditar] = useState(0);

    /* const [lista, setLista] = useState([]); */
    useEffect(() => {
        getLista();
    }, []);

    /* Devuelve los datos de localStorage */
    const getLista = () => {
        let elementos = JSON.parse(localStorage.getItem('pelis')); /* JSON.parse Convierte JSON a objeto */

        if(!Array.isArray(elementos)){
            setLista([]);
        }
        else{
            setLista(elementos);
        }

        return elementos;
    }


    /* Borra de la lista la película que le pasemos como parámetro */
    const borrarPeli = (id) => {

        /* Obtengo el listado de películas */
        let pelis = getLista();

        /* Busco la que quiero eliminar. Creo una copia del array sin ella */
        let pelis_resultado = pelis.filter( (peli) => peli.id !== parseInt(id) );

        /* La elimino del estado listado */
        setLista(pelis_resultado);

        /* Actualizo localStorage */
        localStorage.setItem('pelis', JSON.stringify(pelis_resultado));
    }


  return (
    <React.Fragment>
    {
        lista.length > 0 ?
            lista.map((peli) => {
                return(
                    <article key={peli.id} className="item">
                        <h3 className="title">{peli.title}</h3>
                        <p className="description">{peli.description}</p>
                        <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
                        <button className="delete" onClick={ () => borrarPeli(peli.id) }>Borrar</button>

                        {/* Aparece formulario de editar */}
                        {
                            editar === peli.id && 
                            <Editar peli={peli}
                                    setEditar={setEditar}
                                    getLista={getLista}
                                    setLista={setLista} />
                        }
                    </article>
                )
            })
        : <h2>No hay películas</h2>
    }
    </React.Fragment>
  )
}
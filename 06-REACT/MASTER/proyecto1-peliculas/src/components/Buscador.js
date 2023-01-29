/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

export const Buscador = ({lista, setLista}) => {

  const [busqueda, setBusqueda] = useState('');
  const [encontrado, setEncontrado] = useState(true);

  useEffect(() => {
    buscarPeli()
  }, [busqueda]);

  const buscarPeli = () => {
    /* Filtro para encontrar pelis */
    let resultado = lista.filter( (peli) => {
      return peli.title.toLowerCase().includes(busqueda.toLowerCase())
    })

    /* Si no encuentra o no ha escrito nada, muestra las del localStorage. */
    if(resultado <= 0 || busqueda.length <= 0){
      resultado = JSON.parse(localStorage.getItem('pelis'));
      setEncontrado(false);
    }
    else{
      setEncontrado(true);
    }
    
    setLista(resultado);
  }


  return (
    <div className="search">
        <h3 className="title">Buscador</h3>
        {
          !encontrado && busqueda.length>=1 &&
          <span className='noEncontrado'>No hay coincidencias</span>
        }
        <form>
            <input  id='buscar'
                    name= 'buscar'
                    autoComplete='off'
                    type='text'
                    placeholder='Título a buscar...' 
                    onChange={(e) => setBusqueda(e.target.value)}
                    />
            <button id='search'>Buscar</button>
        </form>
    </div>
  )
}
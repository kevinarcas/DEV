import React, {useState, useEffect} from 'react'
import { Aviso } from './Aviso';

export const Pruebas = () => {

    const [usuario, setUsuario] = useState('Kevin Arcas');
    const [fecha, setFecha] = useState('31-12-2022');
    const [contador, setContador] = useState(0-1);

    const modUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const modFecha = () => {
        setFecha(Date.now())
    }

    /* Se ejecuta al cargar o modificar el componente */
    /* useEffect( () => {
        console.log('Componente cargado o modificado.');
    }); */

    /* Solo se ejecuta al cargar el componente */
    useEffect( () => {
        console.log('Componente cargado.');
    }, []);

    /* Solo se ejecuta al modificar usuario */
    /* useEffect( () => {
        let valorNuevo = contador+1;
        setContador(valorNuevo);
        console.log(`Usuario modificado ${valorNuevo} veces.`);
    }, [usuario]); */


    /* Solo se ejecuta al modificar usuario o fecha */
    useEffect( () => {
        let valorNuevo = contador+1;
        setContador(valorNuevo);
        console.log(`Se han hecho ${valorNuevo} cambios.`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario, fecha]);

  return (
    <div>
        <h2>Pruebas</h2>
        <strong className='texto'>{usuario}</strong>
        <strong className={(contador>=10) ? 'texto verde' : 'texto'}>{fecha}</strong>
        
        <input 
            type='text' 
            onChange={modUsuario} 
            placeholder='Cambia el nombre'
        />
        <br />
        <button onClick={modFecha}>Cambia fecha</button>

        { usuario==='KEVIN' && <Aviso /> }
    </div>
  )
}
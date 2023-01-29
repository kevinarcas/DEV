import React, { useState, useEffect } from 'react'
import '../assets/css/Casilla.css';

export const Casilla = ({ jugadorUno, setJugadorUno, mov, setMov, fila, col, contenidoTablero, setContenidoTablero, compruebaGanador }) => {

    const [simbolo, setSimbolo] = useState('');

    useEffect(() => {
        if(simbolo !== ''){
            let nuevoTablero = contenidoTablero
            nuevoTablero[fila][col] = {simbolo}
            setContenidoTablero(nuevoTablero)
            compruebaGanador(simbolo, fila, col)
        }
    }, [simbolo]);

    const clickCasilla = () => {
        if(simbolo === ''){
            jugadorUno ? setSimbolo('X') : setSimbolo('O')
            setJugadorUno(!jugadorUno)
            setMov(mov+1)
        }
    }

  return (
    <div className="casilla" onClick={clickCasilla}>{simbolo}</div>
  )
}
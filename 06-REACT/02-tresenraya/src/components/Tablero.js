import React from 'react'
import '../assets/css/Tablero.css';
import { Casilla } from './Casilla';

export const Tablero = ({totalCasillas ,jugadorUno, setJugadorUno, mov, setMov, contenidoTablero, setContenidoTablero, compruebaGanador}) => {
    
    let filas = Math.sqrt(totalCasillas)
    let columnas = filas
    var casillas = []
    for(let i=0; i<filas; i++){
        for(let j=0; j<columnas; j++){
            casillas.push(
                <Casilla key={`${i}-${j}`} fila={i} col={j}
                    jugadorUno={jugadorUno} setJugadorUno={setJugadorUno}
                    mov={mov} setMov={setMov}
                    contenidoTablero={contenidoTablero} setContenidoTablero={setContenidoTablero}
                    compruebaGanador={compruebaGanador}
                />
            )
        }
    }

    var estilos = {
        tablero: { width: `${filas*82}px` }
    }

  return (
    <React.Fragment> 
        <div id='tablero' style={estilos.tablero}>
            {casillas}
        </div>
    </React.Fragment>
  )
}
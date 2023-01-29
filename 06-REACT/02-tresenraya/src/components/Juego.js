import React, { useState, useEffect } from 'react'
import { Tablero } from './Tablero';

export const Juego = ({casillas}) => {

    const minGanador = Math.sqrt(casillas)
    const [ganador, setGanador] = useState(false)
    const [mov, setMov] = useState(0)
    const [jugadorUno, setJugadorUno] = useState(true)
    const [contenidoTablero, setContenidoTablero] = useState()

    /* Defino el contenido del tablero inicial */
    useEffect(() => {
        let tablero = [minGanador]
        for(let i=0; i<minGanador; i++){
            tablero[i] = new Array(minGanador)

            for(let j=0; j<minGanador; j++){
                tablero[i][j] = ''
            }
        }

        setContenidoTablero(tablero)
    }, [Juego]);


    const compruebaGanador = (simbolo, fila, col) => {
        let filas = minGanador

        let winner = compruebaFila(simbolo, fila)
        if(!winner){
            winner = compruebaColumna(simbolo, col)

            if(!winner && ((fila === col) || (filas ===fila+col+1)) ){
                (fila === col) ? 
                winner = compruebaDiagonalUno(simbolo)
                : winner = compruebaDiagonalDos(simbolo)
            }
        }
        
        setGanador(winner)
    }

    const compruebaFila = (simbolo, fila) => {
return false
    }

    const compruebaColumna = (simbolo, col) => {
return false
    }

    const compruebaDiagonalUno = (simbolo) => {
        let seguidos = 0
        for(let i=0; i<minGanador; i++){
            if(contenidoTablero[i][i].simbolo === simbolo){
                seguidos++
            }
            else{
                break
            }
        }

        return (seguidos===minGanador)
    }

    const compruebaDiagonalDos = (simbolo) => {
        let seguidos = 0
        for(let i=0; i<minGanador; i++){
            if(contenidoTablero[minGanador-1-i][i].simbolo === simbolo){
                seguidos++
            }
            else{
                break
            }
        }

        return (seguidos===minGanador)
    }


  return (
    <React.Fragment>
        <h1>BIENVENIDO</h1>
        <h2>Tres en raya</h2>
        {   
            (!ganador && mov<casillas) ?
            (   
                <>
                    <h2>Turno del jugador {jugadorUno ? '1':'2'}</h2>
                    <Tablero totalCasillas={casillas}
                        jugadorUno={jugadorUno} setJugadorUno={setJugadorUno}
                        mov={mov} setMov={setMov}
                        contenidoTablero={contenidoTablero} setContenidoTablero={setContenidoTablero}
                        compruebaGanador={compruebaGanador}
                    />
                </>
            )
            : 
            (  
                <>
                    {
                        ganador ?
                        <h1>Ganador: Jugador {!jugadorUno?'1':'2'}</h1>
                        : <h1>Final</h1>
                    }
                    <button className='boton'>Nueva partida</button>
                </>
            )
              
        }
    </React.Fragment>
  )
}
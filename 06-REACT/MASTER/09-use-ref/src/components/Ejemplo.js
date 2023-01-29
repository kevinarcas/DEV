/* eslint-disable no-const-assign */
import React, { useRef, useState, useEffect } from 'react'

export const Ejemplo = () => {

    const [saludos, setSaludos] = useState(0)
    const saludosTiempoReal = useRef(saludos)

    useEffect(() => {
        saludosTiempoReal.current = saludos

        setTimeout(() => {
            console.log(`Saludos recibidos: ${saludos}`)
            console.log(`TIEMPO REAL: ${saludosTiempoReal.current}`)
        }, 3000)
    }, [saludos]);

    const enviarSaludo = (e) => {
        setSaludos(saludos+1);
    }

  return (
    <div>
        <h1>Ejemplo con useRef</h1>
        <h2>Saludos enviados: {saludos}</h2>
        <button onClick={enviarSaludo}>Enviar saludo</button>
    </div>
  )
}
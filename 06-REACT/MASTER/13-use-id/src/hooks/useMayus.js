import { useState } from 'react'

export const useMayus = (texto) => {

    const [mitexto, setMitexto] = useState(texto);
    
    const mayusculas = () => {
        setMitexto(mitexto.toUpperCase())
    }
    
    const minusculas = () => {
        setMitexto(mitexto.toLowerCase())
    }
    
    const concatenar = (anadido) => {
        setMitexto(mitexto+' '+anadido)
    }

    return { estado:mitexto, mayusculas, minusculas, concatenar }
}
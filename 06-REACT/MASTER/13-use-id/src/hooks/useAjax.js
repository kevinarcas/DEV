import { useState, useEffect } from 'react'

export const useAjax = (url) => {

    const [datos, setDatos] = useState();

    // Al arrancar la app
    useEffect(() => {
        getDatos(url)
    }, [url]);
    

    const getDatos = async(url) => {
        const peticion =  await fetch(url)
        const {data} = await peticion.json()

        setDatos(data)
    }

    return { datos }
}
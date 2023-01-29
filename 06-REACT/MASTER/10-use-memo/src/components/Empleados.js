/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

export const Empleados = React.memo( ({ page, mensaje }) => {

    const [empleados, setEmpleados] = useState([]);
    
    useEffect(() => {
        getEmpleados()
        mensaje();
    }, [page]);
    
    useEffect(() => {
        console.log('Empleados renderizado')
    }, [empleados]);
    
    const getEmpleados = async() => {
        const url = `https://reqres.in/api/users?page=${page}`
        const peticion = await fetch(url)
        const {data} = await peticion.json()
        
        setEmpleados(data)
    }


  return (
    <div>
        {
            empleados.length > 0 &&
            (   <>
                    <p>Mostrando la página {page}</p>
                    <ul className='empleados'>
                        {
                            empleados.map( (empleado) => (
                                <li key={empleado.id}>{empleado.first_name} {empleado.last_name}</li>
                            ))
                        }
                    </ul>
                </>
            )
        }
        
    </div>
  )
})
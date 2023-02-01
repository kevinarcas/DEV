import React, { useState } from 'react'
import { useAjax } from '../hooks/useAjax'

export const Usuario = () => {

    const [url, setUrl] = useState('https://reqres.in/api/users/1')

    const { datos } = useAjax(url)

    const getId = (e) => {
        let id = e.target.value
        setUrl(`https://reqres.in/api/users/${id}`)
    }

  return (
    <div>
        <h1>Usuario</h1>
        <input type='number' onChange={getId}
            name='id' placeholder='Numero'
            min='1' defaultValue='1'
        />

        {   
            datos &&
            <>
                <h2>Datos del usuario</h2>
                <p>
                    {datos.first_name}
                    &nbsp;
                    {datos.last_name}
                </p>
                <p>{datos.email}</p>
            </>
        }        
    </div>
  )
}
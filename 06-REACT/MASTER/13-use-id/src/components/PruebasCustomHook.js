import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustomHook = () => {

    const { estado, mayusculas, minusculas, concatenar } = useMayus('Kevin Arcas')

  return (
    <div>
        {estado}
        <br />
        <button onClick={mayusculas}>MAYUS</button>
        &nbsp;
        <button onClick={minusculas}>minus</button>
        &nbsp;
        <button onClick={() => concatenar('Monteiro')}>concatenar</button>
    </div>
  )
}
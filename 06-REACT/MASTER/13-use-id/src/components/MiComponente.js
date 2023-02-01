import React, { useId } from 'react'

export const MiComponente = () => {

    const id1 = useId();
    const id2 = useId();
    const id3 = useId();

    console.log(id1)
    console.log(id2)
    console.log(id3)


  return (
    <div>
        <h1>useID</h1>
        <input id={id1} name='nombre' placeholder='Nombre' />
    </div>
  )
}
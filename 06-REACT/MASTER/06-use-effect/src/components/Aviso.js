import React, {useEffect} from 'react'

export const Aviso = () => {

    /* Cuando se monta el componente */
    useEffect( () => {
        console.log('El componente Aviso está montado.');

        /* Cuando se DESMONTA el componente */
        return( () => {
            console.log('Aviso DESMONTADO.')
        });
    }, []);

  return (
    <div>
        <p>Hola Kevin, ¿qué tal estás?</p>
        <button 
            onClick={() => {alert('Bienvenido!!')}}
        >Mostrar alerta</button>
    </div>
  )
}
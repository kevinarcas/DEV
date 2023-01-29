import React from 'react'
import PropTypes from 'prop-types'

/* export const ComponenteD = (props) => { */
export const ComponenteD = ({nombre, apellido, ficha}) => {

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            {/* <li>{props.nombre}</li>
            <li>{props.apellido}</li>
            <li>{props.ficha.altura}</li>
            <li>{props.ficha.peso}</li> */}
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.peso}</li>
        </ul>
    </div>
  )
}

/* Con propTypes, valido los tipos de los datos de los componentes. */
ComponenteD.propTypes = {
    nombre: PropTypes.string.isRequired, /* Nombre debe ser string y debe existir esa variable */
    apellido: PropTypes.string,
    ficha: PropTypes.object
}

/* Con defaultProps, defino el valor de las propiedades por defecto, por si no tuviesen valor. */
ComponenteD.defaultProps = {
    nombre: 'Pepito',
    apellido: 'Pérez'
}
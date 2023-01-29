import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Ejercicio = ( {actual} ) => {

    const [ year, setYear ] = useState(actual);

    const aumentaYear = () => {
        setYear(parseInt(year)+1);
    }

    const reduceYear = () => {
        setYear(parseInt(year)-1);
    }

    const cambiaYear = (e) => {
        let valorInput = parseInt(e.target.value);

        if(Number.isInteger( valorInput )){
            setYear(valorInput);
        }
        else{
            setYear(actual);
        }
    }

  return (
    <div>
        <h3>Ejercicio</h3>
        <p>Estamos en el año: {year} </p>
        <button onClick={aumentaYear}>+</button>
        <button onClick={reduceYear}>-</button>
        <br />
        <label>Modificar año: </label>
        <input type='text' onChange={cambiaYear} />
    </div>
  )
}

Ejercicio.propTypes = {
    actual: PropTypes.number.isRequired
}
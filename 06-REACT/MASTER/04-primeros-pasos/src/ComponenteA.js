import React from 'react';

const ComponenteA = () => {

    let nombre = 'Kevin';
    let apellido = 'Arcas';
    let edad = 29;
    let usuario = {
        nombre: 'Alejandra',
        apellido: 'Ramos',
        edad: 27
    };

    return (
        <div className="componenteA">
            <h2>Componente A</h2>
            <h3>Datos del usuario</h3>
            <p>Nombre: {nombre} Apellido:{apellido} Edad:{edad}</p>
            <br />
            <h3>Datos del usuario objeto</h3>
            <p>{usuario.nombre} {usuario.apellido} {usuario.edad}</p>
        </div>
    );
}

export default ComponenteA;
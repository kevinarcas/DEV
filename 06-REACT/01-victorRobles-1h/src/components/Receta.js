import React, {Component} from 'react';
import '../assets/css/Receta.css'

class Receta extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        };

        return(
            <div id="receta">
                <h1 id="nombre">{receta.nombre}</h1>
                <h2 id="calorias">{receta.calorias + 'calorías'}</h2>
                <ol id="ingredientes">
                    {
                        receta.ingredientes.map( (ingrediente,i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default Receta;
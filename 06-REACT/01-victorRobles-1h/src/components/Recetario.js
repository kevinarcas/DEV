import React, {Component} from 'react';
import '../assets/css/Recetario.css';
import comidas from '../assets/data/comidas.json';

class Recetario extends Component{
    render(){
        return(
            <div id="recetario">
                <h1>Recetario</h1>
                {
                    comidas.map((plato,i) => {
                        return (
                            <div key={i} className="plato">
                                <h3>{plato.nombre}</h3>
                                {
                                    plato.ingredientes.map((ingrediente,j)=>{
                                        return(
                                            <p key={j}>
                                                {ingrediente}
                                            </p>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Recetario;
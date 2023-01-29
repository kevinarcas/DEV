import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        /* return(
            <h1>Hola, soy el componente MiComponente</h1>
        ); */

        /*  React no puede devolver más de 1 elemento.
                Lo puedo meter todo en un div o similar. 
                También lo puedo meter en un <React.Fragment>
        */
        return(
            <React.Fragment>
                <h1>Hola, soy el componente MiComponente</h1>
                <h2>Estoy probando el componente</h2>
            </React.Fragment>
        );
    }
}

export default MiComponente;
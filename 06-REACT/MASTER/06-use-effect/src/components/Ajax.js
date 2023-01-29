/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

export const Ajax = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [ready, setReady] = useState(false);
    const [errores, setErrores] = useState('');

    /* Usuarios por defecto */
    /* const getUsuariosDef = () => {
        setUsuarios([
            {   "id":1,
                "email":"kevin.arcas@reqres.in",
                "first_name":"Kevin",
                "last_name":"Arcas",
                "avatar":"https://reqres.in/img/faces/1-image.jpg"
            },
            {   "id":2,
                "email":"josete.moreno@reqres.in",
                "first_name":"José Luis",
                "last_name":"Moreno",
                "avatar":"https://reqres.in/img/faces/2-image.jpg"
            },
            {   "id":3,
                "email":"ahmed.fenane@reqres.in",
                "first_name":"Ahmed",
                "last_name":"El Fenane",
                "avatar":"https://reqres.in/img/faces/3-image.jpg"
            }
        ]);
    } */

    /* Usuarios por AJAX promesa */
    /* const getUsuariosAjaxPromesa = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data)
                    setReady(true);
                },
                error => {
                    console.log(error);
                    setErrores(error.message);
                }
            )
    } */

    /* Usuarios por AJAX Async/Await */
    const getUsuariosAjaxAW = async() => {
        setTimeout( async() => {
            try{
                const peticion = await fetch('https://reqres.in/api/users?page=1');
                const {data} = await peticion.json();
        
                setUsuarios(data);
                setReady(true);
                console.log(data);
            }
            catch(error){
                console.log(error);
                setErrores(error.message);
            }
        }, 3000);  
    }

    useEffect( () => {
        /* getUsuariosDef(); */
        /* getUsuariosAjaxPromesa(); */
        getUsuariosAjaxAW();
    }, []);

    /* Creo 2 botones que llaman aquí y sacan unos datos u otros. */
    /* const botones = (pagina) => {
        fetch(`https://reqres.in/api/users?page=${pagina}`)
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                    setReady(true);
                },
                error => {
                    console.log(error)
                }
            )
    } */


    /* Si hay errores */
    if(errores !== ''){
        return(
            <p>ERROR: {errores}</p>
        );
    }
    else{ /* Si no hay errores */
        /* Cuando está cargando */
        if(!ready){    
            return(
                <div className='cargando'>
                    Cargando datos...
                </div>
            );
        }

        /* Cuando está listo */
        return (
            <div>
                <h2>AJAX</h2>
                {/* <button onClick={() => botones(1)}>1</button>
                <button onClick={() => botones(2)}>2</button> */}
                <strong>Listado de usuarios por AJAX</strong>
                <ul>
                    {
                        usuarios.map( (usuario) => {
                            return (
                                <li key={usuario.id}>
                                    <img src={usuario.avatar} alt={usuario.id} />
                                    {usuario.first_name} {usuario.last_name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }

}
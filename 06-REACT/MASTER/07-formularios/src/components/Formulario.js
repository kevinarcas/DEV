import React, {useState} from 'react'

export const Formulario = () => {

    const [usuario, setUsuario] = useState({});

    const enviaForm = (e) => {
        e.preventDefault(); /* Con esto no se manda el formulario. */
        
        let target = e.target;
        let usuario = {
            nombre: target.nombre.value,
            apellido: target.apellido.value,
            genero: target.genero.value,
            bio: target.bio.value,
            enviar: target.enviar.value
        }
        
        setUsuario(usuario);
    }

    const cambiarDatos = (e) => {
        let campo = e.target.name;
        let valor = e.target.value;

        setUsuario( (estado_previo) => ({
            ...estado_previo,
            [campo]: valor
        }));
        /* Lo de arriba es lo mismo, lo de dentro de los paréntesis lo va a devolver (return) */
        /* setUsuario( (estado_previo) => {
            return {
                ...estado_previo,
                [campo]: valor
            }
        }); */
    }

  return (
    <div>
        <h1>Formulario con React</h1>

        <form onSubmit={enviaForm}>
            <input onChange={cambiarDatos} name='nombre' type='text' placeholder='nombre' />
            <input onChange={cambiarDatos} name='apellido' type='text' placeholder='apellido' />
            <select onChange={cambiarDatos} name='genero' >
                <option value='hombre'>Hombre</option>
                <option value='mujer'>Mujer</option>
            </select>
            <textarea onChange={cambiarDatos} name='bio' placeholder='Biografía'></textarea>

            <input name='enviar' type='submit' value='Enviar' />
        </form>

        {/* Muestro datos si le ha dado a enviar */}
        {
            usuario.enviar &&
            
            (
                <div className='info texto'>
                    {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografía es:<p>{usuario.bio}</p>
                </div>
            )
        }
    </div>
  )
}
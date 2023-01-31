import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const { setUsuario } = useContext(PruebaContext);

  const registrar = (e) => {
    e.preventDefault();
    
    let registro = {
      nombre: e.target.nombre.value,
      web: e.target.web.value,
      username: e.target.username.value
    }

    setUsuario(registro)
  }
  return (
    <div>
      <h1>Login</h1>
      <p>Página de login.</p>

      <form onSubmit={registrar}>
        <input type='text' name='username' placeholder='Nombre de usuario...' />
        <input type='text' name='nombre' placeholder='Nombre...' />
        <input type='text' name='web' placeholder='Web...' />
        <input type='submit' value='Registrar' />
      </form>
    </div>      
  )
}
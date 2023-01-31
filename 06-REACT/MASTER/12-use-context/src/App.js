import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { Rutas } from './router/Rutas';

function App() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    cargarUsuario()
  }, []);

  useEffect(() => {
    guardarUsuario()
  }, [usuario]);

  const cargarUsuario = () => {
      let user = JSON.parse(localStorage.getItem('lista usuarios'))
      setUsuario(user)
  }

  const guardarUsuario = () => {
      localStorage.setItem('lista usuarios', JSON.stringify(usuario))
  }


  return (
    <PruebaContext.Provider value={ {usuario, setUsuario} }>
      <Rutas />
    </PruebaContext.Provider>
  );
}

export default App;
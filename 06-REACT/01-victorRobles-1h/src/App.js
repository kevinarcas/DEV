import './assets/css/App.css';
import logo from './assets/images/logo.svg';

/* Importar componentes */
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';
import Recetario from './components/Recetario';

function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  
  return presentacion;
}

function App() {
  var nombre = "Kevin";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {HolaMundo(nombre,29)}
      </header>
      <div className='componentes'>
        <MiComponente />
        <Receta />
        <Recetario />
      </div>
    </div>
  );
}

export default App;

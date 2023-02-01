import './App.css';
import { Formulario } from './components/Formulario';
import { MiComponente } from './components/MiComponente';
import { PruebasCustomHook } from './components/PruebasCustomHook';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiComponente />
        <hr />
        <h2>Probando hooks personalizados</h2>
        <PruebasCustomHook />
        <hr />
        <Formulario />
        <hr />
        <Usuario />
      </header>
    </div>
  );
}

export default App;

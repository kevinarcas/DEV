import logo from './logo.svg';
import './App.css';
import { EstadoA } from './components/EstadoA';
import { Ejercicio } from './components/Ejercicio';

function App() {
  
  let year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HOOK useState</h1>
        <hr />

        <EstadoA />
        <hr />

        <Ejercicio actual={year} />
      </header>
    </div>
  );
}

export default App;

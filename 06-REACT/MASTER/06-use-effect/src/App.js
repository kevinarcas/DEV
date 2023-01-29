import logo from './logo.svg';
import './App.css';
import { Pruebas } from './components/Pruebas';
import { Ajax } from './components/Ajax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HOOK useEffect</h1>
        <hr />

        <Pruebas />
        <hr />
        <Ajax />
      </header>
    </div>
  );
}

export default App;

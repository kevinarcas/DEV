import logo from './logo.svg';
import './App.css';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';
import {ComponenteC} from './ComponenteC';
import {ComponenteD} from './ComponenteD';
import {Eventos} from './Eventos';

function App() {

  const ficha_medica = {
    altura: 187,
    peso: 85,
    grupo: 'B+',
    edad: 29
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <ComponenteA />
      <hr />
      <ComponenteB />
      <hr />
      <ComponenteC />
      <hr />
      <ComponenteD 
        nombre='Kevin'
        apellido='Arcas'
        ficha={ficha_medica}
      />
      <hr />
      <Eventos />
    </div>
  );
}

export default App;

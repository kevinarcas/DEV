import './App.css';
import { Juego } from './components/Juego';

function App() {

  let numeroCasillas = 3

  return (
    <div className="App">
      <Juego casillas={numeroCasillas*numeroCasillas} />
    </div>
  );
}

export default App;
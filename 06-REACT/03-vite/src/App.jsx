import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HelloWorld } from './components/HelloWorld'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="App">
      <HelloWorld />
      <button onClick={ () => setContador( (contador) => contador+1) }>
        Contador: {contador}
      </button>
    </div>
  )
}

export default App
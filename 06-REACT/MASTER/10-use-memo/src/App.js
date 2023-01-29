import { Gestion } from "./components/Gestion";
import { Tareas } from "./components/Tareas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gestion />
        <br /><hr /><br />
        <Tareas />
      </header>
    </div>
  );
}

export default App;
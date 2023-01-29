import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { useState } from "react";

function App() {

    const [lista, setLista] = useState([]);

    
  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis películas</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section className="content">
            <Listado lista={lista} setLista={setLista} />
        </section>

        <aside className="aside">
            <Buscador lista={lista} setLista={setLista} />
            <Crear setLista={setLista} />
        </aside>

        <footer className="footer">
            &copy; Kevin Arcas Monteiro - 
            <a href="http://www.kevinarcas.es">kevinarcas.es</a>
        </footer>
    </div>
  );
}

export default App;
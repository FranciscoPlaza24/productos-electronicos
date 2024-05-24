import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import './index.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="Header"></header>

      <main>
        <div className="menu-bar">
          <button className="menu-item">Home</button>

          <div className="menu-item dropdown">
            ReDragon
            
          </div>

          <div className="menu-item dropdown">
            Logitech
           
          </div>

          <div className="menu-item dropdown">
            HyperX
            
          </div>

          <button className="menu-item">Servicio Técnico</button>
          <button className="menu-item">Info Técnica</button>
          <button className="menu-item">Promos Vigentes</button>
          <button className="menu-item">Contacto</button>
        </div>
        <section className="seccion1">
          {" "}
          <div className="carousel">
            <div className="carousel-track">
              <img src="src/assets/imagenes/mainseccion1.jpg" alt="Imagen 1" />
              <img src="src/assets/imagenes/mainseccion 1.jpg" alt="Imagen 2" />
              <img src="src/assets/imagenes/mainseccion3.jpg" alt="Imagen 3" />
            </div>
          </div>
        </section>
        <section id="footer"></section>
      </main>
    </div>

    
  );
}

export default App;

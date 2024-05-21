import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  const [count, setCount] = useState(0);


  return (
  
  <div className="App">
      <header className="Header"> 
      </header>
      <main>
        <section className='seccion1'>  <div className="carousel">
            <div className="carousel-track">
              <img src="src/assets/imagenes/mainseccion1.jpg" alt="Imagen 1" />
              <img src="src/assets/imagenes/mainseccion 1.jpg" alt="Imagen 2" />
              <img src="src/assets/imagenes/mainseccion3.jpg" alt="Imagen 3" />
            </div>
          </div>
          </section>
        
      </main>
       
    </div>
     
  )
}

export default App

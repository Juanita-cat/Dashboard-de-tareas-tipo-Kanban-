import { useState } from 'react'
import './App.css'
import Kanban from './assets/paginas/kanban'
import Frameworks from './assets/paginas/frameworks'
import Metodologias from './assets/paginas/metodologias'
import Contacto from './assets/paginas/contacto'
function App () {
  const [paginaActual, setPaginaActual] = useState<'inicio' | 'kanban' | 'frameworks' | 'metodologias' | 'contacto'>('inicio')

  return (
    <>
      <div>
        <header>
          <h1>🐱 Dashboard de tareas (tipo Kanban).</h1>
          <nav>
            <button onClick={() => setPaginaActual('inicio')}>Inicio</button>
            <button onClick={() => setPaginaActual('kanban')}>kanban</button>
            <button onClick={() => setPaginaActual('frameworks')}>Frameworks</button>
            <button onClick={() => setPaginaActual('metodologias')}>Metodologías</button>
            <button onClick={() => setPaginaActual('contacto')}>Contacto</button>
          </nav>
        </header>

        {/* Renderizado condicional de secciones */}
        {paginaActual === 'inicio' && (
          <section id="inicio">
            <div className="card">
              <h2>🐾 Inicio.</h2>
              <p className='card2'>
                Hola, esta es una página web educativa en la que exploraremos 
                tres apartados principales: Kanban, frameworks y metodologías. 
                El objetivo de esta página es brindar información clara y sencilla 
                sobre conceptos fundamentales de la gestión de proyectos y el 
                desarrollo de software, ayudando a comprender cómo se organizan 
                y planifican los procesos de trabajo en el ámbito tecnológico.
              </p>
            </div>
          </section>
        )}

        {paginaActual === 'kanban' && <Kanban />}
        {paginaActual === 'frameworks' && <Frameworks />}
        {paginaActual === 'metodologias' && <Metodologias />}
        {paginaActual === 'contacto' && <Contacto />}
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App () {
  const [] = useState(0)
  return (
  <>
    <div>
  <header>
    <h1>🐱 Dashboard de tareas (tipo Kanban).</h1>
    <nav>
      <a href="#inicio">Inicio.</a>
      <a href="#kanban">Kanban.</a>
      <a href="#frameworks">Frameworks.</a>
      <a href="#metodologias">Metodologías.</a>
      <a href="#contacto">Contacto.</a>
    </nav>
  </header>

  {/* INICIO */}
  <section id="inicio">
    <div className="card">
      <h2>🐾 Inicio.</h2>
      <p>
        Hola, esta es una página web educativa en la que veremos tres
        apartados: Kanban, frameworks y metodologías.
      </p>
    </div>
  </section>

  {/* KANBAN */}
  <section id="kanban">
    <h2>🐈 Kanban.</h2>
    <div className="card">
      <p>
        Kanban es una metodología ágil muy usada en el desarrollo de software
        y en la organización personal por su flexibilidad.
      </p>

      <a className='ee' href="https://youtube.com/shorts/4jDfB2XoN-Y?si=DvrAyMhR-NfBhO_P" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/4jDfB2XoN-Y/0.jpg" alt="Introducción a Kanban" />
      </a>

      <p>
        <strong>¿Qué es Kanban y para qué sirve?</strong>
        <br />
        Método visual que usa tarjetas y columnas para gestionar el trabajo y
        mejorar la eficiencia.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592430725199203592" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p>
        <strong>Origen de Kanban</strong>
        <br />
        Creado en Toyota por Taiichi Ohno en los años 40 y adaptado al software
        por David J. Anderson.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592433281673497863" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p><strong>Principios fundamentales</strong></p>
      <ul>
        <li>Visualizar el trabajo</li>
        <li>Limitar el WIP</li>
        <li>Gestionar el flujo</li>
        <li>Mejora continua</li>
      </ul>

      <a href="https://youtube.com/shorts/9IOeBstzBNM" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/9IOeBstzBNM/0.jpg" alt="Principios de Kanban" />
      </a>

      <p>
        <strong>Kanban en entornos ágiles</strong>
        <br />
        Se integra fácilmente con Agile y mejora la entrega continua de
        valor.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592446491650723090" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p>
        <strong>Kanban para desarrollo de software</strong>
        <br />
        Ordena backlog, controla flujo (To Do–Doing–Done), muestra bloqueos y
        evita sobrecarga. Usa métricas como lead time, cycle time y
        throughput.
      </p>

      <a href="https://youtube.com/shorts/EtyHMCb5NVM" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/EtyHMCb5NVM/0.jpg" alt="Kanban en desarrollo de software" />
      </a>

      <p>
        <strong>Kanban Personal</strong>
        <br />
        Permite organizar tareas diarias de forma visual y efectiva.
      </p>

      <a href="https://youtube.com/shorts/363vvOZmK8s" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/363vvOZmK8s/0.jpg" alt="Kanban personal" />
      </a>
    </div>
  </section>

  {/* FRAMEWORKS */}
  <section id="frameworks">
    <h2>😸 Frameworks.</h2>
    <div className="card">
      <p>Se explican tecnologías y tipos de datos usados en programación.</p>

      <a href="https://youtube.com/shorts/XlDluD0bQsE" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/XlDluD0bQsE/0.jpg" alt="Frameworks" />
      </a>

      <h3>Tipos de datos</h3>
      <p>Enteros, cadenas, booleanos, arreglos y objetos.</p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592435568290663687" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>HTML</h3>
      <p>Define la estructura de una página web.</p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592448234052783368" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>CSS</h3>
      <p>Da estilo y diseño visual.</p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592442501315726599" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>Java</h3>
      <p>Lenguaje orientado a objetos usado en aplicaciones web.</p>
      <a href="https://youtube.com/shorts/j2gDlwNXvq4" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/j2gDlwNXvq4/0.jpg" alt="Java" />
      </a>
    </div>
  </section>

  {/* METODOLOGÍAS */}
  <section id="metodologias">
    <h2>🐈‍⬛ Metodologías</h2>
    <div className="card">
      <p>
        Aquí aprenderás sobre metodologías ágiles, tradicionales y Scrum.
      </p>

      <a href="https://youtube.com/shorts/OJavAo2sH60" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/OJavAo2sH60/0.jpg" alt="Metodologías" />
      </a>

      <h3>Metodologías Ágiles</h3>
      <p>Iteraciones cortas y adaptación al cambio.</p>
      <a href="https://youtube.com/shorts/fKCWSnMw0CI" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/fKCWSnMw0CI/0.jpg" alt="Metodologías ágiles" />
      </a>

      <h3>¿Qué son las metodologías?</h3>
      <p>Pasos y reglas para organizar un proyecto.</p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592448578497318162" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>Metodologías Tradicionales</h3>
      <p>Cascada, Modelo V y RUP.</p>
      <a href="https://youtube.com/shorts/WoIxz11eVOw" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/WoIxz11eVOw/0.jpg" alt="Metodologías tradicionales" />
      </a>

      <h3>Scrum</h3>
      <p>Trabajo por Sprints, roles y reuniones.</p>
      <a href="https://youtube.com/shorts/_Nv-b9K26Ag" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/_Nv-b9K26Ag/0.jpg" alt="Scrum" />
      </a>
    </div>
  </section>

  {/* CONTACTO */}
  <section id="contacto">
    <h2>😽 Contacto.</h2>
    <div className="card">
      <p><strong>Teléfono:</strong> 55 2950 1845</p>
      <p>
        <strong>TikTok:</strong>{" "}
        <a 
          href="https://www.tiktok.com/@xdxdxdxd_dxdxdxdx_xd" 
          target="_blank" 
          rel="noreferrer"
        >
          Click aquí
        </a>
      </p>
      <p>
        <strong>Facebook:</strong>{" "}
        <a 
          href="https://www.facebook.com/share/1ETwRnrmyp/" 
          target="_blank" 
          rel="noreferrer"
        >
          Click aquí
        </a>
      </p>
      <p>
        <strong>Instagram:</strong>{" "}
        <a 
          href="https://www.instagram.com/juanita_cat28" 
          target="_blank" 
          rel="noreferrer"
        >
          Click aquí
        </a>
      </p>
    </div>
  </section>
</div>
</>
)
}

export default  App
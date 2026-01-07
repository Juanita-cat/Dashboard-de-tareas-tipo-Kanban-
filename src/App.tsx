import { useState } from 'react'
import './App.css'

function App() {
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

          <iframe
            src="https://youtube.com/shorts/4jDfB2XoN-Y?si=uWUpB4M5TiCGhujo"
            title="Introducción a Kanban"
            loading="lazy"
            allowFullScreen
          />





          <p>
            <strong>¿Qué es Kanban y para qué sirve?</strong>
            <br />
            Método visual que usa tarjetas y columnas para gestionar el trabajo y
            mejorar la eficiencia.
          </p>

          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592430725199203592?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="Qué es Kanban"
            loading="lazy"
            allowFullScreen
          />




          <p>
            <strong>Origen de Kanban</strong>
            <br />
            Creado en Toyota por Taiichi Ohno en los años 40 y adaptado al software
            por David J. Anderson.
          </p>

          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592433281673497863?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="Origen de Kanban"
            loading="lazy"
            allowFullScreen
          />




          <p><strong>Principios fundamentales</strong></p>
          <ul>
            <li>Visualizar el trabajo</li>
            <li>Limitar el WIP</li>
            <li>Gestionar el flujo</li>
            <li>Mejora continua</li>
          </ul>

          <iframe
            src="https://youtube.com/shorts/9IOeBstzBNM?si=karSQe4_zgFeWW70"
            title="Principios de Kanban"
            loading="lazy"
            allowFullScreen
          />




          <p>
            <strong>Kanban en entornos ágiles</strong>
            <br />
            Se integra fácilmente con Agile y mejora la entrega continua de
            valor.
          </p>

          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592446491650723090?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="Kanban en Agile"
            loading="lazy"
            allowFullScreen
          />




          <p>
            <strong>Kanban para desarrollo de software</strong> 
            <br /> 
            Ordena backlog, controla flujo (To Do–Doing–Done), muestra bloqueos y 
            evita sobrecarga. Usa métricas como lead time, cycle time y 
            throughput. 
          </p>

          <iframe
            src="https://youtube.com/shorts/EtyHMCb5NVM?si=IY5mWGDPwdt6sUb8"
            title="Kanban en desarrollo de software"
            loading="lazy"
            allowFullScreen
          />





          <p>
            <strong>Kanban Personal</strong>
            <br />
            Permite organizar tareas diarias de forma visual y efectiva.
          </p>
          <iframe
            src="https://youtube.com/shorts/363vvOZmK8s?si=Nn2_KvLYjq2hQ1pG"
            title="Kanban personal"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>








      {/* FRAMEWORKS */}
      <section id="frameworks">
        <h2>😸 Frameworks.</h2>
        <div className="card">
          <p>Se explican tecnologías y tipos de datos usados en programación.</p>
          <iframe
            src="https://youtube.com/shorts/XlDluD0bQsE?si=MngP5ybq94gT12JI"
            title="Frameworks"
            loading="lazy"
            allowFullScreen
          />




          <h3>Tipos de datos</h3>
          <p>Enteros, cadenas, booleanos, arreglos y objetos.</p>
          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592435568290663687?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="Tipos de datos"
            loading="lazy"
            allowFullScreen
          />




          <h3>HTML</h3>
          <p>Define la estructura de una página web.</p>
          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592448234052783368?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="HTML"
            loading="lazy"
            allowFullScreen
          />




          <h3>CSS</h3>
          <p>Da estilo y diseño visual.</p>
          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592442501315726599?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="css"
            loading="lazy"
            allowFullScreen
          />



          <h3>Java</h3>
          <p>Lenguaje orientado a objetos usado en aplicaciones web.</p>
          <iframe
            src="https://youtube.com/shorts/j2gDlwNXvq4?si=IZfEdEZFoJTPNy5H"
            title="java"
            loading="lazy"
            allowFullScreen
          />        
        
        
        
        </div>
      </section>








      {/* METODOLOGÍAS */}
      <section id="metodologias">
        <h2>🐈‍⬛ Metodologías</h2>
        <div className="card">
          <p>
            Aquí aprenderás sobre metodologías ágiles, tradicionales y Scrum.
          <iframe
            src="https://youtube.com/shorts/OJavAo2sH60?si=q05x2qYhX7WhX1F1"
            title="Metodologias"
            loading="lazy"
            allowFullScreen
          />          
          </p>





          <h3>Metodologías Ágiles</h3>
          <p>Iteraciones cortas y adaptación al cambio.</p>
          <iframe
            src="https://youtube.com/shorts/fKCWSnMw0CI?si=YNZt248VJ8zZmCUX"
            title="Metodologias agiles"
            loading="lazy"
            allowFullScreen
          />          




          <h3>¿Qué son las metodologias?</h3>
          <p>Pasos y reglas para organizae un proyecto.</p>
          <iframe
            src="https://www.tiktok.com/@juanita.garca.rom/video/7592448578497318162?is_from_webapp=1&sender_device=pc&web_id=7566117717075592760"
            title="¿Que son las metodologias?"
            loading="lazy"
            allowFullScreen
          />



          <h3>Metodologías Tradicionales</h3>
          <p>Cascada, Modelo V y RUP.</p>
          <iframe
            src="https://youtube.com/shorts/WoIxz11eVOw?si=VoNppV3_YyNHy2BS"
            title="Metodologias tradicionales"
            loading="lazy"
            allowFullScreen
          />



          <h3>Scrum</h3>
          <p>Trabajo por Sprints, roles y reuniones.</p>
          <iframe
            src="https://youtube.com/shorts/_Nv-b9K26Ag?si=s3Zow1Dqk_VREpkU"
            title="scrum"
            loading="lazy"
            allowFullScreen
          />



        </div>
      </section>








      {/* CONTACTO */}
      <section id="contacto">
        <h2>😽 Contacto.</h2>
        <div className="card">
          <p><strong>Teléfono:</strong> 5618214222</p>
          <p>
            <strong>TikTok:</strong>{" "}
            <a href="https://www.tiktok.com/@xdxdxdxd_dxdxdxdx_xd" target="_blank" rel="noreferrer">
              Click aquí
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a href="https://www.facebook.com/share/1ETwRnrmyp/" target="_blank" rel="noreferrer">
              Click aquí
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/juanita_cat28" target="_blank" rel="noreferrer">
              Click aquí
            </a>
          </p>
        </div>
      </section>
    </div>
</>
  )
}

export default App

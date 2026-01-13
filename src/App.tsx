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
        Hola, esta es una página web educativa en la que exploraremos 
        tres apartados principales: Kanban, frameworks y metodologías. 
        El objetivo de esta página es brindar información clara y sencilla 
        sobre conceptos fundamentales de la gestión de proyectos y el 
        desarrollo de software, ayudando a comprender cómo se organizan 
        y planifican los procesos de trabajo en el ámbito tecnológico.

      </p>
    </div>
  </section>

  {/* KANBAN */}
  <section id="kanban">
    <h2>🐈 Kanban.</h2>
    <div className="card">
      
      <p>
        <strong>Tablero de kanban</strong>
        <br />
        El tablero de Kanban es una herramienta visual que se utiliza 
        para organizar y gestionar el trabajo de manera clara y sencilla. 
        Su función principal es mostrar las tareas y su estado dentro de 
        un proceso, permitiendo que cualquier persona pueda entender 
        rápidamente qué se está haciendo, qué está en progreso y qué ya se 
        terminó.
        <br />
        Generalmente, el tablero de Kanban se divide en columnas, que 
        representan las etapas del flujo de trabajo, como Por hacer, 
        En proceso y Hecho. Dentro de cada columna se colocan tarjetas, 
        y cada tarjeta representa una tarea o actividad específica. A 
        medida que el trabajo avanza, las tarjetas se mueven de una 
        columna a otra, lo que hace visible el progreso.
        <br />
        Una de las ventajas más importantes del tablero de Kanban es que 
        ayuda a evitar la sobrecarga de trabajo, ya que permite limitar la 
        cantidad de tareas que pueden estar “en proceso” al mismo tiempo. 
        También facilita la detección de bloqueos o retrasos, porque si una 
        columna se llena demasiado, indica que existe un problema en esa 
        etapa del proceso.
        <br />
        El tablero de Kanban puede usarse tanto en equipos de trabajo 
        como de forma personal, ya sea en formato físico (pizarrón, 
        notas adhesivas) o digital (aplicaciones y plataformas). Gracias 
        a su simplicidad y claridad, el tablero de Kanban mejora la 
        organización, la productividad y la comunicación, fomentando la 
        mejora continua.
      </p>

      <p>
        Aquí esta un ejemplo de el tablero de kanban (me puesdes ayudar aqui a poner la imajen porfa :c)
      </p>

      <p>
        Kanban es una metodología ágil ampliamente utilizada tanto en el 
        desarrollo de software como en la organización personal. Destaca 
        por su flexibilidad y por el uso de tableros visuales que permiten 
        ver el estado de las tareas, mejorar el flujo de trabajo, reducir la 
        sobrecarga y facilitar la mejora continua en equipos o proyectos 
        individuales.
      </p>

      <a className='ee' href="https://youtube.com/shorts/4jDfB2XoN-Y?si=DvrAyMhR-NfBhO_P" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/4jDfB2XoN-Y/0.jpg" alt="Introducción a Kanban" />
      </a>

      <p>
        <strong>¿Qué es Kanban y para qué sirve?</strong>
        <br />
        Kanban es un método visual de gestión del trabajo que utiliza 
        un tablero dividido en columnas y tarjetas para representar 
        tareas y su estado dentro de un proceso. Cada tarjeta representa
        una actividad específica y se mueve de una columna a otra 
        conforme avanza el trabajo. Esto permite que cualquier persona 
        del equipo pueda entender fácilmente en qué punto se encuentra 
        cada tarea sin necesidad de reportes complejos.
        <br />
        Kanban sirve principalmente para visualizar el flujo de trabajo, 
        lo que ayuda a identificar cuellos de botella o retrasos. Además, 
        permite limitar el trabajo en progreso (WIP), evitando que el 
        equipo se sobrecargue con demasiadas tareas al mismo tiempo. Al 
        enfocarse en terminar lo que ya está iniciado antes de comenzar 
        algo nuevo, se mejora la eficiencia y la calidad del trabajo. En 
        general, Kanban ayuda a organizar actividades, mejorar la 
        comunicación del equipo y fomentar la mejora continua.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592430725199203592" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p>
        <strong>Origen de Kanban</strong>
        <br />
        Kanban nació en Toyota, Japón, durante la década de 1940, como 
        parte del Sistema de Producción Toyota, desarrollado por Taiichi 
        Ohno. Su inspiración principal provino de los supermercados 
        japoneses, donde los productos se reabastecían únicamente cuando 
        eran necesarios, evitando así el exceso de inventario. Este enfoque
        buscaba producir solo lo necesario, en el momento adecuado y en la 
        cantidad correcta.
        <br />
        El objetivo principal de Kanban en sus inicios era controlar 
        inventarios, mejorar el flujo de producción y eliminar desperdicios. 
        Con el paso del tiempo, este método demostró ser tan efectivo que 
        comenzó a aplicarse fuera del ámbito industrial. Años después, 
        David J. Anderson adaptó Kanban al desarrollo de software y a la 
        gestión del conocimiento, convirtiéndolo en una herramienta flexible 
        y aplicable a cualquier tipo de proyecto u organización.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592433281673497863" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p>
        <strong>Principios fundamentales</strong>
        <br />
        Los principios fundamentales de Kanban, definidos por David J. 
        Anderson, se dividen en principios de cambio y principios de 
        servicio. Los principios de cambio proponen comenzar con lo que 
        ya se hace actualmente, sin imponer transformaciones radicales
        desde el inicio. Esto facilita la aceptación del método por 
        parte del equipo y permite mejoras graduales y sostenibles. 
        Además, Kanban promueve respetar los roles, responsabilidades 
        y procesos existentes.
        <br />
        Por otro lado, los principios de servicio se centran en 
        entender y satisfacer las necesidades del cliente. Kanban 
        enfatiza la importancia de gestionar el trabajo y no a las 
        personas, promoviendo un ambiente de confianza y colaboración. 
        También impulsa la revisión constante del sistema para 
        ajustarlo y mejorarlo de forma continua. En conjunto, estos 
        principios permiten que Kanban sea un método flexible, humano 
        y enfocado en la mejora constante del flujo de trabajo.
      </p>
      

      <a href="https://youtube.com/shorts/9IOeBstzBNM" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/9IOeBstzBNM/0.jpg" alt="Principios de Kanban" />
      </a>

      <p>
        <strong>Kanban en entornos ágiles</strong>
        <br />
        Kanban se integra de manera natural con los entornos ágiles 
        debido a su flexibilidad y adaptabilidad. A diferencia de 
        otras metodologías, Kanban no impone roles nuevos ni eventos 
        obligatorios, lo que facilita su adopción en equipos que ya 
        trabajan bajo marcos como Scrum, XP o DevOps. Esto permite 
        mejorar la eficiencia sin modificar drásticamente la estructura 
        del equipo.
        <br />
        En los entornos ágiles, Kanban ayuda a optimizar el flujo de 
        trabajo y a entregar valor de manera continua. La transparencia 
        que ofrece el tablero Kanban permite que todos los miembros del 
        equipo conozcan el estado del proyecto en tiempo real. Además, 
        su enfoque en la mejora continua y en la reducción de bloqueos 
        lo convierte en una herramienta ideal para equipos que buscan 
        adaptarse rápidamente a los cambios y mejorar su desempeño.
      </p>

      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592446491650723090" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <p>
        <strong>Kanban para desarrollo de software</strong>
        <br />
        En el desarrollo de software, Kanban se utiliza para gestionar 
        tareas del backlog, priorizar el trabajo y controlar el flujo 
        de desarrollo desde el inicio hasta la entrega. Generalmente 
        se emplean columnas como “Por hacer”, “En proceso” y “Hecho”, 
        lo que permite visualizar claramente el estado de cada tarea. 
        Esto ayuda a detectar bloqueos técnicos o dependencias que 
        puedan retrasar el proyecto.
        <br />
        Además, Kanban permite estimar la capacidad real del equipo 
        y evitar la sobrecarga de trabajo. En este contexto, se 
        utilizan métricas como el lead time, el cycle time y el 
        throughput para medir el desempeño y mejorar el proceso. 
        Gracias a su enfoque visual y basado en datos, Kanban contribuye 
        a una gestión más eficiente, predecible y sostenible del desarrollo 
        de software.
      </p>

      <a href="https://youtube.com/shorts/EtyHMCb5NVM" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/EtyHMCb5NVM/0.jpg" alt="Kanban en desarrollo de software" />
      </a>

      <p>
        <strong>Kanban Personal</strong>
        <br />
        El Kanban personal es una adaptación del método Kanban a la 
        organización individual de tareas diarias. Se utiliza un tablero 
        sencillo con columnas como “Por hacer”, “En proceso” y “Hecho”, 
        donde se colocan actividades personales, académicas o laborales. 
        Este sistema ayuda a tener claridad sobre las responsabilidades 
        y a priorizar lo más importante.
        <br />
        Al limitar el trabajo en progreso, el Kanban personal evita la 
        saturación y el estrés, permitiendo enfocarse en pocas tareas a 
        la vez. También fomenta la disciplina y la constancia, ya que el 
        avance visual motiva a completar actividades. En general, es una 
        herramienta muy útil para mejorar la productividad personal, la 
        organización del tiempo y el cumplimiento de objetivos.
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
      <p>
        En este apartado se explican tecnologías y tipos de datos usados 
        en programación, los cuales son la base para crear aplicaciones 
        y páginas web. Se abordan conceptos esenciales que permiten 
        entender cómo se estructura la información, cómo funcionan los 
        lenguajes de programación y cómo se desarrollan sistemas de 
        manera ordenada y eficiente.
      </p>

      <a href="https://youtube.com/shorts/XlDluD0bQsE" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/XlDluD0bQsE/0.jpg" alt="Frameworks" />
      </a>

      <h3>Tipos de datos</h3>
      <p>
        Los tipos de datos son clasificaciones que definen qué tipo de 
        información puede almacenar una variable dentro de un programa. 
        Son esenciales para que el sistema interprete correctamente los 
        valores y realice operaciones adecuadas sobre ellos. Por ejemplo, 
        no se tratan igual los números que los textos o los valores lógicos.
        <br />
        Entre los principales tipos de datos se encuentran los enteros, 
        decimales, cadenas de texto, booleanos, caracteres, arreglos y 
        objetos. También existen valores especiales como null o undefined, 
        que indican la ausencia de datos. El uso correcto de los tipos de 
        datos mejora la eficiencia, evita errores y facilita la lectura y 
        mantenimiento del código.
      </p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592435568290663687" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>HTML</h3>
      <p>
        HTML (HyperText Markup Language) es el lenguaje estándar 
        utilizado para crear la estructura de las páginas web. Su 
        función principal es organizar el contenido mediante etiquetas 
        que indican qué tipo de información se está mostrando, como 
        textos, imágenes, enlaces o listas. HTML no es un lenguaje 
        de programación, sino un lenguaje de marcado.
        <br />
        Gracias a HTML, los navegadores pueden interpretar y mostrar
        correctamente el contenido de un sitio web. Etiquetas como 
        "<html></html>", "<head></head>", "<body></body>", "<h1></h1>" 
        a "<h6></h6>"", "<p></p>" y "<div></div>" permiten estructurar
        la información de forma clara y ordenada. HTML es la base de
        cualquier página web y se complementa con CSS y JavaScript.
      </p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592448234052783368" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>CSS</h3>
      <p>
        CSS (Cascading Style Sheets) es el lenguaje encargado de definir 
        el estilo visual de las páginas web. Permite controlar aspectos 
        como colores, tipografías, tamaños, márgenes, bordes y la 
        distribución de los elementos en la pantalla. Mientras HTML define
        la estructura, CSS se encarga de la apariencia.
        <br />
        CSS también permite crear diseños responsivos mediante 
        herramientas como Flexbox y Grid, adaptando la página a distintos
        dispositivos. Además, ofrece la posibilidad de agregar animaciones
        y transiciones, mejorando la experiencia del usuario. Gracias a 
        CSS, las páginas web pueden ser visualmente atractivas y funcionales.
      </p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592442501315726599" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>Java</h3>
      <p>
        Java es un lenguaje de programación orientado a objetos, 
        multiplataforma y ampliamente utilizado en diferentes áreas de 
        la tecnología. Se emplea en aplicaciones empresariales, sistemas
        bancarios, desarrollo Android, videojuegos y aplicaciones web
        mediante frameworks como Spring. Su gran ventaja es que puede 
        ejecutarse en cualquier sistema gracias a la Java Virtual Machine.
        <br />
        Entre sus principales características se encuentran el tipado 
        fuerte, el alto rendimiento y una amplia comunidad de 
        desarrolladores. Java es conocido por su estabilidad, seguridad y 
        escalabilidad, lo que lo convierte en una opción muy popular para 
        proyectos grandes y complejos.
      </p>
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
        Aquí aprenderás sobre metodologías ágiles, tradicionales y Scrum, 
        analizando sus características, diferencias y usos principales. 
        Este apartado ayuda a comprender cómo se planifican y gestionan 
        proyectos, desde enfoques más rígidos hasta métodos flexibles que 
        se adaptan al cambio y promueven la colaboración y la entrega 
        continua de valor.
      </p>

      <a href="https://youtube.com/shorts/OJavAo2sH60" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/OJavAo2sH60/0.jpg" alt="Metodologías" />
      </a>

      <h3>Metodologías Ágiles</h3>
      <p>
        Las metodologías ágiles son un conjunto de prácticas y principios
        que buscan gestionar proyectos de forma flexible, iterativa y 
        colaborativa. Su objetivo principal es adaptarse rápidamente a 
        los cambios y entregar valor de manera continua al cliente. Se 
        enfocan en la comunicación constante y el trabajo en equipo.
        <br />
        Estas metodologías se basan en el Manifiesto Ágil, que prioriza 
        a las personas, el software funcional, la colaboración con el 
        cliente y la respuesta al cambio. Gracias a este enfoque, los 
        equipos pueden mejorar continuamente y responder mejor a las 
        necesidades del entorno.
      </p>
      <a href="https://youtube.com/shorts/fKCWSnMw0CI" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/fKCWSnMw0CI/0.jpg" alt="Metodologías ágiles" />
      </a>

      <h3>¿Qué son las metodologías?</h3>
      <p>
        Las metodologías son conjuntos estructurados de procesos, 
        técnicas y reglas que orientan la forma de trabajar en un 
        proyecto. Su función es organizar el trabajo, mejorar la 
        calidad de los resultados y facilitar el control del avance. 
        Cada metodología establece cómo planificar, ejecutar y evaluar 
        un proyecto.
        <br />
        Pueden clasificarse en metodologías tradicionales, que son más 
        rígidas y predictivas, y metodologías ágiles, que son flexibles 
        y adaptativas. La elección de una metodología depende del tipo 
        de proyecto, el equipo y los objetivos que se desean alcanzar.
      </p>
      <a href="https://www.tiktok.com/@juanita.garca.rom/video/7592448578497318162" target="_blank" rel="noopener noreferrer">
        <span>Ver en TikTok</span>
      </a>

      <h3>Metodologías Tradicionales</h3>
      <p>
        Las metodologías tradicionales se caracterizan por seguir una 
        planificación rígida y etapas secuenciales que no suelen 
        modificarse. Una vez que se completa una fase, se pasa a la 
        siguiente sin retroceder. Este enfoque es útil cuando los 
        requisitos del proyecto están bien definidos desde el inicio.
        <br />
        Algunos ejemplos son Cascada, Modelo V, Espiral, Incremental, 
        PMBOK y RUP. Estas metodologías requieren mucha documentación y 
        una planificación detallada previa. Sin embargo, su principal 
        desventaja es la dificultad para adaptarse a cambios durante el 
        desarrollo del proyecto.
      </p>
      <a href="https://youtube.com/shorts/WoIxz11eVOw" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/WoIxz11eVOw/0.jpg" alt="Metodologías tradicionales" />
      </a>

      <h3>Scrum</h3>
      <p>
        Scrum es una metodología ágil ampliamente utilizada en el 
        desarrollo de software. Se basa en trabajar en ciclos cortos 
        llamados Sprints, que suelen durar entre una y cuatro semanas. 
        Durante cada Sprint, el equipo desarrolla un conjunto de 
        funcionalidades que aportan valor al producto.
        <br />
        Scrum cuenta con roles definidos como Product Owner, Scrum Master 
        y Equipo de Desarrollo, así como eventos y artefactos específicos. 
        Su objetivo es mejorar continuamente, adaptarse al cambio y entregar 
        resultados de forma rápida y constante, manteniendo una alta 
        colaboración entre todos los integrantes del equipo.
      </p>
      <a href="https://youtube.com/shorts/_Nv-b9K26Ag" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/_Nv-b9K26Ag/0.jpg" alt="Scrum" />
      </a>
    </div>
  </section>

  {/* CONTACTO */}
  <section id="contacto">
    <h2>😽 Contacto.</h2>
    <div className="card">
      <p><strong>Teléfono:</strong> 5618214222</p>
      <p>
        <strong>TikTok:</strong>{" "}
        <a 
          href="https://www.tiktok.com/@juanita.garca.rom?_r=1&_t=ZS-92zgcUfIwE8" 
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
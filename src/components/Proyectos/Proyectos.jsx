import './Proyectos.css';
import cafe from '../../assets/cafe.png';
import citas from '../../assets/citas.png';
import login from '../../assets/LOGIN.png';
import cosmico from '../../assets/cosmico.png';
const Proyectos = () => {
    // Arreglo de proyectos (Simulando una base de datos o API)
    const proyectosData = [
        {
            id: 1,
            imagen: cafe,
            titulo: "Star Coffee", descripcion: "Sistema de ventas", tecnologias: ["HTML5", "CSS", "JavaScript, HeidiSQL", "PHP", "MySQL"],
            linkDemo: "https://proyecto-cafeteria.infinityfreeapp.com/index.php",
            linkCodigo: "https://github.com/johan-vega/proyecto-cafeteria"
        },
        {
            id: 2,
            imagen: citas,
            titulo: "SCC", descripcion: "Sistema de control de citas", tecnologias: ["HTML5", "CSS3", "JavaScript",  "PHP", "MySQL"],
            linkDemo: "https://entregable-grupo3.infinityfreeapp.com/?i=1",
            linkCodigo: "https://github.com/johan-vega/entregableGrupo3"
        },
        {
            id: 3,
            imagen: login,
            titulo: "Login", descripcion: "INICIO DE SESIÓN", tecnologias: ["HTML5", "CSS3", "JavaScript",  "PHP", "MySQL"],
            linkDemo: "https://matricula-se.infinityfreeapp.com/",
            linkCodigo: "https://github.com/johan-vega/entregableGrupo3"
        },
        {
            id: 4,
            imagen: cosmico,
            titulo: "Linea Cosmica", descripcion: "Tienda en linea", tecnologias: ["HTML5", "CSS", "JavaScript",  "PHP" ],
            linkDemo: "https://lineacosmica.vercel.app/",
            linkCodigo: "https://github.com/chavezramirez142006-alt/lineacosmica"
        }
    ];
    return (
        <section id="proyectos" className="proyectos-section">
            <div className="proyectos-container">
                <h2 className="section-title text-center">Proyectos
                    Destacados</h2>
                <div className="proyectos-grid">
                    {proyectosData.map((proyecto) => (
                        <article key={proyecto.id} className="proyecto-card">
                            {/* 1. Imagen del Proyecto */}
                            <div className="proyecto-imagen">
                                <img src={proyecto.imagen} alt={`Captura de
            
            ${proyecto.titulo}`} />
                            </div>
                            {/* 2. Contenido de la Tarjeta */}
                            <div className="proyecto-contenido">
                                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                                <p className="proyecto-desc">{proyecto.descripcion}</p>
                                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                                <div className="proyecto-tags">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* 4. Botones de Acción */}
                                <div className="proyecto-links">
                                    <a href={proyecto.linkDemo} target="_blank"
                                        rel="noopener noreferrer" className="btn-proyecto btn-demo">

                                        {/* Ícono de Enlace Externo */}
                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">

                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a22 0 0 1 2-2h6"></path>

                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Demo en Vivo
                                    </a>
                                    <a href={proyecto.linkCodigo} target="_blank"
                                        rel="noopener noreferrer" className="btn-proyecto btn-codigo">

                                        {/* Ícono de GitHub */}
                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">

                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37
3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3
6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>

                                        </svg>
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Proyectos;
import './Servicios.css';

const Servicios = () => {

    const serviciosData = [
        {
            id: 1,
            titulo: "Diseño Web Responsive",
            descripcion: "Creación de páginas web adaptables para celulares, tablets y computadoras.",
            nivel: "Frontend",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 2,
            titulo: "Desarrollo Frontend",
            descripcion: "Interfaces modernas utilizando React, JavaScript, HTML y CSS.",
            nivel: "React JS",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 3,
            titulo: "Backend con Laravel",
            descripcion: "Creación de APIs, sistemas CRUD y conexión con bases de datos.",
            nivel: "Backend",
            botonTexto: "DISPONIBLE",
            estado: "completado"
        },
        {
            id: 4,
            titulo: "Optimización y Mantenimiento",
            descripcion: "Mejora de rendimiento, corrección de errores y mantenimiento web.",
            nivel: "Soporte Web",
            botonTexto: "ACTIVO",
            estado: "proceso"
        }
    ];

    return (
        <section id="servicios" className="habilidades-section">

            <div className="habilidades-container">

                <div className="habilidades-grid">

                    {serviciosData.map((servicio) => (

                        <div key={servicio.id} className="skill-card">

                            {/* CABECERA */}
                            <div className="skill-header">

                                <div className="skill-icon">

                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-cyan"
                                    >

                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        ></rect>

                                        <line
                                            x1="3"
                                            y1="9"
                                            x2="21"
                                            y2="9"
                                        ></line>

                                        <line
                                            x1="9"
                                            y1="21"
                                            x2="9"
                                            y2="9"
                                        ></line>

                                    </svg>

                                </div>

                                <span
                                    className={`skill-badge ${servicio.estado === 'proceso'
                                            ? 'badge-yellow'
                                            : 'badge-green'
                                        }`}
                                >
                                    {servicio.botonTexto}
                                </span>

                            </div>

                            {/* CUERPO */}
                            <div className="skill-body">

                                <h3 className="skill-title">
                                    {servicio.titulo}
                                </h3>

                                <p className="skill-desc">
                                    {servicio.descripcion}
                                </p>

                                <span className="skill-level">
                                    {servicio.nivel}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Servicios;
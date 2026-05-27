import './Perfil.css';
const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    {/* =====================================TARJETA 1: PERFIL PROFESIONAL====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-44v2"></path>

                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>
                        <p className="card-text">
                            Soy estudiante de Informática y Desarrollo de Aplicaciones Web en SENATI, actualmente cursando el tercer ciclo de mi formación profesional. Tengo 19 años y me apasiona el desarrollo web y la tecnología, buscando constantemente mejorar mis habilidades y adquirir nuevos conocimientos.
                            <br /><br />
                            Cuento con conocimientos en HTML, CSS, React y Laravel, incluyendo la conexión y manejo de bases de datos en proyectos desarrollados con Laravel. Además, tengo experiencia utilizando HeidiSQL para la administración de bases de datos y desarrollo de consultas.
                            <br /><br />
                            Actualmente continúo fortaleciendo mis conocimientos en JavaScript y PHP para convertirme en un desarrollador full stack más sólido y profesional. Me considero una persona responsable, autodidacta y con muchas ganas de seguir creciendo en el mundo del desarrollo de software.
                        </p>
                    </div>
                    {/* =====================================TARJETA 2: EDUCACIÓN====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Educación / Sombrero (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>
                        <div className="timeline">

                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Informática y Desarrollo de Aplicaciones Web</h4>
                                    <span className="badge badge-outline">En Curso</span>
                                </div>

                                <p className="timeline-date">
                                    SENATI • 2024 - Actualidad
                                </p>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Desarrollo Frontend con React</h4>
                                    <span className="badge badge-solid">React</span>
                                </div>

                                <p className="timeline-date">
                                    HTML, CSS, JavaScript, React
                                </p>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Desarrollo Backend con Laravel</h4>
                                    <span className="badge badge-solid">Laravel</span>
                                </div>

                                <p className="timeline-date">
                                    PHP, Laravel, MySQL, HeidiSQL
                                </p>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Base de Datos y Gestión SQL</h4>
                                    <span className="badge badge-outline">SQL</span>
                                </div>

                                <p className="timeline-date">
                                    MySQL, HeidiSQL y conexión de bases de datos
                                </p>
                            </div>

                        </div>
                        {/* Ítem de Educación 4 */}
                        <div className="timeline-item">
                            <div className="timeline-header">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};
export default Perfil;
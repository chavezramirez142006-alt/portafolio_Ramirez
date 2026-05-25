import './Certificados.css';

const Certificados = () => {

    const certificadosData = [
        {
            id: 1,
            titulo: "Certificado De Cisco",
            descripcion: "Curso completo de desarrollo web con HTML, CSS ",
            plataforma: "Udemy",
            botonTexto: "VER PDF",
            link: "https://drive.google.com/file/d/1ooXQEnEOWE-PzVAgMCtmSpwHi8hZgwJx/view?usp=sharing"
        },
        
    ];

    return (
        <section id="Certificado" className="certificados-section">

            <div className="certificados-container">

                <h2 className="section-title">
                    Certificados
                </h2>

                <div className="certificados-grid">

                    {certificadosData.map((certificado) => (

                        <div
                            key={certificado.id}
                            className="certificado-card"
                        >

                            {/* HEADER */}
                            <div className="certificado-header">

                                <div className="certificado-icon">

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

                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>

                                    </svg>

                                </div>

                                <span className="certificado-badge">
                                    CERTIFICADO
                                </span>

                            </div>

                            {/* BODY */}
                            <div className="certificado-body">

                                <h3 className="certificado-title">
                                    {certificado.titulo}
                                </h3>

                                <p className="certificado-desc">
                                    {certificado.descripcion}
                                </p>

                                <span className="certificado-level">
                                    {certificado.plataforma}
                                </span>

                            </div>

                            {/* BOTÓN */}
                            <div className="certificado-links">

                                <a
                                    href={certificado.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-certificado"
                                >

                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >

                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>

                                        <polyline points="14 2 14 8 20 8"></polyline>

                                    </svg>

                                    {certificado.botonTexto}

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Certificados;
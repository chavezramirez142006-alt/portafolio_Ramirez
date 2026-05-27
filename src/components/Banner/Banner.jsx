import './Banner.css';
import Ramirez from '../../assets/Ramirez.jpeg';
const Banner = () => {
    return (
        <section id="home" className="hero-section">
            <div  className="hero-content">
                {/* 1. Etiqueta de Estado (Badge) */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para nuevos proyectos
                </div>
                {/* 2. Foto de Perfil Circular */}
                <div className="profile-photo-container">
                    
                    {/* en src poner mombre de la imagen */}
                    <img
                        src={Ramirez}
                        alt="Foto de Perfil"
                        className="profile-photo"
                    />
                </div>
                {/* 3. Título Principal */}
                <h1 className="hero-title">
                    Aileen <br />
                    <span className="hero-name">Chavez Ramirez</span>
                </h1>
                {/* 4. Subtítulo (Rol) */}
                <h2 className="hero-subtitle">
                    Informatica y Desarrollo de aplicaciones web 

                </h2>
                {/* 5. Descripción */}
                <p className="hero-description">
                    Construyo paginas web modernas y funcionales con React, HTML, CSS y JavaScript. Me apasiona crear experiencias digitales atractivas y eficientes. ¡Vamos a construir algo increíble juntos!
                </p>
                {/* 6. Botones de Acción */}
                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver

                        Proyectos</a>

                    <a href="#contacto" className="btn btn-secondary">Contáctame</a>

                </div>
            </div>
            {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
            <div className="scroll-indicator">
                ↓
            </div>
        </section>
    );
};
export default Banner;
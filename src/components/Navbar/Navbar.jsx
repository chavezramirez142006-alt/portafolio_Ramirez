import { useState } from 'react';
import ali from '../../assets/ali.png';
import './Navbar.css';
const Navbar = () => {
    // Estado para controlar el menú hamburguesa en móviles
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            {/* Sección del Logo */}
            <div className="navbar-logo">
                <a href="#home" onClick={() => setIsOpen(false)}>
                    <img
                        className="navbar-logo-img"
                        src={ali}
                        alt="Logo"
                    />
                </a>
            </div>
            {/* Enlaces de Navegación */}
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                {/* Al hacer clic en un enlace en móvil, cerramos el menú */}

                <a href="#sobre-mi" onClick={() => setIsOpen(false)}><h4>Perfil</h4></a>
                <a href="#tech-stack" onClick={() => setIsOpen(false)}><h4>Habilidades</h4></a>
                <a href="#proyectos" onClick={() => setIsOpen(false)}><h4>Proyectos</h4></a>
                <a href="#contacto" onClick={() => setIsOpen(false)}><h4>Contacto</h4></a>
                <a href="#servicios" onClick={() => setIsOpen(false)}><h4>Servicios</h4></a>
                <a href="#Certificado" onClick={() => setIsOpen(false)}><h4>Certificado</h4></a>


            </div>
            {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};
export default Navbar;
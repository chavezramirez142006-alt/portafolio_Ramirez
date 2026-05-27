import './Footer.css';
import al from '../../assets/al.png';

const Footer = () => {
    return (
        <footer className="footer-section">

            <div className="footer-container">

                {/* LOGO / NOMBRE */}
                <div className="footer-brand">
                    <h2 className="footer-logo">
                        Aileen <span className="footer-accent">Chavez Ramirez</span>
                    </h2>

                    <p className="footer-description">
                        Estudiante de Informática y Desarrollo de Aplicaciones Web en SENATI.
                        Apasionado por el desarrollo frontend, React y Laravel.
                    </p>
                </div>

                {/* LINKS */}
                <div className="footer-links">

                    <a href="#home" onClick={() => setIsOpen(false)}>
                        <img
                            className="navbar-ini-img"
                            src={al}
                            alt="Logo"
                        />
                    </a>

                </div>



            </div>

            {/* COPYRIGHT */}
            <div className="footer-copy">
                <p>
                    © 2026 Aileen Chavez Ramirez — Todos los derechos reservados.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
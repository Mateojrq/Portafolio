import './Footer.css';
import fotoCarnet from '../../assets/foto.jpg';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__container">

                {/* COLUMNA 1: PERFIL */}
                <div className="footer__column footer__profile">
                    <img src={fotoCarnet} alt="Mateo Rodríguez" className="footer__img" />
                    <h3>Mateo Josue Rodríguez Quevedo</h3>
                    <p className="footer__subtitle">Software Developer 🦝</p>
                </div>

                {/* COLUMNA 2: CONTACTO */}
                <div className="footer__column footer__contact">
                    <div className="content-wrapper">
                        <h4>Contacto</h4>
                        <div className="contact__info">
                            <p>
                                <i className="fa-brands fa-whatsapp"></i>
                                <a href="https://wa.me/593979084514" target="_blank" rel="noopener noreferrer">0979084514</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:mateo01@epn.edu.ec">mateo01@epn.edu.ec</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA 3: REDES SOCIALES */}
                <div className="footer__column footer__socials">
                    <div className="content-wrapper">
                        <h4>Redes Sociales</h4>
                        <div className="social__icons">

                            <a href="https://www.linkedin.com/in/mateo-rodr%C3%ADguez-81b8332a4/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a href="https://github.com/Mateojrq" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a href="https://www.facebook.com/mateojosue.rodriguezquevedo.3/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <i className="fa-brands fa-facebook"></i>
                            </a>

                            <a href="https://www.instagram.com/matt.joss25/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            {/* ✅ X / Twitter — SVG inline, funciona siempre */}
                            <a href="https://x.com/Mateo82459941" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                                <svg
                                    className="icon-x"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Mateo Rodríguez. Todos los derechos reservados. ¡Hecho con ❤️ y mucho café! 🦝</p>
            </div>
        </footer>
    );
};

export default Footer;
import { useState } from 'react';
import { Main } from '../main/Main';
import mapache from '../../assets/mapache.png';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header id="inicio">
            {/* NAVBAR FIJO */}
            <nav className="sticky-nav" aria-label="Navegación principal">
                <div className="navbar__container">
                    <div className="navbar__logo-wrapper">
                        <img src={mapache} alt="Mapache" className="navbar__mapache-icon" />
                        <p className="navbar__logo">Mateo Rodríguez</p>
                    </div>

                    {/* Botón hamburguesa */}
                    <button
                        className="nav-toggle"
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`navbar__menu${menuOpen ? ' open' : ''}`}>
                        <li><a href="#inicio"  onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#about"   onClick={closeMenu}>Sobre mí</a></li>
                        <li><a href="#project" onClick={closeMenu}>Proyectos</a></li>
                        <li><a href="#expert"  onClick={closeMenu}>Experiencia</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                    </ul>
                </div>
            </nav>

            {/* CONTENIDO DE LA PORTADA */}
            <div className="header__content">
                <Main />
            </div>
        </header>
    );
};

export default Header;
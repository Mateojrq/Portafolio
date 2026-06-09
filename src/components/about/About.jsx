import './About.css';
import aboutPhoto from '../../assets/men.png';

const About = () => {
    return (
        <section id="about" className="about">
            <h3 className="about__title">Sobre Mí</h3>
            
            <div className="about__container">
                <div className="about__text-container">
                    <p className="about__description">
                        ¡Hola! Soy Mateo Josue Rodríguez Quevedo, un apasionado estudiante de Desarrollo de Software en la Escuela Politécnica Nacional (EPN). 
                        Me dedico a crear soluciones tecnológicas eficientes, con un enfoque en el desarrollo Full-Stack utilizando tecnologías como Python, Java, SQL y desarrollo web. 
                        Tengo experiencia gestionando proyectos reales y construyendo sitios web funcionales que resuelven problemas del mundo real. Mi objetivo es ser un desarrollador versatil y comprometido con la excelencia.
                    </p>
                </div>

                <div className="about__image-container">
                    <img src={aboutPhoto} alt="Mateo Rodríguez" className="about__img" />
                </div>
            </div>
        </section>
    );
}

export default About;

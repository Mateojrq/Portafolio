import './Project.css';
import redesImg from '../../assets/redes-preview.png'; 
import frutpulpImg from '../../assets/frutpulp-preview.png';
import superentImg from '../../assets/web6.webp';

const Project = () => {
    const projects = [
        {
            id: 1,
            title: 'Curso Redes EPN',
            description: 'Plataforma con recursos y temarios interactivos sobre redes de computadoras para estudiantes.',
            image: redesImg,
            link: 'https://cursoredesepn.netlify.app/',
            demo: 'Ver Demo'
        },
        {
            id: 2,
            title: 'FrutPulp',
            description: 'Sistema de gestión y página web para la marca de pulpas de fruta Frutpulp.',
            image: frutpulpImg,
            link: 'https://santadelicia11.pythonanywhere.com/',
            demo: 'Ver Demo'
        },
        {
            id: 3,
            title: 'Superent',
            description: 'Diseño y desarrollo de branding y sitio web comercial para cliente profesional.',
            image: superentImg,
            link: '#',
            demo: 'Ver Demo'
        }
    ];

    return (
        <section id="project" className="project">
            <h3 className="project__title">Mis Proyectos</h3>
            <div className="project__cards">
                {projects.map(project => (
                    <div key={project.id} className="cards">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} className="card__img" alt={`Vista previa ${project.title}`} />
                        </a>
                        <div className="card">
                            <h4 className="card__title">{project.title}</h4>
                            <p className="card__description">{project.description}</p>
                            <div className="card__buttons">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="card__category"
                                >
                                    {project.demo}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;

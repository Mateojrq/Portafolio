import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            icon: '💻',
            title: 'Desarrollo Frontend',
            description: 'Creación de interfaces responsivas y atractivas utilizando React, HTML5, CSS3, y Bootstrap. Especializado en UX/UI moderno.'
        },
        {
            id: 2,
            icon: '🗄️',
            title: 'Desarrollo Backend & DB',
            description: 'Diseño e implementación de lógica de servidor con Python, Java y modelado de bases de datos relacionales en SQL.'
        },
        {
            id: 3,
            icon: '🛠️',
            title: 'Hardware & Mantenimiento',
            description: 'Experiencia técnica en repotenciación de equipos, actualización de componentes (RAM, SSD) y mantenimiento de sistemas.'
        }
    ];

    return (
        <section id="expert" className="experience">
            <h3 className="experience__title">Mi Experiencia</h3>
            <div className="experience__container">
                {experiences.map(exp => (
                    <div key={exp.id} className="experience__card">
                        <div className="experience__icon">{exp.icon}</div>
                        <h4>{exp.title}</h4>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
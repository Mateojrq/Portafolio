import mapache from '../../assets/mapache.png';
import './Main.css';

export const Main = () => {
    return (
        <main className='principal'>
            <img src={mapache} alt="Mapache Developer" className="principal__mapache" />
            <h1 className='principal__title'>Bienvenido a mi portafolio</h1>
            <p className='principal__description'>Desarrollador Full-Stack apasionado por la tecnología</p>
            <a href="#project" className="btn btn__light">Ver Proyectos</a>
        </main>
    )
}
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">
                    {t({ en: 'About Me', es: 'Sobre Mí' })}
                </h2>

                <div className="about-content">
                    <div className="about-card glass animate-fadeInUp">
                        <div className="about-text">
                            <h3>
                                {t({
                                    en: 'Front-End Developer Junior | UX/UI Designer',
                                    es: 'Desarrollador Front-End Junior | Diseñador UX/UI'
                                })}
                            </h3>
                            <p>
                                {t({
                                    en: 'I specialize in bridging the gap between design and functionality, combining creative aesthetics with technical logic to ensure intuitive interfaces. Currently, I am evolving into a Full Stack Developer, driven by the goal of building simple, high-impact solutions for the end user.',
                                    es: 'Mi enfoque combina la estética creativa con la lógica técnica para construir experiencias digitales donde el diseño y la funcionalidad convergen, garantizando interfaces intuitivas y soluciones simples para el usuario final. Actualmente, me encuentro aprendiendo las habilidades necesarias para convertirme en Full Stack Developer'
                                })}
                            </p>
                            <p>
                                {t({
                                    en: 'I am always looking for new challenges and opportunities to grow as a developer. I am also a team player and enjoy working with others to create innovative and engaging user experiences. I am a believer in the power of collaboration and the importance of continuous learning from others.',
                                    es: 'Siempre estoy buscando nuevos desafíos y oportunidades para crecer como desarrollador. También soy amante de trabajar en equipo y disfruto trabajando con otros para crear experiencias de usuario innovadoras y atractivas. Creo en el poder de la colaboración y la importancia del aprendizaje continuo.'
                                })}
                            </p>
                            <p>
                                {t({
                                    en: 'Through my self-managed entrepreneurship, I have developed strong skills in e-commerce management, visual identity, and social media strategy. Additionally, my experience co-organizing large-scale cultural events like “Manokami” has refined my ability to coordinate multidisciplinary teams, manage logistics, and communicate effectively in high-pressure environments. I am eager to contribute my technical toolkit and creative perspective to a professional development team.',
                                    es: 'A través de mi emprendimiento autogestivo he desarrollado habilidades en gestión de e-commerce, identidad visual y estrategia en redes sociales. Además, mi experiencia co-organizando eventos culturales escala como “La Manokami” ha perfeccionado mi capacidad para coordinar equipos multidisciplinarios, gestionar logística y comunicarme eficazmente en entornos de alta presión.'
                                })}
                            </p>
                            <p>
                                {t({
                                    en: 'When I\'m not coding, you\'ll find me exploring the importance of the impact of my work on people\'s lives. I am passionate about creating user-friendly and visually appealing interfaces.',
                                    es: 'Cuando no estoy programando, me encontrarás explorando la importancia del impacto de mi trabajo en la vida de las personas. Me apasiona crear interfaces amigables y visualmente atractivas.'
                                })}
                            </p>
                        </div>

                        {/* <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number gradient-text">ES</div>
                                <div className="stat-label">
                                    {t({ en: 'Resume', es: 'Curriculum' })}
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">EN</div>
                                <div className="stat-label">
                                    {t({ en: 'Resume', es: 'Curriculum' })}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;

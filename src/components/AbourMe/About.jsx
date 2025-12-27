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
                                    en: 'I am Noa Barrionuevo, a junior front-end developer and UX/UI designer from Argentina. At the moment I am learning all the necessary skills to become a full stack developer. I am passionate about creating user-friendly and visually appealing interfaces.',
                                    es: 'Soy Noa Barrionuevo, un desarrollador front-end junior y diseñador UX/UI de Argentina. Actualmente estoy aprendiendo todas las habilidades necesarias para convertirme en desarrollador full stack. Me apasiona crear interfaces amigables y visualmente atractivas.'
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
                                    en: 'When I\'m not coding, you\'ll find me exploring the importance of the impact of my work on people\'s lives. I am passionate about creating user-friendly and visually appealing interfaces.',
                                    es: 'Cuando no estoy programando, me encontrarás explorando la importancia del impacto de mi trabajo en la vida de las personas. Me apasiona crear interfaces amigables y visualmente atractivas.'
                                })}
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number gradient-text">2</div>
                                <div className="stat-label">
                                    {t({ en: 'Years Experience', es: 'Años de Experiencia' })}
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">15+</div>
                                <div className="stat-label">
                                    {t({ en: 'Projects Completed', es: 'Proyectos Completados' })}
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">100%</div>
                                <div className="stat-label">
                                    {t({ en: 'Client Satisfaction', es: 'Satisfacción del Cliente' })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

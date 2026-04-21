import { useLanguage } from '../../context/LanguageContext';
import './About.css';

function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image-decoration animate-fadeIn">
                    <div className="profile-picture-box">
                        {/* Placeholder for actual photo */}
                        <div className="profile-photo"></div>
                        <div className="badge-name">n o a b a r r i o n u e v o</div>
                        <div className="badge-origin">made in argentina</div>
                    </div>
                    <div className="marker-illustration"></div>
                </div>

                <div className="about-content-box animate-fadeInUp">
                    <div className="section-title-boxed">
                        <span className="box">a</span>
                        <span className="box">b</span>
                        <span className="box">o</span>
                        <span className="box">u</span>
                        <span className="box">t</span>
                        <span className="box-space"></span>
                        <span className="box">m</span>
                        <span className="box">e</span>
                    </div>

                    <div className="about-text-content">
                        <p>
                            {t({
                                en: "I am a Front-End Developer and Web Designer with a solid background in Visual Arts. Currently, I'm deepening my knowledge in Software Applications Development to better bridge the gap between creative aesthetics and technical logic.",
                                es: "Soy Desarrolladora Front-End y Diseñadora Web con una sólida formación en Artes Visuales. Actualmente, estoy profundizando mis conocimientos en Desarrollo de Aplicaciones de Software para unir mejor la brecha entre la estética creativa y la lógica técnica."
                            })}
                        </p>
                        <p>
                            {t({
                                en: "Through my own entrepreneurship, I've gained hands-on experience in e-commerce, visual identity, and strategy. My goal is to build digital solutions that are not only functional but visually meaningful. I'm ready to bring my technical toolkit and creative perspective to a professional team.",
                                es: "A través de mi propio emprendimiento, he ganado experiencia práctica en comercio electrónico, identidad visual y estrategia. Mi objetivo es construir soluciones digitales que no solo sean funcionales sino también visualmente significativas. Estoy lista para aportar mis herramientas técnicas y perspectiva creativa a un equipo profesional."
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

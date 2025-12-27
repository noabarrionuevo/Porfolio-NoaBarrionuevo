import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

function Hero() {
    const { language, toggleLanguage, t } = useLanguage();

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text animate-fadeInUp">
                    <h1 className="hero-title">
                        {t({
                            en: "Hi, I'm ",
                            es: "Hola, soy "
                        })}
                        <span className="gradient-text">Noa Barrionuevo</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        {t({
                            en: "Take people's difficulties as signifiers of where the product can be improved.",
                            es: "Toma las dificultades de las personas como indicadores de dónde se puede mejorar el producto."
                        })}
                    </h2>
                    <p className="hero-description">
                        The Design of Everyday Things - Donald A. Norman
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            {t({
                                en: "View My Work",
                                es: "Ver Mi Trabajo"
                            })}
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            {t({
                                en: "Get In Touch",
                                es: "Contactar"
                            })}
                        </button>
                        <button className="language-toggle" onClick={toggleLanguage}>
                            {language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

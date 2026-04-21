import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

function Hero() {

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
            <div className="hero-content container">
                <div className="hero-text animate-fadeIn">
                    <div className="name-header">
                        <span className="name-noa">noa</span>
                        <span className="name-barrionuevo">barrionuevo</span>
                    </div>
                    <h1 className="hero-title-boxed">
                        <span className="box">P</span>
                        <span className="box">O</span>
                        <span className="box">R</span>
                        <span className="box">T</span>
                        <span className="box">F</span>
                        <span className="box">O</span>
                        <span className="box">L</span>
                        <span className="box">I</span>
                        <span className="box">O</span>
                    </h1>
                    <div className="hero-footer">
                        <span className="role">designer</span>
                        <span className="ampersand">&</span>
                        <span className="role">web</span>
                        <span className="role">developer</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

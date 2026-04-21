import { useLanguage } from '../../context/LanguageContext';
import { useContact } from '../../context/ContactContext';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaLink } from 'react-icons/fa';
import './About.css';
import profilePic from '../../assets/WhatsApp Image 2026-04-09 at 11.56.48 AM.jpeg';

function About() {
    const { t } = useLanguage();
    const contactInfo = useContact();

    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image-decoration animate-fadeIn">
                    <div className="profile-picture-box">
                        <img src={profilePic} alt="profile picture" className="profile-photo" />
                    </div>
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
                                en: "I am a Front-End Developer and Web Designer with a solid background in Visual Arts. Currently, I am deepening my knowledge in Software Applications Development to better bridge the gap between creative aesthetics and technical logic.",
                                es: "Soy Desarrollador Front-End y Diseñador Web con una sólida formación en Artes Visuales. Actualmente, estoy profundizando mis conocimientos en Desarrollo de Aplicaciones de Software para unir mejor la brecha entre la estética creativa y la lógica técnica."
                            })}
                        </p>
                        <p>
                            {t({
                                en: "Through my own entrepreneurship, I gained hands-on experience in e-commerce, visual identity, and strategy. My goal is to build digital solutions that are not only functional but visually meaningful. I'm ready to bring my technical toolkit and creative perspective to a professional team.",
                                es: "A través de mi propio emprendimiento, he ganado experiencia práctica en comercio electrónico, identidad visual y estrategia. Mi objetivo es construir soluciones digitales que no solo sean funcionales sino también visualmente significativas. Estoy listo para aportar mis herramientas técnicas y perspectiva creativa a un equipo profesional."
                            })}
                        </p>
                        <div className="about-contact-icons animate-fadeIn">
                            <a href={`mailto:${contactInfo.email}`} title={contactInfo.email} className="about-icon-sticker">
                                <FaEnvelope size={24} />
                            </a>
                            {contactInfo.socialLinks.map((link, index) => {
                                let Icon = FaLink;
                                if (link.name.toLowerCase().includes('github')) Icon = FaGithub;
                                if (link.name.toLowerCase().includes('linkedin')) Icon = FaLinkedin;
                                if (link.name.toLowerCase().includes('instagram')) Icon = FaInstagram;

                                return (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} className="about-icon-sticker">
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

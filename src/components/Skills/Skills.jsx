import { useLanguage } from '../../context/LanguageContext';
import './Skills.css';

function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: { en: 'Frontend Development', es: 'Desarrollo Frontend' },
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'User-centered Interfaces']
        },
        {
            title: { en: 'Design & Tools', es: 'Diseño y Herramientas' },
            skills: ['Figma', 'Prototyping', 'UI/UX Design', 'Visual Design', 'Wireframing']
        },
        {
            title: { en: 'Version Control & Others', es: 'Control de Versiones y Otros' },
            skills: ['Git', 'GitHub', 'npm', 'Vite', 'Team Collaboration']
        },
        {
            title: { en: 'Currently Learning', es: 'Aprendiendo Actualmente' },
            skills: ['TypeScript', 'Next.js', 'Node.js', 'Full Stack Development']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title-boxed">
                    <span className="box">s</span>
                    <span className="box">k</span>
                    <span className="box">i</span>
                    <span className="box">l</span>
                    <span className="box">l</span>
                    <span className="box">s</span>
                </div>

                <div className="skills-content-descriptive">
                    <div className="skill-item-descriptive">
                        <strong>{t({ en: 'Front-End Development: ', es: 'Desarrollo Front-End: ' })}</strong>
                        {t({
                            en: "HTML5, CSS3, JavaScript (ES6+), React.js, and Git/GitHub. Familiar with Responsive Design, CSS Flexbox/Grid, and currently expanding knowledge in TypeScript and Next.js.",
                            es: "HTML5, CSS3, JavaScript (ES6+), React.js y Git/GitHub. Familiarizada con Diseño Responsivo, CSS Flexbox/Grid, y actualmente expandiendo conocimientos en TypeScript y Next.js."
                        })}
                    </div>
                    <div className="skill-item-descriptive">
                        <strong>{t({ en: 'UI/UX Design: ', es: 'Diseño UI/UX: ' })}</strong>
                        {t({
                            en: "User-Centered Design (UCD), Wireframing, High-Fidelity Prototyping in Figma, Design Systems, and Information Architecture.",
                            es: "Diseño Centrado en el Usuario (UCD), Wireframing, Prototipado de Alta Fidelidad en Figma, Sistemas de Diseño y Arquitectura de la Información."
                        })}
                    </div>
                    <div className="skill-item-descriptive">
                        <strong>{t({ en: 'Design Tools: ', es: 'Herramientas de Diseño: ' })}</strong>
                        {t({
                            en: "Proficiency in Adobe Illustrator and Photoshop (self-taught), focused on the creation of digital assets, photo retouching, and vector design.",
                            es: "Competencia en Adobe Illustrator y Photoshop (autodidacta), enfocada en la creación de activos digitales, retoque fotográfico y diseño vectorial."
                        })}
                    </div>
                    <div className="skill-item-descriptive">
                        <strong>{t({ en: 'Design & Visual Arts: ', es: 'Diseño y Artes Visuales: ' })}</strong>
                        {t({
                            en: "Expertise in color theory, composition, and typography from a Bachelor's in Visual Arts. Experience in Printmaking and Printed Art applied to digital branding.",
                            es: "Experiencia en teoría del color, composición y tipografía por una Licenciatura en Artes Visuales. Experiencia en Grabado y Arte Impreso aplicado al branding digital."
                        })}
                    </div>
                    <div className="skill-item-descriptive">
                        <strong>{t({ en: 'E-commerce & Management: ', es: 'E-commerce y Gestión: ' })}</strong>
                        {t({
                            en: "Online store administration, stock control, and digital sales strategy. Proficient in managing Social Media and visual content creation for brand growth.",
                            es: "Administración de tiendas online, control de stock y estrategia de ventas digitales. Competente en gestión de Redes Sociales y creación de contenido visual para el crecimiento de marca."
                        })}
                    </div>
                </div>

                <div className="software-icons-box animate-fadeIn">
                    <div className="icons-container">
                        {/* Mock icons - replace with actual SVGs or components */}
                        <div className="icon-sticker">Figma</div>
                        <div className="icon-sticker">Ai</div>
                        <div className="icon-sticker">Ps</div>
                        <div className="icon-sticker">VS</div>
                        <div className="icon-sticker">Git</div>
                        <div className="icon-sticker">365</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

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
                <h2 className="section-title">
                    {t({ en: 'Skills & Technologies', es: 'Habilidades y Tecnologías' })}
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="category-title">{t(category.title)}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;

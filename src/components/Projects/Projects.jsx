import { useLanguage } from '../../context/LanguageContext';
import './Projects.css';

function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'Hostinger Platform',
            description: {
                en: 'Hostinger platform built with HTML5 and CSS3. Responsive design',
                es: 'Plataforma Hostinger construida con HTML5 y CSS3. Diseño responsivo'
            },
            tags: ['CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://noabarrionuevo.github.io/UTN-Primer-TP-Hostinger/',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger'
        },
        {
            title: 'Whatsapp Clone App',
            description: {
                en: 'Whatsapp clone app built with React, CSS3, HTML5 and Responsive Design. This was for a final project at UTN so it\'s not a full clone.',
                es: 'Aplicación clon de Whatsapp construida con React, CSS3, HTML5 y Diseño Responsivo. Este fue un proyecto final en la UTN, por lo que no es un clon completo.'
            },
            tags: ['React', 'CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://final-project-utn.vercel.app',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">
                    {t({ en: 'Projects', es: 'Proyectos' })} <span className="section-subtitle">({t({ en: 'Personal', es: 'Personales' })})</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{t(project.description)}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>{t({ en: 'Live Demo', es: 'Demo en Vivo' })}</span>
                                        <span className="link-arrow">→</span>
                                    </a>
                                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>GitHub</span>
                                        <span className="link-arrow">→</span>
                                    </a>
                                </div>
                            </div>

                            <div className="project-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

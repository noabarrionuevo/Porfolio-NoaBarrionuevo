import { useLanguage } from '../../context/LanguageContext';
import { useProjects } from '../../context/ProjectsContext';
import './Projects.css';

function Projects() {
    const { t } = useLanguage();
    const { projects } = useProjects();

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">
                    {t({ en: 'Projects', es: 'Proyectos' })} <span className="section-subtitle">({t({ en: 'Personal', es: 'Personales' })})</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
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

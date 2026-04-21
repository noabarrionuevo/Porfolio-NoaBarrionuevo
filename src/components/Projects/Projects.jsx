import { useLanguage } from '../../context/LanguageContext';
import { useProjects } from '../../context/ProjectsContext';
import './Projects.css';

function Projects() {
    const { t } = useLanguage();
    const { projects } = useProjects();

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title-boxed">
                    <span className="box">p</span>
                    <span className="box">o</span>
                    <span className="box">r</span>
                    <span className="box">t</span>
                    <span className="box">f</span>
                    <span className="box">o</span>
                    <span className="box">l</span>
                    <span className="box">i</span>
                    <span className="box">o</span>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp">
                            {project.image && (
                                <div className="project-image-box">
                                    <img src={project.image} alt={project.title} className="project-img" />
                                </div>
                            )}
                            <h3 className="project-title">{project.title.toLowerCase()}</h3>
                            <div className="project-info">
                                <p className="project-description">{t(project.description)}</p>
                                <div className="project-links">
                                    {project.demoLink && (
                                        <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            {t({ en: 'demo', es: 'demo' })}
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            github
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

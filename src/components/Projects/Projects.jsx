import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Hostinger Platform',
            description: 'Hostinger platform built with HTML5 and CSS3. Responsive design  ',
            tags: ['CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://noabarrionuevo.github.io/UTN-Primer-TP-Hostinger/',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger'
        },
        {
            title: 'Whatsapp Clone App',
            description: 'Whatsapp clone app built with React, CSS3, HTML5 and Responsive Design. This was for a final project at UTN so its not a full clone.',
            tags: ['React', 'CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://final-project-utn.vercel.app',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects <span className="section-subtitle">(Personal)</span></h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>Live Demo</span>
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

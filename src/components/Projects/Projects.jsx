import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform built with React, featuring product catalog, shopping cart, and checkout functionality.',
            tags: ['React', 'CSS3', 'REST API'],
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather application with location search, 5-day forecast, and beautiful data visualizations.',
            tags: ['React', 'API Integration', 'Responsive'],
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'Task Management App',
            description: 'Productivity app with drag-and-drop functionality, task categorization, and local storage persistence.',
            tags: ['React', 'JavaScript', 'LocalStorage'],
            demoLink: '#',
            githubLink: '#'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

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

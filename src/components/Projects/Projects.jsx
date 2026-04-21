import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useProjects } from '../../context/ProjectsContext';
import './Projects.css';

function Projects() {
    const { t } = useLanguage();
    const { projects } = useProjects();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

    const webProjects = projects.filter(p => p.category === 'web');
    const designProjects = projects.filter(p => p.category === 'design');

    const nextDesign = () => {
        setCurrentDesignIndex((prev) => (prev + 1) % designProjects.length);
    };

    const prevDesign = () => {
        setCurrentDesignIndex((prev) => (prev - 1 + designProjects.length) % designProjects.length);
    };

    return (
        <section id="PROJECTS" className="section projects">
            <div className="container">
                <div className="section-title-boxed">
                    {t({ en: 'Projects', es: 'Proyectos' }).split('').map((char, index) => (
                        char === ' ' ? (
                            <span key={index} className="box-space"></span>
                        ) : (
                            <span key={index} className="box">{char.toLowerCase()}</span>
                        )
                    ))}
                </div>

                {/* Web Projects Grid */}
                <div className="projects-grid">
                    {webProjects.map((project) => {
                        const isFeatured = project.id === 1 || project.id === 2;
                        return (
                            <div key={project.id} className={`project-card ${isFeatured ? 'project-card-featured' : ''} animate-fadeInUp`}>
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
                        );
                    })}
                </div>

                {/* Design Projects Carousel */}
                <div className="design-carousel-section">
                    <div className="carousel-container">
                        <button className="carousel-btn prev" onClick={prevDesign}>&lt;</button>
                        <div className="carousel-content">
                            {designProjects.length > 0 && (
                                <div className="carousel-item animate-fadeIn">
                                    <div className="carousel-image-wrapper" onClick={() => setSelectedImage(designProjects[currentDesignIndex].image)}>
                                        <img
                                            src={designProjects[currentDesignIndex].image}
                                            alt={designProjects[currentDesignIndex].title}
                                            className="carousel-img"
                                        />
                                        <div className="carousel-overlay">
                                            <span>{t({ en: 'Zoom', es: 'Ampliar' })}</span>
                                        </div>
                                    </div>
                                    <div className="carousel-text">
                                        <h3 className="carousel-project-title">{designProjects[currentDesignIndex].title}</h3>
                                        <p className="carousel-project-desc">{t(designProjects[currentDesignIndex].description)}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="carousel-btn next" onClick={nextDesign}>&gt;</button>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="enlarged mockup" className="modal-img" />
                        <button className="modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;

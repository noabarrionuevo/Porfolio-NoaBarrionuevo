import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useProjects } from '../../context/ProjectsContext';
import './Projects.css';

// Import design images
import PortfolioOne from '../../assets/PorfolioPictureOne.png';
import PortfolioTwo from '../../assets/PorfolioPictureTwo.png';
import PortfolioThree from '../../assets/PorfolioPictureThree.png';

function Projects() {
    const { t } = useLanguage();
    const { projects } = useProjects();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const designImages = [
        { src: PortfolioOne },
        { src: PortfolioTwo },
        { src: PortfolioThree }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % designImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + designImages.length) % designImages.length);
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title-boxed">
                    <span className="box">p</span>
                    <span className="box">r</span>
                    <span className="box">o</span>
                    <span className="box">j</span>
                    <span className="box">e</span>
                    <span className="box">c</span>
                    <span className="box">t</span>
                    <span className="box">s</span>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fadeInUp">

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

                <div className="design-carousel-section animate-fadeIn">

                    <div className="carousel-container glass">
                        <button className="carousel-btn prev" onClick={prevImage}>&lt;</button>
                        <div className="carousel-content">
                            <div className="carousel-image-wrapper" onClick={() => setSelectedImage(designImages[currentImageIndex].src)}>
                                <img
                                    src={designImages[currentImageIndex].src}
                                    alt="design"
                                    className="carousel-img"
                                />
                            </div>
                        </div>
                        <button className="carousel-btn next" onClick={nextImage}>&gt;</button>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="enlarged design" className="modal-img" />
                        <button className="modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;

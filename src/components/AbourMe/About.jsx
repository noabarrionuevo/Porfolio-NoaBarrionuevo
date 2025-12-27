import './About.css';

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-card glass animate-fadeInUp">
                        <div className="about-text">
                            <h3>Building Digital Experiences</h3>
                            <p>
                                I'm a passionate front-end developer with a keen eye for design and a love for creating
                                seamless user experiences. With expertise in React, JavaScript, and modern web technologies,
                                I transform ideas into beautiful, functional applications.
                            </p>
                            <p>
                                My approach combines technical excellence with creative problem-solving. I believe in
                                writing clean, maintainable code while never compromising on aesthetics and user experience.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new web technologies, contributing to
                                open-source projects, or staying up-to-date with the latest design trends.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number gradient-text">2+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">15+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">100%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

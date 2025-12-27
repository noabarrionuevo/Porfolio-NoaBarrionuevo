import './About.css';

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-card glass animate-fadeInUp">
                        <div className="about-text">
                            <h3>Dev. Front-End Junior | UX/UI Designer</h3>
                            <p>
                                I am noa barrionuevo a developer front-end junior and a UX/UI designer from argentina.At the moment I am learning all the necessary skills to become a full stack developer. I am passionate about creating user-friendly and visually appealing interfaces.
                            </p>
                            <p>
                                I am always looking for new challenges and opportunities to grow as a developer. I am also a team player and enjoy working with others to create innovative and engaging user experiences. I am a believer in the power of collaboration and the importance of continuous learning from others.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring the importance of the impact of my work on people's lives. I am passionate about creating user-friendly and visually appealing interfaces.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number gradient-text">2</div>
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

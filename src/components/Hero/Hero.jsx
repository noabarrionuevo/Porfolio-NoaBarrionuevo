import './Hero.css';

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text animate-fadeInUp">
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Noa Barrionuevo</span>
                    </h1>
                    <h2 className="hero-subtitle">Front-End Developer</h2>
                    <p className="hero-description">
                        I craft beautiful, responsive web experiences with React and modern JavaScript.
                        Passionate about clean code, stunning UI, and seamless user experiences.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="hero-scroll animate-pulse">
                    <div className="scroll-indicator">
                        <span>Scroll Down</span>
                        <div className="scroll-arrow">↓</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

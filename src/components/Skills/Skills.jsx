import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Tailwind CSS']
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'Vite', 'npm', 'Responsive Design', 'REST APIs', 'Figma']
        },
        {
            title: 'Currently Learning',
            skills: ['Next.js', 'Node.js', 'Three.js', 'GraphQL']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;

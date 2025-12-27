import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'User-centered Interfaces']
        },
        {
            title: 'Design & Tools',
            skills: ['Figma', 'Prototyping', 'UI/UX Design', 'Visual Design', 'Wireframing']
        },
        {
            title: 'Version Control & Others',
            skills: ['Git', 'GitHub', 'npm', 'Vite', 'Team Collaboration']
        },
        {
            title: 'Currently Learning',
            skills: ['TypeScript', 'Next.js', 'Node.js', 'Full Stack Development']
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

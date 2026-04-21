import { useLanguage } from '../../context/LanguageContext';
import './Education.css';

function Education() {
    const { t } = useLanguage();

    const education = [
        {
            institution: "UNICEN - Universidad Nacional del Centro de la Provincia de Buenos Aires",
            degree: {
                en: "Associate Degree in Software Applications Development - Present",
                es: "Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas - Presente"
            },
            faculty: {
                en: "Faculty of Exact Sciences",
                es: "Facultad de Ciencias Exactas"
            }
        },
        {
            institution: "UTN - Universidad Tecnológica Nacional",
            degree: {
                en: "Front End Developer & Diploma in Web UX/UI Development | 2025",
                es: "Desarrolladora Front End y Diplomatura en Desarrollo Web UX/UI | 2025"
            }
        }
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <div className="section-title-boxed">
                    <span className="box">e</span>
                    <span className="box">d</span>
                    <span className="box">u</span>
                    <span className="box">c</span>
                    <span className="box">a</span>
                    <span className="box">t</span>
                    <span className="box">i</span>
                    <span className="box">o</span>
                    <span className="box">n</span>
                </div>

                <div className="education-list">
                    {education.map((edu, index) => (
                        <div key={index} className="education-item animate-fadeInUp">
                            <h3 className="institution-name">{edu.institution}</h3>
                            <p className="degree-name">{t(edu.degree)}</p>
                            {edu.faculty && <p className="faculty-name">{t(edu.faculty)}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;

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
                es: "Desarrollador Front End y Diplomatura en Desarrollo Web UX/UI | 2025"
            }
        },
        {
            institution: "Escuela Secundaria Polivalente",
            degree: {
                en: "Bachelor in Visual Arts (Specialization in Printmaking) | 2017 – 2022",
                es: "Bachiller en Artes Visuales (Especialización en Grabado) | 2017 – 2022"
            }
        }
    ];

    return (
        <section id="EDUCATION" className="section education">
            <div className="container">
                <div className="section-title-boxed">
                    {t({ en: 'Education', es: 'Educación' }).split('').map((char, index) => (
                        char === ' ' ? (
                            <span key={index} className="box-space"></span>
                        ) : (
                            <span key={index} className="box">{char.toLowerCase()}</span>
                        )
                    ))}
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

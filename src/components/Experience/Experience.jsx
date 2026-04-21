import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            title: {
                en: "Visual Design & Production | Dirección de Políticas de Género y Diversidad Sexual",
                es: "Diseño Visual y Producción | Dirección de Políticas de Género y Diversidad Sexual"
            },
            period: "2025 - Present",
            description: {
                en: [
                    "Design and production of promotional materials and institutional stationery.",
                    "Management of end-to-end visual assets to support community outreach and diversity programs."
                ],
                es: [
                    "Diseño y producción de materiales promocionales y papelería institucional.",
                    "Gestión de activos visuales de extremo a extremo para apoyar programas de alcance comunitario y diversidad."
                ]
            }
        },
        {
            title: {
                en: "Founder & Lead Designer | [fuegotiene]",
                es: "Fundadora y Diseñadora Principal | [fuegotiene]"
            },
            period: "2022 - Present",
            description: {
                en: [
                    "Developed and managed a custom e-commerce platform with a focus on UX and visual branding.",
                    "Executed digital marketing and social media strategies to drive growth and brand visibility.",
                    "Coordinated logistics for regional fairs and physical sales events."
                ],
                es: [
                    "Desarrolló y gestionó una plataforma de comercio electrónico personalizada enfocada en UX y branding visual.",
                    "Ejecutó estrategias de marketing digital y redes sociales para impulsar el crecimiento y la visibilidad de la marca.",
                    "Coordinó la logística para ferias regionales y eventos de ventas físicas."
                ]
            }
        },
        {
            title: {
                en: "Co-Organizer | Cultural Event \"Manokami\"",
                es: "Co-Organizadora | Evento Cultural \"Manokami\""
            },
            period: "2025 - Present",
            description: {
                en: [
                    "Facilitated communication between exhibitors and organizers to ensure seamless execution.",
                    "Led digital promotion and community engagement strategies."
                ],
                es: [
                    "Facilitó la comunicación entre expositores y organizadores para asegurar una ejecución impecable.",
                    "Lideró estrategias de promoción digital y participación comunitaria."
                ]
            }
        }
    ];

    return (
        <section id="EXPERIENCE" className="section experience">
            <div className="container">
                <div className="section-title-boxed">
                    {t({ en: 'Experience', es: 'Experiencia' }).split('').map((char, index) => (
                        char === ' ' ? (
                            <span key={index} className="box-space"></span>
                        ) : (
                            <span key={index} className="box">{char.toLowerCase()}</span>
                        )
                    ))}
                </div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item animate-fadeInUp">
                            <h3 className="experience-item-title">{t(exp.title)}</h3>
                            <span className="experience-period">{exp.period}</span>
                            <ul className="experience-description">
                                {t(exp.description).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

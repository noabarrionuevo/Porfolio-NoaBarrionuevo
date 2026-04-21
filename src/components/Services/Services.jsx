import { useLanguage } from '../../context/LanguageContext';
import { FaLaptopCode, FaPalette, FaLayerGroup, FaGem, FaShareAlt, FaShoppingCart } from 'react-icons/fa';
import './Services.css';

function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'web-dev',
            icon: <FaLaptopCode />,
            title: {
                en: "Web Design & Development (Core)",
                es: "Desarrollo y Diseño Web (Core)"
            },
            items: {
                en: [
                    "Landing Page Design: High-conversion single-page sites for startups or events.",
                    "Front-end Development with React: Modern dynamic sites where technical logic respects visual design.",
                    "Maintenance & Optimization: Code cleanup, performance optimization, and mobile responsiveness."
                ],
                es: [
                    "Diseño de Landing Pages: Sitios de una sola página enfocados en conversiones para emprendimientos o eventos.",
                    "Desarrollo Front-end con React: Sitios dinámicos y modernos, asegurando que la lógica técnica respete fielmente el diseño visual.",
                    "Mantenimiento y Optimización: Mejora de sitios existentes (limpieza de código, optimización de carga y adaptabilidad móvil)."
                ]
            }
        },
        {
            id: 'ui-ux',
            icon: <FaPalette />,
            title: {
                en: "UI/UX & Prototyping",
                es: "UI/UX & Prototipado"
            },
            items: {
                en: [
                    "Interface Design (UI): High-fidelity mockups in Figma before coding.",
                    "User Experience Design (UX): Navigation analysis and wireframing for intuitive webs.",
                    "Web Redesign: Modernizing old sites under current usability standards."
                ],
                es: [
                    "Diseño de Interfaces (UI): Creación de maquetas de alta fidelidad en Figma antes de pasar al código.",
                    "Diseño de Experiencia de Usuario (UX): Análisis de navegación y creación de wireframes para que las webs sean intuitivas.",
                    "Rediseño Web: Tomar sitios antiguos y modernizarlos bajo estándares actuales de usabilidad."
                ]
            }
        },
        {
            id: 'branding',
            icon: <FaLayerGroup />,
            title: {
                en: "Visual Identity & Digital Branding",
                es: "Identidad Visual & Branding Digital"
            },
            items: {
                en: [
                    "Startup Identity Design: Logos, color palettes, and typography designed for digital environments.",
                    "Digital Asset Creation: Custom banners, iconography, and vector graphics for social media or websites."
                ],
                es: [
                    "Diseño de Identidad para Startups: Creación de logotipos, paletas de colores y tipografías pensadas específicamente para su aplicación en entornos digitales.",
                    "Creación de Activos Digitales: Diseño de banners, iconografía personalizada y elementos gráficos vectoriales para redes sociales o sitios web."
                ]
            }
        },
        {
            id: 'specialized',
            icon: <FaGem />,
            title: {
                en: "Specialized Services (The Edge)",
                es: "Servicios Especializados (Tu diferencial)"
            },
            items: {
                en: [
                    "Digital & Physical Merchandising: Designing graphics for both screen and print (stickers, engraving, etc.).",
                    "Aesthetic Consultancy for Developers: Helping devs achieve professional and coherent visual finishes."
                ],
                es: [
                    "Diseño de Merchandising Digital y Físico: Diseño de piezas gráficas que funcionen tanto en pantalla como en imprenta.",
                    "Consultoría Estética para Desarrolladores: Ayudar a otros programadores a que sus aplicaciones tengan un acabado visual profesional y coherente."
                ]
            }
        },
        {
            id: 'social-media',
            icon: <FaShareAlt />,
            title: {
                en: "Social Media & E-commerce Content",
                es: "Contenido para Redes & E-commerce"
            },
            items: {
                en: [
                    "Visual Content Strategy: Creating impactful graphics for Instagram, TikTok, and other platforms.",
                    "E-commerce Brand Management: Integrating visual identity into your social store.",
                    "Social Media Design: Coherent banners, posts, and stories that drive engagement."
                ],
                es: [
                    "Estrategia de Contenido Visual: Creación de gráficas impactantes para Instagram, TikTok y otras plataformas.",
                    "Gestión de Marca en E-commerce: Integración de la identidad visual en tu tienda social.",
                    "Diseño para Redes Sociales: Banners, posts e historias coherentes que impulsan el compromiso."
                ]
            }
        },
        {
            id: 'ecommerce-apps',
            icon: <FaShoppingCart />,
            title: {
                en: "E-commerce Sales Operations",
                es: "Operaciones de Venta E-commerce"
            },
            items: {
                en: [
                    "E-commerce App Management: Expert use of sales platforms (Shopify, Tiendanube, etc.).",
                    "Stock & Sales Logistics: Managing the technical side of online sales and inventory.",
                    "Digital Sales Strategy: Implementation of tools and workflows to optimize the sales funnel."
                ],
                es: [
                    "Manejo de Aplicaciones E-commerce: Uso experto de plataformas de venta (Shopify, Tiendanube, etc.).",
                    "Logística de Stock y Ventas: Gestión de la parte técnica de ventas online e inventarios.",
                    "Estrategia de Ventas Digitales: Implementación de herramientas y flujos de trabajo para optimizar el embudo de ventas."
                ]
            }
        }
    ];

    return (
        <section id="SERVICES" className="section services">
            <div className="container">
                <div className="section-title-boxed">
                    {t({ en: 'Services', es: 'Servicios' }).split('').map((char, index) => (
                        char === ' ' ? (
                            <span key={index} className="box-space"></span>
                        ) : (
                            <span key={index} className="box">{char.toLowerCase()}</span>
                        )
                    ))}
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card animate-fadeInUp">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{t(service.title)}</h3>
                            <ul className="service-items">
                                {t(service.items).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;

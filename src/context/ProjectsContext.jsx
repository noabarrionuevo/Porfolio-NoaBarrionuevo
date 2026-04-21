import { createContext, useContext } from 'react';
import { useLanguage } from './LanguageContext';

const ProjectsContext = createContext();

export const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }
    return context;
};

export const ProjectsProvider = ({ children }) => {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            category: 'web',
            title: 'Hostinger Platform',
            description: {
                en: 'Hostinger platform built with HTML5 and CSS3. Responsive design.',
                es: 'Plataforma Hostinger construida con HTML5 y CSS3. Diseño responsivo.'
            },
            tags: ['CSS3', 'HTML5', 'Responsive Design'],
            demoLink: 'https://noabarrionuevo.github.io/UTN-Primer-TP-Hostinger/',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger',
            image: ''
        },
        {
            id: 2,
            category: 'web',
            title: 'Whatsapp Clone App',
            description: {
                en: 'Whatsapp clone app built with React. Focus on responsiveness and UI fidelity.',
                es: 'Aplicación clon de Whatsapp construida con React. Enfoque en responsividad y fidelidad de UI.'
            },
            tags: ['React', 'CSS3', 'HTML5', 'Responsive Design'],
            demoLink: 'https://final-project-utn.vercel.app',
            githubLink: 'https://github.com/noabarrionuevo/whatsapp-clone',
            image: ''
        },
        {
            id: 3,
            category: 'design',
            title: 'Sticker Merchandising',
            description: {
                en: 'Custom sticker designs for digital branding and physical distribution.',
                es: 'Diseño de stickers personalizados para branding digital y distribución física.'
            },
            tags: ['Merchandising', 'Branding'],
            image: 'src/assets/Round Stickers Mockup, Front View.png'
        },
        {
            id: 4,
            category: 'design',
            title: 'Institutional Brochure',
            description: {
                en: 'Editorial design for health and identity rights awareness.',
                es: 'Diseño editorial para la concientización sobre derechos de salud e identidad.'
            },
            tags: ['Editorial', 'Social'],
            image: 'src/assets/folletoGnenro.png'
        },
        {
            id: 5,
            category: 'design',
            title: 'Sticker Merchandising',
            description: {
                en: 'Custom sticker designs for digital branding and physical distribution.',
                es: 'Diseño de stickers personalizados para branding digital y distribución física.'
            },
            tags: ['Merchandising', 'Branding'],
            image: 'src/assets/calcomaniasGenero.png'
        },
        {
            id: 6,
            category: 'design',
            title: 'Visual Arts Posters',
            description: {
                en: 'A series of artistic posters exploring composition and color theory.',
                es: 'Una serie de pósters artísticos explorando la composición y la teoría del color.'
            },
            tags: ['Art', 'Poster'],
            image: 'src/assets/Posterartistic.png'
        },
        {
            id: 7,
            category: 'design',
            title: 'Design posters for decoration',
            description: {
                en: 'Graphic series for decoration.',
                es: 'Serie gráfica para decoración.'
            },
            tags: ['Art', 'Poster'],
            image: 'src/assets/Posterartistic (1).png'
        },
        {
            id: 8,
            category: 'design',
            title: 'Informational & Promotional Posters',
            description: {
                en: 'Informational and promotional posters for diversity, gender, and inclusion events.',
                es: 'Materiales de información y promoción para campañas de diversidad, género e inclusión.'
            },
            tags: ['Event', 'Culture', 'Identity', 'Social', 'Informational'],
            image: 'src/assets/PosterGenero.png'
        },
        {
            id: 9,
            category: 'design',
            title: 'Card Design (Set 1)',
            description: {
                en: 'Creative card designs with dynamic falling elements.',
                es: 'Diseños creativos de tarjetas personales con elementos dinámicos.'
            },
            tags: ['Branding', 'Print', 'Design'],
            image: '/src/assets/Gift Cards Mockup Falling (4).png'
        },
        {
            id: 10,
            category: 'design',
            title: 'Card Design (Set 2)',
            description: {
                en: 'Premium card identity.',
                es: 'Identidad de tarjetas personales.'
            },
            tags: ['Branding', 'Print'],
            image: '/src/assets/Gift Cards Mockup Falling (5).png'
        },
        {
            id: 11,
            category: 'design',
            title: 'Sticker Merchandising',
            description: {
                en: 'Custom sticker designs for digital branding and physical distribution.',
                es: 'Diseño de stickers personalizados para branding digital y distribución física.'
            },
            tags: ['Merchandising', 'Branding'],
            image: 'src/assets/calcomaniasGenero.png'
        },
        {
            id: 12,
            category: 'design',
            title: 'Card Design Gender and Identity',
            description: {
                en: 'Informational posters for diversity, gender, and inclusion events.',
                es: 'Materiales de información y promoción para campañas de diversidad, género e inclusión.'
            },
            tags: ['Event', 'Culture', 'Identity', 'Social', 'Informational'],
            image: 'src/assets/Business Cards Mockup, Stacked  (1).png'
        },
        {
            id: 12,
            category: 'design',
            title: 'Card Design Gender and Identity',
            description: {
                en: 'Informational posters for diversity, gender, and inclusion events.',
                es: 'Materiales de información y promoción para campañas de diversidad, género e inclusión.'
            },
            tags: ['Event', 'Culture', 'Identity', 'Social', 'Informational'],
            image: 'src/assets/Business Cards Mockup, Stacked  (2).png'
        },
        {
            id: 13,
            category: 'design',
            title: 'Card Design Gender and Identity',
            description: {
                en: 'Informational posters for diversity, gender, and inclusion events.',
                es: 'Materiales de información y promoción para campañas de diversidad, género e inclusión.'
            },
            tags: ['Event', 'Culture', 'Identity', 'Social', 'Informational'],
            image: 'src/assets/Business Cards Mockup, Stacked .png'
        }
    ];

    const getProjects = () => {
        return projects.map(project => ({
            ...project,
            translatedDescription: t(project.description)
        }));
    };

    return (
        <ProjectsContext.Provider value={{ projects, getProjects }}>
            {children}
        </ProjectsContext.Provider>
    );
};

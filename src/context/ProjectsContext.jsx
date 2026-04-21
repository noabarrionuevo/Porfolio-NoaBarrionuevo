import { createContext, useContext } from 'react';
import { useLanguage } from './LanguageContext';

// Import Assets
import stickerMockup from '../assets/Round Stickers Mockup, Front View.png';
import brochure from '../assets/folletoGnenro.png';
import calcomanias from '../assets/calcomaniasGenero.png';
import posterArtistic1 from '../assets/Posterartistic.png';
import posterArtistic2 from '../assets/Posterartistic (1).png';
import posterGenero from '../assets/PosterGenero.png';
import giftCard4 from '../assets/Gift Cards Mockup Falling (4).png';
import giftCard5 from '../assets/Gift Cards Mockup Falling (5).png';
import businessCard1 from '../assets/Business Cards Mockup, Stacked  (1).png';
import businessCard2 from '../assets/Business Cards Mockup, Stacked  (2).png';
import businessCardStacked from '../assets/Business Cards Mockup, Stacked .png';

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
            image: stickerMockup
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
            image: brochure
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
            image: calcomanias
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
            image: posterArtistic1
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
            image: posterArtistic2
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
            image: posterGenero
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
            image: giftCard4
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
            image: giftCard5
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
            image: calcomanias
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
            image: businessCard1
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
            image: businessCard2
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
            image: businessCardStacked
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

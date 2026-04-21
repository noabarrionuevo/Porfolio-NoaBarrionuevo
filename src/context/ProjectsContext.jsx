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
            title: 'Hostinger Platform',
            description: {
                en: 'Hostinger platform built with HTML5 and CSS3. Responsive design',
                es: 'Plataforma Hostinger construida con HTML5 y CSS3. Diseño responsivo'
            },
            tags: ['CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://noabarrionuevo.github.io/UTN-Primer-TP-Hostinger/',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger',
            image: null
        },
        {
            id: 2,
            title: 'Whatsapp Clone App',
            description: {
                en: 'Whatsapp clone app built with React, CSS3, HTML5 and Responsive Design. This was for a final project at UTN so it\'s not a full clone.',
                es: 'Aplicación clon de Whatsapp construida con React, CSS3, HTML5 y Diseño Responsivo. Este fue un proyecto final en la UTN, por lo que no es un clon completo.'
            },
            tags: ['React', 'CSS3', 'HTML5', 'Responsive Design', 'Spanish'],
            demoLink: 'https://final-project-utn.vercel.app',
            githubLink: 'https://github.com/noabarrionuevo/UTN-Primer-TP-Hostinger',
            image: null
        },
        {
            id: 3,
            title: 'Posters Designs',
            description: {
                en: 'These posters were made for March 18th Transgender Day of Visibility.',
                es: 'Estos posters fueron hechos para el 18 de Marzo, Día de la Visibilidad Trans.'
            },
            tags: ['Visual Design', 'Poster', 'Diversity'],
            demoLink: null,
            githubLink: null,
            image: '/src/assets/poster1.png'
        },
        {
            id: 4,
            title: 'Brochure Designs',
            description: {
                en: 'This brochure was made for March 18th Transgender Day of Visibility.',
                es: 'Este folleto fue hecho para el 18 de Marzo, Día de la Visibilidad Trans.'
            },
            tags: ['Graphic Design', 'Brochure', 'Information'],
            demoLink: null,
            githubLink: null,
            image: '/src/assets/brochure.png'
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

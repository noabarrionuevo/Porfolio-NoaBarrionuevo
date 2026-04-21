import { createContext, useContext } from 'react';

const ContactContext = createContext();

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

export const ContactProvider = ({ children }) => {
    const contactInfo = {
        email: 'noabarrionuevo2005@gmail.com',
        location: {
            en: 'Made in Argentina',
            es: 'Hecho en Argentina'
        },
        socialLinks: [
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/noa-barrionuevo',
                icon: '💼'
            },
            {
                name: 'Portfolio',
                url: 'https://porfolio-noa-barrionuevo.vercel.app',
                icon: '🌐'
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com/tangivisu',
                icon: '📸'
            }
        ],
        emailJS: {
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
    };

    return (
        <ContactContext.Provider value={contactInfo}>
            {children}
        </ContactContext.Provider>
    );
};

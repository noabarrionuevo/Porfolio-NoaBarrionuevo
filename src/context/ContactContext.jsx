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
        email: 'barrionuevonoa2005@gmail.com',
        location: {
            en: 'Available for remote work',
            es: 'Disponible para trabajo remoto'
        },
        socialLinks: [
            {
                name: 'GitHub',
                url: 'https://github.com/noabarrionuevo',
                icon: '💻'
            },
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/noa-barrionuevo',
                icon: '💼'
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

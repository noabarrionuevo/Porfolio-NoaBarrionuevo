import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { useContact } from '../../context/ContactContext';
import './Contact.css';

function Contact() {
    const { t } = useLanguage();
    const contactInfo = useContact();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const serviceId = contactInfo.emailJS.serviceId;
            const templateId = contactInfo.emailJS.templateId;
            const publicKey = contactInfo.emailJS.publicKey;


            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS credentials not configured. Please check your .env file.');
            }


            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Noa Barrionuevo',
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setSubmitStatus({
                type: 'success',
                message: t({
                    en: 'Message sent successfully! I will respond soon.',
                    es: '¡Mensaje enviado con éxito! Te responderé pronto.'
                })
            });
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Error sending email:', error);

            let errorMessage = t({
                en: 'There was an error sending the message. ',
                es: 'Hubo un error al enviar el mensaje. '
            });

            if (error.message.includes('credentials not configured')) {
                errorMessage += t({
                    en: 'Please configure EmailJS credentials in the .env file',
                    es: 'Por favor, configura las credenciales de EmailJS en el archivo .env'
                });
            } else if (error.text) {
                errorMessage += error.text;
            } else {
                errorMessage += 'Por favor, intenta nuevamente o contáctame directamente por email.';
            }

            setSubmitStatus({
                type: 'error',
                message: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">{t({ en: 'Get In Touch', es: 'Ponte en Contacto' })}</h2>

                <div className="contact-content">
                    <div className="contact-info animate-fadeInUp">
                        <h3>{t({ en: "Let's Work Together", es: 'Trabajemos Juntos' })}</h3>
                        <p>
                            {t({
                                en: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
                                es: 'Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡no dudes en contactarme!'
                            })}
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div>
                                    <h4>Email</h4>
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div>
                                    <h4>{t(contactInfo.location)}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            {contactInfo.socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form glass animate-fadeInUp" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t({ en: 'Name', es: 'Nombre' })}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={t({ en: 'Your name', es: 'Tu nombre' })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={t({ en: 'your.email@example.com', es: 'tu.email@ejemplo.com' })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t({ en: 'Message', es: 'Mensaje' })}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder={t({ en: 'Your message...', es: 'Tu mensaje...' })}
                            ></textarea>
                        </div>

                        {submitStatus.message && (
                            <div className={`form-status ${submitStatus.type}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t({ en: 'Sending...', es: 'Enviando...' }) : t({ en: 'Send Message', es: 'Enviar Mensaje' })}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

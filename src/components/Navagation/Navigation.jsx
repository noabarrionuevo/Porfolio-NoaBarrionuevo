import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Navigation.css';

function Navigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Desktop View Brackets (Hidden on mobile) */}
        <span className="nav-bracket desktop-only">&lt;</span>
        
        {/* Mobile Toggle Button */}
        <button className="nav-toggle mobile-only" onClick={toggleMenu}>
          <span className="bracket-icon">&lt;</span>
          <span className="toggle-text">{isMenuOpen ? t({ en: 'CLOSE', es: 'CERRAR' }) : t({ en: 'MENU', es: 'MENÚ' })}</span>
          <span className="bracket-icon">/&gt;</span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollToSection('HOME')}>{t({ en: 'Home', es: 'Inicio' })}</a></li>
          <li><a onClick={() => scrollToSection('ABOUT')}>{t({ en: 'About', es: 'Sobre Mí' })}</a></li>
          <li><a onClick={() => scrollToSection('SKILLS')}>{t({ en: 'Skills', es: 'Habilidades' })}</a></li>
          <li><a onClick={() => scrollToSection('SERVICES')}>{t({ en: 'Services', es: 'Servicios' })}</a></li>
          <li><a onClick={() => scrollToSection('EXPERIENCE')}>{t({ en: 'Experience', es: 'Experiencia' })}</a></li>
          <li><a onClick={() => scrollToSection('EDUCATION')}>{t({ en: 'Education', es: 'Educación' })}</a></li>
          <li><a onClick={() => scrollToSection('PROJECTS')}>{t({ en: 'Projects', es: 'Proyectos' })}</a></li>
          <li><a onClick={() => scrollToSection('CONTACT')}>{t({ en: 'Contact', es: 'Contacto' })}</a></li>
        </ul>

        <span className="nav-bracket desktop-only">/&gt;</span>
      </div>
    </nav>
  );
}

export default Navigation;

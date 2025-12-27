import { useLanguage } from '../../context/LanguageContext';
import './Navigation.css';

function Navigation() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation glass">
      <div className="nav-container">
        <span className="nav-bracket">&lt;</span>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('home')}>{t({ en: 'Home', es: 'Inicio' })}</a></li>
          <li><a onClick={() => scrollToSection('about')}>{t({ en: 'About', es: 'Sobre Mí' })}</a></li>
          <li><a onClick={() => scrollToSection('skills')}>{t({ en: 'Skills', es: 'Habilidades' })}</a></li>
          <li><a onClick={() => scrollToSection('projects')}>{t({ en: 'Projects', es: 'Proyectos' })}</a></li>
          <li><a onClick={() => scrollToSection('contact')}>{t({ en: 'Contact', es: 'Contacto' })}</a></li>
        </ul>
        <span className="nav-bracket">/&gt;</span>
      </div>
    </nav>
  );
}

export default Navigation;

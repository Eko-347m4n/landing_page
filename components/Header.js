import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <a href="#" className="nav__logo">Eko</a>

        <div className={`nav__menu ${showMenu ? 'show' : ''} md:flex md:items-center md:static md:w-auto md:h-auto md:p-0 md:bg-transparent md:flex-grow md:justify-center`} id="nav-menu">
          <ul className="nav__list md:flex md:space-x-8">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={handleLinkClick}>About</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`} onClick={handleLinkClick}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#work" className={`nav__link ${activeSection === 'work' ? 'active-link' : ''}`} onClick={handleLinkClick}>Work</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="nav__toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>

          <div className="nav__toggle md:hidden" id="nav-toggle" onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}


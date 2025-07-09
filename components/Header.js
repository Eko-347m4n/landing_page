import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      // Header shadow on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section link
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 bg-backgroundLight dark:bg-slate-900/95 backdrop-blur-sm ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Eko-347m4n
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-300 ${
                    activeSection === link.label.toLowerCase()
                      ? 'text-sky-500 dark:text-sky-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none transition-colors duration-300"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <i className={`bx text-2xl ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              type="button"
              ref={toggleButtonRef}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 focus:outline-none"
              onClick={toggleMenu}
              aria-haspopup="true"
              aria-expanded={showMenu}
            >
              <i className={`bx text-2xl ${showMenu ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 right-0 bottom-16 bg-white dark:bg-slate-900 shadow-lg backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end px-6 py-4">
            <button
              aria-label="Close Menu"
              type="button"
              className="p-2 rounded-md text-slate-600 dark:text-slate-300"
              onClick={toggleMenu}
            >
              <i className="bx bx-x text-4xl"></i>
            </button>
        </div>
        <ul className="flex flex-col items-center justify-start h-full pt-20 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-2xl font-medium ${
                  activeSection === link.label.toLowerCase()
                    ? 'text-sky-500 dark:text-sky-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400'
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}


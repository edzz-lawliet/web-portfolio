import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Functional Header component with navigation state management
const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home', section: 'dashboard' },
    { path: '/projects', label: 'Projects', section: 'projects' },
    { path: '/about', label: 'About', section: 'about' },
    { path: '/contact', label: 'Contact', section: 'contact' }
  ];

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentSection = navItems.find(item => item.path === currentPath);
    setActiveSection(currentSection?.section || 'dashboard');
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle menu item click
  const handleMenuClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Smooth scroll to section (for single-page navigation)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo/Brand */}
          <Link to="/" className="nav-logo" onClick={() => handleMenuClick('dashboard')}>
            <span className="logo-text">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.section} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.section)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Theme Toggle */}
            <li className="nav-item theme-toggle-item">
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Controls */}
          <div className="nav-controls">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="theme-toggle mobile-theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="nav-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/Footer.css';

interface FooterProps {
  darkMode: boolean;
  socialLinks?: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  contactInfo?: {
    phone: string;
    email: string;
    location: string;
  };
}

// Functional Footer component with social links and responsive design
const Footer: React.FC<FooterProps> = ({ 
  darkMode, 
  socialLinks = {
    github: 'https://github.com/edzsagabaen',
    linkedin: 'https://linkedin.com/in/edzsagabaen',
    twitter: 'https://twitter.com/edzsagabaen',
    email: 'edz.sagabaen@example.com'
  },
  contactInfo = {
    phone: '+63 123 456 7890',
    email: 'edz.sagabaen@example.com',
    location: 'Munoz Nueva Ecija'
  }
}) => {
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  // Quick links for resources and information
  const quickLinks = [
    { label: 'Resume', href: '/resume.pdf', external: true },
    { label: 'Blog', href: 'https://blog.johndoe.com', external: true },
    { label: 'Privacy Policy', href: '/privacy', external: false },
    { label: 'Terms of Service', href: '/terms', external: false }
  ];

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand and Description */}
          <div className="footer-section brand-section">
            <div className="footer-brand">
              <h3>Edz Sagabaen</h3>
              <p className="footer-tagline">BSIT Student & Aspiring Developer</p>
            </div>
            <p className="footer-description">
              Currently pursuing my BSIT degree while building practical skills through 
              projects and continuous learning. Excited to contribute to innovative web solutions.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href={`mailto:${contactInfo.email}`} className="contact-link">
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href={`tel:${contactInfo.phone}`} className="contact-link">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">{contactInfo.location}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="footer-cta">
              Start a Project
            </Link>
          </div>
        </div>

        {/* Newsletter Signup (Optional) */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Subscribe to my newsletter for the latest updates on projects and tech insights.</p>
            <form className="newsletter-form" onSubmit={(e) => {
              e.preventDefault();
              // Handle newsletter signup
              console.log('Newsletter signup');
            }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Edz Sagabaen. Made with <FaHeart className="heart-icon" /> using React & TypeScript
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <span className="footer-status">
                <span className="status-indicator online"></span>
                Available for opportunities
              </span>
              
              {/* Scroll to Top Button */}
              <button 
                onClick={scrollToTop}
                className="scroll-to-top"
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="footer-pattern">
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
      </div>
    </footer>
  );
};

export default Footer;
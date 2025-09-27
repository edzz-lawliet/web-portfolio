import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/components/Dashboard.css';

interface DashboardState {
  typewriterText: string;
  currentIndex: number;
  isDeleting: boolean;
  isTyping: boolean;
  showCursor: boolean;
}

// Class component for Dashboard/Home with typewriter effect and animations
class Dashboard extends Component<{}, DashboardState> {
  private typewriterInterval?: NodeJS.Timeout;
  private cursorInterval?: NodeJS.Timeout;

  private typewriterPhrases = [
    'BSIT Student',
    'Aspiring Developer',
    'React Learner',
    'Tech Enthusiast',
    'Future Programmer'
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      typewriterText: '',
      currentIndex: 0,
      isDeleting: false,
      isTyping: false,
      showCursor: true
    };
  }

  componentDidMount() {
    this.startTypewriter();
    this.startCursorBlink();
  }

  componentWillUnmount() {
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  }

  // Typewriter effect implementation
  startTypewriter = () => {
    this.setState({ isTyping: true });
    this.typewriterInterval = setInterval(() => {
      const { typewriterText, currentIndex, isDeleting } = this.state;
      const currentPhrase = this.typewriterPhrases[currentIndex];

      if (isDeleting) {
        if (typewriterText.length > 0) {
          this.setState({
            typewriterText: typewriterText.slice(0, -1)
          });
        } else {
          this.setState({
            isDeleting: false,
            currentIndex: (currentIndex + 1) % this.typewriterPhrases.length
          });
        }
      } else {
        if (typewriterText.length < currentPhrase.length) {
          this.setState({
            typewriterText: currentPhrase.slice(0, typewriterText.length + 1)
          });
        } else {
          setTimeout(() => {
            this.setState({ isDeleting: true });
          }, 2000);
        }
      }
    }, this.state.isDeleting ? 50 : 100);
  };

  // Cursor blinking effect
  startCursorBlink = () => {
    this.cursorInterval = setInterval(() => {
      this.setState(prevState => ({
        showCursor: !prevState.showCursor
      }));
    }, 530);
  };

  // Smooth scroll to section
  scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle resume download
  handleResumeDownload = () => {
    // In a real application, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file to public folder
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  render() {
    const { typewriterText, showCursor } = this.state;

    return (
      <section className="dashboard">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Edz Sagabaen</span>
              </h1>
              <h2 className="hero-subtitle">
                I'm a{' '}
                <span className="typewriter">
                  {typewriterText}
                  <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                </span>
              </h2>
              <p className="hero-description">
                BSIT Student passionate about web development and technology. 
                Currently learning modern frameworks and building projects to showcase my growing skills 
                in React, TypeScript, and full-stack development.
              </p>
            </div>

            <div className="hero-actions">
              <button
                className="cta-button primary"
                onClick={() => this.scrollToSection('projects')}
              >
                View My Work
              </button>
              
              <button
                className="cta-button secondary"
                onClick={this.handleResumeDownload}
              >
                <FaDownload /> Download Resume
              </button>
            </div>

            <div className="social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <Link to="/contact" className="social-link" aria-label="Contact">
                <FaEnvelope />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-container">
              <div className="profile-image"></div>
              <div className="profile-ring"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <FaArrowDown className="scroll-arrow" />
        </div>

        {/* Quick Stats/Highlights */}
        <div className="hero-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
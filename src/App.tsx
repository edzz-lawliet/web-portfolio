import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/App.css';

// Main App component (functional) with routing and theme management
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(prefersDark);
    }
    
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <ScrollToTop />
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer darkMode={darkMode} />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

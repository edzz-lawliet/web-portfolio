import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes, FaFilter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import '../styles/components/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

interface ProjectsProps {
  // Props can be passed from parent component if needed
}

// Functional Projects component with filtering and modal functionality
const Projects: React.FC<ProjectsProps> = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Get unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, searchQuery]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle project selection for modal
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading Projects...</p>
      </div>
    );
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>A showcase of my recent work and personal projects</p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="projects-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="clear-search">
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="filter-group">
            <FaFilter className="filter-icon" />
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Count */}
        <div className="projects-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="project-card"
                onClick={() => handleProjectClick(project)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-body">
                <div className="modal-header">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                </div>

                <p className="modal-description">{selectedProject.fullDescription}</p>

                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn primary"
                  >
                    <FaExternalLinkAlt /> View Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn secondary"
                  >
                    <FaGithub /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
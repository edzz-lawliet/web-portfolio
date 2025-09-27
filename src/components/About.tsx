import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaDownload, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/components/About.css';

interface AboutProps {
  // Props for personal information - can be passed from parent
  personalInfo?: {
    name: string;
    title: string;
    location: string;
    bio: string;
  };
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface TimelineItem {
  id: number;
  type: 'education' | 'experience' | 'achievement';
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string[];
  skills?: string[];
}

// Functional About component with timeline and skills sections
const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const [activeTab, setActiveTab] = useState<string>('story');
  const [visibleSkills, setVisibleSkills] = useState<boolean>(false);

  // Default personal information
  const defaultPersonalInfo = {
    name: "Edz Sagabaen",
    title: "BSIT Student & Aspiring Developer",
    location: "Munoz Nueva Ecija",
    bio: "I'm a passionate BSIT student with a strong interest in web development and software engineering. Currently expanding my knowledge in modern technologies while building practical projects to apply what I learn."
  };

  const currentPersonalInfo = personalInfo || defaultPersonalInfo;

  // Skills data with progress levels
  const skills: Skill[] = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "CSS/SCSS", level: 88, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Express", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "PostgreSQL", level: 78, category: "Database" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 72, category: "Tools" },
    { name: "AWS", level: 68, category: "Cloud" },
    { name: "Firebase", level: 80, category: "Cloud" }
  ];

  // Timeline data for education, experience, and achievements
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'experience',
      title: 'Senior Frontend Developer',
      subtitle: 'TechCorp Solutions',
      location: 'Munoz Nueva Ecija',
      date: '2022 - Present',
      description: [
        'Led development of responsive web applications using React and TypeScript',
        'Implemented automated testing strategies, improving code coverage by 40%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with UX/UI teams to enhance user experience'
      ],
      skills: ['React', 'TypeScript', 'Jest', 'Redux', 'SCSS']
    },
    {
      id: 2,
      type: 'experience',
      title: 'Full Stack Developer',
      subtitle: 'StartupXYZ',
      location: 'Remote',
      date: '2021 - 2022',
      description: [
        'Developed and maintained multiple client projects using MERN stack',
        'Built RESTful APIs and integrated third-party services',
        'Optimized application performance and database queries',
        'Participated in agile development processes and sprint planning'
      ],
      skills: ['Node.js', 'MongoDB', 'Express', 'React', 'AWS']
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      date: '2017 - 2021',
      description: [
        'Graduated Magna Cum Laude with GPA 3.8/4.0',
        'Specialized in Software Engineering and Web Development',
        'Active member of Computer Science Student Association',
        'Completed senior capstone project on machine learning applications'
      ],
      skills: ['Java', 'Python', 'Data Structures', 'Algorithms', 'Machine Learning']
    },
    {
      id: 4,
      type: 'achievement',
      title: 'AWS Certified Developer',
      subtitle: 'Amazon Web Services',
      location: 'Online',
      date: '2022',
      description: [
        'Achieved AWS Certified Developer - Associate certification',
        'Demonstrated expertise in developing and maintaining AWS applications',
        'Proficient in AWS services including EC2, S3, Lambda, and RDS'
      ]
    },
    {
      id: 5,
      type: 'experience',
      title: 'Frontend Developer Intern',
      subtitle: 'WebDev Agency',
      location: 'Munoz Nueva Ecija',
      date: '2020 - 2021',
      description: [
        'Developed responsive websites for various clients',
        'Learned modern web development best practices',
        'Worked with senior developers on large-scale projects',
        'Gained experience with version control and deployment processes'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress']
    }
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Trigger skill animations when component is in view
  useEffect(() => {
    const timer = setTimeout(() => setVisibleSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Get icon for timeline item type
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <FaGraduationCap />;
      case 'experience':
        return <FaBriefcase />;
      case 'achievement':
        return <FaAward />;
      default:
        return <FaBriefcase />;
    }
  };

  // Tab content configuration
  const tabs = [
    { id: 'story', label: 'My Story', icon: '👋' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'skills', label: 'Skills', icon: '🚀' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know more about my background, skills, and journey</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="tab-navigation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* My Story Tab */}
          {activeTab === 'story' && (
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="story-grid">
                <div className="story-text">
                  <h3>Hello! I'm {currentPersonalInfo.name}</h3>
                  <div className="personal-info">
                    <div className="info-item">
                      <FaMapMarkerAlt />
                      <span>{currentPersonalInfo.location}</span>
                    </div>
                    <div className="info-item">
                      <FaBriefcase />
                      <span>{currentPersonalInfo.title}</span>
                    </div>
                  </div>
                  <p className="bio">{currentPersonalInfo.bio}</p>
                  
                  <div className="story-details">
                    <p>
                      My journey in web development started during my college years when I discovered 
                      the power of creating interactive experiences that could reach millions of people. 
                      Since then, I've been dedicated to mastering both frontend and backend technologies 
                      to build comprehensive solutions.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and staying up-to-date with the latest 
                      industry trends. When I'm not coding, you can find me exploring new technologies, 
                      contributing to open source projects, or sharing my knowledge through blog posts 
                      and mentoring.
                    </p>
                  </div>

                  <div className="story-stats">
                    <div className="stat">
                      <h4>50+</h4>
                      <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                      <h4>3+</h4>
                      <p>Years of Experience</p>
                    </div>
                    <div className="stat">
                      <h4>25+</h4>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <button className="download-cv-btn">
                    <FaDownload />
                    Download Resume
                  </button>
                </div>

                <div className="story-visual">
                  <div className="profile-card">
                    <div className="profile-image-large"></div>
                    <div className="profile-info">
                      <h4>{currentPersonalInfo.name}</h4>
                      <p>{currentPersonalInfo.title}</p>
                      <div className="profile-stats">
                        <span>Available for opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <motion.div 
              className="timeline-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline">
                {timelineData.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className={`timeline-item ${item.type}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-marker">
                      {getTimelineIcon(item.type)}
                    </div>
                    <div className="timeline-content-item">
                      <div className="timeline-header">
                        <h4>{item.title}</h4>
                        <div className="timeline-meta">
                          <span className="timeline-date">
                            <FaCalendarAlt /> {item.date}
                          </span>
                          <span className="timeline-location">
                            <FaMapMarkerAlt /> {item.location}
                          </span>
                        </div>
                      </div>
                      <h5 className="timeline-subtitle">{item.subtitle}</h5>
                      <ul className="timeline-description">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      {item.skills && (
                        <div className="timeline-skills">
                          {item.skills.map(skill => (
                            <span key={skill} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div 
              className="skills-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skills-grid">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <motion.div 
                    key={category}
                    className="skill-category"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="category-title">{category}</h4>
                    <div className="skills-list">
                      {categorySkills.map((skill, index) => (
                        <div key={skill.name} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div 
                              className="skill-progress"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: visibleSkills ? `${skill.level}%` : 0 
                              }}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
// Sample projects data
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    fullDescription: "Built a comprehensive e-commerce platform from scratch using React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory management. Implemented responsive design and optimized for performance.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
    category: "Full Stack",
    image: "/api/placeholder/600/400",
    demoUrl: "https://demo-ecommerce.netlify.app",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for product and order management",
      "Responsive design for all devices",
      "RESTful API with proper error handling"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    fullDescription: "Developed a modern task management application inspired by Trello and Asana. Built with React and Firebase, featuring real-time collaboration, drag-and-drop functionality, team workspaces, and progress tracking. Implemented user roles, notifications, and data visualization for project insights.",
    technologies: ["React", "Firebase", "Material-UI", "React DnD", "Chart.js"],
    category: "Frontend",
    image: "/api/placeholder/600/400",
    demoUrl: "https://taskmaster-app.netlify.app",
    githubUrl: "https://github.com/johndoe/task-management",
    features: [
      "Real-time collaboration with Firebase",
      "Drag-and-drop task organization",
      "Team workspaces and project boards",
      "User roles and permissions",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Email notifications",
      "Dark mode support"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    fullDescription: "Created a comprehensive weather dashboard using React and multiple weather APIs. Features include current weather conditions, 7-day forecasts, interactive maps, weather alerts, and location-based services. Implemented geolocation, data visualization with charts, and offline capabilities with service workers.",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "PWA"],
    category: "Frontend",
    image: "/api/placeholder/600/400",
    demoUrl: "https://weather-dashboard-pro.netlify.app",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    features: [
      "Current weather and 7-day forecasts",
      "Interactive weather maps",
      "Location-based weather data",
      "Weather alerts and notifications",
      "Historical weather data visualization",
      "Offline functionality (PWA)",
      "Multiple location tracking",
      "Customizable units and themes"
    ]
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for a social media platform with authentication and real-time messaging.",
    fullDescription: "Designed and developed a robust RESTful API for a social media platform using Node.js, Express, and PostgreSQL. Implemented JWT authentication, real-time messaging with Socket.io, file uploads, and comprehensive API documentation. Features include user profiles, posts, comments, likes, and friend connections.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Multer"],
    category: "Backend",
    image: "/api/placeholder/600/400",
    demoUrl: "https://social-api-docs.herokuapp.com",
    githubUrl: "https://github.com/johndoe/social-media-api",
    features: [
      "JWT-based authentication system",
      "User profiles and account management",
      "Post creation, editing, and deletion",
      "Comment and like functionality",
      "Real-time messaging with Socket.io",
      "Friend requests and connections",
      "File upload for images and videos",
      "Comprehensive API documentation",
      "Rate limiting and security measures"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and modern design principles.",
    fullDescription: "Designed and developed a modern, responsive portfolio website using React and TypeScript. Features include smooth animations with Framer Motion, dark/light theme toggle, contact form with email integration, and optimized performance. Implemented SEO best practices and accessibility standards.",
    technologies: ["React", "TypeScript", "Framer Motion", "CSS3", "EmailJS"],
    category: "Frontend",
    image: "/api/placeholder/600/400",
    demoUrl: "https://johndoe-portfolio.netlify.app",
    githubUrl: "https://github.com/johndoe/portfolio-website",
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Dark/light theme toggle",
      "Interactive project showcase",
      "Contact form with email integration",
      "SEO optimization",
      "Accessibility compliance",
      "Performance optimization"
    ]
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "A decentralized voting application built on Ethereum blockchain.",
    fullDescription: "Developed a secure, transparent voting system using Ethereum blockchain and smart contracts. Built with Solidity for smart contracts and React for the frontend. Ensures vote integrity, transparency, and anonymity while preventing double voting and tampering.",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "MetaMask", "Truffle"],
    category: "Blockchain",
    image: "/api/placeholder/600/400",
    demoUrl: "https://blockchain-voting.netlify.app",
    githubUrl: "https://github.com/johndoe/blockchain-voting",
    features: [
      "Smart contract-based voting logic",
      "MetaMask integration for authentication",
      "Transparent and immutable vote records",
      "Real-time vote counting",
      "Candidate registration system",
      "Vote verification mechanism",
      "Mobile-responsive interface",
      "Gas-optimized smart contracts"
    ]
  },
  {
    id: 7,
    title: "Machine Learning API",
    description: "A Python-based API for image classification using deep learning models.",
    fullDescription: "Built a machine learning API using Python, FastAPI, and TensorFlow for image classification tasks. Deployed on AWS with Docker containers, featuring model versioning, batch processing, and real-time predictions. Includes comprehensive monitoring and logging systems.",
    technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "AWS", "Redis"],
    category: "Machine Learning",
    image: "/api/placeholder/600/400",
    demoUrl: "https://ml-api-demo.herokuapp.com",
    githubUrl: "https://github.com/johndoe/ml-classification-api",
    features: [
      "Image classification with CNN models",
      "Real-time and batch prediction endpoints",
      "Model versioning and A/B testing",
      "Redis caching for improved performance",
      "Comprehensive API documentation",
      "Docker containerization",
      "AWS deployment with auto-scaling",
      "Monitoring and logging with CloudWatch"
    ]
  },
  {
    id: 8,
    title: "Mobile Expense Tracker",
    description: "A React Native app for tracking personal expenses with data visualization.",
    fullDescription: "Developed a comprehensive expense tracking mobile application using React Native and Firebase. Features include expense categorization, budget setting, data visualization with charts, receipt scanning with OCR, and cloud synchronization across devices.",
    technologies: ["React Native", "Firebase", "React Navigation", "Victory Charts", "OCR"],
    category: "Mobile",
    image: "/api/placeholder/600/400",
    demoUrl: "https://expo.dev/@johndoe/expense-tracker",
    githubUrl: "https://github.com/johndoe/expense-tracker-mobile",
    features: [
      "Expense categorization and tagging",
      "Budget setting and tracking",
      "Data visualization with charts",
      "Receipt scanning with OCR",
      "Cloud synchronization",
      "Biometric authentication",
      "Export data to CSV/PDF",
      "Spending insights and analytics"
    ]
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Helper function to search projects
export const searchProjects = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return projectsData.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  );
};
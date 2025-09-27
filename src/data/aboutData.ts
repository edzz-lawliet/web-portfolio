/**
 * Personal information andexport const personalInfo: PersonalInfo = {
  name: "Edz Sagabaen",
  role: "BSIT Student & Web Developer",
  bio: "Passionate BSIT student with a strong foundation in programming and web development. Currently pursuing my degree while gaining hands-on experience through personal projects and continuous learning.",tent for the About section
 */

export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  resume: string;
}

export const personalInfo: PersonalInfo = {
  name: "Edz Sagabaen",
  role: "Full-Stack Developer",
  bio: "Passionate full-stack developer with 5+ years of experience creating modern, scalable web applications. I love turning complex problems into simple, beautiful solutions through clean code and thoughtful design.",
  email: "edz.sagabaen@example.com",
  phone: "+63 123 456 7890",
  location: "Muñoz, Nueva Ecija",
  website: "https://edzsagabaen.dev",
  resume: "/assets/documents/john-doe-resume.pdf"
};

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Bachelor of Science in Information Technology",
    subtitle: "University Name",
    date: "2022 - Present",
    location: "Munoz Nueva Ecija",
    description: "Currently pursuing BSIT degree with focus on software development, database management, and web technologies. Maintaining high academic standing while gaining practical experience through projects.",
    skills: ["Programming Fundamentals", "Database Design", "Web Development", "Software Engineering"],
    icon: "🎓"
  },
  {
    id: 2,
    title: "Student Web Developer",
    subtitle: "Personal Projects",
    date: "2023 - Present",
    location: "Remote",
    description: "Building small websites and web applications as learning projects. Developing skills in modern frameworks and best practices through hands-on experience.",
    skills: ["React", "TypeScript", "CSS", "JavaScript", "Git"],
    icon: "🚀"
  },
  {
    id: 3,
    title: "Web Development Course",
    subtitle: "Online Learning Platform",
    date: "2023",
    location: "Online",
    description: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React. Built several projects to apply learning and develop portfolio.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    icon: "💻"
  },
  {
    id: 4,
    title: "High School Diploma",
    subtitle: "Local High School",
    date: "2018 - 2022",
    location: "Munoz Nueva Ecija",
    description: "Graduated with honors and discovered passion for technology and programming. Participated in computer science club and coding competitions.",
    skills: ["Basic Programming", "Problem Solving", "Mathematics", "Computer Literacy"],
    icon: "�"
  },
  {
    id: 5,
    title: "First Programming Experience",
    subtitle: "Self-Learning",
    date: "2021",
    location: "Home",
    description: "Started learning programming through online tutorials and courses. Built first simple websites and discovered love for web development.",
    skills: ["HTML", "CSS", "Basic JavaScript", "Problem Solving"],
    icon: "🔧"
  }
];

export const skillsData: Skill[] = [
  // Frontend Technologies
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML5", level: 98, category: "Frontend" },
  { name: "CSS3", level: 92, category: "Frontend" },
  { name: "Vue.js", level: 85, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "React Native", level: 80, category: "Frontend" },
  
  // Backend Technologies
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 88, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "GraphQL", level: 78, category: "Backend" },
  { name: "REST APIs", level: 92, category: "Backend" },
  { name: "Firebase", level: 80, category: "Backend" },
  
  // Tools & Technologies
  { name: "Git", level: 95, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "AWS", level: 70, category: "Tools" },
  { name: "Webpack", level: 82, category: "Tools" },
  { name: "Jest", level: 85, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" }
];

export const getSkillsByCategory = (category: string): Skill[] => {
  return skillsData.filter(skill => skill.category === category);
};

export const getSkillCategories = (): string[] => {
  return Array.from(new Set(skillsData.map(skill => skill.category)));
};

export const personalStats = {
  projectsCompleted: 50,
  yearsExperience: 5,
  clientsSatisfied: 25,
  cupsOfCoffee: 1000
};

export const personalStory = {
  introduction: "Hello! I'm Edz, a passionate BSIT student based in Munoz Nueva Ecija. I love creating digital experiences that are not only functional but also beautiful and user-friendly.",
  background: "My journey in web development started during my IT studies. What began as curiosity about how websites work has evolved into a passion for building modern web applications, and I'm constantly learning new technologies and frameworks.",
  philosophy: "I believe that great software is built with empathy - understanding the needs of users, the constraints of business, and the capabilities of technology. I strive to write clean, maintainable code and create solutions that scale gracefully.",
  interests: "When I'm not coding, you can find me exploring new technologies, working on personal projects, or studying for my IT courses. I'm also passionate about learning from the developer community and sharing knowledge with fellow students.",
  currentFocus: "Currently, I'm focused on mastering React.js and full-stack development, exploring modern web technologies, and building a strong foundation in software engineering principles while completing my BSIT degree."
};

export type Personal = {
  name: string;
  shortName: string;
  title: string;
  location: string;
  intro: string;
  email: string;
  phone: string;
  profileImage: string;
};

export type Education = {
  institution: string;
  degree: string;
  year: string;
};

export type About = {
  description: string;
  education: Education;
  interests: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number;
};

export type Social = {
  name: string;
  url: string;
  icon: string;
};

export type PortfolioData = {
  personal: Personal;
  about: About;
  projects: Project[];
  skills: Skill[];
  social: Social[];
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ratnasothy Hariram",
    shortName: "Hari",
    title: "Software Developer",
    location: "Jaffna, Sri Lanka",
    intro:
      "Hi, I'm Ratnasothy Hariram, a web & software developer passionate about creating efficient and user-friendly web applications.",
    email: "rs11hari@gmail.com",
    phone: "+94 XX XXX XXXX",
    profileImage: "./assets/hany.JPG",
  },

  about: {
    description:
      "I'm a passionate software developer from Jaffna, Sri Lanka, with a strong foundation in web development and software engineering. I love building applications that solve real-world problems and enhance user experiences.",
    education: {
      institution: "University of Colombo School of Computing",
      degree: "Bachelor of Information Technology",
      year: "2022 - 2025",
    },
    interests: [
      "Building scalable web applications with React.js",
      "Backend development using Laravel and PHP",
      "Database design and optimization",
      "Learning new technologies and frameworks",
      "Contributing to open-source projects",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Motor Traffic Violation Fine Management System",
      description:
        "A comprehensive web application for managing traffic violations and fines. Features include violation recording, fine calculation, payment processing, and report generation.",
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with product catalog, shopping cart, payment integration, and order management system.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Task Management Application",
      description:
        "A productivity tool for managing tasks and projects with real-time collaboration features, deadline tracking, and team communication.",
      techStack: ["React.js", "TypeScript", "Firebase", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Weather Forecast Dashboard",
      description:
        "An interactive weather application providing real-time weather data, forecasts, and historical weather patterns using external APIs.",
      techStack: ["React.js", "JavaScript", "OpenWeather API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
  ],

  skills: [
    { name: "HTML", icon: "Code2", level: 90 },
    { name: "CSS", icon: "Palette", level: 85 },
    { name: "JavaScript", icon: "FileJson", level: 88 },
    { name: "TypeScript", icon: "FileCode", level: 80 },
    { name: "PHP", icon: "Code", level: 85 },
    { name: "MySQL", icon: "Database", level: 82 },
    { name: "React.js", icon: "Atom", level: 90 },
    { name: "Java", icon: "Coffee", level: 75 },
    { name: "Spring Boot", icon: "Leaf", level: 70 },
    { name: "Git", icon: "GitBranch", level: 85 },
  ],

  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  ],
};

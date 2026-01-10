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

export type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

export type About = {
  description: string;
  education: Education;
  experience: Experience[];
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
    profileImage: "/hany.JPG",
  },

  about: {
    description:
      "I'm a passionate software developer from Jaffna, Sri Lanka, with a strong foundation in web development and software engineering. I love building applications that solve real-world problems and enhance user experiences.",
    education: {
      institution: "University of Colombo School of Computing",
      degree: "Bachelor of Information Technology",
      year: "2022 - 2025",
    },
    experience: [
      {
        title: "Software Engineering Trainee",
        company: "Samuel Gnanam IT Centre",
        location: "Jaffna",
        duration: "09/2025 – Present",
        responsibilities: [
          "Worked as part of a team-based training program to develop a Hotel Management System, with individual responsibility for assigned backend modules using Spring Boot",
          "Designed and implemented RESTful APIs and business logic for Hotel management",
          "Implemented data persistence using Spring Data JPA and Hibernate for efficient database operations",
          "Developed and maintained relational database schemas (MySQL)",
          "Integrated backend APIs with frontend components and ensured smooth processes",
          "Used Git and GitHub for version control, collaboration, and pull request management",
          "Performed API testing and debugging using Postman, and participated in code reviews to improve code quality and reliability",
        ],
      },
    ],
    interests: [
      "Building scalable web applications with React with TypeScript",
      "Backend development using Springboot",
      "RestApi development and integration",
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
      techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "JQuery"],
      image: "/traffic.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "ATM Dashboard and Management System",
      description:
        "A full-featured ATM management system that allows users to monitor ATM status, transaction history, and cash levels.",
      techStack: ["React.js", "TypeScript", "Springboot", "MySQL"],
      image: "/atm.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Dashboard Editor",
      description:
        "A React.js-based dashboard editor that lets users edit the header, body, and footer inline. Changes are applied instantly without a page refresh (live preview), supporting drag-and-drop widgets and real-time state updates for a seamless editing experience.",
      techStack: ["React.js"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Hotel Management System",
      description:
        "Ongoing development of a Hotel Management System using Spring Boot.",
      techStack: ["Spring Boot", "React", "MySQL"],
      image: "hms.jpg",
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
    { name: "GitHub", url: "https://github.com/hany11-11", icon: "Github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hany02/",
      icon: "Linkedin",
    },
    { name: "Twitter", url: "https://x.com/ItsHany_X", icon: "Twitter" },
  ],
};

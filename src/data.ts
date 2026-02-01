export const portfolioData = {
  personal: {
    name: "Ratnasothy Hariram",
    shortName: "HariRam",
    title: "Software Developer",
    location: "Jaffna, Sri Lanka",
    intro: "I'm a software developer passionate about creating efficient and user-friendly web applications with modern technologies.",
    email: "rs11hari@gmail.com",
    phone: "+94 77 133 9016",
    profileImage: "/hany.JPG", // I should check if this exists or use a placeholder
  },
  experience: [
    {
      role: "Software Engineering Trainee",
      company: "Samuel Gnanam IT Centre - Jaffna",
      period: "Sept 2025 – Present",
      description: "Developing a robust Hotel Management System using Spring Boot, focusing on backend modules and RESTful API design.",
    }
  ],
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "University of Colombo School of Computing",
      period: "2022 - 2025",
    }
  ],
  projects: [
    {
      title: "Motor Traffic Violation Fine System",
      description: "Comprehensive web application for managing traffic violations with fine calculation and payment processing.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      link: "#",
      image: "/traffic.png"
    },
    {
      title: "ATM Dashboard & Management",
      description: "Real-time monitoring of machine status, transaction logs, and cash management.",
      tech: ["React.js", "TypeScript", "Spring Boot", "MySQL"],
      link: "#",
      image: "/atm.jpg"
    },
    {
      title: "Dashboard Editor",
      description: "A React.js-based dashboard editor that lets users edit the header, body, and footer inline. Changes are applied instantly without a page refresh (live preview)",
      tech: ["React.js"],
      link: "#",
      image: "dashboard.png"
    },
    {
      title: "Hotel Management System",
      description: "Enterprise-grade solution for bookings, rooms, and guest services.",
      tech: ["React.js", "TypeScript", "Spring Boot", "MySQL"],
      link: "#",
      image: "/hms.jpg"
    }   
  ],
  skills: [
    { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Java", "Spring Boot", "PHP", "Node.js"] },
    { category: "Database", items: ["MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Postman", "Swagger"] }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/hany11-11" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hany02/" },
    { name: "Twitter", url: "https://x.com/ItsHany_X" }
  ]
};

import { allProjects, liveProjects } from './projectsData';
export { allProjects, liveProjects };


export const personalInfo = {
  name: "Jasir Ali Khan",
  title: "Junior Full Stack MERN Developer",
  roleSub: "React.js • Next.js • Node.js • AI Integration • Enterprise Solutions",
  location: "Karachi, Pakistan",
  phone: "0314-2054035",
  email: "jasirali661@gmail.com",
  github: "https://github.com/Jasir-ali90",
  portfolioUrl: "https://jasir-portfolio.netlify.app",
  summary: "Junior Full Stack MERN Developer at SMUFTECH with 1+ year industry experience and successful freelance production deliveries. Proficient in engineering scalable React/Next.js frontends, resilient Node/Express backends, MongoDB schemas, JWT authentication, and AI integrations."
};

export const stats = [
  { value: "18+", label: "Total Projects" },
  { value: "3+", label: "Live Client & Brand Sites" },
  { value: "1+ Yr", label: "Professional Experience" },
  { value: "100%", label: "Job Success & Polish" }
];

export const skills = {
  frontend: [
    { name: "React.js", highlight: true },
    { name: "Next.js", highlight: true },
    { name: "JavaScript (ES6+)", highlight: true },
    { name: "TypeScript", highlight: true },
    { name: "Tailwind CSS", highlight: false },
    { name: "Bootstrap 5", highlight: false },
    { name: "HTML5 / CSS3", highlight: false },
    { name: "Flutter (Dart)", highlight: false }
  ],
  backend: [
    { name: "Node.js", highlight: true },
    { name: "Express.js", highlight: true },
    { name: "RESTful APIs", highlight: true },
    { name: "JWT Auth & RBAC", highlight: true },
    { name: "CORS & Security", highlight: true },
    { name: "AI Integration", highlight: true },
    { name: "ASP.NET MVC / C#", highlight: false },
    { name: "Core PHP", highlight: false }
  ],
  databases: [
    { name: "MongoDB & Mongoose", highlight: true },
    { name: "SQL Server (SSMS)", highlight: true },
    { name: "MySQL", highlight: false },
    { name: "Firebase Firestore", highlight: false },
    { name: "Git & GitHub", highlight: true },
    { name: "Railway", highlight: false},
    { name: "Vercel / Netlify", highlight: false },
    { name: "Postman", highlight: false }
  ]
};

export const experiences = [
  {
    role: "Junior Level MERN Stack Developer",
    company: "SMUFTECH",
    location: "Karachi, Pakistan",
    period: "2025 – Present",
    type: "Full-Time Job",
    current: true,
    highlights: [
      "Architecting and shipping reactive web applications using React.js, Next.js, and TypeScript.",
      "Developing resilient backend microservices and RESTful endpoints using Node.js, Express.js, MongoDB, and Mongoose.",
      "Implemented JWT token-based authentication, role-based access security (RBAC), and strict CORS policies.",
      "Leading third-party integrations including AI agents, payment processors, analytics pipelines, and dynamic dashboard modules.",
      "Collaborating in agile sprints, participating in code reviews, and optimizing MongoDB aggregation pipelines for sub-100ms response times."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "SMUFTECH",
    location: "Karachi, Pakistan",
    period: "2024 – 2025",
    type: "1 Year Job Internship",
    current: false,
    highlights: [
      "Completed 1 full year intensive engineering internship mastering end-to-end full-stack modern JavaScript architecture.",
      "Engineered frontend reusable components, managed complex application state, and integrated live RESTful endpoints.",
      "Refactored legacy modules, cleaned up redundant API calls, and improved client-side rendering speed by over 35%.",
      "Gained hands-on expertise in MongoDB schema modeling, indexing strategies, and database validation layers."
    ]
  },
  {
    role: "Part-Time Freelance Full Stack Developer",
    company: "Freelance & Direct Clients",
    location: "Remote / International",
    period: "2026 – Present",
    type: "Part-Time Freelancing (2026)",
    current: true,
    highlights: [
      "Delivering commercial production websites and tailored SaaS tools for direct business clients and e-commerce founders in 2026.",
      "Successfully launched live production platforms including Precision Metal Structures, WanderSync travel portal, and Zayro Footwear store.",
      "Providing complete end-to-end delivery: domain DNS, Vercel/Netlify hosting, responsive mobile optimization, and SEO enhancements."
    ]
  }
];


export const projects = allProjects;


export const education = [
  {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Sir Syed University of Engineering and Technology (SSUET)",
    period: "2024 – 2028 | Undergraduate",
    details: "Specializing in software engineering, modern distributed architectures, algorithms, and full-stack software development."
  },
  {
    degree: "Diploma in Software Engineering (ACCP PRIME 2.0)",
    institution: "Aptech Learning",
    period: "2024 – 2026 | Enrolled",
    details: "Intensive training in MERN stack architecture, enterprise ASP.NET MVC systems, SQL databases, and full software lifecycle engineering."
  }
];

export const valueProps = [
  {
    title: "Clean Production Code",
    desc: "Component modularity, robust TypeScript/ES6+ syntax, custom hooks, and defensive API handling."
  },
  {
    title: "End-to-End MERN Mastery",
    desc: "From responsive pixel-perfect frontends to high-throughput Node/Express REST backends and MongoDB aggregations."
  },
  {
    title: "Hardened Security & Auth",
    desc: "JWT authentication, refresh tokens, role-based access control (RBAC), CORS policies, and sanitized inputs."
  },
  {
    title: "Enterprise Database Scalability",
    desc: "Hands-on expertise across both NoSQL (MongoDB, Firebase) and Relational engines (SQL Server SSMS, MySQL)."
  }
];

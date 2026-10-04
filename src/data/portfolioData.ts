/**
 * Centralized Portfolio Data for Muhammad Azhar Hassan
 * Edit all links, services, certifications, and contact info directly here.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  technologies: string[];
  iconType: "web" | "ai" | "software" | "backend";
  popular?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string;
  credentialId: string;
  skills: string[];
  description: string;
  verificationUrl?: string;
  iconType: "ai" | "automation" | "fullstack" | "backend" | "cloud" | "git";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  overview: string;
  keyFeatures: string[];
  extendedDetails: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  imageAlt: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    firstName: "Muhammad",
    lastName: "Azhar Hassan",
    name: "Muhammad Azhar Hassan",
    title: "Web Developer & AI Automation Enthusiast",
    fullTitle: "Web Developer | AI & Automation Enthusiast | Software Developer",
    oneLineIntro: "Software and Web Developer building custom software solutions, high-performance web applications, and intelligent AI automations.",
    detailedIntro: "Specializing in the MERN stack, Python, REST APIs, SQL/NoSQL databases, Generative AI integration, and n8n workflow automation.",
    ctaHeadline: "Looking for Custom Software Developers, Web Development, or AI Automations?",
    ctaSubtext: "Whether you need a full-stack web application, custom business software, or automated AI workflows to eliminate manual work — let's build something exceptional together.",
    email: "muhammadazharhassan410@gmail.com",
    phone: "+92 317 4828429",
    whatsappNumber: "923174828429",
    whatsappPrefilledMessage: "Hello Azhar, I reviewed your developer portfolio and would like to discuss a project / custom software requirement.",
    githubUrl: "https://github.com/azharhassan410",
    linkedinUrl: "https://linkedin.com/in/azharhassan410",
    facebookUrl: "https://facebook.com/azharhassan410",
    resumeUrl: "/Muhammad_Azhar_Hassan_Resume.pdf",
    profilePhoto: "/profile.jpg",
    location: "Gujranwala, Pakistan",
    availability: "Available for Technical Roles & Contracts",
  },

  heroTechStack: [
    { name: "React", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "n8n", category: "automation" },
    { name: "Azure", category: "cloud" },
  ],

  about: {
    summaryLine1: "Software and Web Developer with a strong computer science background from UET RCET Gujranwala Campus, engineering robust web applications and automated workflows.",
    summaryLine2: "Specializing in the MERN stack, Python, REST APIs, SQL/NoSQL databases, Generative AI integrations, and n8n orchestration pipelines.",
    summaryLine3: "Focused on clean code architecture, rapid problem-solving, and building maintainable tools that deliver measurable real-world utility.",
    highlightChips: [
      "BS Computer Science",
      "MERN Stack",
      "React & JavaScript",
      "Python Backend",
      "REST APIs & SQL",
      "Generative AI",
      "n8n Automation",
      "Problem Solving",
      "Continuous Learning",
    ],
    stats: [
      { value: "4+", label: "Software Projects", detail: "Full-stack & AI tools built" },
      { value: "MERN", label: "Core Web Stack", detail: "React, Node.js, Express, Mongo" },
      { value: "AI + n8n", label: "Intelligent Workflows", detail: "Generative AI & API pipelines" },
    ],
  },

  services: [
    {
      id: "web-development",
      title: "Web Development",
      shortDescription: "Modern, responsive, high-performance web applications tailored to your business needs.",
      deliverables: [
        "Interactive Single-Page Applications with React.js & Vite",
        "Full-stack MERN (MongoDB, Express, React, Node.js) development",
        "Clean, responsive UI with Tailwind CSS and cross-browser support",
        "Fast page load times, SEO optimization, and accessible architecture",
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
      iconType: "web",
      popular: true,
    },
    {
      id: "ai-automations",
      title: "AI & Workflow Automations",
      shortDescription: "Practical Generative AI features, intelligent workflows, and multi-app orchestration.",
      deliverables: [
        "Generative AI & LLM integration with custom prompts and function calling",
        "n8n automated pipelines connecting CRMs, databases, and communication channels",
        "Automated data extraction, parsing, and structured data transformation",
        "Elimination of repetitive manual processes via webhook triggers",
      ],
      technologies: ["Generative AI", "n8n", "OpenAI / Gemini APIs", "Webhooks", "Python"],
      iconType: "ai",
      popular: true,
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      shortDescription: "Bespoke software logic, point-of-sale systems, and operations management tools.",
      deliverables: [
        "Offline-ready Point of Sale (POS) and inventory tracking tools",
        "Custom management platforms (student records, hospital EMR, billing)",
        "Role-based access controls (RBAC) and privacy management",
        "Local data persistence, SQLite integration, and transaction logs",
      ],
      technologies: ["Python", "JavaScript", "SQLite", "MySQL", "PHP"],
      iconType: "software",
    },
    {
      id: "backend-apis",
      title: "Backend & RESTful APIs",
      shortDescription: "Secure, scalable backend endpoints and database schemas built for stability.",
      deliverables: [
        "Structured RESTful API design with Express.js and Python",
        "Database modeling, schema design, and query optimization (Mongo, MySQL)",
        "Authentication, authorization (JWT), and API rate limiting",
        "Microsoft Azure deployment, cloud storage, and hosting configurations",
      ],
      technologies: ["Node.js", "Express.js", "Python", "MongoDB", "MySQL", "Azure"],
      iconType: "backend",
    },
  ] as ServiceItem[],

  certifications: [
    {
      id: "gen-ai-developer",
      title: "Generative AI & LLM Application Engineering",
      issuer: "DeepLearning.AI / OpenAI Specialization",
      issuerBadge: "AI Engineering",
      credentialId: "CERT-GAI-2024-884",
      description: "Engineering LLM-powered applications, structured prompt pipelines, contextual retrieval, and API integration for production workflows.",
      skills: ["Prompt Engineering", "OpenAI APIs", "Function Calling", "RAG Systems", "Vector Embeddings"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "ai",
    },
    {
      id: "n8n-automation",
      title: "n8n Workflow Automation & Orchestration",
      issuer: "n8n Academy",
      issuerBadge: "Automation",
      credentialId: "CERT-N8N-9412",
      description: "Designing end-to-end multi-step automated workflows, custom webhook triggers, data transformation nodes, and third-party SaaS connectors.",
      skills: ["n8n Workflows", "Webhooks", "JSON Transformations", "API Connectors", "Process Automation"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "automation",
    },
    {
      id: "mern-stack",
      title: "Full-Stack Web Development (MERN)",
      issuer: "Professional Web Engineering Certification",
      issuerBadge: "Full-Stack",
      credentialId: "CERT-FS-MERN-3105",
      description: "Building resilient single-page applications, state management, RESTful server architecture, JWT authorization, and MongoDB data modeling.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "fullstack",
    },
    {
      id: "python-backend",
      title: "Python Backend Architecture & REST APIs",
      issuer: "Python Institute / Developer Series",
      issuerBadge: "Backend",
      credentialId: "CERT-PY-API-7721",
      description: "Architecting modular backend endpoints, database schema optimization, asynchronous tasks, and secure API contract design.",
      skills: ["Python", "FastAPI / Flask", "REST Architecture", "SQL Query Optimization", "API Security"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "backend",
    },
    {
      id: "azure-fundamentals",
      title: "Microsoft Azure Cloud Fundamentals (AZ-900)",
      issuer: "Microsoft Cloud Architecture",
      issuerBadge: "Cloud",
      credentialId: "MS-AZ900-6194",
      description: "Foundational mastery of cloud services, virtual network management, Azure App Services, security policies, and resource governance.",
      skills: ["Azure App Services", "Blob Storage", "Cloud Security", "VNet Configuration", "Resource Management"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "cloud",
    },
    {
      id: "git-version-control",
      title: "Professional Git & GitHub Collaborative Workflows",
      issuer: "GitHub Developer Program",
      issuerBadge: "DevOps",
      credentialId: "GH-DEV-4482",
      description: "Production version control workflows, trunk-based development, semantic branch management, code review pipelines, and release tagging.",
      skills: ["Git Branching", "Merge Conflict Resolution", "GitHub Actions", "Release Automation", "Code Review"],
      verificationUrl: "https://github.com/azharhassan410",
      iconType: "git",
    },
  ] as CertificationItem[],

  featuredProjects: [
    {
      id: "recruiter-ai",
      title: "Recruiter AI Assistant",
      category: "AI & Automated Web Application",
      overview: "AI-assisted candidate search, data processing pipeline, and intelligent workflow automation tool.",
      keyFeatures: [
        "AI-assisted profile indexing and semantic skill matching",
        "Automated candidate data pipelines and analytical summaries",
        "Modern web application architecture with instant search filters",
      ],
      extendedDetails:
        "Engineered strictly as a software and AI system to solve unstructured talent data challenges. Integrates LLM analysis for resume parsing, automated semantic scoring, and structured data extraction.",
      technologies: ["React.js", "Node.js", "Generative AI", "Python", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/azharhassan410/recruiter-ai-assistant",
      liveDemoUrl: "https://recruiter-ai-assistant-demo.vercel.app",
      image: "/projects/recruiter_ai.jpg",
      imageAlt: "Recruiter AI Assistant Dashboard",
    },
    {
      id: "tuition-management",
      title: "Tuition Management System",
      category: "Full-Stack Educational Platform",
      overview: "Centralized management platform for student enrollment, tuition records, payments, and academic tracking.",
      keyFeatures: [
        "Comprehensive student records, batch enrollment, and academic profile logging",
        "Automated tuition fee vouchers, receipt generation, and balance tracking",
        "Quick search, payment status filters, and administrative ledger reporting",
      ],
      extendedDetails:
        "Full-stack administrative web application built to digitize student records and streamline fee operations. Replaces manual registers with real-time balance calculations, payment history logs, and attendance metrics.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/azharhassan410/tuition-management-system",
      liveDemoUrl: "https://tuition-mgmt-system-demo.vercel.app",
      image: "/projects/tuition_system.jpg",
      imageAlt: "Tuition Management System UI",
    },
    {
      id: "bike-pos",
      title: "Bike Workshop POS",
      category: "Offline-First Point of Sale",
      overview: "Offline-ready POS system with local data storage, workshop repair tracking, and parts inventory control.",
      keyFeatures: [
        "Reliable offline billing and invoice calculation with local persistence",
        "Workshop job card creation, repair ticket status, and service logs",
        "Spare parts inventory tracking with low-stock alerts and daily ledger",
      ],
      extendedDetails:
        "Engineered for local repair businesses to ensure zero downtime even without reliable internet. Handles instant cashier transactions, mechanic assignments, service job cards, and automated part quantity deductions with fast local search.",
      technologies: ["JavaScript", "React.js", "SQLite / Local Storage", "CSS3 / Tailwind"],
      githubUrl: "https://github.com/azharhassan410/bike-workshop-pos",
      image: "/projects/bike_pos.jpg",
      imageAlt: "Bike Workshop POS and Inventory Screen",
    },
    {
      id: "hospital-management",
      title: "Hospital Management System",
      category: "Enterprise Healthcare Platform",
      overview: "Role-based hospital platform for patient records, reception desk, pharmacy stock, and OPD management.",
      keyFeatures: [
        "Role-based access controls (RBAC) for doctors, receptionists, pharmacists, and admins",
        "Electronic patient records, OPD admissions, diagnosis history, and prescription notes",
        "Pharmacy medicine inventory management with batch monitoring and dispensing logs",
      ],
      extendedDetails:
        "Comprehensive medical software solution built with PHP and MySQL. Coordinates multiple hospital wings into a synchronized workflow with access control, patient admissions, doctor consultation queues, and pharmacy checkout receipts.",
      technologies: ["PHP", "MySQL", "JavaScript", "REST APIs", "Bootstrap / CSS"],
      githubUrl: "https://github.com/azharhassan410/hospital-management-system",
      image: "/projects/hospital_mgmt.jpg",
      imageAlt: "Hospital Management System Dashboard",
    },
  ] as ProjectItem[],
};

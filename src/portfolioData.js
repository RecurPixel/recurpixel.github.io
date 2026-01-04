// Portfolio Content Data
// Edit this file to update your portfolio content

const portfolioData = {
  // Personal Information
  personal: {
    name: 'Manu',
    firstName: 'Manu',
    lastName: '', // Add if needed
    tagline: 'Backend Developer | .NET & ASP.NET Core',
    greeting: 'Hi, my name is',
    bio: 'Backend developer with 3 years of experience building scalable web applications and APIs. Currently specialized in the .NET ecosystem with expertise in ASP.NET Core, Entity Framework Core, and cloud deployment. Passionate about clean architecture and modern development practices.',
    location: 'Pandharpur, Maharashtra, IN'
  },

  // About Section
  about: {
    introduction: [
      'I\'m a backend developer with **3 years of professional experience** building web applications and APIs for various business domains.',
      'My technical journey has evolved from working with different backend technologies to now specializing in the **.NET ecosystem**. I focus on building clean, maintainable APIs using ASP.NET Core, Entity Framework Core, and modern development practices.',
      'I\'m passionate about backend architecture, database design, and writing code that\'s easy for teams to work with. Currently expanding my expertise in cloud-native development with Azure.'
    ],
    goal: '🎯 Seeking backend development opportunities where I can contribute to production systems while growing as a .NET engineer.',
    
    currentSkills: [
      'C# & .NET',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server & T-SQL',
      'RESTful API Design',
      'Git & Azure DevOps'
    ],
    
    learningSkills: [
      'Microservices Architecture',
      'Docker & Kubernetes',
      'Azure Cloud Services',
      'Design Patterns',
      'System Design & Scalability'
    ]
  },

  // Experience
  experience: [
    {
      title: 'Backend Developer (Part-time)',
      company: 'ITworks Infotech Pvt LTD',
      location: 'Remote',
      startDate: 'Aug 2023',
      endDate: 'Jun 2024',
      duration: '11 mos',
      responsibilities: [
        'Maintained and optimized backend API systems for production applications',
        'Managed Linux VPS infrastructure and EC2 cloud deployments',
        'Debugged and enhanced features across distributed services',
        'Provided technical support and maintenance for legacy codebases'
      ]
    },
    {
      title: 'Backend Developer (Contract)',
      company: 'Self Employed',
      location: 'Remote',
      startDate: 'Feb 2023',
      endDate: 'Jul 2023',
      duration: '6 mos',
      responsibilities: [
        'Built custom web applications for local businesses and clients',
        'Developed backend systems and database architectures',
        'Focused on upskilling in .NET ecosystem during this period',
        'Delivered end-to-end solutions from requirements to deployment'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'ITworks Infotech Pvt LTD',
      location: 'On-site',
      startDate: 'Aug 2021',
      endDate: 'Dec 2022',
      duration: '1 yr 5 mos',
      responsibilities: [
        'Led backend development for multiple client applications and platforms',
        'Designed and implemented RESTful APIs and database schemas',
        'Integrated third-party services including payment gateways and OAuth providers',
        'Built admin panels and business management systems for various domains'
      ]
    }
  ],

  // Education
  education: [
    {
      degree: 'M.Sc in Computer Science',
      institution: 'VCACS, Pune',
      startDate: 'June 2019',
      endDate: 'April 2021',
      grade: 'CGPA: 9.2',
      gradeType: 'CGPA'
    },
    {
      degree: 'B.Sc in Computer Science',
      institution: 'S.M.Joshi College, Pune',
      startDate: 'June 2016',
      endDate: 'April 2019',
      grade: 'O (86.8%)',
      gradeType: 'Grade'
    }
  ],

  // Technical Skills
  technicalSkills: {
    backend: 'C#, .NET, ASP.NET Core Web API, Entity Framework Core, RESTful APIs',
    database: 'SQL Server, T-SQL, MySQL, PostgreSQL, Database Design',
    tools: 'Git, Azure, Visual Studio, Docker, Linux, Postman'
  },

  // Projects
  projects: [
    {
      name: 'Task Management API',
      description: 'RESTful API for team task management with authentication, role-based access, and real-time notifications.',
      technologies: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT Auth'],
      tags: ['.NET', 'Web API', 'EF Core'],
      github: '', // Add GitHub link
      demo: '', // Add demo link
      image: '' // Add project image path
    },
    {
      name: 'E-Commerce Backend System',
      description: 'Microservices-based backend for product catalog, shopping cart, and order management with payment integration.',
      technologies: ['ASP.NET Core', 'SQL Server', 'Azure', 'React'],
      tags: ['C#', '.NET Core', 'Cloud'],
      github: '',
      demo: '',
      image: ''
    },
    {
      name: 'Business Management Platform',
      description: 'Full-stack application for inventory tracking, client management, and reporting with admin dashboard.',
      technologies: ['Backend APIs', 'Database Design', 'Cloud Deployment'],
      tags: ['REST API', 'Full Stack', 'Production'],
      github: '',
      demo: '',
      image: '',
      note: 'Client project - code not publicly available'
    },
    {
      name: 'Meeting Scheduler API',
      description: 'Enterprise scheduling system with calendar integration, time slot management, and third-party service sync.',
      technologies: ['REST APIs', 'Database Architecture', 'Third-party Integration'],
      tags: ['Backend', 'Integration', 'Enterprise'],
      github: '',
      demo: '',
      image: '',
      note: 'Production system'
    }
  ],

  // Achievements & Certifications
  achievements: [
    {
      title: 'ASP.NET Core Web API Development',
      issuer: 'Udemy',
      date: '2023',
      description: 'Comprehensive course covering REST API design, Entity Framework Core, JWT authentication, and Azure deployment.',
      credentialUrl: '' // Add certificate link if available
    },
    {
      title: 'C# Advanced Programming',
      issuer: 'Pluralsight',
      date: '2023',
      description: 'Advanced C# concepts including LINQ, async/await patterns, generics, and modern language features.',
      credentialUrl: ''
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft Learn',
      date: '2024',
      description: 'Cloud concepts, core Azure services, security principles, and cloud architecture best practices.',
      credentialUrl: ''
    },
    {
      title: 'Entity Framework Core Deep Dive',
      issuer: 'Udemy',
      date: '2023',
      description: 'Advanced ORM techniques, migrations, performance optimization, and complex relationship mapping.',
      credentialUrl: ''
    },
    {
      title: 'RESTful API Design & Best Practices',
      issuer: 'Online Course',
      date: '2022',
      description: 'API architecture, versioning strategies, documentation, security, and scalability patterns.',
      credentialUrl: ''
    }
  ],

  // Professional Milestones
  milestones: [
    {
      title: 'Specialized in .NET ecosystem and cloud-native development',
      year: '2023'
    },
    {
      title: 'Built and deployed production-grade backend applications',
      year: '2021-2022'
    },
    {
      title: 'Completed M.Sc in Computer Science with 9.2 CGPA',
      year: '2021'
    },
    {
      title: 'Started professional backend development career',
      year: '2021'
    }
  ],

  // Books
  books: [
    {
      title: 'Clean Architecture in .NET: Building Maintainable Applications',
      description: 'A comprehensive guide to implementing clean architecture patterns in ASP.NET Core applications, covering dependency injection, SOLID principles, and testable code design.',
      tags: ['C#', '.NET', 'Architecture'],
      status: 'In Progress',
      progress: 30, // Percentage
      coverImage: '', // Add book cover if available
      link: '' // Add link when published
    },
    {
      title: 'Modern API Design Patterns',
      description: 'Exploring REST API best practices, versioning strategies, authentication patterns, and performance optimization techniques for production systems.',
      tags: ['REST', 'API Design', 'Backend'],
      status: 'Planned',
      progress: 0,
      coverImage: '',
      link: ''
    }
  ],

  // Contact Information
  contact: {
    email: 'recurpixel@gmail.com',
    github: 'RecurPixel',
    linkedin: 'RecurPixel',
    devto: 'recurpixel',
    message: 'I\'m currently open to backend development opportunities, especially roles working with .NET and ASP.NET Core. Feel free to reach out for collaborations, questions, or just to connect!'
  }
};

export default portfolioData;

export const RESUME_DATA = {
  name: "Hamzathul Karrar",
  title: "Java Backend & Full Stack Developer",
  location: "Udupi, Karnataka, India",
  email: "uk.hamzath@gmail.com",
  phone: "+91 9740195568",
  linkedin: "https://linkedin.com/in/hamzathul-karrar",
  github: "https://github.com/Hamzathul-karrar",
  summary: "Result-oriented Java Backend & Full Stack Developer building scalable web applications with Spring Boot, Hibernate, React, and MySQL. Experienced in designing RESTful web services, implementing authentication with JWT and Spring Security, and applying clean MVC architecture. Comfortable taking projects from concept to deployment with a focus on efficiency, code quality, and maintainability within Agile SDLC.",
  skills: {
    languages: ["Java", "JavaScript (ES6)", "Python", "HTML5", "CSS3"],
    backend: ["Spring Boot", "Spring Security", "Hibernate", "JDBC", "RESTful Web Services", "Microservices", "PHP"],
    frontend: ["React", "Tailwind CSS"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "Postman", "Maven", "Swagger", "Eclipse", "VS Code"],
    concepts: ["OOP", "MVC", "JWT Authentication", "Exception Handling", "Multithreading", "Agile/Scrum", "SDLC"]
  },
  experience: [
    {
      company: "QuntNex",
      location: "Bengaluru, Karnataka",
      role: "Java Full Stack Developer - Trainee",
      period: "Jun 2024 - Jan 2025",
      description: [
        "Built REST APIs with Spring Boot and Hibernate backed by MySQL; implemented JWT based authentication.",
        "Delivered multiple CRUD services, code reviewed via GitHub, and collaborated in Agile sprints.",
        "Authored API contracts and validated endpoints with Postman and Swagger."
      ]
    },
    {
      company: "Vitvara Technologies",
      location: "Mangalore, Karnataka",
      role: "Full Stack Developer - Intern",
      period: "Jul 2023 - Aug 2023",
      description: [
        "Contributed to responsive web development using HTML, CSS, and PHP backend.",
        "Optimized database queries and improved UI usability across core screens.",
        "Assisted in deployment and debugging to meet production quality standards."
      ]
    }
  ],
  projects: [
    {
      title: "JobScout",
      subtitle: "Job Aggregation Web Application",
      tech: ["Java", "Spring Boot", "React", "JWT", "MySQL"],
      description: [
        "Built a full stack web platform listing 25+ verified job portals in one place, helping users discover opportunities faster and reduce search effort by 80%.",
        "Implemented secure authentication using JWT.",
        "Exposed REST APIs and integrated with React frontend including pagination.",
        "Designed MySQL schema and optimized queries for faster retrieval and minimal redundancy."
      ],
      github: "https://github.com/Hamzathul-karrar/JobScout-Frontend",
      live: "https://jobscout-app.netlify.app/",
      image: "jobscout.png"
    },
    {
      title: "Real-Time Sign Language Detection",
      subtitle: "YOLOv5 and NLP",
      tech: ["Python", "OpenCV", "YOLOv5", "NLP"],
      description: [
        "Developed gesture recognition that translates sign language to real time text and speech.",
        "Combined YOLOv5 detection with NLP post processing achieving 80–85% accuracy on custom datasets.",
        "Optimized frame processing pipeline for low latency inference."
      ],
      github: "https://github.com/Hamzathul-karrar/Indian-Sign-Language-ISL-using-Yolov5",
      live: "https://github.com/Hamzathul-karrar/Indian-Sign-Language-ISL-using-Yolov5",
      image: "sign_lang.png"
    },
    {
      title: "Car Service System",
      subtitle: "MVC Web Application",
      tech: ["Java", "Servlet", "JDBC", "HTML", "CSS", "MySQL"],
      description: [
        "Delivered CRUD based service booking with clear MVC separation of concerns.",
        "Implemented user management, form validation, and service scheduling modules.",
        "Integrated JDBC for persistent storage and reliable transaction flows."
      ],
      image: "car.png"
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Srinivas University Institute of Engineering and Technology",
      location: "Mangalore, India",
      period: "2020 - 2024",
      details: "CGPA: 8.52/10"
    },
    {
      degree: "Pre-University in Computer Science",
      school: "St. Aloysius PU College",
      location: "Mangalore",
      period: "2018 - 2020",
      details: "CGPA: 76.8%"
    }
  ],
  certifications: [
    "Java Full Stack Development – QuntNex",
    "Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft"
  ],
  achievements: [
    "Event Coordinator, Tech-Yuva 2023 (Annual Tech Fest).",
    "Active problem solver on LeetCode and open source contributor on GitHub."
  ]
};

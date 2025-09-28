import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rodrigo Araújo",
  initials: "RA",
  url: "https://rodrigoaraujo.pt",
  location: "Porto/Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Computer Science Student at the University of Porto.",
summary:"Having completed my **Bachelor's degree in Informatics and Computing Engineering** from the Faculty of Engineering, University of Porto, I am now pursuing a **Master's degree in Computer Science** at the Faculty of Sciences.\n\nMy interests center on **distributed systems**, **parallel algorithms**, and **performance optimization**. I'm fascinated by the challenges of building systems that scale efficiently and the mathematical elegance of algorithmic optimization.\n\nI'm particularly drawn to **machine learning**, **program verification**, and **cryptography** - fields that combine theoretical depth with real-world impact. These areas represent the intersection of rigorous computer science and practical problem-solving that drives my academic focus.\n\nMy approach involves understanding problems at their core before developing **efficient solutions**. I enjoy working across different programming paradigms and languages, from low-level system programming to high-level application development.\n\nOutside of computing, I **compose and produce music**, which provides a creative outlet and a different perspective on problem-solving and structured thinking.\n\nCurrently, I'm seeking opportunities in **research** or **industry** where I can contribute to meaningful projects involving distributed computing, algorithmic optimization, or security systems while continuing to expand my expertise in these areas.",  
avatarUrl: "/me1.png",
  skills: [
    "C/C++",
    "Rust",
    "Java",
    "Python",
    "PostgresSQL",
    "Docker",
    "Haskell",
    "OCaml",
    "Laravel"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "contact@rodrigoaraujo.pt",
    tel: "+351 914574743",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rodrigoaraujo9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigoaraujo9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:contact@rodrigoaraujo.pt",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
   
  ],
  education: [
    {
      school: "Faculdade de Ciências da Universidade do Porto",
      href: "https://www.up.pt/portal/pt/",
      degree: "Master's Degree in Computer Science",
      logoUrl: "/fcup.jpg ",
      start: "2025",
      end: "Present",
    },
    {
      school: "Faculdade de Engenharia da Universidade do Porto",
      href: "https://www.up.pt/portal/pt/",
      degree: "Bachelor's Degree in Informatics and Computing Engineering",
      logoUrl: "/feup.jpg ",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
  title: "Hospital Scheduling Optimizer",
  href: "https://github.com/rodrigoaraujo9/metaheuristic-hospital-scheduler",
  dates: "Mar 2025 - Apr 2025",
  active: false,
  description:
    "AI-powered patient admission scheduling using advanced metaheuristic algorithms. With six optimization algorithms and interactive web interface.",
  technologies: ["Python", "Streamlit", "Genetic Algorithm", "Simulated Annealing", "Tabu Search", "Matplotlib"],
  links: [
    {
      type: "Source",
      href: "https://github.com/rodrigoaraujo9/metaheuristic-hospital-scheduler",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/hospital.jpg",
},
    {
  title: "UFC Fight Outcome Prediction System",
  href: "https://github.com/educunhA04/predicting_UFC_results",
  dates: "Apr 2025 - May 2025",
  active: false,
  description:
    "ML system predicting UFC fight outcomes with 70-80% accuracy using advanced feature engineering and ensemble methods.",
  technologies: ["Python", "Streamlit", "Scikit-Learn", "Random Forest", "Gradient Boosting", "Neural Networks", "SVM"],
  links: [
    {
      type: "Source",
      href: "https://github.com/educunhA04/predicting_UFC_results",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/ufc.jpg",
},
{
  title: "Flight Management System",
  href: "https://github.com/rodrigoaraujo9/flight-management-system",
  dates: "Oct 2023 - Dec 2023",
  active: false,
  description:
    "Comprehensive C++ flight management system providing intelligent flight routing, network analysis, and airline statistics using advanced graph algorithms and data structures.",
  technologies: ["C++", "Graph Algorithms", "BFS/DFS", "STL", "Data Structures", "Haversine Distance"],
  links: [
    {
      type: "Source",
      href: "https://github.com/rodrigoaraujo9/flight-management-system",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/flight.jpg",
},
{
  title: "Gargantua — Black Hole Simulation",
  href: "https://github.com/rodrigoaraujo9/gargantua",
  dates: "Sep 2025 - Present",
  active: true,
  description:
    "Interactive Rust simulation of light beams bending around a Schwarzschild black hole, inspired by Interstellar's Gargantua. Features real-time physics with RK4 integration and cinematic visualization.",
  technologies: ["Rust", "Raylib", "Physics Simulation", "RK4 Integration", "Schwarzschild Metric", "Computer Graphics"],
  links: [
    {
      type: "Source",
      href: "https://github.com/rodrigoaraujo9/gargantua",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/gargantua.png",
},
  ],
  hackathons: [
    {
      title: "Learn Rust from Scratch",
      dates: "November, 2024",
      location: "Remote",
      description:
        "Gained hands-on experience with Rust's unique syntax and semantics, while developing a strong foundation in error handling and pattern matching techniques.",
      image: "images.png",
      links: [],
    },
    {
      title: "Industrial Robotics - Fundamentals",
      dates: "May, 2025",
      location: "On-Site",
      description:
        "Learnt about industrial robotics and how to program robotic arms.",
      image: "ubi.png",
    },
    {
      title: "Scrum Foundation Certificate",
      dates: "September, 2024",
      location: "Remote",
      description:
        "Gained comprehensive knowledge of Agile principles and Scrum framework, including sprint planning, daily standups, and retrospectives. Learned to effectively collaborate in cross-functional teams and manage product backlogs.",
      image: "logo-certiprof.png",
    },
    {
      title: "Robocup 2016 - Leipzig, Germany, Certificate of Participation",
      dates: "Summer, 2016",
      location: "On-Site",
      description:
        "Participating in RoboCup was a transformative childhood experience that ignited my enduring passion for technology and programming.",
      image: "robocup.png",
    },
  ],
} as const;

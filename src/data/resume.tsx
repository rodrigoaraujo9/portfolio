import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rodrigo Araújo",
  initials: "RA",
  url: "https://dillion.io",
  location: "Porto/Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Computer Science Student at the University of Porto.",
  summary:"From an early age, my fascination with technology led me to build simple games, websites, and applications, fueling my passion for programming and shaping my career path. This early curiosity has evolved into a dedicated pursuit of excellence in computer science.\n\nI hold a **Bachelor's degree in Informatics and Computing Engineering** from the Faculty of Engineering, University of Porto, and am currently pursuing a **Master's degree in Computer Science** at the Faculty of Sciences. My passion lies in tackling **complex problems** and developing **clever, efficient solutions** that make a real difference.\n\nI thrive on **personal projects** that not only sharpen my existing skills but also provide opportunities to explore **new technologies and methodologies**. Whether working on academic challenges, internships, or independent ventures, I'm constantly seeking ways to expand my knowledge and push the boundaries of what I can create.\n\nMy goal extends beyond personal growth as a software engineer—I'm committed to contributing to **meaningful work that creates lasting impact** and drives innovation in the field of technology.",
  avatarUrl: "/me1.png",
  skillsImage: "/icons.svg",
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
      school: "Universidade do Porto",
      href: "https://www.up.pt/portal/pt/",
      degree: "Bachelor's Degree in Informatics and Computing Engineering",
      logoUrl: "/ubi.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Group Wallet for Nano",
      href: "https://github.com/diogogomesaraujo/aokiji",
      dates: "Feb 2025 - July 2025",
      active: true,
      description:
        "A Rust library and wallet for Nano group transactions using FROST as the final project of my CS degree at Universidade da Beira Interior.",
      technologies: ["Rust", "Tokio", "Dioxus", "Dalek"],
      links: [
        {
          type: "Wallet",
          href: "https://github.com/diogogomesaraujo/aokiji",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Library",
          href: "https://github.com/diogogomesaraujo/frost-sig",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wallet.gif",
    },
    {
      title: "Text Editor",
      href: "https://github.com/diogogomesaraujo/funk-txt",
      dates: "January 2025",
      active: true,
      description:
        "A fluid text editor written in C to learn more about systems programming threads and memory managment.",
      technologies: ["C", "Raylib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/funk-txt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/funk.gif",
    },
    {
      title: "Arythmetic Interpreter",
      href: "https://github.com/diogogomesaraujo/aryth-ml-tic",
      dates: "January 2025",
      active: true,
      description:
        "A lightweight OCaml lexer and interpreter for arythmetic functions to consolidate what was learnt in Theory of Computation class.",
      technologies: ["OCaml", "Menhir"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/aryth-ml-tic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interpreter.png",
    },
    {
      title: "OCaml Game",
      href: "https://github.com/diogogomesaraujo/ocaml-game",
      dates: "January 2024",
      active: true,
      description:
        "A simple Mr. Robot themed game made with Raylib in OCaml. Inspired by TJ Devries.",
      technologies: ["OCaml", "Raylib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/ocaml-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/elliot.gif",
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

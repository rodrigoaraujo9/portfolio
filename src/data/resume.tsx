import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Diogo Araújo",
  initials: "DA",
  url: "https://dillion.io",
  location: "Covilhã/Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science Student and Back-End Engineer at STAR JE.",
  summary:
  "Hi, I'm Diogo Gomes de Araújo, a third-year Computer Science student at Universidade da Beira Interior. From an early age, my fascination with technology led me to build simple games and websites, fueling my passion for programming and shaping my career path.\n\nIn addition to my technical pursuits, I have a strong interest in design and photography, which gives me the chance to blend creativity with technology. I'm always seeking to expand my skills and knowledge, whether through internships, collaborative projects, or new challenges. My aim is not only to grow as a software engineer but also to contribute to projects that have a lasting impact.",
  avatarUrl: "/me1.png",
  skills: [
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "diogo@araujo.pro",
    tel: "+351 914576371",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/diogogomesaraujo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diogogomesaraujo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "STAR JE",
      href: "https://starje.pt/",
      badges: [],
      location: "Remote",
      title: "Back-End Engineer",
      logoUrl: "/starje.png",
      start: "May 2024",
      end: "Now",
      description:
        "As a backend engineer at Star JE, I built scalable and efficient solutions using Node.js and TypeScript, enhancing performance.",
    },
    {
      company: "Degema",
      badges: [],
      href: "https://degema.pt/",
      location: "Remote",
      title: "Restaurant Server",
      logoUrl: "/degema.jpg",
      start: "July 2023",
      end: "September 2023",
      description:
        "As a waiter at Degema, I focused on teamwork and communication to ensure smooth service and a positive customer experience.",
    },
  ],
  education: [
    {
      school: "Universidade da Beira Interior",
      href: "https://www.ubi.pt/en/",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      logoUrl: "/ubi.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Shell",
      href: "https://github.com/diogogomesaraujo/rust-shell",
      dates: "December 2024",
      active: true,
      description:
        "A basic shell written in Rust to learn Systems Programming and the differences between C and Rust.",
      technologies: [
        "Rust",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shell2.png",
    },
    {
      title: "Star Wars Inspired OpenGL Scene",
      href: "https://github.com/diogogomesaraujo/opengl-starwars-scene",
      dates: "December 2024",
      active: true,
      description:
        "A simple scene to learn object loading, lighting, skybox's and movement in OpenGL for Computer Graphics class.",
      technologies: [
        "C++",
        "OpenGL",
        "Assimp", 
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/opengl-starwars-scene",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/1.png",
    },
  ],
  hackathons: [
    {
      title: "Learn Rust from Scratch",
      dates: "November, 2024",
      location: "Remote",
      description:
        "Gained hands-on experience with Rust's unique syntax and semantics, while developing a strong foundation in error handling and pattern matching techniques.",   
        image:
        "images.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Scrum Foundation Certificate",
      dates: "September, 2024",
      location: "Remote",
      description:
        "Gained comprehensive knowledge of Agile principles and Scrum framework, including sprint planning, daily standups, and retrospectives. Learned to effectively collaborate in cross-functional teams and manage product backlogs.",
      image:
        "logo-certiprof.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
    {
      title: "Robocup 2016 - Leipzig, Germany, Certificate of Participation",
      dates: "Summer, 2016",
      location: "On-Site",
      description:
        "Participating in RoboCup was a transformative childhood experience that ignited my enduring passion for technology and programming.",
      image:
        "robocup.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

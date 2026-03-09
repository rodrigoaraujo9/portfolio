import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const ASSET_VERSION = "20260306";

export const DATA = {
    name: "Rodrigo Araújo",
    initials: "RA",
    url: "https://rodrigoaraujo.pt",
    location: "Porto/Braga, Portugal",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description: "Computer Science Student at the University of Porto.",
    summary:
        "I'm currently pursuing a **Master's in Computer Science**, where I focus on **distributed systems and reliable computing**. I'm fascinated by the challenges of building secure, reliable and scalable systems, as well as solving complex computational problems. Lately, I've been diving deep into **Rust**. When I'm not coding or studying, you'd be likely to find me **composing and writing music** — it's my creative outlet and passion outside of tech. I am currently **looking for research and job opportunities** and can't wait to contribute to meaningful projects!",

    avatarUrl: `/avatar1.png?v=${ASSET_VERSION}`,
    skillsImage: `/icons.svg?v=${ASSET_VERSION}`,
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        {
            href: `/curriculum_vitae.pdf?v=${ASSET_VERSION}`,
            icon: NotebookIcon,
            label: "Curriculum",
            download: true,
        },
    ],
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

    work: [],
    education: [
        {
            school: "Faculdade de Ciências da Universidade do Porto",
            href: "https://www.up.pt/portal/pt/",
            degree: "Master's Degree in Computer Science",
            logoUrl: `/fcup.jpg?v=${ASSET_VERSION}`,
            start: "2025",
            end: "Present",
        },
        {
            school: "Faculdade de Engenharia da Universidade do Porto",
            href: "https://www.up.pt/portal/pt/",
            degree: "Bachelor's Degree in Informatics and Computing Engineering",
            logoUrl: `/feup.jpg?v=${ASSET_VERSION}`,
            start: "2022",
            end: "2025",
        },
    ],
    projects: [
        {
            title: "Mugen – Terminal Synth",
            href: "https://github.com/rodrigoaraujo9/mugen",
            dates: "Feb 2026 - Present",
            active: true,
            description:
                "A real-time, polyphonic terminal-based synthesizer in Rust",
            technologies: ["Rust", "Ratatui", "Real-time Systems"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/rodrigoaraujo9/mugen",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: `/mugen.gif?v=${ASSET_VERSION}`,
        },
        {
            title: "Game for RetroJam 2025",
            href: "https://github.com/rodrigoaraujo9/sisyphus-retrojam-2025",
            dates: "Oct 2025",
            active: true,
            description:
                'A game developed for IEEE RetroJam 2025 using Raylib and Rust about Rebirth".',
            technologies: ["Rust", "Raylib"],
            links: [
                {
                    type: "Itch Page",
                    href: "https://diogoaraujo2004.itch.io/sisyphus",
                    icon: <Icons.github className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/rodrigoaraujo9/sisyphus-retrojam-2025",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: `/retrojam.gif?v=${ASSET_VERSION}`,
        },
        {
            title: "Gargantua – Black Hole Simulation",
            href: "https://github.com/rodrigoaraujo9/gargantua",
            dates: "Jul 2025 - Present",
            active: true,
            description:
                "Interactive Rust simulation of light beams bending around a Schwarzschild black hole, inspired by Interstellar's Gargantua. Features real-time physics with RK4 integration and cinematic visualization.",
            technologies: ["Rust", "Raylib", "Physics Simulation"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/rodrigoaraujo9/gargantua",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: `/gargantua.gif?v=${ASSET_VERSION}`,
        },
        {
            title: "Lambda Calculus Interpreter",
            href: "https://github.com/rodrigoaraujo9/lambda-interpreter",
            dates: "Mar 2026",
            active: false,
            description:
                "A simple lambda calculus interpreter in Haskell. Parses and evaluates expressions with applicative-order evaluation to weak normal form.",
            technologies: ["Haskell", "Happy", "Cabal"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/rodrigoaraujo9/lambda-interpreter",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: `/lambda.png?v=${ASSET_VERSION}`,
        },
    ],
    hackathons: [
        {
            title: "2nd Place in IEEE RetroJam 2025",
            dates: "October, 2025",
            location: "On-Site",
            description:
                "Placed second alongside my brother Diogo with a retro-styled game developed in 48 hours with Rust and Raylib",
            image: `/ieee.png?v=${ASSET_VERSION}`,
            links: [""],
        },
        {
            title: "World 4th Place – RoboCup Rescue Superteam 2016",
            dates: "Summer, 2016",
            location: "Leipzig, Germany",
            description:
                "Represented Portugal internationally at RoboCup Leipzig in autonomous robotics competition. Participating in RoboCup was a transformative childhood experience that ignited my enduring passion for technology and programming.",
            image: `/robocup.png?v=${ASSET_VERSION}`,
        },
        {
            title: "National 1st Place – Robotics Championship (CoSpace Rescue) 2016",
            dates: "2016",
            location: "Portugal",
            description:
                "Awarded for excellence in robot programming, navigation algorithms, and autonomous systems.",
            image: `/nacional.png?v=${ASSET_VERSION}`,
        },
        {
            title: "4th Place in Canguru Matemático Sem Fronteiras",
            dates: "2016",
            location: "Portugal",
            description:
                "Achieved 4th place nationally in the Canguru Matemático competition, demonstrating strong mathematical reasoning and problem-solving abilities from an early age.",
            image: `/canguru.png?v=${ASSET_VERSION}`,
            links: [""],
        },
    ],
} as const;

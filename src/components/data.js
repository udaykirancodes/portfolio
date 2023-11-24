
import { github, carrent, jobit, tripguide, chatApp, whatsApp } from "../assets";
import { nodejs, mongodb, git, figma, docket, threejs, docker, html, css, javascript, typescript, reactjs, redux, tailwind } from '../assets'
import { candyCrush, codeSaver, maziBai, metalStation } from "../assets";
export const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "redux",
        icon: redux,
    },
    {
        name: "figma",
        icon: figma,
    },
];
export const experiences = [
    {
        title: "Nextjs Developer",
        company_name: "CosEdge",
        icon: "CE",
        date: "May 2023 - June 2023",
        points: [
            "Developing web applications using React.js & Next.js",
            "Collaborating with cross-functional teams.",
            "Implementing responsive design.",
            "Participating in code reviews.",
        ],
        certification: {
            imageLink: "https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/student_certificates/644ffcbc292281682963644.png",
            link: "https://internshala.com/student/certificate/143850269/obf15u66yy_"
        }
    },

    {
        title: "Full Stack Developer",
        company_name: "Bismilla Enterprices",
        icon: "BE",
        date: "May 2022 - Sept 2022",
        points: [
            "Developing web applications React.js & Next.js",
            "Working with Admin panel for the E-Commerce Store.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        certification: {
            imageLink: "https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/student_certificates/642b9fba478841680580538.png",
            link: "https://internshala.com/student/certificate/103441772/8A12596B-40CE-20E9-F0C1-F4CFAE694C65"
        }
    },
    {
        title: "MERN Stack Developer",
        company_name: "Mazibai.com",
        icon: "MB",
        date: "Jan 2022 - April 2022",
        points: [
            "Developing a full stack application.",
            "Collaborating with team members to build optimized product.",
            "Implementing responsive design.",
        ],
        certification: {
            imageLink: "",
            link: ""
        }
    },
];
export const skills = [
    {
        title: "MONGO DB",
        link: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        description: ""
    },
    {
        title: "MONGO DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        description: ""
    },
    {
        title: "MONGO DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: ""
    },
    {
        title: "MONGO DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        description: ""
    },
    {
        title: "MONGO DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        description: ""
    },
    {
        title: "MONGO DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: ""
    },
    {
        title: "EXPRESS JS",
        link: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        description: ""
    },
    {
        title: "REACT JS",
        link: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        description: ""
    },
    {
        title: "NODE JS",
        link: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        description: ""
    }
]

export const projects = [
    {
        name: "Authentication System",
        description:
            "The project can be used to authenticate user accounts for various applications and services, providing a secure and convenient login experience through WhatsApp.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "expressjs",
                color: "pink-text-gradient",
            },
            {
                name: "whatsapp",
                color: "green-text-gradient",
            },
        ],
        image: whatsApp,
        live_link: "https://github.com/udaykirancodes/whatsapp-based-authentication",
        source_code_link: "https://github.com/udaykirancodes/whatsapp-based-authentication",
    },
    {
        name: "Real Time Chatting App",
        description:
            "Real-time chat app built with React Native Expo. Allows users to connect with each other and chat in real time. Features include user authentication, personal chats.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],
        image: chatApp,
        live_link: "https://github.com/udaykirancodes/react-native-expo-chat-app",
        source_code_link: "https://github.com/udaykirancodes/react-native-expo-chat-app",
    },
    {
        name: "E-Commerce Platform",
        description:
            "A website where users can buy and sell products. The marketplace provides search, sort, and filter features to help users find the products they are looking for.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: metalStation,
        live_link: "https://metalstation.vercel.app/",
        source_code_link: "https://github.com/udaykirancodes/metalstation-nextjs",
    },
    {
        name: "Code Saver",
        description:
            "A Web Application to save our code snippets. You can save multiple code snippets under single question.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: codeSaver,
        live_link: "https://codesaver.onrender.com/",
        source_code_link: "https://github.com/udaykirancodes/code-saver",
    },
    {
        name: "Candy Crush",
        description:
            "An front-end application designed with CSS, which will allow us to silutate the game Candy-Crush. Match ajacent three candies to gain score.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: candyCrush,
        live_link: "https://udaykirancodes.github.io/CandyCrush/",
        source_code_link: "https://github.com/udaykirancodes/CandyCrush",
    },

];

// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import Browser from "../assets/projects/Browser.png";
import project0 from "../assets/projects/project-2.png";
import kalmly from "../assets/projects/kalmly.png";
import Dashboard from "../assets//projects/Dashboard.png";
// import { a, button } from "framer-motion/client";
import Skill from "../assets/projects/Skill.png";

export const HERO_CONTENT = `I am a passionate Frontend Developer with 3 years of hands-on experience in building scalable and high-performance web applications. Specializing in technologies like React and Next.js, I focus on creating innovative, user-centric solutions that drive business growth and deliver exceptional user experiences. My goal is to leverage my expertise in frontend development to build intuitive, high-quality products that meet both user needs and business objectives.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend Developer with 3 years of professional experience, passionate about building efficient and user-friendly web applications. Over the course of my career, I’ve worked with a range of frontend technologies, including React, Next.js, HTML, CSS, and JavaScript. My journey in web development began with a deep curiosity about how things work, and over time, it has evolved into a commitment to creating seamless and engaging user experiences. I thrive in collaborative environments, tackling complex UI challenges, and always look for new ways to improve performance and usability. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: " 2023 - Present",
    role: "Frontend Mentor",
    company: "Genesys Tech Hub",
    description:
      "Mentored a group of tech enthusiasts on frontend development, focusing on React, JavaScript, HTML, and CSS. Guided them through building projects, emphasizing best practices, component-based architecture, and responsive design. Introduced and explained the use of UCML diagrams for structuring and planning the projects. Facilitated Scrum ceremonies, such as sprint planning and retrospectives, to promote agile development practices.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Typescript"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Genesys Tech Hub",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Scrum"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend Developer Intern",
    company: "Genesys Tech Hub",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Kalmly",
    image: kalmly,
    description:
      "A fully functional web-app for Therapist and their clients and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://kalmly.vercel.app/",
  },
  {
    title: "Expense Tracker",
    image: project0,
    description:
      "A web application for tracking expenses, managing transactions, and monitoring financial activities.",
    technologies: [
      "Next.js 15",
      "Prisma",
      "Neon PostgreSQL",
      "Clerk",
      "TypeScript",
      "React-Toastify",
    ],
    link: "https://expense-tracker-five-phi-20.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    image: Dashboard,
    description:
      "A modern admin dashboard with a sleek and responsive UI for data management and visualization.",
    technologies: ["React", "Recharts", "Vite"],
    link: "https://admin-panel-1d1k.vercel.app/",
  },
  {
    title: "WhatBytes Skill Test Dashboard",
    image: Skill,
    description:
      "A sleek and responsive dashboard for skill assessment, data visualization, and performance tracking. Built with Next.js, TypeScript, Tailwind CSS, Recharts, and Zustand for state management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "https://what-bytes-task-emma.vercel.app/",
  },

  {
    title: "Browser Extension",
    image: Browser,
    description: "Frontend Mentor Challenge, Browser Extension",
    technologies: ["React", "CSS", "Frontend Mentor"],
    link: "https://what-bytes-task-emma.vercel.app/",
  },
];

export const CONTACT = {
  address: "Nigeria",
  phoneNo: "+234 8167 5497 03 ",
  email: "emmanuelnwaforce@gmail.com",
};


import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMui,
  SiNeovim,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

// Portfolio Projects
export const projects = [
  {
    title: "Voxa-ai - An AI-powered career platform",
    description:
      "Voxa-ai is an AI-powered career assistant platform that leverages Gemini AI to generate personalized content and insights. It offers features like ATS scoring, resume feedback, cover letter generation, and interview prep tools. Automated updates keep users informed about industry trends, salaries, and in-demand skills.",
    stack: [
      "Next.js",
      "Gemini AI",
      "Shadcn",
      "Prisma",
      "Clerk",
      "Neon DB",
      "PostgreSQL",
      "Recharts",
      "Inngest",
      "TailwindCSS",
    ],
    live_url: "https://voxa-ai.netlify.app/",
    github_url: "https://github.com/lokeshkavisth/voxa-ai",
    thumbnail: "/voxa.png",
  },
  {
    title: "Quick Tab Search - Chrome extension",
    description:
      "A productivity-focused Chrome Extension that allows users to search and navigate between open tabs quickly. Ideal for users who work with many tabs and need an efficient way to manage and switch between them.",
    stack: ["ReactJS", "TailwindCSS", "TypeScript", "ShadCN"],
    github_url: "https://github.com/lokeshkavisth/quick-search-tab",
    live_url:
      "https://chromewebstore.google.com/detail/quick-tab-search/opdfnpiageceeikdcdnineemfgjapjgm?authuser=0&hl=en-GB&pli=1",
    thumbnail: "/quick-search-tab.png",
  },
  {
    title: "Darkroom - VS Code Theme",
    description:
      "A sleek and minimal dark theme for Visual Studio Code designed for developers who prefer a distraction-free and visually calming coding environment. Available on the VS Code Marketplace.",
    stack: ["VS Code Extension", "JSON", "Theme Design", "Color Theory"],
    github_url: "https://github.com/lokeshkavisth/darkroom",
    live_url:
      "https://marketplace.visualstudio.com/items?itemName=LokeshKavisth.darkroom&ssr=false#overview",
    thumbnail: "/darkroom.png",
  },
  {
    title: "FileFlow - A secure, real-time file manager",
    description:
      "FileFlow is a robust file management solution that simplifies the process of managing and sharing files. With a focus on security, accessibility, and seamless integration with cloud storage, FileFlow offers users a reliable platform for their file management needs. Its user-friendly features ensure a smooth experience, allowing users to effortlessly store, organize, and share their files.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Shadcn/ui",
      "Clerk",
      "React-dropzone",
      "TailwindCSS",
    ],
    live_url: "https://fileflow.vercel.app/",
    github_url: "https://github.com/lokeshkavisth/FileFlow",
    thumbnail: "/fileflow.png",
  },
  {
    title: "Reserve",
    description:
      "Reserve is a sleek and intuitive bus booking application, providing a seamless platform for users to effortlessly plan and reserve their bus journeys with ease.",
    stack: [
      "React.js",
      "Node.js",
      "TailwindCSS",
      "Redux",
      "Stripe",
      "Firebase",
      "MongoDB",
    ],
    live_url: "https://reserve-your-bus.vercel.app/",
    github_url: "https://github.com/lokeshkavisth/Reserve",
    thumbnail: "/reserve.png",
  },
  {
    title: "Piksabe",
    description:
      "Piksabe is your go-to app for effortless image and video searches through the Pixabay API. Discover, download, and explore media with a user-friendly interface and rich filtering options.",
    stack: ["Next.js", "TailwindCSS", "axios", "Pixabay API"],
    live_url: "https://piksabe.vercel.app/",
    github_url: "https://github.com/lokeshkavisth/piksabe",
    thumbnail: "/piksabe.png",
  },
];

// Technical Skills
export const skills = [
  { id: 1, title: "HTML", icon: FaHtml5 },
  { id: 2, title: "CSS", icon: FaCss3Alt },
  { id: 3, title: "JavaScript", icon: SiJavascript },
  { id: 4, title: "TypeScript", icon: SiTypescript },
  { id: 5, title: "React.js", icon: FaReact },
  { id: 6, title: "Redux", icon: SiRedux },
  { id: 7, title: "TailwindCSS", icon: SiTailwindcss },
  { id: 9, title: "Bootstrap", icon: FaBootstrap },
  { id: 10, title: "Material-UI", icon: SiMui },
  { id: 11, title: "jQuery", icon: SiJquery },
  { id: 12, title: "Node.js", icon: FaNodeJs },
  { id: 13, title: "Express.js", icon: SiExpress },
  { id: 14, title: "MongoDB", icon: SiMongodb },
  { id: 15, title: "PostgreSQL", icon: SiPostgresql },
  { id: 16, title: "Neon DB", icon: SiNeovim },
  { id: 17, title: "Git", icon: FaGitAlt },
  { id: 18, title: "GitHub", icon: FaGithub },
  { id: 19, title: "Postman", icon: SiPostman },
  { id: 20, title: "Figma", icon: FaFigma },
  { id: 21, title: "Vercel", icon: SiVercel },
  { id: 22, title: "Render", icon: SiRender },
  { id: 23, title: "Netlify", icon: SiNetlify },
  { id: 24, title: "VScode", icon: TbBrandVscode },
];

// Education Background
export const education = [
  {
    id: 1,
    name: "AlmaBetter Institute",
    time: "febaury 2023 - June 2024",
    level: "MERN Stack",
  },
  {
    id: 2,
    name: "SS Jain Subodh P.G Autonomous College, Jaipur",
    time: "may 2018 - august 2021",
    level: "graduate ( BA )",
  },
  {
    id: 3,
    name: "Rahul Chetna Public Sr. Sec. School, Jaipur ( RBSE )",
    time: "august 2016 - july 2017",
    level: "12th",
  },
];

// Certificates and Achievements
export const certificates = [
  {
    id: 3,
    title: "Full Stack Web Developer Intern",
    description:
      "On December 31, 2024, I completed my Web Developer Internship at Lightning Technologies. During this 4-month program, I worked on real-world projects involving REST APIs, MongoDB, React.js, and Tailwind CSS. This internship allowed me to enhance my backend performance skills, optimize database queries, and collaborate in Agile teams to deliver production-ready features.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Agile",
    ],
    live_url: "https://www.lightningtechnologies.net/",
    certificate: "/FSWDC_LightningTechnologies.png",
  },
  {
    id: 1,
    title: "Full Stack Web Development Program",
    description:
      "On August 18, 2023, I received the 'Full Stack Web Development Program' certificate from 'AlmaBetter'. This comprehensive program provided me with expertise in a variety of technologies, allowing me to complete 50+ projects and assessments and devote over 80+ hours to coding exercises.",
    stack: [
      "JavaScript",
      "jQuery",
      "Git",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Material-UI",
      "TailwindCSS",
      "Jest",
    ],
    live_url: "https://certificates.almabetter.com/en/verify/12961274047608",
    certificate: "/FSWDC_AlmaBetter.png",
  },
  {
    id: 2,
    title: "The Complete 2023 Web Development Bootcamp",
    description:
      "On August 01, 2023, I finished 'The Complete 2023 Web Development Bootcamp' on 'Udemy' under the tutelage of Dr. Angela Yu. This intensive bootcamp provided me with a solid foundation in web development that covered a wide range of technologies. Under Dr. Angela Yu's tutelage, I gained hands-on experience and practical insights, enhancing my abilities in this dynamic field.",
    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Bash",
      "Git",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
    live_url:
      "https://www.udemy.com/certificate/UC-831c3133-40c7-4739-92ef-6baa7efd2305/",
    certificate: "/FSWDC_Udemy.jpg",
  },
];

// Work Experience
export const experiences = [
  {
    company: "PixelForge Innovations",
    role: "Full Stack Web Developer Intern",
    duration: "Jan 2025 – May 2025",
  },
  {
    company: "Lightning Technologies",
    role: "Full Stack Web Developer Intern",
    duration: "Aug 2024 – Dec 2024",
  },
  {
    company: "AlmaBetter",
    role: "Full Stack Web Developer Intern",
    duration: "Feb 2023 – June 2024",
  },
];

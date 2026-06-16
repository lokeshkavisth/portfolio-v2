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
  SiShopify
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
    problem:
      "Job seekers needed a single platform for resume feedback, interview prep, and career insights without juggling multiple tools.",
    outcome:
      "Shipped a full AI-powered career platform with auth, dashboards, and automated content — demonstrating end-to-end product delivery.",
    clientType: "SaaS / Career platform",
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
    problem:
      "Power users waste time hunting through dozens of open browser tabs.",
    outcome:
      "Published to the Chrome Web Store — a polished product used by real users daily.",
    clientType: "Productivity tool",
  },
  {
    title: "Session Cleaner - Chrome extension",
    description:
      "A one-click Chrome extension to clear session data, cookies, local storage, and IndexedDB. Features selective cleaning, auto page reload, cleaning history, saved preferences, and a modern popup UI — built for privacy and performance.",
    stack: [
      "JavaScript",
      "Chrome Extension",
      "Manifest V3",
      "HTML/CSS",
      "Session Management",
    ],
    github_url: "https://github.com/lokeshkavisth/session-cleaner",
    live_url:
      "https://chromewebstore.google.com/detail/session-cleaner/lhbahmkknbldjahnfpkmhclicocjjakj",
    thumbnail: "/session-cleaner.png",
    problem:
      "Users needed a fast, privacy-focused way to wipe browsing session data without digging through Chrome settings.",
    outcome:
      "Published on the Chrome Web Store (v1.1) with selective cleaning, history tracking, and success feedback — all processing done locally on-device.",
    clientType: "Privacy / Developer tool",
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
    problem:
      "Developers wanted a calmer, distraction-free editor theme for long coding sessions.",
    outcome:
      "Live on the VS Code Marketplace with a cohesive design system and positive user feedback.",
    clientType: "Developer product",
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
    problem:
      "Teams needed a secure, simple way to upload, organize, and share files without complex enterprise software.",
    outcome:
      "Built a production-ready file manager with auth, cloud storage, and a clean UX — similar to what small businesses need for document portals.",
    clientType: "Business tool",
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
    problem:
      "Travelers needed a faster, clearer way to search routes and book bus tickets online.",
    outcome:
      "Delivered a full booking flow with payments (Stripe) — directly relevant to service-based small businesses.",
    clientType: "Booking / E-commerce",
  },
  {
    title: "Piksabe",
    description:
      "Piksabe is your go-to app for effortless image and video searches through the Pixabay API. Discover, download, and explore media with a user-friendly interface and rich filtering options.",
    stack: ["Next.js", "TailwindCSS", "axios", "Pixabay API"],
    live_url: "https://piksabe.vercel.app/",
    github_url: "https://github.com/lokeshkavisth/piksabe",
    thumbnail: "/piksabe.png",
    problem:
      "Content creators needed quick access to royalty-free media without clunky stock-photo sites.",
    outcome:
      "Launched a fast, filter-rich media search app — showing ability to build consumer-facing web products.",
    clientType: "Consumer web app",
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
  { id: 25, title: "Shopify", icon: SiShopify },
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
    name: "Rahul Chetna Public Sr. Sec. School, Jaipur",
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
    id: 1,
    company: "PixelForge Innovations",
    role: "Full Stack Web Developer Intern",
    duration: "Jan 2025 – May 2025",
  },
  {
    id: 2,
    company: "Lightning Technologies",
    role: "Full Stack Web Developer Intern",
    duration: "Aug 2024 – Dec 2024",
  },
  {
    id: 3,
    company: "AlmaBetter",
    role: "Full Stack Web Developer Intern",
    duration: "Feb 2023 – June 2024",
  },
];

// Freelance services for small businesses
export const services = [
  {
    id: 1,
    title: "Business Website",
    description:
      "A professional, mobile-first website that tells your story, builds trust, and turns visitors into customers.",
    idealFor: "Local shops, consultants, restaurants, service providers",
    startingAt: "From ₹35,000",
    timeline: "3–5 weeks",
    includes: [
      "5–10 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Google Analytics ready",
    ],
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "One high-converting page built for ads, campaigns, or product launches — focused on a single goal.",
    idealFor: "Campaigns, product launches, lead generation",
    startingAt: "From ₹12,000",
    timeline: "1–2 weeks",
    includes: [
      "Single focused page",
      "Conversion-optimized layout",
      "Contact or signup form",
      "Fast load speed",
      "1 round of revisions",
    ],
  },
  {
    id: 3,
    title: "Website Redesign",
    description:
      "Modernize an outdated site — improve look, speed, and usability without starting from scratch.",
    idealFor: "Businesses with an old site that hurts credibility",
    startingAt: "From ₹20,000",
    timeline: "2–4 weeks",
    includes: [
      "UX audit & refresh",
      "Modern visual design",
      "Performance improvements",
      "Content migration help",
      "Mobile optimization",
    ],
  },
  {
    id: 4,
    title: "E-commerce / Online Store",
    description:
      "Sell products online with a clean storefront, product pages, and secure checkout.",
    idealFor: "Retailers, artisans, D2C brands",
    startingAt: "From ₹60,000",
    timeline: "4–8 weeks",
    includes: [
      "Product catalog setup",
      "Shopping cart & checkout",
      "Payment integration",
      "Order notifications",
      "Admin-friendly CMS",
    ],
  },
  {
    id: 5,
    title: "Maintenance & Updates",
    description:
      "Ongoing support so your site stays secure, updated, and running smoothly after launch.",
    idealFor: "Business owners who want peace of mind",
    startingAt: "From ₹5,000/mo",
    timeline: "Ongoing",
    includes: [
      "Bug fixes & small updates",
      "Content changes",
      "Security monitoring",
      "Backup management",
      "Priority email support",
    ],
  },
];

// Client engagement process
export const process = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "We talk about your business, goals, competitors, and what success looks like. No pressure — just clarity.",
  },
  {
    id: 2,
    step: "02",
    title: "Proposal",
    description:
      "You receive a clear scope, timeline, and fixed quote. No hidden fees or surprise invoices.",
  },
  {
    id: 3,
    step: "03",
    title: "Build & Review",
    description:
      "I build in stages with regular check-ins. You review, give feedback, and we refine until it's right.",
  },
  {
    id: 4,
    step: "04",
    title: "Launch & Support",
    description:
      "Your site goes live. I handle deployment, handoff docs, and optional ongoing maintenance.",
  },
];

// Frequently asked questions
export const faq = [
  {
    id: 1,
    question: "How much does a website cost?",
    answer:
      "Most small business websites start around ₹12,000–₹25,000 for a landing page and ₹35,000–₹75,000 for a full multi-page site. E-commerce and custom features are quoted separately after discovery. You'll always get a fixed quote before work begins.",
  },
  {
    id: 2,
    question: "How long does it take?",
    answer:
      "Landing pages typically take 1–2 weeks. Full business websites take 3–5 weeks. Timelines depend on scope, content readiness, and feedback speed. I'll give you a realistic deadline in the proposal.",
  },
  {
    id: 3,
    question: "Do I own the website?",
    answer:
      "Yes — once the project is paid in full, you own the site, design, and code. I'll provide all source files and access credentials during handoff.",
  },
  {
    id: 4,
    question: "Do you handle hosting and domain?",
    answer:
      "I can guide you through purchasing a domain and setting up hosting (Vercel, Netlify, or traditional hosting). I handle the technical setup so you don't have to.",
  },
  {
    id: 5,
    question: "What if I need changes after launch?",
    answer:
      "Minor tweaks within the first week are included. For ongoing updates, I offer monthly maintenance plans starting at ₹5,000/mo, or one-off change requests at an hourly rate.",
  },
  {
    id: 6,
    question: "Do you work with clients outside India?",
    answer:
      "Absolutely. I work remotely with clients worldwide. Communication happens over email, video calls, and async updates — timezone-friendly for US, UK, and Asia-Pacific.",
  },
];

// Client testimonials
export const testimonials = [
  {
    id: 1,
    name: "Team Lead",
    business: "Lightning Technologies",
    role: "Engineering Manager",
    quote:
      "Lokesh delivered production-ready features on schedule during his internship. He picked up our stack quickly and communicated clearly throughout.",
    projectType: "Web development internship",
  },
  {
    id: 2,
    name: "Mentor",
    business: "AlmaBetter",
    role: "Program Instructor",
    quote:
      "Completed 50+ projects with strong attention to detail. Consistently went beyond requirements and showed real initiative in solving problems.",
    projectType: "Full-stack training program",
  },
  {
    id: 3,
    name: "Peer Developer",
    business: "Collaborative Project",
    role: "Co-developer",
    quote:
      "Reliable, fast to iterate, and great at turning vague ideas into working UI. Would collaborate again on any client project.",
    projectType: "Side project collaboration",
  },
];

// Contact form options
export const projectTypes = [
  "New business website",
  "Landing page",
  "Website redesign",
  "E-commerce / online store",
  "Maintenance & updates",
  "Other",
];

export const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP",
  "Within 1–2 months",
  "Flexible / no rush",
];

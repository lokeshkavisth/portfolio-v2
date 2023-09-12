export default function manifest() {
  return {
    name: "Lokesh Sharma | Full Stack Web Developer",
    short_name: "Lokesh Sharma | Full Stack Web Developer",
    description:
      "I'm Lokesh-Sharma, a full-stack web developer living in Jaipur, India. As a developer, I am proficient in MERN Stack technologies like MongoDB, Express.js, React.js, Node.js and web development languages and technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Go to the home page",
        url: "/",
      },
      {
        name: "About",
        short_name: "About",
        description: "Learn more about me",
        url: "/about",
      },
      {
        name: "Projects",
        short_name: "Projects",
        description:
          "As a dedicated MERN stack developer, I've had the privilege of working on a range of projects, from dynamic web applications to scalable back-end systems. Below, you'll find a selection of some of my recent projects.",
        url: "/projects",
      },
      {
        name: "Stack",
        short_name: "Stack",
        description:
          "Unleashing Innovation with Cutting-Edge Tools: Exploring the Depths of my Tech Stack Expertise.",
        url: "/stack",
      },
    ],
    prefer_related_applications: true,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

export default function manifest() {
  return {
    name: "Lokesh Sharma - MERN Stack Developer", // Emphasize MERN expertise
    short_name: "Lokesh Sharma Dev", // Concise for app icons
    description:
      "Crafting exceptional web experiences with MERN Stack. Based in Jaipur, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Explore my MERN stack projects and skills", // Action-oriented
        url: "/",
        // icon: "/icons/home.png", // Optional: add a visual cue
      },
      {
        name: "About Me",
        short_name: "About",
        description: "Learn about my journey as a full-stack developer",
        url: "/about",
        // icon: "/icons/about.png", // Optional
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "Discover my innovative MERN stack projects",
        url: "/projects",
        // icon: "/icons/projects.png", // Optional
      },
      {
        name: "Tech Stack",
        short_name: "Stack",
        description: "Explore my MERN stack skills and tools",
        url: "/stack",
        // icon: "/icons/stack.png", // Optional
      },
      {
        name: "Certificates",
        short_name: "Certs",
        description: "View my MERN stack and web dev certifications",
        url: "/certificates",
        // icon: "/icons/certificates.png", // Optional
      },
    ],
    prefer_related_applications: true,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // {
      //   src: "/icons/icon-512x512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/icon-192x192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
    ],
  };
}

import Navbar from "@/components/ui/navigation/Navbar";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: "Lokesh Sharma | Full Stack Web Developer",
    template: "%s",
  },
  description:
    "I'm Lokesh-Sharma, a full-stack web developer living in Jaipur, India. As a developer, I am proficient in MERN Stack technologies like MongoDB, Express.js, React.js, Node.js and web development languages and technologies.",
  keywords: [
    "full-stack web developer",
    "MERN Stack",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "Lokesh Sharma",
  ],
  image: "../assets/images/profile.jpeg",
  og: {
    title: "Lokesh Sharma | Full Stack Web Developer",
    description:
      "I'm Lokesh-Sharma, a full-stack web developer living in Jaipur, India. As a developer, I am proficient in MERN Stack technologies like MongoDB, Express.js, React.js, Node.js and web development languages and technologies.",
    image: "../assets/images/profile.jpeg",
    url: "https://lokeshkavisth.vercel.app/",
    type: "website",
    site_name: "Lokesh Sharma",
    locale: "en-US",
    author: "Lokesh Sharma",
    datePublished: "2023-09-11",
    dateModified: "2023-09-11",
    robots: "index,follow",
    canonical: "https://lokeshkavisth.vercel.app",
    jobTitle: "Full Stack Web Developer",
  },
  twitter: {
    title: "@lokeshkavisth",
    description:
      "I'm Lokesh-Sharma, a full-stack web developer living in Jaipur, India. As a developer, I am proficient in MERN Stack technologies like MongoDB, Express.js, React.js, Node.js and web development languages and technologies.",
    url: "https://lokeshkavisth.vercel.app/",
    image: "../assets/images/profile.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-black_01 text-white_02 font-JetBrains overflow-x-hidden">
        <Navbar />
        <main className="max-w-screen-lg mx-auto py-40  text-sm px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

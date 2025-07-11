import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
  title: {
    default: "Lokesh Sharma | MERN Stack Developer",
    template: "%s | MERN Stack Developer",
  },
  description:
    "Crafting exceptional web experiences with MERN Stack in Jaipur, India. Focused on projects that push boundaries and deliver real-world impact.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "Jaipur",
    "India",
  ],
  image: "/profile.webp",
  og: {
    title: "Lokesh Sharma | MERN Stack Developer",
    description:
      "Creating innovative web solutions with MERN Stack. Based in Jaipur, India.",
    image: "/profile.webp",
    url: "https://lokeshkavisth.vercel.app/",
    type: "profile",
    site_name: "Lokesh Sharma",
    locale: "en-US",
    author: "Lokesh Sharma",
    datePublished: "2023-09-11",
    dateModified: "2023-09-11",
    robots: "index,follow",
    canonical: "https://lokeshkavisth.vercel.app",
    jobTitle: "MERN Stack Developer",
  },
  twitter: {
    title: "@lokeshkavisth | MERN Stack Developer",
    description: "Creating exceptional web experiences with MERN Stack.",
    url: "https://lokeshkavisth.vercel.app/",
    image: "/profile.webp",
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
        <Analytics />
      </body>
    </html>
  );
}

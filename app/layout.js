import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import { StickyCTA } from "@/components/StickyCTA";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Lokesh Sharma | Freelance Web Developer for Small Businesses",
    template: "%s | Lokesh Sharma",
  },
  description:
    "Freelance web developer helping small businesses launch professional websites, landing pages, and redesigns. Based in Jaipur, India — available worldwide. Get a quote within 24 hours.",
  keywords: [
    "Freelance Web Developer",
    "Small Business Website Developer",
    "Landing Page Freelancer",
    "Website Redesign",
    "Business Website India",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "Jaipur",
    "Remote Web Developer",
  ],
  image: "/profile.webp",
  og: {
    title: "Lokesh Sharma | Freelance Web Developer for Small Businesses",
    description:
      "Professional websites and landing pages for small businesses. Clear pricing, fast delivery, remote worldwide.",
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
    jobTitle: "Freelance Web Developer",
  },
  twitter: {
    title: "@lokeshkavisth | Freelance Web Developer",
    description:
      "Websites and landing pages for small businesses. Start your project today.",
    url: "https://lokeshkavisth.vercel.app/",
    image: "/profile.webp",
  },
};

export default function RootLayout({ children }) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lokesh Sharma — Freelance Web Developer",
    description:
      "Freelance web developer for small businesses. Business websites, landing pages, redesigns, and e-commerce.",
    url: "https://lokeshkavisth.vercel.app",
    email: "lokeshkavisth.dev@gmail.com",
    areaServed: ["IN", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    sameAs: [
      "https://www.linkedin.com/in/lokeshkavisth",
      "https://github.com/lokeshkavisth",
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="bg-black_01 text-white_02 font-sans overflow-x-hidden mesh-bg min-h-screen noise-overlay">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 grid-pattern pointer-events-none z-0" aria-hidden />
        <div
          className="fixed top-[-20%] right-[-10%] w-[420px] h-[420px] rounded-full bg-accent/10 blur-[100px] animate-float pointer-events-none z-0"
          aria-hidden
        />
        <div
          className="fixed bottom-[-10%] left-[-15%] w-[360px] h-[360px] rounded-full bg-accent-cyan/8 blur-[90px] pointer-events-none z-0"
          aria-hidden
        />

        <div className="relative z-10">
          <Navbar />
          <main className="max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-28 md:pt-36 md:pb-32">
            {children}
          </main>
          <footer className="relative z-10 border-t border-white/[0.06] py-10 overflow-hidden">
            <div className="max-w-5xl mx-auto px-5 sm:px-6">
              <p className="text-outline font-display text-4xl sm:text-6xl md:text-7xl font-bold text-center mb-4 select-none pointer-events-none">
                LET&apos;S BUILD
              </p>
              <p className="text-center font-mono text-xs text-white_02/50 mb-8">
                Freelance inquiries welcome · Remote worldwide
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white_02/60">
                <p className="font-mono text-xs flex items-center gap-2">
                  <span className="text-accent">◆</span>
                  © {new Date().getFullYear()} Lokesh Sharma
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
                  <Link
                    href="mailto:lokeshkavisth.dev@gmail.com"
                    className="text-accent-cyan hover:text-white_01 transition-colors"
                  >
                    lokeshkavisth.dev@gmail.com
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/lokeshkavisth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white_01 transition-colors"
                  >
                    LinkedIn
                  </Link>
                  {whatsappNumber && (
                    <Link
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white_01 transition-colors"
                    >
                      WhatsApp
                    </Link>
                  )}
                  <Link
                    href="/contact"
                    className="text-accent-cyan hover:text-white_01 transition-colors"
                  >
                    Start a project →
                  </Link>
                </div>
              </div>
            </div>
          </footer>
          <StickyCTA />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

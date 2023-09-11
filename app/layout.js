"use client";
import { useEffect } from "react";
import Navbar from "@/components/ui/navigation/Navbar";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Disable right-click
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    // Disable Ctrl+C (or Cmd+C on Mac)
    window.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        e.preventDefault();
      }
    });

    // Cleanup event listeners on unmount (optional)
    return () => {
      window.removeEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
      window.removeEventListener("keydown", function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === "c") {
          e.preventDefault();
        }
      });
    };
  }, []);
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

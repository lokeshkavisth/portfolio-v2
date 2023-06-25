import Navbar from "@/components/ui/navigation/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio-V2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black_01 text-white_02 font-MonoLisa">
        <Navbar />
        <main className="max-w-screen-lg mx-auto py-20  text-sm px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

import Certificate from "@/components/certificate";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import { SectionHeader } from "@/components/SectionHeader";
import { buttonvariants } from "@/components/ui/button-variants";
import Image from "next/image";
import Link from "next/link";
import { PiReadCvLogoDuotone } from "react-icons/pi";

export const metadata = {
  title: "About",
  description:
    "Freelance web developer based in Jaipur, India. Learn about my experience, skills, and how I work with small business clients.",
};

function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) age -= 1;
  return age;
}

const About = () => {
  const age = calculateAge("2000-10-15");

  return (
    <div className="space-y-16 md:space-y-24">
      <SectionHeader
        label="About me"
        title="Builder, learner, debugger."
        description="A snapshot of who I am, what I've shipped, and what I'm exploring next."
      />

      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-14 items-start">
        <div className="space-y-6 text-white_02/90 order-2 lg:order-1">
          <p>
            Hey — I&apos;m <span className="text-white_01 font-medium">Lokesh Sharma</span>
            , a {age}-year-old full-stack developer from{" "}
            <Link
              href="https://www.google.com/maps/place/Jaipur,+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-white_01 underline decoration-accent/40 underline-offset-4 transition-colors"
            >
              Jaipur, Rajasthan
            </Link>
            . I studied Arts at SS Jain Subodh PG College (2021) and pivoted into
            code right after — and never looked back.
          </p>

          <p>
            Today I freelance for small businesses — building websites, landing
            pages, and redesigns that look professional and actually convert
            visitors into customers.
          </p>

          <p>
            I learn obsessively: new frameworks, better patterns, sharper tooling.
            I also write and read about tech because sharing knowledge is half the
            fun.
          </p>

          <p className="font-mono text-sm text-white_02/70 border-l-2 border-accent/40 pl-4">
            Fun fact: I don&apos;t drink coffee — yet I debug production at 2am
            like it&apos;s a sport.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              className={buttonvariants({ variant: "primary" })}
              download
              href="/MERN-Developer-Lokesh-Sharma.pdf"
              title="Download resume"
            >
              <PiReadCvLogoDuotone />
              Download resume
            </a>
            <Link
              href="/contact"
              className={buttonvariants({ variant: "secondary" })}
            >
              Start a project
            </Link>
          </div>

          <div className="glass-card p-6 sm:p-8 space-y-4 mt-8">
            <p className="label-mono">Working with me</p>
            <h3 className="font-display text-white_01 text-lg">
              What clients can expect
            </h3>
            <ul className="space-y-3 text-sm text-white_02/85">
              <li className="flex gap-3">
                <span className="text-accent-cyan shrink-0">◆</span>
                <span>
                  <strong className="text-white_01">Clear communication</strong> —
                  regular updates via email or video call, no disappearing acts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-cyan shrink-0">◆</span>
                <span>
                  <strong className="text-white_01">Fixed quotes upfront</strong> —
                  you know the cost and timeline before any work begins.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-cyan shrink-0">◆</span>
                <span>
                  <strong className="text-white_01">2 revision rounds included</strong> —
                  we refine until you&apos;re happy with the result.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-cyan shrink-0">◆</span>
                <span>
                  <strong className="text-white_01">Remote-friendly</strong> —
                  I work with clients across India and internationally (IST timezone).
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="relative">
            <span className="sticker absolute -top-3 -left-2 z-20 bg-accent-muted border-accent/30 text-accent-cyan animate-wiggle">
              ★ dev
            </span>
            <span className="sticker absolute -bottom-2 -right-2 z-20 bg-black_02 border-accent-cyan/30 text-white_02 rotate-3">
              Jaipur, IN
            </span>
            <div className="relative rounded-2xl overflow-hidden glass-card p-1.5 rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-accent-cyan/15 pointer-events-none rounded-2xl z-10" />
              <Image
                src="/profile.gif"
                alt="Lokesh Sharma"
                width={800}
                height={500}
                className="aspect-[4/3] w-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-5 space-y-2">
              <p className="label-mono">Currently learning</p>
              <p className="text-sm text-white_02/90">
                PostgreSQL, Prisma, and Zustand on a side project.
              </p>
            </div>
            <div className="glass-card p-5 space-y-2">
              <p className="label-mono">Superpower</p>
              <p className="text-sm text-white_02/90">
                Fixed a prod bug before my noodles finished boiling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" role="separator" />
      <Experience />
      <div className="section-divider" role="separator" />
      <Education />
      <div className="section-divider" role="separator" />
      <Skill />
      <div className="section-divider" role="separator" />
      <Certificate />
    </div>
  );
};

export default About;

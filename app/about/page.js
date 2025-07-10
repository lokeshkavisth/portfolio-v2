import Certificate from "@/components/certificate";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import { buttonvariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { PiReadCvLogoDuotone } from "react-icons/pi";

export const metadata = {
  title: "About Lokesh Sharma",
  description:
    "Explore the story behind my passion for web development and dive into my journey as a MERN stack developer. Learn about my experiences, motivations, and the projects that fuel my drive to create exceptional web experiences.",
};

const About = () => {
  function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age -= 1;
    }

    return age;
  }

  return (
    <section>
      <div className="space-y-10">
        <div className="border-4 rounded-2xl border-black_04/70 overflow-hidden">
          <Image
            src={"/profile.gif"}
            alt="Lokesh Sharma"
            width={1000}
            height={400}
            className="aspect-video object-cover rounded-lg"
          />
        </div>

        <div className="space-y-8">
          <p>
            👋 Hey there! I&apos;m Lokesh Sharma — a{" "}
            {calculateAge("2000-10-15")}
            -year-old Full Stack Web Developer coding my way from the colorful
            streets of{" "}
            <Link
              href="https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8852108,75.7905578,11z/data=!4m15!1m8!3m7!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!2sJaipur,+Rajasthan!3b1!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu"
              target="_blank"
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Jaipur
            </Link>
            , Rajasthan, India. I earned my degree in Arts from SS Jain Subodh
            PG College in 2021, and I&apos;ve been coding ever since.
          </p>

          <p>
            🚀 I dove into web dev right after college, fueled by curiosity and
            a love for building things. These days, I specialize in the MERN
            stack — MongoDB, Express.js, React, and Node.js — and I use it to
            bring ideas to life on the web.
          </p>

          <p>
            🧠 I&apos;m a fast learner (obsessed, actually). Whether it&apos;s
            new frameworks, tools, or trends, I&apos;m always experimenting,
            improving, and sharing what I learn. I also enjoy reading and
            writing about tech — because the only thing better than learning is
            sharing.
          </p>

          <p>
            ☕ I don&apos;t even drink coffee... and yet, here I am, writing
            clean code and debugging like it&apos;s my superpower. 😄
          </p>

          <p>
            📧 Wanna talk tech, collab, or just say hi? Hit me up via{" "}
            <Link
              href="mailto:lokeshkavisth.dev@gmail.com"
              target="_blank"
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Gmail
            </Link>
            — I&apos;d love to connect!
          </p>

          {/* 🔽 Download Resume Button */}
          <div>
            <a
              className={buttonvariants({ variant: "primary" })}
              download
              href={"/MERN-Developer-Lokesh-Sharma.pdf"}
              title={"Get resume"}
            >
              <PiReadCvLogoDuotone /> Download Resume
            </a>
          </div>

          {/* 🧠 Currently Learning / Fun Fact Section */}
          <div className="pt-6 border-t border-black_02 space-y-2">
            <h4 className="text-white_03 font-semibold text-lg">
              💡 Currently learning…
            </h4>
            <p className="text-white_02">
              Experimenting with PostgreSQL, Prisma, and Zustand while building
              a side project.
            </p>

            <h4 className="text-white_03 font-semibold text-lg">🤓 Fun fact</h4>
            <p className="text-white_02">
              I once debugged a production bug faster than it took my noodles to
              boil. Coincidence? Maybe. Talent? Definitely.
            </p>
          </div>
        </div>
      </div>

      <hr />
      <Experience />
      <hr />

      {/* Education Section */}
      <Education />

      <hr />

      {/* Skills Section */}
      <Skill />
      <hr />

      {/* Certificate Section */}
      <Certificate />
    </section>
  );
};

export default About;

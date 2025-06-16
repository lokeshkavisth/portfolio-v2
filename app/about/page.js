import { certificates, education, experiences, skills } from "@/data/data.json";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import DynamicIcon from "@/components/dynamic-icon";
import Image from "next/image";
import Link from "next/link";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import profile from "@/assets/images/profile.jpeg";

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
        <div>
          <Image
            src={profile}
            alt="Lokesh Sharma"
            className="aspect-video object-cover rounded-lg"
          />
        </div>

        <div className="space-y-8">
          <p>
            👋 Hey there! I’m Lokesh Sharma — a {calculateAge("2000-10-15")}
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
            PG College in 2021, and I’ve been coding ever since.
          </p>

          <p>
            🚀 I dove into web dev right after college, fueled by curiosity and
            a love for building things. These days, I specialize in the MERN
            stack — MongoDB, Express.js, React, and Node.js — and I use it to
            bring ideas to life on the web.
          </p>

          <p>
            🧠 I’m a fast learner (obsessed, actually). Whether it's new
            frameworks, tools, or trends, I’m always experimenting, improving,
            and sharing what I learn. I also enjoy reading and writing about
            tech — because the only thing better than learning is sharing.
          </p>

          <p>
            ☕ I don’t even drink coffee... and yet, here I am, writing clean
            code and debugging like it’s my superpower. 😄
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
            — I’d love to connect!
          </p>

          {/* 🔽 Download Resume Button */}
          <div>
            <Button
              download
              href={"../../assets/docs/MERN-Developer-Lokesh-Sharma.pdf"}
              title={"Get resume"}
            >
              <PiReadCvLogoDuotone /> Download Resume
            </Button>
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

      <div>
        <h2 className="text-2xl font-semibold text-white_01 mb-6">
          Experiences
        </h2>
        <ul className="space-y-2">
          {experiences.map(
            ({ id, company, title, location, duration, points }) => (
              <li
                key={id}
                className="bg-black_03 border border-black_02 rounded-2xl p-5 hover:bg-black_02/70 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h3 className="text-lg font-medium text-white_03">
                    {company}
                  </h3>
                  <p className="text-sm text-white_02 opacity-70 mt-1 sm:mt-0">
                    {duration}
                  </p>
                </div>

                <p className="text-white_02 text-sm mb-2">
                  <span className="font-semibold">{title}</span> — {location}
                </p>

                <ul className="list-disc list-inside space-y-1 text-white_02 text-sm leading-relaxed pl-2">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>

      <hr />

      <div>
        <h2>Education</h2>
        <ul className="space-y-2">
          {education.map(({ id, name, time, level }) => (
            <li
              key={id}
              className="flex flex-col md:flex-row md:items-center justify-between border border-black_02 rounded-2xl p-4 bg-black_03 hover:bg-black_02/70 transition-all"
            >
              <h4 className="text-my_white">{name}</h4>
              <div className="flex flex-wrap items-center gap-3 opacity-60 capitalize">
                <p>{level}</p>
                <span>({time})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div>
        <h2>Skills</h2>
        <ul className={"flex items-center gap-2 flex-wrap w-full"}>
          {skills.map(({ id, title, icon }) => (
            <li title={title} key={id} className="bg-black_04 p-2 rounded-md">
              <DynamicIcon icon={icon} />
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div>
        <h2>Certificates</h2>
        <ul className="space-y-2">
          {certificates?.map(({ id, title, certificate, ...props }, index) => (
            <li key={id}>
              <Card
                src={certificate}
                title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
                {...props}
                cardClass={"flex-col md:flex-row"}
                cardImgClass={"aspect-video object-cover md:max-w-md"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/images/profile.jpeg";
import { education } from "@/data/data";

export const metadata = {
  title: "Lokesh Sharma - About Page",
  description: "",
};

const About = () => {
  const Education = education.reverse().map(({ id, name, time, level }) => (
    <li
      key={id}
      className="flex flex-col md:flex-row md:items-center justify-between gap-2"
    >
      <h4 className="text-my_white">{name}</h4>
      <div className="flex flex-wrap items-center gap-5 opacity-50 capitalize">
        <p>{level}</p>
        <span>{time}</span>
      </div>
    </li>
  ));

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
            👋 Hello, I&rsquo;m Lokesh Sharma, a 22-year-old Full Stack Web
            Developer based in the vibrant city of{" "}
            <Link
              href={
                "https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8852108,75.7905578,11z/data=!4m15!1m8!3m7!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!2sJaipur,+Rajasthan!3b1!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu"
              }
              target="_blank"
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Jaipur
            </Link>
            , Rajasthan, India. I graduated with a Bachelor&rsquo;s degree in
            Arts from{" "}
            <Link
              href={
                "https://www.google.com/maps/place/S.S.+Jain+Subodh+P.G.+(Autonomous)+College/@26.8957564,75.8071365,17z/data=!3m1!4b1!4m6!3m5!1s0x396db69f09ad2969:0xbfc70c460c87c200!8m2!3d26.8957516!4d75.8097114!16s%2Fm%2F0cc6cvf?entry=ttu"
              }
              target="_blank"
              className="border-b-4 border-b-white_02 text-white_01"
            >
              SS Jain Subodh PG College
            </Link>
            , Jaipur, in 2021, and since then, I&rsquo;ve been on an exciting
            journey in the world of web development.
          </p>
          <p>
            🚀 My passion for coding ignited in 2021, and I swiftly delved into
            the realm of web development. Today, I specialize in the MERN
            (MongoDB, Express.js, React, Node.js) stack, harnessing its power to
            craft immersive web experiences and dynamic applications.
          </p>
          <p>
            🧠 I take pride in being a quick learner, always eager to stay on
            the cutting edge of technology. Beyond coding, I nurture a love for
            knowledge by reading and writing tech articles, sharing insights,
            and contributing to the tech community.
          </p>
          <p>
            📧 Let&rsquo;s connect! Feel free to reach out to me at{" "}
            <Link
              href={"mailto:lokeshkavisth.dev@gmail.com"}
              target="_blank"
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Email
            </Link>{" "}
            for inquiries, opportunities, or just to chat about all things tech.
          </p>
        </div>
      </div>

      <hr />

      <div>
        <h2 className="text-xl mb-3">Education</h2>
        <ul className="space-y-5">{Education}</ul>
      </div>
    </section>
  );
};

export default About;

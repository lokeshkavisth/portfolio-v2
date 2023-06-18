import Image from "next/image";
import React from "react";
import profile from "../../assets/images/profile (1).jpeg";

const About = () => {
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
            I’m Dale a UK based product designer with over ten years of
            experience. I specialise in interface design for mobile and
            web-based applications with a focus on simplicity & usability. I’m
            passionate about design and technology and how the two can converge
            to create experiences for good.
          </p>
          <p>
            I’m currently working at WP Engine where I design some of the worlds
            best WordPress products including Advanced Custom Fields, WP Migrate
            and WP Offload Media.
          </p>
          <p>
            Before WP Engine I worked at BaseKit where I designed web
            applications like the worlds first fully functional mobile website
            builder, a commerce platform, dashboard, mobile application, and an
            online booking system.
          </p>
          <p>
            Before BaseKit I spent some time working for web agencies designing
            everything from one-page websites to native mobile applications.
            Over the years I’ve been lucky enough to work with companies like
            Nationwide, BP, Telefónica, Apple & Amazon.
          </p>
          <p>
            You can also find me working on my own projects: Design Vault, an
            online library of UX/UI patterns and inspiration from real products,
            and Does.Design, an inclusive community for designers of all
            backgrounds and skill levels.
          </p>
        </div>
      </div>
      <hr />

      <div>
        <h2 className="text-xl mb-3">Work</h2>
        <ul className="space-y-5">
          <li className="flex items-center justify-between gap-2 [&>h4]:hover:text-purple-500">
            <h4 className="text-my_white">WP Engine / Delicious Brains</h4>
            <div className="flex items-center gap-5 opacity-50">
              <p>Senior Product Designer</p>
              <span>2010-2013</span>
            </div>
          </li>

          <li className="flex items-center justify-between gap-2 [&>h4]:hover:text-purple-500">
            <h4 className="text-my_white">WP Engine / Delicious Brains</h4>
            <div className="flex items-center gap-5 opacity-50">
              <p>Senior Product Designer</p>
              <span>2010-2013</span>
            </div>
          </li>

          <li className="flex items-center justify-between gap-2 [&>h4]:hover:text-purple-500">
            <h4 className="text-my_white">WP Engine / Delicious Brains</h4>
            <div className="flex items-center gap-5 opacity-50">
              <p>Senior Product Designer</p>
              <span>2010-2013</span>
            </div>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="text-xl mb-3">About this site</h2>
        <p>In case you were wondering this site is:</p>
        <ul className=" space-y-3 ml-10 mt-3 list-disc">
          <li>
            Designed credit goes to{" "}
            <a
              href="https://github.com/daleanthony"
              target="_blank"
              className=" underline decoration-wavy hover:text-purple-400"
            >
              Dale-Anthony
            </a>
          </li>
          <li>Hosted by Digital Ocean with deployment via RunCloud</li>
          <li>Powered by KirbyCMS</li>
          <li>Tracking data using Plausible, privacy focussed analytics</li>
          <li>Set in the beautiful Monolisa typeface</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

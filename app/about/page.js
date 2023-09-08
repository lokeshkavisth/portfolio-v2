import Image from "next/image";
import React from "react";
import profile from "../../assets/images/profile (1).jpeg";
import Link from "next/link";

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
            I’m Lokesh Sharma a India based full stack web developer with over
            one year of experience. I am proficient in JavaScript, React,
            Node.js, MongoDB and Other web development languages and
            technologies.
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
            You can also find me working on my own projects:{" "}
            <Link
              href={"/projects"}
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Flashcard Generator
            </Link>
            , web application that allows users to create, manage, and share
            custom flashcards, It provides an intuitive interface and a
            comprehensive set of features to enhance the learning process. and{" "}
            <Link
              href={"/stack"}
              className="border-b-4 border-b-white_02 text-white_01"
            >
              Resume Builder
            </Link>
            , an porfessional resume builder web app where you choose from a
            variety of customizable templates and create a professional-looking
            resume that stands out to potential employers.
          </p>
        </div>
      </div>

      {/* work section  */}

      {/* <hr /> */}

      {/* <div>
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
      </div> */}
    </section>
  );
};

export default About;

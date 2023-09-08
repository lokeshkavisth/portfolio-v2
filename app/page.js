import { VscTwitter, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/ui/buttons/Button";
import divider from "../assets/divider.svg";
// import Image from "next/image";
import dummy from "../assets/images/Logo 500x500 px (1).jpeg";
import data from "../data/data.json";
import CardOne from "@/components/ui/cards/CardOne";

const socialHome = [
  {
    id: 1,
    title: "Twitter",
    icon: <VscTwitter />,
    path: "https://twitter.com/",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/",
  },
  {
    id: 3,
    title: "GitHub",
    icon: <VscGithubInverted />,
    path: "https://github.com/",
  },
];
export default function Home() {
  const socialLinksHome = socialHome?.map(({ id, title, icon, path }) => (
    <li key={id} className=" hover:bg-black_02 p-2 rounded-md">
      <Link
        href={`${path}lokeshkavisth`}
        title={title}
        className="hover:text-white_01"
      >
        {icon}
      </Link>
    </li>
  ));

  const featuredImages = [dummy, dummy, dummy];

  return (
    <section className="space-y-8">
      <h1 className=" text-5xl leading-snug pb-16">
        Full Stack Web Developer crafting seamless, user-centric experiences.
      </h1>
      <p>
        I&rsquo;m Lokesh-Sharma, a full-stack web developer living in Jaipur,
        India. As a developer, I am proficient in JavaScript, React, Node.js,
        MongoDB and{" "}
        <Link
          href={"/stack"}
          className="border-b-4 border-b-white_02 text-white_01"
        >
          Other
        </Link>{" "}
        web development languages and technologies. I am also familiar with user
        research, wireframing, prototyping, and A/B testing.
      </p>
      {/* <p>
        I’m currently working at WP Engine where I design some of the worlds
        best WordPress products including Advanced Custom Fields, WP Migrate and
        WP Offload Media.
      </p> */}
      <p>
        I am a highly motivated and results-oriented individual. I am always
        eager to learn new things and I am always looking for ways to improve my
        skills. I am confident that I have the skills and experience to be a
        valuable asset to your team. I am eager to discuss my portfolio with you
        and I look forward to hearing from you soon.
      </p>
      <div className="pt-16">
        <ul className="flex items-center gap-5 text-2xl">
          {socialLinksHome}
          <li className="ml-10">
            <Button
              text={"Email me"}
              path={"mailto:lokeshkavisth.dev@gmail.com"}
              title={"Let's discuss"}
            />
          </li>
        </ul>
      </div>

      <hr />
      <section className="space-y-10">
        <div>
          <h2 className="text-3xl mb-3">Featured projects</h2>
          <p>A collection of some side projects that have shipped recently.</p>
        </div>

        <div>
          <ul className="space-y-6">
            {data[1]?.map(({ id, title, description, path }, index) => (
              <li key={id}>
                <Link href={path} target="_blank">
                  <CardOne
                    src={featuredImages[index]}
                    title={title}
                    description={description}
                    cardImgClass={"rounded-2xl w-36"}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

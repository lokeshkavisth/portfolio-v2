import { VscTwitter, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/ui/buttons/Button";
import divider from "../assets/divider.svg";
import ProjectCard from "@/components/ui/cards/ProjectCard";
// import Image from "next/image";
import dummy from "../assets/images/Logo 500x500 px (1).jpeg";
import data from "../data/data.json";

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
    <li key={id} className=" hover:bg-my_black_20 p-2 rounded-md">
      <Link
        href={`${path}lokeshkavisth`}
        title={title}
        className="hover:text-my_white"
      >
        {icon}
      </Link>
    </li>
  ));

  const projectImages = [dummy, dummy, dummy];

  return (
    <section className="space-y-8">
      <h1 className=" text-5xl leading-snug pb-16">
        Full Stack Web Developer crafting seamless, user-centric experiences.
      </h1>
      <p>
        I’m Lokesh-Sharma, a IND based full stack web developer with over ten
        minutes of experience. I specialise in frontend, backend and database
        with a focus on simplicity & usability.
      </p>
      <p>
        I’m currently working at WP Engine where I design some of the worlds
        best WordPress products including Advanced Custom Fields, WP Migrate and
        WP Offload Media.
      </p>
      <p>
        Before WP Engine, I worked at BaseKit where I helped shape the future of
        website builders and tools to help small businesses thrive online. In my
        spare time also build tools like Design Vault and Does.Design.
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
          <ul className="space-y-10">
            {data[1]?.map(
              ({ id, title, description, height, width, path }, index) => (
                <li key={id}>
                  <Link href={path} target="_blank">
                    <ProjectCard
                      src={projectImages[index]}
                      alt={title}
                      width={width}
                      height={height}
                      title={title}
                      description={description}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </section>
  );
}

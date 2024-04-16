import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./ui/Button";

const socialHome = [
  {
    id: 1,
    title: "X",
    icon: <FaXTwitter />,
    path: "https://x.com/",
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

export function Hero() {
  const socialLinksHome = socialHome?.map(({ id, title, icon, path }) => (
    <li key={id} className=" hover:bg-black_02 p-2 rounded-md">
      <Link
        target="_blank"
        href={`${path}lokeshkavisth`}
        title={title}
        className="hover:text-white_01"
      >
        {icon}
      </Link>
    </li>
  ));

  return (
    <>
      <h1 className="text-4xl sm:text-5xl pb-16">
        Versatile MERN Stack Web Developer and Tech Enthusiast.
      </h1>
      <p>
        Hello, my name is Lokesh Sharma, and I am a Full Stack Web Developer
        living in Jaipur, India. As a developer, I am skilled in JavaScript,
        React.js, Node.js, Express.js, MongoDB, and{" "}
        <Link
          href={"/stack"}
          className="border-b-4 border-b-white_02 text-white_01"
        >
          other
        </Link>{" "}
        Web Development tools and technologies.
      </p>

      <p>
        I am an extremely driven and goal-oriented person. I&#39;m constantly
        eager to pick up new skills and am always searching for methods to get
        better at what I do. I am confident that I can contribute my skills and
        experience to your team. I am excited to discuss my portfolio with you
        and hope to hear from you soon.
      </p>
      <section className="pt-16">
        <ul className="flex flex-wrap items-center gap-5 text-2xl">
          {socialLinksHome}
          <li className="sm:ml-10">
            <Button
              href={"mailto:lokeshkavisth.dev@gmail.com"}
              title={"Let's discuss"}
            >
              <IoMail /> Email me
            </Button>
          </li>
        </ul>
      </section>
    </>
  );
}

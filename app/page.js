import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img1 from "@/assets/images/flashcard.png";
import { featured } from "@/data/data.json";
import CardOne from "@/components/ui/CardOne";
import Button from "@/components/ui/Button";

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
export default function Home() {
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

  const featuredImages = [img1, img1];

  return (
    <section className="space-y-8 ">
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
      <div className="pt-16">
        <ul className="flex flex-wrap items-center gap-5 text-2xl">
          {socialLinksHome}
          <li className="sm:ml-10">
            <Button
              text={"Email me"}
              href={"mailto:lokeshkavisth.dev@gmail.com"}
              title={"Let's discuss"}
            />
          </li>
        </ul>
      </div>

      <hr />
      <section className="space-y-10">
        <div>
          <h2 className="text-3xl mb-3">Featured projects</h2>
          <p>A glimpse of key projects showcasing skills and expertise.</p>
        </div>

        <div>
          <ul className="space-y-6">
            {featured?.map(({ id, title, description, path }, index) => (
              <li key={id}>
                <Link href={path} target="_blank">
                  <CardOne
                    src={featuredImages[index]}
                    title={title}
                    description={description}
                    cardClass={"flex-col md:flex-row"}
                    cardImgClass={
                      "rounded-2xl aspect-video w-full md:max-w-[100px] md:aspect-square md:w-auto"
                    }
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

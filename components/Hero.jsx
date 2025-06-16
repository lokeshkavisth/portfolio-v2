import Button from "./ui/Button";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { socialHome } from "@/constants/constent";

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
      <h1 className="text-4xl sm:text-5xl pb-10">
        Namaste! I’m Lokesh — your friendly neighborhood full-stack developer
        from Jaipur.
      </h1>

      <p className="pb-4">
        I design and build web experiences that are fast, intuitive, and a
        little bit delightful. Whether it’s front-end, back-end, or somewhere in
        between — I bring ideas to life through clean, thoughtful code.
      </p>

      <p>
        Also, fun fact: I don’t drink coffee. Still a developer though — powered
        by curiosity, good vibes, and way too many open tabs. Let’s build
        something cool together.
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

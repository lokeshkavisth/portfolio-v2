import { Button } from "./Button";
import { CgMediaLive } from "react-icons/cg";
import Image from "next/image";
import { PiGithubLogoLight } from "react-icons/pi";
import TruncatedPara from "../TruncatedPara";

const Card = ({
  src,
  title,
  description,
  stack,
  cardClass,
  cardImgClass,
  live_url,
  github_url,
}) => {
  return (
    <section
      className={`flex items-center gap-6 border border-black_02 rounded-2xl p-4 sm:p-6 bg-black_03 hover:bg-black_02/70  transition-all group  ${cardClass}`}
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className={`aspect-video object-cover md:max-w-md rounded-xl group-hover:scale-105 transition-all ease-in-out  ${cardImgClass}`}
        />
      </div>

      <div className="space-y-2">
        <h3>{title}</h3>
        <TruncatedPara text={description} />
        {stack && (
          <ul className="flex items-center flex-wrap gap-2">
            {stack.map((tech, index) => (
              <li
                key={index}
                className="border border-black_02 py-1 px-2 rounded-md bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-6 flex items-center gap-4">
          <Button href={live_url} target="_blank">
            <CgMediaLive />
            View Live
          </Button>

          {github_url && (
            <Button href={github_url} target="_blank">
              <PiGithubLogoLight />
              Github
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;

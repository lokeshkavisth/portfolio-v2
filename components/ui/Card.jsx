"use client";

import { Button } from "./Button";
import { CgMediaLive } from "react-icons/cg";
import Image from "next/image";
import { PiGithubLogoLight } from "react-icons/pi";
import TruncatedPara from "../TruncatedPara";
import { cn } from "@/utils/cn";
import { GlowCard } from "../creative/GlowCard";
import { motion } from "framer-motion";

const Card = ({
  src,
  title,
  description,
  problem,
  outcome,
  clientType,
  stack,
  cardClass,
  cardImgClass,
  live_url,
  github_url,
  featured = false,
}) => {
  const hasCaseStudy = problem && outcome;

  return (
    <GlowCard>
      <motion.article
        className={cn(
          "glass-card flex gap-6 p-4 sm:p-6 group bg-black_03/90",
          featured && "md:p-8",
          cardClass
        )}
      >
        <div className="relative shrink-0 overflow-hidden rounded-xl">
          {clientType && (
            <div className="absolute top-3 right-3 z-20 font-mono text-[10px] px-2 py-0.5 rounded bg-black_01/80 text-white_02/70 border border-white/[0.06]">
              {clientType}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent-cyan/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none mix-blend-overlay" />
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className={cn(
              "aspect-video object-cover w-full rounded-xl transition-transform duration-700 ease-out",
              featured ? "md:max-w-lg lg:max-w-xl" : "md:max-w-xs lg:max-w-sm",
              "group-hover:scale-[1.03] group-hover:-rotate-1",
              cardImgClass
            )}
          />
        </div>

        <div className="flex flex-col gap-3 min-w-0 flex-1 justify-center">
          <h3 className={cn("font-display", featured && "text-xl md:text-2xl")}>
            {title}
          </h3>

          {hasCaseStudy ? (
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-accent/70 mb-1">
                  Challenge
                </p>
                <p className="text-white_02/85">{problem}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-accent-cyan/70 mb-1">
                  Result
                </p>
                <p className="text-white_02/85">{outcome}</p>
              </div>
            </div>
          ) : (
            <TruncatedPara text={description} />
          )}

          {stack && (
            <ul className="flex flex-wrap gap-2">
              {stack.slice(0, featured ? 6 : 4).map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent-muted text-accent border border-accent/20"
                >
                  {tech}
                </li>
              ))}
              {stack.length > (featured ? 6 : 4) && (
                <li className="font-mono text-xs px-2 py-1 text-white_02/50">
                  +{stack.length - (featured ? 6 : 4)}
                </li>
              )}
            </ul>
          )}

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {live_url && (
              <Button href={live_url} target="_blank" variant="primary" size="sm">
                <CgMediaLive />
                Live
              </Button>
            )}
            {github_url && (
              <Button href={github_url} target="_blank" variant="secondary" size="sm">
                <PiGithubLogoLight />
                Code
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    </GlowCard>
  );
};

export default Card;

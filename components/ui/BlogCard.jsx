import Image from "next/image";
import React from "react";
import TruncatedPara from "../TruncatedPara";
import Link from "next/link";

const BlogCard = ({
  brief,
  content,
  coverImage,
  id,
  readTimeInMinutes,
  slug,
  tags,
  title,
  url,
  views,
  cardClass,
  cardImgClass,
  subtitle,
  minimal = false,
}) => {
  return (
    <section
      className={`flex gap-6 border border-black_02 rounded-md p-4 sm:p-6 bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all group min-h-full ${cardClass}`}
    >
      {!minimal && (
        <div>
          <Image
            src={coverImage.url}
            alt={title}
            width={250}
            height={250}
            className={`aspect-square object-cover w-full rounded-md group-hover:scale-105 transition-all ease-in-out  ${cardImgClass}`}
          />
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-lg capitalize group-hover:underline underline-offset-4">
          <Link
            target="_black" // Remove this line when using slugs
            href={{
              // pathname: `/blogs/${slug}`, // Uncomment this line when using slugs
              pathname: url, // comment this line when using slugs
              query: {
                id,
                title,
              },
            }}
          >
            {title}
          </Link>
        </h3>
        <TruncatedPara text={brief} />
        {tags && (
          <ul className="flex items-center flex-wrap gap-2">
            {tags.slice(0, 3).map(({ id, name }) => (
              <li
                key={id}
                className="border border-black_02 py-1 px-2 rounded-md bg-black_03 hover:bg-black_02 hover:bg-opacity-50 transition-all"
              >
                {name}
              </li>
            ))}
          </ul>
        )}

        {/* <div className="pt-6 flex items-center gap-4">
          <Button href={live_url} className={""}>
            <CgMediaLive />
            View Live
          </Button>

          {github_url && (
            <Button href={github_url} className={""}>
              <PiGithubLogoLight />
              Github
            </Button>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default BlogCard;

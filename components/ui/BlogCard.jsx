import Image from "next/image";
import Link from "next/link";
import TruncatedPara from "../TruncatedPara";

const BlogCard = ({
  brief,
  coverImage,
  id,
  tags,
  title,
  url,
  cardClass,
  cardImgClass,
  minimal = false,
}) => {
  return (
    <section
      className={`flex gap-6 border border-black_02 rounded-2xl p-4 sm:p-6 bg-black_03 hover:bg-black_02/70 transition-colors group min-h-full ${cardClass}`}
    >
      {!minimal && (
        <div>
          <Image
            src={coverImage.url}
            alt={title}
            width={250}
            height={250}
            className={`aspect-square object-cover w-full rounded-xl group-hover:scale-105 transition-all ease-in-out  ${cardImgClass}`}
          />
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-lg capitalize group-hover:underline underline-offset-4">
          <Link
            target="_blank"
            href={{
              pathname: url,
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
                className="border border-black_02 py-1 px-2 rounded-md bg-black_03 hover:bg-black_02/70  transition-colors"
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default BlogCard;

import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import { FetchBlogs } from "@/utils/fetch-blogs";
import { GrPrevious, GrNext } from "react-icons/gr";

export default async function page({ searchParams }) {
  const pageSize = 6; // Adjust as needed
  let page = searchParams?.page || 1;

  const query = `query User {
  user(username: "lokeshkavisth") {
    posts(pageSize: ${pageSize}, page: ${page}, sortBy: DATE_PUBLISHED_DESC) {
      nodes {
        id
        title
        brief
        slug
        url
        coverImage {
          url
        }
        tags {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        nextPage
        previousPage
      }
    }
  }
}`;

  const response = await FetchBlogs({ query });
  // console.log("response blog page", response.posts);

  const nextPage = response?.pageInfo.nextPage;
  const previousPage = response?.pageInfo.previousPage;
  const hasNextPage = response?.pageInfo.hasNextPage;
  const hasPreviousPage = response?.pageInfo.hasPreviousPage;

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl capitalize">Blogs</h1>
        <p>
          Explore my latest musings and in-depth articles on various subjects,
          including MERN stack development, software engineering best practices,
          and industry insights.
        </p>
      </div>
      <hr />

      <section>
        <ul className="grid sm:grid-cols-2 gap-4 items-stretch">
          {response?.nodes.map(({ id, ...props }) => (
            <li key={id}>
              <BlogCard
                {...props}
                cardClass={"flex-col "}
                cardImgClass={"aspect-video object-cover"}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* pagination */}

      <div className="flex items-center gap-4 mt-5 justify-end">
        <Button
          href={`/blogs/?page=${previousPage}`}
          variant={hasPreviousPage ? "primary" : "disabled"}
        >
          <GrPrevious /> {hasPreviousPage && "Previous"}
        </Button>
        <Button
          href={`/blogs/?page=${nextPage}`}
          variant={hasNextPage ? "primary" : "disabled"}
        >
          {hasNextPage && "Next"} <GrNext />
        </Button>
      </div>
    </div>
  );
}

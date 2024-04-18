import { GoArrowRight } from "react-icons/go";
import Button from "./ui/Button";
import BlogCard from "./ui/BlogCard";
import { FetchBlogs } from "@/utils/fetch-blogs";

export async function FeaturedBlogs() {
  const query = `query User {
  user(username: "lokeshkavisth") {
    posts(pageSize: 6, page: 1, sortBy: DATE_PUBLISHED_DESC) {
      nodes {
        id
        title
        brief
        url
        slug
        tags {
          id
          name
        }
      }
    }
  }
}`;

  const response = await FetchBlogs({ query });
  console.log("posts", response);

  return (
    <section className="space-y-10">
      <div>
        <h2>Featured Blogs</h2>
        <p>Discover curated insights on tech trends and methodologies.</p>
      </div>

      <section>
        <ul className="grid sm:grid-cols-2 gap-4 items-stretch">
          {response?.nodes.slice(0, 6)?.map(({ id, ...props }) => (
            <li key={id}>
              <BlogCard
                {...props}
                minimal={true}
                cardClass={"flex-col "}
                cardImgClass={"aspect-video object-cover"}
              />
            </li>
          ))}
        </ul>
      </section>

      <div>
        <Button href={`/blogs?page=1`} variant={"link"}>
          View All Blogs <GoArrowRight />
        </Button>
      </div>
    </section>
  );
}

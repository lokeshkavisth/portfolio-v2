import axios from "axios";

export const FetchBlogs = async ({ query }) => {
  try {
    const response = await axios.post("https://gql.hashnode.com", {
      query,
    });
    // console.log("rq, data", response.data.data.user.posts.nodes);

    const data = response.data.data.user.posts;

    return data;
  } catch (error) {
    console.error(error);
  }
};

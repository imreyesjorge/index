import { singlePostQuery } from "../../../queries/singlePost";
import { Post } from "../../../queries/types";

export async function getPost(slug: string): Promise<Post> {
  const response: any = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: singlePostQuery, variables: { url: slug } }),
    cache: "no-cache",
  }).then((res) => res.json());

  return response.data.publication.post;
}

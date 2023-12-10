import { allPostsQuery } from "../../queries/allPosts";
import { QueryPosts } from "../../queries/types";

export async function getAllPosts(): Promise<QueryPosts[]> {
  const response: any = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: allPostsQuery }),
    cache: "no-cache",
  }).then(res => res.json());

  return response.data.publication.posts.edges;
}

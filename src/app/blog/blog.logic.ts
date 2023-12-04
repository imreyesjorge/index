import request from "graphql-request";
import { allPostsQuery } from "../../queries/allPosts";
import { QueryPosts } from "../../queries/types";

export async function getAllPosts(): Promise<QueryPosts[]> {
  const response: any = await request(
    "https://gql.hashnode.com/",
    allPostsQuery
  );

  return response.publication.posts.edges;
}

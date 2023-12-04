import request from "graphql-request";
import { singlePostQuery } from "../../../queries/singlePost";
import { Post } from "../../../queries/types";

export async function getPost(slug: string): Promise<Post> {
  const response: any = await request(
    "https://gql.hashnode.com/",
    singlePostQuery,
    {
      url: slug,
    }
  );

  return response.publication.post;
}

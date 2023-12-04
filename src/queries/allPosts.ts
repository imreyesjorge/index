import { gql } from "graphql-request";

export const allPostsQuery = gql`
  query Publications {
    publication(host: "imreyesjorge.hashnode.dev") {
      isTeam
      title
      posts(first: 19) {
        edges {
          node {
            title
            slug
            views
            publishedAt
          }
        }
      }
    }
  }
`;
import { gql } from "graphql-request";

export const allPostsQuery = gql`
  query Publication {
    publication(host: "imreyesjorge.hashnode.dev") {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            title
            cuid
            views
            publishedAt
          }
        }
      }
    }
  }
`;
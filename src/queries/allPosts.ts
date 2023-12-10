export const allPostsQuery = `
  query Publications {
    publication(host: "imreyesjorge.hashnode.dev") {
      isTeam
      title
      posts(first: 20) {
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

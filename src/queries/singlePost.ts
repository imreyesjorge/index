export const singlePostQuery = `
  query getPublication($url: String!) {
    publication(host: "imreyesjorge.hashnode.dev") {
      isTeam
      title
      post(slug: $url) {
        title
        author {
          name
        }
        views
        readTimeInMinutes
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  }
`;

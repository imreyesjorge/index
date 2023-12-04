export interface QueryPosts {
  node: {
    title: string;
    slug: string;
    views: number;
    publishedAt: string;
  };
}

export interface Post {
  title: string;
  author: {
    name: string;
  };
  views: number;
  readTimeInMinutes: number;
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
}

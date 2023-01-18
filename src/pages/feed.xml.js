import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./posts/**/*.md", { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Reyes Blog",
    description: "Dev and personal blog by Jorge Reyes.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      content: post.compiledContent(),
    })),
  });

import { QueryPosts } from "../../queries/types";
import { getAllPosts } from "./blog.logic";

export default async function BlogScreen() {
  const queryPosts: QueryPosts[] = await getAllPosts();

  return (
    <main>
      <section>
        {queryPosts.map((post) => {
          return (
            <a href={`#`} key={post.node.cuid}>
              <article>
                <h3>
                  {post.node.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </h3>
                <p>
                  {new Date(post.node.publishedAt).toDateString()} ・{" "}
                  {post.node.views} reads
                </p>
              </article>
            </a>
          );
        })}
      </section>
    </main>
  );
}

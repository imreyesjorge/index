import { Post } from "../../../queries/types";
import { getPost } from "./post.logic";

export default async function PostScreen({ params }) {
  const post: Post = await getPost(params.slug);

  return (
    <main>
      <section className="blog_post">
        <div className="blog_post_info">
          <h1>{post.title}</h1>
          <small>{post.readTimeInMinutes} minutes</small>
        </div>
        <div
          className="blog_post_content"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </section>
    </main>
  );
}

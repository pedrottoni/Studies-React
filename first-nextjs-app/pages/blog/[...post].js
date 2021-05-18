import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  const routerPost = [router.query];

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Post</h1>;
      {routerPost.map((post) => (
        <div>
          <h2>{post.post[0]}</h2>
          <h2>{post.post[1]}</h2>
          <h2>{post.post[2]}</h2>
        </div>
      ))}
    </div>
  );
}

export default BlogPostsPage;

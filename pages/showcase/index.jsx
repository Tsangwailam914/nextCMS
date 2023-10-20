import PostsGrid from "../../components/posts-grid";
import { getAllPosts, getPostData } from "../../lib/posts";

export default function Showcase({ allPosts }) {
  const morePosts = allPosts.slice(1);
  // console.log(morePosts)
  return (
    <>
      {/* banner  */}
      <div>Banner</div>
      <main>
        {/* hero post  */}
        <div></div>
        <PostsGrid posts={morePosts} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "category", "slug"]);
  return {
    props: { allPosts },
  };
};

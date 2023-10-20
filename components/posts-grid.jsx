import PostPreview from "./posts-Preview";

export default function PostsGrid({posts}) {
    console.log(posts.map((post)=>post.title))

  return (
    <div className="grid grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
          />
        ))}
    </div>
  );
}

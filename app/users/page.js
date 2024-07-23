import PostCard from "@/app/components/UsersCard";
import './Users.css'

async function loadPosts() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  //await new Promise((resolve) => setTimeout(resolve, 3000))
  return data;
}

async function PostPages() {
  const posts = await loadPosts();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
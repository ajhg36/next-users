"use client";
import Link from "next/link";

export default async function PostCard({ post }) {
  //<div className="bg-gray-950 p-10">
  return (
    <div className="container mx-auto bg-blue-500 p-12 flex flex-wrap">
      {
        <div>
          <Link href={`/posts/${post.id}`}>
            <h3 className="text-xl font-bold mb-4">
              {post.id}. {post.title}
            </h3>
          </Link>

          <p className="text-slate-300">{post.body}</p>

          <button
            onClick={() => {
              alert("Click ok!");
            }}
          >
            Click
          </button>
        </div>
      }
    </div>
  );
}

//export default postcard

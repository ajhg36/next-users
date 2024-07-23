import Link from "next/link";
import UsersCard from "@/app/components/Userscard";

async function loadPost(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);

  const data = await res.json();

  return data.data;
}

export default async function UserPage({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <Link href={`/`}>
        <h3 className="text-xl font-bold mb-4">Volver</h3>
      </Link>
      <UsersCard user={post} key={post.id} />
    </div>
  );
}

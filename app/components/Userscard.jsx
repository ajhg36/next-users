//"use client";
import Link from "next/link";

export default async function UserCard({ user }) {
  //<div className="bg-gray-950 p-10">
  return (
    <div className="justify-center text-center border-solid border-rose-500 border-2 bg-green-500">
      <Link href={`/users/${user.id}`}>
        <h2 className="text-xl font-bold mb-4">Usuario: {user.id}</h2>
        <h5 className="text-m font-bold mb-4">
          Nombre: {user.first_name} {user.last_name}
        </h5>
        <h5>Email: {user.email}</h5>
        <img src={user.avatar} alt="imagen" className="rounded-full w-20 m-auto"></img>
      </Link>
    </div>
  );
}

import Image from "next/image";
//import PostCard from "@/app/components/PostCard";
import UsersCard from "@/app/components/Userscard";
//import '@/app/users/Users.css';


async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const users = await fetchUsers();
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {users.map((user) => (
        <UsersCard user={user} key={user.id} />
      ))}
    </div>
    );
}

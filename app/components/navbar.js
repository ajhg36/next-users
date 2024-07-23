import Link from "next/link";
import './navbar.css'

export default function Navbar() {
  //<nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
  /*<li>
          <Link href="/contact/book">Book</Link>
        </li>
        <li>
          <Link href="/posts">PostCard</Link>
        </li>*/
  return (
    <nav className='navbar py-5'>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav >
  );
}

import Link from "next/link";

export default function Links() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-slate-50">
        <li className="px-1">
          <Link href="/join-us">Join Us</Link>
        </li>
        <li className="px-1">
          <Link href="/about">About Us</Link>
        </li>
        <li className="px-1">
          <Link href="/truck">New Truck</Link>
        </li>
        <li className="px-1">
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

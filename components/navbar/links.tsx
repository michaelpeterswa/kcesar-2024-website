import Link from "next/link";

export default function Links() {
  return (
    <div className="navbar-center hidden md:flex">
      <ul className="inline-flex flex-row text-slate-50 gap-4">
        <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
          <Link href="/about">About Us</Link>
        </li>
        <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
          <Link href="/join-us">Join Us</Link>
        </li>

        <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className="rounded-md hover:bg-opacity-25 hover:bg-slate-300 px-4 py-2">
          <a href="https://sites.google.com/kcesar.org/members">Members</a>
        </li>
      </ul>
    </div>
  );
}

import Link from "next/link";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/join-us">Join Us</Link>
        </li>
        <li className="">
          <Link href="/members">Members</Link>
        </li>
        <li className="">
          <Link href="/safety-tips">Safety Tips</Link>
        </li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
        <li className="">
          <Link href="/truck">New Truck</Link>
        </li>
        <li className="">
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/donate" className="">
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50">
      <div className="navbar-start">
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
            <li>
              <Link href="/donate" className="">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/emergency" className="">
                Emergency
              </Link>
            </li>
          </ul>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mx-2"
        >
          <Link href="/">
            <div className="w-12 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://kcesar.org/assets/logo/logo_kcesar_300x300.png"
                width={300}
                height={300}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="px-1">
            <Link href="/join-us">Join Us</Link>
          </li>
          <li className="px-1">
            <Link href="/members">Members</Link>
          </li>
          <li className="px-1">
            <Link href="/safety-tips">Safety Tips</Link>
          </li>
          <li className="px-1">
            <Link href="/about">About</Link>
          </li>
          <li className="px-1">
            <details>
              <summary className="">Other</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="menu menu-horizontal px-1 gap-2">
          <Link
            href="/donate"
            className="btn btn-ghost hidden md:flex  bg-orange-500 text-white"
          >
            Donate
          </Link>
          <Link
            href="/emergency"
            className="btn btn-ghost flex bg-red-500 text-white"
          >
            Emergency
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 text-white">
      {/* TODO: add scroll transition to navbar at some point */}
      <div className="flex-1">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <Link href="/">
            <div className="w-10 rounded-full">
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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
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
          <li className="px-1">
            <Link href="/donate" className="bg-orange-500 text-white">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

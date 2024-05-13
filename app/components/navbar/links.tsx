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
          <Link href="/safety-tips">Safety Tips</Link>
        </li>
        <li className="px-1">
          <Link href="/members">Members</Link>
        </li>
        <li className="px-1">
          <details>
            <summary className="">Other</summary>
            <ul className="p-2 bg-base-100 rounded-lg">
              <li className="">
                <Link href="/truck">New Truck</Link>
              </li>
              <li className="">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

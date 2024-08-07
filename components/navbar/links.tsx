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
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="">
              Other ˅
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link href="/truck">New Truck</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

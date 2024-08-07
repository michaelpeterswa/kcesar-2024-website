import Link from "next/link";

export default function EndButtons() {
  return (
    <div className="menu menu-horizontal px-1 gap-2">
      <Link
        href="/donate"
        className="btn btn-ghost flex  bg-orange-500 text-white"
      >
        Donate
      </Link>
    </div>
  );
}

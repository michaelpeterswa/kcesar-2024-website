import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex text-center items-center justify-center -translate-y-12">
      <div className="max-w-6xl p-10">
        <Image
          alt="Tailwind CSS Navbar component"
          src="/kcesar/logo_kcesar_300x300.png"
          width={200}
          height={200}
          priority={true}
          className="drop-shadow pb-10 inline-block"
        />
        <h1 className="text-4xl md:text-7xl font-gin font-normal text-white drop-shadow">
          <span className="block">King County Explorer</span>
          <span className="block">Search & Rescue</span>
        </h1>
        <br />
        <h1 className="text-2xl font-gin text-white drop-shadow">
          Est. 1954 - King County, Washington
        </h1>
        <br />
        <p className="text-white text-lg">
          King County Explorer Search & Rescue is one of the earliest Search &
          Rescue organizations established in the United States and the largest
          of eight member-units of the King County Search & Rescue Association.
        </p>
        <br />
        <Link
          href="/join-us"
          className="btn bg-esar-green text-white border-none"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}

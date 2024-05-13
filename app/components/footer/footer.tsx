import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-esar-green py-5 text-white">
      <aside>
        <h1 className="font-bold text-2xl">Support us to save lives.</h1>
        <Image
          alt="Tailwind CSS Navbar component"
          src="/kcesar/logo_kcesar_300x300.png"
          width={150}
          height={150}
          priority={true}
          className="drop-shadow py-5 inline-block"
        />
        <p className="font-bold">
          King County Explorer Search & Rescue <br />
          Providing search and rescue services to King County since 1954
          <br />
          <br />
          King County Explorer Search & Rescue (ESAR) is a 501(c)(3) Volunteer
          Organization
          <br />
          <br />
          EIN #91-1433442
        </p>
        <p>© 2024 KCESAR • PO Box 1266 • North Bend, WA 98045</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.facebook.com/kingcountyesar/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </nav>
    </footer>
  );
}

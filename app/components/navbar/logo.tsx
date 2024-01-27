import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
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
  );
}

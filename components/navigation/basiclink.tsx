import Link from "next/link";

export default function BasicLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="btn bg-esar-green text-white">
      {title}
    </Link>
  );
}

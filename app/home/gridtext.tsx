import Link from "next/link";

export default function GridText({
  title,
  body,
  link,
  linkText,
}: {
  title: string;
  body: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="container">
        <h2 className="font-bold text-center">{title}</h2>
        <br />
      </div>
      <div className="w-5/6 justify-center">
        <p className="text-justify">{body}</p>
      </div>
      <div className="pt-4">
        <Link href={link} className="btn bg-esar-green">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Card({
  personName,
  title,
  email,
  location,
  alt,
}: {
  personName: string;
  title: string;
  email: string;
  location: string;
  alt: string;
}) {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://picsum.photos/400/600"
          alt="Tools"
          height={500}
          width={500}
          className="object-cover max-h-[300px]"
        />
      </figure>
      <div className="card-body bg-esar-green rounded-b-xl">
        <h2 className="card-title text-white"> {personName}</h2>

        <div className="card-actions justify-end">
          <p>{title}</p>
          <div className="w-6 h-6 fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <Link href={`mailto:${email}`}>
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </Link>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

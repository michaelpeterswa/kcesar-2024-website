import Image from "next/image";

export default function Card({
  personName,
  title,
  location,
  alt,
}: {
  personName: string;
  title: string;
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
        <p>{title}</p>
      </div>
    </div>
  );
}

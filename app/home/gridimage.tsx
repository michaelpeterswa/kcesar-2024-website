import Image from "next/image";

export default function GridImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="col-span-2">
      <div className="relative h-96">
        <Image
          alt={alt}
          src={location}
          fill={true}
          className="brightness-90 object-cover overflow-hidden rounded-xl"
        />
      </div>
    </div>
  );
}

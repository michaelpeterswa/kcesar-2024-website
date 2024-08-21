import Image from "next/image";

export default function BasicImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="relative h-80 w-3/4">
      <Image
        alt={alt}
        src={location}
        fill={true}
        className="brightness-90 object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}

export function BasicImageTall({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="relative h-96 w-3/4">
      <Image
        alt={alt}
        src={location}
        fill={true}
        className="brightness-90 object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}

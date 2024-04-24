import Image from "next/image";

export default function JoinImage({
  location,
  alt,
}: {
  location: string;
  alt: string;
}) {
  return (
    <div className="relative h-80 w-1/2">
      <Image
        alt={alt}
        src={location}
        fill={true}
        className="brightness-90 object-cover overflow-hidden rounded-xl"
      />
    </div>
  );
}

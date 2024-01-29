export default function Stats({
  number,
  description,
}: {
  number: string;
  description: string;
}) {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <h1 className="text-center">
          <span className="font-komet text-6xl block">{number}</span>
          <span className="font-komet text-2xl block">{description}</span>
        </h1>
      </div>
    </div>
  );
}

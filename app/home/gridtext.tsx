export default function GridText({
  title,
  body,
}: {
  title: string;
  body: string;
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
    </div>
  );
}

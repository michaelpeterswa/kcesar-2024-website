export default function PrerequisitesCard({
  prerequisites,
}: {
  prerequisites: string[];
}) {
  return (
    <div className="py-5">
      <div className="card bg-esar-green w-full">
        <div className="card-body">
          <h2 className="card-title text-2xl">Prerequisites:</h2>
          <ul className="list-disc">
            {prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

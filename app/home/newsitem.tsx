import Link from "next/link";

export default function NewsItem({
  title,
  location,
  agency,
  summary,
}: {
  title: string;
  location: string;
  agency: string;
  summary: string;
}) {
  return (
    <div className="py-4">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          {title} - {agency}
        </div>
        <div className="collapse-content">
          <p>{summary}</p>
          <br />
          <Link href={location} className="btn bg-esar-green text-white">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

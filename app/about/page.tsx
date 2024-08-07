import Link from "next/link";
import Banner from "@/components/banner/banner";
import Card from "./card";
import BasicLayout from "@/components/layout/basiclayout";

export default async function About() {
  let people = [
    {
      personName: "John Doe",
      title: "Director of Direction",
      location: "",
      alt: "",
      email: "example@example.com",
    },
    {
      personName: "Kerry Doe",
      title: "Director of Injuries",
      location: "",
      alt: "",
      email: "example@example.com",
    },
    {
      personName: "Terry Doe",
      title: "Director of Rescues",
      location: "",
      alt: "",
      email: "example@example.com",
    },
    {
      personName: "Michael Peters",
      title: "Website Guy",
      location: "",
      alt: "",
      email: "example@example.com",
    },
  ];

  return (
    <BasicLayout>
      <Banner
        title="About"
        location="/kcesar/4.jpg"
        alt="Rescuers walking down a trail with a litter"
      />
      <h2>Who We Are</h2>
      <p className="text-xl pt-8 text-justify px-20 container">
        King County Explorer Search & Rescue was founded in 1954 as one of the
        first organized search and rescue teams in the country, and the first to
        accept youth members. The &quot;Explorer&quot; in Explorer Search &
        Rescue comes from ESAR&apos;s affiliation with the Boy Scouts of America
        Learning for Life program. King County ESAR still maintains a Post with
        the Boy Scouts of America but we are not as directly associated with
        Scouting as we once were. Today, we are the largest of eight
        member-units of the King County Search & Rescue Association (KCSARA) and
        accept both adult and youth members each training season.
      </p>
      <Link href="/about/history" className="btn bg-esar-green text-white mt-8">
        Our History
      </Link>
      <div className="divider py-10"></div>
      <h2>Our Leadership</h2>
      <br />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 px-20">
        {people.map((person) => (
          <Card
            key={person.personName}
            personName={person.personName}
            title={person.title}
            email={person.email}
            location=""
            alt=""
          ></Card>
        ))}
      </div>
    </BasicLayout>
  );
}

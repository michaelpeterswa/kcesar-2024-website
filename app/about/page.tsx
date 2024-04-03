import Banner from "../components/banner/banner";
import Card from "./card";

export default async function About() {
  let people = [
    {
      personName: "John Doe",
      title: "Director of Direction",
      location: "",
      alt: "",
    },
    {
      personName: "Kerry Doe",
      title: "Director of Injuries",
      location: "",
      alt: "",
    },
    {
      personName: "Terry Doe",
      title: "Director of Rescues",
      location: "",
      alt: "",
    },
    {
      personName: "Michael Peters",
      title: "Website Guy",
      location: "",
      alt: "",
    },
  ];

  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="About"
        location="/kcesar/hero_1.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h2>Who We Are</h2>
      <br></br>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 px-20">
        {people.map((person) => (
          <Card
            personName={person.personName}
            title={person.title}
            location=""
            alt=""
          ></Card>
        ))}
      </div>
    </div>
  );
}

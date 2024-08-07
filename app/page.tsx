import Stats from "@/components/home/stats";
import Video from "@/components/home/video";
import Hero from "@/components/home/hero";
import GridText from "@/components/home/gridtext";
import SmallImage from "@/components/home/smallimage";
import NewsBlock from "@/components/home/newsblock";
import GridImage from "@/components/home/gridimage";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="min-h-screen">
          <Video />
          <Hero />
        </div>
      </div>
      <div className="">
        <div className="flex min-w-full justify-items-center content-center text-center bg-base-100 py-10">
          <div className="container mx-auto">
            <div className="hidden grid-cols-3 md:grid gap-4 gap-y-10 place-items-stretch">
              <GridImage
                location="/kcesar/1.jpg"
                alt="Rescuers in van pointing at TV with map"
              />

              <GridText
                title="Who We Are"
                body="King County Explorer Search & Rescue (also known as KCESAR or ESAR) is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
                link="/about"
                linkText="Learn More"
              />

              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
                link="/join-us"
                linkText="Join Us"
              />

              <GridImage
                location="/kcesar/7.jpg"
                alt="KCESAR logo on a jacket"
              />

              <GridImage
                location="/kcesar/11.jpg"
                alt="Rescuers pointing at a map outside"
              />

              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
                link="/donate"
                linkText="Donate Now"
              />
            </div>

            <div className="md:hidden">
              <SmallImage
                location="/kcesar/1.jpg"
                alt="Rescuers in van pointing at TV with map"
              />
              <GridText
                title="Who We Are"
                body="ESAR is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
                link="/about"
                linkText="Learn More"
              />
              <div className="divider"></div>

              <SmallImage
                location="/kcesar/7.jpg"
                alt="KCESAR logo on a jacket"
              />
              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
                link="/donate"
                linkText="Donate Now"
              />
              <div className="divider"></div>

              <SmallImage
                location="/kcesar/11.jpg"
                alt="Rescuers pointing at a map outside"
              />
              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
                link="/join-us"
                linkText="Join Us"
              />
            </div>

            <div className="divider pt-10"></div>
            <div className="p-8">
              <h1 className="font-bold">KCESAR by the numbers:</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-4 place-items-stretch hidden">
              <Stats number={150} description="Missions per Year" />
              <Stats number={50000} description="Mission Hours" />
              <Stats number={500} description="Volunteers" />
            </div>
            <div className="md:hidden grid-cols-1 place-items-stretch grid">
              <Stats number={150} description="Searches per Year" />
              <div className="divider"></div>
              <Stats number={10000} description="Hours" />
              <div className="divider"></div>
              <Stats number={500} description="Volunteers" />
            </div>
            <div className="divider"></div>
            <h1 className="font-bold pb-3">KCESAR in the news:</h1>
            <div className="container mx-auto">
              <NewsBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

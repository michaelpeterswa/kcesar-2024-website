import React from "react";
import Image from "next/image";
import Stats from "./home/stats";
import Video from "./home/video";
import Hero from "./home/hero";
import GridImage from "./home/gridimage";
import GridText from "./home/gridtext";
import SmallImage from "./home/smallimage";

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
                location="/kcesar/hero_1.jpg"
                alt="Rescuers standing at the edge of a cliff"
              />

              <GridText
                title="Who We Are"
                body="King County Explorer Search & Rescue (also known as KCESAR or ESAR) is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
              />

              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
              />

              <GridImage
                location="/kcesar/hero_2.jpg"
                alt="Rescuers carrying a subject on a litter"
              />

              <GridImage
                location="/kcesar/hero_3.jpg"
                alt="Rescuers walking up a snowy trail"
              />

              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
              />
            </div>

            <div className="md:hidden">
              <SmallImage
                location="/kcesar/hero_1.jpg"
                alt="Rescuers standing at the edge of a cliff"
              />
              <GridText
                title="Who We Are"
                body="ESAR is the primary ground search and rescue resource in King County and the largest of nine member-units in the King County Search & Rescue Association. We operate under the purview of the King County Sheriff's Office and Washington State Department of Emergency Management."
              />
              <div className="divider"></div>

              <SmallImage
                location="/kcesar/hero_2.jpg"
                alt="Rescuers carrying a subject on a litter"
              />
              <GridText
                title="Donate"
                body="100% Volunteer, 100% Donation Funded. King County Explorer Search & Rescue is a non-profit organization. It is donations from people like you that make Search & Rescue services possible. Please consider donating today."
              />
              <div className="divider"></div>

              <SmallImage
                location="/kcesar/hero_3.jpg"
                alt="Rescuers walking up a snowy trail"
              />
              <GridText
                title="Join Us"
                body="King County Explorer Search & Rescue is open to both adult and youth membership. New members must complete our comprehensive basic training program which is designed to prepare them for the challenges that they will face in the field."
              />
            </div>

            <div className="divider pt-20"></div>
            <div className="p-4 py-16">
              <h1 className="font-bold">KCESAR by the numbers:</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-4 place-items-stretch hidden">
              <div className="">
                <Stats number={150} description="Missions per Year" />
              </div>
              <div className=" ">
                <Stats number={50000} description="Mission Hours" />
              </div>
              <div className="">
                <Stats number={500} description="Volunteers" />
              </div>
            </div>
            <div className="md:hidden grid-cols-1 place-items-stretch grid ">
              <Stats number={150} description="Searches per Year" />
              <div className="divider"></div>
              <Stats number={10000} description="Hours" />
              <div className="divider"></div>
              <Stats number={500} description="Volunteers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

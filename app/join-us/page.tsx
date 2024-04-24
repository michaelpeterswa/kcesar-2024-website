import Banner from "../components/banner/banner";
import Image from "next/image";
import JoinImage from "./joinimage";
import Link from "next/link";

export default async function JoinUs() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Join Us"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <h2>Joining King County Explorer Search & Rescue</h2>
      <text className="lg:text-md text-xl pt-8 text-justify px-20 container">
        Membership in King County Explorer Search & Rescue (ESAR) is open to
        those who are age 14 and older, have a desire to help others in the
        outdoors, and are willing to respond to emergencies whenever possible.
      </text>
      <br />
      <JoinImage
        location="/kcesar/5.jpg"
        alt="Rescuers walking up a trail with a litter"
      />
      <text className="text-xl pt-8 text-justify px-20 container">
        In order to ensure that new members have the knowledge and skills
        necessary to positively and safely contribute to search and rescue
        operations prospective members must complete King County ESAR&apos;S
        Basic Training program.
      </text>
      <br />
      <JoinImage location="/kcesar/13.jpg" alt="Rescuers looking at a map" />
      <text className="text-xl pt-8 text-justify px-20 container">
        They must also provide documentation for several independently obtained
        certifications and complete core-competency training as prescribed by
        the Washington State Department of Emergency Management and the King
        County Sheriff&apos;s Office.
      </text>
      <br />
      <h2>Interested? Continue learning below:</h2>
      <Link
        href="/join-us/basic-training-overview"
        className="btn bg-esar-green text-white mt-8"
      >
        Basic Training Overview
      </Link>
    </div>
  );
}

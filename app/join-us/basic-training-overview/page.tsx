import Banner from "@/app/components/banner/banner";
import JoinImage from "../joinimage";
import Link from "next/link";

export default async function BasicTrainingOverview() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Join Us"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <h2 className="">Basic Training Overview</h2>
      <text className="text-xl pt-8 text-justify px-20 container">
        ESAR Basic Training is a comprehensive program designed to prepare new
        members for the challenges that they will face in the field. As a
        trainee, you will receive instruction and demonstrate proficiency in
        wilderness navigation, survival skills, search method theory, first aid,
        and evidence search procedures.
      </text>
      <br />
      <JoinImage
        location="/kcesar/12.jpg"
        alt="Rescuers discussing around a map"
      />
      <br />
      <text className="text-xl pt-8 text-justify px-20 container">
        Basic Training begins in July and runs through April. It is purposefully
        scheduled during the winter months to give trainees experience working
        in the challenging conditions they could encounter on a mission.
        Training may involve snow, ice, wind, rain, and other unpleasant
        situations.
      </text>
      <br />
      <JoinImage location="/kcesar/3.jpg" alt="Rescuers looking at a map" />
      <br />
      <text className="text-xl pt-8 text-justify px-20 container">
        Trainees are expected to understand how to prevent hypothermia, to be
        aware of the conditions around them, and to take care of themselves and
        their team. Basic Training requires approximately 170 hours including
        four overnight-weekends, several full-day and evening classroom
        sessions, and a combination of homework and independent on-line
        learning.
      </text>
      <br />
      <JoinImage location="/kcesar/6.jpg" alt="Rescuers looking at a map" />
      <br />
      <text className="text-xl pt-8 text-justify px-20 container">
        All courses are pass/fail and some trainees may need to repeat one or
        more additional weekends to successfully complete the series. For
        additional information about the training and courses, please download a
        copy of the Basic Training Orientation Packet.
      </text>
      <br />
      <JoinImage location="/kcesar/5.jpg" alt="Rescuers looking at a map" />
      <br />
      <h2>Training Materials:</h2>
      <Link
        href="/join-us/training-materials"
        className="btn bg-esar-green text-white mt-8"
      >
        Download Here
      </Link>
    </div>
  );
}

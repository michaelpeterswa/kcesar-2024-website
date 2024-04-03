import Banner from "../components/banner/banner";
import Image from "next/image";

export default async function JoinUs() {
  return (
    <div className="flex flex-col items-center">
      <Banner
        title="Join Us"
        location="/kcesar/hero_3.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h2 className="">What does it take?</h2>
      <text className="text-xl pt-8 text-justify px-20 container">
        Membership in King County Explorer Search & Rescue (ESAR) is open to
        those who are age 14 and older, have a desire to help others in the
        outdoors, and are willing to respond to emergencies whenever possible.
      </text>
      <br />
      <div className="relative h-72 w-2/5">
        <Image
          alt="Rescuers walking up a snowy trail"
          src="/kcesar/hero_2.jpg"
          fill={true}
          className="brightness-90 object-cover overflow-hidden rounded-xl"
        />
      </div>
      <text className="text-xl pt-8 text-justify px-20 container">
        In order to ensure that new members have the knowledge and skills
        necessary to positively and safely contribute to search and rescue
        operations prospective members must complete King County ESAR&apos;S
        Basic Training program.
      </text>
      <br />
      <div className="relative h-72 w-2/5">
        <Image
          alt="Rescuers walking up a snowy trail"
          src="/kcesar/hero_3.jpg"
          fill={true}
          className="brightness-90 object-cover overflow-hidden rounded-xl"
        />
      </div>
      <text className="text-xl pt-8 text-justify px-20 container">
        They must also provide documentation for several independently obtained
        certifications and complete core-competency training as prescribed by
        the Washington State Department of Emergency Management and the King
        County Sheriff&apos;s Office.
      </text>
      <br />
      <h2 className="">Basic Training Overview</h2>
      <text className="text-xl pt-8 text-justify px-20 container">
        ESAR Basic Training is a comprehensive program designed to prepare new
        members for the challenges that they will face in the field. As a
        trainee, you will receive instruction and demonstrate proficiency in
        wilderness navigation, survival skills, search method theory, first aid,
        and evidence search procedures.
      </text>
      <br />
      <text className="text-xl pt-8 text-justify px-20 container">
        Basic Training begins in July and runs through April. It is purposefully
        scheduled during the winter months to give trainees experience working
        in the challenging conditions they could encounter on a mission.
        Training may involve snow, ice, wind, rain, and other unpleasant
        situations.
      </text>
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
      <text className="text-xl pt-8 text-justify px-20 container">
        All courses are pass/fail and some trainees may need to repeat one or
        more additional weekends to successfully complete the series. For
        additional information about the training and courses, please download a
        copy of the Basic Training Orientation Packet.
      </text>
      <br />
    </div>
  );
}

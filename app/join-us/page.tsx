import Banner from "@/components/banner/banner";
import CenteredText from "@/components/text/centeredtext";
import Link from "next/link";
import { Subtitle } from "@/components/text/subtitle";
import BasicImage from "@/components/image/basicimage";
import BasicLayout from "@/components/layout/basiclayout";

export default async function JoinUs() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <Subtitle content="Joining King County Explorer Search & Rescue" />
      <CenteredText
        content="Membership in King County Explorer Search & Rescue (ESAR) is open to
        those who are age 14 and older, have a desire to help others in the
        outdoors, and are willing to respond to emergencies whenever possible."
      />
      <BasicImage
        location="/kcesar/5.jpg"
        alt="Rescuers walking up a trail with a litter"
      />
      <CenteredText
        content="In order to ensure that new members have the knowledge and skills
        necessary to positively and safely contribute to search and rescue
        operations prospective members must complete King County ESAR'S
        Basic Training program."
      />
      <BasicImage location="/kcesar/13.jpg" alt="Rescuers looking at a map" />
      <CenteredText
        content="They must also provide documentation for several independently obtained
        certifications and complete core-competency training as prescribed by
        the Washington State Department of Emergency Management and the King
        County Sheriff's Office."
      />
      <h2>Interested? Continue learning below:</h2>
      <Link
        href="/join-us/basic-training-overview"
        className="btn bg-esar-green mt-8 text-white"
      >
        Basic Training Overview
      </Link>
    </BasicLayout>
  );
}

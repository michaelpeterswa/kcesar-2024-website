import Banner from "@/components/banner/banner";
import BasicImage from "@/components/image/basicimage";
import BasicLink from "@/components/navigation/basiclink";
import BasicLayout from "@/components/layout/basiclayout";
import CenteredText from "@/components/text/centeredtext";
import { Subtitle } from "@/components/text/subtitle";

export default async function BasicTrainingOverview() {
  return (
    <BasicLayout>
      <Banner
        title="Join Us"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <Subtitle content="Basic Training Overview" />
      <CenteredText
        content="ESAR Basic Training is a comprehensive program designed to prepare new
        members for the challenges that they will face in the field. As a
        trainee, you will receive instruction and demonstrate proficiency in
        wilderness navigation, survival skills, search method theory, first aid,
        and evidence search procedures."
      />
      <BasicImage
        location="/kcesar/12.jpg"
        alt="Rescuers discussing around a map"
      />
      <CenteredText
        content="Basic Training begins in July and runs through April. It is purposefully
        scheduled during the winter months to give trainees experience working
        in the challenging conditions they could encounter on a mission.
        Training may involve snow, ice, wind, rain, and other unpleasant
        situations."
      />
      <BasicImage location="/kcesar/3.jpg" alt="Rescuers looking at a map" />
      <CenteredText
        content="Trainees are expected to understand how to prevent hypothermia, to be
        aware of the conditions around them, and to take care of themselves and
        their team. Basic Training requires approximately 170 hours including
        four overnight-weekends, several full-day and evening classroom
        sessions, and a combination of homework and independent on-line
        learning."
      />
      <BasicImage location="/kcesar/6.jpg" alt="Rescuers looking at a map" />
      <CenteredText
        content="All courses are pass/fail and some trainees may need to repeat one or
        more additional weekends to successfully complete the series. For
        additional information about the training and courses, please download a
        copy of the Basic Training Orientation Packet."
      />
      <BasicImage location="/kcesar/5.jpg" alt="Rescuers looking at a map" />
      <br />
      <Subtitle content="Training Materials:" />
      <br />
      <BasicLink href="/join-us/training-materials" title="Download Here" />
    </BasicLayout>
  );
}

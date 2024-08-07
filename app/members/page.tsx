import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import { Subtitle } from "@/components/text/subtitle";

export default async function Members() {
  return (
    <BasicLayout>
      <Banner
        title="Members"
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <Subtitle content="⛔ Members Only ⛔" />
    </BasicLayout>
  );
}

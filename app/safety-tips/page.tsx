import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import { Subtitle } from "@/components/text/subtitle";

export default async function SafetyTips() {
  return (
    <BasicLayout>
      <Banner
        title="Safety Tips"
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <Subtitle content="Safety Tips from ESAR!" />
    </BasicLayout>
  );
}

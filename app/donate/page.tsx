import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import { Subtitle } from "@/components/text/subtitle";

export default async function Donate() {
  return (
    <BasicLayout>
      <Banner title="Donate" location="/kcesar/6.jpg" alt="Rescuer pointing" />
      <Subtitle content="Donate to ESAR!" />
    </BasicLayout>
  );
}

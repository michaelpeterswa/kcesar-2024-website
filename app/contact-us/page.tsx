import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";
import { Subtitle } from "@/components/text/subtitle";

export default async function ContactUs() {
  let pageTitle = "Contact Us";
  return (
    <BasicLayout>
      <Banner
        title={pageTitle}
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <Subtitle content={pageTitle} />
    </BasicLayout>
  );
}

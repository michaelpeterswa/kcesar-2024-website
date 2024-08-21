import Banner from "@/components/banner/banner";
import BasicLayout from "@/components/layout/basiclayout";

export default async function Truck() {
  return (
    <BasicLayout>
      <Banner
        title="New Rescue Truck"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <h2>Will you help us?</h2>
    </BasicLayout>
  );
}

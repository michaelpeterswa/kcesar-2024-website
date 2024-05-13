import Banner from "@/app/components/banner/banner";

export default async function TrainingMaterials() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Join Us"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <h2 className="">Training Materials</h2>
    </div>
  );
}

import Banner from "../components/banner/banner";

export default async function SafetyTips() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Safety Tips"
        location="/kcesar/hero_2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h1 className="text-5xl text-center">Safety Tips from ESAR!</h1>
    </div>
  );
}

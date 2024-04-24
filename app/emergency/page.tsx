import Banner from "../components/banner/banner";

export default async function Emergency() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Emergency"
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h1 className="text-5xl text-center">What to do in an emergency?</h1>
    </div>
  );
}

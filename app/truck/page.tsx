import Banner from "../components/banner/banner";

export default async function Truck() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="New Rescue Truck"
        location="/kcesar/8.jpg"
        alt="Rescuers walking in field"
      />
      <h2>Will you help us?</h2>
    </div>
  );
}

import Banner from "../components/banner/banner";

export default async function Members() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title="Members"
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h1 className="text-5xl text-center">⛔ Members Only ⛔</h1>
    </div>
  );
}

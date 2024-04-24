import Banner from "../components/banner/banner";

export default async function Donate() {
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner title="Donate" location="/kcesar/6.jpg" alt="Rescuer pointing" />
      <h1 className="text-5xl text-center">How to donate to ESAR!</h1>
    </div>
  );
}

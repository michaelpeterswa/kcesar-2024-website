import Banner from "../components/banner/banner";

export default async function ContactUs() {
  let pageTitle = "Contact Us";
  return (
    <div className="flex flex-col items-center pb-10">
      <Banner
        title={pageTitle}
        location="/kcesar/2.jpg"
        alt="Rescuers walking up a snowy trail"
      />
      <h1 className="text-5xl text-center">How to {pageTitle}</h1>
    </div>
  );
}

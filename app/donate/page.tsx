import Banner from "@/components/banner/banner";
import DonateCard, {
  DonateCardProps,
  PaypalDonateButton,
  SimpleDonateLinkButton,
} from "@/components/donate/card";
import BasicLayout from "@/components/layout/basiclayout";
import BasicLink from "@/components/navigation/basiclink";
import { Subtitle } from "@/components/text/subtitle";
import { FaFacebook } from "react-icons/fa";

let donateOptions: DonateCardProps[] = [
  {
    title: "Donate on Facebook",
    text: (
      <p>
        ESAR Receives 100% of your donation via Facebook. Simply visit our page
        click on the &apos;Donate&apos; button.
      </p>
    ),
    imageHref: "/kcesar/donate/fb-donate.png",
    imageAlt: "ESAR Facebook Page showing donate button",
    showButton: true,
    button: (
      <SimpleDonateLinkButton
        href="https://www.facebook.com/kingcountyesar/"
        buttonIcon={<FaFacebook className="w-5 h-5" />}
      />
    ),
  },
  {
    title: "Donate via PayPal",
    text: (
      <p>
        Donate to ESAR via PayPal. You can use your PayPal account or a credit
        card.
      </p>
    ),
    imageHref: "/kcesar/donate/paypal-donate.png",
    imageAlt: "PayPal Donate Button",
    showButton: true,
    button: <PaypalDonateButton />,
  },
  {
    title: "Donate by Mail",
    text: (
      <div>
        <p>KCESAR</p>
        <p>PO Box 40152</p>
        <p>Bellevue, WA 98015</p>
        <p>Tax ID #91-1433442</p>
      </div>
    ),
    imageHref: "/kcesar/donate/mail-donate.jpg",
    imageAlt: "Photo by Joel Moysuh on Unsplash",
    showButton: false,
  },
];

export default async function Donate() {
  return (
    <BasicLayout>
      <Banner
        title="Donate"
        location="/kcesar/advanced-litter/advanced-litter-32.jpg"
        alt="Rescuers navigating a litter over an obstacle"
      />
      <Subtitle content="We are fundraising for a new rescue truck!" />
      <div className="py-4" />
      <BasicLink href="/truck" title="View Plans and Donation Options" />
      <div className="divider py-5" />
      <Subtitle content="General Donations: Here's a few easy ways to donate!" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-10 mt-10">
        {donateOptions.map((option, idx) => (
          <DonateCard key={idx} props={option} />
        ))}
      </div>
    </BasicLayout>
  );
}

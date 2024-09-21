import BasicLink from "../navigation/basiclink";
import CenteredText from "../text/centeredtext";
import { Subtitle } from "../text/subtitle";

export default function Application({
  acceptingApplications,
}: {
  acceptingApplications: boolean;
}) {
  if (acceptingApplications) {
    return (
      <div className="flex flex-col items-center">
        <Subtitle content="Ready to Apply?" />
        <div className="pt-8">
          <BasicLink title="Apply Now" href="#" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-4">
        <Subtitle content="Ready to Apply?" />
        <div className="pt-4">
          <CenteredText content="Training season is now underway and we are not currently accepting applications. Please check back next spring/summer!" />
        </div>
      </div>
    );
  }
}

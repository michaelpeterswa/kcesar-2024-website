import BasicLink from "@/components/navigation/basiclink";
import { SubtitleNoUnderline } from "@/components/text/subtitle";
import CenteredText from "@/components/text/centeredtext";

export default function GridText({
  title,
  body,
  link,
  linkText,
}: {
  title: string;
  body: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="flex items-center flex-col justify-center">
      <SubtitleNoUnderline content={title} />
      <CenteredText content={body} />
      <BasicLink title={linkText} href={link} />
    </div>
  );
}

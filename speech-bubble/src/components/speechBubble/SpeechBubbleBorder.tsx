import { BorderBubble } from "./bubbles/BorderBubble";
import { SpeechIcon } from "./icons/SpeechIcon";

type Props = {
  iconImageSrc: string;
  text: string;
  isReverse?: boolean;
};

export const SpeechBubbleBorder = ({
  iconImageSrc,
  text,
  isReverse,
}: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-4`}
    >
      <SpeechIcon src={iconImageSrc} />
      <BorderBubble text={text} isReverse={isReverse} />
    </div>
  );
};

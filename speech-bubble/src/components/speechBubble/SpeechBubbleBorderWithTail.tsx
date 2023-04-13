import { BorderBubbleWithTail } from "./bubbles/BorderBubbleWithTail";
import { SpeechIcon } from "./icons/SpeechIcon";

type Props = {
  iconImageSrc: string;
  text: string;
  isReverse?: boolean;
};

export const SpeechBubbleBorderWithTail = ({
  iconImageSrc,
  text,
  isReverse,
}: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-4`}
    >
      <SpeechIcon src={iconImageSrc} />
      <BorderBubbleWithTail text={text} isReverse={isReverse} />
    </div>
  );
};

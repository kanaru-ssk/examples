import { BubbleWithTail } from "./bubbles/BubbleWithTail";
import { SpeechIcon } from "./icons/SpeechIcon";

type Props = {
  iconImageSrc: string;
  text: string;
  isReverse?: boolean;
};

export const SpeechBubbleWithTail = ({
  iconImageSrc,
  text,
  isReverse,
}: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-4`}
    >
      <SpeechIcon src={iconImageSrc} />
      <BubbleWithTail text={text} isReverse={isReverse} />
    </div>
  );
};

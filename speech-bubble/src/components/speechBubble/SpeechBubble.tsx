import { Bubble } from "./bubbles/Bubble";
import { SpeechIcon } from "./icons/SpeechIcon";

type Props = {
  iconImageSrc: string;
  text: string;
  isReverse?: boolean;
};

export const SpeechBubble = ({ iconImageSrc, text, isReverse }: Props) => {
  return (
    <div
      className={`${isReverse ? "flex-row-reverse" : ""} flex items-end gap-4`}
    >
      <SpeechIcon src={iconImageSrc} />
      <Bubble text={text} isReverse={isReverse} />
    </div>
  );
};

import Image from "next/image";

type Props = {
  iconImageSrc: string;
  text: string;
  isReverse?: boolean;
};

export const SpeechBubble = ({ iconImageSrc, text, isReverse }: Props) => (
  <div
    data-layout="SpeechBubble"
    className={`${isReverse ? "flex-row-reverse" : ""} flex`}
  >
    <div
      className={`${
        isReverse ? "bg-slate-100" : "border border-slate-100"
      } flex h-14 w-14 shrink-0 items-center justify-center rounded-full`}
    >
      <Image src={iconImageSrc} height="40" width="40" alt="speech-icon" />
    </div>
    <div
      className={`${
        isReverse
          ? "mr-4 border border-slate-200 before:right-[-16px] before:z-10 before:border-l-white after:absolute after:right-[-18px] after:top-[15px] after:border-[9px] after:border-transparent after:border-l-slate-200 after:content-['']"
          : "ml-4 bg-slate-100 before:left-[-16px] before:border-r-slate-100"
      } relative w-full rounded p-4 leading-6 before:absolute before:top-4 before:border-8 before:border-transparent before:content-['']`}
    >
      {text}
    </div>
  </div>
);

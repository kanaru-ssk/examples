import Image from "next/image";

type Props = {
  src: string;
};

export const SpeechIcon = ({ src }: Props) => {
  return (
    <Image
      src={src}
      height="36"
      width="36"
      alt="speech-icon"
      className="h-9 w-9 shrink-0 rounded-full border border-slate-100"
    />
  );
};

type Props = {
  text: string;
  isReverse?: boolean;
};

export const BorderBubbleWithTail = ({ text, isReverse }: Props) => {
  return (
    <p
      className={`${
        isReverse
          ? "before:right-[-16px] before:border-l-white after:right-[-18px] after:border-l-slate-100"
          : "before:left-[-16px] before:border-r-white after:left-[-18px] after:border-r-slate-100"
      } relative rounded-xl border border-slate-100 bg-white p-4 before:absolute before:bottom-4 before:z-10 before:border-8 before:border-transparent before:content-[''] after:absolute after:bottom-[15px] after:border-[9px]  after:border-transparent after:content-['']`}
    >
      {text}
    </p>
  );
};

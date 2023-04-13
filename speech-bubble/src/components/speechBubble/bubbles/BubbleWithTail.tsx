type Props = {
  text: string;
  isReverse?: boolean;
};

export const BubbleWithTail = ({ text, isReverse }: Props) => {
  return (
    <p
      className={`${
        isReverse
          ? "before:right-[-16px] before:border-l-slate-100"
          : "before:left-[-16px] before:border-r-slate-100"
      } relative rounded-xl bg-slate-100 p-4 before:absolute before:bottom-4 before:border-8 before:border-transparent before:content-['']`}
    >
      {text}
    </p>
  );
};

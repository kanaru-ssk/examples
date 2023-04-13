type Props = {
  text: string;
  isReverse?: boolean;
};

export const BorderBubble = ({ text, isReverse }: Props) => {
  return (
    <p
      className={`${
        isReverse ? "rounded-br-sm" : "rounded-bl-sm"
      } rounded-xl border border-slate-100 p-4`}
    >
      {text}
    </p>
  );
};

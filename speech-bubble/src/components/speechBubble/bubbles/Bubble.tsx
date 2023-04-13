type Props = {
  text: string;
  isReverse?: boolean;
};

export const Bubble = ({ text, isReverse }: Props) => {
  return (
    <p
      className={`${
        isReverse ? "rounded-br-sm" : "rounded-bl-sm"
      } rounded-xl bg-slate-100 p-4`}
    >
      {text}
    </p>
  );
};

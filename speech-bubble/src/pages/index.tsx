import { SpeechBubble } from "@/components/speechBubble/SpeechBubble";
import { SpeechBubbleBorder } from "@/components/speechBubble/SpeechBubbleBorder";
import { SpeechBubbleBorderWithTail } from "@/components/speechBubble/SpeechBubbleBorderWithTail";
import { SpeechBubbleWithTail } from "@/components/speechBubble/SpeechBubbleWithTail";

const Home = () => {
  return (
    <main className="mx-auto max-w-2xl space-y-8 p-8">
      <SpeechBubble
        iconImageSrc="/icon.svg"
        text="This message is using SpeechBubbleSimple component."
      />
      <SpeechBubble
        iconImageSrc="/icon.svg"
        text="This message is using SpeechBubbleSimple component with isReverse props."
        isReverse
      />
      <SpeechBubbleBorder
        iconImageSrc="/icon.svg"
        text="This message is using SpeechBubbleBorder component with isReverse props."
      />
      <SpeechBubbleBorder
        iconImageSrc="/icon.svg"
        text="This is SpeechBubbleBorder component with isReverse props."
        isReverse
      />
      <SpeechBubbleWithTail
        iconImageSrc="/icon.svg"
        text="This message is using SpeechBubbleWithTail component with isReverse props."
      />
      <SpeechBubbleWithTail
        iconImageSrc="/icon.svg"
        text="This is SpeechBubbleWithTail component with isReverse props."
        isReverse
      />
      <SpeechBubbleBorderWithTail
        iconImageSrc="/icon.svg"
        text="This message is using SpeechBubbleBorderWithTail component with isReverse props."
      />
      <SpeechBubbleBorderWithTail
        iconImageSrc="/icon.svg"
        text="This is SpeechBubbleBorderWithTail component with isReverse props."
        isReverse
      />
    </main>
  );
};

export default Home;

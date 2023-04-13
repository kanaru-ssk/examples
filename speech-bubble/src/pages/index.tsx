import { SpeechBubble } from "@/components/SpeechBubble";

const Home = () => {
  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <SpeechBubble
        iconImageSrc="/vercel.svg"
        text="This is test text. This is test text. This is test text. This is test text. This is test text. This is test text."
      />
      <SpeechBubble
        iconImageSrc="/vercel.svg"
        text="This is test text. This is test text. This is test text. This is test text. This is test text. This is test text."
        isReverse
      />
      <SpeechBubble
        iconImageSrc="/vercel.svg"
        text="This is test text. This is test text. This is test text. This is test text. This is test text. This is test text."
      />
      <SpeechBubble
        iconImageSrc="/vercel.svg"
        text="This is test text. This is test text. This is test text. This is test text. This is test text. This is test text."
        isReverse
      />
    </main>
  );
};

export default Home;

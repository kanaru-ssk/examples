import { getTweet, type Tweet } from "next-tweet/api";
import { EmbeddedTweet, TweetSkeleton } from "next-tweet";
// import { TweetPage } from "@/components/TweetPage";

// export async function getStaticProps({
//   params,
// }: {
//   params: { tweet: string };
// }) {
//   try {
//     // const tweet = await getTweet(params.tweet);
//     // return tweet ? { props: { tweet } } : { notFound: true };
//   } catch (error) {
//     return { notFound: true };
//   }
// }

export const getStaticProps = async () => {
  const tweet = await getTweet("00000");
  return { tweet };
};

type Props = {
  tweet: any;
};

export default function Home({ tweet }: Props) {
  // getTweet("00000");s
  // const tweet = await getTweet("00000");
  return <div>aa</div>;
}

// export default Home;

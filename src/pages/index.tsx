// import { type GetServerSideProps, type NextPage } from "next";
import { type NextPage } from "next";
// import { useSession } from "next-auth/react";
import Hero from "~/components/Hero";
// import { getServerAuthSession } from "~/server/auth";
import HotBids from "~/components/HotBids";
import TopArtist from "~/components/TopArtist";
import TopTrending from "~/components/TopTrending";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerAuthSession(ctx);
//   return {
//     props: { session },
//   };
// };

const Home: NextPage = () => {
  // const { data: session } = useSession();

  return (
    <main
      className={`min-h-dscreen bg-white font-playfairDisplay text-primaryText`}
    >
      {/* <h1>Welcome to Homepage: {session?.user.name || "Stranger"}!</h1> */}
      <Hero />
      <HotBids />
      <TopTrending /> 
      <TopArtist />
    </main>
  );
};

export default Home;

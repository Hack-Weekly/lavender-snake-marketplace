import { type GetServerSideProps, type NextPage } from "next";
import { useSession } from "next-auth/react";
import Hero from "~/components/Hero";
import { getServerAuthSession } from "~/server/auth";
import HotBids from "~/components/HotBids";
import TopArtist from "~/components/TopArtist";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main
      className={`min-h-screen bg-white font-playfairDisplay text-primaryText`}
    >
      <div className="font-poppins">Test</div>
      {/* <h1>Welcome to Homepage: {session?.user.name || "Stranger"}!</h1> */}
      <Hero />
      <HotBids />
      <TopArtist />
    </main>
  );
};

export default Home;

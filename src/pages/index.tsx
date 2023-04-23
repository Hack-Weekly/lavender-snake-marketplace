import { type GetServerSideProps, type NextPage } from "next";
import { useSession } from "next-auth/react";
import Hero from "~/components/Hero";
import { getServerAuthSession } from "~/server/auth";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

import {Playfair_Display} from "next/font/google";
import HotBids from "~/components/HotBids";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--playfair-display"
})


const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main className={`${playfair.className} min-h-screen bg-white text-primaryText`}>
      {/* <h1>Welcome to Homepage: {session?.user.name || "Stranger"}!</h1> */}
      <Hero />
      <HotBids />
    </main>
  );
};

export default Home;

import { type GetServerSideProps, type NextPage } from "next";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen">
      <h1>Welcome to Homepage: {session?.user.name || "Stranger"}!</h1>
    </main>
  );
};

export default Home;

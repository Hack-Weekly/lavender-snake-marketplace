import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const User = () => {
  const { data: session } = useSession();
  if (!session) {
    return <div>Unauthorized</div>;
  }
  return (
    <>
      <p>Welcome {session.user.name}!</p>
      <p>{session.user.email}</p>
      <p>{session.user.image}</p>
      <p>{session.user.id}</p>
    </>
  );
};

export default User;

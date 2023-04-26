import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useProfile } from "~/components/ProfileContextProvider";
import CreateProfile from "./components/CreateProfile";
import Login from "./components/Login";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const User = () => {
  const { data: session } = useSession();
  const profile = useProfile();
  if (!session) {
    return <Login />;
  }
  if (!profile) {
    return <CreateProfile />;
  }
  return (
    <>
      <h2 className="font-bold">Session Context</h2>
      <p>{session.user.name}!</p>
      <p>{session.user.email}</p>
      <p>{session.user.image}</p>
      <p>{session.user.id}</p>
      <h2 className="font-bold">Profile Context</h2>
      <p>{profile.firstname}</p>
      <p>{profile.middlename}</p>
      <p>{profile.surname}</p>
      <p>{profile.address}</p>
      <p>{profile.mobile}</p>
    </>
  );
};

export default User;

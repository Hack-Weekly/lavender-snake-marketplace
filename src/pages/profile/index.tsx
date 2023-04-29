import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useProfile } from "~/components/ProfileContextProvider";
import CreateProfile from "./components/CreateProfile";
import Login from "../../components/Login";
import Image from "next/image";
import { Pencil } from "lucide-react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const UserProfile = () => {
  const { data: session } = useSession();
  const profile = useProfile();
  if (!session) {
    return <Login />;
  }
  if (!profile) {
    return <CreateProfile />;
  }
  return (
    <div className="font-poppins">
      <div className="flex items-end p-6 bg-geraldineBg">
        <div>
          {session.user.image && 
            <Image
            src={session.user.image}
            alt="user avatar"
            width={100}
            height={100}
            priority
            className="rounded-lg"
          />
          }
        </div>
        <div className="ml-6">
          <div className="font-playfairDisplay text-5xl font-semibold mb-2" >
            {profile.firstname} {profile.middlename} {profile.surname}
          </div>
          <div className="text-lg italic font-light">@{session.user.name}</div>
        </div>
        <div className="ml-auto bg-cardBg p-2 rounded-full cursor-pointer">
          <Pencil />
        </div>
      </div>
      <div className="p-6">
        More details here
      </div>
    </div>
    // <>

    //   <h2 className="font-bold">Session Context</h2>
    //   <p>{session.user.name}!</p>
    //   <p>{session.user.email}</p>
    //   <p>{session.user.image}</p>
    //   <p>{session.user.id}</p>
    //   <h2 className="font-bold">Profile Context</h2>
    //   <p>{profile.firstname}</p>
    //   <p>{profile.middlename}</p>
    //   <p>{profile.surname}</p>
    //   <p>{profile.address}</p>
    //   <p>{profile.mobile}</p>
    // </>
  );
};

export default UserProfile;

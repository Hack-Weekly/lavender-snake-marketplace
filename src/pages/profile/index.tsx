import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useProfile } from "~/components/ProfileContextProvider";
import CreateProfile from "./components/CreateProfile";
import Login from "../../components/Login";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { Edit } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { profileDataT, sessionDataT } from "./utils";
import type { Item } from "~/server/utils";

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
  }else if (!profile) {
    return <CreateProfile />;
  }else {
    const sessionData = {
      userName: session.user.name,
      email: session.user.email,
      image: session.user.image,
      userId: session.user.id,
    }
    const profileData = {
      firstName: profile.firstname,
      middleName: profile.middlename,
      surName: profile.surname,
      address: profile.address,
      mobile: profile.mobile,
    }
    return <UserProfileFn sessionData={sessionData} profileData={profileData} /> 
  }
}

const UserProfileFn = (props: {sessionData: sessionDataT, profileData: profileDataT}) => {
  const [sellingItems, setSellingItems] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void getSellingItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const userId = props.sessionData.userId;
  const getSellingItems = async () => {
    const response = await fetch(`api/selling/${userId}`)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {items} = await response.json();
    if(response) setLoading(false);
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSellingItems(items);
  }

  const deleteSellingItem = async (id: string) => {
    const response = await fetch(`/api/items/${id}`, {
      method: "DELETE",
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    console.log(data);

    // update selling arts list
    void getSellingItems();
  }

  return (
    <div className="font-poppins">
      <div className="flex items-end p-6 bg-geraldineBg">
        <div>
          {props.sessionData.image && 
            <Image
            src={props.sessionData.image}
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
            {props.profileData.firstName} {props.profileData.middleName} {props.profileData.surName}
          </div>
          <div className="text-lg italic font-light">@{props.sessionData.userName}</div>
        </div>
        <div className="ml-auto bg-cardBg p-2 rounded-full cursor-pointer">
          <Pencil />
        </div>
      </div>
      <div className="p-6">
        <div className="text-lg font-bold">CURRENTLY SELLING ARTS</div>
        {(loading) &&
          <div>Loading...</div>
        }
        {(!loading) &&
          <div className="w-6/12 flex flex-col border border-altBrand mt-2">
            {
              sellingItems.map((item, index) => {
                return (
                  <SellingArt key={index} sellingItem={item} deleteItem={deleteSellingItem} /> 
                )
              })
            }
          </div>
        }
      </div>
    </div>

    );
};

function SellingArt(props: {sellingItem: Item, deleteItem: (id: string) => Promise<void>}){
  return (
    <div className="flex items-center justify-between odd:bg-[#f9f9fa] even:bg-grey  py-2 px-4">
      <div>{props.sellingItem.name}</div>
      <a href={`/art/${props.sellingItem.id}`} target="_blank" className="ml-auto text-sm text-altBrand hover:underline" >
        View
      </a>
      <Edit size="20" className="ml-4 cursor-pointer" />
      <Trash2 
        size="20" 
        className="ml-4 cursor-pointer"
        onClick={() => props.deleteItem(props.sellingItem.id)} 
      />
    </div>
  )
}

export default UserProfile;
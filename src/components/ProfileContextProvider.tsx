import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  type FC,
  useEffect,
} from "react";

interface ProfileContextType {
  exist: boolean;
  firstname?: string;
  middlename?: string;
  surname?: string;
  address?: string;
  email?: string | null;
  mobile?: string;
}

interface ProfileContextProviderProps {
  children?: ReactNode;
  userId?: string;
  email?: string | null;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileContextProvider: FC<ProfileContextProviderProps> = ({
  children,
  ...props
}) => {
  const [Profile, setProfile] = useState<ProfileContextType | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      if (props.userId) {
        const res = await fetch(`/api/profile/${props.userId}`);
        if (isSubscribed) {
          if (res.status == 200) {
            const json = (await res.json()) as ProfileContextType;
            json.email = props.email;
            setProfile(json);
          }
        }
      }
    };

    fetchData()
      .then(() => setLoading(false))
      .catch(console.error);

    return () => void (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userId]);
  if (isLoading) return null;
  else {
    return (
      <ProfileContext.Provider value={Profile}>
        {children}
      </ProfileContext.Provider>
    );
  }
};

export const useProfile = () => useContext(ProfileContext);

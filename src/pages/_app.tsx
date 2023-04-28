import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Layout } from "~/components/Layout";

import "~/styles/globals.css";
import { ProfileContextProvider } from "~/components/ProfileContextProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ProfileContextProvider userId={session?.user.id}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ProfileContextProvider>
    </SessionProvider>
  );
};

export default MyApp;

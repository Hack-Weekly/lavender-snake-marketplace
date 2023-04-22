import Head from "next/head";
import SiteFooter from "~/components/SiteFooter";
import SiteHeader from "~/components/SiteHeader";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectMeta />

      <SiteHeader />

      {children}

      <SiteFooter />
    </>
  );
}

function ProjectMeta() {
  return (
    <Head>
      <title>Project Name</title>
      <meta
        name="description"
        content="Fullstack E-commerce app by Lavender Snake"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

import Head from "next/head";
import SiteFooter from "~/components/SiteFooter";
import SiteHeader from "~/components/SiteHeader";
import { Playfair_Display, Poppins, Baskervville } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--playfair-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--poppins",
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--baskervville",
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${playfair.variable} ${poppins.variable} ${baskervville.variable} bg-white text-primaryText`}
    >
      <ProjectMeta />

      <SiteHeader />

      <div className="min-h-[calc(100dvh-12.5rem)]">
        {children}
      </div>

      <SiteFooter />
    </div>
  );
}

function ProjectMeta() {
  return (
    <Head>
      <title>LavenScape</title>
      <meta
        name="description"
        content="Fullstack E-commerce app by Lavender Snake"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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

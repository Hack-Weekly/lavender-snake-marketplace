import { GithubIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-geraldineBg p-3 text-primaryText">
      <Link
        href="https://github.com/Hack-Weekly/lavender-snake"
        className="rounded-full border-2 border-primaryText p-1 hover:bg-primaryText hover:text-white"
      >
        <GithubIcon />
      </Link>
      <div
        className={`${poppins.className} text-xl font-semibold text-[#4a4657]`}
      >
        Created by
        <Link
          href="https://github.com/orgs/Hack-Weekly/teams/lavender-snake"
          className="text-[#16153f] hover:text-primaryText"
        >
          {" "}
          Lavender Snake Team
        </Link>
      </div>
    </footer>
  );
}

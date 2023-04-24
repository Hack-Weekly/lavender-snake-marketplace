import { GithubIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function SiteFooter() {
  return <footer className="bg-geraldineBg text-primaryText flex flex-col items-center gap-2 p-3">
    <Link href="https://github.com/Hack-Weekly/lavender-snake" className="p-1 border-2 border-primaryText rounded-full hover:bg-primaryText hover:text-white">
      <GithubIcon />
    </Link>
    <div className={`${poppins.className} font-semibold text-xl text-[#4a4657]`}>
      Created by
      <Link href="https://github.com/orgs/Hack-Weekly/teams/lavender-snake" className="text-[#16153f] hover:text-primaryText"> Lavender Snake Team</Link>
    </div>
    </footer>;
}

import Image from "next/image";
import FireSVG from "./icon/fire.svg";
import formatter from "./CurrencyFormatter";
import Link from "next/link";

interface BidsData {
  imageSrc: string;
  artName: string;
  artist: string;
  bids: number;
  quickBuy: number;
}

export default function HotBids() {
  return (
    <div className="flex flex-col items-center bg-geraldineBg px-6 py-6 sm:py-8 lg:py-10">
      <div
        className="mb-4 xs:mb-6 mx-auto flex flex-row items-center gap-2 font-poppins text-xl xs:text-3xl lg:text-4xl font-bold"
      >
        <FireIcon />
        <div className="text-[#322420] text-center">HOT BIDS HAPPENING</div>
        <FireIcon />
      </div>
      <div className="flex w-full flex-col lg:flex-row items-center justify-around gap-4">
        {hotBidsData.map((data, index) => {
          return (
            <Link href={`/art/${encodeURIComponent(data.artName)}`} key={index}>
            <HotBidsCard
              key={index}
              imageSrc={data.imageSrc}
              artName={data.artName}
              artist={data.artist}
              bids={data.bids}
              quickBuy={data.quickBuy}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const hotBidsData: Array<BidsData> = [
  {
    imageSrc: "/images/angels-awakening.png",
    artName: "Angel's Awakening",
    artist: "Yeon Bambi",
    bids: 10,
    quickBuy: 1000,
  },
  {
    imageSrc: "/images/mindless-epiphany.png",
    artName: "Mindless Epiphany",
    artist: "Skido Leonardo",
    bids: 245727,
    quickBuy: 852890,
  },
  {
    imageSrc: "/images/le-desespere.png",
    artName: "Le Désespéré",
    artist: "Gustave Courbet",
    bids: 10,
    quickBuy: 1000,
  },
];

function HotBidsCard(props: BidsData) {
  return (
    <div className="flex w-[20rem] xs:w-[24rem] lg:w-[20rem] min-[1150px]:w-[22rem] cursor-pointer flex-col items-center rounded-2xl bg-cardBg hover:bg-[#e2e0e0] drop-shadow-xl hover:drop-shadow-2xl">
      <div>
        <Image
          className="h-44 w-[20rem] xs:w-[24rem] lg:w-[20rem] min-[1150px]:w-[22rem] rounded-t-2xl object-cover"
          src={props.imageSrc}
          alt={props.artName}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex w-full flex-col px-6 py-3">
        <div className="font-baskervville">
          <div className="text-base font-semibold text-black">
            {props.artName}
          </div>
          <div className="mb-4 text-sm italic text-[#2E2E5A]">
            {props.artist}
          </div>
        </div>
        <div className="flex flex-row justify-between font-poppins font-bold text-xs">
          <div className="flex gap-3">
            <div className="text-text-grey">BIDS:</div>
            <div>{formatter.format(props.bids)}</div>
          </div>
          <div className="flex gap-3">
            <div className="text-text-grey">QUICK BUY:</div>
            <div>{formatter.format(props.quickBuy)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FireIcon() {
  return (
    <Image
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      src={FireSVG}
      alt="fire icon"
    />
  );
}

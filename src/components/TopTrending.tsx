import Image from "next/image";


type TrendingCardData = {
  imageSrc: string,
  title: string,
  author: string,
  bids: number,
  quickBuy: number,
};

// Categories
const paintingData: Array<TrendingCardData> = [
  {
    imageSrc: "/images/chilly-day.png",
    title: "Chilly Day",
    author: "Mike Seraph",
    bids: 830,
    quickBuy: 14787,
  },
  {
    imageSrc: "/images/euphoria.png",
    title: "Euphoria",
    author: "Ej Kim",
    bids: 457823,
    quickBuy: 777123,
  },
  {
    imageSrc: "/images/grand-scheme.png",
    title: "Grand Scheme",
    author: "ClearMinds",
    bids: 98000,
    quickBuy: 100564,
  },
  {
    imageSrc: "/images/monotone.png",
    title: "Monotone",
    author: "MonoRepo",
    bids: 100,
    quickBuy: 9000,
  },
];

const abstractArtData: Array<TrendingCardData> = [
  {
    imageSrc: "/images/geom-world.png",
    title: "Geom World",
    author: "Geom Metry",
    bids: 179,
    quickBuy: 1890,
  },
  {
    imageSrc: "/images/divergence.png",
    title: "Divergence",
    author: "Shadow",
    bids: 14590,
    quickBuy: 200000,
  },
  {
    imageSrc: "/images/perfect-grandiose.png",
    title: "Perfect Grandiose",
    author: "Jhin Saki",
    bids: 44,
    quickBuy: 44000,
  },
  {
    imageSrc: "/images/contrast-dive.png",
    title: "Contrast Dive",
    author: "Nvdia Taquia",
    bids: 1782,
    quickBuy: 20000,
  },
];

const digitalArtData: Array<TrendingCardData> = [
  {
    imageSrc: "/images/chilly-day.png",
    title: "Chilly Day",
    author: "Mike Seraph",
    bids: 830,
    quickBuy: 14787,
  },
  {
    imageSrc: "/images/euphoria.png",
    title: "Euphoria",
    author: "Ej Kim",
    bids: 457823,
    quickBuy: 777123,
  },
  {
    imageSrc: "/images/grand-scheme.png",
    title: "Grand Scheme",
    author: "ClearMinds",
    bids: 98000,
    quickBuy: 100564,
  },
  {
    imageSrc: "/images/monotone.png",
    title: "Monotone",
    author: "MonoRepo",
    bids: 100,
    quickBuy: 9000,
  },
];



export default function TopTrending() {
  return (
    <div className="bg-indigoBg h-9">

    </div>
  );
} 

function TrendingCard(): TrendingCardData {
  return (
    <div>
      <Image 
        src={"/image/birds-of-paradise.png"}
        width={250}
        height={250}
        priority
      />
    </div>
  );
}
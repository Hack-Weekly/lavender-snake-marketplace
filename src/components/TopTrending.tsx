import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "./SiteHeader";


type TrendingCardData = {
  imageSrc: string,
  title: string,
  author: string,
  bids: number,
  quickBuy: number,
};

export default function TopTrending() {
  return (
    <div className="bg-indigoBg flex flex-col gap-6 p-6">

      <h1 className="font-poppins text-yellowText">Top Trending in Abstract Art</h1>
      <div className="flex gap-7">
        <ArrowLeft />
        {/* abstract art category */}
        {abstractArtData.map((data, index) => (
          <TrendingCard 
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            author={data.author}
            bids={data.bids}
            quickBuy={data.quickBuy}
            />
            ))}
        <ArrowRight />
      </div>

      <h1 className="font-poppins text-yellowText">Top Trending in Paintings and Drawings</h1>
      <div className="flex gap-7">
        <ArrowLeft />
        {/* paintings category */}
        {paintingData.map((data, index) => (
          <TrendingCard 
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            author={data.author}
            bids={data.bids}
            quickBuy={data.quickBuy}
          />
          ))}
        <ArrowRight />
      </div>

      <h1 className="font-poppins text-yellowText">Top Trending in Digital Art</h1>
      <div className="flex gap-7">
        <ArrowLeft />
        {/* digital art category */}
        {digitalArtData.map((data, index) => (
          <TrendingCard 
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            author={data.author}
            bids={data.bids}
            quickBuy={data.quickBuy}
          />
        ))}
        <ArrowRight />
      </div>

    </div>
  );
} 


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
    imageSrc: "/images/blossom-of-new-beginnings.png",
    title: "Blossom of New Beginnings",
    author: "Hyun Song Kim",
    bids: 590077,
    quickBuy: 700000,
  },
  {
    imageSrc: "/images/faraway-paradise.png",
    title: "Faraway Paradise",
    author: "Enigmatic Love",
    bids: 24890,
    quickBuy: 57000,
  },
  {
    imageSrc: "/images/the-world-tree.png",
    title: "The World Tree",
    author: "Sung Choi",
    bids: 98000,
    quickBuy: 100564,
  },
  {
    imageSrc: "/images/wuthering-waves.png",
    title: "Wuthering Waves",
    author: "Netweb Hack",
    bids: 100000,
    quickBuy: 190789,
  },
];


function TrendingCard(props: TrendingCardData) {
  return (
    <div className="bg-cardBg pb-7 rounded-2xl w-[22rem] shadow-md">
      <Image 
        className="h-32 w-[22rem] rounded-t-2xl object-cover"
        src={props.imageSrc}
        alt={props.title}
        width={500}
        height={500}
        priority
      />

      <div className="flex flex-col">

        <div className="font-baskervville ">        
          <h1 className="font-bold">{props.title}</h1>
          <h2 className="font-light">{props.author}</h2>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2">
            <p className="font-poppins text-text-grey">BIDS: </p>
            <p>{props.bids}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-poppins text-text-grey">QUICK BUY: </p>
            <p>{props.bids}</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

function ArrowLeft() {
  return (
    <IconButton>
      <div className="bg-cardBg rounded-full p-3">
          <ChevronLeft className="text-indigoBg h-7 w-7"/>
      </div>
    </IconButton>
  );
}

function ArrowRight() {
  return (
    <IconButton>
      <div className="bg-cardBg rounded-full p-3">
          <ChevronRight className="text-indigoBg h-7 w-7"/>
      </div>
    </IconButton>
  );
}











/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "./SiteHeader";
import formatter from "./CurrencyFormatter";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


type TrendingCardData = {
  id?: string,
  imageSrc: string,
  title: string,
  author: string,
  bids: number,
  quickBuy: number,
};

export default function TopTrending() {
  // check if this is needed lol
  const router = useRouter();
  const { key } = router.query;

  const scrollAmountRef = useRef(window.innerWidth * 0.6);

  useEffect(() => {    
    window.addEventListener("resize", () => {
      scrollAmountRef.current = Math.round(window.innerWidth * 0.6);      
    })
  }, [])

  const scrollHorizontal = (sectionId: string, toRight: boolean) => {    
    toRight && document.getElementById(sectionId)?.scrollBy(scrollAmountRef.current,0);
    !toRight && document.getElementById(sectionId)?.scrollBy(-scrollAmountRef.current,0);
  }

  return (
    <div className="bg-indigoBg flex flex-col flex-1 gap-6 px-3 py-10">

      <h2 className="font-poppins text-yellowText text-xl xs:text-2xl font-bold">Top Trending in Abstract Art</h2>
      <div className="flex w-full justify-center items-center gap-5">
        <div onClick={() => scrollHorizontal("abstract", false)}>
          <ArrowLeft />
        </div>
        {/* abstract art category */}
        <div id="abstract" className="flex items-center gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none">
          {abstractArtData.map((data, index) => (
              <Link href={`/art/${key}`} key={index} className="snap-start">
                <TrendingCard 
                  key={index}
                  imageSrc={data.imageSrc}
                  title={data.title}
                  author={data.author}
                  bids={data.bids}
                  quickBuy={data.quickBuy}
                />
            </Link>
          ))}
        </div>
        <div onClick={() => scrollHorizontal("abstract", true)}>
          <ArrowRight />
        </div>
      </div>

      <h2 className="font-poppins text-yellowText text-xl xs:text-2xl font-bold">Top Trending in Paintings and Drawings</h2>
      <div className="flex w-full justify-center items-center gap-5">
        <div onClick={() => scrollHorizontal("paintings", false)}>
          <ArrowLeft />
        </div>
        {/* paintings category */}
        <div id="paintings" className="flex items-center gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none">
          {paintingData.map((data, index) => (
              <Link href={`/art/${key}`} key={index} className="snap-start">
                <TrendingCard 
                  key={index}
                  imageSrc={data.imageSrc}
                  title={data.title}
                  author={data.author}
                  bids={data.bids}
                  quickBuy={data.quickBuy}
                />
            </Link>
          ))}
        </div>
        <div onClick={() => scrollHorizontal("paintings", true)}>
          <ArrowRight />
        </div>
      </div>

      <h2 className="font-poppins text-yellowText text-xl xs:text-2xl font-bold">Top Trending in Digital Art</h2>
      <div className="flex justify-center items-center gap-5">
        <div onClick={() => scrollHorizontal("digital", false)}>
          <ArrowLeft />
        </div>
        {/* digital art category */}
        <div id="digital" className="flex items-center gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none">
          {digitalArtData.map((data, index) => (
            <Link href={`/art/${key}`} key={index} className="snap-start">
              <TrendingCard 
                key={index}
                imageSrc={data.imageSrc}
                title={data.title}
                author={data.author}
                bids={data.bids}
                quickBuy={data.quickBuy}
              />
            </Link>
          ))}
        </div>
        <div onClick={() => scrollHorizontal("digital", true)}>
          <ArrowRight />
        </div>
      </div>

    </div>
  );
} 

function TrendingCard(props: TrendingCardData) {
  return (
    <div className="bg-cardBg flex flex-col rounded-2xl w-[16rem] sm:w-[18rem] drop-shadow-md cursor-pointer">
      <Image 
        className="h-40 w-[16rem] sm:w-[18rem] rounded-t-2xl object-cover"
        src={props.imageSrc}
        alt={props.title}
        width={500}
        height={500}
        priority
      />

      <div className="flex flex-col px-4 py-2">

        <div className="font-baskervville mb-4">        
          <h1 className="font-bold text-base">{props.title}</h1>
          <h2 className="font-light text-[#2E2E5A] text-sm italic">{props.author}</h2>
        </div>

        <div className="flex gap-3 justify-between text-xs font-poppins font-bold">
          <div className="flex gap-2">
            <p className="text-text-grey">BIDS:</p>
            <p>{formatter.format(props.bids)}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-text-grey">QUICK BUY:</p>
            <p>{formatter.format(props.quickBuy)}</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}


// Categories

const paintingData: Array<TrendingCardData> = [
  {
    imageSrc: "/images/chilly-day.jpg",
    title: "Chilly Day",
    author: "Mike Seraph",
    bids: 830,
    quickBuy: 14787,
  },
  {
    imageSrc: "/images/euphoria.jpg",
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
    imageSrc: "/images/monotone.jpg",
    title: "Monotone",
    author: "MonoRepo",
    bids: 100,
    quickBuy: 9000,
  },
  {
    imageSrc: "/images/chilly-day.jpg",
    title: "Chilly Day",
    author: "Mike Seraph",
    bids: 830,
    quickBuy: 14787,
  },
  {
    imageSrc: "/images/euphoria.jpg",
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
    imageSrc: "/images/monotone.jpg",
    title: "Monotone",
    author: "MonoRepo",
    bids: 100,
    quickBuy: 9000,
  },
  {
    imageSrc: "/images/chilly-day.jpg",
    title: "Chilly Day",
    author: "Mike Seraph",
    bids: 830,
    quickBuy: 14787,
  },
  {
    imageSrc: "/images/euphoria.jpg",
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
    imageSrc: "/images/monotone.jpg",
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

function ArrowLeft() {
  return (
    <IconButton>
      <ChevronLeft className="text-indigoBg bg-cardBg h-8 w-8 xs:h-9 xs:w-9 xl:w-10 xl:h-10 p-1 rounded-full hover:text-cardBg hover:bg-altBrand" />
    </IconButton>
  );
}

function ArrowRight() {
  return (
    <IconButton>
      <ChevronRight className="text-indigoBg bg-cardBg h-8 w-8 xs:h-9 xs:w-9 xl:w-10 xl:h-10 p-1 rounded-full hover:text-cardBg hover:bg-altBrand" />
    </IconButton>
  );
}











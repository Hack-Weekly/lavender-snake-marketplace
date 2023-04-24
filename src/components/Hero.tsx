import { Poppins, Baskervville } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

interface SpotlightData {
  imageSrc: string;
  category: string;
  artName: string;
  artist: string;
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-[60px] font-bold">
        A New World of Creativity Awaits
      </div>
      <div className="my-3 text-lg font-bold italic text-[#2E2E5A]">
        Explore the beauty of art
      </div>
      <div
        className={`${poppins.className} text-[40px] font-semibold text-[#1C1B1F] underline decoration-2 underline-offset-4 `}
      >
        Today’s Spotlight
      </div>
      <div className="mt-3 flex w-full justify-around px-4">
        {spotlightData.map((data: SpotlightData) => {
          return (
            <SpotlightCard
              key={data.artName}
              imageSrc={data.imageSrc}
              category={data.category}
              artName={data.artName}
              artist={data.artist}
            />
          );
        })}
      </div>
    </div>
  );
}

const spotlightData: Array<SpotlightData> = [
  {
    imageSrc: "/images/birds-of-paradise.png",
    category: "Paintings and Drawings",
    artName: "Birds of Paradise",
    artist: "Lorenzo Perez",
  },
  {
    imageSrc: "/images/new-world.png",
    category: "Digital Art  ",
    artName: "New World",
    artist: "Exquisite Shifu",
  },
  {
    imageSrc: "/images/transverse-line.png",
    category: "Abstract Art",
    artName: "Transverse Line",
    artist: "Wassily Kandinsky",
  },
];

function SpotlightCard(props: SpotlightData) {
  return (
    <div className="flex w-72 cursor-pointer flex-col items-center">
      <Image
        className="h-44 w-72 rounded-2xl"
        src={props.imageSrc}
        alt={props.artName}
        width={500}
        height={500}
        priority
      />
      <div
        className={`uppercase ${poppins.className} mt-3 text-[15px] font-bold text-secondaryText`}
      >
        Top 1 in {props.category}
      </div>
      <div className="text-2xl font-bold uppercase ">{props.artName}</div>
      <div className={`italic ${baskervville.className} mt-1 text-sm`}>
        {props.artist}
      </div>
    </div>
  );
}

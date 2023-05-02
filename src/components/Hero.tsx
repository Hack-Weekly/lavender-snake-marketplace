import Image from "next/image";
import Link from "next/link";

interface SpotlightData {
  imageSrc: string;
  category: string;
  artName: string;
  artist: string;
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center p-6 pt-4 xs:pt-6">
      <div className="text-2xl xs:text-[1.7rem] sm:text-4xl min-[800px]:text-5xl lg:text-6xl text-center font-bold">
        A New World of Creativity Awaits
      </div>
      <div className="my-2 xs:my-3 text-lg font-bold italic text-[#2E2E5A]">
        Explore the beauty of art
      </div>
      <div
        className="mt-2 mb-4 md:mb-8 font-poppins text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1C1B1F] text-center underline decoration-2 underline-offset-4"
      >
        Today’s Spotlight
      </div>
      <div className="mt-3 flex flex-col min-[900px]:flex-row gap-4 w-full items-center justify-between lg:justify-around px-4">
        {spotlightData.map((data: SpotlightData) => {
          return (
            <Link href={`/art/${encodeURIComponent(data.artName)}`} key={data.artName}>
            <SpotlightCard
              key={data.artName}
              imageSrc={data.imageSrc}
              category={data.category}
              artName={data.artName}
              artist={data.artist}
              />
            </Link>
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
    <div className="flex w-72 xs:w-80 min-[900px]:w-64 lg:w-72 cursor-pointer flex-col items-center">
      <Image
        className="h-44 w-72 xs:w-80 min-[900px]:w-64 lg:w-72 rounded-2xl hover:drop-shadow-xl"
        src={props.imageSrc}
        alt={props.artName}
        width={500}
        height={500}
        priority
      />
      <div
        className="mt-3 font-poppins text-sm lg:text-[15px] font-bold uppercase text-secondaryText"
      >
        Top 1 in {props.category}
      </div>
      <div className="text-2xl font-bold uppercase ">{props.artName}</div>
      <div className="mt-1 font-baskervville text-sm font-semibold italic text-secondaryText">
        {props.artist}
      </div>
    </div>
  );
}

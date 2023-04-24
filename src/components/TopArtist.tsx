import { Baskervville, Poppins } from "next/font/google";
import Image from "next/image";
import formatter from "./CurrencyFormatter";

interface ArtistSalesData {
  artist: string;
  profileImageSrc: string;
  sold: number;
  hottestSell: string;
  hottestSellImage: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function TopArtist() {
  return (
    <div className="flex flex-col items-center px-6 py-8">
      <div className={`text-[40px] ${poppins.className} mb-3`}>
        Top Artist of the Month
      </div>
      <div
        className={`flex w-full justify-around ${poppins.className} mb-4 pl-4 text-xl font-bold text-text-grey`}
      >
        <div>ARTIST</div>
        <div>SOLD</div>
        <div>HOTTEST SELL</div>
      </div>
      <div className="flex w-full flex-col px-20">
        {artistSalesData.map((data, index) => {
          return (
            <ArtistSales
              key={index}
              artist={data.artist}
              profileImageSrc={data.profileImageSrc}
              sold={data.sold}
              hottestSell={data.hottestSell}
              hottestSellImage={data.hottestSellImage}
            />
          );
        })}
      </div>
    </div>
  );
}

const artistSalesData: Array<ArtistSalesData> = [
  {
    artist: "Exquisite Shifu",
    profileImageSrc: "/images/artist-profile.png",
    sold: 700721,
    hottestSell: "Le Désespéré",
    hottestSellImage: "/images/le-desespere.png",
  },
];

function ArtistSales(props: ArtistSalesData) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className={`flex items-center gap-4 ${baskervville.className}`}>
        <Image
          className="h-14 w-14 rounded-xl object-cover"
          src={props.profileImageSrc}
          alt="artist profile image"
          width={64}
          height={64}
        />
        <div className="text-2xl italic">{props.artist}</div>
      </div>
      <div className="mr-14 text-4xl font-semibold">
        {formatter.format(props.sold)}
      </div>
      <div
        className={`flex flex-col ${baskervville.className} cursor-pointer items-center rounded-xl bg-cardBg shadow-[3.0px_5.0px_4.0px_rgba(0,0,0,0.38)]`}
      >
        <Image
          className="h-24 w-52 rounded-t-xl object-cover"
          src={props.hottestSellImage}
          alt={props.hottestSell}
          width={200}
          height={150}
        />
        <div className="p-1">{props.hottestSell}</div>
      </div>
    </div>
  );
}

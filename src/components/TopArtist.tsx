import Image from "next/image";
import formatter from "./CurrencyFormatter";

interface ArtistSalesData {
  artist: string;
  profileImageSrc: string;
  sold: number;
  hottestSell: string;
  hottestSellImage: string;
}

export default function TopArtist() {
  return (
    <div className="flex flex-col items-center px-6 py-8">
      <div className={`mb-3 font-poppins text-[40px]`}>
        Top Artist of the Month
      </div>
      <div
        className={`mb-4 flex w-full justify-around pl-4 font-poppins text-xl font-bold text-text-grey`}
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
      <div className={`flex items-center gap-4 font-baskervville`}>
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
        className={`flex cursor-pointer flex-col items-center rounded-xl bg-cardBg font-baskervville shadow-[3.0px_5.0px_4.0px_rgba(0,0,0,0.38)]`}
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

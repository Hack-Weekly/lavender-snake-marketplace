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
    <div className="flex flex-col items-center px-3 xs:px-6 py-8">
      <div className="mb-6 font-poppins text-2xl xs:text-3xl md:text-4xl lg:text-[40px] font-bold">
        Top Artist of the Month
      </div>
      <div className="flex w-full flex-col md:px-10 lg:px-20">
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
    <div className="flex w-full justify-between gap-2 ">
      <div className="flex flex-col items-center">
        <div className="mb-6 md:mb-11 flex justify-center w-full font-poppins text-sm xs:text-base md:text-xl font-bold text-text-grey">
          ARTIST
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-baskervville">
          <Image
            className="h-12 xs:h-14 w-12 xs:w-14 rounded-xl object-cover"
            src={props.profileImageSrc}
            alt="artist profile image"
            width={64}
            height={64}
          />
          <div className="text-lg xs:text-xl lg:text-2xl text-center italic">{props.artist}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-11 flex w-full justify-center font-poppins text-sm xs:text-base md:text-xl font-bold text-text-grey">
          SOLD
        </div>
        <div className="text-center text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {formatter.format(props.sold)}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-4 flex w-full justify-center font-poppins text-sm xs:text-base md:text-xl font-bold text-text-grey">
          HOTTEST SELL
        </div>
        <div
          className={`flex cursor-pointer flex-col items-center rounded-xl bg-cardBg font-baskervville shadow-[3.0px_5.0px_4.0px_rgba(0,0,0,0.38)]`}
        >
          <Image
            className="h-20 xs:h-24 w-40 xs:w-48 sm:w-52 rounded-t-xl object-cover"
            src={props.hottestSellImage}
            alt={props.hottestSell}
            width={200}
            height={150}
          />
          <div className="p-1 text-sm xs:text-base">{props.hottestSell}</div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";


type TrendingCardData = {
  image: string,
  title: string,
  author: string,
  bids: number,
  quickBuy: number,
}



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
        width={250}
        height={250}
        priority
      />
    </div>
  );
}
import {
  Bookmark,
  Share2,
  ShoppingCart,
  ArrowLeft,
  Truck,
  Package,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

type Item = {
  key?: string;
  name?: string;
  artist?: string;
  category?: string;
  description?: string;
  imageName: string;
  image?: string;
  price?: number;
  seller?: string | undefined;
  isUnique?: boolean;
  amount?: number;
};

export default function ArtDetailsPage() {
  const router = useRouter();
  const { key } = router.query;
  const [item, setItem] = useState<Item | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const  handleCopyLink = async () =>  {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
    } catch (error) {
      console.error("failed to copy link: ", error)
    }
  };

  if (isCopied) {
    alert("Link copied to Clipboard!");
    setIsCopied(false);
  }

  useEffect(() => {
    const getArtData = async () => {
      // change items id
      const res = await fetch(`/api/items/6fa896c6-96f9-4bb7-b115-4d2ccceb26b8`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Item = await res.json();
      setItem(data);
  
      const imageRes = await fetch(`/api/image/${data.imageName}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const imageSrc = await imageRes.blob();
      setImage(URL.createObjectURL(imageSrc));
    };
    if (key) {
      getArtData().catch(console.error);
    }
  }, [key]);

  if (!item) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="flex gap-7 p-11 justify-center items-center max-lg:flex-col">
      <div className="flex flex-col justify-center-center max-lg:w-full">
        <div className="flex justify-between mb-2">
          <div className="flex rounded-xl bg-grey px-3 py-1 items-center hover:bg-gray-300">
            <ArrowLeft className="mr-3" />
            <Link href="/" className="font-playfairDisplay text-sm">Back to homepage</Link>  
          </div>
          <div className="flex">
            <Bookmark className="mr-3 hover:text-violet-500 cursor-pointer" />
            <Share2 onClick={handleCopyLink} className="hover:text-violet-500 cursor-pointer active:text-green-500" />
          </div>
        </div>

        {/* for smaller layout */}
        <div className="hidden max-lg:block max-lg:mb-7 max-lg:mt-3">
          <h1 className="font-playfairDisplay text-5xl font-bold">{item.name}</h1>
          <div className="flex mt-6">
            <h2 className="font-baskervville">Artist: <b>{item.artist}</b></h2>
            <span className="mx-4">|</span>
            <h2 className="font-poppins">Category: <b>{item.category}</b></h2>
          </div>
        </div>

        <div className="rounded-xl border-2 border-black h-96 w-[30rem] text-center max-lg:w-full bg-cardBg">
          {image && 
            <Image
              src={image}
              alt=""
              width={500}
              height={500}
              className="w-[30rem] h-96 rounded-xl"
            />
          }
        </div>

        <div className="mt-4">
          <p className="font-poppins font-semibold">DESCRIPTION:</p>
          <p className="font-playfairDisplay max-lg:text-xs"> {item.description} </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 ml-[2rem] max-lg:w-full">
        <div className="max-lg:hidden">
          <h1 className="font-playfairDisplay text-7xl font-bold">{item.name}</h1>
          <div className="flex mt-6">
            <h2 className="font-baskervville">Artist: <b>{item.artist}</b></h2>
            <span className="mx-4">|</span>
            <h2 className="font-poppins">
              Category: <b>{item.category}</b>
            </h2>
          </div>
        </div>

        <div className="flex gap-4 justify-start font-playfairDisplay font-semibold
                        text-yellowText text-base sm:text-xs md:text-sm lg:text-base
                          max-lg:flex-col 
          ">          
          <button className="flex justify-center items-center bg-redBg rounded-lg py-2 px-5 order-last max-lg:order-first hover:bg-red-950 active:bg-red-950">
            <Truck className="mr-3" />
            <p className="max-lg:block max-[1110px]:hidden">QUICK BUY</p>
            <span className="mx-4">|</span>
            <p className="">${item.price}</p>
          </button>
          <div className="flex gap-2">
            <button className="flex justify-center items-center bg-redBg rounded-lg py-2 px-5 max-lg:w-full hover:bg-red-950">
              <Package className="mr-2" />
              <p className="max-lg:block max-xl:hidden">BID</p>
            </button>
            <button className="flex justify-center items-center bg-grey font-bold text-black rounded-lg py-2 px-5 max-lg:w-full hover:bg-gray-300">
              <ShoppingCart className="mr-2" />
              <p className="max-lg:block max-xl:hidden">Add to cart</p>
            </button>
          </div>
        </div>

        {/* Data fetch Bids here, for now just mock data */}
          <div className="bg-indigoBg font-poppins rounded-lg p-7">
            <p className="font-bold text-3xl text-yellowText">LATEST BIDS:</p>
            <div className="flex justify-between m-3 max-lg:text-sm max-sm:text-xs ">
              <div className="flex flex-col justify-center items-center">
                <p className="text-yellowText font-bold m-3">FROM</p>
                <div className="flex flex-col justify-center items-start text-grey">
                  <p>OneMan</p>       
                  <p>TwoMan</p>
                  <p>Ej Sadiarin</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-yellowText font-bold m-3">BIDS</p>
                <div className="flex flex-col justify-center items-start text-grey">
                  <p>$10</p>
                  <p>$100</p>
                  <p>$1,000</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-yellowText font-bold m-3">TIME</p>
                <div className="flex flex-col justify-center items-start text-grey">
                  <p>1 hour ago</p>
                  <p>2 hours ago</p>
                  <p>3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
}

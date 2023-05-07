import {
  Bookmark,
  Share2,
  ShoppingCart,
  ArrowLeft,
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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
    } catch (error) {
      console.error("failed to copy link: ", error);
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
            <Bookmark className="mr-3 cursor-pointer hover:text-violet-500" />
            <Share2
              onClick={handleCopyLink}
              className="cursor-pointer hover:text-violet-500 active:text-green-500"
            />
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

        <div className="rounded-xl h-96 w-[30rem] text-center max-lg:w-full bg-cardBg">
          {image && 
            <Image
              src={image}
              alt=""
              width={500}
              height={500}
              className="h-96 w-[30rem] rounded-xl"
            />
          }
        </div>
      </div>

      <div className="ml-[2rem] flex flex-col gap-5 max-lg:w-full">
        <div className="max-lg:hidden">
          <h1 className="font-playfairDisplay text-7xl font-bold">
            {item.name}
          </h1>
          <div className="mt-6 flex">
            <h2 className="font-baskervville">
              Artist: <b>{item.artist}</b>
            </h2>
            <span className="mx-4">|</span>
            <h2 className="font-poppins">
              Category: <b>{item.category}</b>
            </h2>
          </div>
        </div>
        <div className="mt-3 mb-4">
          <p className="font-poppins font-semibold">DESCRIPTION:</p>
          <p className="font-playfairDisplay max-lg:text-xs"> {item.description} </p>
        </div>

        <div className="flex justify-between gap-4 font-playfairDisplay text-base font-semibold text-yellowText sm:text-xs md:text-sm lg:text-base">
          <button className="flex items-center justify-center rounded-lg bg-grey px-5 py-2 font-bold text-black">
            <ShoppingCart className="mr-2" />
            <p>Add to cart</p>
          </button>
        </div>
      </div>

    </div>
  );
}

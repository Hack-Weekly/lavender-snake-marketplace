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

  useEffect(() => {
    const getArtData = async () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      // const res = await fetch(`/api/items/${key}`);

      // mock data
      const res = await fetch(
        `/api/items/6fa896c6-96f9-4bb7-b115-4d2ccceb26b8`
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Item = await res.json();
      setItem(data);

      const imageRes = await fetch(`/api/image/${data.imageName}`);
      console.log(imageRes.url);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const imageSrc = await imageRes.blob();
      console.log(imageSrc);

      // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
    <div className="flex justify-center gap-7 p-11">
      <div className="flex flex-col ">
        <div className="mb-2 flex justify-between">
          <div className="flex rounded-xl bg-grey px-3 py-1">
            <ArrowLeft className="mr-3" />
            <Link href="/" className="font-playfairDisplay text-sm">
              Back to homepage
            </Link>
          </div>
          <div className="flex">
            <Bookmark className="mr-3" />
            <Share2 />
          </div>
        </div>
        <div className="h-96 w-[30rem] rounded-xl border-2 border-black text-center">
          {image && <img src={image} alt="image here" />}
        </div>
        <div className="mt-4">
          <p className="font-poppins font-semibold">DESCRIPTION:</p>
          <p className="font-playfairDisplay"> {item.description} </p>
        </div>
      </div>

      <div className="ml-[2rem] flex flex-col gap-5">
        <div>
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

        <div className="flex justify-between gap-4 font-playfairDisplay text-base font-semibold text-yellowText sm:text-xs md:text-sm lg:text-base">
          <button className="flex items-center justify-center rounded-lg bg-redBg px-5 py-2">
            <Package className="mr-2" />
            <p>BID</p>
          </button>
          <button className="flex items-center justify-center rounded-lg bg-redBg px-5 py-2">
            <Truck className="mr-3" />
            <p className="">QUICK BUY</p>
            <span className="mx-4">|</span>
            <p className="">${item.price}</p>
          </button>
          <button className="flex items-center justify-center rounded-lg bg-grey px-5 py-2 font-bold text-black">
            <ShoppingCart className="mr-2" />
            <p>Add to cart</p>
          </button>
        </div>

        {/* Data fetch Bids here, for now just mock data */}
        <div className="rounded-lg bg-indigoBg p-7 font-poppins">
          <p className="text-3xl font-bold text-yellowText">LATEST BIDS:</p>
          <div className="m-3 flex justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <p className="m-3 font-bold text-yellowText">FROM</p>
              <div className="flex flex-col items-start justify-center text-grey">
                <p>OneMan</p>
                <p>TwoMan</p>
                <p>Ej Sadiarin</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="m-3 font-bold text-yellowText">BIDS</p>
              <div className="flex flex-col items-start justify-center text-grey">
                <p>$10</p>
                <p>$100</p>
                <p>$1,000</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="m-3 font-bold text-yellowText">TIME</p>
              <div className="flex flex-col items-start justify-center text-grey">
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

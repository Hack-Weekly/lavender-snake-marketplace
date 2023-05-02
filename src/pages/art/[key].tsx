import { Bookmark, Share2, ShoppingCart, ArrowLeft, Truck, Package } from "lucide-react";
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
  const [image, setImage] = useState<string | null | Blob>(null);
  
  useEffect(() => {
    const getArtData = async () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      // const res = await fetch(`/api/items/${key}`);

      // mock data
      const res = await fetch(`/api/items/31d125e4-e173-4d02-a85b-c2aef3e7d300`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Item  = await res.json();
      setItem(data);

      const imageRes = await fetch(`/api/image/${data.imageName}`, {});
      console.log(imageRes);
      

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const imageSrc = await imageRes.blob();
      console.log(imageSrc);
      
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setImage(URL.createObjectURL(imageSrc));
    };
    if (key) {
       getArtData()
        .catch(console.error);
    }
  }, [key]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-7 p-11 justify-center">
      <div className="flex flex-col ">
        <div className="flex justify-between mb-2">
          <div className="flex rounded-xl bg-grey px-3 py-1">
            <ArrowLeft className="mr-3" />
            <Link href="/" className="font-playfairDisplay text-sm">Back to homepage</Link>  
          </div>
          <div className="flex">
            <Bookmark className="mr-3" />
            <Share2 />
          </div>
        </div>
        <div className="rounded-xl border-2 border-black h-96 w-[30rem] text-center">
          image goes here
          {/* TODO: fetch the image seperately from deta drive using the image file name */}
          {/* <img 
            src={item.imageName || item.image} 
            alt={item.name} 
            className="border-2 border-black rounded-xl "
          /> */}
          {/* {image ?? <img src={image ?? ""} alt="image here" /> } */}
          {/* <img src={image ?? ""} alt="image name here" /> */}
        </div>
        <div className="mt-4">
          <p className="font-poppins font-semibold">DESCRIPTION:</p>
          <p className="font-playfairDisplay"> {item.description} </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 ml-[2rem]">
        <div>
          <h1 className="font-playfairDisplay text-7xl font-bold">{item.name}</h1>
          <div className="flex mt-6">
            <h2 className="font-baskervville">Artist: <b>{item.artist}</b></h2>
            <span className="mx-4">|</span>
            <h2 className="font-poppins">Category: <b>{item.category}</b></h2>
          </div>
        </div>

        <div className="flex gap-4 justify-between font-playfairDisplay font-semibold text-yellowText text-base sm:text-xs md:text-sm lg:text-base">
          <button className="flex justify-center items-center bg-redBg rounded-lg py-2 px-5">
            <Package className="mr-2" />
            <p>BID</p>
          </button>
          <button className="flex justify-center items-center bg-redBg rounded-lg py-2 px-5">
            <Truck className="mr-3" />
            <p className="">QUICK BUY</p>
            <span className="mx-4">|</span>
            <p className="">${item.price}</p>
          </button>
          <button className="flex justify-center items-center bg-grey font-bold text-black rounded-lg py-2 px-5">
            <ShoppingCart className="mr-2" />
            <p>Add to cart</p>
          </button>
        </div>

        {/* Data fetch Bids here, for now just mock data */}
        <div className="bg-indigoBg font-poppins rounded-lg p-7">
          <p className="font-bold text-3xl text-yellowText">LATEST BIDS:</p>
          <div className="flex justify-evenly m-3">
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
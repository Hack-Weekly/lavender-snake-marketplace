import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { imageDrive } from "~/server/deta";

type Item = {
  key?: string;
  name?: string;
  artist?: string;
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

      const imageFromDeta = await imageDrive.get(item?.imageName ?? "");

      setImage(imageFromDeta);
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
    <div className="flex gap-7">
      <div className="flex flex-col ">
        {/* TODO: fetch the image seperately from deta drive using the image file name */}
        {/* <img 
          src={item.imageName || item.image} 
          alt={item.name} 
          className="border-2 border-black rounded-xl "
        /> */}
        {/* {image ?? <img src={image ?? ""} alt="image here" /> } */}
        <img src={image ?? ""} alt="image name here" />
        <div>
        <p className="font-poppins font-semibold">DESCRIPTION:</p>
        {item.description}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-playfairDisplay text-7xl font-bold">{item.name}</h1>
          <h1 className="font-baskervville">Seller name here: {item.seller}</h1>

        </div>

        <div className="flex justify-between font-playfairDisplay font-semibold text-yellowText">
          <button className="bg-redBg rounded-lg py-3 px-5">
            <p>BID</p>
          </button>
          <button className="flex bg-redBg rounded-lg py-3 px-5">
            <p className="">QUICK BUY</p>
            <span className="mx-4">|</span>
            <p className="">${item.price}</p>
          </button>
          <button className="bg-grey font-bold text-black rounded-lg py-3 px-5">
            <p>Add to cart</p>
          </button>
        </div>

        <p>LATEST BIDS:</p>
      </div>
    </div>
  );
}
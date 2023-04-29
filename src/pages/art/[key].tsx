import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type Item = {
  key?: string;
  name?: string;
  artist?: string;
  description?: string;
  imageName?: string;
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
  
  useEffect(() => {
    const getArtData = async () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const res = await fetch(`/api/items/8s1w77vx1xjj`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Item  = await res.json();
      setItem(data);
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
    <div>
      <h1>{item.name}</h1>
      <h1>{item.seller}</h1>
      {/* TODO: fetch the image seperately from deta drive using the image file name */}
      <img src={item.imageName || item.image} alt={item.name} />
      <p>DESCRIPTION: {item.description}</p>
      <p>QUICK BUY: {item.price}</p>
      <p>LATEST BIDS:</p>
    </div>
  );
}
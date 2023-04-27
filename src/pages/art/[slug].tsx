import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type Item = {
  name: string;
  artist: string;
  description: string;
  image: string;
  price: number;
  seller: string;
  isUnique?: boolean;
  amount?: number;
};

export default function ArtDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [item, setItem] = useState<Item | null>(null);
  
  useEffect(() => {
    const getArtData = async () => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const res = await fetch(`/api/items/${slug}`);
      const data: Item  = await res.json();
      setItem(data);
    };
    if (slug) {
       getArtData()
        .catch(console.error);
    }
  }, [slug]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <h1>{item.seller}</h1>
      <img src={item.image} alt={item.name} />
      <p>DESCRIPTION: {item.description}</p>
      <p>QUICK BUY: {item.price}</p>
      <p>LATEST BIDS:</p>
    </div>
  );
}


// fetching data from an api endpoint
// import { useState, useEffect } from "react";

// function MyComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`/api/items?key=myKey`);
//       const jsonData = await res.json();
//       setData(jsonData);
//     };
//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.description}</p>
//     </div>
//   );
// }

// export default MyComponent;

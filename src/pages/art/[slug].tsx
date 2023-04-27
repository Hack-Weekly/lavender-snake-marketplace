import { useEffect, useState, } from 'react'
import { useRouter } from 'next/router';

type Item = {
  name?: string,
  artist?: string,
  description?: string,
  image?: string,
  price?: number,
  seller?: string,
}

type ItemDetailsProps = {
  key?: string,
}

// Fetch art details given their specific key
export default function ItemDetails({ key }: ItemDetailsProps) {
  const [item, setItem] = useState<Item | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchItemData() {
      const res = await fetch(`/api/items/${key}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const itemsData: Item = await res.json();
      setItem(itemsData);
    }

    fetchItemData()
      .catch(console.error)
  }, [key]);

  return (
    <div>
      <h1>{item?.name}</h1>
      <img src={item?.image} alt={item?.name} />
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

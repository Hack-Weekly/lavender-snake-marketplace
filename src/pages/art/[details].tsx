// SSR? because of the fetching of art data, separated by art id
// so need getServerSideProps()


// page routes - can use useRouter hook from nextjs then just do router.push()
// see usage: https://nextjs.org/docs/api-reference/next/router 
/**
 * create wrapper button that takes in an onClick prop that specifies the router endpoint to navigate to
 * like this:

import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/about')}>
      Click me
    </button>
  )
}

*/



export default function ArtDetails() {
  return (
    <div>
      
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

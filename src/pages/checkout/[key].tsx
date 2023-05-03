import { useRouter } from "next/router";
import Image from "next/image";
import formatter from "~/components/CurrencyFormatter";
import { Trash2 } from "lucide-react";
import Link from "next/link";

interface CartDataT{
  imageSrc: string,
  artName: string,
  artist: string,
  price: number,
}

export default function ArtDetailsPage() {
  // const router = useRouter();
  // const { key } = router.query;
  
//   useEffect(() => {
//     const getCartData = async () => {};
//     if (key) {
//        getCartData()
//         .catch(console.error);
//     }
//   }, [key]);

  const totalPrice = cartData.reduce((n, {price}) => n + price, 0)
  
  return (
    <div className="p-6 pt-4 md:pt-6">
      <div className="flex items-center gap-2">
        <Image
          src="/checkout.svg"
          width={50}
          height={50}
          alt="cart icon"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
        <div className="font-playfairDisplay text-2xl md:text-3xl lg:text-4xl font-bold">Checkout</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="w-full lg:w-8/12 xs:px-2 md:px-4 py-2">
          <div className="flex mt-2 font-poppins underline font-semibold text-[10px] xs:text-xs md:text-sm text-primaryText">
            <div className="ml-20">ART</div>
            <div className="ml-auto">PRICE</div>
            <div className="ml-5 sm:ml-6 md:ml-[2.7rem] lg:ml-[7.5rem]">ACTIONS</div>
          </div>
          <div className="w-full flex flex-col gap-2 mt-3">
            {
              cartData.map((item, index) => {
                return (
                  <CartItem key={index} item={item} /> 
                )
              })
            }
          </div>
        </div>
        <div className="w-full lg:w-4/12 flex items-center justify-center font-poppins">
          <div className="flex flex-col items-center justify-center p-6 bg-cardBg rounded">
            <div className="flex">
              <div className="">Total:&nbsp;</div>
              <div className="flex gap-1">
                <div className="font-bold">
                  {formatter.format(totalPrice)}
                </div>
                <div className="text-sm">
                  ({cartData.length} items)
                </div>
              </div>
            </div>
            <div>
              <button className="p-2 mt-2 lg:mt-4 w-40 sm:w-48 text-sm sm:text-base text-white font-normal bg-altBrand hover:bg-primaryText rounded-md">
                Pay {formatter.format(totalPrice)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cartData:Array<CartDataT> = [
  {
    imageSrc: "/images/angels-awakening.png",
    artName: "Angel's Awakening",
    artist: "Yeon Bambi",
    price: 1000,
  },
  {
    imageSrc: "/images/mindless-epiphany.png",
    artName: "Mindless Epiphany",
    artist: "Skido Leonardo",
    price: 852890,
  },
  {
    imageSrc: "/images/angels-awakening.png",
    artName: "Angel's Awakening",
    artist: "Yeon Bambi",
    price: 1000,
  },
  {
    imageSrc: "/images/mindless-epiphany.png",
    artName: "Mindless Epiphany",
    artist: "Skido Leonardo",
    price: 852890,
  },
  {
    imageSrc: "/images/angels-awakening.png",
    artName: "Angel's Awakening",
    artist: "Yeon Bambi",
    price: 1000,
  },
  {
    imageSrc: "/images/mindless-epiphany.png",
    artName: "Mindless Epiphany",
    artist: "Skido Leonardo",
    price: 852890,
  },
]

function CartItem(props: {item: CartDataT}){
  return (
    <div className="flex items-center justify-between text-xs sm:text-sm md:text-base  font-semibold font-poppins py-1 px-1 md:px-4">
      <Image 
        src={props.item.imageSrc}
        alt={props.item.artName}
        width={100}
        height={100}
        className="w-14 h-12 mr-4 rounded-sm"
      />
      <Link href={`art/id`} className="mr-3">
        {props.item.artName}
      </Link>
      <div className="ml-auto w-14 lg:w-20 text-altBrand" >
        {formatter.format(props.item.price)}
      </div>
      <Trash2 
        size="18" 
        className="ml-6 xs:ml-8 sm:ml-10 md:ml-16 lg:ml-28 cursor-pointer"
        
      />
    </div>
  )
}
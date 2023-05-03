import { X } from "lucide-react";
import { useEffect } from "react"
import Image from "next/image";
import { Trash2 } from "lucide-react";
import formatter from "./CurrencyFormatter";
import Link from "next/link";

interface CartDataT{
  imageSrc: string,
  artName: string,
  artist: string,
  price: number,
}

export default function CartModal(props: {closeCart: () => void}){
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        // document.body.style.paddingRight = "16px";
        return () => {
            document.body.style.overflowY = "auto";
            // document.body.style.paddingRight = "0";
        }
    })

    const handleOverlayClick = (e:React.MouseEvent | React.TouchEvent) => {
      const target = e.target as HTMLDivElement
      
      if(target.id === "overlay"){
        props.closeCart()
      }
    }

    return (
      <div 
        className="fixed w-screen h-screen inset-0 backdrop-brightness-[0.3]"
        id="overlay"
        onClick={handleOverlayClick}
      >
        <div className="absolute top-1/2 left-1/2 w-full xs:w-11/12 sm:w-10/12 md:w-8/12 h-[26rem] md:h-[30rem] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-2 md:px-4 pt-2 md:py-2" id="modal">
          <div className="relative h-full flex flex-col justify-between font-poppins py-2 overflow-hidden">
            <div className="absolute top-0 right-0 cursor-pointer hover:bg-cardBg rounded-full" onClick={props.closeCart}>
              <X className="w-8 h-8 hover:scale-90 duration-300" />
            </div>
            <div className="lg:mt-2 flex items-center gap-2">
              <Image
                src="/cart.svg"
                width={50}
                height={50}
                alt="cart icon"
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              />
              <div className="font-playfairDisplay text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">Your Cart</div>
            </div>
            <div className="h-full px-4 py-2 overflow-y-scroll">
              <div className="w-full flex mt-2 font-poppins underline font-semibold text-[10px] xs:text-xs md:text-sm text-primaryText">
                <div className="ml-20">ART</div>
                <div className="ml-auto">PRICE</div>
                <div className="ml-4 sm:ml-6 md:ml-[2.7rem] lg:ml-[7.5rem]">ACTIONS</div>
              </div>
              <div className="w-full flex flex-col gap-2 mt-3">
                {
                  cartData.map((item, index) => {
                    return (
                      <CartItem key={index} item={item} closeCart={props.closeCart}/> 
                    )
                  })
                }
              </div>
            </div>
            <div className="text-right">
              <Link href="/checkout/cartId">
                <button 
                  className="p-2 mt-2 lg:mt-4 w-40 sm:w-48 text-sm sm:text-base text-white font-normal bg-altBrand hover:bg-primaryText rounded-md" onClick={props.closeCart}
                >
                  Complete Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
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

function CartItem(props: {item: CartDataT, closeCart: () => void}){
  return (
    <div className="flex items-center justify-between text-xs sm:text-sm md:text-base  font-semibold font-poppins py-1 px-1 md:px-4">
      <Image 
        src={props.item.imageSrc}
        alt={props.item.artName}
        width={100}
        height={100}
        className="w-14 h-12 mr-4 rounded-sm"
      />
      <Link href={`art/id`} onClick={props.closeCart}>
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
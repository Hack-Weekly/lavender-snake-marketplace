import { Baskervville, Poppins } from "next/font/google"
import Image from "next/image"
import formatter from "./CurrencyFormatter"

interface ArtistSalesData{
    artist: string
    profileImageSrc: string
    sold: number
    hottestSell: string
    hottestSellImage: string
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700"
})
const baskervville = Baskervville({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"]
})

export default function TopArtist(){
    return (
        <div className="px-6 py-8 flex flex-col items-center">
            <div className={`text-[40px] ${poppins.className} mb-3`}>Top Artist of the Month</div>
            <div className={`w-full flex justify-around ${poppins.className} text-text-grey text-xl font-bold pl-4 mb-4`}>
                <div>ARTIST</div>
                <div>SOLD</div>
                <div>HOTTEST SELL</div>
            </div>
            <div className="w-full flex flex-col px-20">
                {artistSalesData.map((data, index) => {
                    return (
                        <ArtistSales 
                            key={index}
                            artist={data.artist}
                            profileImageSrc={data.profileImageSrc}
                            sold={data.sold}
                            hottestSell={data.hottestSell}
                            hottestSellImage={data.hottestSellImage}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const artistSalesData: Array<ArtistSalesData> = [
    {
        artist: "Exquisite Shifu",
        profileImageSrc: "/images/artist-profile.png",
        sold: 700721,
        hottestSell: "Le Désespéré",
        hottestSellImage: "/images/le-desespere.png"
    }
]

function ArtistSales(props: ArtistSalesData){
    return (
        <div className="w-full flex justify-between items-center">
            <div className={`flex items-center gap-4 ${baskervville.className}`}>
                <Image 
                    className="w-14 h-14 object-cover rounded-xl"
                    src={props.profileImageSrc}
                    alt="artist profile image"
                    width={64}
                    height={64}
                />
                <div className="text-2xl italic">{props.artist}</div>
            </div>
            <div className="text-4xl font-semibold mr-14">
                {formatter.format(props.sold)}
            </div>
            <div className={`flex flex-col ${baskervville.className} items-center rounded-xl bg-cardBg shadow-[3.0px_5.0px_4.0px_rgba(0,0,0,0.38)] cursor-pointer`}>
                <Image
                className="w-52 h-24 object-cover rounded-t-xl"
                    src={props.hottestSellImage}
                    alt={props.hottestSell}
                    width={200}
                    height={150}
                />
                <div className="p-1">
                    {props.hottestSell}
                </div>
            </div>
        </div>
    )
}
import { Poppins, Baskervville } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700"
})
const baskervville = Baskervville({
    subsets: ["latin"],
    weight: "400",
    style: "italic"
})

interface SpotlightCardProps{
    imageSrc: string
    category: string
    artName: string
    artist: string
}

export default function Hero(){
    return (
        <div className="flex flex-col items-center p-6">
            <div className="text-[60px] font-bold">
                A New World of Creativity Awaits
            </div>
            <div className="font-bold italic text-lg text-[#2E2E5A] my-3">
                Explore the beauty of art
            </div>
            <div className={`${poppins.className} font-semibold text-[40px] underline decoration-2 underline-offset-4 text-[#1C1B1F] `}>
                Today’s Spotlight
            </div>
            <div className="w-full flex justify-around mt-3">
                {
                    spotlightData.map((data: SpotlightCardProps) => {
                        return (
                            <SpotlightCard key={data.artName} imageSrc={data.imageSrc} category={data.category} artName={data.artName} artist={data.artist} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const spotlightData:Array<SpotlightCardProps> = [
    {
        imageSrc: "/images/birds-of-paradise.png",
        category: "Paintings and Drawings",
        artName: "Birds of Paradise",
        artist: "Lorenzo Perez"
    },
    {
        imageSrc: "/images/new-world.png",
        category: "Digital Art  ",
        artName: "New World",
        artist: "Exquisite Shifu"
    },
    {
        imageSrc: "/images/transverse-line.png",
        category: "Abstract Art",
        artName: "Transverse Line",
        artist: "Wassily Kandinsky"
    },
]

function SpotlightCard(props: SpotlightCardProps){
    return (
        <div className="w-80 flex flex-col items-center cursor-pointer">
            <Image 
            className="w-80 h-44 rounded-2xl"
                src={props.imageSrc}
                alt={props.artName}
                width={500}
                height={500}
                priority
            />
            <div className={`uppercase ${poppins.className} font-bold text-[15px] text-secondaryText mt-3`}>
                Top 1 in {props.category}
            </div>
            <div className="uppercase text-2xl font-bold ">
                {props.artName}
            </div>
            <div className={`italic ${baskervville.className} text-sm mt-1`}>
                {props.artist}
            </div>
        </div>
    )
}
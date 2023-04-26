import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login(){
    return (
        <div className="flex flex-col items-center justify-center p-6 font-poppins">
            <div className="flex flex-col">
                You aren&apos;t logged in
                <button 
                    className="p-2 mt-2 mx-10 bg-primaryText text-white hover:bg-altBrand rounded-md"
                    onClick={() => void signIn("discord")}
                >
                    Log In
                </button>
            </div>
            <Image 
                src="/images/quiet-coasts.png"
                alt="background image"
                width={600}
                height={500}
                className="w-10/12 md:w-8/12 lg:w-5/12 h-80 object-cover mt-6 sepia-[0.5] rounded"
            />
        </div>
    )
}
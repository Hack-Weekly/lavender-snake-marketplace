import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login(){
    return (
        <div className="flex flex-col items-center justify-center p-6 font-poppins">
            <div className="flex flex-col items-center text-lg font-semibold">
                You aren&apos;t logged in, please login to continue
                <button 
                    className="p-2 mt-4 w-48 bg-primaryText text-white font-normal hover:bg-altBrand rounded-md"
                    onClick={() => void signIn("discord")}
                >
                    Log In
                </button>
            </div>
            <Image 
                src="/images/quiet-coasts.png"
                alt="background image"
                width={300}
                height={200}
                className="w-10/12 md:w-8/12 lg:w-5/12 h-72 object-cover mt-12 sepia-[0.5] rounded"
                priority
            />
        </div>
    )
}
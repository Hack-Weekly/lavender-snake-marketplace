"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateProfile() {
    const [profileData, setProfileData] = useState({
        firstname: "",
        middlename: "",
        surname: "",
        mobile: "",
        address: "",
    });
    const router = useRouter();

    const handleProfileData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setProfileData((prevValue) => {
            return ({
                ...prevValue,
                [name]: value,
            })
        })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if((profileData.firstname != "") && (profileData.surname != "") && (profileData.mobile != "") && (profileData.address != "")){
            const response = await fetch("api/profile", {
                method: "POST",
                body: JSON.stringify(profileData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(response.status === 200){
                void router.push("/profile");
            }
        }
    }


    return (
        <div className="flex items-center justify-between">
            <div className="w-full lg:w-[50%] p-6 flex flex-col items-center">
                <div className="ml-10 font-playfairDisplay">
                    <div className="text-4xl font-bold">Create new profile</div>
                    <div className="ml-24 text-2xl font-semibold">
                        a new world awaits you...
                    </div>
                </div>
                <form 
                    action="POST" 
                    className="font-poppins mt-8 flex flex-col gap-3"
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="firstname" className="text-xl font-bold">First name</label>
                        <input type="text" name="firstname" id="firstname" className="w-80 bg-grey px-2 py-1 font-semibold" required onChange={handleProfileData} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="middlename" className="text-xl font-bold">Middle name</label>
                        <input type="text" name="middlename" id="middlename" className="w-80 bg-grey px-2 py-1 font-semibold" onChange={handleProfileData} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="surname" className="text-xl font-bold">Last name</label>
                        <input type="text" name="surname" id="surname" className="w-80 bg-grey px-2 py-1 font-semibold" onChange={handleProfileData} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="mobile" className="text-xl font-bold">mobile</label>
                        <input type="text" name="mobile" id="mobile" className="w-80 bg-grey px-2 py-1 font-semibold" required onChange={handleProfileData} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address" className="text-xl font-bold">Address</label>
                        <textarea name="address" id="address" rows={3} className="w-80 bg-grey px-2 py-1 font-semibold resize-none" required onChange={handleProfileData} ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="p-2 mt-2 mx-10 bg-primaryText text-white hover:bg-altBrand rounded-md"
                    >
                        Create Profile
                    </button>
                </form>
            </div>
            <div className="hidden lg:block w-[50%] ">
                <Image 
                    src="/images/meeting-point.jpg"
                    alt="meeting point"
                    width={600}
                    height={600}
                    className="rounded h-auto"
                    priority
                />
            </div>
        </div>
    );
}
import Image from "next/image";

export default function CreateProfile() {
    return (
        <div className="flex items-center justify-between">
            <div className="w-full lg:w-[50%] p-6 flex flex-col items-center">
                <div className="ml-10 font-playfairDisplay">
                    <div className="text-4xl font-bold">Create new profile</div>
                    <div className="ml-24 text-2xl font-semibold">
                        a new world awaits you...
                    </div>
                </div>
                <div className="font-poppins mt-8 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fname" className="text-xl font-bold">First name</label>
                        <input type="text" name="fname" id="fname" className="w-80 bg-grey px-2 py-1 font-semibold" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="mname" className="text-xl font-bold">Middle name</label>
                        <input type="text" name="mname" id="mname" className="w-80 bg-grey px-2 py-1 font-semibold" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="lname" className="text-xl font-bold">Last name</label>
                        <input type="text" name="lname" id="lname" className="w-80 bg-grey px-2 py-1 font-semibold" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="mobile" className="text-xl font-bold">mobile</label>
                        <input type="text" name="mobile" id="mobile" className="w-80 bg-grey px-2 py-1 font-semibold" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address" className="text-xl font-bold">Address</label>
                        <textarea name="address" id="address" rows={3} className="w-80 bg-grey px-2 py-1 font-semibold resize-none" ></textarea>
                    </div>
                    <button 
                        className="p-2 mt-2 mx-10 bg-primaryText text-white hover:bg-altBrand rounded-md"
                    >
                        Create Profile
                    </button>
                </div>
            </div>
            <div className="hidden lg:block w-[50%]">
                <Image 
                    src="/images/meeting-point.jpg"
                    alt="meeting point"
                    width={600}
                    height={600}
                    className="rounded "
                />
            </div>
        </div>
    );
}

// firstname: body.firstname,
// middlename: body.middlename,
// surname: body.surname,
// address: body.address,
// mobile: body.mobile,

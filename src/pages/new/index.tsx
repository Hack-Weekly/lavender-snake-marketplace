import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useProfile } from "~/components/ProfileContextProvider";
import Image from "next/image";
import Login from "~/components/Login";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

export default function NewArt(){
    const { data: session } = useSession();
    const profile = useProfile();
    const router = useRouter();
    let fullName = "";
    if(profile){
        if(profile.firstname && profile.middlename && profile.surname){
            fullName = profile.firstname + " " + profile.middlename + " " + profile.surname;
        }else if(profile.firstname && profile.surname){
            fullName = profile.firstname + " " + profile.surname;
        }else if(profile.firstname && profile.middlename){
            fullName = profile.firstname + " " + profile.middlename;
        }else if(profile.firstname){
            fullName = profile.firstname;
        }
    }

    const [newArtData, setNewArtData] = useState({
        name: "",
        artist: "",
        category: "abstract-art",
        description: "",
        imageName: "",
        image: "",
        price: "1",
        seller: session?.user.id,
        isUnique: true,
        amount: 1,
    });

    const [imagePreview,setImagePreview] = useState<File | null>(null);
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.files != null && e.target.files[0]){
            const file = e.target.files[0];
            const id = uuidv4();
            const imageFormat = file.name.split('.').pop();
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            const newImageName = `${id}.${imageFormat}`;            
            
            
            const reader = new FileReader();
            reader.onloadend = function(){
                setImagePreview(file);
                //image is of type string, avoiding null value here
                if(typeof reader.result === "string"){
                    const data=(reader.result).split(',')[1];
                    if(data){
                        const binaryBlob = atob(data);
                        console.log(binaryBlob);
                        
                        
                        //update input data, and check for arraybuffer type
                        if(typeof data === "string"){
                            setNewArtData((prevValue) => {
                                return({
                                    ...prevValue,
                                    imageName: newImageName,
                                    image: binaryBlob,
                                })
                            })
                        }
                    }
                }
            }
            reader.readAsDataURL(file);            
        }else{setImagePreview(null)}
    }

    function handleArtInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >){
        
        if(e.target.name === "isUnique"){
            const newIsUniqueValue = !newArtData.isUnique;
            
            setNewArtData((prevValue)=>{
                return({
                    ...prevValue,
                    isUnique: newIsUniqueValue,
                    amount: 1,
                })
            })
        }else if(e.target.name === "amount"){
            const newAmount = newArtData.isUnique ? 1 : Number(e.target.value);
            setNewArtData((prevValue) => {
                return({
                    ...prevValue,
                    amount: newAmount
                })
            })
        }else if(e.target.name === "price"){
            const newPrice = e.target.value;
            setNewArtData((prevValue) => {
                return({
                    ...prevValue,
                    price: newPrice
                })
            })
        }else{
            setNewArtData((prevValue) => {
                return({
                    ...prevValue,
                    [e.target.name]: e.target.value,
                })
            })
        }
    }

    const submitNewArt = async (e: React.FormEvent) => {
        e.preventDefault();
        const submitData = {
            ...newArtData,
            id: uuidv4(),
            artist: fullName,
            price: Number(newArtData.price),
        }
        const response = await fetch("api/items", {
            method: "POST",
            body: JSON.stringify(submitData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(response);

        if(response.status === 200){
            void router.push("/art/" + submitData.id);
        }
        
    }


    if (!session) {
        return (
            <Login />
        );
    } else if (!profile) {
        return (
            <div className="w-full flex flex-col items-center font-bold text-lg font-poppins p-6 pt-20">
                Create your profile to start selling your arts
                <button className="p-2 mt-4 w-48 bg-primaryText text-white font-normal hover:bg-altBrand rounded-md">
                    <Link href="/profile">
                        Create Profile
                    </Link>
                </button>
            </div>
        )
    } else{
        return(
            <div className="w-full p-6 px-6 xs:px-10">
                <div className="flex gap-2">
                    <div className="border border-primaryText rounded-sm">
                        <Plus size={36} />
                    </div>
                    <div className="text-2xl xs:text-4xl font-bold font-playfairDisplay">
                        Sell your masterpiece
                    </div>
                </div>
                <form 
                    action="" 
                    method="post" 
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={submitNewArt} 
                    className="flex flex-col min-[800px]:flex-row gap-6 mt-6 font-poppins"
                >
                    <div className="w-full min-[800px]:w-6/12 flex flex-col items-center px-6">
                        <div className="font-bold text-lg xs:text-xl mb-2 xs:mb-4">
                            UPLOAD YOUR ART
                        </div>
                        <input 
                            type="file" 
                            name="image" 
                            id="image" 
                            accept="image/png, image/jpeg" 
                            className="bg-grey px-2 py-1 text-sm cursor-pointer" 
                            required
                            onChange={handleImageChange} 
                        />
                        <div className="mt-6 w-[20rem] xs:w-[22rem] sm:w-[21rem] md:w-[23rem] lg:w-[25rem] h-[17rem] bg-cardBg rounded-md flex items-center justify-center">
                            {imagePreview && 
                                <Image 
                                    src={URL.createObjectURL(imagePreview)}
                                    alt="Image Preview"
                                    width={400}
                                    height={300}
                                    className="block w-full h-full rounded-md"
                                />
                            }
                            {!imagePreview &&
                                <div>Art Preview</div>
                            }
                        </div>
                    </div>
                    <div className="w-full min-[800px]:w-6/12 flex items-center justify-center min-[800px]:justify-start">
                        <div className="flex flex-col gap-2 font-semibold min-[800px]:pl-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-lg xs:text-xl">Art Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="off"
                                    className="w-80 lg:w-96 bg-grey px-2 py-1 text-sm xs:text-base rounded-sm"
                                    required
                                    value={newArtData.name}
                                    onChange={handleArtInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg xs:text-xl">Select Category</label>
                                <select name="category" id="category" required className="w-80 lg:w-96 bg-grey px-2 py-1 text-sm xs:text-base rounded-sm cursor-pointer" value={newArtData.category} onChange={handleArtInputChange}>
                                    <option value="abstract-art" className="text-sm xs:text-base">Abstract Art</option>
                                    <option value="paintings-and-drawings" className="text-sm xs:text-base">Paintings and Drawings</option>
                                    <option value="fantasy" className="text-sm xs:text-base">Fantasy</option>
                                    <option value="digital-art" className="text-sm xs:text-base">Digital Art</option>
                                    <option value="photography" className="text-sm xs:text-base">Photography</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg xs:text-xl rounded-sm">Description</label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    rows={3} 
                                    className="w-80 lg:w-96 bg-grey px-2 py-1 text-sm xs:text-base resize-none" 
                                    required
                                    value={newArtData.description}
                                    onChange={handleArtInputChange}
                                ></textarea>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="price" className="text-lg xs:text-xl">Price <span className="text-base font-normal">(USD)</span></label>
                                <input 
                                    type="number"
                                    name="price"
                                    id="price"
                                    autoComplete="off"
                                    className="w-48 lg:w-52 bg-grey px-2 py-1 text-sm xs:text-base rounded-sm"
                                    required
                                    value={newArtData.price}
                                    onChange={handleArtInputChange}
                                />
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <input 
                                    type="checkbox"
                                    name="isUnique"
                                    id="isUnique"
                                    autoComplete="off"
                                    className="w-4 h-4 text-sm xs:text-base text-grey bg-altBrand accent-altBrand border-altBrand rounded focus:ring-primaryText cursor-pointer"
                                    checked={newArtData.isUnique}
                                    // value={`${newArtData.isUnique}`}
                                    onChange={handleArtInputChange}
                                />
                                <label htmlFor="isUnique" className="text-lg xs:text-xl cursor-pointer">This art is unique</label>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="amount" className="text-lg xs:text-xl">Stocks</label>
                                <input 
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    autoComplete="off"
                                    className="w-48 lg:w-52 bg-grey px-2 py-1 text-sm xs:text-base font-semibold rounded-sm"
                                    disabled={newArtData.isUnique}
                                    value={newArtData.amount ?? ""}
                                    onChange={handleArtInputChange}
                                />
                            </div>
                            <button type="submit" className="w-48 lg:w-52 py-2 bg-altBrand rounded mt-4 text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
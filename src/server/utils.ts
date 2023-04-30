/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export interface Item {
  id: string;
  name: string;
  category: string;
  artist: string;
  description: string;
  imageName: string;
  price: number;
  isUnique: boolean;
  amount: number;
}

//has image extra, which is not part of item db
export interface NewItem {
  id: string;
  name: string;
  category: string;
  artist: string;
  description: string;
  imageName: string;
  image: string;
  price: number;
  isUnique: boolean;
  amount: number;
}

export interface Profile {
  firstname: string;
  middlename?: string;
  surname: string;
  address: string;
  mobile: string;
}

export interface Order {
  key: string;
  amount: number;
  datetime: Date;
}

//has extra check for image which isn't part of items, rather stored in arts drive
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isItem(item: any): item is NewItem {
  return (
    typeof item === "object" &&
    typeof item.name === "string" &&
    typeof item.category === "string" &&
    typeof item.artist === "string" &&
    typeof item.description === "string" &&
    typeof item.imageName === "string" &&
    typeof item.image === "string" &&
    typeof item.price === "number" &&
    typeof item.isUnique === "boolean" &&
    typeof item.amount === "number"
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isProfile(obj: any): obj is Profile {
  return (
    typeof obj.firstname === "string" &&
    (typeof obj.middlename === "string" ||
      typeof obj.middlename === "undefined") &&
    typeof obj.surname === "string" &&
    typeof obj.address === "string" &&
    typeof obj.mobile === "string"
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isOrder(obj: any): obj is Order {
  return (
    typeof obj.key === "string" &&
    typeof obj.amount === "number" &&
    obj.datetime instanceof Date &&
    !isNaN(obj.datetime.getTime())
  );
}


export interface sessionDataT {
  userName: string | undefined | null
  email: string | undefined | null
  image: string | undefined | null
  userId: string
}

export interface profileDataT {
  firstName: string | undefined
  middleName: string | undefined
  surName: string | undefined
  address: string | undefined
  mobile: string | undefined
}
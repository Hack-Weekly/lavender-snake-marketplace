/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export interface Item {
  name: string;
  artist: string;
  description: string;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isItem(item: any): item is Item {
  return (
    typeof item === "object" &&
    typeof item.name === "string" &&
    typeof item.artist === "string" &&
    typeof item.description === "string" &&
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

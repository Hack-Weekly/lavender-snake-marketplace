import { deta } from "~/server/deta";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export interface Item {
  name: string;
  artist: string;
  description: string;
  image: string;
  price: number;
  seller: string;
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
    typeof item.seller === "string"
  );
}

export const itemDb = deta.Base("items");

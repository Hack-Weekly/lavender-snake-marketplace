/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { itemDb } from "../itemUtils";

// GET all items.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let itemDbRes = await itemDb.fetch();
    let allItems = itemDbRes.items;

    // continue fetching until last is not seen
    while (itemDbRes.last) {
      itemDbRes = await itemDb.fetch({}, { last: itemDbRes.last });
      allItems = allItems.concat(itemDbRes.items);
    }
    if (allItems.length) {
      res.status(200).json(allItems);
    } else res.status(404).json(errorResponse(404));
  } else res.status(405).json(errorResponse(405));
}

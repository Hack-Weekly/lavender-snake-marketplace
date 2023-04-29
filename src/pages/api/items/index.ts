import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { isItem } from "~/server/utils";
import { imageDrive, itemDb } from "~/server/deta";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '2.5mb',
      }
  }
}

// POST a new item.


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { body } = req;
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      if (isItem(body)) {
        const data = {
          id: body.id,
          name: body.name,
          category: body.category,
          artist: body.artist,
          description: body.description,
          imageName: body.imageName,
          price: body.price >= 0 ? body.price : 1,
          seller: session.user.id,
          isUnique: body.isUnique,
          amount: body.amount >= 0 ? body.amount : 1,
        };

        const imageName:string = body.imageName;
        const image:string = body.image;
        
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          await imageDrive.put(imageName, {data: image});
          const item = await itemDb.put(data, data.id);
          res.status(200).json(item);
        } catch (error) {
          res.status(500).json({ error: error });
        }
      } else res.status(500).json({ error: "Invalid Item." });
    } else res.status(401).json(errorResponse(401));
  } else if (req.method === "GET") {
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

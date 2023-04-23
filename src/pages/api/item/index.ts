import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { isItem, itemDb } from "~/server/itemUtils";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
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
          name: body.name,
          artist: body.artist,
          description: body.description,
          image: body.image,
          price: body.price,
          seller: body.seller,
        };
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          const item = await itemDb.put(data);
          res.status(200).json(item);
        } catch (error) {
          res.status(500).json({ error: error });
        }
      } else res.status(500).json({ error: "Invalid Item." });
    } else res.status(401).json(errorResponse(401));
  } else res.status(405).json(errorResponse(405));
}
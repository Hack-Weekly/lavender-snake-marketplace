import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { itemDb } from "~/server/deta";
// GET item data.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { userId } = req.query;
  if (req.method === "GET") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const item = await itemDb.fetch({"seller": userId});
    if (item) {
      res.status(200).json(item);
    } else res.status(404).json(errorResponse(404));
  } else res.status(405).json(errorResponse(405));
}

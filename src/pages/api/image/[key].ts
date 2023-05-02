import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { imageDrive } from "~/server/deta";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { key } = req.query;
  if (req.method === "GET") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const blobItem = await imageDrive.get(key as string);
    if (blobItem) {
      const arrayBufferItem = await blobItem.arrayBuffer();
      const item = Buffer.from(arrayBufferItem);
      res.status(200).send(item);
    } else res.status(404).json(errorResponse(404));
  } else if (req.method === "DELETE") {
    const deleteResponse = await imageDrive.delete(key as string);

    //deta doesn't send any response except null in all cases
    res.status(200).json(deleteResponse);
  } else res.status(405).json(errorResponse(405));
}
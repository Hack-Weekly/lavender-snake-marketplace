import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { profileDb } from "~/server/deta";
// GET profile data.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;
  if (req.method === "GET") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const profile = await profileDb.get(userId as string);
    if (profile) {
      res.status(200).json(profile);
    } else res.status(404).json(errorResponse(404));
  } else res.status(405).json(errorResponse(405));
}
